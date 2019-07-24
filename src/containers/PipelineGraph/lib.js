import tekton2graph from './tekton2graph';
import graph2doms from './graph2doms';

const tektonAPI = /tekton.dev/;

// export function isTask(resource) {
//   return (
//     resource && tektonAPI.test(resource.apiVersion) && resource.kind === 'Task'
//   );
// }

export function isPipeline(resource) {
  return (
    resource &&
    tektonAPI.test(resource.apiVersion) &&
    resource.spec !== undefined &&
    resource.kind === 'Pipeline' &&
    resource.spec.tasks !== undefined
  );
}

export function isPipelineRun(resource) {
  return (
    tektonAPI.test(resource.apiVersion) &&
    resource.spec !== undefined &&
    resource.kind === 'PipelineRun' &&
    resource.spec.serviceAccount !== undefined &&
    resource.spec.pipelineRef !== undefined
  );
}

const flowView = async (
  jsons,
  { container, expandedTasks, onClickTask, onToggleTask, run }
) => {
  const graph = await tekton2graph({
    jsons,
    run,
    expandedTasks
  });

  console.log({ jsons, run, graph });

  await graph2doms(graph, container, graph.runs, {
    layoutOptions: {
      'elk.separateConnectedComponents': false,
      'elk.spacing.nodeNode': 10,
      'elk.padding': '[top=7.5,left=5,bottom=7.5,right=5]',
      hierarchyHandling: 'INCLUDE_CHILDREN' // since we have hierarhical edges, i.e. that cross-cut subgraphs
    },
    onClickTask,
    onToggleTask
  });

  const startTime =
    run && run.status && run.status.startTime && new Date(run.status.startTime);
  const endTime =
    run &&
    run.status &&
    run.status.completionTime &&
    new Date(run.status.completionTime);
  const duration =
    startTime && endTime && endTime.getTime() - startTime.getTime();

  return {
    duration,
    content: container,
    model: jsons
  };
};

export default (
  resource,
  { container, expandedTasks, onClickTask, onToggleTask, pipeline, tasks }
) => {
  console.log({ resource });
  if (isPipelineRun(resource)) {
    console.log({ pipeline });
    if (!pipeline) {
      return null;
    }
    return flowView([pipeline].concat(tasks), {
      container,
      expandedTasks,
      onClickTask,
      onToggleTask,
      run: resource
    });
  }

  if (isPipeline(resource)) {
    return flowView([resource].concat(tasks), {
      container,
      expandedTasks,
      onClickTask,
      onToggleTask
    });
  }

  // TODO: add support for TaskRun
  return flowView([resource], { container });
};
