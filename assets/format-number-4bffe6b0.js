import{_ as z,a7 as le,a8 as ae,a9 as ce,r as k,aa as ue,ab as fe,v as de,j as Z,w as pe,x as me,p as be,s as ge,u as he,C as _e,D as xe}from"./index-b6b45729.js";import{i as ye}from"./isMuiElement-97e2ddb3.js";const $e=(i,r)=>i.filter(c=>r.includes(c)),T=(i,r,c)=>{const p=i.keys[0];Array.isArray(r)?r.forEach((d,f)=>{c((g,m)=>{f<=i.keys.length-1&&(f===0?Object.assign(g,m):g[i.up(i.keys[f])]=m)},d)}):r&&typeof r=="object"?(Object.keys(r).length>i.keys.length?i.keys:$e(i.keys,Object.keys(r))).forEach(f=>{if(i.keys.indexOf(f)!==-1){const g=r[f];g!==void 0&&c((m,G)=>{p===f?Object.assign(m,G):m[i.up(f)]=G},g)}}):(typeof r=="number"||typeof r=="string")&&c((d,f)=>{Object.assign(d,f)},r)};function E(i){return i?`Level${i}`:""}function L(i){return i.unstable_level>0&&i.container}function Y(i){return function(c){return`var(--Grid-${c}Spacing${E(i.unstable_level)})`}}function q(i){return function(c){return i.unstable_level===0?`var(--Grid-${c}Spacing)`:`var(--Grid-${c}Spacing${E(i.unstable_level-1)})`}}function A(i){return i.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${E(i.unstable_level-1)})`}const ve=({theme:i,ownerState:r})=>{const c=Y(r),p={};return T(i.breakpoints,r.gridSize,(d,f)=>{let g={};f===!0&&(g={flexBasis:0,flexGrow:1,maxWidth:"100%"}),f==="auto"&&(g={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof f=="number"&&(g={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${f} / ${A(r)}${L(r)?` + ${c("column")}`:""})`}),d(p,g)}),p},we=({theme:i,ownerState:r})=>{const c={};return T(i.breakpoints,r.gridOffset,(p,d)=>{let f={};d==="auto"&&(f={marginLeft:"auto"}),typeof d=="number"&&(f={marginLeft:d===0?"0px":`calc(100% * ${d} / ${A(r)})`}),p(c,f)}),c},Fe=({theme:i,ownerState:r})=>{if(!r.container)return{};const c=L(r)?{[`--Grid-columns${E(r.unstable_level)}`]:A(r)}:{"--Grid-columns":12};return T(i.breakpoints,r.columns,(p,d)=>{p(c,{[`--Grid-columns${E(r.unstable_level)}`]:d})}),c},Ne=({theme:i,ownerState:r})=>{if(!r.container)return{};const c=q(r),p=L(r)?{[`--Grid-rowSpacing${E(r.unstable_level)}`]:c("row")}:{};return T(i.breakpoints,r.rowSpacing,(d,f)=>{var g;d(p,{[`--Grid-rowSpacing${E(r.unstable_level)}`]:typeof f=="string"?f:(g=i.spacing)==null?void 0:g.call(i,f)})}),p},Se=({theme:i,ownerState:r})=>{if(!r.container)return{};const c=q(r),p=L(r)?{[`--Grid-columnSpacing${E(r.unstable_level)}`]:c("column")}:{};return T(i.breakpoints,r.columnSpacing,(d,f)=>{var g;d(p,{[`--Grid-columnSpacing${E(r.unstable_level)}`]:typeof f=="string"?f:(g=i.spacing)==null?void 0:g.call(i,f)})}),p},Ge=({theme:i,ownerState:r})=>{if(!r.container)return{};const c={};return T(i.breakpoints,r.direction,(p,d)=>{p(c,{flexDirection:d})}),c},Oe=({ownerState:i})=>{const r=Y(i),c=q(i);return z({minWidth:0,boxSizing:"border-box"},i.container&&z({display:"flex",flexWrap:"wrap"},i.wrap&&i.wrap!=="wrap"&&{flexWrap:i.wrap},{margin:`calc(${r("row")} / -2) calc(${r("column")} / -2)`},i.disableEqualOverflow&&{margin:`calc(${r("row")} * -1) 0px 0px calc(${r("column")} * -1)`}),(!i.container||L(i))&&z({padding:`calc(${c("row")} / 2) calc(${c("column")} / 2)`},(i.disableEqualOverflow||i.parentDisableEqualOverflow)&&{padding:`${c("row")} 0px 0px ${c("column")}`}))},Ee=i=>{const r=[];return Object.entries(i).forEach(([c,p])=>{p!==!1&&p!==void 0&&r.push(`grid-${c}-${String(p)}`)}),r},Be=(i,r="xs")=>{function c(p){return p===void 0?!1:typeof p=="string"&&!Number.isNaN(Number(p))||typeof p=="number"&&p>0}if(c(i))return[`spacing-${r}-${String(i)}`];if(typeof i=="object"&&!Array.isArray(i)){const p=[];return Object.entries(i).forEach(([d,f])=>{c(f)&&p.push(`spacing-${d}-${String(f)}`)}),p}return[]},Me=i=>i===void 0?[]:typeof i=="object"?Object.entries(i).map(([r,c])=>`direction-${r}-${c}`):[`direction-xs-${String(i)}`],Pe=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],ke=le(),Te=ae("div",{name:"MuiGrid",slot:"Root",overridesResolver:(i,r)=>r.root});function je(i){return ce({props:i,name:"MuiGrid",defaultTheme:ke})}function Ce(i={}){const{createStyledComponent:r=Te,useThemeProps:c=je,componentName:p="MuiGrid"}=i,d=k.createContext(void 0),f=(G,e)=>{const{container:n,direction:l,spacing:o,wrap:t,gridSize:s}=G,a={root:["root",n&&"container",t!=="wrap"&&`wrap-xs-${String(t)}`,...Me(l),...Ee(s),...n?Be(o,e.breakpoints.keys[0]):[]]};return me(a,u=>be(p,u),{})},g=r(Fe,Se,Ne,ve,Ge,Oe,we),m=k.forwardRef(function(e,n){var l,o,t,s,a,u,h,b;const x=ue(),O=c(e),y=fe(O),w=k.useContext(d),{className:$,children:S,columns:_=12,container:v=!1,component:j="div",direction:R="row",wrap:F="wrap",spacing:M=0,rowSpacing:X=M,columnSpacing:ee=M,disableEqualOverflow:I,unstable_level:B=0}=y,re=de(y,Pe);let C=I;B&&I!==void 0&&(C=e.disableEqualOverflow);const V={},W={},K={};Object.entries(re).forEach(([N,P])=>{x.breakpoints.values[N]!==void 0?V[N]=P:x.breakpoints.values[N.replace("Offset","")]!==void 0?W[N.replace("Offset","")]=P:K[N]=P});const ne=(l=e.columns)!=null?l:B?void 0:_,te=(o=e.spacing)!=null?o:B?void 0:M,ie=(t=(s=e.rowSpacing)!=null?s:e.spacing)!=null?t:B?void 0:X,oe=(a=(u=e.columnSpacing)!=null?u:e.spacing)!=null?a:B?void 0:ee,U=z({},y,{level:B,columns:ne,container:v,direction:R,wrap:F,spacing:te,rowSpacing:ie,columnSpacing:oe,gridSize:V,gridOffset:W,disableEqualOverflow:(h=(b=C)!=null?b:w)!=null?h:!1,parentDisableEqualOverflow:w}),se=f(U,x);let D=Z.jsx(g,z({ref:n,as:j,ownerState:U,className:pe(se.root,$)},K,{children:k.Children.map(S,N=>{if(k.isValidElement(N)&&ye(N,["Grid"])){var P;return k.cloneElement(N,{unstable_level:(P=N.props.unstable_level)!=null?P:B+1})}return N})}));return C!==void 0&&C!==(w??!1)&&(D=Z.jsx(d.Provider,{value:C,children:D})),D});return m.muiName="Grid",m}const ze=Ce({createStyledComponent:ge("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(i,r)=>r.root}),componentName:"MuiGrid2",useThemeProps:i=>he({props:i,name:"MuiGrid2"})}),qe=ze;var H={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(i){(function(r,c){i.exports?i.exports=c():r.numeral=c()})(_e,function(){var r,c,p="2.0.6",d={},f={},g={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},m={currentLocale:g.currentLocale,zeroFormat:g.zeroFormat,nullFormat:g.nullFormat,defaultFormat:g.defaultFormat,scalePercentBy100:g.scalePercentBy100};function G(e,n){this._input=e,this._value=n}return r=function(e){var n,l,o,t;if(r.isNumeral(e))n=e.value();else if(e===0||typeof e>"u")n=0;else if(e===null||c.isNaN(e))n=null;else if(typeof e=="string")if(m.zeroFormat&&e===m.zeroFormat)n=0;else if(m.nullFormat&&e===m.nullFormat||!e.replace(/[^0-9]+/g,"").length)n=null;else{for(l in d)if(t=typeof d[l].regexps.unformat=="function"?d[l].regexps.unformat():d[l].regexps.unformat,t&&e.match(t)){o=d[l].unformat;break}o=o||r._.stringToNumber,n=o(e)}else n=Number(e)||null;return new G(e,n)},r.version=p,r.isNumeral=function(e){return e instanceof G},r._=c={numberToFormat:function(e,n,l){var o=f[r.options.currentLocale],t=!1,s=!1,a=0,u="",h=1e12,b=1e9,x=1e6,O=1e3,y="",w=!1,$,S,_,v,j,R,F;if(e=e||0,S=Math.abs(e),r._.includes(n,"(")?(t=!0,n=n.replace(/[\(|\)]/g,"")):(r._.includes(n,"+")||r._.includes(n,"-"))&&(j=r._.includes(n,"+")?n.indexOf("+"):e<0?n.indexOf("-"):-1,n=n.replace(/[\+|\-]/g,"")),r._.includes(n,"a")&&($=n.match(/a(k|m|b|t)?/),$=$?$[1]:!1,r._.includes(n," a")&&(u=" "),n=n.replace(new RegExp(u+"a[kmbt]?"),""),S>=h&&!$||$==="t"?(u+=o.abbreviations.trillion,e=e/h):S<h&&S>=b&&!$||$==="b"?(u+=o.abbreviations.billion,e=e/b):S<b&&S>=x&&!$||$==="m"?(u+=o.abbreviations.million,e=e/x):(S<x&&S>=O&&!$||$==="k")&&(u+=o.abbreviations.thousand,e=e/O)),r._.includes(n,"[.]")&&(s=!0,n=n.replace("[.]",".")),_=e.toString().split(".")[0],v=n.split(".")[1],R=n.indexOf(","),a=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length,v?(r._.includes(v,"[")?(v=v.replace("]",""),v=v.split("["),y=r._.toFixed(e,v[0].length+v[1].length,l,v[1].length)):y=r._.toFixed(e,v.length,l),_=y.split(".")[0],r._.includes(y,".")?y=o.delimiters.decimal+y.split(".")[1]:y="",s&&Number(y.slice(1))===0&&(y="")):_=r._.toFixed(e,0,l),u&&!$&&Number(_)>=1e3&&u!==o.abbreviations.trillion)switch(_=String(Number(_)/1e3),u){case o.abbreviations.thousand:u=o.abbreviations.million;break;case o.abbreviations.million:u=o.abbreviations.billion;break;case o.abbreviations.billion:u=o.abbreviations.trillion;break}if(r._.includes(_,"-")&&(_=_.slice(1),w=!0),_.length<a)for(var M=a-_.length;M>0;M--)_="0"+_;return R>-1&&(_=_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o.delimiters.thousands)),n.indexOf(".")===0&&(_=""),F=_+y+(u||""),t?F=(t&&w?"(":"")+F+(t&&w?")":""):j>=0?F=j===0?(w?"-":"+")+F:F+(w?"-":"+"):w&&(F="-"+F),F},stringToNumber:function(e){var n=f[m.currentLocale],l=e,o={thousand:3,million:6,billion:9,trillion:12},t,s,a;if(m.zeroFormat&&e===m.zeroFormat)s=0;else if(m.nullFormat&&e===m.nullFormat||!e.replace(/[^0-9]+/g,"").length)s=null;else{s=1,n.delimiters.decimal!=="."&&(e=e.replace(/\./g,"").replace(n.delimiters.decimal,"."));for(t in o)if(a=new RegExp("[^a-zA-Z]"+n.abbreviations[t]+"(?:\\)|(\\"+n.currency.symbol+")?(?:\\))?)?$"),l.match(a)){s*=Math.pow(10,o[t]);break}s*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),s*=Number(e)}return s},isNaN:function(e){return typeof e=="number"&&isNaN(e)},includes:function(e,n){return e.indexOf(n)!==-1},insert:function(e,n,l){return e.slice(0,l)+n+e.slice(l)},reduce:function(e,n){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof n!="function")throw new TypeError(n+" is not a function");var l=Object(e),o=l.length>>>0,t=0,s;if(arguments.length===3)s=arguments[2];else{for(;t<o&&!(t in l);)t++;if(t>=o)throw new TypeError("Reduce of empty array with no initial value");s=l[t++]}for(;t<o;t++)t in l&&(s=n(s,l[t],t,l));return s},multiplier:function(e){var n=e.toString().split(".");return n.length<2?1:Math.pow(10,n[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(n,l){var o=c.multiplier(l);return n>o?n:o},1)},toFixed:function(e,n,l,o){var t=e.toString().split("."),s=n-(o||0),a,u,h,b;return t.length===2?a=Math.min(Math.max(t[1].length,s),n):a=s,h=Math.pow(10,a),b=(l(e+"e+"+a)/h).toFixed(a),o>n-a&&(u=new RegExp("\\.?0{1,"+(o-(n-a))+"}$"),b=b.replace(u,"")),b}},r.options=m,r.formats=d,r.locales=f,r.locale=function(e){return e&&(m.currentLocale=e.toLowerCase()),m.currentLocale},r.localeData=function(e){if(!e)return f[m.currentLocale];if(e=e.toLowerCase(),!f[e])throw new Error("Unknown locale : "+e);return f[e]},r.reset=function(){for(var e in g)m[e]=g[e]},r.zeroFormat=function(e){m.zeroFormat=typeof e=="string"?e:null},r.nullFormat=function(e){m.nullFormat=typeof e=="string"?e:null},r.defaultFormat=function(e){m.defaultFormat=typeof e=="string"?e:"0.0"},r.register=function(e,n,l){if(n=n.toLowerCase(),this[e+"s"][n])throw new TypeError(n+" "+e+" already registered.");return this[e+"s"][n]=l,l},r.validate=function(e,n){var l,o,t,s,a,u,h,b;if(typeof e!="string"&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(e==="")return!1;try{h=r.localeData(n)}catch{h=r.localeData(r.locale())}return t=h.currency.symbol,a=h.abbreviations,l=h.delimiters.decimal,h.delimiters.thousands==="."?o="\\.":o=h.delimiters.thousands,b=e.match(/^[^\d]+/),b!==null&&(e=e.substr(1),b[0]!==t)||(b=e.match(/[^\d]+$/),b!==null&&(e=e.slice(0,-1),b[0]!==a.thousand&&b[0]!==a.million&&b[0]!==a.billion&&b[0]!==a.trillion))?!1:(u=new RegExp(o+"{2}"),e.match(/[^\d.,]/g)?!1:(s=e.split(l),s.length>2?!1:s.length<2?!!s[0].match(/^\d+.*\d$/)&&!s[0].match(u):s[0].length===1?!!s[0].match(/^\d+$/)&&!s[0].match(u)&&!!s[1].match(/^\d+$/):!!s[0].match(/^\d+.*\d$/)&&!s[0].match(u)&&!!s[1].match(/^\d+$/)))},r.fn=G.prototype={clone:function(){return r(this)},format:function(e,n){var l=this._value,o=e||m.defaultFormat,t,s,a;if(n=n||Math.round,l===0&&m.zeroFormat!==null)s=m.zeroFormat;else if(l===null&&m.nullFormat!==null)s=m.nullFormat;else{for(t in d)if(o.match(d[t].regexps.format)){a=d[t].format;break}a=a||r._.numberToFormat,s=a(l,o,n)}return s},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var n=c.correctionFactor.call(null,this._value,e);function l(o,t,s,a){return o+Math.round(n*t)}return this._value=c.reduce([this._value,e],l,0)/n,this},subtract:function(e){var n=c.correctionFactor.call(null,this._value,e);function l(o,t,s,a){return o-Math.round(n*t)}return this._value=c.reduce([e],l,Math.round(this._value*n))/n,this},multiply:function(e){function n(l,o,t,s){var a=c.correctionFactor(l,o);return Math.round(l*a)*Math.round(o*a)/Math.round(a*a)}return this._value=c.reduce([this._value,e],n,1),this},divide:function(e){function n(l,o,t,s){var a=c.correctionFactor(l,o);return Math.round(l*a)/Math.round(o*a)}return this._value=c.reduce([this._value,e],n),this},difference:function(e){return Math.abs(r(this._value).subtract(e).value())}},r.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var n=e%10;return~~(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th"},currency:{symbol:"$"}}),function(){r.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,n,l){var o=r._.includes(n," BPS")?" ":"",t;return e=e*1e4,n=n.replace(/\s?BPS/,""),t=r._.numberToFormat(e,n,l),r._.includes(t,")")?(t=t.split(""),t.splice(-1,0,o+"BPS"),t=t.join("")):t=t+o+"BPS",t},unformat:function(e){return+(r._.stringToNumber(e)*1e-4).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},l=e.suffixes.concat(n.suffixes.filter(function(t){return e.suffixes.indexOf(t)<0})),o=l.join("|");o="("+o.replace("B","B(?!PS)")+")",r.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(t,s,a){var u,h=r._.includes(s,"ib")?n:e,b=r._.includes(s," b")||r._.includes(s," ib")?" ":"",x,O,y;for(s=s.replace(/\s?i?b/,""),x=0;x<=h.suffixes.length;x++)if(O=Math.pow(h.base,x),y=Math.pow(h.base,x+1),t===null||t===0||t>=O&&t<y){b+=h.suffixes[x],O>0&&(t=t/O);break}return u=r._.numberToFormat(t,s,a),u+b},unformat:function(t){var s=r._.stringToNumber(t),a,u;if(s){for(a=e.suffixes.length-1;a>=0;a--){if(r._.includes(t,e.suffixes[a])){u=Math.pow(e.base,a);break}if(r._.includes(t,n.suffixes[a])){u=Math.pow(n.base,a);break}}s*=u||1}return s}})}(),function(){r.register("format","currency",{regexps:{format:/(\$)/},format:function(e,n,l){var o=r.locales[r.options.currentLocale],t={before:n.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:n.match(/([\+|\-|\)|\s|\$]*)$/)[0]},s,a,u;for(n=n.replace(/\s?\$\s?/,""),s=r._.numberToFormat(e,n,l),e>=0?(t.before=t.before.replace(/[\-\(]/,""),t.after=t.after.replace(/[\-\)]/,"")):e<0&&!r._.includes(t.before,"-")&&!r._.includes(t.before,"(")&&(t.before="-"+t.before),u=0;u<t.before.length;u++)switch(a=t.before[u],a){case"$":s=r._.insert(s,o.currency.symbol,u);break;case" ":s=r._.insert(s," ",u+o.currency.symbol.length-1);break}for(u=t.after.length-1;u>=0;u--)switch(a=t.after[u],a){case"$":s=u===t.after.length-1?s+o.currency.symbol:r._.insert(s,o.currency.symbol,-(t.after.length-(1+u)));break;case" ":s=u===t.after.length-1?s+" ":r._.insert(s," ",-(t.after.length-(1+u)+o.currency.symbol.length-1));break}return s}})}(),function(){r.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,n,l){var o,t=typeof e=="number"&&!r._.isNaN(e)?e.toExponential():"0e+0",s=t.split("e");return n=n.replace(/e[\+|\-]{1}0/,""),o=r._.numberToFormat(Number(s[0]),n,l),o+"e"+s[1]},unformat:function(e){var n=r._.includes(e,"e+")?e.split("e+"):e.split("e-"),l=Number(n[0]),o=Number(n[1]);o=r._.includes(e,"e-")?o*=-1:o;function t(s,a,u,h){var b=r._.correctionFactor(s,a),x=s*b*(a*b)/(b*b);return x}return r._.reduce([l,Math.pow(10,o)],t,1)}})}(),function(){r.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,n,l){var o=r.locales[r.options.currentLocale],t,s=r._.includes(n," o")?" ":"";return n=n.replace(/\s?o/,""),s+=o.ordinal(e),t=r._.numberToFormat(e,n,l),t+s}})}(),function(){r.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,n,l){var o=r._.includes(n," %")?" ":"",t;return r.options.scalePercentBy100&&(e=e*100),n=n.replace(/\s?\%/,""),t=r._.numberToFormat(e,n,l),r._.includes(t,")")?(t=t.split(""),t.splice(-1,0,o+"%"),t=t.join("")):t=t+o+"%",t},unformat:function(e){var n=r._.stringToNumber(e);return r.options.scalePercentBy100?n*.01:n}})}(),function(){r.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,n,l){var o=Math.floor(e/60/60),t=Math.floor((e-o*60*60)/60),s=Math.round(e-o*60*60-t*60);return o+":"+(t<10?"0"+t:t)+":"+(s<10?"0"+s:s)},unformat:function(e){var n=e.split(":"),l=0;return n.length===3?(l=l+Number(n[0])*60*60,l=l+Number(n[1])*60,l=l+Number(n[2])):n.length===2&&(l=l+Number(n[0])*60,l=l+Number(n[1])),Number(l)}})}(),r})})(H);var Le=H.exports;const J=xe(Le);function Ae(i){const r=i?J(i).format("$0,0.00"):"";return Q(r,".00")}function Ie(i){const r=i?J(i).format("0.00a"):"";return Q(r,".00")}function Q(i,r=".00"){return i.includes(r)?i.replace(r,""):i}export{qe as G,Ae as a,Ie as f};
