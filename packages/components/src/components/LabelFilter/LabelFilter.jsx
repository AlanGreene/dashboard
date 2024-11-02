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

import { useIntl } from 'react-intl';
import { FilterableMultiSelect } from '@carbon/react';
import { generateId, getTranslateWithId } from '@tektoncd/dashboard-utils';

export default function LabelFilter({
  filters = [],
  handleSetFilters,
  resources
}) {
  const intl = useIntl();
  const resourcesLabels = new Set();
  resources?.forEach(resource => {
    const resourceLabels = resource.metadata.labels || {};
    Object.keys(resourceLabels).forEach(label =>
      resourcesLabels.add(`${label}=${resourceLabels[label]}`)
    );
  });

  if (!resourcesLabels.size) {
    return null;
  }

  return (
    <FilterableMultiSelect
      className="tkn--label-filter"
      id={generateId('label-filter-')}
      titleText={intl.formatMessage({
        id: 'dashboard.filter.labels.title',
        defaultMessage: 'Labels:'
      })}
      items={Array.from(resourcesLabels)}
      itemToString={item => item}
      onChange={({ selectedItems }) => handleSetFilters(selectedItems.sort())}
      selectedItems={Array.from(new Set(filters))}
      translateWithId={getTranslateWithId(intl)}
      type="inline"
      useTitleInItem
    />
  );
}
