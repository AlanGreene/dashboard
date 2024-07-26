import{j as e}from"./jsx-runtime-QvtbNqby.js";import{P as r}from"./index-kGlasm3i.js";import{u as D}from"./index-BYMUMZMs.js";import"./usePrefix-BezXHAvh.js";import{I as T}from"./Notification-DTvxI4If.js";import{S as A}from"./SkeletonText-DhyM3XVj.js";import{T as C,a as _,b as j,c as k,d as b}from"./Tabs-gghMQKfC.js";import{T as N}from"./Tag-YsAF4sgM.js";import{b as L,f as E}from"./index-CfoIBI3E.js";import{F as I}from"./FormattedDate-BPTTyExm.js";import{V as R}from"./ViewYAML-CKT6AdML.js";import"./index-BjzEU6Zr.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./deprecate-X_RArzr0.js";import"./index-CjLpwf8N.js";import"./Button-DxuibFbN.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./events-OVwOsPzJ.js";import"./noopFn-g4z370MD.js";import"./index-DZApqWLJ.js";import"./bucket-3-DTnTkg5v.js";import"./Icon-DeY_WDsw.js";import"./bucket-6-CpbjS_H5.js";import"./bucket-2-DqY0dT-j.js";import"./bucket-18-CNixtB1a.js";import"./bucket-9-DuBbq6Ld.js";import"./index-Dc4QqC9m.js";import"./useControllableState-Co_owzu1.js";const v=["overview","yaml"],O={onViewChange:()=>{}},g=({actions:t=null,additionalMetadata:n=null,children:i=null,error:h=null,loading:w,onViewChange:V=O.onViewChange,resource:p=null,view:y=null})=>{const s=D();if(w)return e.jsx(A,{heading:!0,width:"60%"});if(h||!p)return e.jsx(T,{kind:"error",hideCloseButton:!0,lowContrast:!0,title:s.formatMessage({id:"dashboard.resourceDetails.errorloading",defaultMessage:"Error loading resource"}),subtitle:L(h)});let o=v.indexOf(y);o===-1&&(o=0);const x=E(p.metadata.labels),a={...p};return a.metadata?.managedFields&&delete a.metadata.managedFields,e.jsxs("div",{className:"tkn--resourcedetails",children:[e.jsxs("div",{className:"tkn--resourcedetails--header",children:[e.jsx("h1",{children:a.metadata.name}),t]}),e.jsxs(C,{"aria-label":s.formatMessage({id:"dashboard.resourceDetails.ariaLabel",defaultMessage:"Resource details"}),onChange:l=>V(v[l.selectedIndex]),selectedIndex:o,children:[e.jsxs(_,{activation:"manual",children:[e.jsx(j,{children:s.formatMessage({id:"dashboard.resource.overviewTab",defaultMessage:"Overview"})}),e.jsx(j,{children:"YAML"})]}),e.jsxs(k,{children:[e.jsx(b,{children:o===0&&e.jsxs("div",{className:"tkn--details",children:[e.jsxs("ul",{className:"tkn--resourcedetails-metadata",children:[a.spec?.displayName&&e.jsxs("li",{children:[e.jsx("span",{children:s.formatMessage({id:"dashboard.resourceDetails.spec.displayName",defaultMessage:"Display name:"})}),a.spec.displayName]}),a.spec?.description&&e.jsxs("li",{children:[e.jsx("span",{children:s.formatMessage({id:"dashboard.resourceDetails.spec.description",defaultMessage:"Description:"})}),a.spec.description]}),e.jsxs("li",{children:[e.jsx("span",{children:s.formatMessage({id:"dashboard.metadata.dateCreated",defaultMessage:"Date created:"})}),e.jsx(I,{date:a.metadata.creationTimestamp,relative:!0})]}),e.jsxs("li",{children:[e.jsx("span",{children:s.formatMessage({id:"dashboard.metadata.labels",defaultMessage:"Labels:"})}),x.length===0?s.formatMessage({id:"dashboard.metadata.none",defaultMessage:"None"}):x.map(l=>e.jsx(N,{size:"sm",type:"blue",children:l},l))]}),a.metadata.namespace&&e.jsxs("li",{children:[e.jsx("span",{children:s.formatMessage({id:"dashboard.metadata.namespace",defaultMessage:"Namespace:"})}),a.metadata.namespace]}),n]}),i]})}),e.jsx(b,{children:o===1&&e.jsx(R,{enableSyntaxHighlighting:!0,resource:a})})]})]})]})};g.propTypes={actions:r.node,additionalMetadata:r.node,children:r.node,error:r.oneOfType([r.string,r.shape({})]),onViewChange:r.func,resource:r.shape({}),view:r.string};const f=g;g.__docgenInfo={description:"",methods:[],displayName:"ResourceDetails",props:{actions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},additionalMetadata:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},error:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"shape",value:{}}]},required:!1},onViewChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},resource:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},view:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1}}};const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,S={apiVersion:"tekton.dev/v1",kind:"Task",metadata:{creationTimestamp:"2020-05-19T16:49:30Z",labels:{"label-key":"label-value"},name:"test",namespace:"tekton-pipelines"},spec:{steps:[{name:"test",image:"alpine",script:"echo hello"}]}},ge={component:f,title:"ResourceDetails"},c={args:{error:"A helpful error message"}},m={args:{loading:!0}},d={args:{resource:S},render:t=>{const[,n]=M();return e.jsx(f,{...t,onViewChange:i=>n({view:i})})}},u={args:{...d.args,additionalMetadata:e.jsxs("li",{children:[e.jsx("span",{children:"Custom Field:"}),"some additional metadata"]}),children:e.jsx("p",{children:"some additional content"})},render:t=>{const[,n]=M();return e.jsx(f,{...t,onViewChange:i=>n({view:i})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'A helpful error message'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    resource
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <ResourceDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    additionalMetadata: <li>
        <span>Custom Field:</span>some additional metadata
      </li>,
    children: <p>some additional content</p>
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <ResourceDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...u.parameters?.docs?.source}}};const fe=["Error","Loading","Default","WithAdditionalContent"];export{d as Default,c as Error,m as Loading,u as WithAdditionalContent,fe as __namedExportsOrder,ge as default};
