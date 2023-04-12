/*
Copyright 2020-2023 The Tekton Authors
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

import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';

import LogFormat from './LogFormat';
import 'xterm/css/xterm.css';

const ansiColors = (() => {
  let text = '';
  // 16 named 'system' colors
  [30, 90, 40, 100].forEach(seq => {
    for (let i = 0; i < 8; i += 1) {
      text += `\u001b[${seq + i}m${i}  \u001b[0m`;
    }
    text += '\n';
  });
  text += '\n';
  // 256-colors
  [38, 48].forEach(seq => {
    for (let i = 0; i < 256; i += 1) {
      text += `\u001b[${seq};5;${i}m${i}  \u001b[0m`;
      if ((i + 1) % 6 === 4) {
        text += '\n';
      }
    }
    text += '\n';
  });
  return text;
})();

const ansiTextStyles = (() => {
  const textStyles = {
    bold: 1,
    italic: 3,
    underline: 4,
    conceal: 8,
    cross: 9
  };

  let text = '';
  Object.entries(textStyles).forEach(([key, value]) => {
    text += `\u001b[${value}m${key}\u001b[0m\n`;
  });
  return text;
})();

const contentWithLinks = `
+ curl https://raw.githubusercontent.com/tektoncd/pipeline/master/tekton/koparse/koparse.py --output /usr/bin/koparse.py
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0   0  3946    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     01100  3946  100  3946    0     0  13421      0 --:--:-- --:--:-- --:--:-- 13376
+ chmod +x /usr/bin/koparse.py
+ REGIONS=(us eu asia)
+ IMAGES=(gcr.io/tekton-releases/github.com/tektoncd/dashboard/cmd/dashboard)
+ BUILT_IMAGES=($(/usr/bin/koparse.py --path /workspace/output/bucket-for-dashboard/latest/tekton-dashboard-release.yaml --base gcr.io/tekton-releases/github.com/tektoncd/dashboard --images \${IMAGES[@]}))
`;

export default {
  component: LogFormat,
  title: 'LogFormat'
};

export const Colors = {
  render: () => <LogFormat>{ansiColors}</LogFormat>,

  parameters: {
    backgrounds: {
      default: 'gray90'
    }
  }
};

export const TextStyles = () => <LogFormat>{ansiTextStyles}</LogFormat>;

export const URLDetection = () => <LogFormat>{contentWithLinks}</LogFormat>;

const contentOptions = [contentWithLinks, ansiTextStyles, ansiColors];

function XTermDisplay() {
  const terminalRef = useRef(null);
  const containerRef = React.createRef();
  const fitAddonRef = useRef(null);

  const [content, setContent] = useState('');

  const timerRef = useRef(false);
  function loadContent() {
    if (timerRef.current) {
      timerRef.current = false;
      return;
    }
    const optionIndex = Math.floor(Math.random() * contentOptions.length);
    console.log(optionIndex);
    setContent(contentOptions[optionIndex]);
    timerRef.current = true;
    setTimeout(loadContent, 5000);
  }

  if (!timerRef.current) {
    loadContent();
  }

  if (terminalRef.current === null) {
    const terminal = new Terminal({
      // allowTransparency: true,
      // cols
      convertEol: true,
      // cursorStyle: 'block', // block, underline, bar
      disableStdin: true,
      // fontFamily
      // fontWeight
      // fontWeightBold
      // lineHeight
      minimumContrastRatio: 7, // For WCAG level AAA compliance
      // rows
      screenReaderMode: true,
      theme: {
        background: 'rgba(0, 0, 0, 0)',
        black: 'rgb(0, 0, 0)',
        blue: 'rgb(85, 85, 255)',
        brightBlack: 'rgb(85, 85, 85)',
        brightBlue: 'rgb(136, 136, 255)',
        brightCyan: 'rgb(85, 255, 255)',
        brightGreen: 'rgb(0, 255, 0)',
        brightMagenta: 'rgb(255, 85, 255)',
        brightRed: 'rgb(255, 85, 85)',
        brightWhite: 'rgb(255, 255, 255)',
        brightYellow: 'rgb(255, 255, 85)',
        cursor: 'transparent',
        cursorAccent: 'transparent',
        cyan: 'rgb(0, 187, 187)',
        extendedAnsi: '', // ???
        foreground: '',
        green: 'rgb(0, 187, 0)',
        magenta: 'rgb(187, 0, 187)',
        red: 'rgb(187, 0, 0)',
        selectionBackground: '',
        selectionForeground: '',
        selectionInactiveBackground: '',
        white: 'rgb(187, 187, 187)',
        yellow: 'rgb(187, 187, 0)'
      }
    });
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.loadAddon(new WebLinksAddon());

    fitAddonRef.current = fitAddon;
    terminalRef.current = terminal;
  }

  useEffect(() => {
    const terminal = terminalRef.current;
    terminal.open(containerRef.current);
    fitAddonRef.current.fit();
    terminal.onResize(({ rows, cols }) =>
      console.log('Resizing', { rows, cols })
    );

    // terminal.current.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    // terminal.write(contentWithLinks);
    // terminal.current.write(ansiColors);
    // terminal.current.write(ansiTextStyles);

    terminal.write(content);

    return () => terminalRef.current.dispose();
  }, []);

  useEffect(() => {
    const terminal = terminalRef.current;
    terminal.reset();
    terminal.write(content);
  }, [content]);

  return <div ref={containerRef} style={{ height: '1000px' }} />;
}

export const Xterm = () => <XTermDisplay />;
Xterm.parameters = {
  backgrounds: {
    default: 'gray90'
  }
};

/*
function addAnsiHyperlink(): void {
  term.write('\n\n\r');
  term.writeln(`Regular link with no id:`);
  term.writeln('\x1b]8;;https://github.com\x07GitHub\x1b]8;;\x07');
  term.writeln('\x1b]8;;https://xtermjs.org\x07https://xtermjs.org\x1b]8;;\x07\x1b[C<- null cell');
  term.writeln(`\nAdjacent links:`);
  term.writeln('\x1b]8;;https://github.com\x07GitHub\x1b]8;;https://xtermjs.org\x07\x1b[32mxterm.js\x1b[0m\x1b]8;;\x07');
  term.writeln(`\nShared ID link (underline should be shared):`);
  term.writeln('╔════╗');
  term.writeln('║\x1b]8;id=testid;https://github.com\x07GitH\x1b]8;;\x07║');
  term.writeln('║\x1b]8;id=testid;https://github.com\x07ub\x1b]8;;\x07  ║');
  term.writeln('╚════╝');
  term.writeln(`\nWrapped link with no ID (not necessarily meant to share underline):`);
  term.writeln('╔════╗');
  term.writeln('║    ║');
  term.writeln('║    ║');
  term.writeln('╚════╝');
  term.write('\x1b[3A\x1b[1C\x1b]8;;https://xtermjs.org\x07xter\x1b[B\x1b[4Dm.js\x1b]8;;\x07\x1b[2B\x1b[5D');
}
*/
