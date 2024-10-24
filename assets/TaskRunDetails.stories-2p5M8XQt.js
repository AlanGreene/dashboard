import{j as p}from"./jsx-runtime-QvtbNqby.js";import{T as i}from"./TaskRunDetails-Cb0YZW1H.js";import"./index-BjzEU6Zr.js";import"./index-kGlasm3i.js";import"./index-yfVukVkJ.js";import"./index-CfoIBI3E.js";import"./usePrefix-CXWdRn9x.js";import"./index-lRp1do-S.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-CjLpwf8N.js";import"./deprecate-GNGtdTso.js";import"./index-55dkfs-I.js";import"./index-Da0at1PC.js";import"./Tooltip-BJBVfZ_G.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-CMgbqDR8.js";import"./Icon-CpyVU44g.js";import"./noopFn-g4z370MD.js";import"./index-DCnOq7yB.js";import"./events-OVwOsPzJ.js";import"./Tabs-CLCSIGLB.js";import"./index-Dc4QqC9m.js";import"./useControllableState-Co_owzu1.js";import"./bucket-2-C9DXCKPV.js";import"./bucket-3-Dq7FRXBG.js";import"./ViewYAML-ReMqin4P.js";import"./Table-D1X7MWr6.js";import"./Button-xjCpe_BM.js";import"./bucket-0-C5s-C6Km.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Search-7e9e9RA9.js";import"./FormContext-IWjAIOZU.js";import"./DetailsHeader-e2YhChju.js";import"./StatusIcon-CbB-w7ji.js";import"./bucket-16-CiwkPD5r.js";import"./Spinner-Dbwi84XW.js";import"./bucket-13-CBnqkqgu.js";import"./bucket-17-BNnKjYXl.js";import"./bucket-18-ByJs4WER.js";import"./constants-PT-Qtcqm.js";import"./FormattedDuration-7RrZaDA3.js";import"./bucket-9-DvpuiSZR.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,u="k",l="v",m=[{name:u,value:l}],d=[{name:"message",value:"hello"}],te={component:i,title:"TaskRunDetails"},n={args:{taskRun:{metadata:{name:"my-task",namespace:"my-namespace"},spec:{params:m,taskSpec:{params:[{name:m[0].name,description:"A useful description of the param…"}],results:[{name:d[0].name,description:"A useful description of the result…"}]}},status:{completionTime:"2021-03-03T15:25:34Z",podName:"my-task-h7d6j-pod-pdtb7",startTime:"2021-03-03T15:25:27Z",results:d}}},render:e=>{const[,a]=c();return p.jsx(i,{...e,onViewChange:s=>a({view:s})})}},r={args:{taskRun:{metadata:{name:"my-task",namespace:"my-namespace"},spec:{params:m},status:{completionTime:"2021-03-03T15:25:34Z",podName:"my-task-h7d6j-pod-pdtb7",conditions:[{reason:"Succeeded",status:"True",type:"Succeeded"}],steps:[{terminated:{exitCode:1,reason:"Completed"}}],startTime:"2021-03-03T15:25:27Z",results:d}}},render:e=>{const[,a]=c();return p.jsx(i,{...e,onViewChange:s=>a({view:s})})}},t={args:{pod:{events:[{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00ca1846de4",namespace:"test",uid:"0f4218f0-270a-408d-b5bd-56fc35dda853",resourceVersion:"2047658",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047624"},reason:"Scheduled",message:"Successfully assigned test/guarded-pr-vkm6w-check-file-pod to tekton-dashboard-control-plane","…":""},{metadata:{name:"guarded-pr-vkm6w-check-file-pod.1721f00cb6ef6ea7",namespace:"test",uid:"d1c8e367-66d1-4cd7-a04b-e49bdf9f322e",resourceVersion:"2047664",creationTimestamp:"2022-10-27T13:27:54Z"},involvedObject:{kind:"Pod",namespace:"test",name:"guarded-pr-vkm6w-check-file-pod",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",apiVersion:"v1",resourceVersion:"2047657",fieldPath:"spec.initContainers{prepare}"},reason:"Pulled",message:'Container image "gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint:v0.40.0@sha256:ee6c81fa567c97b4dba0fb315fa038c671a0250ac3a5d43e6ccf8a91e86e6352" already present on machine',"…":""}],resource:{kind:"Pod",apiVersion:"v1",metadata:{name:"some-pod-name",namespace:"test",uid:"939a4823-2203-4b5a-8c00-6a2c9f15549d",resourceVersion:"2047732",creationTimestamp:"2022-10-27T13:27:49Z"},spec:{"…":""}}},taskRun:{metadata:{name:"my-task"},spec:{},status:{completionTime:"2021-03-03T15:25:34Z",podName:"my-task-h7d6j-pod-pdtb7",startTime:"2021-03-03T15:25:27Z"}}},render:e=>{const[,a]=c();return p.jsx(i,{...e,onViewChange:s=>a({view:s})})}},o={args:{...t.args,skippedTask:{reason:"When Expressions evaluated to false",whenExpressions:[{cel:"'yes'=='missing'"}]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Pod.args,
    skippedTask: {
      reason: 'When Expressions evaluated to false',
      whenExpressions: [{
        cel: \`'yes'=='missing'\`
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};const ne=["Default","WithWarning","Pod","Skipped"];export{n as Default,t as Pod,o as Skipped,r as WithWarning,ne as __namedExportsOrder,te as default};
