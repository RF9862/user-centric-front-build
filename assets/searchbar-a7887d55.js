import{j as e,m as o,l as r,I as i,n as l,o as c,k as t}from"./index-146de9b9.js";import{O as u}from"./OutlinedInput-ebdc6585.js";const x={Australia:{value:"AU",cities:["Sydney","Melbourne","Brisbane","Perth","Adelaide","Canberra","Hobart"]},Canada:{value:"CA",cities:["Ottawa"]},China:{value:"CN",cities:["Beijing"]},Germany:{value:"DE",cities:["Berlin"]},Japan:{value:"JP",cities:["Tokyo"]},Russia:{value:"RU",cities:["Moscow"]},"United Kingdom":{value:"GB",cities:["London"]},"United States":{value:"US",cities:["Anaconda","Chicago","New York City","Victoria","Washington","West York","Whitehouse","York"]},Vietnam:{value:"VN",cities:["Hanoi","Ho Chi Minh City"]}};function d({filterName:a,onFilterName:n}){return e.jsxs(o,{sx:{height:80,display:"flex",justifyContent:"space-between",p:s=>s.spacing(0,1,0,3)},children:[e.jsx(u,{value:a,onChange:n,placeholder:"Search...",startAdornment:e.jsx(r,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e.jsx(l,{title:"Filter list",children:e.jsx(c,{children:e.jsx(i,{icon:"ic:round-filter-list"})})})]})}d.propTypes={filterName:t.string,onFilterName:t.func};export{x as C,d as S};
