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
import StoryRouter from 'storybook-react-router';

import { getStatus } from '@tektoncd/dashboard-utils';
import PipelineRuns from '.';

storiesOf('PipelineRuns', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <PipelineRuns
      createPipelineRunURL={({ namespace, pipelineRunName }) =>
        namespace ? `to-pipelineRun-${namespace}/${pipelineRunName}` : null
      }
      createPipelineRunsByPipelineURL={({ namespace, pipelineName }) =>
        namespace
          ? `to-pipeline-${namespace}/${pipelineName}`
          : `to-pipeline/${pipelineName}`
      }
      createPipelineRunTimestamp={pipelineRun =>
        getStatus(pipelineRun).lastTransitionTime ||
        pipelineRun.metadata.creationTimestamp
      }
      selectedNamespace="default"
      pipelineRunActions={[
        {
          actionText: 'Cancel',
          action: resource => resource,
          disable: resource =>
            resource.status &&
            resource.status.conditions[0].reason !== 'Running',
          modalProperties: {
            heading: 'cancel',
            primaryButtonText: 'ok',
            secondaryButtonText: 'no',
            body: resource => `cancel pipelineRun ${resource.metadata.name}`
          }
        }
      ]}
      pipelineRuns={[
        {
          metadata: {
            name: 'pipeline-run-20190816124708',
            namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
            uid: '7c266264-4d4d-45e3-ace0-041be8f7d06e',
            creationTimestamp: '2019-08-16T12:48:00Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T12:49:28Z',
                message: 'All Tasks have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded'
              }
            ]
          }
        },
        {
          metadata: {
            name: 'pipeline-run-20190816170431',
            namespace: '21cf1eac-7392-4e67-a4d0-f654506fe04d',
            uid: 'a7812005-f766-4877-abd4-b3d418b04f66',
            creationTimestamp: '2019-08-16T17:09:12Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T17:10:49Z',
                message: 'Not all Tasks have completed executing',
                reason: 'Running',
                status: 'Unknown',
                type: 'Succeeded'
              }
            ]
          }
        },
        {
          apiVersion: 'tekton.dev/v1alpha1',
          kind: 'PipelineRun',
          metadata: {
            name: 'output-pipeline-run',
            creationTimestamp: '2019-10-09T17:10:49Z'
          },
          spec: {
            pipelineRef: {
              name: 'output-pipeline'
            },
            serviceAccountName: 'default',
            resources: [
              {
                name: 'source-repo',
                resourceRef: {
                  name: 'skaffold-git'
                }
              }
            ]
          }
        },
        {
          metadata: {
            name: 'pipeline-run-20190816124709',
            namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
            uid: '98788f4b-c84b-47c1-98c9-a85f35e8475e',
            creationTimestamp: '2019-08-16T12:48:00Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T12:49:28Z',
                message:
                  'PipelineRun "pipeline-run-20190816124709" was cancelled',
                reason: 'PipelineRunCancelled',
                status: 'False',
                type: 'Succeeded'
              }
            ]
          }
        },
        {
          metadata: {
            name: 'pipeline-run-20190816124712',
            namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
            uid: 'e391b785-d8e0-4a2a-b2ad-1cf55f11c7fe',
            creationTimestamp: '2019-08-16T12:48:00Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T12:49:28Z',
                message:
                  'TaskRun demo-pipeline-run-1578419051569-build-skaffold-app-g6xmg has failed',
                reason: 'Failed',
                status: 'False',
                type: 'Succeeded'
              }
            ]
          }
        },
        {
          metadata: {
            name: 'pipeline-run-20190816124710',
            namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
            uid: 'a6caa82d-619c-477c-b0ba-2038a1629147',
            creationTimestamp: '2019-08-16T12:48:00Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T12:49:28Z',
                message: 'detailed status message goes here',
                reason: 'PipelineRunTimeout',
                status: 'False',
                type: 'Succeeded'
              }
            ]
          }
        },
        {
          metadata: {
            name: 'pipeline-run-20190816124711',
            namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
            uid: '20e99721-ccd8-473f-a992-2964a7282b45',
            creationTimestamp: '2019-08-16T12:48:00Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T12:49:28Z',
                message: 'detailed status message goes here',
                reason: 'ExceededResourceQuota',
                status: 'False',
                type: 'Succeeded'
              }
            ]
          }
        }
      ]}
      cancelPipelineRun={() => {}}
    />
  ))
  .add('no pipeline link', () => (
    <PipelineRuns
      createPipelineRunURL={({ namespace, pipelineRunName }) =>
        namespace ? `to-pipelineRun-${namespace}/${pipelineRunName}` : null
      }
      createPipelineRunsByPipelineURL={() => null}
      createPipelineRunTimestamp={pipelineRun =>
        getStatus(pipelineRun).lastTransitionTime ||
        pipelineRun.metadata.creationTimestamp
      }
      selectedNamespace="default"
      pipelineRunActions={[
        {
          actionText: 'Cancel',
          action: resource => resource,
          disable: resource =>
            resource.status &&
            resource.status.conditions[0].reason !== 'Running',
          modalProperties: {
            heading: 'cancel',
            primaryButtonText: 'ok',
            secondaryButtonText: 'no',
            body: resource => `cancel pipelineRun ${resource.metadata.name}`
          }
        }
      ]}
      pipelineRuns={[
        {
          metadata: {
            name: 'pipeline-run-20190816124708',
            namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
            uid: '7c266264-4d4d-45e3-ace0-041be8f7d06e',
            creationTimestamp: '2019-08-16T12:48:00Z'
          },
          spec: {
            pipelineRef: {
              name: 'pipeline'
            }
          },
          status: {
            conditions: [
              {
                lastTransitionTime: '2019-08-16T12:49:28Z',
                message: 'All Tasks have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded'
              }
            ]
          }
        },
        {
          apiVersion: 'tekton.dev/v1alpha1',
          kind: 'PipelineRun',
          metadata: {
            name: 'output-pipeline-run',
            creationTimestamp: '2019-10-09T17:10:49Z'
          },
          spec: {
            serviceAccountName: 'default',
            resources: [
              {
                name: 'source-repo',
                resourceRef: {
                  name: 'skaffold-git'
                }
              }
            ]
          }
        }
      ]}
      cancelPipelineRun={() => {}}
    />
  ))
  .add('empty', () => (
    <PipelineRuns
      selectedNamespace="default"
      pipelineRuns={[]}
      cancelPipelineRun={() => {}}
    />
  ));
