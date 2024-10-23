/*
Copyright 2019-2024 The Tekton Authors
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

import Log from './Log';
import LogsToolbar from '../LogsToolbar';

const ansiLog =
  '\n=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-git-source-skaffold-git-ml8j4 ===\n{"level":"info","ts":1553865693.943092,"logger":"fallback-logger","caller":"git-init/main.go:100","msg":"Successfully cloned https://github.com/GoogleContainerTools/skaffold @ \\"master\\" in path \\"/workspace\\""}\n\n=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-build-and-push ===\n\u001b[36mINFO\u001b[0m[0000] Downloading base image golang:1.10.1-alpine3.7\n2019/03/29 13:21:34 No matching credentials were found, falling back on anonymous\n\u001b[36mINFO\u001b[0m[0001] Executing 0 build triggers\n\u001b[36mINFO\u001b[0m[0001] Unpacking rootfs as cmd RUN go build -o /app . requires it.\n\u001b[36mINFO\u001b[0m[0010] Taking snapshot of full filesystem...\n\u001b[36mINFO\u001b[0m[0015] Using files from context: [/workspace/examples/microservices/leeroy-app/app.go]\n\u001b[36mINFO\u001b[0m[0015] COPY app.go .\n\u001b[36mINFO\u001b[0m[0015] Taking snapshot of files...\n\u001b[36mINFO\u001b[0m[0015] RUN go build -o /app .\n\u001b[36mINFO\u001b[0m[0015] cmd: /bin/sh\n\u001b[36mINFO\u001b[0m[0015] args: [-c go build -o /app .]\n\u001b[36mINFO\u001b[0m[0016] Taking snapshot of full filesystem...\n\u001b[36mINFO\u001b[0m[0036] CMD ["./app"]\n\u001b[36mINFO\u001b[0m[0036] COPY --from=builder /app .\n\u001b[36mINFO\u001b[0m[0036] Taking snapshot of files...\nerror pushing image: failed to push to destination gcr.io/christiewilson-catfactory/leeroy-app:latest: Get https://gcr.io/v2/token?scope=repository%3Achristiewilson-catfactory%2Fleeroy-app%3Apush%2Cpull\u0026scope=repository%3Alibrary%2Falpine%3Apull\u0026service=gcr.io exit status 1\n\n=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: nop ===\nBuild successful\n\r\r\n';

const levels = ['ERROR', 'WARN ', 'INFO ', 'DEBUG', 'TRACE'];
const levelsPlain = ['error', 'warning', 'info', 'notice', 'debug'];
const sources = ['script:12 ', 'file.ts:39'];
const commands = [
  'source          ',
  'clone           ',
  'load_artifact   ',
  'collect_evidence',
  'test            '
];

const long = Array.from({ length: 60000 }, (v, i) =>
  JSON.stringify({
    command: commands[Math.floor(Math.random() * commands.length)],
    level: levels[Math.floor(Math.random() * levels.length)],
    message: `Line ${i + 1}`,
    source: sources[Math.floor(Math.random() * sources.length)],
    timestamp: new Date().toISOString()
  })
).join('\n');

const longPlain = Array.from(
  { length: 60000 },
  (v, i) =>
    `${new Date().toISOString()} ::${levelsPlain[Math.floor(Math.random() * levelsPlain.length)]}::Line ${i + 1}`
).join('\n');

const performanceTest = Array.from(
  { length: 700 },
  (v, i) => `Batch ${i + 1}\n${ansiLog}\n`
)
  .join('')
  .split('\n')
  .map(message =>
    JSON.stringify({
      command: commands[Math.floor(Math.random() * commands.length)],
      level: levels[Math.floor(Math.random() * levels.length)],
      message,
      source: sources[Math.floor(Math.random() * sources.length)],
      timestamp: new Date().toISOString()
    })
  )
  .join('\n');

const performanceTestPlain = Array.from(
  { length: 700 },
  (v, i) => `Batch ${i + 1}\n${ansiLog}\n`
)
  .join('')
  .split('\n')
  .map(
    message =>
      `${new Date().toISOString()} ::${levelsPlain[Math.floor(Math.random() * levelsPlain.length)]}::${message}`
  )
  .join('\n');

export default {
  component: Log,
  decorators: [
    Story => (
      <div style={{ width: '1000px' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  title: 'Log'
};

export const Loading = {};

export const Pending = {
  args: {
    fetchLogs: () => 'partial logs',
    forcePolling: true,
    stepStatus: { terminated: { reason: 'Completed' } }
  }
};

export const Completed = {
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } }
  }
};

export const CompletedNonZero = {
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: { terminated: { reason: 'Completed', exitCode: 1 } }
  },
  name: 'Completed: non-zero exit code'
};

export const Failed = {
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: { terminated: { reason: 'Error' } }
  }
};

export const ANSICodes = {
  args: {
    fetchLogs: () => ansiLog,
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } }
  }
};

export const Windowed = {
  args: {
    delimiter: ' ',
    fetchLogs: () => long,
    fields: ['timestamp'],
    grid: false,
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level', 'source', 'command']
    }
  },
  name: 'Windowed - JSON format',
  render: args => {
    return (
      <Log
        {...args}
        parseLogLine={line => {
          if (!line?.length) {
            return line;
          }

          const lineObj = JSON.parse(line);
          const fields = Array.from(new Set(args.fields).add('message'));
          const output = fields
            .map(field => {
              const content = lineObj[field] || '';
              return args.grid ? content : content.trim();
            })
            .filter(Boolean);
          return output.join(args.delimiter);
        }}
      />
    );
  }
};

const logFormatRegex =
  /^((?<timestamp>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)\s?)?(::(?<level>error|warning|info|notice|debug)::)?(?<message>.*)?$/s;

const getDecoratedLevel = level => {
  let levelDecoration;
  switch (level) {
    case 'error':
      levelDecoration = '🔴';
      break;
    case 'warning':
      levelDecoration = '🟠';
      break;
    case 'notice':
      levelDecoration = '🔵';
      break;
    case 'info':
      levelDecoration = '  ';
      break;
    case 'debug':
      levelDecoration = '🟣';
      break;
    default:
  }

  return `${levelDecoration ? `${levelDecoration} ` : ''}[${level.toUpperCase()}]`;
};

export const WindowedPlain = {
  args: {
    delimiter: ' ',
    fetchLogs: () => longPlain,
    fields: ['timestamp'],
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level']
    }
  },
  name: 'Windowed - plain text format',
  render: args => {
    return (
      <Log
        {...args}
        parseLogLine={line => {
          if (!line?.length) {
            return line;
          }

          const { groups } = logFormatRegex.exec(line);
          const fields = Array.from(new Set(args.fields).add('message'));
          const output = fields
            .map(field => {
              if (field === 'level') {
                return getDecoratedLevel(groups[field]);
              }
              return groups[field] || '';
            })
            .filter(Boolean);

          return output.join(args.delimiter);
        }}
      />
    );
  }
};

export const Performance = {
  args: {
    delimiter: ' ',
    fetchLogs: () => performanceTest,
    fields: ['timestamp'],
    grid: false,
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level', 'source', 'command']
    }
  },
  name: 'performance test (<20,000 lines with ANSI) - JSON format',
  render: args => {
    return (
      <Log
        {...args}
        parseLogLine={line => {
          if (!line?.length) {
            return line;
          }

          const lineObj = JSON.parse(line);
          const fields = Array.from(new Set(args.fields).add('message'));
          const output = fields
            .map(field => {
              const content = lineObj[field] || '';
              return args.grid ? content : content.trim();
            })
            .filter(Boolean);
          return output.join(args.delimiter);
        }}
      />
    );
  }
};

export const PerformancePlain = {
  args: {
    delimiter: ' ',
    fetchLogs: () => performanceTestPlain,
    fields: ['timestamp'],
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level']
    }
  },
  name: 'performance test (<20,000 lines with ANSI) - plain text format',
  render: args => {
    return (
      <Log
        {...args}
        parseLogLine={line => {
          if (!line?.length) {
            return line;
          }

          const { groups } = logFormatRegex.exec(line);
          const fields = Array.from(new Set(args.fields).add('message'));
          const output = fields
            .map(field => {
              if (field === 'level') {
                return getDecoratedLevel(groups[field]);
              }
              return groups[field] || '';
            })
            .filter(Boolean);

          return output.join(args.delimiter);
        }}
      />
    );
  }
};

export const Skipped = {
  args: {
    fetchLogs: () => 'This step was skipped',
    stepStatus: {
      terminated: { reason: 'Completed', exitCode: 0 },
      terminationReason: 'Skipped'
    }
  }
};

export const Toolbar = {
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: { terminated: { reason: 'Completed', exitCode: 0 } },
    toolbar: <LogsToolbar name="step_log_filename.txt" url="/step/log/url" />
  }
};
