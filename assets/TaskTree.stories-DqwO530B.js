import{j as s}from"./jsx-runtime-Bzbk6Sx8.js";import{T as a}from"./TaskTree-x8qds-Vl.js";import"./index-DoYbGmCh.js";import"./index-CfoIBI3E.js";import"./Task-BB8VYseE.js";import"./index-D0k5bR2p.js";import"./usePrefix-DQgSqSG9.js";import"./index-BsO2LqBO.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-51-aJb-v.js";import"./index-D295wprO.js";import"./index-SPZK-v-M.js";import"./Tooltip-BfR-5Xhs.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-Bu6lI_iC.js";import"./Icon-BbW6Eq-V.js";import"./wrapFocus-BvAm1HsT.js";import"./noopFn-g4z370MD.js";import"./OverflowMenuItem-iAjAaEGF.js";import"./Text-9Q8NT07l.js";import"./StatusIcon-B3mfoTbA.js";import"./bucket-3-DW_-k99P.js";import"./bucket-17-CpsfdLmP.js";import"./Spinner-6fWOlw3V.js";import"./bucket-13-DZ_6w3Wo.js";import"./bucket-2-BzIGxUKv.js";import"./bucket-18-DO7kS4tX.js";import"./constants-PT-Qtcqm.js";import"./Step-DIXJD-8b.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,K={args:{selectedStepId:void 0,selectedTaskId:void 0,skippedTasks:[{name:"Task 2"}],taskRuns:[{metadata:{labels:{"tekton.dev/pipelineTask":"Task 1"},uid:"task"},status:{conditions:[{reason:"Completed",status:"True",type:"Succeeded"}],steps:[{name:"build",terminated:{exitCode:0,reason:"Completed"}},{name:"test",terminated:{exitCode:1,reason:"Completed"}}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 2"},uid:"task2"},status:{conditions:[],steps:[{name:"build"},{name:"test"}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 3"},uid:"task3"},status:{conditions:[{reason:"Failed",status:"False",type:"Succeeded"}],steps:[{name:"step 1",terminated:{reason:"Error"}},{name:"step 2",terminated:{reason:"Error"}}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 4"},uid:"task4"},pipelineTaskName:"Task 4",status:{conditions:[{reason:"Running",status:"Unknown",type:"Succeeded"}],steps:[{name:"step 1",terminated:{reason:"Completed"}},{name:"step 2",running:{}}]}}]},component:a,decorators:[t=>s.jsx("div",{style:{width:"250px"},children:s.jsx(t,{})})],title:"TaskTree"},e={render:t=>{const[,r]=d();return s.jsx(a,{...t,onSelect:({selectedStepId:o,selectedTaskId:n})=>{r({selectedStepId:o,selectedTaskId:n})}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs();
    return <TaskTree {...args} onSelect={({
      selectedStepId: stepId,
      selectedTaskId: taskId
    }) => {
      updateArgs({
        selectedStepId: stepId,
        selectedTaskId: taskId
      });
    }} />;
  }
}`,...e.parameters?.docs?.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,K as default};
