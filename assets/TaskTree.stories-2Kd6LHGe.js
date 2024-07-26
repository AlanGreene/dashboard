import{j as s}from"./jsx-runtime-QvtbNqby.js";import{r as a}from"./index-BjzEU6Zr.js";import{T as r}from"./TaskTree-DIL5z110.js";import"./index-CfoIBI3E.js";import"./Task-BDoFt-jJ.js";import"./index-BYMUMZMs.js";import"./usePrefix-BezXHAvh.js";import"./index-9NatbUAG.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-CjLpwf8N.js";import"./index-kGlasm3i.js";import"./deprecate-X_RArzr0.js";import"./index-DZApqWLJ.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-D9InpaXv.js";import"./Icon-DeY_WDsw.js";import"./noopFn-g4z370MD.js";import"./StatusIcon-B2CmmOh1.js";import"./bucket-3-DTnTkg5v.js";import"./bucket-16-DEjbltYp.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";import"./bucket-2-DqY0dT-j.js";import"./bucket-18-CNixtB1a.js";import"./Step-Cz-qLbwJ.js";import"./constants-BuFAfZC9.js";const G={args:{taskRuns:[{metadata:{labels:{"tekton.dev/pipelineTask":"Task 1"},uid:"task"},status:{conditions:[{reason:"Completed",status:"True",type:"Succeeded"}],steps:[{name:"build",terminated:{reason:"Completed"}},{name:"test",terminated:{reason:"Completed"}}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 2"},uid:"task2"},status:{conditions:[{reason:"Failed",status:"False",type:"Succeeded"}],steps:[{name:"step 1",terminated:{reason:"Error"}},{name:"step 2",terminated:{reason:"Error"}}]}},{metadata:{labels:{"tekton.dev/pipelineTask":"Task 3"},uid:"task3"},pipelineTaskName:"Task 3",status:{conditions:[{reason:"Running",status:"Unknown",type:"Succeeded"}],steps:[{name:"step 1",terminated:{reason:"Completed"}},{name:"step 2",running:{}}]}}]},component:r,decorators:[t=>s.jsx("div",{style:{width:"250px"},children:s.jsx(t,{})})],title:"TaskTree"},e={render:t=>{const[d,o]=a.useState(),[n,p]=a.useState();return s.jsx(r,{...t,onSelect:({selectedStepId:i,selectedTaskId:m})=>{o(i),p(m)},selectedStepId:d,selectedTaskId:n})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedStepId, setSelectedStepId] = useState();
    const [selectedTaskId, setSelectedTaskId] = useState();
    return <TaskTree {...args} onSelect={({
      selectedStepId: stepId,
      selectedTaskId: taskId
    }) => {
      setSelectedStepId(stepId);
      setSelectedTaskId(taskId);
    }} selectedStepId={selectedStepId} selectedTaskId={selectedTaskId} />;
  }
}`,...e.parameters?.docs?.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,G as default};
