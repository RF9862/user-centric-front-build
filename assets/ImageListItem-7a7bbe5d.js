import{p as C,q as $,r,s as M,_ as o,u as R,v as E,j as L,w,x as N}from"./index-ea385927.js";import"./react-is.production.min-a192e302.js";import{i as j}from"./isMuiElement-a9014b0f.js";function S(t){return C("MuiImageList",t)}$("MuiImageList",["root","masonry","quilted","standard","woven"]);const U=r.createContext({}),b=U,k=["children","className","cols","component","rowHeight","gap","style","variant"],_=t=>{const{classes:e,variant:s}=t;return N({root:["root",s]},S,e)},P=M("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant]]}})(({ownerState:t})=>o({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},t.variant==="masonry"&&{display:"block"})),q=r.forwardRef(function(e,s){const a=R({props:e,name:"MuiImageList"}),{children:y,className:h,cols:g=2,component:d="ul",rowHeight:l="auto",gap:m=4,style:v,variant:n="standard"}=a,p=E(a,k),i=r.useMemo(()=>({rowHeight:l,gap:m,variant:n}),[l,m,n]);r.useEffect(()=>{},[]);const I=n==="masonry"?o({columnCount:g,columnGap:m},v):o({gridTemplateColumns:`repeat(${g}, 1fr)`,gap:m},v),f=o({},a,{component:d,gap:m,rowHeight:l,variant:n}),c=_(f);return L.jsx(P,o({as:d,className:w(c.root,c[n],h),ref:s,style:I,ownerState:f},p,{children:L.jsx(b.Provider,{value:i,children:y})}))}),Y=q;function H(t){return C("MuiImageListItem",t)}const G=$("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),x=G,T=["children","className","cols","component","rows","style"],V=t=>{const{classes:e,variant:s}=t;return N({root:["root",s],img:["img"]},H,e)},W=M("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${x.img}`]:e.img},e.root,e[s.variant]]}})(({ownerState:t})=>o({display:"block",position:"relative"},t.variant==="standard"&&{display:"flex",flexDirection:"column"},t.variant==="woven"&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${x.img}`]:o({objectFit:"cover",width:"100%",height:"100%",display:"block"},t.variant==="standard"&&{height:"auto",flexGrow:1})})),B=r.forwardRef(function(e,s){const a=R({props:e,name:"MuiImageListItem"}),{children:y,className:h,cols:g=1,component:d="li",rows:l=1,style:m}=a,v=E(a,T),{rowHeight:n="auto",gap:p,variant:i}=r.useContext(b);let I="auto";i==="woven"?I=void 0:n!=="auto"&&(I=n*l+p*(l-1));const f=o({},a,{cols:g,component:d,gap:p,rowHeight:n,rows:l,variant:i}),c=V(f);return L.jsx(W,o({as:d,className:w(c.root,c[i],h),ref:s,style:o({height:I,gridColumnEnd:i!=="masonry"?`span ${g}`:void 0,gridRowEnd:i!=="masonry"?`span ${l}`:void 0,marginBottom:i==="masonry"?p:void 0,breakInside:i==="masonry"?"avoid":void 0},m),ownerState:f},v,{children:r.Children.map(y,u=>r.isValidElement(u)?u.type==="img"||j(u,["Image"])?r.cloneElement(u,{className:w(c.img,u.props.className)}):u:null)}))}),z=B;export{Y as I,z as a};
