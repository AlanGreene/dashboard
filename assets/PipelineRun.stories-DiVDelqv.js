import{j as e}from"./jsx-runtime-Bzbk6Sx8.js";import{r as se}from"./index-DoYbGmCh.js";import"./usePrefix-DQgSqSG9.js";import{I as C}from"./Notification-CdcBZPPH.js";import{S as Pe}from"./SkeletonText-DNm0RNbr.js";import{u as Ve}from"./index-D0k5bR2p.js";import{b as _e,g as te,d as Ne,e as je}from"./index-CfoIBI3E.js";import{r as Ee}from"./index-B0ETwOQ0.js";import{R as ae}from"./RunHeader-DcWmRlOx.js";import{T as Me}from"./TaskTree-x8qds-Vl.js";import{S as We}from"./StepDetails-DHMohW4P.js";import{T as ye}from"./TaskRunDetails-DmijD6Oi.js";import{L as Ce}from"./Log-BS7ml-w6.js";import{l as P}from"./constants-PT-Qtcqm.js";import{L as De}from"./LogsToolbar-BqJO-Lla.js";import"./index-CiJV-Qzo.js";import"./index-51-aJb-v.js";import"./index-D295wprO.js";import"./Button-0g61YMpW.js";import"./index-SPZK-v-M.js";import"./Tooltip-BfR-5Xhs.js";import"./events-OVwOsPzJ.js";import"./noopFn-g4z370MD.js";import"./wrapFocus-BvAm1HsT.js";import"./Text-9Q8NT07l.js";import"./bucket-3-DW_-k99P.js";import"./Icon-BbW6Eq-V.js";import"./bucket-6-uvXOZeGf.js";import"./bucket-2-BzIGxUKv.js";import"./bucket-18-DO7kS4tX.js";import"./bucket-9-ZNHjrwlJ.js";import"./index-Drl37m2w.js";import"./index-B8iL44Rh.js";import"./bucket-4-DPxbtzPb.js";import"./FormattedDate-CfsM43Pp.js";import"./Task-BB8VYseE.js";import"./index-BsO2LqBO.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-Bu6lI_iC.js";import"./OverflowMenuItem-iAjAaEGF.js";import"./StatusIcon-B3mfoTbA.js";import"./bucket-17-CpsfdLmP.js";import"./Spinner-6fWOlw3V.js";import"./bucket-13-DZ_6w3Wo.js";import"./Step-DIXJD-8b.js";import"./Tabs-Hook4Rrk.js";import"./useControllableState-DZFM50EU.js";import"./DetailsHeader-BEVh4PqJ.js";import"./FormattedDuration-DR-nx8kl.js";import"./StepDefinition-CS89xxdV.js";import"./ViewYAML-RlzDqp-c.js";import"./Table-ZgBq0ph7.js";import"./index-sWjxewSB.js";import"./bucket-0-DVe4YXaa.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Search-CoPmlita.js";import"./FormContext-D1Yu1AhR.js";import"./bucket-14-DDIDUikv.js";import"./extends-CF3RwP-h.js";import"./bucket-5-DU9L3vMN.js";import"./LogFormat-BxNv-gxd.js";import"./DotSpinner-DlxYwwxQ.js";import"./MenuItem-C45H-6Q2.js";import"./bucket-11-Cyecz5PN.js";const Oe=({children:t,container:s})=>Ee.createPortal(t,s);function ne({pipeline:t,pipelineRun:s,selectedTaskId:a,taskRun:n}){const g=n?.metadata?.labels?.[P.MEMBER_OF];return(s.spec?.pipelineSpec?.[g]||s.status?.pipelineSpec?.[g]||t?.spec?.[g])?.find(v=>v.name===a)}function k({customNotification:t,enableLogAutoScroll:s,enableLogScrollButtons:a,error:n,fetchLogs:g,forceLogPolling:O,getLogsToolbar:v,handleTaskSelected:oe=()=>{},icon:F,loading:E,logLevels:ie,maximizedLogsContainer:M,onRetryChange:de,onViewChange:U=()=>{},pipeline:B,pipelineRun:r,pod:pe,pollingInterval:le,runActions:ce,selectedRetry:b,selectedStepId:p=null,selectedTaskId:c=null,selectedTaskRunName:W,showLogLevels:me,showLogTimestamps:ue,taskRuns:ke,tasks:ge,triggerHeader:q,view:K=null}){const I=Ve(),[w,fe]=se.useState(!1);function Te(){if(!r.status?.taskRuns&&!r.status?.childReferences)return null;const{status:{childReferences:o,taskRuns:d}}=r,{message:l,status:f,reason:ee}=te(r);return f==="False"&&!d&&!o&&{message:l,reason:ee}}function he(){fe(o=>!o)}function Re({stepName:o,stepStatus:d,taskRun:l}){if(!p||!d)return null;const f=w&&M?Oe:se.Fragment;return e.jsx(f,{...w?{container:M}:null,children:e.jsx(Ce,{toolbar:v&&d&&v({isMaximized:w,onToggleMaximized:!!M&&he,stepStatus:d,taskRun:l}),fetchLogs:()=>g(o,d,l),forcePolling:O,logLevels:ie,pollingInterval:le,stepStatus:d,isLogsMaximized:w,enableLogAutoScroll:s,enableLogScrollButtons:a,showLevels:me,showTimestamps:ue},`${c}:${p}:${b}`)})}function $(){return!r?.status?.taskRuns&&!r?.status?.childReferences?[]:ke||[]}function Se({selectedRetry:o,selectedStepId:d,selectedTaskId:l,taskRunName:f}){const xe=$().find(({metadata:Ae})=>Ae.labels?.[P.PIPELINE_TASK]===l)||{},Ze=ne({pipeline:B,pipelineRun:r,selectedTaskId:l,taskRun:xe});oe({selectedRetry:o,selectedStepId:d,selectedTaskId:l,taskRunName:Ze?.matrix?f:void 0})}if(E)return e.jsx(Pe,{heading:!0,width:"60%"});if(n)return e.jsxs(e.Fragment,{children:[t,e.jsx(C,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:I.formatMessage({id:"dashboard.pipelineRun.error",defaultMessage:"Error loading PipelineRun"}),subtitle:_e(n)})]});if(!r)return e.jsxs(e.Fragment,{children:[t,e.jsx(C,{kind:"info",hideCloseButton:!0,lowContrast:!0,title:I.formatMessage({id:"dashboard.pipelineRun.failed",defaultMessage:"Cannot load PipelineRun"}),subtitle:I.formatMessage({id:"dashboard.pipelineRun.notFound",defaultMessage:"PipelineRun not found"})})]});const ve=r.metadata.name||r.metadata.generateName,y=Te(),{lastTransitionTime:z,message:be,reason:Ie,status:Y}=te(r);if(y)return e.jsxs(e.Fragment,{children:[e.jsx(ae,{icon:F,lastTransitionTime:z,loading:E,pipelineRun:r,runName:r.pipelineRunName,reason:"Error",status:Y,triggerHeader:q}),t,e.jsx(C,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:I.formatMessage({id:"dashboard.pipelineRun.failedMessage",defaultMessage:"Unable to load PipelineRun: {reason}"},{reason:y.reason}),subtitle:y.message})]});const L=$();let i=L.find(({metadata:o})=>o.labels?.[P.PIPELINE_TASK]===c)||{};const G=ne({pipeline:B,pipelineRun:r,selectedTaskId:c,taskRun:i});G?.matrix&&W&&(i=L.find(({metadata:o})=>o.name===W)),i.status?.retriesStatus&&b&&(i={...i,status:i.status.retriesStatus[b]});const H=i.spec?.taskRef?.name&&ge?.find(o=>o.metadata.name===i.spec.taskRef.name)||{},we=Ne({selectedStepId:p,task:H,taskRun:i}),J=je({selectedStepId:p,taskRun:i}),Le=Re({stepName:p,stepStatus:J,taskRun:i}),Q=r.status?.skippedTasks||[],X=Q.find(o=>o.name===c);return e.jsxs(e.Fragment,{children:[e.jsx(ae,{icon:F,lastTransitionTime:z,loading:E,message:be,runName:ve,reason:Ie,status:Y,triggerHeader:q,children:ce}),t,L.length>0&&e.jsxs("div",{className:"tkn--tasks",children:[e.jsx(Me,{isSelectedTaskMatrix:!!G?.matrix,onRetryChange:de,onSelect:Se,selectedRetry:b,selectedStepId:p,selectedTaskId:c,selectedTaskRunName:W,skippedTasks:Q,taskRuns:L}),p&&e.jsx(We,{definition:we,logContainer:Le,onViewChange:U,skippedTask:X,stepName:p,stepStatus:J,taskRun:i,view:K})||c&&e.jsx(ye,{onViewChange:U,pod:pe,skippedTask:X,task:H,taskRun:i,view:K})]})]})}k.__docgenInfo={description:"",methods:[],displayName:"PipelineRun",props:{handleTaskSelected:{defaultValue:{value:"() => {}",computed:!1},required:!1},onViewChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},selectedStepId:{defaultValue:{value:"null",computed:!1},required:!1},selectedTaskId:{defaultValue:{value:"null",computed:!1},required:!1},view:{defaultValue:{value:"null",computed:!1},required:!1}}};const{useArgs:V}=__STORYBOOK_MODULE_PREVIEW_API__,m={metadata:{name:"task1",namespace:"default",resourceVersion:"1902552",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/tasks/task1",uid:"071c7563-c067-11e9-80e7-080027e83fe1"},spec:{steps:[{args:["-c","echo storybook;"],command:["/bin/bash"],image:"ubuntu",name:"build"}]}};function _({exitCode:t=0,name:s,pipelineTaskName:a}){return{metadata:{labels:{[P.PIPELINE_TASK]:a},name:s,namespace:"default",uid:s},spec:{params:{},serviceAccountName:"default",taskRef:{kind:"Task",name:"task1"},timeout:"24h0m0s"},status:{completionTime:"2019-08-21T17:15:31Z",conditions:[{lastTransitionTime:"2019-08-21T17:15:31Z",message:"All Steps have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],podName:`sample-task-run-pod-name-${s}`,startTime:"2019-08-21T17:12:21Z",steps:[{name:"build",terminated:{containerID:"docker://88659459cb477936d2ee859822b024bf02768c9ff3dd048f7d8af85843064f95",exitCode:t,finishedAt:"2019-08-21T17:12:29Z",reason:"Completed",startedAt:"2019-08-21T17:12:26Z"}}]}}}const u=_({name:"sampleTaskRunName",pipelineTaskName:"task1"}),N=_({exitCode:1,name:"sampleTaskRunName2",pipelineTaskName:"task2"}),S=_({name:"sampleTaskRunName3",pipelineTaskName:"task3"});delete S.status.conditions;delete S.status.steps[0].terminated;const j=_({name:"sampleTaskRunName4",pipelineTaskName:"task4"});j.status.steps[0].terminationReason="Skipped";const D={metadata:{name:"pipeline-run",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],skippedTasks:[{name:"task3",reason:"When Expressions evaluated to false"}],startTime:"2019-08-21T17:12:20Z",taskRuns:{sampleTaskRunName:{pipelineTaskName:"task1",status:u.status},sampleTaskRunName2:{pipelineTaskName:"task2",status:N.status},sampleTaskRunName3:{pipelineTaskName:"task3",status:S.status},sampleTaskRunName4:{pipelineTaskName:"task4",status:j.status}}}},re={metadata:{name:"pipeline-run",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],startTime:"2019-08-21T17:12:20Z",childReferences:[{name:"sampleTaskRunName",pipelineTaskName:"task1"},{name:"sampleTaskRunName2",pipelineTaskName:"task2"}]}},Qs={args:{selectedStepId:void 0,selectedTaskId:void 0,view:void 0},component:k,decorators:[t=>e.jsx(t,{})],title:"PipelineRun"},Fe=`2024-11-14T14:10:53.354144861Z::info::Cloning repo
2024-11-14T14:10:56.300268594Z::debug::[get_repo_params:30] | get_repo_name called for https://github.com/example/app. Repository Name identified as app
2024-11-14T14:10:56.307088791Z::debug::[get_repo_params:18] | get_repo_owner called for https://github.com/example/app. Repository Owner identified as example
2024-11-14T14:10:56.815017386Z::debug::[get_repo_params:212] | Unable to locate repository parameters for key https://github.com/example/app in the cache. Attempt to fetch repository parameters.
2024-11-14T14:10:56.819937688Z::debug::[get_repo_params:39] | get_repo_server_name called for https://github.com/example/app. Repository Server Name identified as github.com
2024-11-14T14:10:56.869719012Z Sample with no log level
2024-11-14T14:10:56.869719012Z::error::Sample error
2024-11-14T14:10:56.869719012Z::warning::Sample warning
2024-11-14T14:10:56.869719012Z::notice::Sample notice
2024-11-14T14:11:08.065631069Z ::info::Details of asset created:
2024-11-14T14:11:11.849912684Z ┌─────┬──────┬────┬─────┐
2024-11-14T14:11:11.849981080Z │ Key │ Type │ ID │ URL │
2024-11-14T14:11:11.849987327Z └─────┴──────┴────┴─────┘
2024-11-14T14:11:11.869437298Z ::info::Details of evidence collected:
2024-11-14T14:11:15.892827575Z ┌─────────────────┬────────────────────┐
2024-11-14T14:11:15.892883264Z │ Attribute       │ Value              │
2024-11-14T14:11:15.892888519Z ├─────────────────┼────────────────────┤
2024-11-14T14:11:15.892895717Z │ Status          │ \x1B[32msuccess\x1B[39m            │
2024-11-14T14:11:15.892900191Z ├─────────────────┼────────────────────┤
2024-11-14T14:11:15.892904785Z │ Tool Type       │ jest               │
2024-11-14T14:11:15.892908480Z ├─────────────────┼────────────────────┤
2024-11-14T14:11:15.892912390Z │ Evidence ID     │ -                  │
2024-11-14T14:11:15.892916374Z ├─────────────────┼────────────────────┤
2024-11-14T14:11:15.892920207Z │ Evidence Type   │ com.ibm.unit_tests │
2024-11-14T14:11:15.892924894Z ├─────────────────┼────────────────────┤
2024-11-14T14:11:15.892930294Z │ Issues          │ -                  │
2024-11-14T14:11:15.892933984Z ├─────────────────┼────────────────────┤
2024-11-14T14:11:15.892938649Z │ Attachment URLs │                    │
2024-11-14T14:11:15.892942307Z │                 │                    │
2024-11-14T14:11:15.892947043Z └─────────────────┴────────────────────┘
2024-11-14T14:11:15.989838531Z success`,T=t=>{const[,s]=V();return e.jsx(k,{...t,fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:a,selectedTaskId:n})=>{s({selectedStepId:a,selectedTaskId:n})},onViewChange:a=>s({view:a}),pipelineRun:D,taskRuns:[u,N,S,j],tasks:[m]})},h=t=>{const[,s]=V();return e.jsx(k,{...t,fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:a,selectedTaskId:n})=>{s({selectedStepId:a,selectedTaskId:n})},onViewChange:a=>s({view:a}),pipelineRun:re,taskRuns:[u,N],tasks:[m]})},R=t=>{const[,s]=V();return e.jsx(k,{...t,fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:a,selectedTaskId:n})=>{s({selectedStepId:a,selectedTaskId:n})},onViewChange:a=>s({view:a}),pipelineRun:D,pod:{events:[{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4",namespace:"test",uid:"0f4218f0-270a-408d-b5bd-56fc35dda853",resourceVersion:"2047658",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047624"},reason:"Scheduled",message:"Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane","…":""},{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7",namespace:"test",uid:"d1c8e367-66d1-4cd7-a04b-e49bdf9f322e",resourceVersion:"2047664",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047657",fieldPath:"spec.initContainers{prepare}"},reason:"Pulled",message:'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',"…":""}],resource:{kind:"Pod",apiVersion:"v1",metadata:{name:"some-pod-name",namespace:"test",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",resourceVersion:"2047732",creationTimestamp:"2022-10-27T13:27:49Z"},spec:{"…":""}}},selectedTaskId:"task1",taskRuns:[u],tasks:[m],view:"pod"})},x={args:{fetchLogs:()=>Fe,logLevels:{error:!0,warning:!0,notice:!0,info:!0,debug:!1},pipelineRun:re,selectedStepId:"build",selectedTaskId:m.metadata.name,showLogLevels:!0,showLogTimestamps:!0,taskRuns:[u],tasks:[m]},render:t=>{const[,s]=V();return e.jsx(k,{...t,getLogsToolbar:a=>e.jsx(De,{...a,logLevels:t.logLevels,onToggleLogLevel:n=>s({logLevels:{...t.logLevels,...n}}),onToggleShowTimestamps:n=>s({showLogTimestamps:n}),showTimestamps:t.showLogTimestamps}),handleTaskSelected:({selectedStepId:a,selectedTaskId:n})=>{s({selectedStepId:a,selectedTaskId:n})},onViewChange:a=>s({view:a}),pipelineRun:D,taskRuns:[u,N,S,j],tasks:[m]})}},Z={},A={args:{error:"Internal server error"}};T.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"WithMinimalStatus"};R.__docgenInfo={description:"",methods:[],displayName:"WithPodDetails"};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <PipelineRun {...args} fetchLogs={() => 'sample log output'} handleTaskSelected={({
    selectedStepId: stepId,
    selectedTaskId: taskId
  }) => {
    updateArgs({
      selectedStepId: stepId,
      selectedTaskId: taskId
    });
  }} onViewChange={selectedView => updateArgs({
    view: selectedView
  })} pipelineRun={pipelineRun} taskRuns={[taskRun, taskRunWithWarning, taskRunSkipped, taskRunWithSkippedStep]} tasks={[task]} />;
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <PipelineRun {...args} fetchLogs={() => 'sample log output'} handleTaskSelected={({
    selectedStepId: stepId,
    selectedTaskId: taskId
  }) => {
    updateArgs({
      selectedStepId: stepId,
      selectedTaskId: taskId
    });
  }} onViewChange={selectedView => updateArgs({
    view: selectedView
  })} pipelineRun={pipelineRunWithMinimalStatus} taskRuns={[taskRun, taskRunWithWarning]} tasks={[task]} />;
}`,...h.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <PipelineRun {...args} fetchLogs={() => 'sample log output'} handleTaskSelected={({
    selectedStepId: stepId,
    selectedTaskId: taskId
  }) => {
    updateArgs({
      selectedStepId: stepId,
      selectedTaskId: taskId
    });
  }} onViewChange={selectedView => updateArgs({
    view: selectedView
  })} pipelineRun={pipelineRun} pod={{
    events: [{
      metadata: {
        name: 'guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4',
        namespace: 'test',
        uid: '0f4218f0-270a-408d-b5bd-56fc35dda853',
        resourceVersion: '2047658',
        creationTimestamp: '2022-10-27T13:27:54Z'
      },
      involvedObject: {
        kind: 'Pod',
        namespace: 'test',
        name: 'guarded-pr-vkm6w-check-file-pod',
        uid: '939a4823-2203-4b5a-8c00-6a2c9f15549d',
        apiVersion: 'v1',
        resourceVersion: '2047624'
      },
      reason: 'Scheduled',
      message: 'Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane',
      '…': ''
    }, {
      metadata: {
        name: 'guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7',
        namespace: 'test',
        uid: 'd1c8e367-66d1-4cd7-a04b-e49bdf9f322e',
        resourceVersion: '2047664',
        creationTimestamp: '2022-10-27T13:27:54Z'
      },
      involvedObject: {
        kind: 'Pod',
        namespace: 'test',
        name: 'guarded-pr-vkm6w-check-file-pod',
        uid: '939a4823-2203-4b5a-8c00-6a2c9f15549d',
        apiVersion: 'v1',
        resourceVersion: '2047657',
        fieldPath: 'spec.initContainers{prepare}'
      },
      reason: 'Pulled',
      message: 'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',
      '…': ''
    }],
    resource: {
      kind: 'Pod',
      apiVersion: 'v1',
      metadata: {
        name: 'some-pod-name',
        namespace: 'test',
        uid: '939a4823-2203-4b5a-8c00-6a2c9f15549d',
        resourceVersion: '2047732',
        creationTimestamp: '2022-10-27T13:27:49Z'
      },
      spec: {
        '…': ''
      }
    }
  }} selectedTaskId="task1" taskRuns={[taskRun]} tasks={[task]} view="pod" />;
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => logsWithTimestampsAndLevels,
    logLevels: {
      error: true,
      warning: true,
      notice: true,
      info: true,
      debug: false
    },
    pipelineRun: pipelineRunWithMinimalStatus,
    selectedStepId: 'build',
    selectedTaskId: task.metadata.name,
    showLogLevels: true,
    showLogTimestamps: true,
    taskRuns: [taskRun],
    tasks: [task]
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <PipelineRun {...args} getLogsToolbar={toolbarProps => <LogsToolbar {...toolbarProps} logLevels={args.logLevels} onToggleLogLevel={level => updateArgs({
      logLevels: {
        ...args.logLevels,
        ...level
      }
    })} onToggleShowTimestamps={showLogTimestamps => updateArgs({
      showLogTimestamps
    })} showTimestamps={args.showLogTimestamps} />} handleTaskSelected={({
      selectedStepId: stepId,
      selectedTaskId: taskId
    }) => {
      updateArgs({
        selectedStepId: stepId,
        selectedTaskId: taskId
      });
    }} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} pipelineRun={pipelineRun} taskRuns={[taskRun, taskRunWithWarning, taskRunSkipped, taskRunWithSkippedStep]} tasks={[task]} />;
  }
}`,...x.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:"{}",...Z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Internal server error'
  }
}`,...A.parameters?.docs?.source}}};const Xs=["Default","WithMinimalStatus","WithPodDetails","LogsWithTimestampsAndLevels","Empty","Error"];export{T as Default,Z as Empty,A as Error,x as LogsWithTimestampsAndLevels,h as WithMinimalStatus,R as WithPodDetails,Xs as __namedExportsOrder,Qs as default};
