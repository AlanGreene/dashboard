import{j as r}from"./jsx-runtime-QvtbNqby.js";import{S as o}from"./StepDetails-Cg8asdC2.js";import{L as l}from"./Log-Ds7o7VOs.js";import"./index-BjzEU6Zr.js";import"./index-kGlasm3i.js";import"./index-yfVukVkJ.js";import"./index-CfoIBI3E.js";import"./usePrefix-CXWdRn9x.js";import"./Tabs-CLCSIGLB.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-CjLpwf8N.js";import"./index-Dc4QqC9m.js";import"./Tooltip-BJBVfZ_G.js";import"./useControllableState-Co_owzu1.js";import"./deprecate-GNGtdTso.js";import"./bucket-2-C9DXCKPV.js";import"./Icon-CpyVU44g.js";import"./bucket-3-Dq7FRXBG.js";import"./DetailsHeader-e2YhChju.js";import"./StatusIcon-CbB-w7ji.js";import"./bucket-16-CiwkPD5r.js";import"./Spinner-Dbwi84XW.js";import"./bucket-13-CBnqkqgu.js";import"./bucket-17-BNnKjYXl.js";import"./bucket-18-ByJs4WER.js";import"./constants-PT-Qtcqm.js";import"./bucket-12-CMgbqDR8.js";import"./FormattedDuration-7RrZaDA3.js";import"./StepDefinition-D8E6zbn8.js";import"./ViewYAML-ReMqin4P.js";import"./Button-xjCpe_BM.js";import"./index-Da0at1PC.js";import"./events-OVwOsPzJ.js";import"./SkeletonText-pbC4hZL_.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./bucket-5-BULz4hzg.js";import"./LogFormat-BFNc9oD6.js";import"./DotSpinner-BSho4s4W.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__;function d({exitCode:e=0,terminationReason:t}={}){return{terminated:{exitCode:e,reason:"Completed"},terminationReason:t}}const u=`
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
`;function g({exitCode:e=0,logContent:t=u,terminationReason:n}={}){return r.jsx(l,{fetchLogs:()=>t,stepStatus:d({exitCode:e,terminationReason:n})})}const ee={args:{definition:"this will show the Task.spec or TaskRun.spec.taskSpec",stepName:"build",taskRun:{}},component:o,title:"StepDetails"},s={args:{logContainer:g(),stepStatus:d()},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}},i={args:{logContainer:g({exitCode:1}),stepStatus:d({exitCode:1})},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}},a={args:{logContainer:g(),skippedTask:{}},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}},p={args:{logContainer:g({logContent:"Step was skipped due to when expressions were evaluated to false.",terminationReason:"Skipped"}),stepStatus:{terminated:{exitCode:0,reason:"Completed"},terminationReason:"Skipped"}},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    logContainer: getLogContainer(),
    stepStatus: getStepStatus()
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <StepDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    logContainer: getLogContainer({
      exitCode: 1
    }),
    stepStatus: getStepStatus({
      exitCode: 1
    })
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <StepDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    logContainer: getLogContainer(),
    skippedTask: {}
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <StepDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logContainer: getLogContainer({
      logContent: 'Step was skipped due to when expressions were evaluated to false.',
      terminationReason: 'Skipped'
    }),
    stepStatus: {
      terminated: {
        exitCode: 0,
        reason: 'Completed'
      },
      terminationReason: 'Skipped'
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <StepDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...p.parameters?.docs?.source}}};const te=["Default","WithWarning","SkippedTask","SkippedStep"];export{s as Default,p as SkippedStep,a as SkippedTask,i as WithWarning,te as __namedExportsOrder,ee as default};
