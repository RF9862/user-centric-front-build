import{f as w,j as e,P as $,T,k as i,r as g,e as N,d as B,o as P,I as j,z as D,c as I,a as Y,m as G,l as J,n as O,B as K,S as Q,W as X}from"./index-d917b12f.js";import{l as Z,L as ee}from"./label-2a67b98b.js";import{T as S,a as p,b as ne,c as se,d as te,e as re,f as ie,g as ae}from"./TableSortLabel-4c6ea20a.js";import{C as U}from"./Checkbox-5ba567b8.js";import{O as oe}from"./OutlinedInput-02c5df53.js";import{C as le}from"./Container-c919d409.js";import{C as ce}from"./Card-f01ef521.js";import"./Select-4a1f5fb4.js";import"./react-is.production.min-a192e302.js";import"./Menu-5906beb7.js";const y=[...Array(2)].map((n,s)=>({id:w.string.uuid(),avatarUrl:`/assets/images/avatars/avatar_${s+1}.jpg`,name:w.person.fullName(),email:w.internet.email(),score:"200",role:Z.sample(["Super Admin",""])}));function A({query:n}){return e.jsx(S,{children:e.jsx(p,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs($,{sx:{textAlign:"center"},children:[e.jsx(T,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(T,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}A.propTypes={query:i.string};function F({selected:n,name:s,avatarUrl:t,company:l,role:r,isVerified:c,status:h,handleClick:b}){const[a,f]=g.useState(null),m=C=>{f(C.currentTarget)},v=()=>{f(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(S,{hover:!0,tabIndex:-1,role:"checkbox",selected:n,children:[e.jsx(p,{padding:"checkbox",children:e.jsx(U,{disableRipple:!0,checked:n,onChange:b})}),e.jsx(p,{component:"th",scope:"row",padding:"none",children:e.jsxs(N,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(B,{alt:s,src:t}),e.jsx(T,{variant:"subtitle2",noWrap:!0,children:s})]})}),e.jsx(p,{children:l}),e.jsx(p,{children:r}),e.jsx(p,{align:"center",children:c?"Yes":"No"}),e.jsx(p,{children:e.jsx(ee,{color:h==="banned"&&"error"||"success",children:h})}),e.jsx(p,{align:"right",children:e.jsx(P,{onClick:m,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(D,{open:!!a,anchorEl:a,onClose:v,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(I,{onClick:v,children:[e.jsx(j,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(I,{onClick:v,sx:{color:"error.main"},children:[e.jsx(j,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}F.propTypes={avatarUrl:i.any,company:i.any,handleClick:i.func,isVerified:i.any,name:i.any,role:i.any,selected:i.any,status:i.string};const de={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function he(n,s,t){return n?Math.max(0,(1+n)*s-t):0}function R(n,s,t){return n[t]===null?1:s[t]===null||s[t]<n[t]?-1:s[t]>n[t]?1:0}function pe(n,s){return n==="desc"?(t,l)=>R(t,l,s):(t,l)=>-R(t,l,s)}function xe({inputData:n,comparator:s,filterName:t}){const l=n.map((r,c)=>[r,c]);return l.sort((r,c)=>{const h=s(r[0],c[0]);return h!==0?h:r[1]-c[1]}),n=l.map(r=>r[0]),t&&(n=n.filter(r=>r.name.toLowerCase().indexOf(t.toLowerCase())!==-1)),n}function L({order:n,orderBy:s,rowCount:t,headLabel:l,numSelected:r,onRequestSort:c,onSelectAllClick:h}){const b=a=>f=>{c(f,a)};return e.jsx(ne,{children:e.jsxs(S,{children:[e.jsx(p,{padding:"checkbox",children:e.jsx(U,{indeterminate:r>0&&r<t,checked:t>0&&r===t,onChange:h})}),l.map(a=>e.jsx(p,{align:a.align||"left",sortDirection:s===a.id?n:!1,sx:{width:a.width,minWidth:a.minWidth},children:e.jsxs(se,{hideSortIcon:!0,active:s===a.id,direction:s===a.id?n:"asc",onClick:b(a.id),children:[a.label,s===a.id?e.jsx(Y,{sx:{...de},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))]})})}L.propTypes={order:i.oneOf(["asc","desc"]),orderBy:i.string,rowCount:i.number,headLabel:i.array,numSelected:i.number,onRequestSort:i.func,onSelectAllClick:i.func};function E({emptyRows:n,height:s}){return n?e.jsx(S,{sx:{...s&&{height:s*n}},children:e.jsx(p,{colSpan:9})}):null}E.propTypes={emptyRows:i.number,height:i.number};function V({numSelected:n,filterName:s,onFilterName:t}){return e.jsxs(G,{sx:{height:96,display:"flex",justifyContent:"space-between",p:l=>l.spacing(0,1,0,3),...n>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[n>0?e.jsxs(T,{component:"div",variant:"subtitle1",children:[n," selected"]}):e.jsx(oe,{value:s,onChange:t,placeholder:"Search user...",startAdornment:e.jsx(J,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),n>0?e.jsx(O,{title:"Delete",children:e.jsx(P,{children:e.jsx(j,{icon:"eva:trash-2-fill"})})}):e.jsx(O,{title:"Filter list",children:e.jsx(P,{children:e.jsx(j,{icon:"ic:round-filter-list"})})})]})}V.propTypes={numSelected:i.number,filterName:i.string,onFilterName:i.func};function ue(){const[n,s]=g.useState(0),[t,l]=g.useState("asc"),[r,c]=g.useState([]),[h,b]=g.useState("name"),[a,f]=g.useState(""),[m,v]=g.useState(5),C=(o,d)=>{d!==""&&(l(h===d&&t==="asc"?"desc":"asc"),b(d))},W=o=>{if(o.target.checked){const d=y.map(x=>x.name);c(d);return}c([])},q=(o,d)=>{const x=r.indexOf(d);let u=[];x===-1?u=u.concat(r,d):x===0?u=u.concat(r.slice(1)):x===r.length-1?u=u.concat(r.slice(0,-1)):x>0&&(u=u.concat(r.slice(0,x),r.slice(x+1))),c(u)},z=(o,d)=>{s(d)},M=o=>{s(0),v(parseInt(o.target.value,10))},H=o=>{s(0),f(o.target.value)},k=xe({inputData:y,comparator:pe(t,h),filterName:a}),_=!k.length&&!!a;return e.jsxs(le,{children:[e.jsxs(N,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(T,{variant:"h4",children:"Users"}),e.jsx(K,{variant:"contained",color:"inherit",startIcon:e.jsx(j,{icon:"eva:plus-fill"}),children:"New User"})]}),e.jsxs(ce,{children:[e.jsx(V,{numSelected:r.length,filterName:a,onFilterName:H}),e.jsx(Q,{children:e.jsx(te,{sx:{overflow:"unset"},children:e.jsxs(re,{sx:{minWidth:800},children:[e.jsx(L,{order:t,orderBy:h,rowCount:y.length,numSelected:r.length,onRequestSort:C,onSelectAllClick:W,headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),e.jsxs(ie,{children:[k.slice(n*m,n*m+m).map(o=>e.jsx(F,{name:o.name,role:o.role,status:o.status,company:o.company,avatarUrl:o.avatarUrl,isVerified:o.isVerified,selected:r.indexOf(o.name)!==-1,handleClick:d=>q(d,o.name)},o.id)),e.jsx(E,{height:77,emptyRows:he(n,m,y.length)}),_&&e.jsx(A,{query:a})]})]})})}),e.jsx(ae,{page:n,component:"div",count:y.length,rowsPerPage:m,onPageChange:z,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:M})]})]})}function we(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("title",{children:" User | Travel Bio "})}),e.jsx(ue,{})]})}export{we as default};
