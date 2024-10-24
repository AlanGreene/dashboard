import{j as o}from"./jsx-runtime-QvtbNqby.js";import{L as a}from"./Log-Ds7o7VOs.js";import{L as A}from"./LogsToolbar-B8H1uOAH.js";import"./index-BjzEU6Zr.js";import"./usePrefix-CXWdRn9x.js";import"./Button-xjCpe_BM.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-kGlasm3i.js";import"./index-Da0at1PC.js";import"./index-CjLpwf8N.js";import"./Tooltip-BJBVfZ_G.js";import"./events-OVwOsPzJ.js";import"./SkeletonText-pbC4hZL_.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./index-yfVukVkJ.js";import"./index-CfoIBI3E.js";import"./bucket-17-BNnKjYXl.js";import"./Icon-CpyVU44g.js";import"./bucket-5-BULz4hzg.js";import"./LogFormat-BFNc9oD6.js";import"./DotSpinner-BSho4s4W.js";import"./bucket-10-CBZBeuBJ.js";import"./bucket-9-DvpuiSZR.js";const N=`
=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-git-source-skaffold-git-ml8j4 ===
{"level":"info","ts":1553865693.943092,"logger":"fallback-logger","caller":"git-init/main.go:100","msg":"Successfully cloned https://github.com/GoogleContainerTools/skaffold @ \\"master\\" in path \\"/workspace\\""}

=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-build-and-push ===
\x1B[36mINFO\x1B[0m[0000] Downloading base image golang:1.10.1-alpine3.7
2019/03/29 13:21:34 No matching credentials were found, falling back on anonymous
\x1B[36mINFO\x1B[0m[0001] Executing 0 build triggers
\x1B[36mINFO\x1B[0m[0001] Unpacking rootfs as cmd RUN go build -o /app . requires it.
\x1B[36mINFO\x1B[0m[0010] Taking snapshot of full filesystem...
\x1B[36mINFO\x1B[0m[0015] Using files from context: [/workspace/examples/microservices/leeroy-app/app.go]
\x1B[36mINFO\x1B[0m[0015] COPY app.go .
\x1B[36mINFO\x1B[0m[0015] Taking snapshot of files...
\x1B[36mINFO\x1B[0m[0015] RUN go build -o /app .
\x1B[36mINFO\x1B[0m[0015] cmd: /bin/sh
\x1B[36mINFO\x1B[0m[0015] args: [-c go build -o /app .]
\x1B[36mINFO\x1B[0m[0016] Taking snapshot of full filesystem...
\x1B[36mINFO\x1B[0m[0036] CMD ["./app"]
\x1B[36mINFO\x1B[0m[0036] COPY --from=builder /app .
\x1B[36mINFO\x1B[0m[0036] Taking snapshot of files...
error pushing image: failed to push to destination gcr.io/christiewilson-catfactory/leeroy-app:latest: Get https://gcr.io/v2/token?scope=repository%3Achristiewilson-catfactory%2Fleeroy-app%3Apush%2Cpull&scope=repository%3Alibrary%2Falpine%3Apull&service=gcr.io exit status 1

=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: nop ===
Build successful
\r\r
`,L=["ERROR","WARN ","INFO ","DEBUG","TRACE"],C=["error","warning","info","notice","debug"],B=["script:12 ","file.ts:39"],O=["source          ","clone           ","load_artifact   ","collect_evidence","test            "],v=Array.from({length:6e4},(n,e)=>JSON.stringify({command:O[Math.floor(Math.random()*O.length)],level:L[Math.floor(Math.random()*L.length)],message:`Line ${e+1}`,source:B[Math.floor(Math.random()*B.length)],timestamp:new Date().toISOString()})).join(`
`),j=Array.from({length:6e4},(n,e)=>`${new Date().toISOString()} ::${C[Math.floor(Math.random()*C.length)]}::Line ${e+1}`).join(`
`),I=Array.from({length:700},(n,e)=>`Batch ${e+1}
${N}
`).join("").split(`
`).map(n=>JSON.stringify({command:O[Math.floor(Math.random()*O.length)],level:L[Math.floor(Math.random()*L.length)],message:n,source:B[Math.floor(Math.random()*B.length)],timestamp:new Date().toISOString()})).join(`
`),T=Array.from({length:700},(n,e)=>`Batch ${e+1}
${N}
`).join("").split(`
`).map(n=>`${new Date().toISOString()} ::${C[Math.floor(Math.random()*C.length)]}::${n}`).join(`
`),oe={component:a,decorators:[n=>o.jsx("div",{style:{width:"1000px"},children:o.jsx(n,{})})],parameters:{themes:{themeOverride:"dark"}},title:"Log"},i={},l={args:{fetchLogs:()=>"partial logs",forcePolling:!0,stepStatus:{terminated:{reason:"Completed"}}}},m={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},p={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:1}}},name:"Completed: non-zero exit code"},d={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Error"}}}},c={args:{fetchLogs:()=>N,stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},g={args:{delimiter:" ",fetchLogs:()=>v,fields:["timestamp"],grid:!1,stepStatus:{terminated:{reason:"Completed",exitCode:0}}},argTypes:{fields:{control:"inline-check",options:["timestamp","level","source","command"]}},name:"Windowed - JSON format",render:n=>o.jsx(a,{...n,parseLogLine:e=>{if(!e?.length)return e;const r=JSON.parse(e);return Array.from(new Set(n.fields).add("message")).map(t=>{const s=r[t]||"";return n.grid?s:s.trim()}).filter(Boolean).join(n.delimiter)}})},k=/^((?<timestamp>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)\s?)?(::(?<level>error|warning|info|notice|debug)::)?(?<message>.*)?$/s,y=n=>{let e;switch(n){case"error":e="🔴";break;case"warning":e="🟠";break;case"notice":e="🔵";break;case"info":e="  ";break;case"debug":e="🟣";break}return`${e?`${e} `:""}[${n.toUpperCase()}]`},u={args:{delimiter:" ",fetchLogs:()=>j,fields:["timestamp"],stepStatus:{terminated:{reason:"Completed",exitCode:0}}},argTypes:{fields:{control:"inline-check",options:["timestamp","level"]}},name:"Windowed - plain text format",render:n=>o.jsx(a,{...n,parseLogLine:e=>{if(!e?.length)return e;const{groups:r}=k.exec(e);return Array.from(new Set(n.fields).add("message")).map(t=>t==="level"?y(r[t]):r[t]||"").filter(Boolean).join(n.delimiter)}})},f={args:{delimiter:" ",fetchLogs:()=>I,fields:["timestamp"],grid:!1,stepStatus:{terminated:{reason:"Completed",exitCode:0}}},argTypes:{fields:{control:"inline-check",options:["timestamp","level","source","command"]}},name:"performance test (<20,000 lines with ANSI) - JSON format",render:n=>o.jsx(a,{...n,parseLogLine:e=>{if(!e?.length)return e;const r=JSON.parse(e);return Array.from(new Set(n.fields).add("message")).map(t=>{const s=r[t]||"";return n.grid?s:s.trim()}).filter(Boolean).join(n.delimiter)}})},h={args:{delimiter:" ",fetchLogs:()=>T,fields:["timestamp"],stepStatus:{terminated:{reason:"Completed",exitCode:0}}},argTypes:{fields:{control:"inline-check",options:["timestamp","level"]}},name:"performance test (<20,000 lines with ANSI) - plain text format",render:n=>o.jsx(a,{...n,parseLogLine:e=>{if(!e?.length)return e;const{groups:r}=k.exec(e);return Array.from(new Set(n.fields).add("message")).map(t=>t==="level"?y(r[t]):r[t]||"").filter(Boolean).join(n.delimiter)}})},x={args:{fetchLogs:()=>"This step was skipped",stepStatus:{terminated:{reason:"Completed",exitCode:0},terminationReason:"Skipped"}}},S={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:0}},toolbar:o.jsx(A,{name:"step_log_filename.txt",url:"/step/log/url"})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'partial logs',
    forcePolling: true,
    stepStatus: {
      terminated: {
        reason: 'Completed'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 1
      }
    }
  },
  name: 'Completed: non-zero exit code'
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Error'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => ansiLog,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    delimiter: ' ',
    fetchLogs: () => long,
    fields: ['timestamp'],
    grid: false,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level', 'source', 'command']
    }
  },
  name: 'Windowed - JSON format',
  render: args => {
    return <Log {...args} parseLogLine={line => {
      if (!line?.length) {
        return line;
      }
      const lineObj = JSON.parse(line);
      const fields = Array.from(new Set(args.fields).add('message'));
      const output = fields.map(field => {
        const content = lineObj[field] || '';
        return args.grid ? content : content.trim();
      }).filter(Boolean);
      return output.join(args.delimiter);
    }} />;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    delimiter: ' ',
    fetchLogs: () => longPlain,
    fields: ['timestamp'],
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level']
    }
  },
  name: 'Windowed - plain text format',
  render: args => {
    return <Log {...args} parseLogLine={line => {
      if (!line?.length) {
        return line;
      }
      const {
        groups
      } = logFormatRegex.exec(line);
      const fields = Array.from(new Set(args.fields).add('message'));
      const output = fields.map(field => {
        if (field === 'level') {
          return getDecoratedLevel(groups[field]);
        }
        return groups[field] || '';
      }).filter(Boolean);
      return output.join(args.delimiter);
    }} />;
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    delimiter: ' ',
    fetchLogs: () => performanceTest,
    fields: ['timestamp'],
    grid: false,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level', 'source', 'command']
    }
  },
  name: 'performance test (<20,000 lines with ANSI) - JSON format',
  render: args => {
    return <Log {...args} parseLogLine={line => {
      if (!line?.length) {
        return line;
      }
      const lineObj = JSON.parse(line);
      const fields = Array.from(new Set(args.fields).add('message'));
      const output = fields.map(field => {
        const content = lineObj[field] || '';
        return args.grid ? content : content.trim();
      }).filter(Boolean);
      return output.join(args.delimiter);
    }} />;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    delimiter: ' ',
    fetchLogs: () => performanceTestPlain,
    fields: ['timestamp'],
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  argTypes: {
    fields: {
      control: 'inline-check',
      options: ['timestamp', 'level']
    }
  },
  name: 'performance test (<20,000 lines with ANSI) - plain text format',
  render: args => {
    return <Log {...args} parseLogLine={line => {
      if (!line?.length) {
        return line;
      }
      const {
        groups
      } = logFormatRegex.exec(line);
      const fields = Array.from(new Set(args.fields).add('message'));
      const output = fields.map(field => {
        if (field === 'level') {
          return getDecoratedLevel(groups[field]);
        }
        return groups[field] || '';
      }).filter(Boolean);
      return output.join(args.delimiter);
    }} />;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'This step was skipped',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      },
      terminationReason: 'Skipped'
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    },
    toolbar: <LogsToolbar name="step_log_filename.txt" url="/step/log/url" />
  }
}`,...S.parameters?.docs?.source}}};const se=["Loading","Pending","Completed","CompletedNonZero","Failed","ANSICodes","Windowed","WindowedPlain","Performance","PerformancePlain","Skipped","Toolbar"];export{c as ANSICodes,m as Completed,p as CompletedNonZero,d as Failed,i as Loading,l as Pending,f as Performance,h as PerformancePlain,x as Skipped,S as Toolbar,g as Windowed,u as WindowedPlain,se as __namedExportsOrder,oe as default};
