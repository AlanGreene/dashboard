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
import {
  SkeletonText as CarbonSkeletonText,
  Content,
  Header,
  HeaderContainer,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  Theme
} from '@carbon/react';
import {
  Information as AboutIcon,
  Settings as SettingsIcon
} from '@carbon/react/icons';
import { Loading } from '@tektoncd/dashboard-components';

import TektonIcon from '../../images/tekton-logo-20x20.svg?react';

const SkeletonText = ({ heading, paragraph }) => (
  <CarbonSkeletonText heading={heading} paragraph={paragraph} width="80%" />
);

const LoadingShell = () => {
  const intl = useIntl();
  const loadingMessage = intl.formatMessage({
    id: 'dashboard.loading.config',
    defaultMessage: 'Loading configuration…'
  });

  return (
    <div className="tkn--config-loading-shell">
      <HeaderContainer
        isSideNavExpanded
        render={() => (
          <Theme
            aria-label="Tekton Dashboard"
            as={Header}
            className="tkn--header"
            theme="g100"
          >
            <HeaderName prefix="Tekton">Dashboard</HeaderName>
            <SideNav
              aria-label="Main navigation"
              className="tkn--config-loading-nav-skeleton"
              expanded
              isFixedNav
            >
              <SideNavItems>
                <SideNavMenu
                  defaultExpanded
                  renderIcon={TektonIcon}
                  title={intl.formatMessage({
                    id: 'dashboard.sideNav.tektonResources',
                    defaultMessage: 'Tekton resources'
                  })}
                >
                  <li>
                    <SkeletonText paragraph />
                  </li>
                </SideNavMenu>

                <SkeletonText heading />
                <SkeletonText paragraph />

                <SideNavLink
                  renderIcon={props => <AboutIcon size={20} {...props} />}
                >
                  {intl.formatMessage({
                    id: 'dashboard.about.title',
                    defaultMessage: 'About Tekton'
                  })}
                </SideNavLink>

                <SideNavLink
                  renderIcon={props => <SettingsIcon size={20} {...props} />}
                >
                  {intl.formatMessage({
                    id: 'dashboard.settings.title',
                    defaultMessage: 'Settings'
                  })}
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Theme>
        )}
      />
      <Content>
        <Loading message={loadingMessage} />
      </Content>
    </div>
  );
};

export default LoadingShell;
