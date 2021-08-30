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
    enableSyntaxHighlighting: false,
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
    // TODO: expand/collapse all + reset
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

    // https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
    // https://github.com/highlightjs/highlight.js/blob/main/src/styles/a11y-dark.css

    // theme="chalk"
    // theme="eighties"
    theme="harmonic"
    // theme="monokai"
    // theme="railscasts"

    // https://github.com/chriskempson/base16/blob/master/styling.md
    // base00 - Default Background
    // base01 - Lighter Background (Used for status bars, line number and folding marks)
    // base02 - Selection Background
    // base03 - Comments, Invisibles, Line Highlighting
    // base04 - Dark Foreground (Used for status bars)
    // base05 - Default Foreground, Caret, Delimiters, Operators
    // base06 - Light Foreground (Not often used)
    // base07 - Light Background (Not often used)
    // base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
    // base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url
    // base0A - Classes, Markup Bold, Search Text Background
    // base0B - Strings, Inherited Class, Markup Code, Diff Inserted
    // base0C - Support, Regular Expressions, Escape Characters, Markup Quotes
    // base0D - Functions, Methods, Attribute IDs, Headings
    // base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed
    // base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>

    theme={{
      // a11y dark
      // as near as I can manage without hacking the library,
      // e.g. booleans should be same as numbers not folding marks
      // also see https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/hljs/a11y-dark.js
      base00: "#262626",
      base01: "#525252", // unused for JSON
      base02: "#525252",
      base03: "#d4d0ab", // unused for JSON
      base04: "#", // unused for JSON
      base05: "#f8f8f2", // unused for JSON
      base06: "#", // unused for JSON
      base07: "#f8f8f2",
      base08: "#ffa07a", // unused for JSON
      base09: "#abe338",
      base0A: "#", // unused for JSON
      base0B: "#abe338", // unused for JSON
      base0C: "#d4d0ab", // unused for JSON
      base0D: "#ffa07a",
      base0E: "#ffa07a",
      base0F: "#f5ab35"
    }}

    // theme={{
    //   // solarflare
    //   base00: "#18262F",
    //   base01: "#222E38",
    //   base02: "#586875",
    //   base03: "#667581",
    //   base04: "#85939E",
    //   base05: "#A6AFB8",
    //   base06: "#E8E9ED",
    //   base07: "#F5F7FA",
    //   base08: "#EF5253",
    //   base09: "#E66B2B",
    //   base0A: "#E4B51C",
    //   base0B: "#7CC844",
    //   base0C: "#52CBB0",
    //   base0D: "#33B5E1",
    //   base0E: "#A363D5",
    //   base0F: "#D73C9A"
    // }}

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

    // https://www.carbondesignsystem.com/guidelines/color/usage/
    // https://carbon-elements.netlify.app/colors/examples/preview/
    // theme={{
    //   base00: "#262626",
    //   base01: "#525252",
    //   base02: "#525252",
    //   base03: "#f4f4f4",
    //   base04: "#393939",
    //   base05: "#f4f4f4",
    //   base06: "#f4f4f4",
    //   base07: "#f4f4f4",
    //   base08: "#f4f4f4",
    //   base09: "#a6c8ff",
    //   base0A: "#a6c8ff",
    //   base0B: "#a6c8ff",
    //   base0C: "#a6c8ff",
    //   base0D: "#a6c8ff",
    //   base0E: "#a6c8ff",
    //   base0F: "#a6c8ff"
    // }}
  />
);

// Foldable.parameters = {
//   backgrounds: {
//     default: 'gray90'
//   }
// };
