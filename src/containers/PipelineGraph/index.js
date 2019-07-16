import { getStore } from '../../store/index';
import { getPipeline, getTasks } from '../../reducers';
import tekton2graph from './tekton2graph';
import { isPipeline, isPipelineRun } from './lib';

import './flow.scss';

const debug = console.log.bind(console);

const tab = undefined; // kui layout - required by some of the libs

const flowView = async (jsons, run) => {
  const [graph, graph2doms] = await Promise.all([
    tekton2graph(jsons, run), // generate the graph model
    import('./graph2doms') // overlap that work with importing the graph renderer
    // import('@kui-shell/plugin-wskflow/lib/inject') // and also with injecting the graph css
  ]);

  console.log({ jsons, run, graph });

  // injectCSS.default();

  const content = document.createElement('div');
  content.classList.add('padding-content');
  content.style.flex = '1';
  content.style.display = 'flex';

  await graph2doms.default(tab, graph, content, graph.runs, {
    layoutOptions: {
      'elk.separateConnectedComponents': false,
      'elk.spacing.nodeNode': 10,
      'elk.padding': '[top=7.5,left=5,bottom=7.5,right=5]',
      hierarchyHandling: 'INCLUDE_CHILDREN' // since we have hierarhical edges, i.e. that cross-cut subgraphs
    }
  });
  debug('content', content);

  const badges = ['Tekton'];
  if (!run) {
    if (jsons.find(_ => _.kind === 'PipelineRun' || _.kind === 'TaskRun')) {
      badges.push({
        title: 'Runnable',
        css: 'green-background'
      });
    } else {
      badges.push({
        title: 'Not Runnable',
        css: 'yellow-background'
      });
    }
  }

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
    name: jsons[0].metadata.name,
    prettyType: run ? 'PipelineRun' : 'Pipeline',
    duration,
    badges,
    content,
    model: jsons
  };
};

export default async resource => {
  const state = getStore().getState();
  console.log({ FOO: 'BAR', resource });
  if (isPipelineRun(resource)) {
    const pipeline = getPipeline(state, {
      name: resource.spec.pipelineRef.name,
      namespace: resource.metadata.namespace
    });
    // TODO: API calls for pipeline + tasks if not already loaded
    console.log({ pipeline });
    if (!pipeline) {
      return null;
    }
    const tasks = getTasks(state);
    return flowView([pipeline].concat(tasks), resource);
  }

  if (isPipeline(resource)) {
    // fetch any accompanying Tasks
    const tasks = getTasks(state);
    return flowView([resource].concat(tasks));
  }

  return flowView([resource]);
};
