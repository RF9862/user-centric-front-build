import{av as le,aw as Le,ax as ae,ay as X,az as L,aA as Z,aB as mt,D as Et,r as d}from"./index-2f581328.js";function Mr(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var St=Array.isArray;const ie=St;var _t=1/0,ir=le?le.prototype:void 0,or=ir?ir.toString:void 0;function Rr(e){if(typeof e=="string")return e;if(ie(e))return Mr(e,Rr)+"";if(Le(e))return or?or.call(e):"";var r=e+"";return r=="0"&&1/e==-_t?"-0":r}var At="[object AsyncFunction]",$t="[object Function]",Ot="[object GeneratorFunction]",jt="[object Proxy]";function Pr(e){if(!ae(e))return!1;var r=X(e);return r==$t||r==Ot||r==At||r==jt}var It=L["__core-js_shared__"];const Ae=It;var ur=function(){var e=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function wt(e){return!!ur&&ur in e}var Ct=Function.prototype,Ft=Ct.toString;function K(e){if(e!=null){try{return Ft.call(e)}catch{}try{return e+""}catch{}}return""}var Mt=/[\\^$.*+?()[\]{}|]/g,Rt=/^\[object .+?Constructor\]$/,Pt=Function.prototype,Lt=Object.prototype,Dt=Pt.toString,xt=Lt.hasOwnProperty,Vt=RegExp("^"+Dt.call(xt).replace(Mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ut(e){if(!ae(e)||wt(e))return!1;var r=Pr(e)?Vt:Rt;return r.test(K(e))}function Nt(e,r){return e==null?void 0:e[r]}function W(e,r){var t=Nt(e,r);return Ut(t)?t:void 0}var Bt=W(L,"WeakMap");const Ie=Bt;var sr=Object.create,Gt=function(){function e(){}return function(r){if(!ae(r))return{};if(sr)return sr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Ht=Gt;function Lr(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}var zt=function(){try{var e=W(Object,"defineProperty");return e({},"",{}),e}catch{}}();const cr=zt;function Kt(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Wt=9007199254740991,kt=/^(?:0|[1-9]\d*)$/;function Yt(e,r){var t=typeof e;return r=r??Wt,!!r&&(t=="number"||t!="symbol"&&kt.test(e))&&e>-1&&e%1==0&&e<r}function Dr(e,r,t){r=="__proto__"&&cr?cr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}function xr(e,r){return e===r||e!==e&&r!==r}var qt=Object.prototype,Xt=qt.hasOwnProperty;function Vr(e,r,t){var n=e[r];(!(Xt.call(e,r)&&xr(n,t))||t===void 0&&!(r in e))&&Dr(e,r,t)}function de(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var p=r[o],E=n?n(t[p],e[p],p,t,e):void 0;E===void 0&&(E=e[p]),i?Dr(t,p,E):Vr(t,p,E)}return t}var Zt=9007199254740991;function Ur(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Zt}function Nr(e){return e!=null&&Ur(e.length)&&!Pr(e)}var Jt=Object.prototype;function De(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Jt;return e===t}function Qt(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var en="[object Arguments]";function lr(e){return Z(e)&&X(e)==en}var Br=Object.prototype,rn=Br.hasOwnProperty,tn=Br.propertyIsEnumerable,nn=lr(function(){return arguments}())?lr:function(e){return Z(e)&&rn.call(e,"callee")&&!tn.call(e,"callee")};const an=nn;function on(){return!1}var Gr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fr=Gr&&typeof module=="object"&&module&&!module.nodeType&&module,un=fr&&fr.exports===Gr,dr=un?L.Buffer:void 0,sn=dr?dr.isBuffer:void 0,cn=sn||on;const Hr=cn;var ln="[object Arguments]",fn="[object Array]",dn="[object Boolean]",pn="[object Date]",hn="[object Error]",vn="[object Function]",yn="[object Map]",gn="[object Number]",bn="[object Object]",Tn="[object RegExp]",mn="[object Set]",En="[object String]",Sn="[object WeakMap]",_n="[object ArrayBuffer]",An="[object DataView]",$n="[object Float32Array]",On="[object Float64Array]",jn="[object Int8Array]",In="[object Int16Array]",wn="[object Int32Array]",Cn="[object Uint8Array]",Fn="[object Uint8ClampedArray]",Mn="[object Uint16Array]",Rn="[object Uint32Array]",m={};m[$n]=m[On]=m[jn]=m[In]=m[wn]=m[Cn]=m[Fn]=m[Mn]=m[Rn]=!0;m[ln]=m[fn]=m[_n]=m[dn]=m[An]=m[pn]=m[hn]=m[vn]=m[yn]=m[gn]=m[bn]=m[Tn]=m[mn]=m[En]=m[Sn]=!1;function Pn(e){return Z(e)&&Ur(e.length)&&!!m[X(e)]}function xe(e){return function(r){return e(r)}}var zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=zr&&typeof module=="object"&&module&&!module.nodeType&&module,Ln=ee&&ee.exports===zr,$e=Ln&&mt.process,Dn=function(){try{var e=ee&&ee.require&&ee.require("util").types;return e||$e&&$e.binding&&$e.binding("util")}catch{}}();const q=Dn;var pr=q&&q.isTypedArray,xn=pr?xe(pr):Pn;const Vn=xn;var Un=Object.prototype,Nn=Un.hasOwnProperty;function Kr(e,r){var t=ie(e),n=!t&&an(e),i=!t&&!n&&Hr(e),o=!t&&!n&&!i&&Vn(e),s=t||n||i||o,p=s?Qt(e.length,String):[],E=p.length;for(var b in e)(r||Nn.call(e,b))&&!(s&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Yt(b,E)))&&p.push(b);return p}function Wr(e,r){return function(t){return e(r(t))}}var Bn=Wr(Object.keys,Object);const Gn=Bn;var Hn=Object.prototype,zn=Hn.hasOwnProperty;function Kn(e){if(!De(e))return Gn(e);var r=[];for(var t in Object(e))zn.call(e,t)&&t!="constructor"&&r.push(t);return r}function Ve(e){return Nr(e)?Kr(e):Kn(e)}function Wn(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var kn=Object.prototype,Yn=kn.hasOwnProperty;function qn(e){if(!ae(e))return Wn(e);var r=De(e),t=[];for(var n in e)n=="constructor"&&(r||!Yn.call(e,n))||t.push(n);return t}function Ue(e){return Nr(e)?Kr(e,!0):qn(e)}var Xn=W(Object,"create");const re=Xn;function Zn(){this.__data__=re?re(null):{},this.size=0}function Jn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Qn="__lodash_hash_undefined__",ea=Object.prototype,ra=ea.hasOwnProperty;function ta(e){var r=this.__data__;if(re){var t=r[e];return t===Qn?void 0:t}return ra.call(r,e)?r[e]:void 0}var na=Object.prototype,aa=na.hasOwnProperty;function ia(e){var r=this.__data__;return re?r[e]!==void 0:aa.call(r,e)}var oa="__lodash_hash_undefined__";function ua(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=re&&r===void 0?oa:r,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=Zn;z.prototype.delete=Jn;z.prototype.get=ta;z.prototype.has=ia;z.prototype.set=ua;function sa(){this.__data__=[],this.size=0}function pe(e,r){for(var t=e.length;t--;)if(xr(e[t][0],r))return t;return-1}var ca=Array.prototype,la=ca.splice;function fa(e){var r=this.__data__,t=pe(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():la.call(r,t,1),--this.size,!0}function da(e){var r=this.__data__,t=pe(r,e);return t<0?void 0:r[t][1]}function pa(e){return pe(this.__data__,e)>-1}function ha(e,r){var t=this.__data__,n=pe(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function D(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}D.prototype.clear=sa;D.prototype.delete=fa;D.prototype.get=da;D.prototype.has=pa;D.prototype.set=ha;var va=W(L,"Map");const te=va;function ya(){this.size=0,this.__data__={hash:new z,map:new(te||D),string:new z}}function ga(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function he(e,r){var t=e.__data__;return ga(r)?t[typeof r=="string"?"string":"hash"]:t.map}function ba(e){var r=he(this,e).delete(e);return this.size-=r?1:0,r}function Ta(e){return he(this,e).get(e)}function ma(e){return he(this,e).has(e)}function Ea(e,r){var t=he(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=ya;U.prototype.delete=ba;U.prototype.get=Ta;U.prototype.has=ma;U.prototype.set=Ea;var Sa="Expected a function";function Ne(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Sa);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Ne.Cache||U),t}Ne.Cache=U;var _a=500;function Aa(e){var r=Ne(e,function(n){return t.size===_a&&t.clear(),n}),t=r.cache;return r}var $a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oa=/\\(\\)?/g,ja=Aa(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace($a,function(t,n,i,o){r.push(i?o.replace(Oa,"$1"):n||t)}),r});const Ia=ja;function wa(e){return e==null?"":Rr(e)}var Ca=1/0;function Fa(e){if(typeof e=="string"||Le(e))return e;var r=e+"";return r=="0"&&1/e==-Ca?"-0":r}function kr(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Ma=Wr(Object.getPrototypeOf,Object);const Be=Ma;var Ra="[object Object]",Pa=Function.prototype,La=Object.prototype,Yr=Pa.toString,Da=La.hasOwnProperty,xa=Yr.call(Object);function hr(e){if(!Z(e)||X(e)!=Ra)return!1;var r=Be(e);if(r===null)return!0;var t=Da.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Yr.call(t)==xa}function Va(){this.__data__=new D,this.size=0}function Ua(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Na(e){return this.__data__.get(e)}function Ba(e){return this.__data__.has(e)}var Ga=200;function Ha(e,r){var t=this.__data__;if(t instanceof D){var n=t.__data__;if(!te||n.length<Ga-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function J(e){var r=this.__data__=new D(e);this.size=r.size}J.prototype.clear=Va;J.prototype.delete=Ua;J.prototype.get=Na;J.prototype.has=Ba;J.prototype.set=Ha;function za(e,r){return e&&de(r,Ve(r),e)}function Ka(e,r){return e&&de(r,Ue(r),e)}var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vr=qr&&typeof module=="object"&&module&&!module.nodeType&&module,Wa=vr&&vr.exports===qr,yr=Wa?L.Buffer:void 0,gr=yr?yr.allocUnsafe:void 0;function ka(e,r){if(r)return e.slice();var t=e.length,n=gr?gr(t):new e.constructor(t);return e.copy(n),n}function Ya(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function Xr(){return[]}var qa=Object.prototype,Xa=qa.propertyIsEnumerable,br=Object.getOwnPropertySymbols,Za=br?function(e){return e==null?[]:(e=Object(e),Ya(br(e),function(r){return Xa.call(e,r)}))}:Xr;const Ge=Za;function Ja(e,r){return de(e,Ge(e),r)}var Qa=Object.getOwnPropertySymbols,ei=Qa?function(e){for(var r=[];e;)kr(r,Ge(e)),e=Be(e);return r}:Xr;const Zr=ei;function ri(e,r){return de(e,Zr(e),r)}function Jr(e,r,t){var n=r(e);return ie(e)?n:kr(n,t(e))}function ti(e){return Jr(e,Ve,Ge)}function ni(e){return Jr(e,Ue,Zr)}var ai=W(L,"DataView");const we=ai;var ii=W(L,"Promise");const Ce=ii;var oi=W(L,"Set");const Fe=oi;var Tr="[object Map]",ui="[object Object]",mr="[object Promise]",Er="[object Set]",Sr="[object WeakMap]",_r="[object DataView]",si=K(we),ci=K(te),li=K(Ce),fi=K(Fe),di=K(Ie),B=X;(we&&B(new we(new ArrayBuffer(1)))!=_r||te&&B(new te)!=Tr||Ce&&B(Ce.resolve())!=mr||Fe&&B(new Fe)!=Er||Ie&&B(new Ie)!=Sr)&&(B=function(e){var r=X(e),t=r==ui?e.constructor:void 0,n=t?K(t):"";if(n)switch(n){case si:return _r;case ci:return Tr;case li:return mr;case fi:return Er;case di:return Sr}return r});const He=B;var pi=Object.prototype,hi=pi.hasOwnProperty;function vi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&hi.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var yi=L.Uint8Array;const Ar=yi;function ze(e){var r=new e.constructor(e.byteLength);return new Ar(r).set(new Ar(e)),r}function gi(e,r){var t=r?ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var bi=/\w*$/;function Ti(e){var r=new e.constructor(e.source,bi.exec(e));return r.lastIndex=e.lastIndex,r}var $r=le?le.prototype:void 0,Or=$r?$r.valueOf:void 0;function mi(e){return Or?Object(Or.call(e)):{}}function Ei(e,r){var t=r?ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Si="[object Boolean]",_i="[object Date]",Ai="[object Map]",$i="[object Number]",Oi="[object RegExp]",ji="[object Set]",Ii="[object String]",wi="[object Symbol]",Ci="[object ArrayBuffer]",Fi="[object DataView]",Mi="[object Float32Array]",Ri="[object Float64Array]",Pi="[object Int8Array]",Li="[object Int16Array]",Di="[object Int32Array]",xi="[object Uint8Array]",Vi="[object Uint8ClampedArray]",Ui="[object Uint16Array]",Ni="[object Uint32Array]";function Bi(e,r,t){var n=e.constructor;switch(r){case Ci:return ze(e);case Si:case _i:return new n(+e);case Fi:return gi(e,t);case Mi:case Ri:case Pi:case Li:case Di:case xi:case Vi:case Ui:case Ni:return Ei(e,t);case Ai:return new n;case $i:case Ii:return new n(e);case Oi:return Ti(e);case ji:return new n;case wi:return mi(e)}}function Gi(e){return typeof e.constructor=="function"&&!De(e)?Ht(Be(e)):{}}var Hi="[object Map]";function zi(e){return Z(e)&&He(e)==Hi}var jr=q&&q.isMap,Ki=jr?xe(jr):zi;const Wi=Ki;var ki="[object Set]";function Yi(e){return Z(e)&&He(e)==ki}var Ir=q&&q.isSet,qi=Ir?xe(Ir):Yi;const Xi=qi;var Zi=1,Ji=2,Qi=4,Qr="[object Arguments]",eo="[object Array]",ro="[object Boolean]",to="[object Date]",no="[object Error]",et="[object Function]",ao="[object GeneratorFunction]",io="[object Map]",oo="[object Number]",rt="[object Object]",uo="[object RegExp]",so="[object Set]",co="[object String]",lo="[object Symbol]",fo="[object WeakMap]",po="[object ArrayBuffer]",ho="[object DataView]",vo="[object Float32Array]",yo="[object Float64Array]",go="[object Int8Array]",bo="[object Int16Array]",To="[object Int32Array]",mo="[object Uint8Array]",Eo="[object Uint8ClampedArray]",So="[object Uint16Array]",_o="[object Uint32Array]",T={};T[Qr]=T[eo]=T[po]=T[ho]=T[ro]=T[to]=T[vo]=T[yo]=T[go]=T[bo]=T[To]=T[io]=T[oo]=T[rt]=T[uo]=T[so]=T[co]=T[lo]=T[mo]=T[Eo]=T[So]=T[_o]=!0;T[no]=T[et]=T[fo]=!1;function ce(e,r,t,n,i,o){var s,p=r&Zi,E=r&Ji,b=r&Qi;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ae(e))return e;var x=ie(e);if(x){if(s=vi(e),!p)return Lr(e,s)}else{var I=He(e),f=I==et||I==ao;if(Hr(e))return ka(e,p);if(I==rt||I==Qr||f&&!i){if(s=E||f?{}:Gi(e),!p)return E?ri(e,Ka(s,e)):Ja(e,za(s,e))}else{if(!T[I])return i?e:{};s=Bi(e,I,p)}}o||(o=new J);var O=o.get(e);if(O)return O;o.set(e,s),Xi(e)?e.forEach(function($){s.add(ce($,r,t,$,e,o))}):Wi(e)&&e.forEach(function($,S){s.set(S,ce($,r,t,S,e,o))});var R=b?E?ni:ti:E?Ue:Ve,M=x?void 0:R(e);return Kt(M||e,function($,S){M&&(S=$,$=e[S]),Vr(s,S,ce($,r,t,S,e,o))}),s}var Ao=4;function wr(e){return ce(e,Ao)}function tt(e){return ie(e)?Mr(e,Fa):Le(e)?[e]:Lr(Ia(wa(e)))}var $o=function(r){return Oo(r)&&!jo(r)};function Oo(e){return!!e&&typeof e=="object"}function jo(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Co(e)}var Io=typeof Symbol=="function"&&Symbol.for,wo=Io?Symbol.for("react.element"):60103;function Co(e){return e.$$typeof===wo}function Fo(e){return Array.isArray(e)?[]:{}}function fe(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ne(Fo(e),e,r):e}function Mo(e,r,t){return e.concat(r).map(function(n){return fe(n,t)})}function Ro(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=fe(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=fe(r[i],t):n[i]=ne(e[i],r[i],t)}),n}function ne(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Mo,t.isMergeableObject=t.isMergeableObject||$o;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):Ro(e,r,t):fe(r,t)}ne.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ne(n,i,t)},{})};var Me=ne,Cr=Array.isArray,Fr=Object.keys,Po=Object.prototype.hasOwnProperty,Lo=typeof Element<"u";function Re(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Cr(e),n=Cr(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Re(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,E=r instanceof Date;if(p!=E)return!1;if(p&&E)return e.getTime()==r.getTime();var b=e instanceof RegExp,x=r instanceof RegExp;if(b!=x)return!1;if(b&&x)return e.toString()==r.toString();var I=Fr(e);if(o=I.length,o!==Fr(r).length)return!1;for(i=o;i--!==0;)if(!Po.call(r,I[i]))return!1;if(Lo&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=I[i],!(s==="_owner"&&e.$$typeof)&&!Re(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var Do=function(r,t){try{return Re(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=Et(Do);var xo=!0;function Vo(e,r){if(!xo){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)}function nt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var ve=d.createContext(void 0);ve.displayName="FormikContext";ve.Provider;ve.Consumer;function Uo(){var e=d.useContext(ve);return e||Vo(!1),e}var F=function(r){return typeof r=="function"},ye=function(r){return r!==null&&typeof r=="object"},No=function(r){return String(Math.floor(Number(r)))===r},Oe=function(r){return Object.prototype.toString.call(r)==="[object String]"},je=function(r){return ye(r)&&F(r.then)};function j(e,r,t,n){n===void 0&&(n=0);for(var i=tt(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function H(e,r,t){for(var n=wr(e),i=n,o=0,s=tt(r);o<s.length-1;o++){var p=s[o],E=j(e,s.slice(0,o+1));if(E&&(ye(E)||Array.isArray(E)))i=i[p]=wr(E);else{var b=s[o+1];i=i[p]=No(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function at(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],p=e[s];ye(p)?t.get(p)||(t.set(p,!0),n[s]=Array.isArray(p)?[]:{},at(p,r,t,n[s])):n[s]=r}return n}function Bo(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return G(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:H(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:H(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:H(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:at(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var N={},se={};function Zo(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,p=e.isInitialValid,E=e.enableReinitialize,b=E===void 0?!1:E,x=e.onSubmit,I=nt(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:x},I),O=d.useRef(f.initialValues),R=d.useRef(f.initialErrors||N),M=d.useRef(f.initialTouched||se),$=d.useRef(f.initialStatus),S=d.useRef(!1),V=d.useRef({});d.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var it=d.useState(0),ot=it[1],oe=d.useRef({values:f.initialValues,errors:f.initialErrors||N,touched:f.initialTouched||se,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),g=oe.current,y=d.useCallback(function(a){var u=oe.current;oe.current=Bo(u,a),u!==oe.current&&ot(function(c){return c+1})},[]),Ke=d.useCallback(function(a,u){return new Promise(function(c,l){var h=f.validate(a,u);h==null?c(N):je(h)?h.then(function(v){c(v||N)},function(v){l(v)}):c(h)})},[f.validate]),ge=d.useCallback(function(a,u){var c=f.validationSchema,l=F(c)?c(u):c,h=u&&l.validateAt?l.validateAt(u,a):Ho(a,l);return new Promise(function(v,_){h.then(function(){v(N)},function(P){P.name==="ValidationError"?v(Go(P)):_(P)})})},[f.validationSchema]),We=d.useCallback(function(a,u){return new Promise(function(c){return c(V.current[a].validate(u))})},[]),ke=d.useCallback(function(a){var u=Object.keys(V.current).filter(function(l){return F(V.current[l].validate)}),c=u.length>0?u.map(function(l){return We(l,j(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(c).then(function(l){return l.reduce(function(h,v,_){return v==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||v&&(h=H(h,u[_],v)),h},{})})},[We]),ut=d.useCallback(function(a){return Promise.all([ke(a),f.validationSchema?ge(a):{},f.validate?Ke(a):{}]).then(function(u){var c=u[0],l=u[1],h=u[2],v=Me.all([c,l,h],{arrayMerge:zo});return v})},[f.validate,f.validationSchema,ke,Ke,ge]),C=w(function(a){return a===void 0&&(a=g.values),y({type:"SET_ISVALIDATING",payload:!0}),ut(a).then(function(u){return S.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){s&&S.current===!0&&G(O.current,f.initialValues)&&C(O.current)},[s,C]);var Q=d.useCallback(function(a){var u=a&&a.values?a.values:O.current,c=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},l=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},h=a&&a.status?a.status:$.current?$.current:f.initialStatus;O.current=u,R.current=c,M.current=l,$.current=h;var v=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:c,touched:l,status:h,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var _=f.onReset(g.values,nr);je(_)?_.then(v):v()}else v()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){S.current===!0&&!G(O.current,f.initialValues)&&b&&(O.current=f.initialValues,Q(),s&&C(O.current))},[b,f.initialValues,Q,s,C]),d.useEffect(function(){b&&S.current===!0&&!G(R.current,f.initialErrors)&&(R.current=f.initialErrors||N,y({type:"SET_ERRORS",payload:f.initialErrors||N}))},[b,f.initialErrors]),d.useEffect(function(){b&&S.current===!0&&!G(M.current,f.initialTouched)&&(M.current=f.initialTouched||se,y({type:"SET_TOUCHED",payload:f.initialTouched||se}))},[b,f.initialTouched]),d.useEffect(function(){b&&S.current===!0&&!G($.current,f.initialStatus)&&($.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[b,f.initialStatus,f.initialTouched]);var Ye=w(function(a){if(V.current[a]&&F(V.current[a].validate)){var u=j(g.values,a),c=V.current[a].validate(u);return je(c)?(y({type:"SET_ISVALIDATING",payload:!0}),c.then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:c}}),Promise.resolve(c))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),ge(g.values,a).then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:j(l,a)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),st=d.useCallback(function(a,u){var c=u.validate;V.current[a]={validate:c}},[]),ct=d.useCallback(function(a){delete V.current[a]},[]),qe=w(function(a,u){y({type:"SET_TOUCHED",payload:a});var c=u===void 0?i:u;return c?C(g.values):Promise.resolve()}),Xe=d.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),Ze=w(function(a,u){var c=F(a)?a(g.values):a;y({type:"SET_VALUES",payload:c});var l=u===void 0?t:u;return l?C(c):Promise.resolve()}),ue=d.useCallback(function(a,u){y({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),k=w(function(a,u,c){y({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=c===void 0?t:c;return l?C(H(g.values,a,u)):Promise.resolve()}),Je=d.useCallback(function(a,u){var c=u,l=a,h;if(!Oe(a)){a.persist&&a.persist();var v=a.target?a.target:a.currentTarget,_=v.type,P=v.name,Se=v.id,_e=v.value,bt=v.checked,qo=v.outerHTML,ar=v.options,Tt=v.multiple;c=u||P||Se,l=/number|range/.test(_)?(h=parseFloat(_e),isNaN(h)?"":h):/checkbox/.test(_)?Wo(j(g.values,c),bt,_e):ar&&Tt?Ko(ar):_e}c&&k(c,l)},[k,g.values]),be=w(function(a){if(Oe(a))return function(u){return Je(u,a)};Je(a)}),Y=w(function(a,u,c){u===void 0&&(u=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=c===void 0?i:c;return l?C(g.values):Promise.resolve()}),Qe=d.useCallback(function(a,u){a.persist&&a.persist();var c=a.target,l=c.name,h=c.id,v=c.outerHTML,_=u||l||h;Y(_,!0)},[Y]),Te=w(function(a){if(Oe(a))return function(u){return Qe(u,a)};Qe(a)}),er=d.useCallback(function(a){F(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),rr=d.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),tr=d.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),me=w(function(){return y({type:"SUBMIT_ATTEMPT"}),C().then(function(a){var u=a instanceof Error,c=!u&&Object.keys(a).length===0;if(c){var l;try{if(l=ft(),l===void 0)return}catch(h){throw h}return Promise.resolve(l).then(function(h){return S.current&&y({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(S.current)throw y({type:"SUBMIT_FAILURE"}),h})}else if(S.current&&(y({type:"SUBMIT_FAILURE"}),u))throw a})}),lt=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),me().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),nr={resetForm:Q,validateForm:C,validateField:Ye,setErrors:Xe,setFieldError:ue,setFieldTouched:Y,setFieldValue:k,setStatus:rr,setSubmitting:tr,setTouched:qe,setValues:Ze,setFormikState:er,submitForm:me},ft=w(function(){return x(g.values,nr)}),dt=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),Q()}),pt=d.useCallback(function(a){return{value:j(g.values,a),error:j(g.errors,a),touched:!!j(g.touched,a),initialValue:j(O.current,a),initialTouched:!!j(M.current,a),initialError:j(R.current,a)}},[g.errors,g.touched,g.values]),ht=d.useCallback(function(a){return{setValue:function(c,l){return k(a,c,l)},setTouched:function(c,l){return Y(a,c,l)},setError:function(c){return ue(a,c)}}},[k,Y,ue]),vt=d.useCallback(function(a){var u=ye(a),c=u?a.name:a,l=j(g.values,c),h={name:c,value:l,onChange:be,onBlur:Te};if(u){var v=a.type,_=a.value,P=a.as,Se=a.multiple;v==="checkbox"?_===void 0?h.checked=!!l:(h.checked=!!(Array.isArray(l)&&~l.indexOf(_)),h.value=_):v==="radio"?(h.checked=l===_,h.value=_):P==="select"&&Se&&(h.value=h.value||[],h.multiple=!0)}return h},[Te,be,g.values]),Ee=d.useMemo(function(){return!G(O.current,g.values)},[O.current,g.values]),yt=d.useMemo(function(){return typeof p<"u"?Ee?g.errors&&Object.keys(g.errors).length===0:p!==!1&&F(p)?p(f):p:g.errors&&Object.keys(g.errors).length===0},[p,Ee,g.errors,f]),gt=A({},g,{initialValues:O.current,initialErrors:R.current,initialTouched:M.current,initialStatus:$.current,handleBlur:Te,handleChange:be,handleReset:dt,handleSubmit:lt,resetForm:Q,setErrors:Xe,setFormikState:er,setFieldTouched:Y,setFieldValue:k,setFieldError:ue,setStatus:rr,setSubmitting:tr,setTouched:qe,setValues:Ze,submitForm:me,validateForm:C,validateField:Ye,isValid:yt,dirty:Ee,unregisterField:ct,registerField:st,getFieldProps:vt,getFieldMeta:pt,getFieldHelpers:ht,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return gt}function Go(e){var r={};if(e.inner){if(e.inner.length===0)return H(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;j(r,s.path)||(r=H(r,s.path,s.message))}}return r}function Ho(e,r,t,n){t===void 0&&(t=!1);var i=Pe(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Pe(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||hr(i)?Pe(i):i!==""?i:void 0}):hr(e[n])?r[n]=Pe(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function zo(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var p=t.clone!==!1,E=p&&t.isMergeableObject(o);n[s]=E?Me(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Me(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Ko(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Wo(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var ko=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function w(e){var r=d.useRef(e);return ko(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Yo=d.forwardRef(function(e,r){var t=e.action,n=nt(e,["action"]),i=t??"#",o=Uo(),s=o.handleReset,p=o.handleSubmit;return d.createElement("form",A({onSubmit:p,ref:r,onReset:s,action:i},n))});Yo.displayName="Form";export{Zo as u};
