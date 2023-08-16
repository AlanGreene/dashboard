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

import React from 'react';
import { useIntl } from 'react-intl';
import { getStatus, labels as labelConstants } from '@tektoncd/dashboard-utils';
import Task from '../Task';

const defaults = {
  taskRuns: []
};

const TaskTree = ({
  onRetryChange,
  onSelect,
  selectedRetry,
  selectedStepId,
  selectedTaskId,
  taskRuns = defaults.taskRuns
}) => {
  const intl = useIntl();

  if (!taskRuns) {
    return <div />;
  }

  const erroredTask = taskRuns
    .filter(Boolean)
    .find(taskRun => getStatus(taskRun).status === 'False');

  return (
    <ol className="tkn--task-tree">
      {taskRuns.map((taskRun, index) => {
        if (!taskRun) {
          return null;
        }
        const { uid, labels, name } = taskRun.metadata;
        const {
          [labelConstants.DASHBOARD_DISPLAY_NAME]: displayName,
          [labelConstants.PIPELINE_TASK]: pipelineTaskName
          // [labelConstants.DASHBOARD_RETRY_NAME]: retryName
        } = labels;

        let taskRunToUse = taskRun;
        if (selectedRetry && selectedTaskId === pipelineTaskName) {
          taskRunToUse = {
            ...taskRunToUse,
            status: taskRunToUse.status?.retriesStatus?.[selectedRetry]
          }
        };

        const { reason, status } = getStatus(taskRunToUse);
        const { steps } = taskRunToUse.status || {};
        const expanded =
          (!selectedTaskId && erroredTask?.metadata.uid === uid) ||
          selectedTaskId === pipelineTaskName ||
          (!erroredTask && !selectedTaskId && index === 0);
        const selectDefaultStep = !selectedTaskId;

        const taskDisplayName = displayName || pipelineTaskName || name;

        return (
          <Task
            displayName={taskDisplayName}
            expanded={expanded}
            id={pipelineTaskName}
            key={uid}
            onRetryChange={onRetryChange}
            onSelect={onSelect}
            reason={reason}
            selectDefaultStep={selectDefaultStep}
            selectedRetry={expanded && selectedRetry}
            selectedStepId={selectedStepId}
            steps={steps}
            succeeded={status}
            taskRun={taskRun}
          />
        );
      })}
    </ol>
  );
};

export default TaskTree;
