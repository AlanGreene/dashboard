/*
Copyright 2019-2020 The Tekton Authors
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
import JSONView from 'react-json-view';

import ViewYAML from './ViewYAML';

import events from './examples/events.json';
import pod from './examples/pod.json';

export default {
  args: {
    dark: true,
    resource: {
      apiVersion: 'tekton.dev/v1alpha1',
      kind: 'Resource',
      metadata: {
        creationTimestamp: '1995-11-08T00:00:00Z',
        generation: 1,
        labels: {
          foo: 'bar'
        },
        name: 'resource-example',
        namespace: 'tekton-pipelines',
        resourceVersion: '123456',
        uid: '1234567890987654321'
      },
      spec: {
        params: [{ name: 'parameter1', value: 'valueParameter1' }]
      }
    }
  },
  component: ViewYAML,
  title: 'Components/ViewYAML'
};

export const Base = args => <ViewYAML {...args} />;

export const Foldable = args => (
  <JSONView
    collapsed={2}
    collapseStringsAfterLength={false}
    // displayArrayKey={false}
    displayDataTypes={false}
    displayObjectSize={false}
    enableClipboard={false}
    groupArraysAfterLength={100}
    iconStyle="triangle"
    indentWidth={4}
    name={null}
    quotesOnKeys={false}
    // src={events}
    src={pod}
    // style={{}}
    // theme="rjv-default"

    // theme="apathy"
    // theme="ashes"
    // theme="atelier-dune"
    // theme="atelier-forest"
    // theme="atelier-heath"
    // theme="atelier-lakeside"
    // theme="atelier-seaside"
    // theme="bespin"
    // theme="brewer"
    // theme="bright"
    // theme="chalk"
    // theme="codeschool"
    // theme="colors"
    // theme="default"
    // theme="eighties"
    // theme="embers"
    // theme="flat"
    // theme="google"
    // theme="grayscale"
    // theme="greenscreen"
    // theme="harmonic"
    // theme="hopscotch"
    // theme="isotope"
    // theme="marrakesh"
    // theme="mocha"
    // theme="monokai"
    // theme="ocean"
    // theme="paraiso"
    // theme="pop"
    // theme="railscasts"
    // theme="shapeshifter"
    // theme="solarized"
    // theme="summerfruit"
    // theme="threezerotwofour"
    // theme="tomorrow"
    // theme="tube"
    // theme="twilight"

    // theme={{
    //   base00: "white",
    //   base01: "#ddd",
    //   base02: "#ddd",
    //   base03: "#444",
    //   base04: "purple",
    //   base05: "#444",
    //   base06: "#444",
    //   base07: "#444",
    //   base08: "#444",
    //   base09: "rgba(70, 70, 230, 1)",
    //   base0A: "rgba(70, 70, 230, 1)",
    //   base0B: "rgba(70, 70, 230, 1)",
    //   base0C: "rgba(70, 70, 230, 1)",
    //   base0D: "rgba(70, 70, 230, 1)",
    //   base0E: "rgba(70, 70, 230, 1)",
    //   base0F: "rgba(70, 70, 230, 1)"
    // }}
  />
);
