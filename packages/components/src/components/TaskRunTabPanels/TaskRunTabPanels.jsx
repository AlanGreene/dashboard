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

import { TabPanel, TabPanels } from '@carbon/react';
import {
  dashboardReasonSkipped,
  getStatus,
  labels as labelConstants
} from '@tektoncd/dashboard-utils';

const TaskRunTabPanels = ({ preTaskRun, taskRuns }) => {
  return (
    <TabPanels>
      {/* only render panel content when active */}
      {preTaskRun ? <TabPanel>{preTaskRun.content}</TabPanel> : null}
      {taskRuns.map((taskRun, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TabPanel key={index}>
          <pre>
            <code>{JSON.stringify(taskRun, null, 2)}</code>
          </pre>
        </TabPanel>
      ))}
    </TabPanels>
  );
};

export default TaskRunTabPanels;
