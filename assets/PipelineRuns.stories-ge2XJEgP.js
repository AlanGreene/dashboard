import{j as s}from"./jsx-runtime-QvtbNqby.js";import{a as Ee}from"./chunk-454WOBUV-DFclqPoQ.js";import"./usePrefix-BezXHAvh.js";import{D as Se}from"./Dropdown-C9w40Gyo.js";import{R as h,r as v}from"./index-BjzEU6Zr.js";import{L as ee,u as te,c as Ne,R as De,a as we,b as G,d as Oe,e as Le,f as Ce}from"./Link-D5xEs-Z1.js";import{u as je}from"./index-BYMUMZMs.js";import{g as P}from"./index-CfoIBI3E.js";import{C as Ie}from"./bucket-1-Bil9OwUx.js";import{F as _e}from"./FormattedDate-BPTTyExm.js";import{A as $e}from"./Actions-Ci3ZysiD.js";import{T as Ve}from"./Table-BuHWprYL.js";import{S as oe}from"./StatusIcon-B2CmmOh1.js";import{b as Be}from"./bucket-9-DuBbq6Ld.js";import{F as Me}from"./FormattedDuration-CpIuRcpd.js";import{a as Ze,T as Fe}from"./bucket-16-DEjbltYp.js";import{P as Ue}from"./bucket-12-D9InpaXv.js";import"./v4-D8aEg3BZ.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-eKhO17z2.js";import"./extends-CCbyfPlC.js";import"./index-kGlasm3i.js";import"./index-CjLpwf8N.js";import"./deprecate-X_RArzr0.js";import"./FormContext-IWjAIOZU.js";import"./bucket-2-DqY0dT-j.js";import"./Icon-DeY_WDsw.js";import"./bucket-3-DTnTkg5v.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-CNixtB1a.js";import"./constants-BuFAfZC9.js";import"./Link-DRIuGUpd.js";import"./Button-DxuibFbN.js";import"./index-ED9P7qmL.js";import"./Tooltip-CPLX6X0E.js";import"./events-OVwOsPzJ.js";import"./useControllableState-Co_owzu1.js";import"./index-9NatbUAG.js";import"./index-DZApqWLJ.js";import"./noopFn-g4z370MD.js";import"./Modal-_W9C5eOo.js";import"./bucket-6-CpbjS_H5.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./index-Dc4QqC9m.js";import"./bucket-0-BV5tnCsW.js";import"./Search-DGNYnC60.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";function ne(e){const{status:t}=P(e);return t==="False"?s.jsxs("span",{className:"tkn--table--sub",title:P(e).message,children:[P(e).message," "]}):s.jsx("span",{className:"tkn--table--sub",children:" "})}const le=({batchActionButtons:e=[],columns:t=["run","status","pipeline","time"],customColumns:n={},filters:a,getPipelineRunCreatedTime:i=c=>c.metadata.creationTimestamp,getPipelineRunDisplayName:o=({pipelineRunMetadata:c})=>c.name,getPipelineRunDisplayNameTooltip:r=o,getPipelineRunDuration:f=c=>{const y=i(c),{lastTransitionTime:T,status:R}=P(c);let V=Date.now();return(R==="False"||R==="True")&&(V=new Date(T).getTime()),V-new Date(y).getTime()},getPipelineRunIcon:g=()=>null,getPipelineRunId:p=c=>c.metadata.uid,getPipelineRunsByPipelineURL:l=te.pipelineRuns.byPipeline,getPipelineRunStatus:d=(c,y)=>{const{reason:T}=P(c);return T||y.formatMessage({id:"dashboard.taskRun.status.pending",defaultMessage:"Pending"})},getPipelineRunStatusDetail:A=ne,getPipelineRunStatusIcon:S=c=>{const{reason:y,status:T}=P(c);return s.jsx(oe,{DefaultIcon:R=>s.jsx(Ue,{size:24,...R}),reason:y,status:T})},getPipelineRunStatusTooltip:w=(c,y)=>{const{message:T}=P(c),R=d(c,y);return T?`${R}: ${T}`:R},getPipelineRunTriggerInfo:$=c=>{const{labels:y={}}=c.metadata,T=y["triggers.tekton.dev/eventlistener"],R=y["triggers.tekton.dev/trigger"];return!T&&!R?null:s.jsxs("span",{title:`EventListener: ${T||"-"}
Trigger: ${R||"-"}`,children:[s.jsx(Be,{}),T,T&&R?" | ":"",R]})},getPipelineRunURL:F=te.pipelineRuns.byName,getRunActions:U=()=>[],loading:q,pipelineRuns:H,selectedNamespace:O,skeletonRowCount:K,toolbarButtons:Re})=>{const c=je();let y=!1;const T={pipeline:c.formatMessage({id:"dashboard.tableHeader.pipeline",defaultMessage:"Pipeline"}),run:"Run",status:c.formatMessage({id:"dashboard.tableHeader.status",defaultMessage:"Status"}),time:""},R=t.map(u=>{const N=n[u]&&n[u].header||T[u];return{key:u,header:N}});function V(u){return Object.keys(n).reduce((N,x)=>(n[x].getValue&&(N[x]=n[x].getValue({pipelineRun:u})),N),{})}const be=H.map(u=>{const{annotations:N,namespace:x}=u.metadata,ye=i(u),W=o({pipelineRunMetadata:u.metadata}),ve=r({pipelineRunMetadata:u.metadata}),E=u.spec.pipelineRef&&u.spec.pipelineRef.name,{reason:Pe,status:xe}=P(u),ke=S(u),Q=F({name:W,namespace:x,annotations:N}),X=E&&l({namespace:x,pipelineName:E});let L=f(u);L==null?L="-":L=s.jsx(Me,{milliseconds:L});const z=U(u);return z.length&&(y=!0),{id:p(u),run:s.jsxs("div",{children:[s.jsxs("span",{children:[Q?s.jsx(ee,{to:Q,title:ve,children:W}):W,g({pipelineRunMetadata:u.metadata})]}),s.jsxs("span",{className:"tkn--table--sub",children:[$(u)," "]})]}),pipeline:s.jsxs("div",{children:[s.jsx("span",{children:E&&(X?s.jsx(ee,{to:X,title:E,children:E}):s.jsx("span",{title:`Pipeline: ${E||"-"}`,children:E}))||"-"}),s.jsxs("span",{className:"tkn--table--sub",title:`Namespace: ${x}`,children:[x," "]})]}),status:s.jsxs("div",{children:[s.jsx("div",{className:"tkn--definition",children:s.jsxs("div",{className:"tkn--status","data-status":xe,"data-reason":Pe,title:w(u,c),children:[ke,d(u,c)]})}),A(u)||ne(u)]}),time:s.jsxs("div",{children:[s.jsxs("span",{children:[s.jsx(Ie,{}),s.jsx(_e,{date:ye,formatTooltip:Ae=>c.formatMessage({id:"dashboard.resource.createdTime",defaultMessage:"Created: {created}"},{created:Ae})})]}),s.jsxs("div",{className:"tkn--table--sub",children:[s.jsx(Ze,{}),L]})]}),actions:z.length&&s.jsx($e,{items:z,resource:u}),...V(u)}});return y&&R.push({key:"actions",header:""}),s.jsx(Ve,{batchActionButtons:e,filters:a,hasDetails:!0,headers:R,rows:be,loading:q,selectedNamespace:O,emptyTextAllNamespaces:c.formatMessage({id:"dashboard.emptyState.allNamespaces",defaultMessage:"No matching {kind} found"},{kind:"PipelineRuns"}),emptyTextSelectedNamespace:c.formatMessage({id:"dashboard.emptyState.selectedNamespace",defaultMessage:"No matching {kind} found in namespace {selectedNamespace}"},{kind:"PipelineRuns",selectedNamespace:O}),skeletonRowCount:K,toolbarButtons:Re})},D=le;le.__docgenInfo={description:"",methods:[],displayName:"PipelineRuns",props:{batchActionButtons:{defaultValue:{value:"[]",computed:!1},required:!1},columns:{defaultValue:{value:"['run', 'status', 'pipeline', 'time']",computed:!1},required:!1},customColumns:{defaultValue:{value:"{}",computed:!1},required:!1},getPipelineRunCreatedTime:{defaultValue:{value:`pipelineRun =>
pipelineRun.metadata.creationTimestamp`,computed:!1},required:!1},getPipelineRunDisplayName:{defaultValue:{value:`({ pipelineRunMetadata }) =>
pipelineRunMetadata.name`,computed:!1},required:!1},getPipelineRunDisplayNameTooltip:{defaultValue:{value:`getPipelineRunDisplayName = ({ pipelineRunMetadata }) =>
pipelineRunMetadata.name`,computed:!1},required:!1},getPipelineRunDuration:{defaultValue:{value:`pipelineRun => {
  const creationTimestamp = getPipelineRunCreatedTime(pipelineRun);
  const { lastTransitionTime, status } = getStatus(pipelineRun);

  let endTime = Date.now();
  if (status === 'False' || status === 'True') {
    endTime = new Date(lastTransitionTime).getTime();
  }

  return endTime - new Date(creationTimestamp).getTime();
}`,computed:!1},required:!1},getPipelineRunIcon:{defaultValue:{value:"() => null",computed:!1},required:!1},getPipelineRunId:{defaultValue:{value:"pipelineRun => pipelineRun.metadata.uid",computed:!1},required:!1},getPipelineRunsByPipelineURL:{defaultValue:{value:"urls.pipelineRuns.byPipeline",computed:!0},required:!1},getPipelineRunStatus:{defaultValue:{value:`(pipelineRun, intl) => {
  const { reason } = getStatus(pipelineRun);
  return (
    reason ||
    intl.formatMessage({
      id: 'dashboard.taskRun.status.pending',
      defaultMessage: 'Pending'
    })
  );
}`,computed:!1},required:!1},getPipelineRunStatusDetail:{defaultValue:{value:`function getDefaultPipelineRunStatusDetail(pipelineRun) {
  const { status } = getStatus(pipelineRun);
  return status === 'False' ? (
    <span className="tkn--table--sub" title={getStatus(pipelineRun).message}>
      {getStatus(pipelineRun).message}&nbsp;
    </span>
  ) : (
    <span className="tkn--table--sub">&nbsp;</span>
  );
}`,computed:!1},required:!1},getPipelineRunStatusIcon:{defaultValue:{value:`pipelineRun => {
  const { reason, status } = getStatus(pipelineRun);

  return (
    <StatusIcon
      DefaultIcon={props => <DefaultIcon size={24} {...props} />}
      reason={reason}
      status={status}
    />
  );
}`,computed:!1},required:!1},getPipelineRunStatusTooltip:{defaultValue:{value:`(pipelineRun, intl) => {
  const { message } = getStatus(pipelineRun);
  const reason = getPipelineRunStatus(pipelineRun, intl);
  if (!message) {
    return reason;
  }
  return \`\${reason}: \${message}\`;
}`,computed:!1},required:!1},getPipelineRunTriggerInfo:{defaultValue:{value:`pipelineRun => {
  const { labels = {} } = pipelineRun.metadata;
  const eventListener = labels['triggers.tekton.dev/eventlistener'];
  const trigger = labels['triggers.tekton.dev/trigger'];
  if (!eventListener && !trigger) {
    return null;
  }

  return (
    <span
      title={\`EventListener: \${eventListener || '-'}\\nTrigger: \${
        trigger || '-'
      }\`}
    >
      <TriggersIcon />
      {eventListener}
      {eventListener && trigger ? ' | ' : ''}
      {trigger}
    </span>
  );
}`,computed:!1},required:!1},getPipelineRunURL:{defaultValue:{value:"urls.pipelineRuns.byName",computed:!0},required:!1},getRunActions:{defaultValue:{value:"() => []",computed:!1},required:!1}}};const{makeDecorator:qe,addons:J}=__STORYBOOK_MODULE_PREVIEW_API__;var k="storybook/react-router-v6",He="reactRouter",m={CLEAR:`${k}/clear`,NAVIGATION:`${k}/navigation`,STORY_LOADED:`${k}/story-loaded`,ROUTE_MATCHES:`${k}/route-matches`,ACTION_INVOKED:`${k}/action_invoked`,ACTION_SETTLED:`${k}/action_settled`,LOADER_INVOKED:`${k}/loader_invoked`,LOADER_SETTLED:`${k}/loader_settled`},ue=h.createContext([]),ce=h.createContext(void 0);function Ke(){let[e,t]=v.useState([]),n=we;return n.Provider._context=new Proxy(n.Provider._context??{},{set(a,i,o){return i==="_currentValue"&&o!==void 0&&t(r=>o.matches.length>r.length?o.matches:r),Reflect.set(a,i,o)}}),e}function We(e){let t={};return e.forEach((n,a)=>{if(n instanceof File){t[a]={filename:n.name,filesize:n.size,filetype:n.type};return}t[a]=n}),t}async function ae(e){let t=e.clone(),n=t.headers.get("content-type")||"",a;switch(!0){case n.startsWith("text"):a=await t.text();break;case n.startsWith("application/json"):a=await t.json();break;case n.startsWith("multipart/form-data"):case n.startsWith("application/x-www-form-urlencoded"):{a=We(await t.formData());break}}return a}var pe=()=>{let e=v.useRef(0);return v.useCallback(async(t,n)=>{e.current++;let a=`${t}_${e.current}`;switch(t){case m.ACTION_INVOKED:{let{request:i,params:o,context:r}=n,f={url:i.url,method:i.method,body:await ae(i)};return{key:a,type:t,data:{params:o,request:f,context:r}}}case m.ACTION_SETTLED:return{key:a,type:t,data:n};case m.LOADER_INVOKED:{let{request:i,params:o,context:r}=n,f={url:i.url,method:i.method,body:await ae(i)};return{key:a,type:t,data:{params:o,request:f,context:r}}}case m.LOADER_SETTLED:return{key:a,type:t,data:n}}},[])};function ze(){let e=J.getChannel(),t=pe();return v.useCallback(n=>async function(a){if(n===void 0)return;e.emit(m.ACTION_INVOKED,await t(m.ACTION_INVOKED,a));let i=await n(a);return e.emit(m.ACTION_SETTLED,await t(m.ACTION_SETTLED,i)),i},[e,t])}function Ye(){let e=J.getChannel(),t=pe();return v.useCallback(n=>async function(a){if(n===void 0)return;e.emit(m.LOADER_INVOKED,await t(m.LOADER_INVOKED,a));let i=await n(a);return e.emit(m.LOADER_SETTLED,await t(m.LOADER_SETTLED,i)),i},[e,t])}function Ge(){let e=ze(),t=Ye(),n=v.useCallback(a=>a.map(i=>{let{action:o,loader:r,children:f,lazy:g}=i,p={...i};return g&&(p.lazy=async function(){let l=await g(),d={...l};return l.action&&(d.action=e(l.action)),l.loader&&(d.loader=t(l.loader)),d}),o&&(p.action=e(o)),r&&(p.loader=t(r)),f&&(p.children=n(f)),p}),[e,t]);return n}var de=()=>{let e=h.useContext(ce);if(e===void 0)throw new Error("useStory should be used inside <StoryContext>");return e};function me(e,t,n=0){return e.length===1&&(e[0].children===void 0||e[0].children.length===0)?[{...e[0],element:t}]:e.findIndex(a=>a.useStoryElement)!==-1?e.map(a=>a.useStoryElement?{...a,element:t}:a):e.map(a=>a.children?{...a,children:me(a.children,t)}:a)}var ie;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ie||(ie={}));function Je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}var se;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(se||(se={}));function re(e,t){t===void 0&&(t={});let n=e;n.endsWith("*")&&n!=="*"&&!n.endsWith("/*")&&(Qe(!1,'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".')),n=n.replace(/\*$/,"/*"));let a=n.startsWith("/")?"/":"",i=r=>r==null?"":typeof r=="string"?r:String(r),o=n.split(/\/+/).map((r,f,g)=>{if(f===g.length-1&&r==="*")return i(t["*"]);let p=r.match(/^:([\w-]+)(\??)$/);if(p){let[,l,d]=p,A=t[l];return Je(d==="?"||A!=null,'Missing ":'+l+'" param'),i(A)}return r.replace(/\?$/g,"")}).filter(r=>!!r);return a+o.join("/")}var fe=["post","put","patch","delete"];new Set(fe);var Xe=["get",...fe];new Set(Xe);function et({navigationHistory:e,location:t,routes:n}){if(e!==void 0){let l=[],d,A=Object.values(e);for(let S=0;S<A.length;S++){let{path:w,pathParams:$,searchParams:F,hash:U,state:q,isInitialLocation:H}=A[S];H&&(d=S);let O=Y(n),K=(typeof w=="function"?w(O,$??{}):w)??O;l.push({pathname:re(K??"/",$),search:new URLSearchParams(F).toString(),hash:U,state:q})}return d??=l.length-1,{initialEntries:l,initialIndex:d}}let{path:a,pathParams:i,searchParams:o,hash:r,state:f}=t??{},g=Y(n),p=(typeof a=="function"?a(g,i??{}):a)??g;return{initialEntries:[{pathname:re(p,i),search:new URLSearchParams(o).toString(),hash:r,state:f}],initialIndex:0}}function Y(e=[],t="/"){if(e.length!==1)return t;let n=e[0],a=tt(t,n.path);return n.children===void 0||n.children.length===0?a:Y(n.children,a)}function tt(e,t=""){let n=["","/"],a=e.split("/").filter(o=>!n.includes(o)),i=t.split("/").filter(o=>!n.includes(o));return"/"+[...a,...i].join("/")}function b(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function nt(e){return arguments.length===0?[]:Array.isArray(e)?e:[e]}function at(e){return e===void 0?[{path:"/"}]:typeof e=="string"?[{path:e}]:(e=nt(e),e.length===1&&(e[0].path??="/"),e)}var ge=()=>h.useContext(ue);function it(e){let t={};return e.forEach((n,a)=>{let i=t[a];if(typeof i=="string"){t[a]=[i,n];return}if(Array.isArray(i)){t[a]=[...i,n];return}t[a]=n}),t}var st=()=>{let e=G(),t=e.pathname;return e.search.length>0&&(t+=`?${e.search}`),e.hash.length>0&&(t+=`#${e.hash}`),t},rt=()=>{let e=v.useRef(0),t=G(),n=Oe(),[a]=Le(),i=Ce(),o=ge(),r=it(a),f=st(),g=o.map(l=>{let d={path:l.route.path};return Object.keys(l.params).length>0&&(d.params=l.params),d}),p={url:f,path:t.pathname,routeParams:n,searchParams:r,hash:t.hash,routeState:t.state,routeMatches:g};return l=>{e.current++;let d=`${l}_${e.current}`;switch(l){case m.STORY_LOADED:return{key:d,type:l,data:p};case m.NAVIGATION:return{key:d,type:l,data:{...p,navigationType:i}};case m.ROUTE_MATCHES:return{key:d,type:l,data:{matches:g}}}}};function he(){let{renderStory:e,storyContext:t}=de(),n=J.getChannel(),a=G(),i=ge(),o=rt(),r=v.useRef(),f=v.useRef(),g=v.useRef(),p=r.current!==void 0,l=p&&a.key!==r.current;return l&&f.current!==a.key&&(n.emit(m.NAVIGATION,o(m.NAVIGATION)),f.current=a.key),l&&i.length>0&&i!==g.current&&n.emit(m.ROUTE_MATCHES,o(m.ROUTE_MATCHES)),!p&&i.length>0&&(n.emit(m.STORY_LOADED,o(m.STORY_LOADED)),r.current=a.key,g.current=i),g.current=i,h.createElement(h.Fragment,null,e(t))}he.displayName="RouterLogger";function ot(){let{addonParameters:e={}}=de(),{hydrationData:t,routing:n,navigationHistory:a,location:i}=e,o=Ge(),r=v.useMemo(()=>{let f=at(n),g=o(f),p=me(g,h.createElement(he,null)),{initialEntries:l,initialIndex:d}=et({navigationHistory:a,location:i,routes:p});return Ne(p,{initialEntries:l,initialIndex:d,hydrationData:t})},[o,t,i,a,n]);return h.createElement(De,{router:r,fallbackElement:h.createElement(lt,null)})}function lt(){return h.createElement("p",null,"Performing initial data load")}var ut=({renderStory:e,storyContext:t,addonParameters:n})=>{let a=Ke();return h.createElement(ce.Provider,{value:{renderStory:e,storyContext:t,addonParameters:n}},h.createElement(ue.Provider,{value:a},h.createElement(ot,null)))};function ct(e){if(h.isValidElement(e))return!0;switch(!0){case h.isValidElement(e):case typeof e=="string":case typeof e=="number":case typeof e=="boolean":case e===null:case e===void 0:case(e instanceof Object&&b(e,Symbol.iterator)):return!0}return!1}function pt(e){return ct(e)?{element:e}:e}function dt(e={}){let t=["location","navigationHistory","routing"];if(Object.keys(e??{}).some(a=>t.includes(a)))return e;let n={routing:{},location:{},hydrationData:void 0};if(b(e,"routePath")&&(n.location.path=e.routePath,n.routing.path=e.routePath),b(e,"routeParams")&&(n.location.pathParams=e.routeParams),b(e,"routeState")&&(n.location.state=e.routeState),b(e,"routeHandle")&&(n.routing.handle=e.routeHandle),b(e,"searchParams")&&(n.location.searchParams=e.searchParams),b(e,"browserPath")&&(n.location.path=e.browserPath),b(e,"loader")&&(n.routing.loader=e.loader),b(e,"action")&&(n.routing.action=e.action),b(e,"errorElement")&&(n.routing.errorElement=e.errorElement),b(e,"hydrationData")&&(n.hydrationData=e.hydrationData),b(e,"shouldRevalidate")&&(n.routing.shouldRevalidate=e.shouldRevalidate),b(e,"routeId")&&(n.routing.id=e.routeId),b(e,"outlet")){let a=pt(e.outlet);a.path??="",n.routing.children=[a]}return n.routing.useStoryElement=!0,n}var mt=qe({name:"withRouter",parameterName:He,wrapper:(e,t,{parameters:n})=>{let a=dt(n);return h.createElement(ut,{renderStory:e,storyContext:t,addonParameters:a})}});function Te(e){return e?s.jsx(Se,{id:"status-filter",initialSelectedItem:"All",items:["All","Succeeded","Failed"],label:"Status",titleText:"Status:",type:"inline"}):null}const cn={component:D,decorators:[mt()],title:"PipelineRuns"},C=()=>s.jsx(D,{getPipelineRunURL:({namespace:e,pipelineRunName:t})=>e?`to-pipelineRun-${e}/${t}`:null,getPipelineRunsByPipelineURL:({namespace:e,pipelineName:t})=>e?`to-pipeline-${e}/${t}`:`to-pipeline/${t}`,createPipelineRunTimestamp:e=>P(e).lastTransitionTime||e.metadata.creationTimestamp,selectedNamespace:"default",getRunActions:()=>[{actionText:"Cancel",action:e=>e,disable:e=>e.status&&e.status.conditions[0].reason!=="Running",modalProperties:{heading:"cancel",primaryButtonText:"ok",secondaryButtonText:"no",body:e=>`cancel pipelineRun ${e.metadata.name}`}}],pipelineRuns:[{metadata:{name:"pipeline-run-20190816124708",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e",creationTimestamp:"2019-08-16T12:48:00Z"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}]}},{metadata:{name:"pipeline-run-20190816170431",namespace:"21cf1eac-7392-4e67-a4d0-f654506fe04d",uid:"a7812005-f766-4877-abd4-b3d418b04f66",creationTimestamp:"2019-08-16T17:09:12Z",labels:{"triggers.tekton.dev/eventlistener":"tekton-nightly","triggers.tekton.dev/trigger":"dashboard-nightly-release"}},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T17:10:49Z",message:"Not all Tasks have completed executing",reason:"Running",status:"Unknown",type:"Succeeded"}]}},{apiVersion:"tekton.dev/v1alpha1",kind:"PipelineRun",metadata:{name:"output-pipeline-run",creationTimestamp:"2019-10-09T17:10:49Z",uid:"01cb5ea7-0158-4031-bc70-6bf017533a94"},spec:{pipelineRef:{name:"output-pipeline"},serviceAccountName:"default"}}],cancelPipelineRun:()=>{}}),j=()=>s.jsx(D,{getPipelineRunURL:({namespace:e,pipelineRunName:t})=>e?`to-pipelineRun-${e}/${t}`:null,getPipelineRunsByPipelineURL:()=>null,createPipelineRunTimestamp:e=>P(e).lastTransitionTime||e.metadata.creationTimestamp,selectedNamespace:"default",getRunActions:()=>[{actionText:"Cancel",action:e=>e,disable:e=>e.status&&e.status.conditions[0].reason!=="Running",modalProperties:{heading:"cancel",primaryButtonText:"ok",secondaryButtonText:"no",body:e=>`cancel pipelineRun ${e.metadata.name}`}}],pipelineRuns:[{metadata:{name:"pipeline-run-20190816124708",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",uid:"7c266264-4d4d-45e3-ace0-041be8f7d06e",creationTimestamp:"2019-08-16T12:48:00Z"},spec:{pipelineRef:{name:"pipeline"}},status:{conditions:[{lastTransitionTime:"2019-08-16T12:49:28Z",message:"All Tasks have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}]}},{apiVersion:"tekton.dev/v1alpha1",kind:"PipelineRun",metadata:{name:"output-pipeline-run",namespace:"61fe5520-a56e-4c1d-b7c3-d933b0f3c6a8",creationTimestamp:"2019-10-09T17:10:49Z",uid:"905c1ab0-203d-49ce-ad8d-4553e5d06bf0"},spec:{serviceAccountName:"default"}}],cancelPipelineRun:()=>{}}),I=()=>s.jsx(D,{batchActionButtons:[{onClick:Ee("handleDelete"),text:"Delete",icon:Fe}],selectedNamespace:"default",getRunActions:()=>[{actionText:"An Action",action:e=>e,modalProperties:{heading:"An Action",primaryButtonText:"OK",secondaryButtonText:"Cancel",body:()=>"Do something interesting"}}],pipelineRuns:[{metadata:{name:"pipeline-run-20190816124708",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",creationTimestamp:"2019-08-16T12:48:00Z",uid:"93531810-1b80-4246-a2bd-ee146c448d13"},spec:{pipelineRef:{name:"pipeline"}}},{apiVersion:"tekton.dev/v1alpha1",kind:"PipelineRun",metadata:{name:"output-pipeline-run",namespace:"default",creationTimestamp:"2019-10-09T17:10:49Z",uid:"77e0f4a3-40e5-46f1-84cc-ab7aa93c382c"},spec:{serviceAccountName:"default"}}]}),B={render:({showFilters:e})=>s.jsx(D,{columns:["run","status","time"],filters:Te(e),getRunActions:()=>[{actionText:"An Action",action:t=>t,modalProperties:{heading:"An Action",primaryButtonText:"OK",secondaryButtonText:"Cancel",body:()=>"Do something interesting"}}],pipelineRuns:[{metadata:{name:"pipeline-run-20190816124708",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",creationTimestamp:"2019-08-16T12:48:00Z",uid:"c5ef252a-4635-46b5-ad7b-32c9e04cb6d2"},spec:{pipelineRef:{name:"pipeline"}}}]}),args:{showFilters:!1}},M={render:({showFilters:e})=>s.jsx(D,{columns:["status","run","worker","time"],customColumns:{status:{getValue(){return s.jsxs("div",{children:[s.jsx("div",{className:"tkn--definition",children:s.jsxs("div",{className:"tkn--status",children:[s.jsx(oe,{})," Pending"]})}),s.jsx("span",{children:" "})]})}},worker:{header:"Worker",getValue({pipelineRun:t}){const n=t.metadata.labels["example.com/worker"];return s.jsxs("div",{children:[s.jsx("span",{title:n,children:n}),s.jsx("span",{children:" "})]})}}},filters:Te(e),getRunActions:()=>[{actionText:"An Action",action:t=>t,modalProperties:{heading:"An Action",primaryButtonText:"OK",secondaryButtonText:"Cancel",body:()=>"Do something interesting"}}],pipelineRuns:[{metadata:{name:"pipeline-run-20190816124708",namespace:"cb4552a6-b2d7-45e2-9773-3d4ca33909ff",creationTimestamp:"2019-08-16T12:48:00Z",labels:{"example.com/worker":"my-worker"},uid:"b0461c38-90e1-4d83-b32d-293cf3d0ea72"},spec:{pipelineRef:{name:"pipeline"}}}]}),args:{showFilters:!1}},_={args:{cancelPipelineRun:()=>{},pipelineRuns:[],selectedNamespace:"default"}},Z={args:{..._.args,loading:!0}};C.__docgenInfo={description:"",methods:[],displayName:"Default"};j.__docgenInfo={description:"",methods:[],displayName:"NoPipelineLink"};I.__docgenInfo={description:"",methods:[],displayName:"BatchActions"};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <PipelineRuns getPipelineRunURL={({
  namespace,
  pipelineRunName
}) => namespace ? \`to-pipelineRun-\${namespace}/\${pipelineRunName}\` : null} getPipelineRunsByPipelineURL={({
  namespace,
  pipelineName
}) => namespace ? \`to-pipeline-\${namespace}/\${pipelineName}\` : \`to-pipeline/\${pipelineName}\`} createPipelineRunTimestamp={pipelineRun => getStatus(pipelineRun).lastTransitionTime || pipelineRun.metadata.creationTimestamp} selectedNamespace="default" getRunActions={() => [{
  actionText: 'Cancel',
  action: resource => resource,
  disable: resource => resource.status && resource.status.conditions[0].reason !== 'Running',
  modalProperties: {
    heading: 'cancel',
    primaryButtonText: 'ok',
    secondaryButtonText: 'no',
    body: resource => \`cancel pipelineRun \${resource.metadata.name}\`
  }
}]} pipelineRuns={[{
  metadata: {
    name: 'pipeline-run-20190816124708',
    namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
    uid: '7c266264-4d4d-45e3-ace0-041be8f7d06e',
    creationTimestamp: '2019-08-16T12:48:00Z'
  },
  spec: {
    pipelineRef: {
      name: 'pipeline'
    }
  },
  status: {
    conditions: [{
      lastTransitionTime: '2019-08-16T12:49:28Z',
      message: 'All Tasks have completed executing',
      reason: 'Succeeded',
      status: 'True',
      type: 'Succeeded'
    }]
  }
}, {
  metadata: {
    name: 'pipeline-run-20190816170431',
    namespace: '21cf1eac-7392-4e67-a4d0-f654506fe04d',
    uid: 'a7812005-f766-4877-abd4-b3d418b04f66',
    creationTimestamp: '2019-08-16T17:09:12Z',
    labels: {
      'triggers.tekton.dev/eventlistener': 'tekton-nightly',
      'triggers.tekton.dev/trigger': 'dashboard-nightly-release'
    }
  },
  spec: {
    pipelineRef: {
      name: 'pipeline'
    }
  },
  status: {
    conditions: [{
      lastTransitionTime: '2019-08-16T17:10:49Z',
      message: 'Not all Tasks have completed executing',
      reason: 'Running',
      status: 'Unknown',
      type: 'Succeeded'
    }]
  }
}, {
  apiVersion: 'tekton.dev/v1alpha1',
  kind: 'PipelineRun',
  metadata: {
    name: 'output-pipeline-run',
    creationTimestamp: '2019-10-09T17:10:49Z',
    uid: '01cb5ea7-0158-4031-bc70-6bf017533a94'
  },
  spec: {
    pipelineRef: {
      name: 'output-pipeline'
    },
    serviceAccountName: 'default'
  }
}]} cancelPipelineRun={() => {}} />`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <PipelineRuns getPipelineRunURL={({
  namespace,
  pipelineRunName
}) => namespace ? \`to-pipelineRun-\${namespace}/\${pipelineRunName}\` : null} getPipelineRunsByPipelineURL={() => null} createPipelineRunTimestamp={pipelineRun => getStatus(pipelineRun).lastTransitionTime || pipelineRun.metadata.creationTimestamp} selectedNamespace="default" getRunActions={() => [{
  actionText: 'Cancel',
  action: resource => resource,
  disable: resource => resource.status && resource.status.conditions[0].reason !== 'Running',
  modalProperties: {
    heading: 'cancel',
    primaryButtonText: 'ok',
    secondaryButtonText: 'no',
    body: resource => \`cancel pipelineRun \${resource.metadata.name}\`
  }
}]} pipelineRuns={[{
  metadata: {
    name: 'pipeline-run-20190816124708',
    namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
    uid: '7c266264-4d4d-45e3-ace0-041be8f7d06e',
    creationTimestamp: '2019-08-16T12:48:00Z'
  },
  spec: {
    pipelineRef: {
      name: 'pipeline'
    }
  },
  status: {
    conditions: [{
      lastTransitionTime: '2019-08-16T12:49:28Z',
      message: 'All Tasks have completed executing',
      reason: 'Succeeded',
      status: 'True',
      type: 'Succeeded'
    }]
  }
}, {
  apiVersion: 'tekton.dev/v1alpha1',
  kind: 'PipelineRun',
  metadata: {
    name: 'output-pipeline-run',
    namespace: '61fe5520-a56e-4c1d-b7c3-d933b0f3c6a8',
    creationTimestamp: '2019-10-09T17:10:49Z',
    uid: '905c1ab0-203d-49ce-ad8d-4553e5d06bf0'
  },
  spec: {
    serviceAccountName: 'default'
  }
}]} cancelPipelineRun={() => {}} />`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <PipelineRuns batchActionButtons={[{
  onClick: action('handleDelete'),
  text: 'Delete',
  icon: Delete
}]} selectedNamespace="default" getRunActions={() => [{
  actionText: 'An Action',
  action: resource => resource,
  modalProperties: {
    heading: 'An Action',
    primaryButtonText: 'OK',
    secondaryButtonText: 'Cancel',
    body: () => 'Do something interesting'
  }
}]} pipelineRuns={[{
  metadata: {
    name: 'pipeline-run-20190816124708',
    namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
    creationTimestamp: '2019-08-16T12:48:00Z',
    uid: '93531810-1b80-4246-a2bd-ee146c448d13'
  },
  spec: {
    pipelineRef: {
      name: 'pipeline'
    }
  }
}, {
  apiVersion: 'tekton.dev/v1alpha1',
  kind: 'PipelineRun',
  metadata: {
    name: 'output-pipeline-run',
    namespace: 'default',
    creationTimestamp: '2019-10-09T17:10:49Z',
    uid: '77e0f4a3-40e5-46f1-84cc-ab7aa93c382c'
  },
  spec: {
    serviceAccountName: 'default'
  }
}]} />`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: ({
    showFilters
  }) => <PipelineRuns columns={['run', 'status', 'time']} filters={getFilters(showFilters)} getRunActions={() => [{
    actionText: 'An Action',
    action: resource => resource,
    modalProperties: {
      heading: 'An Action',
      primaryButtonText: 'OK',
      secondaryButtonText: 'Cancel',
      body: () => 'Do something interesting'
    }
  }]} pipelineRuns={[{
    metadata: {
      name: 'pipeline-run-20190816124708',
      namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
      creationTimestamp: '2019-08-16T12:48:00Z',
      uid: 'c5ef252a-4635-46b5-ad7b-32c9e04cb6d2'
    },
    spec: {
      pipelineRef: {
        name: 'pipeline'
      }
    }
  }]} />,
  args: {
    showFilters: false
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: ({
    showFilters
  }) => <PipelineRuns columns={['status', 'run', 'worker', 'time']} customColumns={{
    status: {
      getValue() {
        return <div>
                <div className="tkn--definition">
                  <div className="tkn--status">
                    <StatusIcon /> Pending
                  </div>
                </div>
                <span>&nbsp;</span>
              </div>;
      }
    },
    worker: {
      header: 'Worker',
      getValue({
        pipelineRun
      }) {
        const worker = pipelineRun.metadata.labels['example.com/worker'];
        return <div>
                <span title={worker}>{worker}</span>
                <span>&nbsp;</span>
              </div>;
      }
    }
  }} filters={getFilters(showFilters)} getRunActions={() => [{
    actionText: 'An Action',
    action: resource => resource,
    modalProperties: {
      heading: 'An Action',
      primaryButtonText: 'OK',
      secondaryButtonText: 'Cancel',
      body: () => 'Do something interesting'
    }
  }]} pipelineRuns={[{
    metadata: {
      name: 'pipeline-run-20190816124708',
      namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
      creationTimestamp: '2019-08-16T12:48:00Z',
      labels: {
        'example.com/worker': 'my-worker'
      },
      uid: 'b0461c38-90e1-4d83-b32d-293cf3d0ea72'
    },
    spec: {
      pipelineRef: {
        name: 'pipeline'
      }
    }
  }]} />,
  args: {
    showFilters: false
  }
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    cancelPipelineRun: () => {},
    pipelineRuns: [],
    selectedNamespace: 'default'
  }
}`,..._.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Empty.args,
    loading: true
  }
}`,...Z.parameters?.docs?.source}}};const pn=["Default","NoPipelineLink","BatchActions","HideColumns","CustomColumns","Empty","Loading"];export{I as BatchActions,M as CustomColumns,C as Default,_ as Empty,B as HideColumns,Z as Loading,j as NoPipelineLink,pn as __namedExportsOrder,cn as default};
