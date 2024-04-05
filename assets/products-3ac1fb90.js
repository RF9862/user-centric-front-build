import{f as ae,r as h,j as o,d as y,Q as Ke,g as Z,I as G,i as x,a as q,T as k,L as Ye,B as ue,R as Je,c as Qe,U as ne,s as I,_ as d,p as pe,o as he,V as eo,q as K,u as fe,t as Y,X as oo,v as _,w as xe,Y as no,Z as me,$ as Ie,N as to,a0 as so,a1 as Ne,a2 as ro,a3 as io,a4 as ao,n as lo,H as co,S as uo,a5 as po,W as ho}from"./index-b5c8784b.js";import{l as fo}from"./lodash-cd72e32f.js";import{a as Ce,G as je}from"./format-number-158207f8.js";import{L as xo}from"./label-4b68f398.js";import{C as mo}from"./Card-9248d453.js";import{M as go}from"./Menu-672ff1d9.js";import{F as oe}from"./FormControlLabel-638fcb81.js";import{S as vo,C as bo}from"./Checkbox-74b378d0.js";import{C as yo}from"./Container-528b545a.js";import"./isMuiElement-9183fe64.js";import"./react-is.production.min-a192e302.js";const Co={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},jo=Co,Ro=["Nike Air Force 1 NDESTRUKT","Nike Space Hippie 04","Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear","Nike Blazer Low 77 Vintage","Nike ZoomX SuperRep Surge","Zoom Freak 2","Nike Air Max Zephyr","Jordan Delta","Air Jordan XXXV PF","Nike Waffle Racer Crater","Kyrie 7 EP Sisterhood","Nike Air Zoom BB NXT","Nike Air Force 1 07 LX","Nike Air Force 1 Shadow SE","Nike Air Zoom Tempo NEXT%","Nike DBreak-Type","Nike Air Max Up","Nike Air Max 270 React ENG","NikeCourt Royale","Nike Air Zoom Pegasus 37 Premium","Nike Air Zoom SuperRep","NikeCourt Royale","Nike React Art3mis","Nike React Infinity Run Flyknit A.I.R. Chaz Bear"],V=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"],Fo=[...Array(24)].map((e,n)=>{const t=n+1;return{id:ae.string.uuid(),cover:`/assets/images/products/product_${t}.jpg`,name:Ro[n],price:ae.number.int({min:4,max:99,precision:.01}),priceSale:t%3?null:ae.number.int({min:19,max:29,precision:.01}),colors:t===1&&V.slice(0,2)||t===2&&V.slice(1,3)||t===3&&V.slice(2,4)||t===4&&V.slice(3,6)||t===23&&V.slice(4,6)||t===24&&V.slice(5,6)||V,status:fo.sample(["sale","new","",""])}}),Ae=h.forwardRef(({colors:e,selected:n,onSelectColor:t,limit:s="auto",sx:r,...u},f)=>{const c=typeof n=="string",a=h.useCallback(i=>{if(c)i!==n&&t(i);else{const g=n.includes(i)?n.filter(l=>l!==i):[...n,i];t(g)}},[t,n,c]);return o.jsx(y,{ref:f,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...s!=="auto"&&{width:s*36,justifyContent:"flex-end"},...r},...u,children:e.map(i=>{const g=c?n===i:n.includes(i);return o.jsx(Ke,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{a(i)},children:o.jsx(y,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:i,borderRadius:"50%",border:l=>`solid 1px ${Z(l.palette.grey[500],.16)}`,...g&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${Z(i,.48)}`,outline:`solid 2px ${Z(i,.08)}`,transition:l=>l.transitions.create("all",{duration:l.transitions.duration.shortest})}},children:o.jsx(G,{width:g?12:0,icon:"eva:checkmark-fill",sx:{color:l=>l.palette.getContrastText(i),transition:l=>l.transitions.create("all",{duration:l.transitions.duration.shortest})}})})},i)})})});Ae.propTypes={colors:x.oneOfType([x.string,x.arrayOf(x.string)]),limit:x.number,onSelectColor:x.func,selected:x.oneOfType([x.string,x.arrayOf(x.string)]),sx:x.object};const So=Ae;function Pe({colors:e,limit:n=3,sx:t}){const s=e.slice(0,n),r=e.length-n;return o.jsxs(y,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:t,children:[s.map((u,f)=>o.jsx(q,{sx:{ml:-.75,width:16,height:16,bgcolor:u,borderRadius:"50%",border:c=>`solid 2px ${c.palette.background.paper}`,boxShadow:c=>`inset -1px 1px 2px ${Z(c.palette.common.black,.24)}`}},u+f)),e.length>n&&o.jsx(q,{component:"span",sx:{typography:"subtitle2"},children:`+${r}`})]})}Pe.propTypes={colors:x.arrayOf(x.string),limit:x.number,sx:x.object};function Oe({product:e}){const n=o.jsx(xo,{variant:"filled",color:e.status==="sale"&&"error"||"info",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:e.status}),t=o.jsx(q,{component:"img",alt:e.name,src:e.cover,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),s=o.jsxs(k,{variant:"subtitle1",children:[o.jsx(k,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:e.priceSale&&Ce(e.priceSale)})," ",Ce(e.price)]});return o.jsxs(mo,{children:[o.jsxs(q,{sx:{pt:"100%",position:"relative"},children:[e.status&&n,t]}),o.jsxs(y,{spacing:2,sx:{p:3},children:[o.jsx(Ye,{color:"inherit",underline:"hover",variant:"subtitle2",noWrap:!0,children:e.name}),o.jsxs(y,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[o.jsx(Pe,{colors:e.colors}),s]})]})]})}Oe.propTypes={product:x.object};const wo=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function ko(){const[e,n]=h.useState(null),t=r=>{n(r.currentTarget)},s=()=>{n(null)};return o.jsxs(o.Fragment,{children:[o.jsxs(ue,{disableRipple:!0,color:"inherit",onClick:t,endIcon:o.jsx(G,{icon:e?"eva:chevron-up-fill":"eva:chevron-down-fill"}),children:["Sort By: ",o.jsx(k,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:"Newest"})]}),o.jsx(go,{open:!!e,anchorEl:e,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:{[`& .${Je.root}`]:{p:0}}}},children:wo.map(r=>o.jsx(Qe,{selected:r.value==="newest",onClick:s,children:r.label},r.value))})]})}const Io=ne(o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),No=ne(o.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Ao=I("span")({position:"relative",display:"flex"}),Po=I(Io)({transform:"scale(1)"}),Oo=I(No)(({theme:e,ownerState:n})=>d({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function $e(e){const{checked:n=!1,classes:t={},fontSize:s}=e,r=d({},e,{checked:n});return o.jsxs(Ao,{className:t.root,ownerState:r,children:[o.jsx(Po,{fontSize:s,className:t.background,ownerState:r}),o.jsx(Oo,{fontSize:s,className:t.dot,ownerState:r})]})}const $o=h.createContext(void 0),Me=$o;function Mo(){return h.useContext(Me)}function To(e){return he("MuiRadio",e)}const Vo=pe("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Re=Vo,zo=["checked","checkedIcon","color","icon","name","onChange","size","className"],Bo=e=>{const{classes:n,color:t,size:s}=e,r={root:["root",`color${K(t)}`,s!=="medium"&&`size${K(s)}`]};return d({},n,xe(r,To,n))},Lo=I(vo,{shouldForwardProp:e=>eo(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`color${K(t.color)}`]]}})(({theme:e,ownerState:n})=>d({color:(e.vars||e).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${n.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${Re.checked}`]:{color:(e.vars||e).palette[n.color].main}},{[`&.${Re.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Eo(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const Fe=o.jsx($e,{checked:!0}),Se=o.jsx($e,{}),Ho=h.forwardRef(function(n,t){var s,r;const u=fe({props:n,name:"MuiRadio"}),{checked:f,checkedIcon:c=Fe,color:a="primary",icon:i=Se,name:g,onChange:l,size:j="medium",className:R}=u,P=Y(u,zo),F=d({},u,{color:a,size:j}),m=Bo(F),w=Mo();let O=f;const b=oo(l,w&&w.onChange);let C=g;return w&&(typeof O>"u"&&(O=Eo(w.value,u.value)),typeof C>"u"&&(C=w.name)),o.jsx(Lo,d({type:"radio",icon:h.cloneElement(i,{fontSize:(s=Se.props.fontSize)!=null?s:j}),checkedIcon:h.cloneElement(c,{fontSize:(r=Fe.props.fontSize)!=null?r:j}),ownerState:F,classes:m,name:C,checked:O,onChange:b,ref:t,className:_(m.root,R)},P))}),le=Ho,Go=ne(o.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),_o=ne(o.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Do(e){return he("MuiRating",e)}const Uo=pe("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),X=Uo,Wo=["value"],Xo=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Zo(e,n,t){return e<n?n:e>t?t:e}function qo(e){const n=e.toString().split(".")[1];return n?n.length:0}function ce(e,n){if(e==null)return e;const t=Math.round(e/n)*n;return Number(t.toFixed(qo(n)))}const Ko=e=>{const{classes:n,size:t,readOnly:s,disabled:r,emptyValueFocused:u,focusVisible:f}=e,c={root:["root",`size${K(t)}`,r&&"disabled",f&&"focusVisible",s&&"readOnly"],label:["label","pristine"],labelEmptyValue:[u&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return xe(c,Do,n)},Yo=I("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${X.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${K(t.size)}`],t.readOnly&&n.readOnly]}})(({theme:e,ownerState:n})=>d({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${X.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${X.focusVisible} .${X.iconActive}`]:{outline:"1px solid #999"},[`& .${X.visuallyHidden}`]:jo},n.size==="small"&&{fontSize:e.typography.pxToRem(18)},n.size==="large"&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),Te=I("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:e})=>d({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Jo=I("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.icon,t.iconEmpty&&n.iconEmpty,t.iconFilled&&n.iconFilled,t.iconHover&&n.iconHover,t.iconFocus&&n.iconFocus,t.iconActive&&n.iconActive]}})(({theme:e,ownerState:n})=>d({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),Qo=I("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>no(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:t}=e;return[n.decimal,t&&n.iconActive]}})(({iconActive:e})=>d({position:"relative"},e&&{transform:"scale(1.2)"}));function en(e){const n=Y(e,Wo);return o.jsx("span",d({},n))}function we(e){const{classes:n,disabled:t,emptyIcon:s,focus:r,getLabelText:u,highlightSelectedOnly:f,hover:c,icon:a,IconContainerComponent:i,isActive:g,itemValue:l,labelProps:j,name:R,onBlur:P,onChange:F,onClick:m,onFocus:w,readOnly:O,ownerState:b,ratingValue:C,ratingValueRounded:te}=e,z=f?l===C:l<=C,J=l<=c,B=l<=r,se=l===te,D=me(),M=o.jsx(Jo,{as:i,value:l,className:_(n.icon,z?n.iconFilled:n.iconEmpty,J&&n.iconHover,B&&n.iconFocus,g&&n.iconActive),ownerState:d({},b,{iconEmpty:!z,iconFilled:z,iconHover:J,iconFocus:B,iconActive:g}),children:s&&!z?s:a});return O?o.jsx("span",d({},j,{children:M})):o.jsxs(h.Fragment,{children:[o.jsxs(Te,d({ownerState:d({},b,{emptyValueFocused:void 0}),htmlFor:D},j,{children:[M,o.jsx("span",{className:n.visuallyHidden,children:u(l)})]})),o.jsx("input",{className:n.visuallyHidden,onFocus:w,onBlur:P,onChange:F,onClick:m,disabled:t,value:l,id:D,type:"radio",name:R,checked:se})]})}const on=o.jsx(Go,{fontSize:"inherit"}),nn=o.jsx(_o,{fontSize:"inherit"});function tn(e){return`${e} Star${e!==1?"s":""}`}const sn=h.forwardRef(function(n,t){const s=fe({name:"MuiRating",props:n}),{className:r,defaultValue:u=null,disabled:f=!1,emptyIcon:c=nn,emptyLabelText:a="Empty",getLabelText:i=tn,highlightSelectedOnly:g=!1,icon:l=on,IconContainerComponent:j=en,max:R=5,name:P,onChange:F,onChangeActive:m,onMouseLeave:w,onMouseMove:O,precision:b=1,readOnly:C=!1,size:te="medium",value:z}=s,J=Y(s,Xo),B=me(P),[se,D]=Ie({controlled:z,default:u,name:"Rating"}),M=ce(se,b),Be=to(),[{hover:N,focus:Q},U]=h.useState({hover:-1,focus:-1});let L=M;N!==-1&&(L=N),Q!==-1&&(L=Q);const{isFocusVisibleRef:ge,onBlur:Le,onFocus:Ee,ref:He}=so(),[Ge,re]=h.useState(!1),ve=h.useRef(),_e=Ne(He,ve,t),De=p=>{O&&O(p);const v=ve.current,{right:S,left:ee}=v.getBoundingClientRect(),{width:E}=v.firstChild.getBoundingClientRect();let H;Be.direction==="rtl"?H=(S-p.clientX)/(E*R):H=(p.clientX-ee)/(E*R);let A=ce(R*H+b/2,b);A=Zo(A,b,R),U(T=>T.hover===A&&T.focus===A?T:{hover:A,focus:A}),re(!1),m&&N!==A&&m(p,A)},Ue=p=>{w&&w(p);const v=-1;U({hover:v,focus:v}),m&&N!==v&&m(p,v)},be=p=>{let v=p.target.value===""?null:parseFloat(p.target.value);N!==-1&&(v=N),D(v),F&&F(p,v)},We=p=>{p.clientX===0&&p.clientY===0||(U({hover:-1,focus:-1}),D(null),F&&parseFloat(p.target.value)===M&&F(p,null))},Xe=p=>{Ee(p),ge.current===!0&&re(!0);const v=parseFloat(p.target.value);U(S=>({hover:S.hover,focus:v}))},Ze=p=>{if(N!==-1)return;Le(p),ge.current===!1&&re(!1);const v=-1;U(S=>({hover:S.hover,focus:v}))},[qe,ye]=h.useState(!1),W=d({},s,{defaultValue:u,disabled:f,emptyIcon:c,emptyLabelText:a,emptyValueFocused:qe,focusVisible:Ge,getLabelText:i,icon:l,IconContainerComponent:j,max:R,precision:b,readOnly:C,size:te}),$=Ko(W);return o.jsxs(Yo,d({ref:_e,onMouseMove:De,onMouseLeave:Ue,className:_($.root,r,C&&"MuiRating-readOnly"),ownerState:W,role:C?"img":null,"aria-label":C?i(L):null},J,{children:[Array.from(new Array(R)).map((p,v)=>{const S=v+1,ee={classes:$,disabled:f,emptyIcon:c,focus:Q,getLabelText:i,highlightSelectedOnly:g,hover:N,icon:l,IconContainerComponent:j,name:B,onBlur:Ze,onChange:be,onClick:We,onFocus:Xe,ratingValue:L,ratingValueRounded:M,readOnly:C,ownerState:W},E=S===Math.ceil(L)&&(N!==-1||Q!==-1);if(b<1){const H=Array.from(new Array(1/b));return o.jsx(Qo,{className:_($.decimal,E&&$.iconActive),ownerState:W,iconActive:E,children:H.map((A,T)=>{const ie=ce(S-1+(T+1)*b,b);return o.jsx(we,d({},ee,{isActive:!1,itemValue:ie,labelProps:{style:H.length-1===T?{}:{width:ie===L?`${(T+1)*b*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ie)})},S)}return o.jsx(we,d({},ee,{isActive:E,itemValue:S}),S)}),!C&&!f&&o.jsxs(Te,{className:_($.label,$.labelEmptyValue),ownerState:W,children:[o.jsx("input",{className:$.visuallyHidden,value:"",id:`${B}-empty`,type:"radio",name:B,checked:M==null,onFocus:()=>ye(!0),onBlur:()=>ye(!1),onChange:be}),o.jsx("span",{className:$.visuallyHidden,children:a})]})]}))}),ke=sn;function rn(e){return he("MuiFormGroup",e)}pe("MuiFormGroup",["root","row","error"]);const an=["className","row"],ln=e=>{const{classes:n,row:t,error:s}=e;return xe({root:["root",t&&"row",s&&"error"]},rn,n)},cn=I("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.row&&n.row]}})(({ownerState:e})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),dn=h.forwardRef(function(n,t){const s=fe({props:n,name:"MuiFormGroup"}),{className:r,row:u=!1}=s,f=Y(s,an),c=ro(),a=io({props:s,muiFormControl:c,states:["error"]}),i=d({},s,{row:u,error:a.error}),g=ln(i);return o.jsx(cn,d({className:_(g.root,r),ownerState:i,ref:t},f))}),Ve=dn,un=["actions","children","defaultValue","name","onChange","value"],pn=h.forwardRef(function(n,t){const{actions:s,children:r,defaultValue:u,name:f,onChange:c,value:a}=n,i=Y(n,un),g=h.useRef(null),[l,j]=Ie({controlled:a,default:u,name:"RadioGroup"});h.useImperativeHandle(s,()=>({focus:()=>{let m=g.current.querySelector("input:not(:disabled):checked");m||(m=g.current.querySelector("input:not(:disabled)")),m&&m.focus()}}),[]);const R=Ne(t,g),P=me(f),F=h.useMemo(()=>({name:P,onChange(m){j(m.target.value),c&&c(m,m.target.value)},value:l}),[P,c,j,l]);return o.jsx(Me.Provider,{value:F,children:o.jsx(Ve,d({role:"radiogroup",ref:R},i,{children:r}))})}),de=pn,hn=["Men","Women","Kids"],fn=["All","Shose","Apparel","Accessories"],xn=["up4Star","up3Star","up2Star","up1Star"],mn=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],gn=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function ze({openFilter:e,onOpenFilter:n,onCloseFilter:t}){const s=o.jsxs(y,{spacing:1,children:[o.jsx(k,{variant:"subtitle2",children:"Gender"}),o.jsx(Ve,{children:hn.map(a=>o.jsx(oe,{control:o.jsx(bo,{}),label:a},a))})]}),r=o.jsxs(y,{spacing:1,children:[o.jsx(k,{variant:"subtitle2",children:"Category"}),o.jsx(de,{children:fn.map(a=>o.jsx(oe,{value:a,control:o.jsx(le,{}),label:a},a))})]}),u=o.jsxs(y,{spacing:1,children:[o.jsx(k,{variant:"subtitle2",children:"Colors"}),o.jsx(So,{name:"colors",selected:[],colors:gn,onSelectColor:a=>[].includes(a),sx:{maxWidth:38*4}})]}),f=o.jsxs(y,{spacing:1,children:[o.jsx(k,{variant:"subtitle2",children:"Price"}),o.jsx(de,{children:mn.map(a=>o.jsx(oe,{value:a.value,control:o.jsx(le,{}),label:a.label},a.value))})]}),c=o.jsxs(y,{spacing:1,children:[o.jsx(k,{variant:"subtitle2",children:"Rating"}),o.jsx(de,{children:xn.map((a,i)=>o.jsx(oe,{value:a,control:o.jsx(le,{disableRipple:!0,color:"default",icon:o.jsx(ke,{readOnly:!0,value:4-i}),checkedIcon:o.jsx(ke,{readOnly:!0,value:4-i}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:{my:.5,borderRadius:1,"&:hover":{opacity:.48}}},a))})]});return o.jsxs(o.Fragment,{children:[o.jsx(ue,{disableRipple:!0,color:"inherit",endIcon:o.jsx(G,{icon:"ic:round-filter-list"}),onClick:n,children:"Filters "}),o.jsxs(ao,{anchor:"right",open:e,onClose:t,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[o.jsxs(y,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[o.jsx(k,{variant:"h6",sx:{ml:1},children:"Filters"}),o.jsx(lo,{onClick:t,children:o.jsx(G,{icon:"eva:close-fill"})})]}),o.jsx(co,{}),o.jsx(uo,{children:o.jsxs(y,{spacing:3,sx:{p:3},children:[s,r,u,f,c]})}),o.jsx(q,{sx:{p:3},children:o.jsx(ue,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",startIcon:o.jsx(G,{icon:"ic:round-clear-all"}),children:"Clear All"})})]})]})}ze.propTypes={openFilter:x.bool,onOpenFilter:x.func,onCloseFilter:x.func};const vn=I("div")(({theme:e})=>({zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:e.spacing(16),height:e.spacing(5),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(1.25),boxShadow:e.customShadows.z20,color:e.palette.text.primary,backgroundColor:e.palette.background.paper,borderTopLeftRadius:Number(e.shape.borderRadius)*2,borderBottomLeftRadius:Number(e.shape.borderRadius)*2,transition:e.transitions.create("opacity"),"&:hover":{opacity:.72}}));function bn(){return o.jsx(vn,{children:o.jsx(po,{showZero:!0,badgeContent:0,color:"error",max:99,children:o.jsx(G,{icon:"eva:shopping-cart-fill",width:24,height:24})})})}function yn(){const[e,n]=h.useState(!1),t=()=>{n(!0)},s=()=>{n(!1)};return o.jsxs(yo,{children:[o.jsx(k,{variant:"h4",sx:{mb:5},children:"Products"}),o.jsx(y,{direction:"row",alignItems:"center",flexWrap:"wrap-reverse",justifyContent:"flex-end",sx:{mb:5},children:o.jsxs(y,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[o.jsx(ze,{openFilter:e,onOpenFilter:t,onCloseFilter:s}),o.jsx(ko,{})]})}),o.jsx(je,{container:!0,spacing:3,children:Fo.map(r=>o.jsx(je,{xs:12,sm:6,md:3,children:o.jsx(Oe,{product:r})},r.id))}),o.jsx(bn,{})]})}function On(){return o.jsxs(o.Fragment,{children:[o.jsx(ho,{children:o.jsx("title",{children:" Products | Travel Bio "})}),o.jsx(yn,{})]})}export{On as default};
