import{j as c}from"./jsx-runtime-QvtbNqby.js";import{a as t}from"./chunk-454WOBUV-DFclqPoQ.js";import"./usePrefix-BezXHAvh.js";import{D as l}from"./Dropdown-C9w40Gyo.js";import{T as m}from"./Table-BuHWprYL.js";import{A as s}from"./bucket-0-BV5tnCsW.js";import{a as p,R as d}from"./bucket-13-CVUcgUn3.js";import{T as i}from"./bucket-16-DEjbltYp.js";import"./index-BjzEU6Zr.js";import"./v4-D8aEg3BZ.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-eKhO17z2.js";import"./extends-CCbyfPlC.js";import"./index-kGlasm3i.js";import"./index-BYMUMZMs.js";import"./index-CjLpwf8N.js";import"./deprecate-X_RArzr0.js";import"./FormContext-IWjAIOZU.js";import"./bucket-2-DqY0dT-j.js";import"./Icon-DeY_WDsw.js";import"./bucket-3-DTnTkg5v.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-CNixtB1a.js";import"./Button-DxuibFbN.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./events-OVwOsPzJ.js";import"./index-Dc4QqC9m.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./index-9NatbUAG.js";import"./index-DZApqWLJ.js";import"./bucket-12-D9InpaXv.js";import"./noopFn-g4z370MD.js";import"./Search-DGNYnC60.js";import"./index-CfoIBI3E.js";const W={args:{emptyTextAllNamespaces:"No rows in any namespace",emptyTextSelectedNamespace:"No rows in selected namespace",loading:!1,size:"md",title:"Resource Name"},argTypes:{size:{type:"select",options:["xs","sm","md","lg","xl"]}},component:m,title:"Table"},e={args:{headers:[{key:"name",header:"Name"},{key:"namespace",header:"Namespace"},{key:"date",header:"Date created"}],rows:[],selectedNamespace:"*"},parameters:{notes:"simple table with title, no rows, no buttons"}},a={args:{...e.args,rows:[{id:"namespace1:resource-one",name:"resource-one",namespace:"namespace1",date:"100 years ago"}],toolbarButtons:[{onClick:t("handleNew"),text:"Add",icon:s}]},parameters:{notes:"table with 1 row, 1 toolbar button, no batch actions"}},n={args:{...e.args,rows:a.args.rows,batchActionButtons:[{onClick:t("handleDelete"),text:"Delete",icon:i}]},parameters:{notes:"table with 1 row, 1 batch action"}},o={args:{...e.args,batchActionButtons:[{onClick:t("handleDelete"),text:"Delete",icon:i},{onClick:t("handleRerun"),text:"Rerun",icon:p}],isSortable:!0,rows:[{id:"namespace1:resource-one",name:"resource-one",namespace:"namespace1",date:"100 years ago"},{id:"default:resource-two",name:"resource-two",namespace:"default",date:"2 weeks ago"},{id:"tekton:resource-three",name:"resource-three",namespace:"tekton",date:"2 minutes ago"}],toolbarButtons:[{icon:d,kind:"secondary",onClick:t("handleRerunAll"),text:"RerunAll"},{icon:s,onClick:t("handleNew"),text:"Add"}]},parameters:{notes:"table with sortable rows, 2 batch actions, and 2 toolbar buttons"}},r={args:{...a.args,filters:c.jsx(l,{id:"status-filter",initialSelectedItem:"All",items:["All","Succeeded","Failed"],label:"Status",titleText:"Status:",type:"inline"})},parameters:{notes:"table with filters"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    headers: [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'namespace',
      header: 'Namespace'
    }, {
      key: 'date',
      header: 'Date created'
    }],
    rows: [],
    selectedNamespace: '*'
  },
  parameters: {
    notes: 'simple table with title, no rows, no buttons'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    rows: [{
      id: 'namespace1:resource-one',
      name: 'resource-one',
      namespace: 'namespace1',
      date: '100 years ago'
    }],
    toolbarButtons: [{
      onClick: action('handleNew'),
      text: 'Add',
      icon: Add
    }]
  },
  parameters: {
    notes: 'table with 1 row, 1 toolbar button, no batch actions'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    rows: ToolbarButton.args.rows,
    batchActionButtons: [{
      onClick: action('handleDelete'),
      text: 'Delete',
      icon: Delete
    }]
  },
  parameters: {
    notes: 'table with 1 row, 1 batch action'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    batchActionButtons: [{
      onClick: action('handleDelete'),
      text: 'Delete',
      icon: Delete
    }, {
      onClick: action('handleRerun'),
      text: 'Rerun',
      icon: Rerun
    }],
    isSortable: true,
    rows: [{
      id: 'namespace1:resource-one',
      name: 'resource-one',
      namespace: 'namespace1',
      date: '100 years ago'
    }, {
      id: 'default:resource-two',
      name: 'resource-two',
      namespace: 'default',
      date: '2 weeks ago'
    }, {
      id: 'tekton:resource-three',
      name: 'resource-three',
      namespace: 'tekton',
      date: '2 minutes ago'
    }],
    toolbarButtons: [{
      icon: RerunAll,
      kind: 'secondary',
      onClick: action('handleRerunAll'),
      text: 'RerunAll'
    }, {
      icon: Add,
      onClick: action('handleNew'),
      text: 'Add'
    }]
  },
  parameters: {
    notes: 'table with sortable rows, 2 batch actions, and 2 toolbar buttons'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...ToolbarButton.args,
    filters: <Dropdown id="status-filter" initialSelectedItem="All" items={['All', 'Succeeded', 'Failed']} label="Status" titleText="Status:" type="inline" />
  },
  parameters: {
    notes: 'table with filters'
  }
}`,...r.parameters?.docs?.source}}};const X=["Simple","ToolbarButton","BatchActions","Sorting","Filters"];export{n as BatchActions,r as Filters,e as Simple,o as Sorting,a as ToolbarButton,X as __namedExportsOrder,W as default};
