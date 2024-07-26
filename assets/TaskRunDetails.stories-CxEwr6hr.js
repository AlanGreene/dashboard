import{j as d}from"./jsx-runtime-QvtbNqby.js";import{T as o}from"./TaskRunDetails-N-B2aVYy.js";import"./index-BjzEU6Zr.js";import"./index-kGlasm3i.js";import"./index-BYMUMZMs.js";import"./index-CfoIBI3E.js";import"./usePrefix-BezXHAvh.js";import"./index-9NatbUAG.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-CjLpwf8N.js";import"./deprecate-X_RArzr0.js";import"./index-DZApqWLJ.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-D9InpaXv.js";import"./Icon-DeY_WDsw.js";import"./noopFn-g4z370MD.js";import"./index-CNcVnUbU.js";import"./events-OVwOsPzJ.js";import"./Tabs-gghMQKfC.js";import"./index-Dc4QqC9m.js";import"./useControllableState-Co_owzu1.js";import"./bucket-2-DqY0dT-j.js";import"./bucket-3-DTnTkg5v.js";import"./ViewYAML-CKT6AdML.js";import"./Table-BuHWprYL.js";import"./Button-DxuibFbN.js";import"./bucket-0-BV5tnCsW.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Search-DGNYnC60.js";import"./FormContext-IWjAIOZU.js";import"./DetailsHeader-DxveQ-6v.js";import"./FormattedDuration-CpIuRcpd.js";import"./StatusIcon-B2CmmOh1.js";import"./bucket-16-DEjbltYp.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";import"./bucket-18-CNixtB1a.js";import"./bucket-9-DuBbq6Ld.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,c="k",u="v",i=[{name:c,value:u}],m=[{name:"message",value:"hello"}],ee={component:o,title:"TaskRunDetails"},s={args:{taskRun:{metadata:{name:"my-task",namespace:"my-namespace"},spec:{params:i,taskSpec:{params:[{name:i[0].name,description:"A useful description of the param…"}],results:[{name:m[0].name,description:"A useful description of the result…"}]}},status:{completionTime:"2021-03-03T15:25:34Z",podName:"my-task-h7d6j-pod-pdtb7",startTime:"2021-03-03T15:25:27Z",results:m}}},render:e=>{const[,a]=p();return d.jsx(o,{...e,onViewChange:t=>a({view:t})})}},n={args:{taskRun:{metadata:{name:"my-task",namespace:"my-namespace"},spec:{params:i},status:{completionTime:"2021-03-03T15:25:34Z",podName:"my-task-h7d6j-pod-pdtb7",conditions:[{reason:"Succeeded",status:"True",type:"Succeeded"}],steps:[{terminated:{exitCode:1,reason:"Completed"}}],startTime:"2021-03-03T15:25:27Z",results:m}}},render:e=>{const[,a]=p();return d.jsx(o,{...e,onViewChange:t=>a({view:t})})}},r={args:{pod:{events:[{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4",namespace:"test",uid:"0f4218f0-270a-408d-b5bd-56fc35dda853",resourceVersion:"2047658",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047624"},reason:"Scheduled",message:"Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane","…":""},{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7",namespace:"test",uid:"d1c8e367-66d1-4cd7-a04b-e49bdf9f322e",resourceVersion:"2047664",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047657",fieldPath:"spec.initContainers{prepare}"},reason:"Pulled",message:'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',"…":""}],resource:{kind:"Pod",apiVersion:"v1",metadata:{name:"some-pod-name",namespace:"test",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",resourceVersion:"2047732",creationTimestamp:"2022-10-27T13:27:49Z"},spec:{"…":""}}},taskRun:{metadata:{name:"my-task"},spec:{},status:{completionTime:"2021-03-03T15:25:34Z",podName:"my-task-h7d6j-pod-pdtb7",startTime:"2021-03-03T15:25:27Z"}}},render:e=>{const[,a]=p();return d.jsx(o,{...e,onViewChange:t=>a({view:t})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    taskRun: {
      metadata: {
        name: 'my-task',
        namespace: 'my-namespace'
      },
      spec: {
        params,
        taskSpec: {
          params: [{
            name: params[0].name,
            description: 'A useful description of the param…'
          }],
          results: [{
            name: results[0].name,
            description: 'A useful description of the result…'
          }]
        }
      },
      status: {
        completionTime: '2021-03-03T15:25:34Z',
        podName: 'my-task-h7d6j-pod-pdtb7',
        startTime: '2021-03-03T15:25:27Z',
        results
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <TaskRunDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    taskRun: {
      metadata: {
        name: 'my-task',
        namespace: 'my-namespace'
      },
      spec: {
        params
      },
      status: {
        completionTime: '2021-03-03T15:25:34Z',
        podName: 'my-task-h7d6j-pod-pdtb7',
        conditions: [{
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded'
        }],
        steps: [{
          terminated: {
            exitCode: 1,
            reason: 'Completed'
          }
        }],
        startTime: '2021-03-03T15:25:27Z',
        results
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <TaskRunDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    pod: {
      events: [{
        metadata: {
          name: 'guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4',
          namespace: 'test',
          uid: '0f4218f0-270a-408d-b5bd-56fc35dda853',
          resourceVersion: '2047658',
          creationTimestamp: '2022-10-27T13:27:54Z'
        },
        involvedObject: {
          kind: 'Pod',
          namespace: 'test',
          name: 'guarded-pr-vkm6w-check-file-pod',
          uid: '939a4823-2203-4b5a-8c00-6a2c9f15549d',
          apiVersion: 'v1',
          resourceVersion: '2047624'
        },
        reason: 'Scheduled',
        message: 'Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane',
        '…': ''
      }, {
        metadata: {
          name: 'guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7',
          namespace: 'test',
          uid: 'd1c8e367-66d1-4cd7-a04b-e49bdf9f322e',
          resourceVersion: '2047664',
          creationTimestamp: '2022-10-27T13:27:54Z'
        },
        involvedObject: {
          kind: 'Pod',
          namespace: 'test',
          name: 'guarded-pr-vkm6w-check-file-pod',
          uid: '939a4823-2203-4b5a-8c00-6a2c9f15549d',
          apiVersion: 'v1',
          resourceVersion: '2047657',
          fieldPath: 'spec.initContainers{prepare}'
        },
        reason: 'Pulled',
        message: 'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',
        '…': ''
      }],
      resource: {
        kind: 'Pod',
        apiVersion: 'v1',
        metadata: {
          name: 'some-pod-name',
          namespace: 'test',
          uid: '939a4823-2203-4b5a-8c00-6a2c9f15549d',
          resourceVersion: '2047732',
          creationTimestamp: '2022-10-27T13:27:49Z'
        },
        spec: {
          '…': ''
        }
      }
    },
    taskRun: {
      metadata: {
        name: 'my-task'
      },
      spec: {},
      status: {
        completionTime: '2021-03-03T15:25:34Z',
        podName: 'my-task-h7d6j-pod-pdtb7',
        startTime: '2021-03-03T15:25:27Z'
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <TaskRunDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...r.parameters?.docs?.source}}};const ae=["Default","WithWarning","Pod"];export{s as Default,r as Pod,n as WithWarning,ae as __namedExportsOrder,ee as default};
