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
import PropTypes from 'prop-types';
import jsYaml from 'js-yaml';
import classNames from 'classnames';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml';

// import style from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/cb';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/funky';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/hopscotch';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/pojoaque';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/twilight';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
// import style from 'react-syntax-highlighter/dist/esm/styles/prism/xonokai';

import darkStyle from './tkn-dark';
import lightStyle from './tkn-light';

import './ViewYAML.scss';

SyntaxHighlighter.registerLanguage('yaml', yaml);

const ViewYAML = props => {
  const { className, dark, resource } = props;
  const activeStyle = dark ? darkStyle : lightStyle;
  // const activeStyle = style;

  return (
    <div
      className={classNames('bx--snippet--multi', className, {
        'tkn--view-yaml--dark': dark
      })}
    >
      <SyntaxHighlighter language="yaml" style={activeStyle}>
        {jsYaml.dump(resource)}
      </SyntaxHighlighter>
      <code>
        <pre>{jsYaml.dump(resource)}</pre>
      </code>
    </div>
  );
};

ViewYAML.propTypes = {
  resource: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({}),
    PropTypes.string
  ]).isRequired
};

export default ViewYAML;
