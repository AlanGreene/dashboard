/*
Copyright 2020-2025 The Tekton Authors
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

import tlds from 'tlds';
import LinkifyIt from 'linkify-it';
import { classNames } from '@tektoncd/dashboard-utils';

import { colors } from './defaults';
import FormattedDate from '../FormattedDate';

const linkifyIt = LinkifyIt().tlds(tlds);

// eslint-disable-next-line no-control-regex
const ansiRegex = /^\u001b([@-_])(.*?)([@-~])/;
const characterRegex = /[^]/m;

const getDecoratedLevel = level => {
  if (!level) {
    return null;
  }

  return <span className="tkn--log-line--level">{level}</span>;
};

const getXtermColor = commandStack => {
  if (commandStack.length >= 2 && commandStack[0] === '5') {
    commandStack.shift();
    const colorIndex = +commandStack.shift();
    if (colorIndex >= 0 && colorIndex <= 255) {
      return colors[colorIndex];
    }
  }
  return null;
};

const createFormattedString = (str, styleObj, className) => {
  const hasStyles = styleObj.color || styleObj.backgroundColor || className;
  if (hasStyles) {
    return (
      <span style={styleObj} className={className}>
        {str}
      </span>
    );
  }
  return str;
};

const linkify = (str, styleObj, classNameString) => {
  const className = classNameString || undefined;
  if (!str) {
    return null;
  }
  const matches = linkifyIt.match(str);
  if (!matches) {
    return createFormattedString(str, styleObj, className);
  }
  const elements = [];
  let offset = 0;
  matches.forEach(match => {
    if (match.index > offset) {
      const string = str.substring(offset, match.index);
      elements.push(createFormattedString(string, styleObj, className));
    }
    elements.push(
      <a
        href={match.url}
        style={styleObj}
        className={className}
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
    elements.push(createFormattedString(string, styleObj, className));
  }
  return elements;
};

const LogFormat = ({
  fields = { message: true },
  logs = [],
  onToggleGroup
}) => {
  let properties = {
    classes: {},
    foregroundColor: null,
    foregroundColorClass: null,
    backgroundColor: null,
    backgroundColorClass: null
  };

  let styles = {};
  let text = '';
  let line = [];

  const reset = () => {
    properties = {
      classes: {},
      foregroundColor: null,
      foregroundColorClass: null,
      backgroundColor: null,
      backgroundColorClass: null
    };
  };

  const enableTextStyle = flag => {
    const className = `tkn--ansi--text--${flag}`;
    properties.classes[className] = true;
  };

  const disableTextStyle = flag => {
    const className = `tkn--ansi--text--${flag}`;
    properties.classes[className] = false;
  };

  const setFGColor = color => {
    properties.foregroundColorClass = color && `tkn--ansi--color-fg--${color}`;
  };

  const setBGColor = color => {
    properties.backgroundColorClass = color && `tkn--ansi--color-bg--${color}`;
  };

  const setFGColor256 = commandStack => {
    properties.foregroundColor = getXtermColor(commandStack);
  };

  const setBGColor256 = commandStack => {
    properties.backgroundColor = getXtermColor(commandStack);
  };

  const setProperties = {
    0: () => reset(),
    1: () => enableTextStyle('bold'),
    3: () => enableTextStyle('italic'),
    4: () => enableTextStyle('underline'),
    8: () => enableTextStyle('conceal'),
    9: () => enableTextStyle('cross'),

    21: () => disableTextStyle('bold'),
    22: () => disableTextStyle('bold'),
    23: () => disableTextStyle('italic'),
    24: () => disableTextStyle('underline'),
    28: () => disableTextStyle('conceal'),
    29: () => disableTextStyle('cross'),

    30: () => setFGColor('black'),
    31: () => setFGColor('red'),
    32: () => setFGColor('green'),
    33: () => setFGColor('yellow'),
    34: () => setFGColor('blue'),
    35: () => setFGColor('magenta'),
    36: () => setFGColor('cyan'),
    37: () => setFGColor('white'),
    38: s => setFGColor256(s),
    39: () => setFGColor(null),

    40: () => setBGColor('black'),
    41: () => setBGColor('red'),
    42: () => setBGColor('green'),
    43: () => setBGColor('yellow'),
    44: () => setBGColor('blue'),
    45: () => setBGColor('magenta'),
    46: () => setBGColor('cyan'),
    47: () => setBGColor('white'),
    48: s => setBGColor256(s),
    49: () => setBGColor(null),

    90: () => setFGColor('bright-black'),
    91: () => setFGColor('bright-red'),
    92: () => setFGColor('bright-green'),
    93: () => setFGColor('bright-yellow'),
    94: () => setFGColor('bright-blue'),
    95: () => setFGColor('bright-magenta'),
    96: () => setFGColor('bright-cyan'),
    97: () => setFGColor('bright-white'),

    100: () => setBGColor('bright-black'),
    101: () => setBGColor('bright-red'),
    102: () => setBGColor('bright-green'),
    103: () => setBGColor('bright-yellow'),
    104: () => setBGColor('bright-blue'),
    105: () => setBGColor('bright-magenta'),
    106: () => setBGColor('bright-cyan'),
    107: () => setBGColor('bright-white')
  };

  const setStyle = (command, stack) => {
    if (setProperties[command]) {
      setProperties[command](stack);
    }
  };

  const evaluateCommandStack = stack => {
    const command = stack.shift();
    if (!command) {
      return;
    }
    setStyle(command, stack);
    evaluateCommandStack(stack);
  };

  const handleSequence = s => {
    const indicator = s[1];
    const commands = s[2].split(';');
    const terminator = s[3];

    if (indicator !== '[' && terminator !== 'm') {
      return;
    }

    const tag = linkify(
      text,
      styles,
      classNames(
        properties.foregroundColorClass,
        properties.backgroundColorClass,
        properties.classes
      )
    );
    if (tag) {
      line = line.concat(tag);
    }

    text = '';

    if (commands.length === 0) {
      reset();
    }

    evaluateCommandStack(commands);

    styles = {
      color: properties.foregroundColor,
      backgroundColor: properties.backgroundColor
    };
  };

  const parse = (log, index) => {
    const {
      command,
      expanded,
      groupIndex = null,
      level,
      message = '',
      timestamp
    } = log;
    if (!message?.length && !timestamp && !level) {
      return <br key={index} />;
    }
    let offset = 0;
    while (offset !== message.length) {
      const str = message.substring(offset);
      const controlSequence = str.match(ansiRegex);
      if (controlSequence) {
        offset += controlSequence.index + controlSequence[0].length;
        handleSequence(controlSequence);
      } else {
        const character = str.match(characterRegex);
        text += character[0];
        offset += 1;
      }
    }
    if (text) {
      line.push(
        linkify(
          text,
          styles,
          classNames(
            properties.foregroundColorClass,
            properties.backgroundColorClass,
            properties.classes
          )
        )
      );
    }

    return (
      <div
        className={classNames('tkn--log-line', {
          [`tkn--log-level--${level}`]: level,
          'tkn--log-line--group': command === 'group',
          'tkn--log-line--in-group': command !== 'group' && groupIndex !== null
        })}
        key={index}
      >
        {fields.timestamp && (
          <span className="tkn--log-line--timestamp">
            <FormattedDate
              date={timestamp}
              formatTooltip={() => timestamp}
              includeSeconds
            />
            {
              ' ' /* include space character between timestamp and rest of content for better copy-paste experience */
            }
          </span>
        )}
        {fields.level && getDecoratedLevel(level)}
        {command === 'group' && (
          <details
            onToggle={event =>
              onToggleGroup({ expanded: event.target.open, groupIndex })
            }
            open={expanded}
          >
            <summary>{line}</summary>
          </details>
        )}
        {!['group', 'endgroup'].includes(command) && (
          <span className="tkn--log-line--content">{line}</span>
        )}
      </div>
    );
  };

  const convert = () =>
    logs.map((part, index) => {
      text = '';
      line = [];
      return parse(part, index);
    });
  return <code>{convert()}</code>;
};

export default LogFormat;
