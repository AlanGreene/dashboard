import{j as s}from"./jsx-runtime-QvtbNqby.js";import{T as a}from"./TaskTree-CGarI-tA.js";import"./index-BjzEU6Zr.js";import"./index-CfoIBI3E.js";import"./Task-CFqHHY0P.js";import"./index-yfVukVkJ.js";import"./usePrefix-CXWdRn9x.js";import"./index-lRp1do-S.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-CjLpwf8N.js";import"./index-kGlasm3i.js";import"./deprecate-GNGtdTso.js";import"./index-55dkfs-I.js";import"./index-Da0at1PC.js";import"./Tooltip-BJBVfZ_G.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-CMgbqDR8.js";import"./Icon-CpyVU44g.js";import"./noopFn-g4z370MD.js";import"./StatusIcon-CbB-w7ji.js";import"./bucket-3-Dq7FRXBG.js";import"./bucket-16-CiwkPD5r.js";import"./Spinner-Dbwi84XW.js";import"./bucket-13-CBnqkqgu.js";import"./bucket-17-BNnKjYXl.js";import"./bucket-2-C9DXCKPV.js";import"./bucket-18-ByJs4WER.js";import"./constants-PT-Qtcqm.js";import"./Step-1ey7nsMI.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,K={args:{selectedStepId:void 0,selectedTaskId:void 0,skippedTasks:[{name:"Task 2"}],taskRuns:[{metadata:{labels:{"tekton.dev/pipelineTask":"Task 1"},uid:"task"},status:{conditions:[{reason:"Completed",status:"True",type:"Succeeded"}],steps:[{name:"build",terminated:{exitCode:0,reason:"Completed"}},{name:"test",terminated:{exitCode:1,reason:"Completed"}}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 2"},uid:"task2"},status:{conditions:[],steps:[{name:"build"},{name:"test"}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 3"},uid:"task3"},status:{conditions:[{reason:"Failed",status:"False",type:"Succeeded"}],steps:[{name:"step 1",terminated:{reason:"Error"}},{name:"step 2",terminated:{reason:"Error"}}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 4"},uid:"task4"},pipelineTaskName:"Task 4",status:{conditions:[{reason:"Running",status:"Unknown",type:"Succeeded"}],steps:[{name:"step 1",terminated:{reason:"Completed"}},{name:"step 2",running:{}}]}}]},component:a,decorators:[t=>s.jsx("div",{style:{width:"250px"},children:s.jsx(t,{})})],title:"TaskTree"},e={render:t=>{const[,r]=d();return s.jsx(a,{...t,onSelect:({selectedStepId:o,selectedTaskId:n})=>{r({selectedStepId:o,selectedTaskId:n})}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
