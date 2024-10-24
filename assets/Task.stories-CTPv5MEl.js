import{j as p}from"./jsx-runtime-QvtbNqby.js";import{a as g}from"./chunk-D5ZWXAHU-5jmZk1IN.js";import{T as c}from"./Task-CFqHHY0P.js";import{d as l}from"./constants-PT-Qtcqm.js";import"./index-BjzEU6Zr.js";import"./v4-CQkTLCs1.js";import"./index-yfVukVkJ.js";import"./usePrefix-CXWdRn9x.js";import"./index-lRp1do-S.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-CjLpwf8N.js";import"./index-kGlasm3i.js";import"./deprecate-GNGtdTso.js";import"./index-55dkfs-I.js";import"./index-Da0at1PC.js";import"./Tooltip-BJBVfZ_G.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-CMgbqDR8.js";import"./Icon-CpyVU44g.js";import"./noopFn-g4z370MD.js";import"./index-CfoIBI3E.js";import"./StatusIcon-CbB-w7ji.js";import"./bucket-3-Dq7FRXBG.js";import"./bucket-16-CiwkPD5r.js";import"./Spinner-Dbwi84XW.js";import"./bucket-13-CBnqkqgu.js";import"./bucket-17-BNnKjYXl.js";import"./bucket-2-C9DXCKPV.js";import"./bucket-18-ByJs4WER.js";import"./Step-1ey7nsMI.js";const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,G={args:{displayName:"A Task",onSelect:g("selected"),selectedStepId:void 0,taskRun:{}},component:c,decorators:[i=>p.jsx("div",{style:{width:"250px"},children:p.jsx(i,{})})],title:"Task"},r={args:{succeeded:"True"}},s={args:{...r.args,steps:[{terminated:{exitCode:1,reason:"Completed"}}]},name:"Succeeded with warning"},a={args:{succeeded:"False"}},e={args:{succeeded:"Unknown"}},o={args:{...e.args,reason:"Pending"}},t={args:{...e.args,reason:"Running"}},d={args:{reason:l}},n=i=>{const[,m]=S();return p.jsx(c,{...i,expanded:!0,onSelect:({selectedStepId:u})=>m({selectedStepId:u}),reason:"Running",steps:[{name:"lint",terminated:{exitCode:0,reason:"Completed"}},{name:"check",terminated:{exitCode:0,reason:"Completed"},terminationReason:"Skipped"},{name:"test",terminated:{exitCode:1,reason:"Completed"}},{name:"build",running:{}},{name:"deploy",running:{}}],succeeded:"Unknown"})};n.__docgenInfo={description:"",methods:[],displayName:"Expanded"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
