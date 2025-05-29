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

// import { useIntl } from 'react-intl';

import StatusIcon from '../StatusIcon';

const TaskRunTabs = ({
  isSelectedTaskMatrix,
  onSelect,
  preTaskRun,
  selectedTaskId,
  selectedTaskRunName,
  skippedTasks,
  taskRuns
}) => {
  const erroredTask = taskRuns
    .filter(Boolean)
    .find(taskRun => getStatus(taskRun).status === 'False');

  let hasSelectedTask = false;

  return (
    <TabListVertical activation="manual" className="tkn--task-list">
      {/* TODO: agent icon */}
      {preTaskRun ? (
        <Tab _renderIcon={preTaskRun.icon} secondaryLabel="duration…">
          <div className="tkn--task-name">
            {preTaskRun.icon}
            {preTaskRun.title}
          </div>
          <div className="cds--tabs__nav-item-secondary-label">duration…</div>
        </Tab>
      ) : null}
      {taskRuns.map(taskRun => {
        const { uid, labels, name } = taskRun.metadata;
        const {
          [labelConstants.DASHBOARD_DISPLAY_NAME]: displayName,
          [labelConstants.PIPELINE_TASK]: pipelineTaskName
        } = labels;

        const title = displayName || pipelineTaskName || name;
        return (
          <Tab key={title}>
            <div className="tkn--task-name">
              <StatusIcon status="True" />
              {title}
            </div>
            <div className="cds--tabs__nav-item-secondary-label">duration…</div>
          </Tab>
        );
      })}
    </TabListVertical>
  );
};

export default TaskRunTabs;
