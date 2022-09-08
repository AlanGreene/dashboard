/*
Copyright 2019-2022 The Tekton Authors
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

import React, { useEffect, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { hot } from 'react-hot-loader/root';
import {
  Link,
  Redirect,
  Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';

import { injectIntl, IntlProvider } from 'react-intl';
import { Content, InlineNotification } from 'carbon-components-react';

import {
  Header,
  LoadingShell,
  LogoutButton,
  PageErrorBoundary
} from '@tektoncd/dashboard-components';
import {
  ALL_NAMESPACES,
  getErrorMessage,
  paths,
  urls,
  useWebSocketReconnected
} from '@tektoncd/dashboard-utils';

import {
  About,
  ClusterInterceptors,
  ClusterTasks,
  ClusterTriggerBinding,
  ClusterTriggerBindings,
  CreatePipelineResource,
  CreatePipelineRun,
  CreateTaskRun,
  CustomResourceDefinition,
  EventListener,
  EventListeners,
  Extension,
  Extensions,
  ImportResources,
  NotFound,
  PipelineResource,
  PipelineResources,
  PipelineRun,
  PipelineRuns,
  Pipelines,
  ReadWriteRoute,
  ResourceList,
  Run,
  Runs,
  Settings,
  SideNav,
  TaskRun,
  TaskRuns,
  Tasks,
  Trigger,
  TriggerBinding,
  TriggerBindings,
  Triggers,
  TriggerTemplate,
  TriggerTemplates
} from '..';

import {
  NamespaceContext,
  useExtensions,
  useLogoutURL,
  useNamespaces,
  useProperties,
  useTenantNamespace
} from '../../api';

import config from '../../../config_frontend/config.json';

import '../../scss/App.scss';

const { default: defaultLocale, supported: supportedLocales } = config.locales;

/* istanbul ignore next */
const ConfigErrorComponent = ({ intl, loadingConfigError }) => {
  if (!loadingConfigError) {
    return null;
  }

  return (
    <InlineNotification
      kind="error"
      title={intl.formatMessage({
        id: 'dashboard.app.loadingConfigError',
        defaultMessage: 'Error loading configuration'
      })}
      subtitle={getErrorMessage(loadingConfigError)}
      lowContrast
    />
  );
};

const ConfigError = injectIntl(ConfigErrorComponent);

async function loadMessages(lang) {
  const isSupportedLocale = supportedLocales.includes(lang);
  const targetLocale = isSupportedLocale ? lang : defaultLocale;
  const { default: loadedMessages } = await import(
    /* webpackChunkName: "[request]" */ `../../nls/messages_${targetLocale}.json`
  );
  /* istanbul ignore next */
  if (process.env.I18N_PSEUDO) {
    const startBoundary = '[[%';
    const endBoundary = '%]]';
    // Make it easier to identify untranslated strings in the UI
    Object.keys(loadedMessages).forEach(loadedLang => {
      const messagesToDisplay = loadedMessages[loadedLang];
      Object.keys(messagesToDisplay).forEach(messageId => {
        if (messagesToDisplay[messageId].startsWith(startBoundary)) {
          // avoid repeating the boundaries when
          // hot reloading in dev mode
          return;
        }
        messagesToDisplay[
          messageId
        ] = `${startBoundary}${messagesToDisplay[messageId]}${endBoundary}`;
      });
    });
  }

  return loadedMessages;
}

function HeaderNameLink(props) {
  return <Link {...props} to={urls.about()} />;
}

/* istanbul ignore next */
export function App({ lang }) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(true);
  const [selectedNamespace, setSelectedNamespace] = useState(ALL_NAMESPACES);

  const {
    error: propertiesError,
    isFetching: isFetchingProperties,
    isPlaceholderData: isPropertiesPlaceholder
  } = useProperties();
  const logoutURL = useLogoutURL();
  const tenantNamespace = useTenantNamespace();

  const {
    data: messages,
    error: messagesError,
    isFetching: isFetchingMessages,
    isPlaceholderData: isMessagesPlaceholder
  } = useQuery(['i18n', lang], () => loadMessages(lang), {
    placeholderData: {}
  });

  const showLoadingState = isPropertiesPlaceholder || isMessagesPlaceholder;
  const isFetchingConfig = isFetchingProperties || isFetchingMessages;

  const { data: extensions = [], isWebSocketConnected } = useExtensions(
    { namespace: tenantNamespace || ALL_NAMESPACES },
    { enabled: !isFetchingConfig }
  );

  const loadingConfigError = propertiesError || messagesError;

  const queryClient = useQueryClient();

  useNamespaces({
    enabled: !isFetchingConfig && !tenantNamespace
  });
  useWebSocketReconnected(
    () => queryClient.invalidateQueries(),
    isWebSocketConnected
  );

  useEffect(() => {
    if (!isFetchingConfig && tenantNamespace) {
      setSelectedNamespace(tenantNamespace);
    }
  }, [isFetchingConfig, tenantNamespace]);

  const logoutButton = <LogoutButton getLogoutURL={() => logoutURL} />;

  const namespaceContext = useMemo(
    () => ({ selectedNamespace, selectNamespace: setSelectedNamespace }),
    [selectedNamespace]
  );

  return (
    <NamespaceContext.Provider value={namespaceContext}>
      <IntlProvider
        defaultLocale={defaultLocale}
        locale={messages[lang] ? lang : defaultLocale}
        messages={messages[lang]}
      >
        <ConfigError loadingConfigError={loadingConfigError} />

        {showLoadingState && <LoadingShell />}
        {!showLoadingState && (
          <Router>
            <>
              <Header
                headerNameProps={{
                  element: HeaderNameLink
                }}
                isSideNavExpanded={isSideNavExpanded}
                logoutButton={logoutButton}
                onHeaderMenuButtonClick={() => {
                  setIsSideNavExpanded(
                    prevIsSideNavExpanded => !prevIsSideNavExpanded
                  );
                }}
              />
              <Route path={paths.byNamespace({ path: '/*' })}>
                {() => <SideNav expanded={isSideNavExpanded} />}
              </Route>

              <Content
                id="main-content"
                className="tkn--main-content"
                aria-labelledby="main-content-header"
                tabIndex="0"
              >
                <PageErrorBoundary>
                  <Routes>
                    <Route
                      path="/"
                      render={() => <Redirect to={urls.about()} />}
                    />
                    <Route path={paths.pipelines.all()}>
                      <Pipelines />
                    </Route>
                    <Route path={paths.pipelines.byNamespace()}>
                      <Pipelines />
                    </Route>
                    <Route
                      path={paths.pipelineRuns.create()}
                      element={
                        <ReadWriteRoute>
                          <CreatePipelineRun />
                        </ReadWriteRoute>
                      }
                    />
                    <Route path={paths.pipelineRuns.all()}>
                      {/* did not have `exact` */}
                      <PipelineRuns />
                    </Route>
                    <Route path={paths.pipelineRuns.byNamespace()}>
                      <PipelineRuns />
                    </Route>
                    <Route path={paths.pipelineRuns.byPipeline()}>
                      <PipelineRuns />
                    </Route>
                    <Route path={paths.pipelineRuns.byName()}>
                      {/* did not have `exact` */}
                      <PipelineRun />
                    </Route>
                    <Route path={paths.pipelineResources.all()}>
                      <PipelineResources />
                    </Route>
                    <Route path={paths.pipelineResources.byNamespace()}>
                      <PipelineResources />
                    </Route>
                    <Route path={paths.pipelineResources.byName()}>
                      <PipelineResource />
                    </Route>
                    <Route
                      path={paths.pipelineResources.create()}
                      element={
                        <ReadWriteRoute>
                          <CreatePipelineResource />
                        </ReadWriteRoute>
                      }
                    />

                    <Route path={paths.tasks.all()}>
                      <Tasks />
                    </Route>
                    <Route path={paths.tasks.byNamespace()}>
                      <Tasks />
                    </Route>
                    <Route
                      path={paths.taskRuns.create()}
                      element={
                        <ReadWriteRoute>
                          <CreateTaskRun />
                        </ReadWriteRoute>
                      }
                    />
                    <Route path={paths.taskRuns.all()}>
                      {/* did not have `exact` */}
                      <TaskRuns />
                    </Route>
                    <Route path={paths.taskRuns.byNamespace()}>
                      <TaskRuns />
                    </Route>
                    <Route path={paths.taskRuns.byTask()}>
                      <TaskRuns />
                    </Route>
                    <Route path={paths.taskRuns.byName()}>
                      <TaskRun />
                    </Route>

                    <Route path={paths.runs.all()}>
                      {/* did not have `exact` */}
                      <Runs />
                    </Route>
                    <Route path={paths.runs.byNamespace()}>
                      <Runs />
                    </Route>
                    <Route path={paths.runs.byName()}>
                      <Run />
                    </Route>

                    <Route path={paths.clusterTasks.all()}>
                      <ClusterTasks />
                    </Route>

                    <Route path={paths.about()}>
                      {/* did not have `exact` */}
                      <About />
                    </Route>
                    <Route path={paths.settings()}>
                      {/* did not have `exact` */}
                      <Settings />
                    </Route>

                    <Route
                      path={paths.importResources()}
                      element={
                        <ReadWriteRoute>
                          <ImportResources />
                        </ReadWriteRoute>
                      }
                    />

                    <Route path={paths.eventListeners.all()}>
                      <EventListeners />
                    </Route>
                    <Route path={paths.eventListeners.byNamespace()}>
                      <EventListeners />
                    </Route>
                    <Route path={paths.eventListeners.byName()}>
                      <EventListener />
                    </Route>
                    <Route path={paths.triggers.byName()}>
                      <Trigger />
                    </Route>
                    <Route path={paths.triggers.all()}>
                      <Triggers />
                    </Route>
                    <Route path={paths.triggers.byNamespace()}>
                      <Triggers />
                    </Route>
                    <Route path={paths.triggerBindings.byName()}>
                      <TriggerBinding />
                    </Route>
                    <Route path={paths.triggerBindings.all()}>
                      <TriggerBindings />
                    </Route>
                    <Route path={paths.triggerBindings.byNamespace()}>
                      <TriggerBindings />
                    </Route>
                    <Route path={paths.clusterTriggerBindings.byName()}>
                      <ClusterTriggerBinding />
                    </Route>
                    <Route path={paths.clusterTriggerBindings.all()}>
                      <ClusterTriggerBindings />
                    </Route>
                    <Route path={paths.triggerTemplates.byName()}>
                      <TriggerTemplate />
                    </Route>
                    <Route path={paths.triggerTemplates.all()}>
                      <TriggerTemplates />
                    </Route>
                    <Route path={paths.triggerTemplates.byNamespace()}>
                      <TriggerTemplates />
                    </Route>
                    <Route path={paths.clusterInterceptors.all()}>
                      <ClusterInterceptors />
                    </Route>
                    <Route path={paths.extensions.all()}>
                      <Extensions />
                    </Route>
                    {extensions
                      .filter(extension => !extension.type)
                      .map(({ displayName, name, source }) => (
                        <Route
                          key={name}
                          path={paths.extensions.byName({ name })}
                        >
                          {/* did not have `exact` */}
                          <Extension
                            displayName={displayName}
                            source={source}
                          />
                        </Route>
                      ))}

                    <Route path={paths.rawCRD.byNamespace()}>
                      <CustomResourceDefinition />
                    </Route>
                    <Route path={paths.rawCRD.cluster()}>
                      <CustomResourceDefinition />
                    </Route>
                    <Route path={paths.kubernetesResources.all()}>
                      <ResourceList />
                    </Route>
                    <Route path={paths.kubernetesResources.byNamespace()}>
                      <ResourceList />
                    </Route>
                    <Route path={paths.kubernetesResources.byName()}>
                      <CustomResourceDefinition />
                    </Route>
                    <Route path={paths.kubernetesResources.cluster()}>
                      <CustomResourceDefinition />
                    </Route>

                    <NotFound />
                    {/* how do we handle this now? */}
                  </Routes>
                </PageErrorBoundary>
              </Content>
            </>
          </Router>
        )}
      </IntlProvider>
    </NamespaceContext.Provider>
  );
}

export default hot(App);
