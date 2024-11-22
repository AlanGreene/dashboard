import{j as m}from"./jsx-runtime-Bzbk6Sx8.js";import{a}from"./chunk-D5ZWXAHU-5jmZk1IN.js";import"./usePrefix-DQgSqSG9.js";import{D as p}from"./Dropdown-BNZ02r3U.js";import{T as d}from"./Table-ZgBq0ph7.js";import{A as c}from"./bucket-0-DVe4YXaa.js";import{R as u}from"./bucket-14-DDIDUikv.js";import{T as l}from"./bucket-17-CpsfdLmP.js";import{R as g}from"./bucket-13-DZ_6w3Wo.js";import"./index-DoYbGmCh.js";import"./v4-CQkTLCs1.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-51-aJb-v.js";import"./index-CxNs_Qc2.js";import"./extends-CF3RwP-h.js";import"./index-D0k5bR2p.js";import"./index-D295wprO.js";import"./FormContext-D1Yu1AhR.js";import"./bucket-3-DW_-k99P.js";import"./Icon-BbW6Eq-V.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-DO7kS4tX.js";import"./bucket-2-BzIGxUKv.js";import"./Button-0g61YMpW.js";import"./index-SPZK-v-M.js";import"./Tooltip-BfR-5Xhs.js";import"./events-OVwOsPzJ.js";import"./index-sWjxewSB.js";import"./index-Drl37m2w.js";import"./Text-9Q8NT07l.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./OverflowMenuItem-iAjAaEGF.js";import"./Search-CoPmlita.js";import"./noopFn-g4z370MD.js";import"./index-BsO2LqBO.js";import"./bucket-12-Bu6lI_iC.js";import"./wrapFocus-BvAm1HsT.js";import"./index-CfoIBI3E.js";const ee={args:{emptyTextAllNamespaces:"No rows in any namespace",emptyTextSelectedNamespace:"No rows in selected namespace",loading:!1,size:"md",title:"Resource Name"},argTypes:{size:{type:"select",options:["xs","sm","md","lg","xl"]}},component:d,title:"Table"},e={args:{headers:[{key:"name",header:"Name"},{key:"namespace",header:"Namespace"},{key:"date",header:"Date created"}],rows:[],selectedNamespace:"*"},parameters:{notes:"simple table with title, no rows, no buttons"}},t={args:{...e.args,rows:[{id:"namespace1:resource-one",name:"resource-one",namespace:"namespace1",date:"100 years ago"}],toolbarButtons:[{onClick:a("handleNew"),text:"Add",icon:c}]},parameters:{notes:"table with 1 row, 1 toolbar button, no batch actions"}},n={args:{...e.args,rows:t.args.rows,batchActionButtons:[{onClick:a("handleDelete"),text:"Delete",icon:l}]},parameters:{notes:"table with 1 row, 1 batch action"}},o={args:{...e.args,batchActionButtons:[{onClick:a("handleDelete"),text:"Delete",icon:l},{onClick:a("handleRerun"),text:"Rerun",icon:u}],isSortable:!0,rows:[{id:"namespace1:resource-one",name:"resource-one",namespace:"namespace1",date:"100 years ago"},{id:"default:resource-two",name:"resource-two",namespace:"default",date:"2 weeks ago"},{id:"tekton:resource-three",name:"resource-three",namespace:"tekton",date:"2 minutes ago"}],toolbarButtons:[{icon:g,kind:"secondary",onClick:a("handleRerunAll"),text:"RerunAll"},{icon:c,onClick:a("handleNew"),text:"Add"}]},parameters:{notes:"table with sortable rows, 2 batch actions, and 2 toolbar buttons"}},r={args:{...t.args,filters:m.jsx(p,{id:"status-filter",initialSelectedItem:"All",items:["All","Succeeded","Failed"],label:"Status",titleText:"Status:",type:"inline"})},parameters:{notes:"table with filters"}},s={args:{...t.args,loading:!0},parameters:{notes:"table loading state"}},i={args:{...r.args,loading:!0},parameters:{notes:"table loading state with filters"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...ToolbarButton.args,
    loading: true
  },
  parameters: {
    notes: 'table loading state'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Filters.args,
    loading: true
  },
  parameters: {
    notes: 'table loading state with filters'
  }
}`,...i.parameters?.docs?.source}}};const te=["Simple","ToolbarButton","BatchActions","Sorting","Filters","Loading","LoadingWithFilters"];export{n as BatchActions,r as Filters,s as Loading,i as LoadingWithFilters,e as Simple,o as Sorting,t as ToolbarButton,te as __namedExportsOrder,ee as default};
