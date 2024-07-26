import{N as p,c as m,a as d,s as T}from"./constants-DEx695dU.js";import"./jsx-runtime-QvtbNqby.js";import"./index-BjzEU6Zr.js";import"./StatusIcon-D0qa4UQ_.js";import"./bucket-12-D9InpaXv.js";import"./Icon-DeY_WDsw.js";import"./index-kGlasm3i.js";import"./bucket-10-DpOnau45.js";import"./bucket-1-Bil9OwUx.js";import"./bucket-17-ByI71b45.js";import"./bucket-16-DEjbltYp.js";import"./bucket-6-CpbjS_H5.js";import"./bucket-18-CNixtB1a.js";import"./bucket-2-DqY0dT-j.js";const G={component:p,args:{height:m,status:"success",title:"some-task",type:"card",width:d,x:0,y:0},argTypes:{status:{control:{type:"select"},options:["failed","git","manual","pending","running","success","success-warning","timer","trigger","warning","webhook"]},type:{control:{type:"inline-radio"},options:["card","icon"]}},title:"Node"},r={args:{status:"failed"}},a={args:{status:"pending"}},e={args:{status:"running"}},t={args:{status:"success"}},n={args:{status:"success-warning"}},o={args:{status:"warning"}},s={args:{status:"trigger",type:"icon",width:T}},c={args:{...s.args,status:"git"}},i={args:{...s.args,status:"manual"}},g={args:{...s.args,status:"timer"}},u={args:{...s.args,status:"webhook"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'failed'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'pending'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'running'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success-warning'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'trigger',
    type: 'icon',
    width: shapeSize
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Trigger.args,
    status: 'git'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Trigger.args,
    status: 'manual'
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Trigger.args,
    status: 'timer'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Trigger.args,
    status: 'webhook'
  }
}`,...u.parameters?.docs?.source}}};const M=["TaskFailed","TaskPending","TaskRunning","TaskSuccess","TaskSuccessWarning","TaskWarning","Trigger","TriggerGit","TriggerManual","TriggerTimer","TriggerWebhook"];export{r as TaskFailed,a as TaskPending,e as TaskRunning,t as TaskSuccess,n as TaskSuccessWarning,o as TaskWarning,s as Trigger,c as TriggerGit,i as TriggerManual,g as TriggerTimer,u as TriggerWebhook,M as __namedExportsOrder,G as default};
