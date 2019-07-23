import React, { Component } from 'react';

import createPipelineGraph from './lib';

import './flow.scss';

export default class PipelineGraph extends Component {
  componentDidMount() {
    this.drawGraph();
  }

  componentDidUpdate() {
    this.drawGraph();
  }

  drawGraph() {
    const { clusterTasks, pipeline, pipelineRun, tasks } = this.props;
    createPipelineGraph(pipelineRun || pipeline, {
      container: this.container,
      pipeline,
      tasks,
      clusterTasks
    });
  }

  render() {
    const { id } = this.props;
    return (
      <div
        className="pipelineGraphContainer"
        id={id}
        ref={ref => {
          this.container = ref;
        }}
      />
    );
  }
}
