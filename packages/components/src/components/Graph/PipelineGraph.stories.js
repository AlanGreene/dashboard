/*
Copyright 2019-2020 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { action } from '@storybook/addon-actions';
import dagre from 'dagre';

import PipelineGraph from './PipelineGraph';

import pipeline from './examples/pipeline.json';
import pipelineRun from './examples/pipelineRun.json';
import tasks from './examples/tasks.json';

export default {
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  title: 'Experimental/Components/Graph/PipelineGraph'
};

export const Base = () => (
  <PipelineGraph
    onClickStep={action('onClickStep')}
    onClickTask={action('onClickTask')}
    pipeline={pipeline}
    pipelineRun={pipelineRun}
    tasks={tasks}
  />
);

function getPipelineRunDAG() {
  const g = new dagre.graphlib.Graph({
    directed: true,
    compound: true
  });

  g.setGraph({
    rankdir: 'lr',
    align: 'dl',
    nodesep: 50,
    edgesep: 10,
    ranksep: 50,
    marginx: 0,
    marginy: 0
  });

  g.setDefaultNodeLabel(id => ({ label: id, width: 180, height: 30 }));
  g.setDefaultEdgeLabel((v, w, name) => ({
    label: `${v}-${w}${name || ''}`
    // width: 50,
    // height: 20
  }));

  // Add nodes to the graph. The first argument is the node id. The second is
  // metadata about the node. Use the default above if no value provided for the
  // second argument.
  g.setNode('skaffold-unit-tests');
  g.setNode('build-skaffold-app');
  g.setNode('build-skaffold-web');
  g.setNode('deploy-app');
  g.setNode('deploy-web');

  g.setEdge('skaffold-unit-tests', 'build-skaffold-app');
  g.setEdge('skaffold-unit-tests', 'build-skaffold-web');
  g.setEdge('build-skaffold-app', 'deploy-app');
  g.setEdge('build-skaffold-web', 'deploy-web');

  const sources = g.sources();
  const sinks = g.sinks();

  g.setNode('start');
  g.setNode('end');

  sources.forEach(source => {
    g.setEdge('start', source);
  });
  sinks.forEach(sink => {
    g.setEdge(sink, 'end');
  });

  dagre.layout(g);
  return g;
}

export const Dagre = () => {
  const dag = getPipelineRunDAG();
  const { width: graphWidth, height: graphHeight } = dag.graph();
  console.log({ dag, graphWidth, graphHeight });
  const nodes = dag.nodes().map(v => {
    // x,y is the center of the node
    // for labels it's the center of the edge label (label must have width/height)
    const { label, width, height, x, y } = dag.node(v);
    return (
      <div
        key={v}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          position: 'absolute',
          top: y - height / 2,
          left: x - width / 2,
          outline: '1px solid gray'
        }}
      >
        {label}
      </div>
    );
  });
  dag.edges().forEach(e => {
    console.log(`Edge ${e.v} -> ${e.w}: ${JSON.stringify(dag.edge(e))}`);
  });

  return <div style={{ position: 'relative' }}>{nodes}</div>;
};
