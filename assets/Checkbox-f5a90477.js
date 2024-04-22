import{p as O,q as U,s as F,U as G,_ as a,r as v,v as _,a1 as J,a4 as K,j as i,w as E,t as I,x as H,X as R,Y as Q,h as Z,u as ee}from"./index-891d7d6f.js";function oe(e){return O("PrivateSwitchBase",e)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ne=e=>{const{classes:o,checked:t,disabled:r,edge:n}=e,c={root:["root",t&&"checked",r&&"disabled",n&&`edge${I(n)}`],input:["input"]};return H(c,oe,o)},ce=F(G)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ae=v.forwardRef(function(o,t){const{autoFocus:r,checked:n,checkedIcon:c,className:u,defaultChecked:x,disabled:B,disableFocusRipple:d=!1,edge:C=!1,icon:y,id:p,inputProps:z,inputRef:S,name:b,onBlur:h,onChange:f,onFocus:m,readOnly:L,required:q=!1,tabIndex:V,type:g,value:w}=o,T=_(o,te),[j,W]=J({controlled:n,default:!!x,name:"SwitchBase",state:"checked"}),l=K(),X=s=>{m&&m(s),l&&l.onFocus&&l.onFocus(s)},Y=s=>{h&&h(s),l&&l.onBlur&&l.onBlur(s)},A=s=>{if(s.nativeEvent.defaultPrevented)return;const N=s.target.checked;W(N),f&&f(s,N)};let k=B;l&&typeof k>"u"&&(k=l.disabled);const D=g==="checkbox"||g==="radio",P=a({},o,{checked:j,disabled:k,disableFocusRipple:d,edge:C}),M=ne(P);return i.jsxs(ce,a({component:"span",className:E(M.root,u),centerRipple:!0,focusRipple:!d,disabled:k,tabIndex:null,role:void 0,onFocus:X,onBlur:Y,ownerState:P,ref:t},T,{children:[i.jsx(se,a({autoFocus:r,checked:n,defaultChecked:x,className:M.input,disabled:k,id:D?p:void 0,name:b,onChange:A,readOnly:L,ref:S,required:q,ownerState:P,tabIndex:V,type:g},g==="checkbox"&&w===void 0?{}:{value:w},z)),j?c:y]}))}),ie=ae,re=R(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),le=R(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),de=R(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ue(e){return O("MuiCheckbox",e)}const pe=U("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),$=pe,he=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],fe=e=>{const{classes:o,indeterminate:t,color:r,size:n}=e,c={root:["root",t&&"indeterminate",`color${I(r)}`,`size${I(n)}`]},u=H(c,ue,o);return a({},o,u)},me=F(ie,{shouldForwardProp:e=>Q(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${I(t.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${$.checked}, &.${$.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${$.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ke=i.jsx(le,{}),xe=i.jsx(re,{}),Ce=i.jsx(de,{}),be=v.forwardRef(function(o,t){var r,n;const c=ee({props:o,name:"MuiCheckbox"}),{checkedIcon:u=ke,color:x="primary",icon:B=xe,indeterminate:d=!1,indeterminateIcon:C=Ce,inputProps:y,size:p="medium",className:z}=c,S=_(c,he),b=d?C:B,h=d?C:u,f=a({},c,{color:x,indeterminate:d,size:p}),m=fe(f);return i.jsx(me,a({type:"checkbox",inputProps:a({"data-indeterminate":d},y),icon:v.cloneElement(b,{fontSize:(r=b.props.fontSize)!=null?r:p}),checkedIcon:v.cloneElement(h,{fontSize:(n=h.props.fontSize)!=null?n:p}),ownerState:f,ref:t,className:E(m.root,z)},S,{classes:m}))}),ve=be;export{ve as C,ie as S};
