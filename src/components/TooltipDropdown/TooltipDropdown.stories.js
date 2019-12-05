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

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Dropdown } from 'carbon-components-react';

import TooltipDropdown from './TooltipDropdown';

import CheckmarkFilled from '@carbon/icons-react/lib/checkmark--filled/16';
import CloseFilled from '@carbon/icons-react/lib/close--filled/16';
import { Spinner } from '@tektoncd/dashboard-components';

const props = {
  id: 'tooltip-dropdown-id',
  label: 'Select an item',
  items: ['item 1', 'item 2', 'item 3'],
  loading: false
};

const items = [
  {
    id: 'option-s1',
    label: 'skaffold-unit-tests',
    type: 'TaskRun',
    status: 'success'
  },
  {
    id: 'option-s2',
    label: 'run-tests',
    type: 'step',
    status: 'success'
  },
  {
    id: 'option-1',
    label: 'build-skaffold-app',
    type: 'TaskRun',
    status: 'error'
  },
  {
    id: 'option-2',
    label: 'build',
    type: 'step',
    status: 'success'
  },
  {
    id: 'option-3',
    label: 'push',
    type: 'step',
    status: 'error'
  },
  {
    id: 'option-4',
    label: 'build-skaffold-web',
    type: 'TaskRun'
  }
];

const propsFunc = () => ({
  id: 'carbon-dropdown-example',
  type: 'default',
  label: 'Dropdown menu options',
  ariaLabel: 'Dropdown',
  disabled: false,
  light: false,
  titleText: '',
  helperText: '',
  invalid: false,
  invalidText: 'A valid value is required'
});

const itemToElement = ({ label, type, status }) => {
  let icon;
  switch (status) {
    case 'error':
      icon = <CloseFilled style={{ verticalAlign: 'bottom', fill: '#ad1625' }} />;
      break;
    case 'success':
      icon = <CheckmarkFilled style={{ verticalAlign: 'bottom', fill: '#5d8726' }} />;
      break;
    default:
      icon = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
  }
  return (
    <div style={{ verticalAlign: 'middle' }}>
      {type === 'step' && (
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      )}
      {icon}
      <span>&nbsp;</span>
      <span style={{ fontWeight: type === 'TaskRun' ? 'bold' : 'normal' }}>{label}</span>
    </div>
  );
};

storiesOf('TooltipDropdown', module)
  .add('default', () => {
    return <TooltipDropdown {...props} />;
  })
  .add('loading', () => {
    return <TooltipDropdown {...props} loading />;
  })
  .add('empty', () => {
    return <TooltipDropdown {...props} items={[]} />;
  })
  .add('taskruns', () => {
    return (
      <Dropdown
        {...propsFunc()}
        items={items}
        itemToString={item => (item ? <span><CloseFilled style={{ verticalAlign: 'bottom', fill: '#ad1625' }} /> build-skaffold-app: {item.label}</span> : '')}
        itemToElement={itemToElement}
        onChange={(...args) => console.log({ args })}
      />
    );
  });
