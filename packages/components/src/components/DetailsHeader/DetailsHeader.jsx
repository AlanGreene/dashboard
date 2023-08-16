/*
Copyright 2019-2023 The Tekton Authors
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
import { Dropdown } from 'carbon-components-react';
import { Pending24 as DefaultIcon } from '@carbon/icons-react';
import { injectIntl } from 'react-intl';
import { getStatus, getTranslateWithId } from '@tektoncd/dashboard-utils';

import FormattedDuration from '../FormattedDuration';
import StatusIcon from '../StatusIcon';

class DetailsHeader extends Component {
  getDuration() {
    const { intl, stepStatus, taskRun } = this.props;
    let { completionTime: endTime, startTime } = taskRun.status || {};
    if (stepStatus) {
      ({ finishedAt: endTime, startedAt: startTime } =
        stepStatus.terminated || {});
    }

    if (!startTime || !endTime) {
      return null;
    }

    return (
      <span className="tkn--run-details-time">
        {intl.formatMessage(
          {
            id: 'dashboard.run.duration',
            defaultMessage: 'Duration: {duration}'
          },
          {
            duration: (
              <FormattedDuration
                milliseconds={
                  new Date(endTime).getTime() - new Date(startTime).getTime()
                }
              />
            )
          }
        )}
      </span>
    );
  }

  statusLabel() {
    const { exitCode, hasWarning, intl, reason, status, taskRun } = this.props;
    const { reason: taskReason, status: taskStatus } = getStatus(taskRun);

    if (
      status === 'cancelled' ||
      (status === 'terminated' &&
        (reason === 'TaskRunCancelled' || reason === 'TaskRunTimeout'))
    ) {
      return intl.formatMessage({
        id: 'dashboard.taskRun.status.cancelled',
        defaultMessage: 'Cancelled'
      });
    }

    if (status === 'running') {
      return intl.formatMessage({
        id: 'dashboard.taskRun.status.running',
        defaultMessage: 'Running'
      });
    }
    if (status === 'terminated') {
      if (reason === 'Completed') {
        return hasWarning
          ? intl.formatMessage(
              {
                id: 'dashboard.taskRun.status.succeeded.warning',
                defaultMessage: 'Completed with exit code {exitCode}'
              },
              { exitCode }
            )
          : intl.formatMessage({
              id: 'dashboard.taskRun.status.succeeded',
              defaultMessage: 'Completed'
            });
      }
      return intl.formatMessage({
        id: 'dashboard.taskRun.status.failed',
        defaultMessage: 'Failed'
      });
    }

    if (taskStatus === 'Unknown' && taskReason === 'Pending') {
      return intl.formatMessage({
        id: 'dashboard.taskRun.status.waiting',
        defaultMessage: 'Waiting'
      });
    }
    // task is done, step did not run
    return intl.formatMessage({
      id: 'dashboard.taskRun.status.notRun',
      defaultMessage: 'Not run'
    });
  }

  render() {
    const {
      displayName,
      hasWarning,
      intl,
      onRetryChange,
      retry,
      taskRun,
      type = 'step'
    } = this.props;
    let { reason, status } = this.props;
    let statusLabel;

    const duration = this.getDuration();

    if (type === 'taskRun') {
      ({ reason, status } = getStatus(taskRun));
      statusLabel =
        reason ||
        intl.formatMessage({
          id: 'dashboard.taskRun.status.pending',
          defaultMessage: 'Pending'
        });
    } else {
      statusLabel = this.statusLabel();
    }

    // if (taskRun.status?.retriesStatus) {
    //   taskRun.status.retriesStatus.forEach((retryStatus, index) => {
    //     const retryRun = { ...taskRun };
    //     retryRun.status = retryStatus;
    //     retryPodIndex[retryStatus.podName] = index;
    //     acc.push(retryRun);
    //   });
    // }

    return (
      <header
        className="tkn--step-details-header"
        data-status={status}
        data-reason={reason}
      >
        <h2 className="tkn--details-header--heading">
          <StatusIcon
            DefaultIcon={DefaultIcon}
            hasWarning={hasWarning}
            reason={reason}
            status={status}
            {...(type === 'step' ? { type: 'inverse' } : null)}
          />
          <span className="tkn--run-details-name" title={displayName}>
            {displayName}
          </span>
          {taskRun.status?.retriesStatus ? (
            <Dropdown
              hideLabel
              id="taskRunRetriesDropdown"
              items={taskRun.status.retriesStatus.map((retryStatus, index) => ({ id: index, text: `Retry ${index}` })).concat([{ id: '', text: `Retry ${taskRun.status.retriesStatus.length}` }])}
              itemToString={item => (item ? item.text : '')}
              label="Retries"
              onChange={({ selectedItem }) => {
                onRetryChange(selectedItem.id);
              }}            
              selectedItem={{ id: retry ?? '', text: `Retry ${retry ?? taskRun.status.retriesStatus.length}` }}
              size="sm"
              titleText="Retries"
              translateWithId={getTranslateWithId(intl)}
              type="inline"
            />
          ) : null}
          <span className="tkn--status-label">{statusLabel}</span>
        </h2>
        {duration}
      </header>
    );
  }
}

DetailsHeader.defaultProps = {
  taskRun: {}
};

export default injectIntl(DetailsHeader);
