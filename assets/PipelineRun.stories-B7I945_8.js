import{j as e}from"./jsx-runtime-QvtbNqby.js";import{r as X}from"./index-BjzEU6Zr.js";import"./usePrefix-CXWdRn9x.js";import{I as _}from"./Notification-lajrQCgd.js";import{S as xe}from"./SkeletonText-pbC4hZL_.js";import{u as Pe}from"./index-yfVukVkJ.js";import{b as Ve,g as ee,d as Ne,e as we}from"./index-CfoIBI3E.js";import{r as je}from"./index-B22udTS1.js";import{R as se}from"./RunHeader-C12BHh_A.js";import{T as Ae}from"./TaskTree-CGarI-tA.js";import{S as Ee}from"./StepDetails-Cg8asdC2.js";import{T as Me}from"./TaskRunDetails-Cb0YZW1H.js";import{L as _e}from"./Log-Ds7o7VOs.js";import{l as P}from"./constants-PT-Qtcqm.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-kGlasm3i.js";import"./deprecate-GNGtdTso.js";import"./index-CjLpwf8N.js";import"./Button-xjCpe_BM.js";import"./index-Da0at1PC.js";import"./Tooltip-BJBVfZ_G.js";import"./events-OVwOsPzJ.js";import"./noopFn-g4z370MD.js";import"./index-55dkfs-I.js";import"./bucket-3-Dq7FRXBG.js";import"./Icon-CpyVU44g.js";import"./bucket-6-CywArVTS.js";import"./bucket-2-C9DXCKPV.js";import"./bucket-18-ByJs4WER.js";import"./bucket-9-DvpuiSZR.js";import"./index-Dc4QqC9m.js";import"./index-DCnOq7yB.js";import"./FormattedDate-BAq0MZ-2.js";import"./Task-CFqHHY0P.js";import"./index-lRp1do-S.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-CMgbqDR8.js";import"./StatusIcon-CbB-w7ji.js";import"./bucket-16-CiwkPD5r.js";import"./Spinner-Dbwi84XW.js";import"./bucket-13-CBnqkqgu.js";import"./bucket-17-BNnKjYXl.js";import"./Step-1ey7nsMI.js";import"./Tabs-CLCSIGLB.js";import"./useControllableState-Co_owzu1.js";import"./DetailsHeader-e2YhChju.js";import"./FormattedDuration-7RrZaDA3.js";import"./StepDefinition-D8E6zbn8.js";import"./ViewYAML-ReMqin4P.js";import"./Table-D1X7MWr6.js";import"./bucket-0-C5s-C6Km.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Search-7e9e9RA9.js";import"./FormContext-IWjAIOZU.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./bucket-5-BULz4hzg.js";import"./LogFormat-BFNc9oD6.js";import"./DotSpinner-BSho4s4W.js";const Ce=({children:a,container:s})=>je.createPortal(a,s);function ae({pipeline:a,pipelineRun:s,selectedTaskId:t,taskRun:o}){const m=o?.metadata?.labels?.[P.MEMBER_OF];return(s.spec?.pipelineSpec?.[m]||s.status?.pipelineSpec?.[m]||a?.spec?.[m])?.find(h=>h.name===t)}function T({customNotification:a,enableLogAutoScroll:s,enableLogScrollButtons:t,error:o,fetchLogs:m,forceLogPolling:Z,getLogsToolbar:h,handleTaskSelected:ne=()=>{},icon:D,loading:j,maximizedLogsContainer:A,onRetryChange:re,onViewChange:O=()=>{},pipeline:F,pipelineRun:n,pod:ie,pollingInterval:oe,runActions:de,selectedRetry:R,selectedStepId:p=null,selectedTaskId:u=null,selectedTaskRunName:E,taskRuns:pe,tasks:ce,triggerHeader:q,view:B=null}){const S=Pe(),[b,ue]=X.useState(!1);function me(){if(!n.status?.taskRuns&&!n.status?.childReferences)return null;const{status:{childReferences:r,taskRuns:d}}=n,{message:c,status:l,reason:Q}=ee(n);return l==="False"&&!d&&!r&&{message:c,reason:Q}}function le(){ue(r=>!r)}function ke({stepName:r,stepStatus:d,taskRun:c}){if(!p||!d)return null;const l=b&&A?Ce:X.Fragment;return e.jsx(l,{...b?{container:A}:null,children:e.jsx(_e,{toolbar:h&&d&&h({isMaximized:b,stepStatus:d,taskRun:c,toggleMaximized:!!A&&le}),fetchLogs:()=>m(r,d,c),forcePolling:Z,pollingInterval:oe,stepStatus:d,isLogsMaximized:b,enableLogAutoScroll:s,enableLogScrollButtons:t},`${u}:${p}:${R}`)})}function U(){return!n?.status?.taskRuns&&!n?.status?.childReferences?[]:pe||[]}function fe({selectedRetry:r,selectedStepId:d,selectedTaskId:c,taskRunName:l}){const be=U().find(({metadata:Ie})=>Ie.labels?.[P.PIPELINE_TASK]===c)||{},ve=ae({pipeline:F,pipelineRun:n,selectedTaskId:c,taskRun:be});ne({selectedRetry:r,selectedStepId:d,selectedTaskId:c,taskRunName:ve?.matrix?l:void 0})}if(j)return e.jsx(xe,{heading:!0,width:"60%"});if(o)return e.jsxs(e.Fragment,{children:[a,e.jsx(_,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:S.formatMessage({id:"dashboard.pipelineRun.error",defaultMessage:"Error loading PipelineRun"}),subtitle:Ve(o)})]});if(!n)return e.jsxs(e.Fragment,{children:[a,e.jsx(_,{kind:"info",hideCloseButton:!0,lowContrast:!0,title:S.formatMessage({id:"dashboard.pipelineRun.failed",defaultMessage:"Cannot load PipelineRun"}),subtitle:S.formatMessage({id:"dashboard.pipelineRun.notFound",defaultMessage:"PipelineRun not found"})})]});const ge=n.metadata.name||n.metadata.generateName,M=me(),{lastTransitionTime:K,message:Te,reason:he,status:$}=ee(n);if(M)return e.jsxs(e.Fragment,{children:[e.jsx(se,{icon:D,lastTransitionTime:K,loading:j,pipelineRun:n,runName:n.pipelineRunName,reason:"Error",status:$,triggerHeader:q}),a,e.jsx(_,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:S.formatMessage({id:"dashboard.pipelineRun.failedMessage",defaultMessage:"Unable to load PipelineRun: {reason}"},{reason:M.reason}),subtitle:M.message})]});const v=U();let i=v.find(({metadata:r})=>r.labels?.[P.PIPELINE_TASK]===u)||{};const z=ae({pipeline:F,pipelineRun:n,selectedTaskId:u,taskRun:i});z?.matrix&&E&&(i=v.find(({metadata:r})=>r.name===E)),i.status?.retriesStatus&&R&&(i={...i,status:i.status.retriesStatus[R]});const Y=i.spec?.taskRef?.name&&ce?.find(r=>r.metadata.name===i.spec.taskRef.name)||{},Re=Ne({selectedStepId:p,task:Y,taskRun:i}),G=we({selectedStepId:p,taskRun:i}),Se=ke({stepName:p,stepStatus:G,taskRun:i}),H=n.status?.skippedTasks||[],J=H.find(r=>r.name===u);return e.jsxs(e.Fragment,{children:[e.jsx(se,{icon:D,lastTransitionTime:K,loading:j,message:Te,runName:ge,reason:he,status:$,triggerHeader:q,children:de}),a,v.length>0&&e.jsxs("div",{className:"tkn--tasks",children:[e.jsx(Ae,{isSelectedTaskMatrix:!!z?.matrix,onRetryChange:re,onSelect:fe,selectedRetry:R,selectedStepId:p,selectedTaskId:u,selectedTaskRunName:E,skippedTasks:H,taskRuns:v}),p&&e.jsx(Ee,{definition:Re,logContainer:Se,onViewChange:O,skippedTask:J,stepName:p,stepStatus:G,taskRun:i,view:B})||u&&e.jsx(Me,{onViewChange:O,pod:ie,skippedTask:J,task:Y,taskRun:i,view:B})]})]})}T.__docgenInfo={description:"",methods:[],displayName:"PipelineRun",props:{handleTaskSelected:{defaultValue:{value:"() => {}",computed:!1},required:!1},onViewChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},selectedStepId:{defaultValue:{value:"null",computed:!1},required:!1},selectedTaskId:{defaultValue:{value:"null",computed:!1},required:!1},view:{defaultValue:{value:"null",computed:!1},required:!1}}};const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,W={metadata:{name:"task1",namespace:"default",resourceVersion:"1902552",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/tasks/task1",uid:"071c7563-c067-11e9-80e7-080027e83fe1"},spec:{steps:[{args:["-c","echo storybook;"],command:["/bin/bash"],image:"ubuntu",name:"build"}]}};function V({exitCode:a=0,name:s,pipelineTaskName:t}){return{metadata:{labels:{[P.PIPELINE_TASK]:t},name:s,namespace:"default",uid:s},spec:{params:{},serviceAccountName:"default",taskRef:{kind:"Task",name:"task1"},timeout:"24h0m0s"},status:{completionTime:"2019-08-21T17:15:31Z",conditions:[{lastTransitionTime:"2019-08-21T17:15:31Z",message:"All Steps have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],podName:`sample-task-run-pod-name-${s}`,startTime:"2019-08-21T17:12:21Z",steps:[{name:"build",terminated:{containerID:"docker://88659459cb477936d2ee859822b024bf02768c9ff3dd048f7d8af85843064f95",exitCode:a,finishedAt:"2019-08-21T17:12:29Z",reason:"Completed",startedAt:"2019-08-21T17:12:26Z"}}]}}}const N=V({name:"sampleTaskRunName",pipelineTaskName:"task1"}),L=V({exitCode:1,name:"sampleTaskRunName2",pipelineTaskName:"task2"}),w=V({name:"sampleTaskRunName3",pipelineTaskName:"task3"});delete w.status.conditions;delete w.status.steps[0].terminated;const y=V({name:"sampleTaskRunName4",pipelineTaskName:"task4"});y.status.steps[0].terminationReason="Skipped";const te={metadata:{name:"pipeline-run",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],skippedTasks:[{name:"task3",reason:"When Expressions evaluated to false"}],startTime:"2019-08-21T17:12:20Z",taskRuns:{sampleTaskRunName:{pipelineTaskName:"task1",status:N.status},sampleTaskRunName2:{pipelineTaskName:"task2",status:L.status},sampleTaskRunName3:{pipelineTaskName:"task3",status:w.status},sampleTaskRunName4:{pipelineTaskName:"task4",status:y.status}}}},We={metadata:{name:"pipeline-run",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],startTime:"2019-08-21T17:12:20Z",childReferences:[{name:"sampleTaskRunName",pipelineTaskName:"task1"},{name:"sampleTaskRunName2",pipelineTaskName:"task2"}]}},Fs={args:{selectedStepId:void 0,selectedTaskId:void 0,view:void 0},component:T,decorators:[a=>e.jsx(a,{})],title:"PipelineRun"},k=a=>{const[,s]=C();return e.jsx(T,{...a,fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:t,selectedTaskId:o})=>{s({selectedStepId:t,selectedTaskId:o})},onViewChange:t=>s({view:t}),pipelineRun:te,taskRuns:[N,L,w,y],tasks:[W]})},f=a=>{const[,s]=C();return e.jsx(T,{...a,fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:t,selectedTaskId:o})=>{s({selectedStepId:t,selectedTaskId:o})},onViewChange:t=>s({view:t}),pipelineRun:We,taskRuns:[N,L],tasks:[W]})},g=a=>{const[,s]=C();return e.jsx(T,{...a,fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:t,selectedTaskId:o})=>{s({selectedStepId:t,selectedTaskId:o})},onViewChange:t=>s({view:t}),pipelineRun:te,pod:{events:[{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4",namespace:"test",uid:"0f4218f0-270a-408d-b5bd-56fc35dda853",resourceVersion:"2047658",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047624"},reason:"Scheduled",message:"Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane","…":""},{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7",namespace:"test",uid:"d1c8e367-66d1-4cd7-a04b-e49bdf9f322e",resourceVersion:"2047664",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047657",fieldPath:"spec.initContainers{prepare}"},reason:"Pulled",message:'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',"…":""}],resource:{kind:"Pod",apiVersion:"v1",metadata:{name:"some-pod-name",namespace:"test",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",resourceVersion:"2047732",creationTimestamp:"2022-10-27T13:27:49Z"},spec:{"…":""}}},taskRuns:[N],tasks:[W]})},I={},x={args:{error:"Internal server error"}};k.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"WithMinimalStatus"};g.__docgenInfo={description:"",methods:[],displayName:"WithPodDetails"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
  }} taskRuns={[taskRun]} tasks={[task]} />;
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"{}",...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Internal server error'
  }
}`,...x.parameters?.docs?.source}}};const qs=["Default","WithMinimalStatus","WithPodDetails","Empty","Error"];export{k as Default,I as Empty,x as Error,f as WithMinimalStatus,g as WithPodDetails,qs as __namedExportsOrder,Fs as default};
