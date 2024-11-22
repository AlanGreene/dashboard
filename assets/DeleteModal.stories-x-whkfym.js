import{a as m}from"./chunk-D5ZWXAHU-5jmZk1IN.js";import{j as o}from"./jsx-runtime-Bzbk6Sx8.js";import{u as l}from"./index-D0k5bR2p.js";import{M as c}from"./Modal-Dv1MFLUb.js";import{T as u}from"./Table-ZgBq0ph7.js";import"./v4-CQkTLCs1.js";import"./index-DoYbGmCh.js";import"./usePrefix-DQgSqSG9.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-51-aJb-v.js";import"./index-D295wprO.js";import"./Button-0g61YMpW.js";import"./index-SPZK-v-M.js";import"./Tooltip-BfR-5Xhs.js";import"./events-OVwOsPzJ.js";import"./bucket-6-uvXOZeGf.js";import"./Icon-BbW6Eq-V.js";import"./bucket-2-BzIGxUKv.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BvAm1HsT.js";import"./index-Drl37m2w.js";import"./noopFn-g4z370MD.js";import"./Text-9Q8NT07l.js";import"./bucket-3-DW_-k99P.js";import"./index-sWjxewSB.js";import"./bucket-0-DVe4YXaa.js";import"./mergeRefs-CTUecegF.js";import"./OverflowMenuItem-iAjAaEGF.js";import"./Search-CoPmlita.js";import"./FormContext-D1Yu1AhR.js";import"./bucket-14-DDIDUikv.js";import"./index-BsO2LqBO.js";import"./bucket-12-Bu6lI_iC.js";import"./index-CfoIBI3E.js";const i=({onClose:s,onSubmit:n,kind:r,resources:d,showNamespace:p=!0})=>{const e=l();return o.jsxs(c,{className:"tkn--delete-modal",open:!0,primaryButtonText:e.formatMessage({id:"dashboard.actions.deleteButton",defaultMessage:"Delete"}),secondaryButtonText:e.formatMessage({id:"dashboard.modal.cancelButton",defaultMessage:"Cancel"}),modalHeading:e.formatMessage({id:"dashboard.deleteResources.heading",defaultMessage:"Delete {kind}"},{kind:r}),onSecondarySubmit:s,onRequestSubmit:n,onRequestClose:s,danger:!0,children:[o.jsx("p",{children:e.formatMessage({id:"dashboard.deleteResources.confirm",defaultMessage:"Are you sure you want to delete these {kind}?"},{kind:r})}),o.jsx(u,{headers:[{key:"name",header:e.formatMessage({id:"dashboard.tableHeader.name",defaultMessage:"Name"})},p?{key:"namespace",header:"Namespace"}:null].filter(Boolean),rows:d.map(t=>({id:t.metadata.uid,name:t.metadata.name,namespace:t.metadata.namespace})),size:"sm"})]})};i.__docgenInfo={description:"",methods:[],displayName:"DeleteModal",props:{showNamespace:{defaultValue:{value:"true",computed:!1},required:!1}}};const W={component:i,title:"DeleteModal"},a={args:{kind:"Pipelines",onClose:m("onClose"),onSubmit:m("onSubmit"),resources:[{metadata:{name:"my-pipeline",namespace:"my-namespace",uid:"700c9915-65f0-4309-b7e0-54d2e4dc8bea"}}],showNamespace:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const X=["Default"];export{a as Default,X as __namedExportsOrder,W as default};
