import{j as e}from"./jsx-runtime-QvtbNqby.js";import{A as a}from"./Actions-BqIljLFe.js";import{T as s}from"./bucket-17-BNnKjYXl.js";import"./index-BjzEU6Zr.js";import"./index-yfVukVkJ.js";import"./usePrefix-CXWdRn9x.js";import"./Button-xjCpe_BM.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-kGlasm3i.js";import"./index-Da0at1PC.js";import"./index-CjLpwf8N.js";import"./Tooltip-BJBVfZ_G.js";import"./events-OVwOsPzJ.js";import"./useControllableState-Co_owzu1.js";import"./index-lRp1do-S.js";import"./deprecate-GNGtdTso.js";import"./index-55dkfs-I.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-CMgbqDR8.js";import"./Icon-CpyVU44g.js";import"./noopFn-g4z370MD.js";import"./bucket-2-C9DXCKPV.js";import"./Modal-C1MzBDlE.js";import"./bucket-6-CywArVTS.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./index-Dc4QqC9m.js";import"./bucket-3-Dq7FRXBG.js";const O={component:a,decorators:[i=>e.jsx("div",{style:{width:"200px",display:"flex",justifyContent:"flex-end"},children:e.jsx(i,{})})],title:"Actions"},n={action:()=>{},actionText:"Delete",danger:!0,hasDivider:!0,icon:s,modalProperties:{body:()=>"modal body",danger:!0,heading:"Modal Heading",primaryButtonText:"primary text",secondaryButtonText:"secondary text"}},t={args:{items:[{action:()=>{},actionText:"Rerun"},{action:()=>{},actionText:"disabled option",disable:()=>!0,modalProperties:{body:()=>"modal body",heading:"Modal Heading",primaryButtonText:"primary text",secondaryButtonText:"secondary text"}},n]}},o={args:{...t.args,kind:"button"}},r={args:{items:[n],kind:"button"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      action: () => {},
      actionText: 'Rerun'
    }, {
      action: () => {},
      actionText: 'disabled option',
      disable: () => true,
      modalProperties: {
        body: () => 'modal body',
        heading: 'Modal Heading',
        primaryButtonText: 'primary text',
        secondaryButtonText: 'secondary text'
      }
    }, deleteAction]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    kind: 'button'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [deleteAction],
    kind: 'button'
  }
}`,...r.parameters?.docs?.source}}};const q=["Default","Button","SingleAction"];export{o as Button,t as Default,r as SingleAction,q as __namedExportsOrder,O as default};
