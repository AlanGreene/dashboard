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

import React from 'react';
import Anser from 'anser';
import { escapeCarriageReturn } from 'escape-carriage';
import tlds from 'tlds';
import LinkifyIt from 'linkify-it';

const linkifyIt = LinkifyIt().tlds(tlds);

/**
 * Converts ANSI strings into JSON output.
 * @name ansiToJSON
 * @function
 * @param {String} input The input string.
 * @param {boolean} use_classes If `true`, HTML classes will be appended
 *                              to the HTML output.
 * @return {Array} The parsed input.
 */
function ansiToJSON(input, use_classes) { // eslint-disable-line
  input = escapeCarriageReturn(input); // eslint-disable-line
  return Anser.ansiToJson(input, {
    json: true,
    remove_empty: true,
    use_classes
  });
}

/**
 * Create a class string.
 * @name createClass
 * @function
 * @param {AnserJsonEntry} bundle
 * @return {String} class name(s)
 */
function createClass(bundle) {
  let classNames = '';

  if (bundle.bg) {
    classNames += `${bundle.bg}-bg `;
  }
  if (bundle.fg) {
    classNames += `${bundle.fg}-fg `;
  }
  if (bundle.decoration) {
    classNames += `ansi-${bundle.decoration} `;
  }

  if (classNames === '') {
    return null;
  }

  classNames = classNames.substring(0, classNames.length - 1);
  return classNames;
}

/**
 * Create the style attribute.
 * @name createStyle
 * @function
 * @param {AnserJsonEntry} bundle
 * @return {Object} returns the style object
 */
function createStyle(bundle) {
  const style = {};
  if (bundle.bg) {
    style.backgroundColor = `rgb(${bundle.bg})`;
  }
  if (bundle.fg) {
    style.color = `rgb(${bundle.fg})`;
  }

  return style;
}

function linkify(str, style, className) {
  const matches = linkifyIt.match(str);
  if (!matches) {
    return (
      <span style={style} className={className}>
        {str}
      </span>
    );
  }
  const elements = [];
  let offset = 0;
  matches.forEach(match => {
    if (match.index > offset) {
      const string = str.substring(offset, match.index);
      elements.push(
        <span style={style} className={className}>
          {string}
        </span>
      );
    }
    elements.push(
      <a
        className={className}
        href={match.url}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match.text}
      </a>
    );
    offset = match.lastIndex;
  });

  if (str.length > offset) {
    const string = str.substring(offset, str.length);
    elements.push(
      <span style={style} className={className}>
        {string}
      </span>
    );
  }
  return elements;
}

/**
 * Converts an Anser bundle into a React Node.
 * @param useClasses should render the span with a class instead of style.
 * @param bundle Anser output.
 * @param key
 */
function convertBundleIntoReact(useClasses, bundle, key) {
  const style = useClasses ? null : createStyle(bundle);
  const className = useClasses ? createClass(bundle) : null;

  // console.log('test', { key, bundle });
  if (false) {
    return (
      <span key={key} style={style} className={className}>
        {bundle.content}
      </span>
    );
  }

  return linkify(bundle.content, style, className);
}

export default function Ansi(props) {
  const { className, useClasses = false, children = '' } = props;
  return (
    <code className={className}>
      {ansiToJSON(children, useClasses).map(
        convertBundleIntoReact.bind(null, useClasses)
      )}
    </code>
  );
}
