import{L as n}from"./LogFormat-BxNv-gxd.js";import"./jsx-runtime-Bzbk6Sx8.js";import"./index-DoYbGmCh.js";import"./index-CfoIBI3E.js";import"./FormattedDate-CfsM43Pp.js";import"./index-D0k5bR2p.js";const l=(()=>{const t=[];return[30,90,40,100].forEach(s=>{let a="";for(let e=0;e<8;e+=1)a+=`\x1B[${s+e}m${e}  \x1B[0m`;t.push(a)}),t.push(""),[38,48].forEach(s=>{let a="";for(let e=0;e<256;e+=1)a+=`\x1B[${s};5;${e}m${e}  \x1B[0m`,(e+1)%6===4&&(t.push(a),a="");t.push("")}),t.map(s=>({message:s}))})(),i=Object.entries({bold:1,italic:3,underline:4,conceal:8,cross:9}).map(([a,e])=>({message:`\x1B[${e}m${a}\x1B[0m`})),T={component:n,parameters:{themes:{themeOverride:"dark"}},title:"LogFormat"},r={args:{logs:l}},o={args:{logs:i}},p={args:{logs:`
+ curl https://raw.githubusercontent.com/tektoncd/pipeline/master/tekton/koparse/koparse.py --output /usr/bin/koparse.py
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                  Dload  Upload   Total   Spent    Left  Speed
    0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0   0  3946    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     01100  3946  100  3946    0     0  13421      0 --:--:-- --:--:-- --:--:-- 13376
+ chmod +x /usr/bin/koparse.py
+ REGIONS=(us eu asia)
+ IMAGES=(gcr.io/tekton-releases/github.com/tektoncd/dashboard/cmd/dashboard)
+ BUILT_IMAGES=($(/usr/bin/koparse.py --path /workspace/output/bucket-for-dashboard/latest/tekton-dashboard-release.yaml --base gcr.io/tekton-releases/github.com/tektoncd/dashboard --images \${IMAGES[@]}))
`.split(`
`).map(t=>({message:t}))}},m={args:{fields:{level:!0,timestamp:!0},logs:[{timestamp:"2024-11-14T14:10:53.354144861Z",level:"info",message:"Cloning repo"},{timestamp:"2024-11-14T14:10:56.300268594Z",level:"debug",message:"[get_repo_params:30] | get_repo_name called for https://github.com/example-org/example-app. Repository Name identified as example-app"},{timestamp:"2024-11-14T14:10:56.307088791Z",level:"debug",message:"[get_repo_params:18] | get_repo_owner called for https://github.com/example-org/example-app. Repository Owner identified as example-org"},{timestamp:"2024-11-14T14:10:56.815017386Z",level:"debug",message:"[get_repo_params:212] | Unable to locate repository parameters for key https://github.com/example-org/example-app in the cache. Attempt to fetch repository parameters."},{timestamp:"2024-11-14T14:10:56.819937688Z",level:"debug",message:"[get_repo_params:39] | get_repo_server_name called for https://github.com/example-org/example-app. Repository Server Name identified as github.com"},{timestamp:"2024-11-14T14:10:56.869719012Z",level:null,message:"Sample with no log level"},{timestamp:"2024-11-14T14:10:56.869719012Z",level:"error",message:"Sample error"},{timestamp:"2024-11-14T14:10:56.869719012Z",level:"warning",message:"Sample warning"},{timestamp:"2024-11-14T14:10:56.869719012Z",level:"notice",message:"Sample notice"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    logs: ansiColors
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logs: ansiTextStyles
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logs: \`
+ curl https://raw.githubusercontent.com/tektoncd/pipeline/master/tekton/koparse/koparse.py --output /usr/bin/koparse.py
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                  Dload  Upload   Total   Spent    Left  Speed
    0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0   0  3946    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     01100  3946  100  3946    0     0  13421      0 --:--:-- --:--:-- --:--:-- 13376
+ chmod +x /usr/bin/koparse.py
+ REGIONS=(us eu asia)
+ IMAGES=(gcr.io/tekton-releases/github.com/tektoncd/dashboard/cmd/dashboard)
+ BUILT_IMAGES=($(/usr/bin/koparse.py --path /workspace/output/bucket-for-dashboard/latest/tekton-dashboard-release.yaml --base gcr.io/tekton-releases/github.com/tektoncd/dashboard --images \\\${IMAGES[@]}))
\`.split('\\n').map(message => ({
      message
    }))
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fields: {
      level: true,
      timestamp: true
    },
    logs: [{
      timestamp: '2024-11-14T14:10:53.354144861Z',
      level: 'info',
      message: 'Cloning repo'
    }, {
      timestamp: '2024-11-14T14:10:56.300268594Z',
      level: 'debug',
      message: '[get_repo_params:30] | get_repo_name called for https://github.com/example-org/example-app. Repository Name identified as example-app'
    }, {
      timestamp: '2024-11-14T14:10:56.307088791Z',
      level: 'debug',
      message: '[get_repo_params:18] | get_repo_owner called for https://github.com/example-org/example-app. Repository Owner identified as example-org'
    }, {
      timestamp: '2024-11-14T14:10:56.815017386Z',
      level: 'debug',
      message: '[get_repo_params:212] | Unable to locate repository parameters for key https://github.com/example-org/example-app in the cache. Attempt to fetch repository parameters.'
    }, {
      timestamp: '2024-11-14T14:10:56.819937688Z',
      level: 'debug',
      message: '[get_repo_params:39] | get_repo_server_name called for https://github.com/example-org/example-app. Repository Server Name identified as github.com'
    }, {
      timestamp: '2024-11-14T14:10:56.869719012Z',
      level: null,
      message: 'Sample with no log level'
    }, {
      timestamp: '2024-11-14T14:10:56.869719012Z',
      level: 'error',
      message: 'Sample error'
    }, {
      timestamp: '2024-11-14T14:10:56.869719012Z',
      level: 'warning',
      message: 'Sample warning'
    }, {
      timestamp: '2024-11-14T14:10:56.869719012Z',
      level: 'notice',
      message: 'Sample notice'
    }]
  }
}`,...m.parameters?.docs?.source}}};const _=["Colors","TextStyles","URLDetection","LogLevelsAndTimestamps"];export{r as Colors,m as LogLevelsAndTimestamps,o as TextStyles,p as URLDetection,_ as __namedExportsOrder,T as default};
