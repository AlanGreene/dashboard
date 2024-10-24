import{a as m}from"./chunk-D5ZWXAHU-5jmZk1IN.js";import{j as o}from"./jsx-runtime-QvtbNqby.js";import{u as l}from"./index-yfVukVkJ.js";import{M as c}from"./Modal-C1MzBDlE.js";import{T as u}from"./Table-D1X7MWr6.js";import"./v4-CQkTLCs1.js";import"./index-BjzEU6Zr.js";import"./usePrefix-CXWdRn9x.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-kGlasm3i.js";import"./index-CjLpwf8N.js";import"./Button-xjCpe_BM.js";import"./index-Da0at1PC.js";import"./Tooltip-BJBVfZ_G.js";import"./events-OVwOsPzJ.js";import"./deprecate-GNGtdTso.js";import"./bucket-6-CywArVTS.js";import"./Icon-CpyVU44g.js";import"./bucket-2-C9DXCKPV.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./index-55dkfs-I.js";import"./index-Dc4QqC9m.js";import"./noopFn-g4z370MD.js";import"./bucket-3-Dq7FRXBG.js";import"./bucket-0-C5s-C6Km.js";import"./mergeRefs-CTUecegF.js";import"./index-lRp1do-S.js";import"./bucket-12-CMgbqDR8.js";import"./Search-7e9e9RA9.js";import"./FormContext-IWjAIOZU.js";import"./index-CfoIBI3E.js";const n=({onClose:s,onSubmit:i,kind:r,resources:d,showNamespace:p=!0})=>{const e=l();return o.jsxs(c,{className:"tkn--delete-modal",open:!0,primaryButtonText:e.formatMessage({id:"dashboard.actions.deleteButton",defaultMessage:"Delete"}),secondaryButtonText:e.formatMessage({id:"dashboard.modal.cancelButton",defaultMessage:"Cancel"}),modalHeading:e.formatMessage({id:"dashboard.deleteResources.heading",defaultMessage:"Delete {kind}"},{kind:r}),onSecondarySubmit:s,onRequestSubmit:i,onRequestClose:s,danger:!0,children:[o.jsx("p",{children:e.formatMessage({id:"dashboard.deleteResources.confirm",defaultMessage:"Are you sure you want to delete these {kind}?"},{kind:r})}),o.jsx(u,{headers:[{key:"name",header:e.formatMessage({id:"dashboard.tableHeader.name",defaultMessage:"Name"})},p?{key:"namespace",header:"Namespace"}:null].filter(Boolean),rows:d.map(t=>({id:t.metadata.uid,name:t.metadata.name,namespace:t.metadata.namespace})),size:"sm"})]})};n.__docgenInfo={description:"",methods:[],displayName:"DeleteModal",props:{showNamespace:{defaultValue:{value:"true",computed:!1},required:!1}}};const L={component:n,title:"DeleteModal"},a={args:{kind:"Pipelines",onClose:m("onClose"),onSubmit:m("onSubmit"),resources:[{metadata:{name:"my-pipeline",namespace:"my-namespace",uid:"700c9915-65f0-4309-b7e0-54d2e4dc8bea"}}],showNamespace:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'Pipelines',
    onClose: action('onClose'),
    onSubmit: action('onSubmit'),
    resources: [{
      metadata: {
        name: 'my-pipeline',
        namespace: 'my-namespace',
        uid: '700c9915-65f0-4309-b7e0-54d2e4dc8bea'
      }
    }],
    showNamespace: false
  }
}`,...a.parameters?.docs?.source}}};const Q=["Default"];export{a as Default,Q as __namedExportsOrder,L as default};
