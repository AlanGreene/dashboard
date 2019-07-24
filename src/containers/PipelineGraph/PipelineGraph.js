import React, { Component } from 'react';

import createPipelineGraph from './lib';

import './flow.scss';

export default class PipelineGraph extends Component {
  state = {
    expandedTasks: {}
  };

  componentDidMount() {
    this.drawGraph();
  }

  componentDidUpdate() {
    this.drawGraph();
  }

  onClickTask = taskName => {
    console.log({ onClickTask: taskName });
  };

  onToggleTask = taskName => {
    this.setState(({ expandedTasks }) => ({
      expandedTasks: {
        ...expandedTasks,
        [taskName]: !expandedTasks[taskName]
      }
    }));
  };

  drawGraph() {
    const { clusterTasks, pipeline, pipelineRun, tasks } = this.props;
    const { expandedTasks } = this.state;
    createPipelineGraph(pipelineRun || pipeline, {
      container: this.container,
      expandedTasks,
      onClickTask: this.onClickTask,
      onToggleTask: this.onToggleTask,
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
