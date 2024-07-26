import{j as s}from"./jsx-runtime-QvtbNqby.js";import{r as p}from"./index-BjzEU6Zr.js";import{P as R}from"./index-kGlasm3i.js";import"./usePrefix-BezXHAvh.js";import{I as j}from"./Notification-DTvxI4If.js";import{S as X}from"./SkeletonText-DhyM3XVj.js";import{i as Y}from"./index-BYMUMZMs.js";import{g as O,b as ee,d as te,e as se}from"./index-CfoIBI3E.js";import{r as ae}from"./index-B0z81K34.js";import{L as ne}from"./Log-Cm0WCRSL.js";import{R as q}from"./RunHeader-DQRZdG6l.js";import{T as ie}from"./TaskTree-DIL5z110.js";import{S as oe}from"./StepDetails-DOJ4n3ai.js";import{T as re}from"./TaskRunDetails-N-B2aVYy.js";import{l as P}from"./constants-BuFAfZC9.js";import"./floating-ui.react-zcwMlDfJ.js";import"./deprecate-X_RArzr0.js";import"./index-CjLpwf8N.js";import"./Button-DxuibFbN.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./events-OVwOsPzJ.js";import"./noopFn-g4z370MD.js";import"./index-DZApqWLJ.js";import"./bucket-3-DTnTkg5v.js";import"./Icon-DeY_WDsw.js";import"./bucket-6-CpbjS_H5.js";import"./bucket-2-DqY0dT-j.js";import"./bucket-18-CNixtB1a.js";import"./bucket-9-DuBbq6Ld.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-SLCf_n8R.js";import"./bucket-17-ByI71b45.js";import"./bucket-5-B9SDRLCd.js";import"./LogFormat-Dk1Uatww.js";import"./DotSpinner-BSho4s4W.js";import"./index-Dc4QqC9m.js";import"./index-CNcVnUbU.js";import"./FormattedDate-BPTTyExm.js";import"./Task-BDoFt-jJ.js";import"./index-9NatbUAG.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-D9InpaXv.js";import"./StatusIcon-B2CmmOh1.js";import"./bucket-16-DEjbltYp.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";import"./Step-Cz-qLbwJ.js";import"./Tabs-gghMQKfC.js";import"./useControllableState-Co_owzu1.js";import"./DetailsHeader-DxveQ-6v.js";import"./FormattedDuration-CpIuRcpd.js";import"./StepDefinition-CAxgBeOn.js";import"./ViewYAML-CKT6AdML.js";import"./Table-BuHWprYL.js";import"./bucket-0-BV5tnCsW.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Search-DGNYnC60.js";import"./FormContext-IWjAIOZU.js";const de=({children:r,container:e})=>ae.createPortal(r,e);function B({pipeline:r,pipelineRun:e,selectedTaskId:t,taskRun:i}){const n=i?.metadata?.labels?.[P.MEMBER_OF];return(e.spec?.pipelineSpec?.[n]||e.status?.pipelineSpec?.[n]||r?.spec?.[n])?.find(a=>a.name===t)}class N extends p.Component{state={isLogsMaximized:!1};getPipelineRunError=()=>{const{pipelineRun:e}=this.props;if(!e.status?.taskRuns&&!e.status?.childReferences)return null;const{status:{childReferences:t,taskRuns:i}}=e,{message:n,status:o,reason:a}=O(e);return o==="False"&&!i&&!t&&{message:n,reason:a}};getLogContainer({stepName:e,stepStatus:t,taskRun:i}){const{enableLogAutoScroll:n,enableLogScrollButtons:o,fetchLogs:a,forceLogPolling:l,getLogsToolbar:f,maximizedLogsContainer:c,pollingInterval:g,selectedRetry:S,selectedStepId:k,selectedTaskId:m}=this.props,{isLogsMaximized:u}=this.state;if(!k||!t)return null;const T=u&&c?de:p.Fragment;return s.jsx(T,{...u?{container:c}:null,children:s.jsx(ne,{toolbar:f&&t&&f({isMaximized:u,stepStatus:t,taskRun:i,toggleMaximized:!!c&&this.toggleLogsMaximized}),fetchLogs:()=>a(e,t,i),forcePolling:l,pollingInterval:g,stepStatus:t,isLogsMaximized:u,enableLogAutoScroll:n,enableLogScrollButtons:o},`${m}:${k}:${S}`)})}toggleLogsMaximized=()=>{this.setState(({isLogsMaximized:e})=>({isLogsMaximized:!e}))};loadTaskRuns=()=>{const{pipelineRun:e}=this.props;if(!e?.status?.taskRuns&&!e?.status?.childReferences)return[];const{taskRuns:t}=this.props;return t||[]};onTaskSelected=({selectedRetry:e,selectedStepId:t,selectedTaskId:i,taskRunName:n})=>{const{handleTaskSelected:o,pipeline:a,pipelineRun:l}=this.props,c=this.loadTaskRuns().find(({metadata:S})=>S.labels?.[P.PIPELINE_TASK]===i)||{},g=B({pipeline:a,pipelineRun:l,selectedTaskId:i,taskRun:c});o({selectedRetry:e,selectedStepId:t,selectedTaskId:i,taskRunName:g?.matrix?n:void 0})};render(){const{customNotification:e,error:t,icon:i,intl:n,loading:o,onRetryChange:a,onViewChange:l,pipeline:f,pipelineRun:c,pod:g,runActions:S,selectedRetry:k,selectedStepId:m,selectedTaskId:u,selectedTaskRunName:T,triggerHeader:Z,view:_}=this.props;if(o)return s.jsx(X,{heading:!0,width:"60%"});if(t)return s.jsxs(s.Fragment,{children:[e,s.jsx(j,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:n.formatMessage({id:"dashboard.pipelineRun.error",defaultMessage:"Error loading PipelineRun"}),subtitle:ee(t)})]});if(!this.props.pipelineRun)return s.jsxs(s.Fragment,{children:[e,s.jsx(j,{kind:"info",hideCloseButton:!0,lowContrast:!0,title:n.formatMessage({id:"dashboard.pipelineRun.failed",defaultMessage:"Cannot load PipelineRun"}),subtitle:n.formatMessage({id:"dashboard.pipelineRun.notFound",defaultMessage:"PipelineRun not found"})})]});const H=c.metadata.name||c.metadata.generateName,L=this.getPipelineRunError(),{lastTransitionTime:W,message:U,reason:G,status:A}=O(c);if(L)return s.jsxs(s.Fragment,{children:[s.jsx(q,{icon:i,lastTransitionTime:W,loading:o,pipelineRun:c,runName:c.pipelineRunName,reason:"Error",status:A,triggerHeader:Z}),e,s.jsx(j,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:n.formatMessage({id:"dashboard.pipelineRun.failedMessage",defaultMessage:"Unable to load PipelineRun: {reason}"},{reason:L.reason}),subtitle:L.message})]});const w=this.loadTaskRuns();let d=w.find(({metadata:h})=>h.labels?.[P.PIPELINE_TASK]===u)||{};const D=B({pipeline:f,pipelineRun:c,selectedTaskId:u,taskRun:d});D?.matrix&&T&&(d=w.find(({metadata:h})=>h.name===T)),d.status?.retriesStatus&&k&&(d={...d,status:d.status.retriesStatus[k]});const z=d.spec?.taskRef?.name&&this.props.tasks?.find(h=>h.metadata.name===d.spec.taskRef.name)||{},J=te({selectedStepId:m,task:z,taskRun:d}),F=se({selectedStepId:m,taskRun:d}),Q=this.getLogContainer({stepName:m,stepStatus:F,taskRun:d});return s.jsxs(s.Fragment,{children:[s.jsx(q,{icon:i,lastTransitionTime:W,loading:o,message:U,runName:H,reason:G,status:A,triggerHeader:Z,children:S}),e,w.length>0&&s.jsxs("div",{className:"tkn--tasks",children:[s.jsx(ie,{isSelectedTaskMatrix:!!D?.matrix,onRetryChange:a,onSelect:this.onTaskSelected,selectedRetry:k,selectedStepId:m,selectedTaskId:u,selectedTaskRunName:T,taskRuns:w}),m&&s.jsx(oe,{definition:J,logContainer:Q,onViewChange:l,stepName:m,stepStatus:F,taskRun:d,view:_})||u&&s.jsx(re,{onViewChange:l,pod:g,task:z,taskRun:d,view:_})]})]})}}N.propTypes={handleTaskSelected:R.func,onViewChange:R.func,selectedStepId:R.string,selectedTaskId:R.string,view:R.string};N.defaultProps={handleTaskSelected:()=>{},onViewChange:()=>{},selectedStepId:null,selectedTaskId:null,view:null};const y=Y(N);N.__docgenInfo={description:"",methods:[{name:"getPipelineRunError",docblock:null,modifiers:[],params:[],returns:null},{name:"getLogContainer",docblock:null,modifiers:[],params:[{name:"{ stepName, stepStatus, taskRun }",optional:!1,type:null}],returns:null},{name:"toggleLogsMaximized",docblock:null,modifiers:[],params:[],returns:null},{name:"loadTaskRuns",docblock:null,modifiers:[],params:[],returns:null},{name:"onTaskSelected",docblock:null,modifiers:[],params:[{name:`{
  selectedRetry: retry,
  selectedStepId,
  selectedTaskId,
  taskRunName
}`,optional:!1,type:null}],returns:null}],displayName:"PipelineRunContainer",props:{handleTaskSelected:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onViewChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},selectedStepId:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},selectedTaskId:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},view:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1}}};const M={metadata:{name:"task1",namespace:"default",resourceVersion:"1902552",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/tasks/task1",uid:"071c7563-c067-11e9-80e7-080027e83fe1"},spec:{steps:[{args:["-c","echo storybook;"],command:["/bin/bash"],image:"ubuntu",name:"build"}]}};function $({exitCode:r=0,name:e,pipelineTaskName:t}){return{metadata:{labels:{[P.PIPELINE_TASK]:t},name:e,namespace:"default",uid:e},spec:{params:{},serviceAccountName:"default",taskRef:{kind:"Task",name:"task1"},timeout:"24h0m0s"},status:{completionTime:"2019-08-21T17:15:31Z",conditions:[{lastTransitionTime:"2019-08-21T17:15:31Z",message:"All Steps have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],podName:`sample-task-run-pod-name-${e}`,startTime:"2019-08-21T17:12:21Z",steps:[{name:"build",terminated:{containerID:"docker://88659459cb477936d2ee859822b024bf02768c9ff3dd048f7d8af85843064f95",exitCode:r,finishedAt:"2019-08-21T17:12:29Z",reason:"Completed",startedAt:"2019-08-21T17:12:26Z"}}]}}}const C=$({name:"sampleTaskRunName",pipelineTaskName:"task1"}),E=$({exitCode:1,name:"sampleTaskRunName2",pipelineTaskName:"task2"}),K={metadata:{name:"pipeline-run",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],startTime:"2019-08-21T17:12:20Z",taskRuns:{sampleTaskRunName:{pipelineTaskName:"task1",status:C.status},sampleTaskRunName2:{pipelineTaskName:"task2",status:E.status}}}},le={metadata:{name:"pipeline-run",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],startTime:"2019-08-21T17:12:20Z",childReferences:[{name:"sampleTaskRunName",pipelineTaskName:"task1"},{name:"sampleTaskRunName2",pipelineTaskName:"task2"}]}},ft={component:y,decorators:[r=>s.jsx(r,{})],title:"PipelineRun"},I=()=>{const[r,e]=p.useState(),[t,i]=p.useState(),[n,o]=p.useState();return s.jsx(y,{fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:a,selectedTaskId:l})=>{e(a),i(l)},onViewChange:a=>o(a),pipelineRun:K,selectedStepId:r,selectedTaskId:t,taskRuns:[C,E],tasks:[M],view:n})},b=()=>{const[r,e]=p.useState(),[t,i]=p.useState(),[n,o]=p.useState();return s.jsx(y,{fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:a,selectedTaskId:l})=>{e(a),i(l)},onViewChange:a=>o(a),pipelineRun:le,selectedStepId:r,selectedTaskId:t,taskRuns:[C,E],tasks:[M],view:n})},v=()=>{const[r,e]=p.useState(),[t,i]=p.useState(),[n,o]=p.useState();return s.jsx(y,{fetchLogs:()=>"sample log output",handleTaskSelected:({selectedStepId:a,selectedTaskId:l})=>{e(a),i(l)},onViewChange:a=>o(a),pipelineRun:K,pod:{events:[{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4",namespace:"test",uid:"0f4218f0-270a-408d-b5bd-56fc35dda853",resourceVersion:"2047658",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047624"},reason:"Scheduled",message:"Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane","…":""},{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7",namespace:"test",uid:"d1c8e367-66d1-4cd7-a04b-e49bdf9f322e",resourceVersion:"2047664",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047657",fieldPath:"spec.initContainers{prepare}"},reason:"Pulled",message:'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',"…":""}],resource:{kind:"Pod",apiVersion:"v1",metadata:{name:"some-pod-name",namespace:"test",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",resourceVersion:"2047732",creationTimestamp:"2022-10-27T13:27:49Z"},spec:{"…":""}}},selectedStepId:r,selectedTaskId:t,taskRuns:[C],tasks:[M],view:n})},V={},x={args:{error:"Internal server error"}};I.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"WithMinimalStatus"};v.__docgenInfo={description:"",methods:[],displayName:"WithPodDetails"};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [selectedStepId, setSelectedStepId] = useState();
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [view, setView] = useState();
  return <PipelineRun fetchLogs={() => 'sample log output'} handleTaskSelected={({
    selectedStepId: stepId,
    selectedTaskId: taskId
  }) => {
    setSelectedStepId(stepId);
    setSelectedTaskId(taskId);
  }} onViewChange={selectedView => setView(selectedView)} pipelineRun={pipelineRun} selectedStepId={selectedStepId} selectedTaskId={selectedTaskId} taskRuns={[taskRun, taskRunWithWarning]} tasks={[task]} view={view} />;
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [selectedStepId, setSelectedStepId] = useState();
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [view, setView] = useState();
  return <PipelineRun fetchLogs={() => 'sample log output'} handleTaskSelected={({
    selectedStepId: stepId,
    selectedTaskId: taskId
  }) => {
    setSelectedStepId(stepId);
    setSelectedTaskId(taskId);
  }} onViewChange={selectedView => setView(selectedView)} pipelineRun={pipelineRunWithMinimalStatus} selectedStepId={selectedStepId} selectedTaskId={selectedTaskId} taskRuns={[taskRun, taskRunWithWarning]} tasks={[task]} view={view} />;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [selectedStepId, setSelectedStepId] = useState();
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [view, setView] = useState();
  return <PipelineRun fetchLogs={() => 'sample log output'} handleTaskSelected={({
    selectedStepId: stepId,
    selectedTaskId: taskId
  }) => {
    setSelectedStepId(stepId);
    setSelectedTaskId(taskId);
  }} onViewChange={selectedView => setView(selectedView)} pipelineRun={pipelineRun} pod={{
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
  }} selectedStepId={selectedStepId} selectedTaskId={selectedTaskId} taskRuns={[taskRun]} tasks={[task]} view={view} />;
}`,...v.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"{}",...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Internal server error'
  }
}`,...x.parameters?.docs?.source}}};const gt=["Default","WithMinimalStatus","WithPodDetails","Empty","Error"];export{I as Default,V as Empty,x as Error,b as WithMinimalStatus,v as WithPodDetails,gt as __namedExportsOrder,ft as default};
