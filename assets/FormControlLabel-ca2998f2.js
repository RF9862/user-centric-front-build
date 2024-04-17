import{q as _,p as M,s as R,t as $,_ as d,r as L,u as E,v as U,a3 as A,a4 as D,T as v,j as p,w as F,e as I,x as W}from"./index-d917b12f.js";function z(e){return M("MuiFormControlLabel",e)}const B=_("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),t=B,H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],G=e=>{const{classes:o,disabled:l,labelPlacement:n,error:a,required:r}=e,m={root:["root",l&&"disabled",`labelPlacement${$(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return W(m,z,o)},J=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${$(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),O=L.forwardRef(function(o,l){var n,a;const r=E({props:o,name:"MuiFormControlLabel"}),{className:m,componentsProps:q={},control:i,disabled:P,disableTypography:k,label:j,labelPlacement:T="end",required:h,slotProps:w={}}=r,N=U(r,H),b=A(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const S=D({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:T,required:u,error:S.error}),C=G(f),g=(a=w.typography)!=null?a:q.typography;let s=j;return s!=null&&s.type!==v&&!k&&(s=p.jsx(v,d({component:"span"},g,{className:F(C.label,g==null?void 0:g.className),children:s}))),p.jsxs(J,d({className:F(C.root,m),ownerState:f,ref:l},N,{children:[L.cloneElement(i,x),u?p.jsxs(I,{direction:"row",alignItems:"center",children:[s,p.jsxs(K,{ownerState:f,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):s]}))}),V=O;export{V as F};
