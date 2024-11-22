import{j as r}from"./jsx-runtime-Bzbk6Sx8.js";import{S as o}from"./StepDetails-DHMohW4P.js";import{L as l}from"./Log-BS7ml-w6.js";import"./index-DoYbGmCh.js";import"./index-51-aJb-v.js";import"./index-D0k5bR2p.js";import"./index-CfoIBI3E.js";import"./usePrefix-DQgSqSG9.js";import"./Tabs-Hook4Rrk.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-D295wprO.js";import"./index-Drl37m2w.js";import"./Tooltip-BfR-5Xhs.js";import"./useControllableState-DZFM50EU.js";import"./Text-9Q8NT07l.js";import"./bucket-3-DW_-k99P.js";import"./Icon-BbW6Eq-V.js";import"./DetailsHeader-BEVh4PqJ.js";import"./StatusIcon-B3mfoTbA.js";import"./bucket-17-CpsfdLmP.js";import"./Spinner-6fWOlw3V.js";import"./bucket-13-DZ_6w3Wo.js";import"./bucket-2-BzIGxUKv.js";import"./bucket-18-DO7kS4tX.js";import"./constants-PT-Qtcqm.js";import"./bucket-12-Bu6lI_iC.js";import"./FormattedDuration-DR-nx8kl.js";import"./StepDefinition-CS89xxdV.js";import"./ViewYAML-RlzDqp-c.js";import"./Button-0g61YMpW.js";import"./index-SPZK-v-M.js";import"./events-OVwOsPzJ.js";import"./SkeletonText-DNm0RNbr.js";import"./extends-CF3RwP-h.js";import"./bucket-5-DU9L3vMN.js";import"./LogFormat-BxNv-gxd.js";import"./FormattedDate-CfsM43Pp.js";import"./DotSpinner-DlxYwwxQ.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__;function d({exitCode:e=0,terminationReason:t}={}){return{terminated:{exitCode:e,reason:"Completed"},terminationReason:t}}const u=`
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
`;function g({exitCode:e=0,logContent:t=u,terminationReason:n}={}){return r.jsx(l,{fetchLogs:()=>t,stepStatus:d({exitCode:e,terminationReason:n})})}const $={args:{definition:"this will show the Task.spec or TaskRun.spec.taskSpec",stepName:"build",taskRun:{}},component:o,title:"StepDetails"},s={args:{logContainer:g(),stepStatus:d()},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}},i={args:{logContainer:g({exitCode:1}),stepStatus:d({exitCode:1})},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}},a={args:{logContainer:g(),skippedTask:{}},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}},p={args:{logContainer:g({logContent:"Step was skipped due to when expressions were evaluated to false.",terminationReason:"Skipped"}),stepStatus:{terminated:{exitCode:0,reason:"Completed"},terminationReason:"Skipped"}},render:e=>{const[,t]=m();return r.jsx(o,{...e,onViewChange:n=>t({view:n})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ee=["Default","WithWarning","SkippedTask","SkippedStep"];export{s as Default,p as SkippedStep,a as SkippedTask,i as WithWarning,ee as __namedExportsOrder,$ as default};
