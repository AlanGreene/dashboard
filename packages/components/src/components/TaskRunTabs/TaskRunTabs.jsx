/*
Copyright 2025 The Tekton Authors
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

import { Tab, TabListVertical } from '@carbon/react';
import {
  dashboardReasonSkipped,
  getStatus,
  labels as labelConstants
} from '@tektoncd/dashboard-utils';

import FormattedDuration from '../FormattedDuration';
import StatusIcon from '../StatusIcon';

const defaults = {
  skippedTasks: [],
  taskRuns: []
};

export default function TaskRunTabs({
  isSelectedTaskMatrix,
  onSelect,
  preTaskRun,
  selectedTaskId,
  selectedTaskRunName,
  skippedTasks = defaults.skippedTasks,
  taskRuns = defaults.taskRuns
}) {
  const erroredTask = taskRuns
    .filter(Boolean)
    .find(taskRun => getStatus(taskRun).status === 'False');

  let hasSelectedTask = false;

  return (
    <TabListVertical activation="manual" className="tkn--task-list">
      {preTaskRun ? (
        <Tab _renderIcon={preTaskRun.icon} _secondaryLabel="duration…">
          <div className="tkn--task-name">
            {preTaskRun.icon}
            {preTaskRun.title}
          </div>
          <div className="cds--tabs__nav-item-secondary-label">
            {preTaskRun.duration ? (
              <FormattedDuration milliseconds={preTaskRun.duration} />
            ) : (
              '-'
            )}
          </div>
        </Tab>
      ) : null}
      {taskRuns.map((taskRun, index) => {
        const { uid, labels, name } = taskRun.metadata;
        const {
          [labelConstants.DASHBOARD_DISPLAY_NAME]: displayName,
          [labelConstants.PIPELINE_TASK]: pipelineTaskName
        } = labels;

        const title = displayName || pipelineTaskName || name;
        let duration;
        if (taskRun.status) {
          const createdTime = new Date(taskRun.status.startTime).getTime();
          const endTime = new Date(taskRun.status.completionTime).getTime();
          duration = endTime - createdTime;
        }

        const taskRunStatus = getStatus(taskRun);
        let { reason } = taskRunStatus;
        const { status } = taskRunStatus;
        const selected =
          // should only have 1 expanded task at a time (may change in a future design)
          // we expand the first task matching the rules below
          !hasSelectedTask &&
          // no explicitly selected task and current task failed, expand this one
          ((!selectedTaskId && erroredTask?.metadata.uid === uid) ||
            // or this task is the selected one
            (selectedTaskId === pipelineTaskName &&
              // if it's a matrixed TaskRun only expand if it matches the specified taskRunName
              // if it's not a matrixed TaskRun, or no taskRunName specified, this is the first match so expand it
              (selectedTaskRunName ? name === selectedTaskRunName : true)) ||
            // otherwise there's no error and no explicit selection, expand the first task by default
            (!erroredTask && !selectedTaskId && index === 0));

        if (!hasSelectedTask && selected) {
          hasSelectedTask = true;
        }

        if (
          !reason &&
          skippedTasks.find(
            skippedTask => skippedTask.name === pipelineTaskName
          )
        ) {
          reason = dashboardReasonSkipped;
        }

        // reason={reason}
        // selectDefaultStep={selectDefaultStep}
        // selectedRetry={expanded && selectedRetry}
        // selectedStepId={selectedStepId}
        // succeeded={status}

        return (
          <Tab key={uid}>
            <div className="tkn--task-name">
              <StatusIcon status="True" />
              {title}
            </div>
            <div className="cds--tabs__nav-item-secondary-label">
              {duration ? <FormattedDuration milliseconds={duration} /> : '-'}
            </div>
          </Tab>
        );
      })}
    </TabListVertical>
  );
}
