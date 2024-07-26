import{D as d}from"./DetailsHeader-DxveQ-6v.js";import"./jsx-runtime-QvtbNqby.js";import"./index-BjzEU6Zr.js";import"./index-BYMUMZMs.js";import"./FormattedDuration-CpIuRcpd.js";import"./index-CfoIBI3E.js";import"./StatusIcon-B2CmmOh1.js";import"./bucket-3-DTnTkg5v.js";import"./Icon-DeY_WDsw.js";import"./index-kGlasm3i.js";import"./bucket-16-DEjbltYp.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";import"./bucket-2-DqY0dT-j.js";import"./bucket-18-CNixtB1a.js";import"./bucket-12-D9InpaXv.js";const e=({reason:i,status:u})=>({status:{conditions:[{reason:i,status:u,type:"Succeeded"}]}}),W={args:{type:"step"},argTypes:{type:{control:{type:"inline-radio"},options:["step","taskRun"]}},component:d,title:"DetailsHeader"},a={args:{reason:"TaskRunCancelled",status:"terminated",displayName:"build",taskRun:e({reason:"TaskRunCancelled",status:"False"})}},s={args:{reason:"Completed",status:"terminated",displayName:"build",taskRun:e({reason:"Succeeded",status:"True"})}},n={args:{displayName:"build",exitCode:1,hasWarning:!0,reason:"Completed",status:"terminated",taskRun:e({reason:"Succeeded",status:"True"})},name:"Completed with warning"},t={args:{displayName:"build",reason:"Error",status:"terminated",taskRun:e({reason:"Failed",status:"False"})}},r={args:{taskRun:e({reason:"Pending",status:"Unknown"})}},o={args:{displayName:"build",status:"running",taskRun:e({reason:"Running",status:"Unknown"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'TaskRunCancelled',
    status: 'terminated',
    displayName: 'build',
    taskRun: getTaskRun({
      reason: 'TaskRunCancelled',
      status: 'False'
    })
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'Completed',
    status: 'terminated',
    displayName: 'build',
    taskRun: getTaskRun({
      reason: 'Succeeded',
      status: 'True'
    })
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: 'build',
    exitCode: 1,
    hasWarning: true,
    reason: 'Completed',
    status: 'terminated',
    taskRun: getTaskRun({
      reason: 'Succeeded',
      status: 'True'
    })
  },
  name: 'Completed with warning'
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: 'build',
    reason: 'Error',
    status: 'terminated',
    taskRun: getTaskRun({
      reason: 'Failed',
      status: 'False'
    })
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    taskRun: getTaskRun({
      reason: 'Pending',
      status: 'Unknown'
    })
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: 'build',
    status: 'running',
    taskRun: getTaskRun({
      reason: 'Running',
      status: 'Unknown'
    })
  }
}`,...o.parameters?.docs?.source}}};const x=["Cancelled","Completed","CompletedWithWarning","Failed","Pending","Running"];export{a as Cancelled,s as Completed,n as CompletedWithWarning,t as Failed,r as Pending,o as Running,x as __namedExportsOrder,W as default};
