import{p as je,_ as H,a as Ee,b as Ke,c as Ue,f as Ve,u as Xe,m as u,q as Ye,d as Oe}from"./index-Cn2DnnuS.js";import{c as z}from"./index-7UTgOZSF.js";import{_ as t}from"./index-CvulwabO.js";import{r as E,R as l,c as Z,g as He}from"./index-BLsgEXh-.js";import{u as ce,e as Ge,P as Re}from"./usePrefix-DVhi0s40.js";import{T as Je}from"./Text-9nRGETFr.js";import{m as L,E as Ie,c as Te,e as ue,f as fe,T as Qe,a as ve,A as Ze}from"./keys-fZP-1wUt.js";import{I as $e}from"./index-mhCn_TNf.js";import{r as et,a as tt}from"./index-CTl86HqP.js";import{b as nt,d as ot}from"./index-DN2bqo_D.js";import{m as De}from"./mergeRefs-CTUecegF.js";import{O as Pe}from"./bucket-12-DVDhO4p7.js";import{s as st,b as it,a as rt,w as lt}from"./wrapFocus-Cvvm2ck9.js";import{n as U}from"./noopFn-g4z370MD.js";const at={isRoot:!0,mode:"full",hasIcons:!1,size:null,items:[],requestCloseRoot:()=>{}};function ct(a,e){switch(e.type){case"enableIcons":return{...a,hasIcons:!0};case"registerItem":return{...a,items:[...a.items,e.payload].filter(n=>n.ref.current!==null)}}}const Ce=E.createContext({state:at,dispatch:a=>{}}),ut=l.createContext({direction:"ltr"});function ft(){return E.useContext(ut)}const ee=8,Fe=E.forwardRef(function(e,n){let{children:o,className:r,containerRef:f,label:c,menuAlignment:i,mode:g="full",onClose:p,onOpen:M,open:d,size:w="sm",legacyAutoalign:m="true",target:b=je&&document.body,x=0,y:T=0,...R}=e;const h=ce(),O=E.useRef(null),y=E.useContext(Ce),v=y.state.isRoot;y.state.mode;const $=v?w:y.state.size,[S,B]=E.useReducer(ct,{...y.state,isRoot:!1,mode:g,size:w,requestCloseRoot:v?se:y.state.requestCloseRoot}),_=E.useMemo(()=>({state:S,dispatch:B}),[S,B]),C=E.useRef(null),k=nt([n,C]),[q,j]=E.useState([-1,-1]),P=_.state.items.filter(s=>!s.disabled&&s.ref.current);let D;if(f?.current){const{width:s}=f.current.getBoundingClientRect();D=s}const{direction:A}=ft();function X(){O.current&&O.current.focus()}function Be(){if(C.current){if(O.current=document.activeElement,m){const s=We();(document?.dir==="rtl"||A==="rtl")&&!R?.id?.includes("MenuButton")?(C.current.style.insetInlineStart="initial",C.current.style.insetInlineEnd=`${s[0]}px`):(C.current.style.insetInlineStart=`${s[0]}px`,C.current.style.insetInlineEnd="initial"),C.current.style.insetBlockStart=`${s[1]}px`,j(s)}C.current.focus(),M&&M()}}function se(s){/^key/.test(s.type)?window.addEventListener("keyup",X,{once:!0}):s.type==="click"&&C.current?C.current.addEventListener("focusout",X,{once:!0}):X(),p&&p()}function ke(s){s.stopPropagation(),(L(s,Ie)||!v&&L(s,Te))&&p?se(s):de(s)}function de(s){const F=P.findIndex(G=>G.ref?.current?.contains(document.activeElement));let I=F;F===-1?I=0:s&&(L(s,ue)&&(I=I-1),L(s,fe)&&(I=I+1)),I<0&&(I=P.length-1),I>=P.length&&(I=0),I!==F&&(P[I].ref?.current?.focus(),s?.preventDefault())}function Ae(s){d&&p&&v&&!C.current?.contains(s.relatedTarget)&&se(s)}function me(s,F){if(!C.current)return;const{width:I,height:G}=C.current.getBoundingClientRect(),J=v?"vertical":"horizontal",N={x:{max:window.innerWidth,size:I,anchor:J==="horizontal"?s[1]:s[0],reversedAnchor:J==="horizontal"?s[0]:s[1],offset:0},y:{max:window.innerHeight,size:G,anchor:J==="horizontal"?s[0]:s[1],reversedAnchor:J==="horizontal"?s[1]:s[0],offset:v?0:4}};if(D&&D<N.x.size&&(i==="bottom"||i==="top")&&(N.x.size=D),D&&(i==="bottom-end"||i==="top-end")&&N.x.anchor>=87&&D<N.x.size){const ae=N.x.anchor+N.x.reversedAnchor;N.x.anchor=N.x.anchor+ae}const{max:ge,size:Q,anchor:re,reversedAnchor:be,offset:le}=N[F],K=[ge-ee-Q-re>=0?re-le:!1,be-Q>=0?be-Q+le:!1,ge-ee-Q],ye=i==="top"||i==="top-end"||i==="top-start";typeof K[0]=="number"&&ye&&K[0]>=0&&!K[1]&&F==="y"?C.current.style.transform="translate(0)":ye&&!K[0]&&F==="y"&&(K[0]=re-le);const we=K.find(ae=>ae!==!1);return we>=ee?we:ee}function Le(s){return s!=null}function he(s){if(Array.isArray(s)){const F=s.filter(Le);return F.length===2?F:void 0}else return[s,s]}function We(){const s={x:he(x),y:he(T)};return!s.x||!s.y?[-1,-1]:[me(s.x,"x")??-1,me(s.y,"y")??-1]}E.useEffect(()=>{d&&P.length>0&&de()},[d,P]),E.useEffect(()=>{d?Be():j([-1,-1])},[d]);const qe=z(r,`${h}--menu`,`${h}--menu--${$}`,{[`${h}--menu--box-shadow-top`]:i&&i.slice(0,3)==="top",[`${h}--menu--open`]:d,[`${h}--menu--shown`]:d&&!m||q[0]>=0&&q[1]>=0,[`${h}--menu--with-icons`]:_.state.hasIcons,[`${h}--autoalign`]:!m}),ie=l.createElement(Ce.Provider,{value:_},l.createElement("ul",H({},R,{className:qe,role:"menu",ref:k,"aria-label":c,tabIndex:-1,onKeyDown:ke,onBlur:Ae}),o));return b&&v?d&&et.createPortal(ie,b)||null:ie});Fe.propTypes={children:t.node,className:t.string,label:t.string,menuAlignment:t.string,mode:t.oneOf(["full","basic"]),onClose:t.func,onOpen:t.func,open:t.bool,size:t.oneOf(["xs","sm","md","lg"]),target:t.object,x:t.oneOfType([t.number,t.arrayOf(t.number)]),y:t.oneOfType([t.number,t.arrayOf(t.number)])};function pt(a){const[e,n]=E.useState(!1),[o,r]=E.useState([[-1,-1],[-1,-1]]);function f(){const p=a?.current||a;if(p){const{left:M,top:d,right:w,bottom:m}=p.getBoundingClientRect();r([[M,w],[d,m]])}n(!0)}function c(){n(!1)}function i(){e?c():f()}function g(p){p.preventDefault()}return{open:e,x:o[0],y:o[1],handleClick:i,handleMousedown:g,handleClose:c}}function dt(a){function e(o){return l.createElement(a,o)}const n=a.displayName||a.name;return e.displayName=`ClassWrapper(${n})`,e}const mt=l.forwardRef(function(e,n){let{className:o,closeMenu:r,disabled:f=!1,handleOverflowMenuItemFocus:c,hasDivider:i=!1,href:g,isDelete:p=!1,index:M,itemText:d="Provide itemText",onClick:w=()=>{},onKeyDown:m=()=>{},requireTitle:b,title:x,wrapperClassName:T,...R}=e;const h=ce();function O(_){L(_,fe)&&c?.({currentIndex:M,direction:1}),L(_,ue)&&c?.({currentIndex:M,direction:-1})}function y(_){w(_),r&&r()}const v=z(`${h}--overflow-menu-options__btn`,o),$=z(`${h}--overflow-menu-options__option`,{[`${h}--overflow-menu--divider`]:i,[`${h}--overflow-menu-options__option--danger`]:p,[`${h}--overflow-menu-options__option--disabled`]:f},T),S=g?"a":"button",B=typeof d!="string"?d:l.createElement("div",{className:`${h}--overflow-menu-options__option-content`},d);return l.createElement(Je,{as:"li",className:$,role:"none"},l.createElement(S,H({className:v,disabled:f,href:g,onClick:y,onKeyDown:_=>{O(_),m(_)},role:"menuitem",ref:n,tabIndex:-1,title:b?x||d:void 0},R),B))});mt.propTypes={className:t.string,closeMenu:t.func,disabled:t.bool,handleOverflowMenuItemFocus:t.func,hasDivider:t.bool,href:t.string,index:t.number,isDelete:t.bool,itemText:t.node.isRequired,onBlur:t.func,onClick:t.func,onFocus:t.func,onKeyDown:t.func,onKeyUp:t.func,onMouseDown:t.func,onMouseEnter:t.func,onMouseLeave:t.func,onMouseUp:t.func,requireTitle:t.bool,title:t.string,wrapperClassName:t.string};const Me="md",ht=a=>({"top-left":"top-start","top-right":"top-end","bottom-left":"bottom-start","bottom-right":"bottom-end","left-bottom":"left-end","left-top":"left-start","right-bottom":"right-end","right-top":"right-start"})[a],Ne=l.forwardRef(function(e,n){let{autoAlign:o=!1,children:r,className:f,label:c="Options",renderIcon:i=Pe,size:g=Me,menuAlignment:p="bottom-start",tooltipAlignment:M,menuTarget:d,...w}=e;const m=Ee("enable-v12-dynamic-floating-styles")||o,{refs:b,floatingStyles:x,placement:T,middlewareData:R}=Ke(m?{placement:p,strategy:"fixed",middleware:[o&&Ve({fallbackPlacements:p.includes("bottom")?["bottom-start","bottom-end","top-start","top-end"]:["top-start","top-end","bottom-start","bottom-end"]})],whileElementsMounted:Ue}:{}),h=Xe("overflowmenu"),O=ce(),y=E.useRef(null),{open:v,x:$,y:S,handleClick:B,handleMousedown:_,handleClose:C}=pt(y);E.useEffect(()=>{m&&Object.keys(x).forEach(A=>{b.floating.current&&(b.floating.current.style[A]=x[A])})},[x,m,b.floating,v,T,R]);function k(){y.current&&B()}const q=z(f,`${O}--overflow-menu__container`,{[`${O}--autoalign`]:m}),j=z(`${O}--overflow-menu__${p}`),P=z(`${O}--overflow-menu`,{[`${O}--overflow-menu--open`]:v},g!==Me&&`${O}--overflow-menu--${g}`),D=De(y,b.setReference);return l.createElement("div",H({},w,{className:q,"aria-owns":v?h:void 0,ref:n}),l.createElement($e,{"aria-controls":v?h:void 0,"aria-haspopup":!0,"aria-expanded":v,className:P,onClick:k,onMouseDown:_,ref:D,label:c,align:M,kind:"ghost"},l.createElement(i,{className:`${O}--overflow-menu__icon`})),l.createElement(Fe,{containerRef:y,ref:b.setFloating,menuAlignment:p,className:j,id:h,size:g,legacyAutoalign:!m,open:v,onClose:C,x:$,y:S,label:c,target:d},r))});Ne.propTypes={autoAlign:t.bool,children:t.node,className:t.string,label:t.string,menuAlignment:t.oneOf(["top-start","top-end","bottom-start","bottom-end"]),renderIcon:t.oneOfType([t.func,t.object]),size:t.oneOf(["sm","md","lg"]),tooltipAlignment:ot(t.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],ht),menuTarget:t.instanceOf(typeof Element<"u"?Element:Object)};var te,xe;function gt(){return xe||(xe=1,te=typeof self=="object"&&self.self===self&&self||typeof Z=="object"&&Z.global===Z&&Z||te),te}var bt=gt();const V=He(bt),yt=function(){const e=[];let n=!1;function o(){e.forEach(c=>{c()}),n=!1}function r(){n||(n=!0,V.requestAnimationFrame(o))}function f(c){c&&e.indexOf(c)<0&&e.push(c)}return{add:c=>(e.length||V.addEventListener("resize",r),f(c),{release(){const i=e.indexOf(c);i>=0&&e.splice(i,1)}})}}();var wt=yt;const ze="left",ne="top",Se="right",W="bottom",Ot=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof a!=typeof e?!0:Object(e)===e&&typeof e!="function"?a.top!==e.top||a.left!==e.left:a!==e},vt=a=>{let{menuSize:e,refPosition:n={},offset:o={},direction:r=W,scrollX:f=0,scrollY:c=0,container:i}=a;const{left:g=0,top:p=0,right:M=0,bottom:d=0}=n,w=i.position!=="static"?0:f,m=i.position!=="static"?0:c,b={top:i.position!=="static"?i.rect.top:0,left:i.position!=="static"?i.rect.left:0},{width:x,height:T}=e,{top:R=0,left:h=0}=o,O=(g+M)/2,y=(p+d)/2;return{[ze]:()=>({left:g-x+w-h-b.left,top:y-T/2+m+R-9-b.top}),[ne]:()=>({left:O-x/2+w+h-b.left,top:p-T+m-R-b.top}),[Se]:()=>({left:M+w+h-b.left,top:y-T/2+m+R+3-b.top}),[W]:()=>({left:O-x/2+w+h-b.left,top:d+m+R-b.top})}[r]()};class pe extends l.Component{constructor(){var e;super(...arguments),e=this,u(this,"_placeInProgress",!1),u(this,"state",{floatingPosition:void 0}),u(this,"_menuContainer",null),u(this,"_menuBody",null),u(this,"startSentinel",l.createRef()),u(this,"endSentinel",l.createRef()),u(this,"_updateMenuSize",function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const r=e._menuBody;if(!r)return;const{menuOffset:f={},menuDirection:c}=n,{menuOffset:i={},menuDirection:g=W}=e.props;if(Ot(f,i)||c!==g||o){const{flipped:p,triggerRef:M,updateOrientation:d=null}=e.props,{current:w}=M,m=r.getBoundingClientRect(),b=w&&w.getBoundingClientRect(),x=typeof i!="function"?i:i(r,g,w,p);d&&d({menuSize:m,refPosition:b,direction:g,offset:x,scrollX:V.pageXOffset,scrollY:V.pageYOffset,container:{rect:e.props.target().getBoundingClientRect(),position:getComputedStyle(e.props.target()).position}}),(m.width>0&&m.height>0||!x)&&e.setState({floatingPosition:vt({menuSize:m,refPosition:b,direction:g,offset:x,scrollX:V.pageXOffset,scrollY:V.pageYOffset,container:{rect:e.props.target().getBoundingClientRect(),position:getComputedStyle(e.props.target()).position}})},()=>{o||r.getBoundingClientRect()!==m&&e._updateMenuSize(e.props,!0)})}}),u(this,"_focusMenuContent",n=>{const o=n.querySelector(this.props.selectorPrimaryFocus||null),r=n.querySelector(st),f=n.querySelector(it);(o||r||f||n).focus()}),u(this,"_menuRef",n=>{const{menuRef:o}=this.props;this._placeInProgress=!!n,o&&o(this._menuBody=n),n&&this._updateMenuSize()}),u(this,"_getChildrenWithProps",()=>{const{styles:n,children:o}=this.props,{floatingPosition:r}=this.state,f=r?{left:`${r.left}px`,top:`${r.top}px`,right:"auto"}:{visibility:"hidden",top:"0px"};return l.cloneElement(o,{ref:this._menuRef,style:{...n,...f,position:"absolute",opacity:1}})}),u(this,"handleBlur",n=>{let{target:o,relatedTarget:r}=n;if(r&&o){const{current:f}=this.startSentinel,{current:c}=this.endSentinel;rt({bodyNode:this._menuBody,currentActiveNode:r,oldActiveNode:o})}}),u(this,"handleKeyDown",n=>{L(n,Qe)&&this._menuBody&&lt({containerNode:this._menuBody,currentActiveNode:n.target,event:n})})}componentWillUnmount(){this.hResize.release()}componentDidMount(){this.hResize=wt.add(()=>{this._updateMenuSize()})}componentDidUpdate(e){this._updateMenuSize(e);const{onPlace:n}=this.props;this._placeInProgress&&this.state.floatingPosition&&(this._menuBody&&!this._menuBody.contains(document.activeElement)&&this._focusMenuContent(this._menuBody),typeof n=="function"&&(n(this._menuBody),this._placeInProgress=!1))}render(){const{context:e}=this,n=Ge("enable-experimental-focus-wrap-without-sentinels");if(typeof document<"u"){const{focusTrap:o,target:r}=this.props;return tt.createPortal(l.createElement("div",{onBlur:o&&!n?this.handleBlur:()=>{},onKeyDown:n?this.handleKeyDown:()=>{}},!n&&l.createElement("span",{ref:this.startSentinel,tabIndex:"0",role:"link",className:`${e}--visually-hidden`},"Focus sentinel"),this._getChildrenWithProps(),!n&&l.createElement("span",{ref:this.endSentinel,tabIndex:"0",role:"link",className:`${e}--visually-hidden`},"Focus sentinel")),r?r():document.body)}return null}}u(pe,"contextType",Re);u(pe,"propTypes",{children:t.object,flipped:t.bool,focusTrap:t.bool,menuDirection:t.oneOf([ze,ne,Se,W]),menuOffset:t.oneOfType([t.shape({top:t.number,left:t.number}),t.func]),menuRef:t.func,onPlace:t.func,selectorPrimaryFocus:t.string,styles:t.object,target:t.func,triggerRef:t.oneOfType([t.func,t.shape({current:t.any})]),updateOrientation:t.func});var Ct=pe;class Y extends l.Component{static getEventTarget(e){return e.composed&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target}constructor(e){super(e),this.handleRef=this.handleRef.bind(this),this.handleDocumentClick=this.handleDocumentClick.bind(this)}componentDidMount(){document.addEventListener("click",this.handleDocumentClick)}componentWillUnmount(){document.removeEventListener("click",this.handleDocumentClick)}handleDocumentClick(e){this.element&&this.element.contains&&!this.element.contains(Y.getEventTarget(e))&&this.props.onClickOutside(e)}handleRef(e){const{children:n}=this.props;this.element=e,n.ref&&typeof n.ref=="function"&&n.ref(e)}render(){return l.cloneElement(this.props.children,{ref:this.handleRef})}}u(Y,"propTypes",{children:t.element.isRequired,onClickOutside:t.func.isRequired});const Mt=Ye(),xt=function(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return a.addEventListener(...n),{release(){return a.removeEventListener(...n),null}}},_t={[ne]:"bottom",[W]:"top"},_e=(a,e,n,o)=>{const r=_t[e],{offsetWidth:f,offsetHeight:c}=a;switch(r){case"top":case"bottom":{const i=n?n.offsetWidth:0;return{left:(o?-1:1)*(f/2-i/2),top:0}}}};let oe=class extends l.Component{constructor(){super(...arguments),u(this,"state",{open:!1,hasMountedTrigger:!1,click:!1}),u(this,"instanceId",Mt()),u(this,"_hFocusIn",null),u(this,"_hBlurTimeout",void 0),u(this,"_triggerRef",l.createRef()),u(this,"handleClick",e=>{const{onClick:n=U}=this.props;this.setState({click:!0}),(!this._menuBody||!this._menuBody.contains(e.target))&&(this.setState({open:!this.state.open}),n(e))}),u(this,"closeMenuAndFocus",()=>{const e=this.state.click,n=this.state.open;this.closeMenu(()=>{n&&!e&&this.focusMenuEl()})}),u(this,"closeMenuOnEscape",()=>{const e=this.state.open;this.closeMenu(()=>{e&&this.focusMenuEl()})}),u(this,"handleKeyPress",e=>{this.state.open&&ve(e,[ue,Ze,fe,Te])&&e.preventDefault(),ve(e,[Ie])&&(this.closeMenuOnEscape(),e.stopPropagation())}),u(this,"handleClickOutside",e=>{this.state.open&&(!this._menuBody||!this._menuBody.contains(e.target))&&this.closeMenu()}),u(this,"closeMenu",e=>{const{onClose:n=U}=this.props;this.setState({open:!1},()=>{e&&e(),n()})}),u(this,"focusMenuEl",()=>{const{current:e}=this._triggerRef;e&&e.focus()}),u(this,"handleOverflowMenuItemFocus",e=>{let{currentIndex:n,direction:o}=e;const r=l.Children.toArray(this.props.children).reduce((i,g,p)=>(l.isValidElement(g)&&!g.props.disabled&&i.push(p),i),[]),f=(()=>{const i=r.indexOf(n)+o;switch(i){case-1:return r.length-1;case r.length:return 0;default:return i}})();this[`overflowMenuItem${r[f]}`]?.focus()}),u(this,"_menuBody",null),u(this,"_bindMenuBody",e=>{e||(this._menuBody=e),!e&&this._hFocusIn&&(this._hFocusIn=this._hFocusIn.release())}),u(this,"_handlePlace",e=>{const{onOpen:n=U}=this.props;if(e){this._menuBody=e;const o="onfocusin"in window,r=o?"focusin":"focus";this._hFocusIn=xt(e.ownerDocument,r,f=>{const c=Y.getEventTarget(f),{current:i}=this._triggerRef;typeof c.matches=="function"&&!e.contains(c)&&i&&!c.matches(`.${this.context}--overflow-menu:first-child,.${this.context}--overflow-menu-options:first-child`)&&this.closeMenuAndFocus()},!o),n()}}),u(this,"_getTarget",()=>{const{current:e}=this._triggerRef;return e instanceof Element&&e.closest("[data-floating-menu-container]")||document.body})}componentDidUpdate(e,n){const{onClose:o=U}=this.props;!this.state.open&&n.open&&o()}componentDidMount(){this._triggerRef.current&&this.setState({hasMountedTrigger:!0})}static getDerivedStateFromProps(e,n){let{open:o}=e;const{prevOpen:r}=n;return r===o?null:{open:o,prevOpen:o}}componentWillUnmount(){typeof this._hBlurTimeout=="number"&&(clearTimeout(this._hBlurTimeout),this._hBlurTimeout=void 0)}render(){const e=this.context,{id:n,["aria-label"]:o=null,ariaLabel:r,children:f,iconDescription:c="Options",direction:i=W,flipped:g=!1,focusTrap:p=!0,menuOffset:M=_e,menuOffsetFlip:d=_e,iconClass:w,onClick:m=U,onOpen:b=U,selectorPrimaryFocus:x="[data-floating-menu-primary-focus]",renderIcon:T=Pe,innerRef:R,menuOptionsClass:h,light:O,size:y="md",...v}=this.props,{open:$=!1}=this.state,S=z(this.props.className,`${e}--overflow-menu`,{[`${e}--overflow-menu--open`]:$,[`${e}--overflow-menu--light`]:O,[`${e}--overflow-menu--${y}`]:y}),B=z(h,`${e}--overflow-menu-options`,{[`${e}--overflow-menu--flip`]:this.props.flipped,[`${e}--overflow-menu-options--open`]:$,[`${e}--overflow-menu-options--light`]:O,[`${e}--overflow-menu-options--${y}`]:y}),_=z(`${e}--overflow-menu__icon`,w),C=l.Children.toArray(f).map((D,A)=>l.isValidElement(D)?l.cloneElement(D,{closeMenu:D.props.closeMenu||this.closeMenuAndFocus,handleOverflowMenuItemFocus:this.handleOverflowMenuItemFocus,ref:X=>{this[`overflowMenuItem${A}`]=X},index:A}):null),k=`overflow-menu-${this.instanceId}__menu-body`,q=l.createElement("ul",{className:B,tabIndex:-1,role:"menu","aria-label":o||r,onKeyDown:this.handleKeyPress,id:k},C),j=l.createElement(Ct,{focusTrap:p,triggerRef:this._triggerRef,menuDirection:i,menuOffset:g?d:M,menuRef:this._bindMenuBody,flipped:this.props.flipped,target:this._getTarget,onPlace:this._handlePlace,selectorPrimaryFocus:this.props.selectorPrimaryFocus},l.cloneElement(q,{"data-floating-menu-direction":i})),P={className:_,"aria-label":c};return l.createElement(Y,{onClickOutside:this.handleClickOutside},l.createElement("span",{className:`${e}--overflow-menu__wrapper`,"aria-owns":$?k:void 0},l.createElement($e,H({},v,{type:"button","aria-haspopup":!0,"aria-expanded":$,"aria-controls":$?k:void 0,className:S,onClick:this.handleClick,id:n,ref:De(this._triggerRef,R),size:y,label:c,kind:"ghost"}),l.createElement(T,P)),$&&this.state.hasMountedTrigger&&j))}};u(oe,"propTypes",{"aria-label":t.string,ariaLabel:Oe(t.string),children:t.node,className:t.string,direction:t.oneOf([ne,W]),flipped:t.bool,focusTrap:t.bool,iconClass:t.string,iconDescription:t.string,id:t.string,light:Oe(t.bool),menuOffset:t.oneOfType([t.shape({top:t.number,left:t.number}),t.func]),menuOffsetFlip:t.oneOfType([t.shape({top:t.number,left:t.number}),t.func]),menuOptionsClass:t.string,onClick:t.func,onClose:t.func,onFocus:t.func,onKeyDown:t.func,onOpen:t.func,open:t.bool,renderIcon:t.oneOfType([t.func,t.object]),selectorPrimaryFocus:t.string,size:t.oneOf(["sm","md","lg"])});u(oe,"contextType",Re);(()=>{const a=(e,n)=>l.createElement(oe,H({},e,{innerRef:n}));return a.displayName="OverflowMenu",l.forwardRef(a)})();const Et=dt(oe);function Rt(a){return Ee("enable-v12-overflowmenu")?l.createElement(Ne,a):l.createElement(Et,a)}Rt.displayName="OverflowMenu";export{Ce as M,Rt as O,mt as a,Fe as b,pt as c,dt as d,ft as u};
