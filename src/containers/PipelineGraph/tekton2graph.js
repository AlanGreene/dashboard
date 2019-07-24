import { isPipeline } from './lib';

const defaultHeight = 13;
const defaultCharWidth = 3.25;

function success(conditions) {
  const successCondition = conditions.find(_ => _.type === 'Succeeded');
  return successCondition && successCondition.status === 'True';
}

const makeSubGraph = (
  label = 'root',
  { children, type, visited } = { children: [] }
) => {
  return {
    id: label,
    label,
    children,
    visited,
    edges: [],
    nParents: 0,
    nChildren: 0,
    type
  };
};

const stepId = (taskRef, step) => `__step__${taskRef.name}__${step.name}`;

const getPipeline = jsons => {
  const declaredPipeline = jsons.find(_ => _.kind === 'Pipeline');

  if (isPipeline(declaredPipeline)) {
    return declaredPipeline;
  }
  const tasks = jsons.filter(_ => _.kind === 'Task');
  if (tasks.length === 0) {
    throw new Error('No pipeline defined, and no Tasks defined');
  } else {
    const pipeline = {
      apiVersion: 'tekton.dev/v1alpha1',
      kind: 'Pipeline',
      metadata: {
        name: 'pipeline'
      },
      spec: {
        tasks: tasks.map(task => ({
          name: task.metadata.name,
          taskRef: {
            name: task.metadata.name
          }
        }))
      }
    };

    return pipeline;
  }
};

function addEdge(
  graph,
  parent,
  child,
  { singletonSource, singletonTarget, hasRuns }
) {
  if (!parent.ports) {
    parent.ports = []; // eslint-disable-line
  }
  if (!child.ports) {
    child.ports = []; // eslint-disable-line
  }

  const targetPort =
    `${child.id}-` + (singletonTarget ? 'pTargetSingleton' : `p${child.ports.length}`); // eslint-disable-line
  if (!child.ports.find(_ => _.id === targetPort)) {
    child.ports.push({ id: targetPort });
  }

  const sourcePort =
    `${parent.id}-` + (singletonSource ? 'pSourceSingleton' : `p${parent.ports.length}`); // eslint-disable-line
  if (!parent.ports.find(_ => _.id === sourcePort)) {
    parent.ports.push({ id: sourcePort });
  }

  graph.edges.push({
    id: `${parent.id}-${child.id}`,
    source: parent.id,
    sourcePort,
    target: child.id,
    targetPort,
    visited: !hasRuns ? undefined : !!(parent.visited && child.visited)
  });

  child.nParents++; // eslint-disable-line
  parent.nChildren++; // eslint-disable-line
}

/*
 * Convert JSON form of Tekton resources into a graph model
 * compatible wiht the ELK graph layout toolkit.
 */
export default async function({ expandedTasks, jsons, run }) {
  const pipeline = getPipeline(jsons);

  // map from Task.metadata.name to Task
  const taskName2Task = jsons
    .filter(_ => _.kind === 'Task')
    .reduce((accumulator, task) => {
      accumulator[task.metadata.name] = task; // eslint-disable-line
      return accumulator;
    }, {});

  // map from Pipeline.Task.name to Task
  const taskRefName2Task = pipeline.spec.tasks.reduce(
    (accumulator, taskRef) => {
      accumulator[taskRef.name] = taskName2Task[taskRef.taskRef.name]; // eslint-disable-line
      return accumulator;
    },
    {}
  );

  // map from Pipeline.Task.name to Pipeline.Task
  const taskRefName2TaskRef = pipeline.spec.tasks.reduce(
    (accumulator, taskRef) => {
      accumulator[taskRef.name] = taskRef; // eslint-disable-line
      return accumulator;
    },
    {}
  );

  // do we have TaskRun information? if so, construct a map from
  // TaskName to an index into the taskRuns array
  const runs = run && run.status.taskRuns;
  const startVisit =
    (run && [
      {
        response: {
          success: true
        }
      }
    ]) ||
    [];
  const endVisit =
    (run &&
      run.status.completionTime && [
        {
          response: {
            success: success(run.status.conditions)
          }
        }
      ]) ||
    [];
  const runInfo =
    runs &&
    Object.keys(runs).reduce((accumulator, _) => {
      const taskRun = runs[_];
      const taskRefName = taskRun.pipelineTaskName;
      const task = taskRefName2Task[taskRefName];

      if (task) {
        task.visitedIdx = accumulator.length;
        accumulator.push({
          response: {
            success: success(taskRun.status.conditions)
          }
        });

        if (taskRun.status.steps) {
          taskRun.status.steps.forEach(stepRun => {
            let success; // eslint-disable-line
            if (stepRun.terminated) {
              success = stepRun.terminated.reason !== 'Error';
            }

            const step = task.spec.steps.find(_ => _.name === stepRun.name); // eslint-disable-line
            if (step) {
              step.visitedIdx = accumulator.length;
              accumulator.push({
                response: {
                  success
                }
              });
            }
          });
        }
      }
      return accumulator;
    }, startVisit.concat(endVisit));

  const graph = {
    id: 'root',
    label: 'root',
    edges: [],
    children: [],
    nChildren: 0,
    nParents: 0,
    runs: runInfo,
    properties: {
      maxLabelLength: 24,
      fontSize: '4px'
    }
  };

  const start = {
    id: 'Entry',
    label: 'start',
    type: 'Entry',
    width: 18,
    height: 18,
    nChildren: 0,
    nParents: 0,
    visited: run && [0], // we carefully placed the start visit record in the first position (above)
    properties: {
      title: 'The flow starts here',
      fontSize: '4.5px'
    }
  };
  const end = {
    id: 'Exit',
    label: 'end',
    type: 'Exit',
    width: 18,
    height: 18,
    nChildren: 0,
    nParents: 0,
    visited: run && [1], // we carefully placed the end visit record in the second position (above)
    properties: {
      title: 'The flow ends here',
      fontSize: '4.5px'
    }
  };

  const symbolTable = pipeline.spec.tasks.reduce((accumulator, taskRef) => {
    const task = taskName2Task[taskRef.taskRef.name];

    let node;
    if (
      task &&
      expandedTasks[taskRef.name] &&
      task.spec.steps &&
      task.spec.steps.length > 0
    ) {
      const subgraph = makeSubGraph(taskRef.name, {
        type: 'Task',
        visited: task.visitedIdx !== undefined ? [task.visitedIdx] : undefined,
        children: task.spec.steps.map(step => {
          const stepNode = {
            id: stepId(taskRef, step),
            label: step.name,
            width: step.name.length * defaultCharWidth,
            height: defaultHeight,
            nChildren: 0,
            nParents: 0,
            visited:
              step.visitedIdx !== undefined ? [step.visitedIdx] : undefined,
            type: 'Step'
          };

          accumulator[stepNode.id] = stepNode; // eslint-disable-line
          return stepNode;
        })
      });

      subgraph.children.slice(1).reduce((cur, next) => {
        addEdge(subgraph, cur, next, { hasRuns: runs !== undefined });
        return next;
      }, subgraph.children[0]);

      node = subgraph;
    } else {
      node = {
        id: taskRef.name,
        label: taskRef.name,
        width: taskRef.name.length * defaultCharWidth,
        height: defaultHeight,
        nChildren: 0,
        nParents: 0,
        type: 'Task',
        visited:
          task && task.visitedIdx !== undefined ? [task.visitedIdx] : undefined
      };
    }

    accumulator[taskRef.name] = node; // eslint-disable-line
    graph.children.push(node);

    return accumulator;
  }, {});

  const lastStepOf = node => {
    const taskRef = taskRefName2TaskRef[node.id];
    const task = taskRefName2Task[node.id];

    return (
      task &&
      symbolTable[stepId(taskRef, task.spec.steps[task.spec.steps.length - 1])]
    );
  };

  const firstStepOf = node => {
    const taskRef = taskRefName2TaskRef[node.id];
    const task = taskRefName2Task[node.id];

    return task && symbolTable[stepId(taskRef, task.spec.steps[0])];
  };

  const _addEdge = (parent, child, opts = { hasRuns: runs !== undefined }) => { // eslint-disable-line
    const lastStepOfParentTask = lastStepOf(parent);
    const firstStepOfChildTask = firstStepOf(child);

    if (lastStepOfParentTask && firstStepOfChildTask) {
      addEdge(graph, lastStepOfParentTask, firstStepOfChildTask, {
        singletonSource: true,
        singletonTarget: true,
        hasRuns: runs !== undefined
      });
      parent.nChildren++; // eslint-disable-line
      child.nParents++; // eslint-disable-line
    } else if (!lastStepOfParentTask && firstStepOfChildTask) {
      addEdge(graph, parent, firstStepOfChildTask, {
        singletonSource: opts.singletonSource || false,
        singletonTarget: true,
        hasRuns: runs !== undefined
      });
      child.nParents++; // eslint-disable-line
    } else if (lastStepOfParentTask && !firstStepOfChildTask) {
      addEdge(graph, lastStepOfParentTask, child, {
        singletonSource: true,
        singletonTarget: opts.singletonTarget || false,
        hasRuns: runs !== undefined
      });
      parent.nChildren++; // eslint-disable-line
    } else {
      addEdge(
        graph,
        parent,
        child,
        Object.assign({}, opts, { hasRuns: runs !== undefined })
      );
    }
  };

  /**
   * Simple wrapper around addEdge that interfaces with the symbol
   * table to turn names into tasks
   */
  const wire = (parentTaskRefName, childTaskRef) => {
    const parent = symbolTable[parentTaskRefName];
    const child = symbolTable[childTaskRef.name];

    if (parent) {
      _addEdge(parent, child);
    } else {
      console.error('parent not found', childTaskRef); // eslint-disable-line no-console
    }
  };

  pipeline.spec.tasks.forEach(task => {
    if (task.runAfter) {
      task.runAfter.forEach(parentTaskName => {
        wire(parentTaskName, task);
      });
    }

    if (task.resources) {
      const wirePorts = ports => {
        if (ports) {
          ports.forEach(port => {
            if (port.from) {
              port.from.forEach(parentTaskName => {
                wire(parentTaskName, task);
              });
            }
          });
        }
      };

      wirePorts(task.resources.inputs);
      wirePorts(task.resources.outputs);
    }
  });

  // link start node
  graph.children
    .filter(child => child.nParents === 0)
    .forEach(child =>
      _addEdge(start, child, {
        singletonSource: true,
        hasRuns: graph.runs !== undefined
      })
    );

  // link end node
  graph.children
    .filter(parent => parent.nChildren === 0)
    .forEach(parent =>
      _addEdge(parent, end, {
        singletonTarget: true,
        hasRuns: graph.runs !== undefined
      })
    );

  // add the start and end nodes after we've done the linking
  graph.children.push(start);
  graph.children.push(end);

  return graph;
}
