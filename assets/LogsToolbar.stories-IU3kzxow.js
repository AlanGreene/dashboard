import{j as r}from"./jsx-runtime-Bzbk6Sx8.js";import{L as g}from"./LogsToolbar-BqJO-Lla.js";import"./index-DoYbGmCh.js";import"./index-D0k5bR2p.js";import"./usePrefix-DQgSqSG9.js";import"./MenuItem-C45H-6Q2.js";import"./index-CiJV-Qzo.js";import"./index-B0ETwOQ0.js";import"./index-51-aJb-v.js";import"./index-D295wprO.js";import"./useControllableState-DZFM50EU.js";import"./Tooltip-BfR-5Xhs.js";import"./index-BsO2LqBO.js";import"./index-SPZK-v-M.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-Bu6lI_iC.js";import"./Icon-BbW6Eq-V.js";import"./wrapFocus-BvAm1HsT.js";import"./noopFn-g4z370MD.js";import"./Text-9Q8NT07l.js";import"./bucket-2-BzIGxUKv.js";import"./bucket-11-Cyecz5PN.js";import"./bucket-9-ZNHjrwlJ.js";import"./bucket-5-DU9L3vMN.js";import"./bucket-14-DDIDUikv.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,I={component:g,decorators:[e=>r.jsx("pre",{className:"tkn--log",style:{width:"300px"},children:r.jsx(e,{})})],title:"LogsToolbar"},a={args:{showTimestamps:!1},render:e=>{const[,o]=m();return r.jsx(g,{...e,onToggleShowTimestamps:s=>o({showTimestamps:s})})}},n={args:{...a.args,logLevels:{error:!0,warning:!0,info:!0,notice:!0,debug:!1}},render:e=>{const[,o]=m();return r.jsx(g,{...e,onToggleLogLevel:s=>o({logLevels:{...e.logLevels,...s}}),onToggleShowTimestamps:s=>o({showTimestamps:s})})}},t={args:{...n.args,isMaximized:!1},render:e=>{const[,o]=m();return r.jsx(g,{...e,onToggleLogLevel:s=>o({logLevels:{...e.logLevels,...s}}),onToggleMaximized:()=>o({isMaximized:!e.isMaximized}),onToggleShowTimestamps:s=>o({showTimestamps:s})})}},i={args:{...t.args,name:"some_filename.txt",url:"/some/logs/url"},render:e=>{const[,o]=m();return r.jsx(g,{...e,onToggleLogLevel:s=>o({logLevels:{...e.logLevels,...s}}),onToggleMaximized:()=>o({isMaximized:!e.isMaximized}),onToggleShowTimestamps:s=>o({showTimestamps:s})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showTimestamps: false
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <LogsToolbar {...args} onToggleShowTimestamps={showTimestamps => updateArgs({
      showTimestamps
    })} />;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    logLevels: {
      error: true,
      warning: true,
      info: true,
      notice: true,
      debug: false
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <LogsToolbar {...args} onToggleLogLevel={logLevel => updateArgs({
      logLevels: {
        ...args.logLevels,
        ...logLevel
      }
    })} onToggleShowTimestamps={showTimestamps => updateArgs({
      showTimestamps
    })} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLogLevels.args,
    isMaximized: false
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <LogsToolbar {...args} onToggleLogLevel={logLevel => updateArgs({
      logLevels: {
        ...args.logLevels,
        ...logLevel
      }
    })} onToggleMaximized={() => updateArgs({
      isMaximized: !args.isMaximized
    })} onToggleShowTimestamps={showTimestamps => updateArgs({
      showTimestamps
    })} />;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithMaximize.args,
    name: 'some_filename.txt',
    url: '/some/logs/url'
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <LogsToolbar {...args} onToggleLogLevel={logLevel => updateArgs({
      logLevels: {
        ...args.logLevels,
        ...logLevel
      }
    })} onToggleMaximized={() => updateArgs({
      isMaximized: !args.isMaximized
    })} onToggleShowTimestamps={showTimestamps => updateArgs({
      showTimestamps
    })} />;
  }
}`,...i.parameters?.docs?.source}}};const P=["Default","WithLogLevels","WithMaximize","WithURL"];export{a as Default,n as WithLogLevels,t as WithMaximize,i as WithURL,P as __namedExportsOrder,I as default};
