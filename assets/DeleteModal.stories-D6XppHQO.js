import{a as m}from"./chunk-454WOBUV-DFclqPoQ.js";import{j as o}from"./jsx-runtime-QvtbNqby.js";import{u as l}from"./index-BYMUMZMs.js";import{M as c}from"./Modal-_W9C5eOo.js";import{T as u}from"./Table-BuHWprYL.js";import"./v4-D8aEg3BZ.js";import"./index-BjzEU6Zr.js";import"./usePrefix-BezXHAvh.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-kGlasm3i.js";import"./index-CjLpwf8N.js";import"./Button-DxuibFbN.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./events-OVwOsPzJ.js";import"./deprecate-X_RArzr0.js";import"./bucket-6-CpbjS_H5.js";import"./Icon-DeY_WDsw.js";import"./bucket-2-DqY0dT-j.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./index-DZApqWLJ.js";import"./index-Dc4QqC9m.js";import"./noopFn-g4z370MD.js";import"./bucket-3-DTnTkg5v.js";import"./bucket-0-BV5tnCsW.js";import"./mergeRefs-CTUecegF.js";import"./index-9NatbUAG.js";import"./bucket-12-D9InpaXv.js";import"./Search-DGNYnC60.js";import"./FormContext-IWjAIOZU.js";import"./index-CfoIBI3E.js";const n=({onClose:s,onSubmit:i,kind:r,resources:d,showNamespace:p=!0})=>{const e=l();return o.jsxs(c,{className:"tkn--delete-modal",open:!0,primaryButtonText:e.formatMessage({id:"dashboard.actions.deleteButton",defaultMessage:"Delete"}),secondaryButtonText:e.formatMessage({id:"dashboard.modal.cancelButton",defaultMessage:"Cancel"}),modalHeading:e.formatMessage({id:"dashboard.deleteResources.heading",defaultMessage:"Delete {kind}"},{kind:r}),onSecondarySubmit:s,onRequestSubmit:i,onRequestClose:s,danger:!0,children:[o.jsx("p",{children:e.formatMessage({id:"dashboard.deleteResources.confirm",defaultMessage:"Are you sure you want to delete these {kind}?"},{kind:r})}),o.jsx(u,{headers:[{key:"name",header:e.formatMessage({id:"dashboard.tableHeader.name",defaultMessage:"Name"})},p?{key:"namespace",header:"Namespace"}:null].filter(Boolean),rows:d.map(t=>({id:t.metadata.uid,name:t.metadata.name,namespace:t.metadata.namespace})),size:"sm"})]})},f=n;n.__docgenInfo={description:"",methods:[],displayName:"DeleteModal",props:{showNamespace:{defaultValue:{value:"true",computed:!1},required:!1}}};const L={component:f,title:"DeleteModal"},a={args:{kind:"Pipelines",onClose:m("onClose"),onSubmit:m("onSubmit"),resources:[{metadata:{name:"my-pipeline",namespace:"my-namespace",uid:"700c9915-65f0-4309-b7e0-54d2e4dc8bea"}}],showNamespace:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
