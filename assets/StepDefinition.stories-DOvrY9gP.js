import{S as t}from"./StepDefinition-CS89xxdV.js";import"./jsx-runtime-Bzbk6Sx8.js";import"./index-DoYbGmCh.js";import"./index-D0k5bR2p.js";import"./ViewYAML-RlzDqp-c.js";import"./index-51-aJb-v.js";import"./index-CfoIBI3E.js";import"./usePrefix-DQgSqSG9.js";const u={component:t,title:"StepDefinition"},e={},o={args:{definition:{args:["build","-f","${params.pathToDockerFile}","-t","${resources.outputs.builtImage.url}","${params.pathToContext}"],command:["docker"],image:"docker",name:"build",volumeMounts:[{mountPath:"/var/run/docker.sock",name:"docker-socket"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    definition: {
      args: ['build', '-f', '\${params.pathToDockerFile}', '-t', '\${resources.outputs.builtImage.url}', '\${params.pathToContext}'],
      command: ['docker'],
      image: 'docker',
      name: 'build',
      volumeMounts: [{
        mountPath: '/var/run/docker.sock',
        name: 'docker-socket'
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","WithContent"];export{e as Default,o as WithContent,d as __namedExportsOrder,u as default};
