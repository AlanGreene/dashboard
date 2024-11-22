import{_ as h}from"./iframe-BrQ0bBiJ.js";import{j as g}from"./jsx-runtime-Bzbk6Sx8.js";import{L as u}from"./Log-BS7ml-w6.js";import{L as x}from"./LogsToolbar-BqJO-Lla.js";import"../sb-preview/runtime.js";import"./index-DoYbGmCh.js";import"./usePrefix-DQgSqSG9.js";import"./Button-0g61YMpW.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-51-aJb-v.js";import"./index-SPZK-v-M.js";import"./index-D295wprO.js";import"./Tooltip-BfR-5Xhs.js";import"./events-OVwOsPzJ.js";import"./SkeletonText-DNm0RNbr.js";import"./extends-CF3RwP-h.js";import"./index-D0k5bR2p.js";import"./index-CfoIBI3E.js";import"./bucket-17-CpsfdLmP.js";import"./Icon-BbW6Eq-V.js";import"./bucket-5-DU9L3vMN.js";import"./LogFormat-BxNv-gxd.js";import"./FormattedDate-CfsM43Pp.js";import"./DotSpinner-DlxYwwxQ.js";import"./MenuItem-C45H-6Q2.js";import"./useControllableState-DZFM50EU.js";import"./index-BsO2LqBO.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-Bu6lI_iC.js";import"./wrapFocus-BvAm1HsT.js";import"./noopFn-g4z370MD.js";import"./Text-9Q8NT07l.js";import"./bucket-2-BzIGxUKv.js";import"./bucket-11-Cyecz5PN.js";import"./bucket-9-ZNHjrwlJ.js";import"./bucket-14-DDIDUikv.js";const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,f=`
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
`,C=Array.from({length:6e4},(e,o)=>`Line ${o+1}`).join(`
`),w=Array.from({length:700},(e,o)=>`Batch ${o+1}
${f}
`).join(""),re={component:u,decorators:[e=>g.jsx("div",{style:{width:"auto"},children:g.jsx(e,{})})],parameters:{themes:{themeOverride:"dark"}},title:"Log"},s={},t={args:{fetchLogs:()=>"partial logs",forcePolling:!0,stepStatus:{terminated:{reason:"Completed"}}}},r={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},a={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:1}}},name:"Completed: non-zero exit code"},n={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Error"}}}},m={args:{fetchLogs:()=>f,stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},i={args:{fetchLogs:()=>C,showLevels:!0,showTimestamps:!0,stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},p={args:{fetchLogs:()=>w,showLevels:!0,showTimestamps:!0,stepStatus:{terminated:{reason:"Completed",exitCode:0}}},name:"performance test (<20,000 lines with ANSI)"},l={args:{fetchLogs:()=>"This step was skipped",stepStatus:{terminated:{reason:"Completed",exitCode:0},terminationReason:"Skipped"}}},d={args:{fetchLogs:async()=>(await h(async()=>{const{default:e}=await import("./timestamps_log_levels-Chnlm0bb.js");return{default:e}},[],import.meta.url)).default,logLevels:{error:!0,warning:!0,info:!0,notice:!0,debug:!1},showLevels:!0,showTimestamps:!1,stepStatus:{terminated:{reason:"Completed",exitCode:0}}},render:e=>{const[,o]=L();return g.jsx(u,{...e,toolbar:g.jsx(x,{logLevels:e.showLevels?e.logLevels:null,name:"step_log_filename.txt",onToggleLogLevel:c=>o({logLevels:{...e.logLevels,...c}}),onToggleShowTimestamps:c=>o({showTimestamps:c}),showTimestamps:e.showTimestamps,url:"/step/log/url"})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'partial logs',
    forcePolling: true,
    stepStatus: {
      terminated: {
        reason: 'Completed'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Error'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => ansiLog,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => long,
    showLevels: true,
    showTimestamps: true,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => performanceTest,
    showLevels: true,
    showTimestamps: true,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  name: 'performance test (<20,000 lines with ANSI)'
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: async () => (await import('./samples/timestamps_log_levels.txt?raw')).default,
    logLevels: {
      error: true,
      warning: true,
      info: true,
      notice: true,
      debug: false
    },
    showLevels: true,
    showTimestamps: false,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <Log {...args} toolbar={<LogsToolbar logLevels={args.showLevels ? args.logLevels : null} name="step_log_filename.txt" onToggleLogLevel={logLevel => updateArgs({
      logLevels: {
        ...args.logLevels,
        ...logLevel
      }
    })} onToggleShowTimestamps={showTimestamps => updateArgs({
      showTimestamps
    })} showTimestamps={args.showTimestamps} url="/step/log/url" />} />;
  }
}`,...d.parameters?.docs?.source}}};const ae=["Loading","Pending","Completed","CompletedNonZero","Failed","ANSICodes","Windowed","Performance","Skipped","Toolbar"];export{m as ANSICodes,r as Completed,a as CompletedNonZero,n as Failed,s as Loading,t as Pending,p as Performance,l as Skipped,d as Toolbar,i as Windowed,ae as __namedExportsOrder,re as default};
