/*
Copyright 2019 The Tekton Authors
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

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LazyLog, ScrollFollow } from 'react-lazylog';

import Log from '../../components/Log';
import { getPodLog, getPodLogURI } from '../../api';

export class LogContainer extends Component {
  state = { logs: '' };

  componentDidMount() {
    this.loadLog();
    this.initPolling();
  }

  componentDidUpdate(prevProps) {
    const { match, stepName, podName } = this.props;
    const { namespace } = match.params;
    const {
      match: prevMatch,
      stepName: prevStepName,
      podName: prevPodName
    } = prevProps;
    const { namespace: prevNamespace } = prevMatch.params;

    if (
      podName !== prevPodName ||
      stepName !== prevStepName ||
      namespace !== prevNamespace
    ) {
      this.loadLog();
    }
    this.initPolling();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getLazyLog() {
    const { stepName, podName, namespace } = this.props;
    if (!podName) {
      return null;
    }
    const container = `step-${stepName}`;
    const uri = getPodLogURI({
      container,
      name: podName,
      namespace
    });

    return (
      <ScrollFollow
        startFollowing
        render={({ follow, onScroll }) => (
          <LazyLog
            enableSearch
            extraLines={1}
            follow={follow}
            onScroll={onScroll}
            stream={false}
            url={uri}
          />
        )}
      />
    );
  }

  initPolling = () => {
    const { stepStatus } = this.props;
    if (!this.timer && stepStatus && !stepStatus.terminated) {
      this.timer = setInterval(() => this.loadLog(), 4000);
    }
    if (this.timer && stepStatus && stepStatus.terminated) {
      clearInterval(this.timer);
    }
  };

  async loadLog() {
    const { stepName, podName, namespace } = this.props;
    if (podName) {
      try {
        const container = `step-${stepName}`;
        const logs = await getPodLog({
          container,
          name: podName,
          namespace
        });
        this.setState({ logs: logs || undefined });
      } catch {
        this.setState({ logs: 'Unable to fetch log' });
      }
    }
  }

  render() {
    const { stepName } = this.props;
    const { logs } = this.state;
    return (
      <>
        {this.getLazyLog()}
        <Log logs={logs} stepName={stepName} />
      </>
    );
  }
}

export default withRouter(LogContainer);
