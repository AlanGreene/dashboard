import{j as c}from"./jsx-runtime-QvtbNqby.js";import{r as g}from"./index-BjzEU6Zr.js";import{a as l}from"./chunk-454WOBUV-DFclqPoQ.js";import{T as i}from"./Task-BDoFt-jJ.js";import"./v4-D8aEg3BZ.js";import"./index-BYMUMZMs.js";import"./usePrefix-BezXHAvh.js";import"./index-9NatbUAG.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-CjLpwf8N.js";import"./index-kGlasm3i.js";import"./deprecate-X_RArzr0.js";import"./index-DZApqWLJ.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-D9InpaXv.js";import"./Icon-DeY_WDsw.js";import"./noopFn-g4z370MD.js";import"./index-CfoIBI3E.js";import"./StatusIcon-B2CmmOh1.js";import"./bucket-3-DTnTkg5v.js";import"./bucket-16-DEjbltYp.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";import"./bucket-2-DqY0dT-j.js";import"./bucket-18-CNixtB1a.js";import"./Step-Cz-qLbwJ.js";const J={args:{displayName:"A Task",onSelect:l("selected"),taskRun:{}},component:i,decorators:[d=>c.jsx("div",{style:{width:"250px"},children:c.jsx(d,{})})],title:"Task"},r={args:{succeeded:"True"}},s={args:{...r.args,steps:[{terminated:{exitCode:1,reason:"Completed"}}]},name:"Succeeded with warning"},t={args:{succeeded:"False"}},e={args:{succeeded:"Unknown"}},a={args:{...e.args,reason:"Pending"}},o={args:{...e.args,reason:"Running"}},n=d=>{const[p,m]=g.useState();return c.jsx(i,{...d,expanded:!0,onSelect:({selectedStepId:u})=>m(u),reason:"Running",selectedStepId:p,steps:[{name:"lint",terminated:{exitCode:0,reason:"Completed"}},{name:"test",terminated:{exitCode:1,reason:"Completed"}},{name:"build",running:{}},{name:"deploy",running:{}}],succeeded:"Unknown"})};n.__docgenInfo={description:"",methods:[],displayName:"Expanded"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    succeeded: 'False'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    succeeded: 'Unknown'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Unknown.args,
    reason: 'Pending'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Unknown.args,
    reason: 'Running'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [selectedStepId, setSelectedStepId] = useState();
  return <Task {...args} expanded onSelect={({
    selectedStepId: stepId
  }) => setSelectedStepId(stepId)} reason="Running" selectedStepId={selectedStepId} steps={[{
    name: 'lint',
    terminated: {
      exitCode: 0,
      reason: 'Completed'
    }
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
}`,...n.parameters?.docs?.source}}};const K=["Succeeded","SucceededWithWarning","Failed","Unknown","Pending","Running","Expanded"];export{n as Expanded,t as Failed,a as Pending,o as Running,r as Succeeded,s as SucceededWithWarning,e as Unknown,K as __namedExportsOrder,J as default};
