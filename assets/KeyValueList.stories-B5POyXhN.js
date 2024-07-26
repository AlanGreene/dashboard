import{a}from"./chunk-454WOBUV-DFclqPoQ.js";import{j as e}from"./jsx-runtime-QvtbNqby.js";import{u as S}from"./index-BYMUMZMs.js";import"./usePrefix-BezXHAvh.js";import{B as P}from"./Button-DxuibFbN.js";import{T as b}from"./TextInput-BAIV31U6.js";import{R as r}from"./index-BjzEU6Zr.js";import{I as _}from"./Icon-DeY_WDsw.js";import{a as z}from"./bucket-0-BV5tnCsW.js";import"./v4-D8aEg3BZ.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-kGlasm3i.js";import"./index-ED9P7qmL.js";import"./index-CjLpwf8N.js";import"./Tooltip-CPLX6X0E.js";import"./events-OVwOsPzJ.js";import"./deprecate-X_RArzr0.js";import"./bucket-18-CNixtB1a.js";import"./FormContext-IWjAIOZU.js";import"./bucket-17-ByI71b45.js";import"./noopFn-g4z370MD.js";var C,K;const E=r.forwardRef(function(d,n){let{children:u,size:l=16,...c}=d;return r.createElement(_,{width:l,height:l,ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...c},C||(C=r.createElement("path",{d:"M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14 S23.7,2,16,2z"})),K||(K=r.createElement("path",{d:"M8 15H24V17H8z"})),u)}),A=({invalidFields:s,invalidText:d,keyValues:n,legendText:u,minKeyValues:l=0,onAdd:c,onChange:y,onRemove:R})=>{const h=S(),k=h.formatMessage({id:"dashboard.keyValueList.add",defaultMessage:"Add"}),T=h.formatMessage({id:"dashboard.keyValueList.remove",defaultMessage:"Remove"});let m=!1;const j=n.map(({id:o,key:I,keyPlaceholder:w,value:M,valuePlaceholder:L},v)=>{const f=`${o}-key`,g=`${o}-value`,V=f in s,x=g in s;return m=m||V||x,e.jsxs("div",{className:"tkn--keyvalue-row",children:[e.jsx(b,{id:f,labelText:"",value:I,placeholder:w,onChange:p=>{y({type:"key",index:v,value:p.target.value})},invalid:V,autoComplete:"off"}),e.jsx(b,{id:g,labelText:"",value:M,placeholder:L,onChange:p=>{y({type:"value",index:v,value:p.target.value})},invalid:x,autoComplete:"off"}),n.length>l&&e.jsx(P,{hasIconOnly:!0,iconDescription:T,kind:"ghost",onClick:()=>R(v),renderIcon:E,size:"md",tooltipAlignment:"center",tooltipPosition:"bottom"})]},`keyvalueRow${o}`)});return e.jsxs("div",{className:"tkn--keyvalues",children:[e.jsx("p",{className:"tkn--keyvalue-label",children:u}),m&&e.jsx("p",{className:"tkn--keyvalue-invalid",children:d}),j,e.jsx(P,{iconDescription:k,kind:"ghost",onClick:c,renderIcon:o=>e.jsx(z,{size:24,...o}),children:k})]})},N=A;A.__docgenInfo={description:"",methods:[],displayName:"KeyValueList",props:{minKeyValues:{defaultValue:{value:"0",computed:!1},required:!1}}};const ie={args:{legendText:"Legend Text"},component:N,title:"KeyValueList"},t={args:{invalidFields:{"2-key":!0,"3-value":!0},invalidText:"There are invalid KeyValue entries.",keyValues:[{id:"0",key:"foo",keyPlaceholder:"foo",value:"bar",valuePlaceholder:"bar"},{id:"1",key:"",keyPlaceholder:"key placeholder",value:"",valuePlaceholder:"value placeholder"},{id:"2",key:"invalid key",keyPlaceholder:"",value:"bar",valuePlaceholder:""},{id:"3",key:"foo",keyPlaceholder:"",value:"invalid value",valuePlaceholder:""}],onAdd:a("onAdd"),onChange:a("onChange"),onRemove:a("onRemove")}},i={args:{invalidFields:{},keyValues:[{id:"0",key:"foo",keyPlaceholder:"foo",value:"bar",valuePlaceholder:"bar"}],minKeyValues:1,onAdd:a("onAdd"),onChange:a("onChange"),onRemove:a("onRemove")},name:"minKeyValues"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    invalidFields: {
      '2-key': true,
      '3-value': true
    },
    invalidText: 'There are invalid KeyValue entries.',
    keyValues: [{
      id: '0',
      key: 'foo',
      keyPlaceholder: 'foo',
      value: 'bar',
      valuePlaceholder: 'bar'
    }, {
      id: '1',
      key: '',
      keyPlaceholder: 'key placeholder',
      value: '',
      valuePlaceholder: 'value placeholder'
    }, {
      id: '2',
      key: 'invalid key',
      keyPlaceholder: '',
      value: 'bar',
      valuePlaceholder: ''
    }, {
      id: '3',
      key: 'foo',
      keyPlaceholder: '',
      value: 'invalid value',
      valuePlaceholder: ''
    }],
    onAdd: action('onAdd'),
    onChange: action('onChange'),
    onRemove: action('onRemove')
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    invalidFields: {},
    keyValues: [{
      id: '0',
      key: 'foo',
      keyPlaceholder: 'foo',
      value: 'bar',
      valuePlaceholder: 'bar'
    }],
    minKeyValues: 1,
    onAdd: action('onAdd'),
    onChange: action('onChange'),
    onRemove: action('onRemove')
  },
  name: 'minKeyValues'
}`,...i.parameters?.docs?.source}}};const se=["Default","MinKeyValues"];export{t as Default,i as MinKeyValues,se as __namedExportsOrder,ie as default};
