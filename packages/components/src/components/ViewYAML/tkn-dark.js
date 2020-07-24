/*
Copyright 2020 The Tekton Authors
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

// base16 solarflare (recommended by Carbon)

// base00: "18262F"
// base01: "222E38"
// base02: "586875"
// base03: "667581"
// base04: "85939E"
// base05: "A6AFB8"
// base06: "E8E9ED"
// base07: "F5F7FA"
// base08: "EF5253"
// base09: "E66B2B"
// base0A: "E4B51C"
// base0B: "7CC844"
// base0C: "52CBB0"
// base0D: "33B5E1"
// base0E: "A363D5"
// base0F: "D73C9A"

// /**
//  * a11y-dark theme for JavaScript, CSS, and HTML
//  * https://raw.githubusercontent.com/ericwbailey/a11y-syntax-highlighting/master/dist/prism/a11y-dark.css
//  * Based on the okaidia theme: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css
//  * @author ericwbailey
//  */

// code[class*="language-"],
// pre[class*="language-"] {
//   color: #f8f8f2;
//   background: none;
//   font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
//   text-align: left;
//   white-space: pre;
//   word-spacing: normal;
//   word-break: normal;
//   word-wrap: normal;
//   line-height: 1.5;

//   -moz-tab-size: 4;
//   -o-tab-size: 4;
//   tab-size: 4;

//   -webkit-hyphens: none;
//   -moz-hyphens: none;
//   -ms-hyphens: none;
//   hyphens: none;
// }

// /* Code blocks */
// pre[class*="language-"] {
//   padding: 1em;
//   margin: 0.5em 0;
//   overflow: auto;
//   border-radius: 0.3em;
// }

// :not(pre) > code[class*="language-"],
// pre[class*="language-"] {
//   background: #2b2b2b;
// }

// /* Inline code */
// :not(pre) > code[class*="language-"] {
//   padding: 0.1em;
//   border-radius: 0.3em;
//   white-space: normal;
// }

// .token.comment,
// .token.prolog,
// .token.doctype,
// .token.cdata {
//   color: #d4d0ab;
// }

// .token.punctuation {
//   color: #fefefe;
// }

// .token.property,
// .token.tag,
// .token.constant,
// .token.symbol,
// .token.deleted {
//   color: #ffa07a;
// }

// .token.boolean,
// .token.number {
//   color: #00e0e0;
// }

// .token.selector,
// .token.attr-name,
// .token.string,
// .token.char,
// .token.builtin,
// .token.inserted {
//   color: #abe338;
// }

// .token.operator,
// .token.entity,
// .token.url,
// .language-css .token.string,
// .style .token.string,
// .token.variable {
//   color: #00e0e0;
// }

// .token.atrule,
// .token.attr-value,
// .token.function {
//   color: #ffd700;
// }

// .token.keyword {
//   color: #00e0e0;
// }

// .token.regex,
// .token.important {
//   color: #ffd700;
// }

// .token.important,
// .token.bold {
//   font-weight: bold;
// }
// .token.italic {
//   font-style: italic;
// }

// .token.entity {
//   cursor: help;
// }

// @media screen and (-ms-high-contrast: active) {
//   code[class*="language-"],
//   pre[class*="language-"] {
//     color: windowText;
//     background: window;
//   }

//   :not(pre) > code[class*="language-"],
//   pre[class*="language-"] {
//     background: window;
//   }

//   .token.important {
//     background: highlight;
//     color: window;
//     font-weight: normal;
//   }

//   .token.atrule,
//   .token.attr-value,
//   .token.function,
//   .token.keyword,
//   .token.operator,
//   .token.selector {
//     font-weight: bold;
//   }

//   .token.attr-value,
//   .token.comment,
//   .token.doctype,
//   .token.function,
//   .token.keyword,
//   .token.operator,
//   .token.property,
//   .token.string {
//     color: highlight;
//   }

//   .token.attr-value,
//   .token.url {
//     font-weight: normal;
//   }
// }

export default {
  'code[class*="language-"]': {
    color: '#c5c8c6',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    color: '#c5c8c6',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
    background: '#1d1f21'
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#1d1f21',
    padding: '.1em',
    borderRadius: '.3em'
  },
  comment: {
    color: '#7C7C7C'
  },
  prolog: {
    color: '#7C7C7C'
  },
  doctype: {
    color: '#7C7C7C'
  },
  cdata: {
    color: '#7C7C7C'
  },
  punctuation: {
    color: '#c5c8c6'
  },
  '.namespace': {
    Opacity: '.7'
  },
  property: {
    color: '#96CBFE'
  },
  keyword: {
    color: '#96CBFE'
  },
  tag: {
    color: '#96CBFE'
  },
  'class-name': {
    color: '#FFFFB6',
    textDecoration: 'underline'
  },
  boolean: {
    color: '#99CC99'
  },
  constant: {
    color: '#99CC99'
  },
  symbol: {
    color: '#f92672'
  },
  deleted: {
    color: '#f92672'
  },
  number: {
    color: '#FF73FD'
  },
  selector: {
    color: '#A8FF60'
  },
  'attr-name': {
    color: '#A8FF60'
  },
  string: {
    color: '#A8FF60'
  },
  char: {
    color: '#A8FF60'
  },
  builtin: {
    color: '#A8FF60'
  },
  inserted: {
    color: '#A8FF60'
  },
  variable: {
    color: '#C6C5FE'
  },
  operator: {
    color: '#EDEDED'
  },
  entity: {
    color: '#FFFFB6',
    cursor: 'help'
  },
  url: {
    color: '#96CBFE'
  },
  '.language-css .token.string': {
    color: '#87C38A'
  },
  '.style .token.string': {
    color: '#87C38A'
  },
  atrule: {
    color: '#F9EE98'
  },
  'attr-value': {
    color: '#F9EE98'
  },
  function: {
    color: '#DAD085'
  },
  regex: {
    color: '#E9C062'
  },
  important: {
    color: '#fd971f',
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
};
