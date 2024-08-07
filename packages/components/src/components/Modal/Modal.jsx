/*
Copyright 2020-2024 The Tekton Authors
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
/* istanbul ignore file */

import { useIntl } from 'react-intl';
import { Modal as CarbonModal } from '@carbon/react';

const Modal = props => {
  const intl = useIntl();
  return (
    <CarbonModal
      closeButtonLabel={intl.formatMessage({
        id: 'dashboard.modal.close',
        defaultMessage: 'Close'
      })}
      {...props}
    />
  );
};

export default Modal;
