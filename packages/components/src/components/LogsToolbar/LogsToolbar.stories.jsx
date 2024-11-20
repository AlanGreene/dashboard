/*
Copyright 2019-2024 The Tekton Authors
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

import { useArgs } from '@storybook/preview-api';

import LogsToolbar from './LogsToolbar';

export default {
  component: LogsToolbar,
  title: 'LogsToolbar'
};

export const Default = {
  args: {
    name: 'some_filename.txt',
    showTimestamps: false,
    logLevels: {
      error: true,
      warning: true,
      info: true,
      notice: true,
      debug: false
    },
    url: '/some/logs/url'
  },
  render: args => {
    const [, updateArgs] = useArgs();

    return (
      <LogsToolbar
        {...args}
        onToggleLogLevel={logLevel =>
          // TODO: logs - Carbon bug
          // ignore duplicate synthetic event, need same fix as https://github.com/carbon-design-system/carbon/pull/17754 for MenuItemSelectable
          typeof logLevel.error === 'boolean' ||
          typeof logLevel.warning === 'boolean' ||
          typeof logLevel.info === 'boolean' ||
          typeof logLevel.notice === 'boolean' ||
          typeof logLevel.debug === 'boolean'
            ? updateArgs({ logLevels: { ...args.logLevels, ...logLevel } })
            : null
        }
        onToggleShowTimestamps={showTimestamps =>
          // TODO: logs - Carbon bug
          // ignore duplicate synthetic event, need same fix as https://github.com/carbon-design-system/carbon/pull/17754 for MenuItemSelectable
          typeof showTimestamps === 'boolean'
            ? updateArgs({ showTimestamps })
            : null
        }
      />
    );
  }
};
