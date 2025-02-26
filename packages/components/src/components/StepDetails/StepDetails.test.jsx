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

import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test';

import StepDetails from './StepDetails';

describe('StepDetails', () => {
  it('renders', () => {
    renderWithRouter(<StepDetails stepStatus={{}} />);
  });

  it('renders terminated state', () => {
    renderWithRouter(
      <StepDetails stepStatus={{ terminated: { reason: 'Completed' } }} />
    );
  });

  it('renders cancelled state', () => {
    renderWithRouter(
      <StepDetails
        stepStatus={{}}
        taskRun={{
          status: {
            conditions: [
              {
                type: 'Succeeded',
                status: 'False',
                reason: 'TaskRunCancelled'
              }
            ]
          }
        }}
      />
    );
  });

  it('renders with selected view', () => {
    const { getByText } = renderWithRouter(
      <StepDetails stepStatus={{}} view="details" />
    );

    fireEvent.click(getByText(/logs/i));
  });

  it('renders skipped Task state', async () => {
    const { getByText } = renderWithRouter(
      <StepDetails skippedTask={{}} stepStatus={{}} />
    );

    await waitFor(() => getByText(/task was skipped/i));
  });
});
