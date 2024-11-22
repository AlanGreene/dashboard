import{j as p}from"./jsx-runtime-Bzbk6Sx8.js";import{a as g}from"./chunk-D5ZWXAHU-5jmZk1IN.js";import{T as c}from"./Task-BB8VYseE.js";import{d as l}from"./constants-PT-Qtcqm.js";import"./index-DoYbGmCh.js";import"./v4-CQkTLCs1.js";import"./index-D0k5bR2p.js";import"./usePrefix-DQgSqSG9.js";import"./index-BsO2LqBO.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-51-aJb-v.js";import"./index-D295wprO.js";import"./index-SPZK-v-M.js";import"./Tooltip-BfR-5Xhs.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-Bu6lI_iC.js";import"./Icon-BbW6Eq-V.js";import"./wrapFocus-BvAm1HsT.js";import"./noopFn-g4z370MD.js";import"./OverflowMenuItem-iAjAaEGF.js";import"./Text-9Q8NT07l.js";import"./index-CfoIBI3E.js";import"./StatusIcon-B3mfoTbA.js";import"./bucket-3-DW_-k99P.js";import"./bucket-17-CpsfdLmP.js";import"./Spinner-6fWOlw3V.js";import"./bucket-13-DZ_6w3Wo.js";import"./bucket-2-BzIGxUKv.js";import"./bucket-18-DO7kS4tX.js";import"./Step-DIXJD-8b.js";const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,G={args:{displayName:"A Task",onSelect:g("selected"),selectedStepId:void 0,taskRun:{}},component:c,decorators:[i=>p.jsx("div",{style:{width:"250px"},children:p.jsx(i,{})})],title:"Task"},r={args:{succeeded:"True"}},s={args:{...r.args,steps:[{terminated:{exitCode:1,reason:"Completed"}}]},name:"Succeeded with warning"},a={args:{succeeded:"False"}},e={args:{succeeded:"Unknown"}},o={args:{...e.args,reason:"Pending"}},t={args:{...e.args,reason:"Running"}},d={args:{reason:l}},n=i=>{const[,m]=S();return p.jsx(c,{...i,expanded:!0,onSelect:({selectedStepId:u})=>m({selectedStepId:u}),reason:"Running",steps:[{name:"lint",terminated:{exitCode:0,reason:"Completed"}},{name:"check",terminated:{exitCode:0,reason:"Completed"},terminationReason:"Skipped"},{name:"test",terminated:{exitCode:1,reason:"Completed"}},{name:"build",running:{}},{name:"deploy",running:{}}],succeeded:"Unknown"})};n.__docgenInfo={description:"",methods:[],displayName:"Expanded"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    succeeded: 'True'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Succeeded.args,
    steps: [{
      terminated: {
        exitCode: 1,
        reason: 'Completed'
      }
    }]
  },
  name: 'Succeeded with warning'
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    succeeded: 'False'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    succeeded: 'Unknown'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Unknown.args,
    reason: 'Pending'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Unknown.args,
    reason: 'Running'
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    reason: dashboardReasonSkipped
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <Task {...args} expanded onSelect={({
    selectedStepId: stepId
  }) => updateArgs({
    selectedStepId: stepId
  })} reason="Running" steps={[{
    name: 'lint',
    terminated: {
      exitCode: 0,
      reason: 'Completed'
    }
  }, {
    name: 'check',
    terminated: {
      exitCode: 0,
      reason: 'Completed'
    },
    terminationReason: 'Skipped'
  }, {
    name: 'test',
    terminated: {
      exitCode: 1,
      reason: 'Completed'
    }
  }, {
    name: 'build',
    running: {}
  }, {
    name: 'deploy',
    running: {}
  }]} succeeded="Unknown" />;
}`,...n.parameters?.docs?.source}}};const H=["Succeeded","SucceededWithWarning","Failed","Unknown","Pending","Running","Skipped","Expanded"];export{n as Expanded,a as Failed,o as Pending,t as Running,d as Skipped,r as Succeeded,s as SucceededWithWarning,e as Unknown,H as __namedExportsOrder,G as default};
