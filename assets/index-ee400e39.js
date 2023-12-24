(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function yl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},Lr=[],Dt=()=>{},ay=()=>!1,cy=/^on[^a-z]/,Zo=t=>cy.test(t),vl=t=>t.startsWith("onUpdate:"),Le=Object.assign,El=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ly=Object.prototype.hasOwnProperty,ae=(t,e)=>ly.call(t,e),z=Array.isArray,Fr=t=>Ti(t)==="[object Map]",ea=t=>Ti(t)==="[object Set]",nh=t=>Ti(t)==="[object Date]",Z=t=>typeof t=="function",Oe=t=>typeof t=="string",Qr=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",Lf=t=>(ve(t)||Z(t))&&Z(t.then)&&Z(t.catch),Ff=Object.prototype.toString,Ti=t=>Ff.call(t),uy=t=>Ti(t).slice(8,-1),Uf=t=>Ti(t)==="[object Object]",Il=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oo=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hy=/-(\w)/g,Gt=ta(t=>t.replace(hy,(e,n)=>n?n.toUpperCase():"")),dy=/\B([A-Z])/g,us=ta(t=>t.replace(dy,"-$1").toLowerCase()),na=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ta(t=>t?`on${na(t)}`:""),hr=(t,e)=>!Object.is(t,e),ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},To=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fy=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let rh;const wc=()=>rh||(rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?_y(r):Tl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(t)||ve(t))return t}const py=/;(?![^(]*\))/g,my=/:([^]+)/,gy=/\/\*[^]*?\*\//g;function _y(t){const e={};return t.replace(gy,"").split(py).forEach(n=>{if(n){const r=n.split(my);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wl(t){let e="";if(Oe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=wl(t[n]);r&&(e+=r+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vy=yl(yy);function Bf(t){return!!t||t===""}function Ey(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ra(t[r],e[r]);return n}function ra(t,e){if(t===e)return!0;let n=nh(t),r=nh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Qr(t),r=Qr(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?Ey(t,e):!1;if(n=ve(t),r=ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ra(t[o],e[o]))return!1}}return String(t)===String(e)}function Iy(t,e){return t.findIndex(n=>ra(n,e))}const yn=t=>Oe(t)?t:t==null?"":z(t)||ve(t)&&(t.toString===Ff||!Z(t.toString))?JSON.stringify(t,jf,2):String(t),jf=(t,e)=>e&&e.__v_isRef?jf(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ea(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!z(e)&&!Uf(e)?String(e):e;let Ct;class Ty{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wy(t,e=Ct){e&&e.active&&e.effects.push(t)}function Ay(){return Ct}const Al=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$f=t=>(t.w&Fn)>0,qf=t=>(t.n&Fn)>0,Ry=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fn},Sy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];$f(s)&&!qf(s)?s.delete(t):e[n++]=s,s.w&=~Fn,s.n&=~Fn}e.length=n}},Ac=new WeakMap;let ks=0,Fn=1;const Rc=30;let Pt;const or=Symbol(""),Sc=Symbol("");class Rl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wy(this,r)}run(){if(!this.active)return this.fn();let e=Pt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,Nn=!0,Fn=1<<++ks,ks<=Rc?Ry(this):sh(this),this.fn()}finally{ks<=Rc&&Sy(this),Fn=1<<--ks,Pt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(sh(this),this.onStop&&this.onStop(),this.active=!1)}}function sh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const Hf=[];function hs(){Hf.push(Nn),Nn=!1}function ds(){const t=Hf.pop();Nn=t===void 0?!0:t}function gt(t,e,n){if(Nn&&Pt){let r=Ac.get(t);r||Ac.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Al()),zf(s)}}function zf(t,e){let n=!1;ks<=Rc?qf(t)||(t.n|=Fn,n=!$f(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function on(t,e,n,r,s,i){const o=Ac.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Qr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Il(n)&&a.push(o.get("length")):(a.push(o.get(or)),Fr(t)&&a.push(o.get(Sc)));break;case"delete":z(t)||(a.push(o.get(or)),Fr(t)&&a.push(o.get(Sc)));break;case"set":Fr(t)&&a.push(o.get(or));break}if(a.length===1)a[0]&&Cc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Cc(Al(c))}}function Cc(t,e){const n=z(t)?t:[...t];for(const r of n)r.computed&&ih(r);for(const r of n)r.computed||ih(r)}function ih(t,e){(t!==Pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Cy=yl("__proto__,__v_isRef,__isVue"),Kf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),oh=Py();function Py(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs();const r=le(this)[e].apply(this,n);return ds(),r}}),t}function by(t){const e=le(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Wf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?$y:Jf:i?Yf:Qf).get(e))return e;const o=z(e);if(!s){if(o&&ae(oh,n))return Reflect.get(oh,n,r);if(n==="hasOwnProperty")return by}const a=Reflect.get(e,n,r);return(Qr(n)?Kf.has(n):Cy(n))||(s||gt(e,"get",n),i)?a:st(a)?o&&Il(n)?a:a.value:ve(a)?s?Zf(a):ia(a):a}}class Gf extends Wf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Yr(i)&&st(i)&&!st(r))return!1;if(!this._shallow&&(!wo(r)&&!Yr(r)&&(i=le(i),r=le(r)),!z(e)&&st(i)&&!st(r)))return i.value=r,!0;const o=z(e)&&Il(n)?Number(n)<e.length:ae(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?hr(r,i)&&on(e,"set",n,r):on(e,"add",n,r)),a}deleteProperty(e,n){const r=ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&on(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Qr(n)||!Kf.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",z(e)?"length":or),Reflect.ownKeys(e)}}class ky extends Wf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dy=new Gf,Ny=new ky,Oy=new Gf(!0),Sl=t=>t,sa=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(hr(e,i)&&gt(s,"get",e),gt(s,"get",i));const{has:o}=sa(s),a=r?Sl:n?bl:Js;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(hr(t,s)&&gt(r,"has",t),gt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ki(t,e=!1){return t=t.__v_raw,!e&&gt(le(t),"iterate",or),Reflect.get(t,"size",t)}function ah(t){t=le(t);const e=le(this);return sa(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function ch(t,e){e=le(e);const n=le(this),{has:r,get:s}=sa(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?hr(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function lh(t){const e=le(this),{has:n,get:r}=sa(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&on(e,"delete",t,void 0),i}function uh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Wi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?Sl:t?bl:Js;return!t&&gt(a,"iterate",or),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Gi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=Fr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Sl:e?bl:Js;return!e&&gt(i,"iterate",c?Sc:or),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vy(){const t={get(i){return Hi(this,i)},get size(){return Ki(this)},has:zi,add:ah,set:ch,delete:lh,clear:uh,forEach:Wi(!1,!1)},e={get(i){return Hi(this,i,!1,!0)},get size(){return Ki(this)},has:zi,add:ah,set:ch,delete:lh,clear:uh,forEach:Wi(!1,!0)},n={get(i){return Hi(this,i,!0)},get size(){return Ki(this,!0)},has(i){return zi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Wi(!0,!1)},r={get(i){return Hi(this,i,!0,!0)},get size(){return Ki(this,!0)},has(i){return zi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gi(i,!1,!1),n[i]=Gi(i,!0,!1),e[i]=Gi(i,!1,!0),r[i]=Gi(i,!0,!0)}),[t,n,e,r]}const[My,xy,Ly,Fy]=Vy();function Cl(t,e){const n=e?t?Fy:Ly:t?xy:My;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const Uy={get:Cl(!1,!1)},By={get:Cl(!1,!0)},jy={get:Cl(!0,!1)},Qf=new WeakMap,Yf=new WeakMap,Jf=new WeakMap,$y=new WeakMap;function qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hy(t){return t.__v_skip||!Object.isExtensible(t)?0:qy(uy(t))}function ia(t){return Yr(t)?t:Pl(t,!1,Dy,Uy,Qf)}function Xf(t){return Pl(t,!1,Oy,By,Yf)}function Zf(t){return Pl(t,!0,Ny,jy,Jf)}function Pl(t,e,n,r,s){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Hy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ur(t){return Yr(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function wo(t){return!!(t&&t.__v_isShallow)}function ep(t){return Ur(t)||Yr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function tp(t){return Io(t,"__v_skip",!0),t}const Js=t=>ve(t)?ia(t):t,bl=t=>ve(t)?Zf(t):t;function np(t){Nn&&Pt&&(t=le(t),zf(t.dep||(t.dep=Al())))}function rp(t,e){t=le(t);const n=t.dep;n&&Cc(n)}function st(t){return!!(t&&t.__v_isRef===!0)}function zy(t){return sp(t,!1)}function Ky(t){return sp(t,!0)}function sp(t,e){return st(t)?t:new Wy(t,e)}class Wy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Js(e)}get value(){return np(this),this._value}set value(e){const n=this.__v_isShallow||wo(e)||Yr(e);e=n?e:le(e),hr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Js(e),rp(this))}}function Br(t){return st(t)?t.value:t}const Gy={get:(t,e,n)=>Br(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return st(s)&&!st(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ip(t){return Ur(t)?t:new Proxy(t,Gy)}class Qy{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,rp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return np(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yy(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=Dt):(r=t.get,s=t.set),new Qy(r,s,i||!s,n)}function On(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){oa(i,e,n)}return s}function At(t,e,n,r){if(Z(t)){const i=On(t,e,n,r);return i&&Lf(i)&&i.catch(o=>{oa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(At(t[i],e,n,r));return s}function oa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){On(c,null,10,[t,o,a]);return}}Jy(t,n,s,r)}function Jy(t,e,n,r=!0){console.error(t)}let Xs=!1,Pc=!1;const nt=[];let Bt=0;const jr=[];let en=null,Xn=0;const op=Promise.resolve();let kl=null;function ap(t){const e=kl||op;return t?e.then(this?t.bind(this):t):e}function Xy(t){let e=Bt+1,n=nt.length;for(;e<n;){const r=e+n>>>1,s=nt[r],i=Zs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Dl(t){(!nt.length||!nt.includes(t,Xs&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?nt.push(t):nt.splice(Xy(t.id),0,t),cp())}function cp(){!Xs&&!Pc&&(Pc=!0,kl=op.then(up))}function Zy(t){const e=nt.indexOf(t);e>Bt&&nt.splice(e,1)}function ev(t){z(t)?jr.push(...t):(!en||!en.includes(t,t.allowRecurse?Xn+1:Xn))&&jr.push(t),cp()}function hh(t,e=Xs?Bt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function lp(t){if(jr.length){const e=[...new Set(jr)];if(jr.length=0,en){en.push(...e);return}for(en=e,en.sort((n,r)=>Zs(n)-Zs(r)),Xn=0;Xn<en.length;Xn++)en[Xn]();en=null,Xn=0}}const Zs=t=>t.id==null?1/0:t.id,tv=(t,e)=>{const n=Zs(t)-Zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function up(t){Pc=!1,Xs=!0,nt.sort(tv);const e=Dt;try{for(Bt=0;Bt<nt.length;Bt++){const n=nt[Bt];n&&n.active!==!1&&On(n,null,14)}}finally{Bt=0,nt.length=0,lp(),Xs=!1,kl=null,(nt.length||jr.length)&&up()}}function nv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(m=>Oe(m)?m.trim():m)),h&&(s=n.map(To))}let a,c=r[a=Ga(e)]||r[a=Ga(Gt(e))];!c&&i&&(c=r[a=Ga(us(e))]),c&&At(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,s)}}function hp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=hp(l,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Le(o,i),ve(t)&&r.set(t,o),o)}function aa(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,us(e))||ae(t,e))}let We=null,dp=null;function Ao(t){const e=We;return We=t,dp=t&&t.type.__scopeId||null,e}function ar(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rh(-1);const i=Ao(e);let o;try{o=t(...s)}finally{Ao(i),r._d&&Rh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:v}=t;let w,b;const k=Ao(t);try{if(n.shapeFlag&4){const V=s||r,te=V;w=Ut(u.call(te,V,h,i,m,d,y)),b=c}else{const V=e;w=Ut(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),b=e.props?c:rv(c)}}catch(V){$s.length=0,oa(V,t,1),w=Se(Rt)}let B=w;if(b&&v!==!1){const V=Object.keys(b),{shapeFlag:te}=B;V.length&&te&7&&(o&&V.some(vl)&&(b=sv(b,o)),B=Un(B,b))}return n.dirs&&(B=Un(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),w=B,Ao(k),w}const rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},sv=(t,e)=>{const n={};for(const r in t)(!vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?dh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!aa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?dh(r,o,l):!0:!!o;return!1}function dh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function ov({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fp="components";function $r(t,e){return cv(fp,t,!0,e)||t}const av=Symbol.for("v-ndc");function cv(t,e,n=!0,r=!1){const s=We||je;if(s){const i=s.type;if(t===fp){const a=nE(i,!1);if(a&&(a===e||a===Gt(e)||a===na(Gt(e))))return i}const o=fh(s[t]||i[t],e)||fh(s.appContext[t],e);return!o&&r?i:o}}function fh(t,e){return t&&(t[e]||t[Gt(e)]||t[na(Gt(e))])}const lv=t=>t.__isSuspense;function uv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):ev(t)}const Qi={};function co(t,e,n){return pp(t,e,n)}function pp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const c=Ay()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(st(t)?(l=()=>t.value,u=wo(t)):Ur(t)?(l=()=>t,r=!0):z(t)?(h=!0,u=t.some(V=>Ur(V)||wo(V)),l=()=>t.map(V=>{if(st(V))return V.value;if(Ur(V))return nr(V);if(Z(V))return On(V,c,2)})):Z(t)?e?l=()=>On(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),At(t,c,3,[m])}:l=Dt,e&&r){const V=l;l=()=>nr(V())}let d,m=V=>{d=k.onStop=()=>{On(V,c,4),d=k.onStop=void 0}},y;if(ti)if(m=Dt,e?n&&At(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const V=iE();y=V.__watcherHandles||(V.__watcherHandles=[])}else return Dt;let v=h?new Array(t.length).fill(Qi):Qi;const w=()=>{if(k.active)if(e){const V=k.run();(r||u||(h?V.some((te,ce)=>hr(te,v[ce])):hr(V,v)))&&(d&&d(),At(e,c,3,[V,v===Qi?void 0:h&&v[0]===Qi?[]:v,m]),v=V)}else k.run()};w.allowRecurse=!!e;let b;s==="sync"?b=w:s==="post"?b=()=>ft(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),b=()=>Dl(w));const k=new Rl(l,b);e?n?w():v=k.run():s==="post"?ft(k.run.bind(k),c&&c.suspense):k.run();const B=()=>{k.stop(),c&&c.scope&&El(c.scope.effects,k)};return y&&y.push(B),B}function hv(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?mp(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=je;Jr(this);const a=pp(s,i.bind(r),n);return o?Jr(o):cr(),a}function mp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function nr(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))nr(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)nr(t[n],e);else if(ea(t)||Fr(t))t.forEach(n=>{nr(n,e)});else if(Uf(t))for(const n in t)nr(t[n],e);return t}function Ze(t,e){const n=We;if(n===null)return t;const r=da(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&nr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(hs(),At(c,n,8,[t.el,a,t,e]),ds())}}const An=Symbol("_leaveCb"),Yi=Symbol("_enterCb");function dv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ip(()=>{t.isMounted=!0}),Tp(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],gp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},fv={name:"BaseTransition",props:gp,setup(t,{slots:e}){const n=Jv(),r=dv();let s;return()=>{const i=e.default&&yp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Rt){o=v;break}}const a=le(t),{mode:c}=a;if(r.isLeaving)return Ya(o);const l=ph(o);if(!l)return Ya(o);const u=bc(l,a,r,n);kc(l,u);const h=n.subTree,d=h&&ph(h);let m=!1;const{getTransitionKey:y}=l.type;if(y){const v=y();s===void 0?s=v:v!==s&&(s=v,m=!0)}if(d&&d.type!==Rt&&(!Zn(l,d)||m)){const v=bc(d,a,r,n);if(kc(d,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ya(o);c==="in-out"&&l.type!==Rt&&(v.delayLeave=(w,b,k)=>{const B=_p(r,d);B[String(d.key)]=d,w[An]=()=>{b(),w[An]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return o}}},pv=fv;function _p(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:k}=e,B=String(t.key),V=_p(n,t),te=(Y,ue)=>{Y&&At(Y,r,9,ue)},ce=(Y,ue)=>{const oe=ue[1];te(Y,ue),z(Y)?Y.every(Ve=>Ve.length<=1)&&oe():Y.length<=1&&oe()},Te={mode:i,persisted:o,beforeEnter(Y){let ue=a;if(!n.isMounted)if(s)ue=v||a;else return;Y[An]&&Y[An](!0);const oe=V[B];oe&&Zn(t,oe)&&oe.el[An]&&oe.el[An](),te(ue,[Y])},enter(Y){let ue=c,oe=l,Ve=u;if(!n.isMounted)if(s)ue=w||c,oe=b||l,Ve=k||u;else return;let U=!1;const pe=Y[Yi]=lt=>{U||(U=!0,lt?te(Ve,[Y]):te(oe,[Y]),Te.delayedLeave&&Te.delayedLeave(),Y[Yi]=void 0)};ue?ce(ue,[Y,pe]):pe()},leave(Y,ue){const oe=String(t.key);if(Y[Yi]&&Y[Yi](!0),n.isUnmounting)return ue();te(h,[Y]);let Ve=!1;const U=Y[An]=pe=>{Ve||(Ve=!0,ue(),pe?te(y,[Y]):te(m,[Y]),Y[An]=void 0,V[oe]===t&&delete V[oe])};V[oe]=t,d?ce(d,[Y,U]):U()},clone(Y){return bc(Y,e,n,r)}};return Te}function Ya(t){if(ca(t))return t=Un(t),t.children=null,t}function ph(t){return ca(t)?t.children?t.children[0]:void 0:t}function kc(t,e){t.shapeFlag&6&&t.component?kc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ue?(o.patchFlag&128&&s++,r=r.concat(yp(o.children,e,a))):(e||o.type!==Rt)&&r.push(a!=null?Un(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function vp(t,e){return Z(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const Bs=t=>!!t.type.__asyncLoader,ca=t=>t.type.__isKeepAlive;function mv(t,e){Ep(t,"a",e)}function gv(t,e){Ep(t,"da",e)}function Ep(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(la(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ca(s.parent.vnode)&&_v(r,e,n,s),s=s.parent}}function _v(t,e,n,r){const s=la(e,t,r,!0);wp(()=>{El(r[e],s)},n)}function la(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hs(),Jr(n);const a=At(e,n,t,o);return cr(),ds(),a});return r?s.unshift(i):s.push(i),i}}const pn=t=>(e,n=je)=>(!ti||t==="sp")&&la(t,(...r)=>e(...r),n),yv=pn("bm"),Ip=pn("m"),vv=pn("bu"),Ev=pn("u"),Tp=pn("bum"),wp=pn("um"),Iv=pn("sp"),Tv=pn("rtg"),wv=pn("rtc");function Av(t,e=je){la("ec",t,e)}function mh(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function gh(t,e,n={},r,s){if(We.isCE||We.parent&&Bs(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),Se("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),rt();const o=i&&Ap(i(n)),a=Vl(Ue,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ap(t){return t.some(e=>Co(e)?!(e.type===Rt||e.type===Ue&&!Ap(e.children)):!0)?t:null}const Dc=t=>t?xp(t)?da(t)||t.proxy:Dc(t.parent):null,js=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$emit:t=>t.emit,$options:t=>Nl(t),$forceUpdate:t=>t.f||(t.f=()=>Dl(t.update)),$nextTick:t=>t.n||(t.n=ap.bind(t.proxy)),$watch:t=>hv.bind(t)}),Ja=(t,e)=>t!==we&&!t.__isScriptSetup&&ae(t,e),Rv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(r,e))return o[e]=1,r[e];if(s!==we&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const u=js[e];let h,d;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ja(s,e)?(s[e]=n,!0):r!==we&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ae(t,o)||Ja(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(js,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _h(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function Sv(t){const e=Nl(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&yh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:v,deactivated:w,beforeDestroy:b,beforeUnmount:k,destroyed:B,unmounted:V,render:te,renderTracked:ce,renderTriggered:Te,errorCaptured:Y,serverPrefetch:ue,expose:oe,inheritAttrs:Ve,components:U,directives:pe,filters:lt}=e;if(l&&Cv(l,r,null),o)for(const ye in o){const de=o[ye];Z(de)&&(r[ye]=de.bind(n))}if(s){const ye=s.call(n,n);ve(ye)&&(t.data=ia(ye))}if(Nc=!0,i)for(const ye in i){const de=i[ye],Xt=Z(de)?de.bind(n,n):Z(de.get)?de.get.bind(n,n):Dt,_n=!Z(de)&&Z(de.set)?de.set.bind(n):Dt,xt=bt({get:Xt,set:_n});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>xt.value,set:dt=>xt.value=dt})}if(a)for(const ye in a)Rp(a[ye],r,n,ye);if(c){const ye=Z(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(de=>{lo(de,ye[de])})}u&&yh(u,t,"c");function be(ye,de){z(de)?de.forEach(Xt=>ye(Xt.bind(n))):de&&ye(de.bind(n))}if(be(yv,h),be(Ip,d),be(vv,m),be(Ev,y),be(mv,v),be(gv,w),be(Av,Y),be(wv,ce),be(Tv,Te),be(Tp,k),be(wp,V),be(Iv,ue),z(oe))if(oe.length){const ye=t.exposed||(t.exposed={});oe.forEach(de=>{Object.defineProperty(ye,de,{get:()=>n[de],set:Xt=>n[de]=Xt})})}else t.exposed||(t.exposed={});te&&t.render===Dt&&(t.render=te),Ve!=null&&(t.inheritAttrs=Ve),U&&(t.components=U),pe&&(t.directives=pe)}function Cv(t,e,n=Dt){z(t)&&(t=Oc(t));for(const r in t){const s=t[r];let i;ve(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),st(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function yh(t,e,n){At(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,r){const s=r.includes(".")?mp(n,r):()=>n[r];if(Oe(t)){const i=e[t];Z(i)&&co(s,i)}else if(Z(t))co(s,t.bind(n));else if(ve(t))if(z(t))t.forEach(i=>Rp(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&co(s,i,t)}}function Nl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ro(c,l,o,!0)),Ro(c,e,o)),ve(e)&&i.set(e,c),c}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pv={data:vh,props:Eh,emits:Eh,methods:Ds,computed:Ds,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Ds,directives:Ds,watch:kv,provide:vh,inject:bv};function vh(t,e){return e?t?function(){return Le(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function bv(t,e){return Ds(Oc(t),Oc(e))}function Oc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?Le(Object.create(null),t,e):e}function Eh(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Le(Object.create(null),_h(t),_h(e??{})):e}function kv(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=ut(t[r],e[r]);return n}function Sp(){return{app:null,config:{isNativeTag:ay,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Nv(t,e){return function(r,s=null){Z(r)||(r=Le({},r)),s!=null&&!ve(s)&&(s=null);const i=Sp(),o=new WeakSet;let a=!1;const c=i.app={_uid:Dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:oE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Se(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,da(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){So=c;try{return l()}finally{So=null}}};return c}}let So=null;function lo(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=je||We;if(r||So){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:So._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function Ov(t,e,n,r=!1){const s={},i={};Io(i,ha,1),t.propsDefaults=Object.create(null),Cp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Vv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(aa(t.emitsOptions,d))continue;const m=e[d];if(c)if(ae(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Gt(d);s[y]=Vc(c,a,y,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Cp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=us(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Vc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&on(t,"set","$attrs")}function Cp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oo(c))continue;const l=e[c];let u;s&&ae(s,u=Gt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:aa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Vc(s,c,h,l[h],t,!ae(l,h))}}return o}function Vc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Jr(s),r=l[n]=c.call(null,e),cr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}function Pp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,m]=Pp(h,e,!0);Le(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ve(t)&&r.set(t,Lr),Lr;if(z(i))for(let u=0;u<i.length;u++){const h=Gt(i[u]);Ih(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Gt(u);if(Ih(h)){const d=i[u],m=o[h]=z(d)||Z(d)?{type:d}:Le({},d);if(m){const y=Ah(Boolean,m.type),v=Ah(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||ae(m,"default"))&&a.push(h)}}}const l=[o,a];return ve(t)&&r.set(t,l),l}function Ih(t){return t[0]!=="$"}function Th(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wh(t,e){return Th(t)===Th(e)}function Ah(t,e){return z(e)?e.findIndex(n=>wh(n,t)):Z(e)&&wh(e,t)?0:-1}const bp=t=>t[0]==="_"||t==="$stable",Ol=t=>z(t)?t.map(Ut):[Ut(t)],Mv=(t,e,n)=>{if(e._n)return e;const r=ar((...s)=>Ol(e(...s)),n);return r._c=!1,r},kp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bp(s))continue;const i=t[s];if(Z(i))e[s]=Mv(s,i,r);else if(i!=null){const o=Ol(i);e[s]=()=>o}}},Dp=(t,e)=>{const n=Ol(e);t.slots.default=()=>n},xv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Io(e,"_",n)):kp(e,t.slots={})}else t.slots={},e&&Dp(t,e);Io(t.slots,ha,1)},Lv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(s,e),!n&&a===1&&delete s._):(i=!e.$stable,kp(e,s)),o=e}else e&&(Dp(t,e),o={default:1});if(i)for(const a in s)!bp(a)&&o[a]==null&&delete s[a]};function Mc(t,e,n,r,s=!1){if(z(t)){t.forEach((d,m)=>Mc(d,e&&(z(e)?e[m]:e),n,r,s));return}if(Bs(r)&&!s)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Oe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):st(l)&&(l.value=null)),Z(c))On(c,a,12,[o,u]);else{const d=Oe(c),m=st(c);if(d||m){const y=()=>{if(t.f){const v=d?ae(h,c)?h[c]:u[c]:c.value;s?z(v)&&El(v,i):z(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ft(y,n)):y()}}}const ft=uv;function Fv(t){return Uv(t)}function Uv(t,e){const n=wc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Dt,insertStaticContent:y}=t,v=(f,p,g,_=null,T=null,R=null,M=!1,P=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!Zn(f,p)&&(_=E(f),dt(f,T,R,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:C,ref:q,shapeFlag:F}=p;switch(C){case ua:w(f,p,g,_);break;case Rt:b(f,p,g,_);break;case uo:f==null&&k(p,g,_,M);break;case Ue:U(f,p,g,_,T,R,M,P,D);break;default:F&1?te(f,p,g,_,T,R,M,P,D):F&6?pe(f,p,g,_,T,R,M,P,D):(F&64||F&128)&&C.process(f,p,g,_,T,R,M,P,D,N)}q!=null&&T&&Mc(q,f&&f.ref,R,p||f,!p)},w=(f,p,g,_)=>{if(f==null)r(p.el=a(p.children),g,_);else{const T=p.el=f.el;p.children!==f.children&&l(T,p.children)}},b=(f,p,g,_)=>{f==null?r(p.el=c(p.children||""),g,_):p.el=f.el},k=(f,p,g,_)=>{[f.el,f.anchor]=y(f.children,p,g,_,f.el,f.anchor)},B=({el:f,anchor:p},g,_)=>{let T;for(;f&&f!==p;)T=d(f),r(f,g,_),f=T;r(p,g,_)},V=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),s(f),f=g;s(p)},te=(f,p,g,_,T,R,M,P,D)=>{M=M||p.type==="svg",f==null?ce(p,g,_,T,R,M,P,D):ue(f,p,T,R,M,P,D)},ce=(f,p,g,_,T,R,M,P)=>{let D,C;const{type:q,props:F,shapeFlag:H,transition:X,dirs:ne}=f;if(D=f.el=o(f.type,R,F&&F.is,F),H&8?u(D,f.children):H&16&&Y(f.children,D,null,_,T,R&&q!=="foreignObject",M,P),ne&&Wn(f,null,_,"created"),Te(D,f,f.scopeId,M,_),F){for(const _e in F)_e!=="value"&&!oo(_e)&&i(D,_e,null,F[_e],R,f.children,_,T,Je);"value"in F&&i(D,"value",null,F.value),(C=F.onVnodeBeforeMount)&&Ft(C,_,f)}ne&&Wn(f,null,_,"beforeMount");const Ee=Bv(T,X);Ee&&X.beforeEnter(D),r(D,p,g),((C=F&&F.onVnodeMounted)||Ee||ne)&&ft(()=>{C&&Ft(C,_,f),Ee&&X.enter(D),ne&&Wn(f,null,_,"mounted")},T)},Te=(f,p,g,_,T)=>{if(g&&m(f,g),_)for(let R=0;R<_.length;R++)m(f,_[R]);if(T){let R=T.subTree;if(p===R){const M=T.vnode;Te(f,M,M.scopeId,M.slotScopeIds,T.parent)}}},Y=(f,p,g,_,T,R,M,P,D=0)=>{for(let C=D;C<f.length;C++){const q=f[C]=P?Rn(f[C]):Ut(f[C]);v(null,q,p,g,_,T,R,M,P)}},ue=(f,p,g,_,T,R,M)=>{const P=p.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:q}=p;D|=f.patchFlag&16;const F=f.props||we,H=p.props||we;let X;g&&Gn(g,!1),(X=H.onVnodeBeforeUpdate)&&Ft(X,g,p,f),q&&Wn(p,f,g,"beforeUpdate"),g&&Gn(g,!0);const ne=T&&p.type!=="foreignObject";if(C?oe(f.dynamicChildren,C,P,g,_,ne,R):M||de(f,p,P,null,g,_,ne,R,!1),D>0){if(D&16)Ve(P,p,F,H,g,_,T);else if(D&2&&F.class!==H.class&&i(P,"class",null,H.class,T),D&4&&i(P,"style",F.style,H.style,T),D&8){const Ee=p.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const ke=Ee[_e],St=F[ke],Rr=H[ke];(Rr!==St||ke==="value")&&i(P,ke,St,Rr,T,f.children,g,_,Je)}}D&1&&f.children!==p.children&&u(P,p.children)}else!M&&C==null&&Ve(P,p,F,H,g,_,T);((X=H.onVnodeUpdated)||q)&&ft(()=>{X&&Ft(X,g,p,f),q&&Wn(p,f,g,"updated")},_)},oe=(f,p,g,_,T,R,M)=>{for(let P=0;P<p.length;P++){const D=f[P],C=p[P],q=D.el&&(D.type===Ue||!Zn(D,C)||D.shapeFlag&70)?h(D.el):g;v(D,C,q,null,_,T,R,M,!0)}},Ve=(f,p,g,_,T,R,M)=>{if(g!==_){if(g!==we)for(const P in g)!oo(P)&&!(P in _)&&i(f,P,g[P],null,M,p.children,T,R,Je);for(const P in _){if(oo(P))continue;const D=_[P],C=g[P];D!==C&&P!=="value"&&i(f,P,C,D,M,p.children,T,R,Je)}"value"in _&&i(f,"value",g.value,_.value)}},U=(f,p,g,_,T,R,M,P,D)=>{const C=p.el=f?f.el:a(""),q=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:X}=p;X&&(P=P?P.concat(X):X),f==null?(r(C,g,_),r(q,g,_),Y(p.children,g,q,T,R,M,P,D)):F>0&&F&64&&H&&f.dynamicChildren?(oe(f.dynamicChildren,H,g,T,R,M,P),(p.key!=null||T&&p===T.subTree)&&Np(f,p,!0)):de(f,p,g,q,T,R,M,P,D)},pe=(f,p,g,_,T,R,M,P,D)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?T.ctx.activate(p,g,_,M,D):lt(p,g,_,T,R,M,D):Jt(f,p,D)},lt=(f,p,g,_,T,R,M)=>{const P=f.component=Yv(f,_,T);if(ca(f)&&(P.ctx.renderer=N),Xv(P),P.asyncDep){if(T&&T.registerDep(P,be),!f.el){const D=P.subTree=Se(Rt);b(null,D,p,g)}return}be(P,f,p,g,T,R,M)},Jt=(f,p,g)=>{const _=p.component=f.component;if(iv(f,p,g))if(_.asyncDep&&!_.asyncResolved){ye(_,p,g);return}else _.next=p,Zy(_.update),_.update();else p.el=f.el,_.vnode=p},be=(f,p,g,_,T,R,M)=>{const P=()=>{if(f.isMounted){let{next:q,bu:F,u:H,parent:X,vnode:ne}=f,Ee=q,_e;Gn(f,!1),q?(q.el=ne.el,ye(f,q,M)):q=ne,F&&ao(F),(_e=q.props&&q.props.onVnodeBeforeUpdate)&&Ft(_e,X,q,ne),Gn(f,!0);const ke=Qa(f),St=f.subTree;f.subTree=ke,v(St,ke,h(St.el),E(St),f,T,R),q.el=ke.el,Ee===null&&ov(f,ke.el),H&&ft(H,T),(_e=q.props&&q.props.onVnodeUpdated)&&ft(()=>Ft(_e,X,q,ne),T)}else{let q;const{el:F,props:H}=p,{bm:X,m:ne,parent:Ee}=f,_e=Bs(p);if(Gn(f,!1),X&&ao(X),!_e&&(q=H&&H.onVnodeBeforeMount)&&Ft(q,Ee,p),Gn(f,!0),F&&fe){const ke=()=>{f.subTree=Qa(f),fe(F,f.subTree,f,T,null)};_e?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Qa(f);v(null,ke,g,_,f,T,R),p.el=ke.el}if(ne&&ft(ne,T),!_e&&(q=H&&H.onVnodeMounted)){const ke=p;ft(()=>Ft(q,Ee,ke),T)}(p.shapeFlag&256||Ee&&Bs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&ft(f.a,T),f.isMounted=!0,p=g=_=null}},D=f.effect=new Rl(P,()=>Dl(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,Gn(f,!0),C()},ye=(f,p,g)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Vv(f,p.props,_,g),Lv(f,p.children,g),hs(),hh(),ds()},de=(f,p,g,_,T,R,M,P,D=!1)=>{const C=f&&f.children,q=f?f.shapeFlag:0,F=p.children,{patchFlag:H,shapeFlag:X}=p;if(H>0){if(H&128){_n(C,F,g,_,T,R,M,P,D);return}else if(H&256){Xt(C,F,g,_,T,R,M,P,D);return}}X&8?(q&16&&Je(C,T,R),F!==C&&u(g,F)):q&16?X&16?_n(C,F,g,_,T,R,M,P,D):Je(C,T,R,!0):(q&8&&u(g,""),X&16&&Y(F,g,_,T,R,M,P,D))},Xt=(f,p,g,_,T,R,M,P,D)=>{f=f||Lr,p=p||Lr;const C=f.length,q=p.length,F=Math.min(C,q);let H;for(H=0;H<F;H++){const X=p[H]=D?Rn(p[H]):Ut(p[H]);v(f[H],X,g,null,T,R,M,P,D)}C>q?Je(f,T,R,!0,!1,F):Y(p,g,_,T,R,M,P,D,F)},_n=(f,p,g,_,T,R,M,P,D)=>{let C=0;const q=p.length;let F=f.length-1,H=q-1;for(;C<=F&&C<=H;){const X=f[C],ne=p[C]=D?Rn(p[C]):Ut(p[C]);if(Zn(X,ne))v(X,ne,g,null,T,R,M,P,D);else break;C++}for(;C<=F&&C<=H;){const X=f[F],ne=p[H]=D?Rn(p[H]):Ut(p[H]);if(Zn(X,ne))v(X,ne,g,null,T,R,M,P,D);else break;F--,H--}if(C>F){if(C<=H){const X=H+1,ne=X<q?p[X].el:_;for(;C<=H;)v(null,p[C]=D?Rn(p[C]):Ut(p[C]),g,ne,T,R,M,P,D),C++}}else if(C>H)for(;C<=F;)dt(f[C],T,R,!0),C++;else{const X=C,ne=C,Ee=new Map;for(C=ne;C<=H;C++){const _t=p[C]=D?Rn(p[C]):Ut(p[C]);_t.key!=null&&Ee.set(_t.key,C)}let _e,ke=0;const St=H-ne+1;let Rr=!1,Zu=0;const Ts=new Array(St);for(C=0;C<St;C++)Ts[C]=0;for(C=X;C<=F;C++){const _t=f[C];if(ke>=St){dt(_t,T,R,!0);continue}let Lt;if(_t.key!=null)Lt=Ee.get(_t.key);else for(_e=ne;_e<=H;_e++)if(Ts[_e-ne]===0&&Zn(_t,p[_e])){Lt=_e;break}Lt===void 0?dt(_t,T,R,!0):(Ts[Lt-ne]=C+1,Lt>=Zu?Zu=Lt:Rr=!0,v(_t,p[Lt],g,null,T,R,M,P,D),ke++)}const eh=Rr?jv(Ts):Lr;for(_e=eh.length-1,C=St-1;C>=0;C--){const _t=ne+C,Lt=p[_t],th=_t+1<q?p[_t+1].el:_;Ts[C]===0?v(null,Lt,g,th,T,R,M,P,D):Rr&&(_e<0||C!==eh[_e]?xt(Lt,g,th,2):_e--)}}},xt=(f,p,g,_,T=null)=>{const{el:R,type:M,transition:P,children:D,shapeFlag:C}=f;if(C&6){xt(f.component.subTree,p,g,_);return}if(C&128){f.suspense.move(p,g,_);return}if(C&64){M.move(f,p,g,N);return}if(M===Ue){r(R,p,g);for(let F=0;F<D.length;F++)xt(D[F],p,g,_);r(f.anchor,p,g);return}if(M===uo){B(f,p,g);return}if(_!==2&&C&1&&P)if(_===0)P.beforeEnter(R),r(R,p,g),ft(()=>P.enter(R),T);else{const{leave:F,delayLeave:H,afterLeave:X}=P,ne=()=>r(R,p,g),Ee=()=>{F(R,()=>{ne(),X&&X()})};H?H(R,ne,Ee):Ee()}else r(R,p,g)},dt=(f,p,g,_=!1,T=!1)=>{const{type:R,props:M,ref:P,children:D,dynamicChildren:C,shapeFlag:q,patchFlag:F,dirs:H}=f;if(P!=null&&Mc(P,null,g,f,!0),q&256){p.ctx.deactivate(f);return}const X=q&1&&H,ne=!Bs(f);let Ee;if(ne&&(Ee=M&&M.onVnodeBeforeUnmount)&&Ft(Ee,p,f),q&6)qi(f.component,g,_);else{if(q&128){f.suspense.unmount(g,_);return}X&&Wn(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,g,T,N,_):C&&(R!==Ue||F>0&&F&64)?Je(C,p,g,!1,!0):(R===Ue&&F&384||!T&&q&16)&&Je(D,p,g),_&&wr(f)}(ne&&(Ee=M&&M.onVnodeUnmounted)||X)&&ft(()=>{Ee&&Ft(Ee,p,f),X&&Wn(f,null,p,"unmounted")},g)},wr=f=>{const{type:p,el:g,anchor:_,transition:T}=f;if(p===Ue){Ar(g,_);return}if(p===uo){V(f);return}const R=()=>{s(g),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:P}=T,D=()=>M(g,R);P?P(f.el,R,D):D()}else R()},Ar=(f,p)=>{let g;for(;f!==p;)g=d(f),s(f),f=g;s(p)},qi=(f,p,g)=>{const{bum:_,scope:T,update:R,subTree:M,um:P}=f;_&&ao(_),T.stop(),R&&(R.active=!1,dt(M,f,p,g)),P&&ft(P,p),ft(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Je=(f,p,g,_=!1,T=!1,R=0)=>{for(let M=R;M<f.length;M++)dt(f[M],p,g,_,T)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,p,g)=>{f==null?p._vnode&&dt(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,g),hh(),lp(),p._vnode=f},N={p:v,um:dt,m:xt,r:wr,mt:lt,mc:Y,pc:de,pbc:oe,n:E,o:t};let $,fe;return e&&([$,fe]=e(N)),{render:x,hydrate:$,createApp:Nv(x,$)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Np(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rn(s[i]),a.el=o.el),n||Np(o,a)),a.type===ua&&(a.el=o.el)}}function jv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $v=t=>t.__isTeleport,Ue=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),$s=[];let kt=null;function rt(t=!1){$s.push(kt=t?null:[])}function qv(){$s.pop(),kt=$s[$s.length-1]||null}let ei=1;function Rh(t){ei+=t}function Op(t){return t.dynamicChildren=ei>0?kt||Lr:null,qv(),ei>0&&kt&&kt.push(t),t}function yt(t,e,n,r,s,i){return Op(I(t,e,n,r,s,i,!0))}function Vl(t,e,n,r,s){return Op(Se(t,e,n,r,s,!0))}function Co(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const ha="__vInternal",Vp=({key:t})=>t??null,ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||st(t)||Z(t)?{i:We,r:t,k:e,f:!!n}:t:null);function I(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vp(e),ref:e&&ho(e),scopeId:dp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return a?(Ml(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),ei>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const Se=Hv;function Hv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===av)&&(t=Rt),Co(t)){const a=Un(t,e,!0);return n&&Ml(a,n),ei>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(rE(t)&&(t=t.__vccOpts),e){e=zv(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=wl(a)),ve(c)&&(ep(c)&&!z(c)&&(c=Le({},c)),e.style=Tl(c))}const o=Oe(t)?1:lv(t)?128:$v(t)?64:ve(t)?4:Z(t)?2:0;return I(t,e,n,r,s,o,i,!0)}function zv(t){return t?ep(t)||ha in t?Le({},t):t:null}function Un(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Wv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Vp(a),ref:e&&e.ref?n&&s?z(s)?s.concat(ho(e)):[s,ho(e)]:ho(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pt(t=" ",e=0){return Se(ua,null,t,e)}function Mp(t,e){const n=Se(uo,null,t);return n.staticCount=e,n}function Kv(t="",e=!1){return e?(rt(),Vl(Rt,null,t)):Se(Rt,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Se(Rt):z(t)?Se(Ue,null,t.slice()):typeof t=="object"?Rn(t):Se(ua,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function Ml(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ml(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ha in e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wl([e.class,r.class]));else if(s==="style")e.style=Tl([e.style,r.style]);else if(Zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){At(t,e,7,[n,r])}const Gv=Sp();let Qv=0;function Yv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gv,i={uid:Qv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pp(r,s),emitsOptions:hp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nv.bind(null,i),t.ce&&t.ce(i),i}let je=null;const Jv=()=>je||We;let xl,Sr,Sh="__VUE_INSTANCE_SETTERS__";(Sr=wc()[Sh])||(Sr=wc()[Sh]=[]),Sr.push(t=>je=t),xl=t=>{Sr.length>1?Sr.forEach(e=>e(t)):Sr[0](t)};const Jr=t=>{xl(t),t.scope.on()},cr=()=>{je&&je.scope.off(),xl(null)};function xp(t){return t.vnode.shapeFlag&4}let ti=!1;function Xv(t,e=!1){ti=e;const{props:n,children:r}=t.vnode,s=xp(t);Ov(t,n,s,e),xv(t,r);const i=s?Zv(t,e):void 0;return ti=!1,i}function Zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=tp(new Proxy(t.ctx,Rv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?tE(t):null;Jr(t),hs();const i=On(r,t,0,[t.props,s]);if(ds(),cr(),Lf(i)){if(i.then(cr,cr),e)return i.then(o=>{Ch(t,o,e)}).catch(o=>{oa(o,t,0)});t.asyncDep=i}else Ch(t,i,e)}else Lp(t,e)}function Ch(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=ip(e)),Lp(t,n)}let Ph;function Lp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ph&&!r.render){const s=r.template||Nl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Le(Le({isCustomElement:i,delimiters:a},o),c);r.render=Ph(s,l)}}t.render=r.render||Dt}{Jr(t),hs();try{Sv(t)}finally{ds(),cr()}}}function eE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function tE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return eE(t)},slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ip(tp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}}))}function nE(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function rE(t){return Z(t)&&"__vccOpts"in t}const bt=(t,e)=>Yy(t,e,ti);function Ll(t,e,n){const r=arguments.length;return r===2?ve(e)&&!z(e)?Co(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Co(n)&&(n=[n]),Se(t,e,n))}const sE=Symbol.for("v-scx"),iE=()=>an(sE),oE="3.3.9",aE="http://www.w3.org/2000/svg",er=typeof document<"u"?document:null,bh=er&&er.createElement("template"),cE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?er.createElementNS(aE,t):er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bh.innerHTML=r?`<svg>${t}</svg>`:t;const a=bh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},En="transition",ws="animation",ni=Symbol("_vtc"),Fl=(t,{slots:e})=>Ll(pv,lE(t),e);Fl.displayName="Transition";const Fp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fl.props=Le({},gp,Fp);const Qn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},kh=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function lE(t){const e={};for(const U in t)U in Fp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=uE(s),v=y&&y[0],w=y&&y[1],{onBeforeEnter:b,onEnter:k,onEnterCancelled:B,onLeave:V,onLeaveCancelled:te,onBeforeAppear:ce=b,onAppear:Te=k,onAppearCancelled:Y=B}=e,ue=(U,pe,lt)=>{Yn(U,pe?u:a),Yn(U,pe?l:o),lt&&lt()},oe=(U,pe)=>{U._isLeaving=!1,Yn(U,h),Yn(U,m),Yn(U,d),pe&&pe()},Ve=U=>(pe,lt)=>{const Jt=U?Te:k,be=()=>ue(pe,U,lt);Qn(Jt,[pe,be]),Dh(()=>{Yn(pe,U?c:i),In(pe,U?u:a),kh(Jt)||Nh(pe,r,v,be)})};return Le(e,{onBeforeEnter(U){Qn(b,[U]),In(U,i),In(U,o)},onBeforeAppear(U){Qn(ce,[U]),In(U,c),In(U,l)},onEnter:Ve(!1),onAppear:Ve(!0),onLeave(U,pe){U._isLeaving=!0;const lt=()=>oe(U,pe);In(U,h),fE(),In(U,d),Dh(()=>{U._isLeaving&&(Yn(U,h),In(U,m),kh(V)||Nh(U,r,w,lt))}),Qn(V,[U,lt])},onEnterCancelled(U){ue(U,!1),Qn(B,[U])},onAppearCancelled(U){ue(U,!0),Qn(Y,[U])},onLeaveCancelled(U){oe(U),Qn(te,[U])}})}function uE(t){if(t==null)return null;if(ve(t))return[Xa(t.enter),Xa(t.leave)];{const e=Xa(t);return[e,e]}}function Xa(t){return fy(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ni]||(t[ni]=new Set)).add(e)}function Yn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ni];n&&(n.delete(e),n.size||(t[ni]=void 0))}function Dh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hE=0;function Nh(t,e,n,r){const s=t._endId=++hE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=dE(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=m=>{m.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function dE(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${En}Delay`),i=r(`${En}Duration`),o=Oh(s,i),a=r(`${ws}Delay`),c=r(`${ws}Duration`),l=Oh(a,c);let u=null,h=0,d=0;e===En?o>0&&(u=En,h=o,d=i.length):e===ws?l>0&&(u=ws,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?En:ws:null,d=u?u===En?i.length:c.length:0);const m=u===En&&/\b(transform|all)(,|$)/.test(r(`${En}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function Oh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vh(n)+Vh(t[r])))}function Vh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function fE(){return document.body.offsetHeight}function pE(t,e,n){const r=t[ni];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ul=Symbol("_vod"),Up={beforeMount(t,{value:e},{transition:n}){t[Ul]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):As(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),As(t,!0),r.enter(t)):r.leave(t,()=>{As(t,!1)}):As(t,e))},beforeUnmount(t,{value:e}){As(t,e)}};function As(t,e){t.style.display=e?t[Ul]:"none"}function mE(t,e,n){const r=t.style,s=Oe(n);if(n&&!s){if(e&&!Oe(e))for(const i in e)n[i]==null&&xc(r,i,"");for(const i in n)xc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Ul in t&&(r.display=i)}}const Mh=/\s*!important$/;function xc(t,e,n){if(z(n))n.forEach(r=>xc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gE(t,e);Mh.test(n)?t.setProperty(us(r),n.replace(Mh,""),"important"):t[r]=n}}const xh=["Webkit","Moz","ms"],Za={};function gE(t,e){const n=Za[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Za[e]=r;r=na(r);for(let s=0;s<xh.length;s++){const i=xh[s]+r;if(i in t)return Za[e]=i}return e}const Lh="http://www.w3.org/1999/xlink";function _E(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lh,e.slice(6,e.length)):t.setAttributeNS(Lh,e,n);else{const i=vy(e);n==null||i&&!Bf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function tr(t,e,n,r){t.addEventListener(e,n,r)}function vE(t,e,n,r){t.removeEventListener(e,n,r)}const Fh=Symbol("_vei");function EE(t,e,n,r,s=null){const i=t[Fh]||(t[Fh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=IE(e);if(r){const l=i[e]=AE(r,s);tr(t,a,l,c)}else o&&(vE(t,a,o,c),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function IE(t){let e;if(Uh.test(t)){e={};let r;for(;r=t.match(Uh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}let ec=0;const TE=Promise.resolve(),wE=()=>ec||(TE.then(()=>ec=0),ec=Date.now());function AE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;At(RE(r,n.value),e,5,[r])};return n.value=t,n.attached=wE(),n}function RE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bh=/^on[a-z]/,SE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?pE(t,r,s):e==="style"?mE(t,n,r):Zo(e)?vl(e)||EE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CE(t,e,r,s))?yE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_E(t,e,r,s))};function CE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Bh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bh.test(e)&&Oe(n)?!1:e in t}const Po=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>ao(e,n):e};function PE(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qr=Symbol("_assign"),tn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[qr]=Po(s);const i=r||s.props&&s.props.type==="number";tr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=To(a)),t[qr](a)}),n&&tr(t,"change",()=>{t.value=t.value.trim()}),e||(tr(t,"compositionstart",PE),tr(t,"compositionend",jh),tr(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[qr]=Po(i),t.composing)return;const o=s||t.type==="number"?To(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Rs={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ea(e);tr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?To(bo(o)):bo(o));t[qr](t.multiple?s?new Set(i):i:i[0])}),t[qr]=Po(r)},mounted(t,{value:e}){$h(t,e)},beforeUpdate(t,e,n){t[qr]=Po(n)},updated(t,{value:e}){$h(t,e)}};function $h(t,e){const n=t.multiple;if(!(n&&!z(e)&&!ea(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=bo(i);if(n)z(e)?i.selected=Iy(e,o)>-1:i.selected=e.has(o);else if(ra(bo(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bo(t){return"_value"in t?t._value:t.value}const bE=["ctrl","shift","alt","meta"],kE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bE.some(n=>t[`${n}Key`]&&!e.includes(n))},Bp=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=kE[e[s]];if(i&&i(n,e))return}return t(n,...r)},DE=Le({patchProp:SE},cE);let qh;function NE(){return qh||(qh=Fv(DE))}const OE=(...t)=>{const e=NE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=VE(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function VE(t){return Oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof window<"u";function ME(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ot(s)?s.map(t):t(s)}return n}const qs=()=>{},Ot=Array.isArray,xE=/\/$/,LE=t=>t.replace(xE,"");function nc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function FE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(e.matched[r],n.matched[s])&&jp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BE(t[n],e[n]))return!1;return!0}function BE(t,e){return Ot(t)?zh(t,e):Ot(e)?zh(e,t):t===e}function zh(t,e){return Ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ri;(function(t){t.pop="pop",t.push="push"})(ri||(ri={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function $E(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LE(t)}const qE=/^[^#]+#/;function HE(t,e){return t.replace(qE,"#")+e}function zE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function KE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kh(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function WE(t,e){Lc.set(t,e)}function GE(t){const e=Lc.get(t);return Lc.delete(t),e}let QE=()=>location.protocol+"//"+location.host;function $p(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Hh(c,"")}return Hh(n,t)+r+s}function YE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=$p(t,location),y=n.value,v=e.value;let w=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}w=v?d.position-v.position:0}else r(m);s.forEach(b=>{b(n.value,y,{delta:w,type:ri.pop,direction:w?w>0?Hs.forward:Hs.back:Hs.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Wh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fa():null}}function JE(t){const{history:e,location:n}=window,r={value:$p(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:QE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,Wh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:fa()});i(u.current,u,!0);const h=me({},Wh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function XE(t){t=$E(t);const e=JE(t),n=YE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:HE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ZE(t){return typeof t=="string"||t&&typeof t=="object"}function qp(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hp=Symbol("");var Gh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gh||(Gh={}));function Zr(t,e){return me(new Error,{type:t,[Hp]:!0},e)}function Zt(t,e){return t instanceof Error&&Hp in t&&(e==null||!!(t.type&e))}const Qh="[^/]+?",eI={sensitive:!1,strict:!1,start:!0,end:!0},tI=/[.+*?^${}()[\]/\\]/g;function nI(t,e){const n=me({},eI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(tI,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:v,optional:w,regexp:b}=d;i.push({name:y,repeatable:v,optional:w});const k=b||Qh;if(k!==Qh){m+=10;try{new RegExp(`(${k})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+V.message)}}let B=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(B=w&&l.length<2?`(?:/${B})`:"/"+B),w&&(B+="?"),s+=B,m+=20,w&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:w}=m,b=y in l?l[y]:"";if(Ot(b)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Ot(b)?b.join("/"):b;if(!k)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function rI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yh(r))return 1;if(Yh(s))return-1}return s.length-r.length}function Yh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iI={type:0,value:""},oI=/[a-zA-Z0-9_]/;function aI(t){if(!t)return[[]];if(t==="/")return[[iI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:oI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function cI(t,e,n){const r=nI(aI(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lI(t,e){const n=[],r=new Map;e=Zh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,y=uI(u);y.aliasOf=d&&d.record;const v=Zh(e,u),w=[y];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of B)w.push(me({},y,{components:d?d.record.components:y.components,path:V,aliasOf:d?d.record:y}))}let b,k;for(const B of w){const{path:V}=B;if(h&&V[0]!=="/"){const te=h.record.path,ce=te[te.length-1]==="/"?"":"/";B.path=h.record.path+(V&&ce+V)}if(b=cI(B,h,v),d?d.alias.push(b):(k=k||b,k!==b&&k.alias.push(b),m&&u.name&&!Xh(b)&&o(u.name)),y.children){const te=y.children;for(let ce=0;ce<te.length;ce++)i(te[ce],b,d&&d.children[ce])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return k?()=>{o(k)}:qs}function o(u){if(qp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&sI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!zp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xh(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Zr(1,{location:u});v=d.record.name,m=me(Jh(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Jh(u.params,d.keys.map(k=>k.name))),y=d.stringify(m)}else if("path"in u)y=u.path,d=n.find(k=>k.re.test(y)),d&&(m=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw Zr(1,{location:u,currentLocation:h});v=d.record.name,m=me({},h.params,u.params),y=d.stringify(m)}const w=[];let b=d;for(;b;)w.unshift(b.record),b=b.parent;return{name:v,path:y,params:m,matched:w,meta:dI(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Jh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dI(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Zh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zp(t,e){return e.children.some(n=>n===t||zp(t,n))}const Kp=/#/g,fI=/&/g,pI=/\//g,mI=/=/g,gI=/\?/g,Wp=/\+/g,_I=/%5B/g,yI=/%5D/g,Gp=/%5E/g,vI=/%60/g,Qp=/%7B/g,EI=/%7C/g,Yp=/%7D/g,II=/%20/g;function Bl(t){return encodeURI(""+t).replace(EI,"|").replace(_I,"[").replace(yI,"]")}function TI(t){return Bl(t).replace(Qp,"{").replace(Yp,"}").replace(Gp,"^")}function Fc(t){return Bl(t).replace(Wp,"%2B").replace(II,"+").replace(Kp,"%23").replace(fI,"%26").replace(vI,"`").replace(Qp,"{").replace(Yp,"}").replace(Gp,"^")}function wI(t){return Fc(t).replace(mI,"%3D")}function AI(t){return Bl(t).replace(Kp,"%23").replace(gI,"%3F")}function RI(t){return t==null?"":AI(t).replace(pI,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wp," "),o=i.indexOf("="),a=ko(o<0?i:i.slice(0,o)),c=o<0?null:ko(i.slice(o+1));if(a in e){let l=e[a];Ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ed(t){let e="";for(let n in t){const r=t[n];if(n=wI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(r)?r.map(i=>i&&Fc(i)):[r&&Fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function CI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const PI=Symbol(""),td=Symbol(""),jl=Symbol(""),Jp=Symbol(""),Uc=Symbol("");function Ss(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zr(4,{from:n,to:e})):h instanceof Error?a(h):ZE(h)?a(Zr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function rc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(bI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ME(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Sn(d,n,r,i,o)()}))}}return s}function bI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nd(t){const e=an(jl),n=an(Jp),r=bt(()=>e.resolve(Br(t.to))),s=bt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xr.bind(null,u));if(d>-1)return d;const m=rd(c[l-2]);return l>1&&rd(u)===m&&h[h.length-1].path!==m?h.findIndex(Xr.bind(null,c[l-2])):d}),i=bt(()=>s.value>-1&&OI(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&jp(n.params,r.value.params));function a(c={}){return NI(c)?e[Br(t.replace)?"replace":"push"](Br(t.to)).catch(qs):Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const kI=vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nd,setup(t,{slots:e}){const n=ia(nd(t)),{options:r}=an(jl),s=bt(()=>({[sd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ll("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DI=kI;function NI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ot(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sd=(t,e,n)=>t??e??n,VI=vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Uc),s=bt(()=>t.route||r.value),i=an(td,0),o=bt(()=>{let l=Br(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=bt(()=>s.value.matched[o.value]);lo(td,bt(()=>o.value+1)),lo(PI,a),lo(Uc,s);const c=zy();return co(()=>[c.value,a.value,t.name],([l,u,h],[d,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Xr(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return id(n.default,{Component:d,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,w=Ll(d,me({},y,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return id(n.default,{Component:w,route:l})||w}}});function id(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const MI=VI;function xI(t){const e=lI(t.routes,t),n=t.parseQuery||SI,r=t.stringifyQuery||ed,s=t.history,i=Ss(),o=Ss(),a=Ss(),c=Ky(Tn);let l=Tn;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,E=>""+E),h=tc.bind(null,RI),d=tc.bind(null,ko);function m(E,x){let N,$;return qp(E)?(N=e.getRecordMatcher(E),$=x):$=E,e.addRoute($,N)}function y(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function b(E,x){if(x=me({},x||c.value),typeof E=="string"){const g=nc(n,E,x.path),_=e.resolve({path:g.path},x),T=s.createHref(g.fullPath);return me(g,_,{params:d(_.params),hash:ko(g.hash),redirectedFrom:void 0,href:T})}let N;if("path"in E)N=me({},E,{path:nc(n,E.path,x.path).path});else{const g=me({},E.params);for(const _ in g)g[_]==null&&delete g[_];N=me({},E,{params:h(g)}),x.params=h(x.params)}const $=e.resolve(N,x),fe=E.hash||"";$.params=u(d($.params));const f=FE(r,me({},E,{hash:TI(fe),path:$.path})),p=s.createHref(f);return me({fullPath:f,hash:fe,query:r===ed?CI(E.query):E.query||{}},$,{redirectedFrom:void 0,href:p})}function k(E){return typeof E=="string"?nc(n,E,c.value.path):me({},E)}function B(E,x){if(l!==E)return Zr(8,{from:x,to:E})}function V(E){return Te(E)}function te(E){return V(me(k(E),{replace:!0}))}function ce(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let $=typeof N=="function"?N(E):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=k($):{path:$},$.params={}),me({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function Te(E,x){const N=l=b(E),$=c.value,fe=E.state,f=E.force,p=E.replace===!0,g=ce(N);if(g)return Te(me(k(g),{state:typeof g=="object"?me({},fe,g.state):fe,force:f,replace:p}),x||N);const _=N;_.redirectedFrom=x;let T;return!f&&UE(r,$,N)&&(T=Zr(16,{to:_,from:$}),xt($,$,!0,!1)),(T?Promise.resolve(T):oe(_,$)).catch(R=>Zt(R)?Zt(R,2)?R:_n(R):de(R,_,$)).then(R=>{if(R){if(Zt(R,2))return Te(me({replace:p},k(R.to),{state:typeof R.to=="object"?me({},fe,R.to.state):fe,force:f}),x||_)}else R=U(_,$,!0,p,fe);return Ve(_,$,R),R})}function Y(E,x){const N=B(E,x);return N?Promise.reject(N):Promise.resolve()}function ue(E){const x=Ar.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function oe(E,x){let N;const[$,fe,f]=LI(E,x);N=rc($.reverse(),"beforeRouteLeave",E,x);for(const g of $)g.leaveGuards.forEach(_=>{N.push(Sn(_,E,x))});const p=Y.bind(null,E,x);return N.push(p),Je(N).then(()=>{N=[];for(const g of i.list())N.push(Sn(g,E,x));return N.push(p),Je(N)}).then(()=>{N=rc(fe,"beforeRouteUpdate",E,x);for(const g of fe)g.updateGuards.forEach(_=>{N.push(Sn(_,E,x))});return N.push(p),Je(N)}).then(()=>{N=[];for(const g of f)if(g.beforeEnter)if(Ot(g.beforeEnter))for(const _ of g.beforeEnter)N.push(Sn(_,E,x));else N.push(Sn(g.beforeEnter,E,x));return N.push(p),Je(N)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),N=rc(f,"beforeRouteEnter",E,x),N.push(p),Je(N))).then(()=>{N=[];for(const g of o.list())N.push(Sn(g,E,x));return N.push(p),Je(N)}).catch(g=>Zt(g,8)?g:Promise.reject(g))}function Ve(E,x,N){a.list().forEach($=>ue(()=>$(E,x,N)))}function U(E,x,N,$,fe){const f=B(E,x);if(f)return f;const p=x===Tn,g=Dr?history.state:{};N&&($||p?s.replace(E.fullPath,me({scroll:p&&g&&g.scroll},fe)):s.push(E.fullPath,fe)),c.value=E,xt(E,x,N,p),_n()}let pe;function lt(){pe||(pe=s.listen((E,x,N)=>{if(!qi.listening)return;const $=b(E),fe=ce($);if(fe){Te(me(fe,{replace:!0}),$).catch(qs);return}l=$;const f=c.value;Dr&&WE(Kh(f.fullPath,N.delta),fa()),oe($,f).catch(p=>Zt(p,12)?p:Zt(p,2)?(Te(p.to,$).then(g=>{Zt(g,20)&&!N.delta&&N.type===ri.pop&&s.go(-1,!1)}).catch(qs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),de(p,$,f))).then(p=>{p=p||U($,f,!1),p&&(N.delta&&!Zt(p,8)?s.go(-N.delta,!1):N.type===ri.pop&&Zt(p,20)&&s.go(-1,!1)),Ve($,f,p)}).catch(qs)}))}let Jt=Ss(),be=Ss(),ye;function de(E,x,N){_n(E);const $=be.list();return $.length?$.forEach(fe=>fe(E,x,N)):console.error(E),Promise.reject(E)}function Xt(){return ye&&c.value!==Tn?Promise.resolve():new Promise((E,x)=>{Jt.add([E,x])})}function _n(E){return ye||(ye=!E,lt(),Jt.list().forEach(([x,N])=>E?N(E):x()),Jt.reset()),E}function xt(E,x,N,$){const{scrollBehavior:fe}=t;if(!Dr||!fe)return Promise.resolve();const f=!N&&GE(Kh(E.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return ap().then(()=>fe(E,x,f)).then(p=>p&&KE(p)).catch(p=>de(p,E,x))}const dt=E=>s.go(E);let wr;const Ar=new Set,qi={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:w,getRoutes:v,resolve:b,options:t,push:V,replace:te,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:be.add,isReady:Xt,install(E){const x=this;E.component("RouterLink",DI),E.component("RouterView",MI),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Br(c)}),Dr&&!wr&&c.value===Tn&&(wr=!0,V(s.location).catch(fe=>{}));const N={};for(const fe in Tn)Object.defineProperty(N,fe,{get:()=>c.value[fe],enumerable:!0});E.provide(jl,x),E.provide(Jp,Xf(N)),E.provide(Uc,c);const $=E.unmount;Ar.add(E),E.unmount=function(){Ar.delete(E),Ar.size<1&&(l=Tn,pe&&pe(),pe=null,c.value=Tn,wr=!1,ye=!1),$()}}};function Je(E){return E.reduce((x,N)=>x.then(()=>ue(N)),Promise.resolve())}return qi}function LI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xr(l,c))||s.push(c))}return[n,r,s]}const fs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},FI={methods:{close(){this.$emit("close")}}},UI={class:"modal-wrap",id:"item-modal"},BI={class:"modal-content"},jI={class:"modal-header",id:"modal-title"},$I={class:"modal-body",id:"modal-details"};function qI(t,e,n,r,s,i){return rt(),Vl(Fl,{name:"modal-fade"},{default:ar(()=>[Ze(I("div",UI,[I("div",BI,[I("header",jI,[gh(t.$slots,"header",{},()=>[pt(" Hi User ")]),I("button",{type:"button",onClick:e[0]||(e[0]=(...o)=>i.close&&i.close(...o))},"Close ✗")]),I("section",$I,[gh(t.$slots,"body",{},()=>[pt("Add something here")])])])],512),[[Up,t.isModalVisible]])]),_:3})}const HI=fs(FI,[["render",qI]]),Cr={DATE:0,COURSE:1,TYPE:2,DATE_DESC:3,COURSE_DESC:4,TYPE_DESC:5},Pr={DATE:0,COURSE:1,TYPE:2,DATE_DESC:3,COURSE_DESC:4,TYPE_DESC:5},Be={ASCENDING:0,DESCENDING:1};function od(t,e){const n=t.reduce((i,o)=>{let a=o.course;return i[a]||(i[a]=[]),i[a].push(o),i},{});let r;r=Object.keys(n).sort((i,o)=>i.toLowerCase().localeCompare(o.toLowerCase())),e==Be.DESCENDING&&(r=r.reverse());let s={};for(const i in r){let o=r[i];s[o]=n[o]}return s}function ad(t,e){const n=t.reduce((i,o)=>{let a=o.type;return i[a]||(i[a]=[]),i[a].push(o),i},{});let r;r=Object.keys(n).sort((i,o)=>i.toLowerCase().localeCompare(o.toLowerCase())),e==Be.DESCENDING&&(r=r.reverse());let s={};for(const i in r){let o=r[i];s[o]=n[o]}return s}function cd(t,e){const n=t.reduce((a,c)=>{const l=c.deadline.split("T")[0];return a[l]||(a[l]=[]),a[l].push(c),a},{});let r=(a,c)=>new Date(c)-new Date(a),s=(a,c)=>new Date(a)-new Date(c),i;e==Be.DESCENDING?i=Object.keys(n).sort((a,c)=>r(a,c)):i=Object.keys(n).sort((a,c)=>s(a,c));let o={};for(let a=0;a<i.length;a++){const c=i[a];o[c]=n[c]}return o}function ld(t,e){let n;return e==Be.DESCENDING?n=t.sort((r,s)=>new Date(s.deadline)-new Date(r.deadline)):n=t.sort((r,s)=>new Date(r.deadline)-new Date(s.deadline)),n}function ud(t,e){let n;return e==Be.DESCENDING?n=t.sort((r,s)=>s.course.toLowerCase().localeCompare(r.course.toLowerCase())):n=t.sort((r,s)=>r.course.toLowerCase().localeCompare(s.course.toLowerCase())),n}function hd(t,e){let n;return e==Be.DESCENDING?n=t.sort((r,s)=>s.type.toLowerCase().localeCompare(r.type.toLowerCase())):n=t.sort((r,s)=>r.type.toLowerCase().localeCompare(s.type.toLowerCase())),n}function zI(t,e){let n;switch(e){case Cr.COURSE:n=od(t,Be.ASCENDING);break;case Cr.TYPE:n=ad(t,Be.ASCENDING);break;case Cr.DATE_DESC:n=cd(t,Be.DESCENDING);break;case Cr.COURSE_DESC:n=od(t,Be.DESCENDING);break;case Cr.TYPE_DESC:n=ad(t,Be.DESCENDING);break;case Cr.DATE:default:n=cd(t,Be.ASCENDING);break}return n}function KI(t,e){let n;switch(e){case Pr.COURSE:n=ud(t,Be.ASCENDING);break;case Pr.TYPE:n=hd(t,Be.ASCENDING);break;case Pr.DATE_DESC:n=ld(t,Be.DESCENDING);break;case Pr.COURSE_DESC:n=ud(t,Be.DESCENDING);break;case Pr.TYPE_DESC:n=hd(t,Be.DESCENDING);break;case Pr.DATE:default:n=ld(t,Be.ASCENDING);break}return n}function dd(t,e,n){let r=zI(t,e);for(const s in r){let i=r[s],o=KI(i,n);r[s]=o}return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},WI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new GI;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QI=function(t){const e=Xp(t);return Zp.encodeByteArray(e,!0)},Do=function(t){return QI(t).replace(/\./g,"")},em=function(t){try{return Zp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=()=>YI().__FIREBASE_DEFAULTS__,XI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&em(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return JI()||XI()||ZI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tm=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eT=t=>{const e=tm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nm=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},rm=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function sT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oT(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aT(){try{return typeof indexedDB=="object"}catch{return!1}}function cT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lT,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?uT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mn(s,a,r)}}function uT(t,e){return t.replace(hT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hT=/\{\$([^}]+)}/g;function dT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fd(i)&&fd(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fT(t,e){const n=new pT(t,e);return n.subscribe.bind(n)}class pT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yT(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _T(t){return t===Jn?void 0:t}function yT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const ET={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},IT=se.INFO,TT={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},wT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=TT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=IT,this._logHandler=wT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ET[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const AT=(t,e)=>e.some(n=>t instanceof n);let pd,md;function RT(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ST(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sm=new WeakMap,Bc=new WeakMap,im=new WeakMap,ic=new WeakMap,Hl=new WeakMap;function CT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sm.set(n,t)}).catch(()=>{}),Hl.set(e,t),e}function PT(t){if(Bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bT(t){jc=t(jc)}function kT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return im.set(r,e.sort?e.sort():[e]),Vn(r)}:ST().includes(t)?function(...e){return t.apply(oc(this),e),Vn(sm.get(this))}:function(...e){return Vn(t.apply(oc(this),e))}}function DT(t){return typeof t=="function"?kT(t):(t instanceof IDBTransaction&&PT(t),AT(t,RT())?new Proxy(t,jc):t)}function Vn(t){if(t instanceof IDBRequest)return CT(t);if(ic.has(t))return ic.get(t);const e=DT(t);return e!==t&&(ic.set(t,e),Hl.set(e,t)),e}const oc=t=>Hl.get(t);function NT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vn(o.result),c.oldVersion,c.newVersion,Vn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const OT=["get","getKey","getAll","getAllKeys","count"],VT=["put","add","delete","clear"],ac=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=VT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||OT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ac.set(e,i),i}bT(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",_d="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new ql("@firebase/app"),LT="@firebase/app-compat",FT="@firebase/analytics-compat",UT="@firebase/analytics",BT="@firebase/app-check-compat",jT="@firebase/app-check",$T="@firebase/auth",qT="@firebase/auth-compat",HT="@firebase/database",zT="@firebase/database-compat",KT="@firebase/functions",WT="@firebase/functions-compat",GT="@firebase/installations",QT="@firebase/installations-compat",YT="@firebase/messaging",JT="@firebase/messaging-compat",XT="@firebase/performance",ZT="@firebase/performance-compat",ew="@firebase/remote-config",tw="@firebase/remote-config-compat",nw="@firebase/storage",rw="@firebase/storage-compat",sw="@firebase/firestore",iw="@firebase/firestore-compat",ow="firebase",aw="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="[DEFAULT]",cw={[$c]:"fire-core",[LT]:"fire-core-compat",[UT]:"fire-analytics",[FT]:"fire-analytics-compat",[jT]:"fire-app-check",[BT]:"fire-app-check-compat",[$T]:"fire-auth",[qT]:"fire-auth-compat",[HT]:"fire-rtdb",[zT]:"fire-rtdb-compat",[KT]:"fire-fn",[WT]:"fire-fn-compat",[GT]:"fire-iid",[QT]:"fire-iid-compat",[YT]:"fire-fcm",[JT]:"fire-fcm-compat",[XT]:"fire-perf",[ZT]:"fire-perf-compat",[ew]:"fire-rc",[tw]:"fire-rc-compat",[nw]:"fire-gcs",[rw]:"fire-gcs-compat",[sw]:"fire-fst",[iw]:"fire-fst-compat","fire-js":"fire-js",[ow]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,Hc=new Map;function lw(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Hc.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Oo.values())lw(n,t);return!0}function zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new wi("app","Firebase",uw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=aw;function om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=nm()),!n)throw Mn.create("no-options");const i=Oo.get(s);if(i){if(No(n,i.options)&&No(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const o=new vT(s);for(const c of Hc.values())o.addComponent(c);const a=new hw(n,r,o);return Oo.set(s,a),a}function am(t=qc){const e=Oo.get(t);if(!e&&t===qc&&nm())return om();if(!e)throw Mn.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let s=(r=cw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}es(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="firebase-heartbeat-database",fw=1,si="firebase-heartbeat-store";let cc=null;function cm(){return cc||(cc=NT(dw,fw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),cc}async function pw(t){try{return await(await cm()).transaction(si).objectStore(si).get(lm(t))}catch(e){if(e instanceof mn)fr.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function yd(t,e){try{const r=(await cm()).transaction(si,"readwrite");await r.objectStore(si).put(e,lm(t)),await r.done}catch(n){if(n instanceof mn)fr.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function lm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=1024,gw=30*24*60*60*1e3;class _w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:s}=yw(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vd(){return new Date().toISOString().substring(0,10)}function yw(t,e=mw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ed(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aT()?cT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){es(new dr("platform-logger",e=>new MT(e),"PRIVATE")),es(new dr("heartbeat",e=>new _w(e),"PRIVATE")),xn($c,_d,t),xn($c,_d,"esm2017"),xn("fire-js","")}Ew("");var Iw="firebase",Tw="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(Iw,Tw,"app");var ww=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Kl=Kl||{},Q=ww||self;function pa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ri(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Aw(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++Rw)}var lc="closure_uid_"+(1e9*Math.random()>>>0),Rw=0;function Sw(t,e,n){return t.call.apply(t.bind,arguments)}function Cw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=Sw:it=Cw,it.apply(null,arguments)}function Ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function qn(){this.s=this.s,this.o=this.o}var Pw=0;qn.prototype.s=!1;qn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Pw!=0)&&Aw(this)};qn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const um=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Id(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(pa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var bw=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function ii(t){return/^[\s\xa0]*$/.test(t)}function ma(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return ma().indexOf(t)!=-1}function Gl(t){return Gl[" "](t),t}Gl[" "]=function(){};function kw(t,e){var n=TA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Dw=jt("Opera"),ts=jt("Trident")||jt("MSIE"),hm=jt("Edge"),zc=hm||ts,dm=jt("Gecko")&&!(ma().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),Nw=ma().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function fm(){var t=Q.document;return t?t.documentMode:void 0}var Kc;e:{var uc="",hc=function(){var t=ma();if(dm)return/rv:([^\);]+)(\)|;)/.exec(t);if(hm)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Nw)return/WebKit\/(\S+)/.exec(t);if(Dw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hc&&(uc=hc?hc[1]:""),ts){var dc=fm();if(dc!=null&&dc>parseFloat(uc)){Kc=String(dc);break e}}Kc=uc}var Wc;if(Q.document&&ts){var Td=fm();Wc=Td||parseInt(Kc,10)||void 0}else Wc=void 0;var Ow=Wc;function oi(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dm){e:{try{Gl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.$.h.call(this)}}qe(oi,ot);var Vw={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Si="closure_listenable_"+(1e6*Math.random()|0),Mw=0;function xw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Mw,this.fa=this.ia=!1}function ga(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ql(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Lw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pm(t){const e={};for(const n in t)e[n]=t[n];return e}const wd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<wd.length;i++)n=wd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _a(t){this.src=t,this.g={},this.h=0}_a.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Qc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Gc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=um(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ga(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Yl="closure_lm_"+(1e6*Math.random()|0),fc={};function gm(t,e,n,r,s){if(r&&r.once)return ym(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gm(t,e[i],n,r,s);return null}return n=Zl(n),t&&t[Si]?t.O(e,n,Ri(r)?!!r.capture:!!r,s):_m(t,e,n,!1,r,s)}function _m(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ri(s)?!!s.capture:!!s,a=Xl(t);if(a||(t[Yl]=a=new _a(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Fw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Em(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fw(){function t(n){return e.call(t.src,t.listener,n)}const e=Uw;return t}function ym(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ym(t,e[i],n,r,s);return null}return n=Zl(n),t&&t[Si]?t.P(e,n,Ri(r)?!!r.capture:!!r,s):_m(t,e,n,!0,r,s)}function vm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)vm(t,e[i],n,r,s);else r=Ri(r)?!!r.capture:!!r,n=Zl(n),t&&t[Si]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qc(i,n,r,s),-1<n&&(ga(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qc(e,n,r,s)),(n=-1<t?e[t]:null)&&Jl(n))}function Jl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Si])Gc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Em(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xl(e))?(Gc(n,t),n.h==0&&(n.src=null,e[Yl]=null)):ga(t)}}}function Em(t){return t in fc?fc[t]:fc[t]="on"+t}function Uw(t,e){if(t.fa)t=!0;else{e=new oi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Jl(t),t=n.call(r,e)}return t}function Xl(t){return t=t[Yl],t instanceof _a?t:null}var pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(t){return typeof t=="function"?t:(t[pc]||(t[pc]=function(e){return t.handleEvent(e)}),t[pc])}function $e(){qn.call(this),this.i=new _a(this),this.S=this,this.J=null}qe($e,qn);$e.prototype[Si]=!0;$e.prototype.removeEventListener=function(t,e,n,r){vm(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var s=e;e=new ot(r,t),mm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Xi(o,r,!0,e)&&s}if(o=e.g=t,s=Xi(o,r,!0,e)&&s,s=Xi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Xi(o,r,!1,e)&&s}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ga(n[r]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Xi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Gc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var eu=Q.JSON.stringify;class Bw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jw(){var t=tu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $w{constructor(){this.h=this.g=null}add(e,n){const r=Im.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Im=new Bw(()=>new qw,t=>t.reset());class qw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Hw(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function zw(t){Q.setTimeout(()=>{throw t},0)}let ai,ci=!1,tu=new $w,Tm=()=>{const t=Q.Promise.resolve(void 0);ai=()=>{t.then(Kw)}};var Kw=()=>{for(var t;t=jw();){try{t.h.call(t.g)}catch(n){zw(n)}var e=Im;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ci=!1};function ya(t,e){$e.call(this),this.h=t||1,this.g=e||Q,this.j=it(this.qb,this),this.l=Date.now()}qe(ya,$e);O=ya.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(nu(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){ya.$.N.call(this),nu(this),delete this.g};function ru(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function wm(t){t.g=ru(()=>{t.g=null,t.i&&(t.i=!1,wm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ww extends qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wm(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){qn.call(this),this.h=t,this.g={}}qe(li,qn);var Ad=[];function Am(t,e,n,r){Array.isArray(n)||(n&&(Ad[0]=n.toString()),n=Ad);for(var s=0;s<n.length;s++){var i=gm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rm(t){Ql(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jl(e)},t),t.g={}}li.prototype.N=function(){li.$.N.call(this),Rm(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function va(){this.g=!0}va.prototype.Ea=function(){this.g=!1};function Gw(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Qw(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Mr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jw(t,n)+(r?" "+r:"")})}function Yw(t,e){t.info(function(){return"TIMEOUT: "+e})}va.prototype.info=function(){};function Jw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return eu(n)}catch{return e}}var vr={},Rd=null;function Ea(){return Rd=Rd||new $e}vr.Ta="serverreachability";function Sm(t){ot.call(this,vr.Ta,t)}qe(Sm,ot);function ui(t){const e=Ea();Ge(e,new Sm(e))}vr.STAT_EVENT="statevent";function Cm(t,e){ot.call(this,vr.STAT_EVENT,t),this.stat=e}qe(Cm,ot);function ht(t){const e=Ea();Ge(e,new Cm(e,t))}vr.Ua="timingevent";function Pm(t,e){ot.call(this,vr.Ua,t),this.size=e}qe(Pm,ot);function Ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function su(){}su.prototype.h=null;function Sd(t){return t.h||(t.h=t.i())}function km(){}var Pi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function iu(){ot.call(this,"d")}qe(iu,ot);function ou(){ot.call(this,"c")}qe(ou,ot);var Yc;function Ta(){}qe(Ta,su);Ta.prototype.g=function(){return new XMLHttpRequest};Ta.prototype.i=function(){return{}};Yc=new Ta;function bi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new li(this),this.P=Xw,t=zc?125:void 0,this.V=new ya(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Dm}function Dm(){this.i=null,this.g="",this.h=!1}var Xw=45e3,Nm={},Jc={};O=bi.prototype;O.setTimeout=function(t){this.P=t};function Xc(t,e,n){t.L=1,t.A=Aa(ln(e)),t.u=n,t.S=!0,Om(t,null)}function Om(t,e){t.G=Date.now(),ki(t),t.B=ln(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),jm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Dm,t.g=cg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Ww(it(t.Pa,t,t.g),t.O)),Am(t.U,t.g,"readystatechange",t.nb),e=t.I?pm(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ui(),Gw(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||zc||this.g&&(this.h.h||this.g.ja()||kd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ui(3):ui(2)),wa(this);var n=this.g.da();this.ca=n;t:if(Vm(this)){var r=kd(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),zs(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Qw(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ii(a)){var l=a;break t}}l=null}if(n=l)Mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zc(this,n);else{this.i=!1,this.s=3,ht(12),rr(this),zs(this);break e}}this.S?(Mm(this,u,o),zc&&this.i&&u==3&&(Am(this.U,this.V,"tick",this.mb),this.V.start())):(Mr(this.j,this.m,o,null),Zc(this,o)),u==4&&rr(this),this.i&&!this.J&&(u==4?sg(this.l,this):(this.i=!1,ki(this)))}else vA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),rr(this),zs(this)}}}catch{}finally{}};function Vm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Mm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Zw(t,n),s==Jc){e==4&&(t.s=4,ht(14),r=!1),Mr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Nm){t.s=4,ht(15),Mr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Mr(t.j,t.m,s,null),Zc(t,s);Vm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),du(e),e.M=!0,ht(11))):(Mr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),zs(t))}O.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.o<e.length&&(wa(this),Mm(this,t,e),this.i&&t!=4&&ki(this))}};function Zw(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Jc:(n=Number(e.substring(n,r)),isNaN(n)?Nm:(r+=1,r+n>e.length?Jc:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,rr(this)};function ki(t){t.Y=Date.now()+t.P,xm(t,t.P)}function xm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ci(it(t.lb,t),e)}function wa(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Yw(this.j,this.B),this.L!=2&&(ui(),ht(17)),rr(this),this.s=2,zs(this)):xm(this,this.Y-t)};function zs(t){t.l.H==0||t.J||sg(t.l,t)}function rr(t){wa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,nu(t.V),Rm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Zc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||el(n.i,t))){if(!t.K&&el(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xo(n),Pa(n);else break e;hu(n),ht(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ci(it(n.ib,n),6e3));if(1>=Hm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&xo(n),!ii(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(au(i,i.h),i.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ae(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ag(r,r.J?r.pa:null,r.Y),o.K){zm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(wa(a),ki(a)),r.g=o}else ng(r);0<n.j.length&&ba(n)}else l[0]!="stop"&&l[0]!="close"||sr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sr(n,7):uu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ui(4)}catch{}}function eA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Lm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tA(t),r=eA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function lr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof lr){this.h=t.h,Vo(this,t.j),this.s=t.s,this.g=t.g,Mo(this,t.m),this.l=t.l;var e=t.i,n=new hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cd(this,n),this.o=t.o}else t&&(e=String(t).match(Fm))?(this.h=!1,Vo(this,e[1]||"",!0),this.s=Vs(e[2]||""),this.g=Vs(e[3]||"",!0),Mo(this,e[4]),this.l=Vs(e[5]||"",!0),Cd(this,e[6]||"",!0),this.o=Vs(e[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,Pd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ms(e,Pd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ms(n,n.charAt(0)=="/"?iA:sA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,aA)),t.join("")};function ln(t){return new lr(t)}function Vo(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cd(t,e,n){e instanceof hi?(t.i=e,cA(t.i,t.h)):(n||(e=Ms(e,oA)),t.i=new hi(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Aa(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pd=/[#\/\?@]/g,sA=/[#\?:]/g,iA=/[#\?]/g,oA=/[#\?@]/g,aA=/#/g;function hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hn(t){t.g||(t.g=new Map,t.h=0,t.i&&nA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=hi.prototype;O.add=function(t,e){Hn(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Um(t,e){Hn(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bm(t,e){return Hn(t),e=ms(t,e),t.g.has(e)}O.forEach=function(t,e){Hn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Hn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Hn(this);let e=[];if(typeof t=="string")Bm(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Hn(this),this.i=null,t=ms(this,t),Bm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jm(t,e,n){Um(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),Wl(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cA(t,e){e&&!t.j&&(Hn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Um(this,r),jm(this,s,n))},t)),t.j=e}var lA=class{constructor(t,e){this.g=t,this.map=e}};function $m(t){this.l=t||uA,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uA=10;function qm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hm(t){return t.h?1:t.g?t.g.size:0}function el(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function au(t,e){t.g?t.g.add(e):t.h=e}function zm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$m.prototype.cancel=function(){if(this.i=Km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Km(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Wl(t.i)}var hA=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function dA(){this.g=new hA}function fA(t,e,n){const r=n||"";try{Lm(t,function(s,i){let o=s;Ri(s)&&(o=eu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function pA(t,e){const n=new va;if(Q.Image){const r=new Image;r.onload=Ji(Zi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ji(Zi,n,r,"TestLoadImage: error",!1,e),r.onabort=Ji(Zi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ji(Zi,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ra(t){this.l=t.ec||null,this.j=t.ob||!1}qe(Ra,su);Ra.prototype.g=function(){return new Sa(this.l,this.j)};Ra.prototype.i=function(t){return function(){return t}}({});function Sa(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=cu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Sa,$e);var cu=0;O=Sa.prototype;O.open=function(t,e){if(this.readyState!=cu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=cu};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Wm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Di(this):di(this),this.readyState==3&&Wm(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Di(this))};O.Ya=function(t){this.g&&(this.response=t,Di(this))};O.ka=function(){this.g&&Di(this)};function Di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mA=Q.JSON.parse;function Pe(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gm,this.L=this.M=!1}qe(Pe,$e);var Gm="",gA=/^https?$/i,_A=["POST","PUT"];O=Pe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yc.g(),this.C=this.u?Sd(this.u):Sd(Yc),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){bd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=um(_A,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jm(this),0<this.B&&((this.L=yA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=ru(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){bd(this,i)}};function yA(t){return ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Kl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qm(t),Ca(t)}function Qm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ca(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ca(this,!0)),Pe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Ym(this):this.kb())};O.kb=function(){Ym(this)};function Ym(t){if(t.h&&typeof Kl<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)ru(t.La,0,t);else if(Ge(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Fm)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!gA.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qm(t)}}finally{Ca(t)}}}}function Ca(t,e){if(t.g){Jm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mA(e)}};function kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function vA(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ii(t[r]))continue;var n=Hw(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Lw(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xm(t){let e="";return Ql(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zm(t){this.Ga=0,this.j=[],this.l=new va,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Cs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Cs("baseRetryDelayMs",5e3,t),this.hb=Cs("retryDelaySeedMs",1e4,t),this.eb=Cs("forwardChannelMaxRetries",2,t),this.xa=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $m(t&&t.concurrentRequestLimit),this.Ja=new dA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Zm.prototype;O.ra=8;O.H=1;function uu(t){if(eg(t),t.H==3){var e=t.W++,n=ln(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Ni(t,n),e=new bi(t,t.l,e),e.L=2,e.A=Aa(ln(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=cg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ki(e)}og(t)}function Pa(t){t.g&&(du(t),t.g.cancel(),t.g=null)}function eg(t){Pa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),xo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function ba(t){if(!qm(t.i)&&!t.m){t.m=!0;var e=t.Na;ai||Tm(),ci||(ai(),ci=!0),tu.add(e,t),t.C=0}}function EA(t,e){return Hm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ci(it(t.Na,t,e),ig(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new bi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=pm(i),mm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tg(this,s,e),n=ln(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Ni(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xm(i)))+"&"+e:this.o&&lu(n,this.o,i)),au(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,Xc(s,n,null)):Xc(s,n,e),this.H=2}}else this.H==3&&(t?Dd(this,t):this.j.length==0||qm(this.i)||Dd(this))};function Dd(t,e){var n;e?n=e.m:n=t.W++;const r=ln(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),Ni(t,r),t.o&&t.s&&lu(r,t.o,t.s),n=new bi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),au(t.i,n),Xc(n,r,e)}function Ni(t,e){t.na&&Ql(t.na,function(n,r){Ae(e,r,n)}),t.h&&Lm({},function(n,r){Ae(e,r,n)})}function tg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?it(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{fA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ng(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ai||Tm(),ci||(ai(),ci=!0),tu.add(e,t),t.A=0}}function hu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ci(it(t.Ma,t),ig(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,rg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ci(it(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),Pa(this),rg(this))};function du(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function rg(t){t.g=new bi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ln(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),Ni(t,e),t.o&&t.s&&lu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Aa(ln(e)),n.u=null,n.S=!0,Om(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Pa(this),hu(this),ht(19))};function xo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function sg(t,e){var n=null;if(t.g==e){xo(t),du(t),t.g=null;var r=2}else if(el(t.i,e))n=e.F,zm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ea(),Ge(r,new Pm(r,n)),ba(t)}else ng(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&EA(t,e)||r==2&&hu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function ig(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=it(t.pb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Vo(n,"https"),Aa(n)),pA(n.toString(),r)}else ht(2);t.H=0,t.h&&t.h.za(e),og(t),eg(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function og(t){if(t.H=0,t.ma=[],t.h){const e=Km(t.i);(e.length!=0||t.j.length!=0)&&(Id(t.ma,e),Id(t.ma,t.j),t.i.i.length=0,Wl(t.j),t.j.length=0),t.h.ya()}}function ag(t,e,n){var r=n instanceof lr?ln(n):new lr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Mo(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new lr(null);r&&Vo(i,r),e&&(i.g=e),s&&Mo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),Ni(t,r),r}function cg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new Ra({ob:n})):new Pe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function lg(){}O=lg.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Lo(){if(ts&&!(10<=Number(Ow)))throw Error("Environmental error: no available transport.")}Lo.prototype.g=function(t,e){return new It(t,e)};function It(t,e){$e.call(this),this.g=new Zm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}qe(It,$e);It.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ag(t,null,t.Y),ba(t)};It.prototype.close=function(){uu(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eu(t),t=n);e.j.push(new lA(e.fb++,t)),e.H==3&&ba(e)};It.prototype.N=function(){this.g.h=null,delete this.j,uu(this.g),delete this.g,It.$.N.call(this)};function ug(t){iu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(ug,iu);function hg(){ou.call(this),this.status=1}qe(hg,ou);function gs(t){this.g=t}qe(gs,lg);gs.prototype.Ba=function(){Ge(this.g,"a")};gs.prototype.Aa=function(t){Ge(this.g,new ug(t))};gs.prototype.za=function(t){Ge(this.g,new hg)};gs.prototype.ya=function(){Ge(this.g,"b")};function IA(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(Vt,IA);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Vt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)mc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){mc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){mc(this,r),s=0;break}}this.h=s,this.i+=e};Vt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var TA={};function fu(t){return-128<=t&&128>t?kw(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Hr;if(0>t)return ze(qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=tl;return new ge(e,0)}function dg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(dg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),r=Hr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=qt(Math.pow(e,i)),r=r.R(i).add(qt(o))):(r=r.R(n),r=r.add(qt(o)))}return r}var tl=4294967296,Hr=fu(0),nl=fu(1),Nd=fu(16777216);O=ge.prototype;O.ea=function(){if(wt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:tl+r)*e,e*=tl}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(nn(this))return"0";if(wt(this))return"-"+ze(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,r="";;){var s=Uo(n,e).g;n=Fo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,nn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function nn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wt(t){return t.h==-1}O.X=function(t){return t=Fo(this,t),wt(t)?-1:nn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(nl)}O.abs=function(){return wt(this)?ze(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Fo(t,e){return t.add(ze(e))}O.R=function(t){if(nn(this)||nn(t))return Hr;if(wt(this))return wt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(wt(t))return ze(this.R(ze(t)));if(0>this.X(Nd)&&0>t.X(Nd))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,eo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,eo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,eo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,eo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function eo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ps(t,e){this.g=t,this.h=e}function Uo(t,e){if(nn(e))throw Error("division by zero");if(nn(t))return new Ps(Hr,Hr);if(wt(t))return e=Uo(ze(t),e),new Ps(ze(e.g),ze(e.h));if(wt(e))return e=Uo(t,ze(e)),new Ps(ze(e.g),e.h);if(30<t.g.length){if(wt(t)||wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=nl,r=e;0>=r.X(t);)n=Od(n),r=Od(r);var s=br(n,1),i=br(r,1);for(r=br(r,2),n=br(n,2);!nn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=br(r,1),n=br(n,1)}return e=Fo(t,s.R(e)),new Ps(s,e)}for(s=Hr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=qt(n),o=i.R(e);wt(o)||0<o.X(t);)n-=r,i=qt(n),o=i.R(e);nn(i)&&(i=nl),s=s.add(i),t=Fo(t,o)}return new Ps(s,t)}O.gb=function(t){return Uo(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function Od(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function br(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}Lo.prototype.createWebChannel=Lo.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Ia.NO_ERROR=0;Ia.TIMEOUT=8;Ia.HTTP_ERROR=6;bm.COMPLETE="complete";km.EventType=Pi;Pi.OPEN="a";Pi.CLOSE="b";Pi.ERROR="c";Pi.MESSAGE="d";$e.prototype.listen=$e.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=qt;ge.fromString=dg;var wA=function(){return new Lo},AA=function(){return Ea()},gc=Ia,RA=bm,SA=vr,Vd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},to=km,CA=Pe,PA=Vt,zr=ge;const Md="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new ql("@firebase/firestore");function bs(){return pr.logLevel}function L(t,...e){if(pr.logLevel<=se.DEBUG){const n=e.map(pu);pr.debug(`Firestore (${_s}): ${t}`,...n)}}function un(t,...e){if(pr.logLevel<=se.ERROR){const n=e.map(pu);pr.error(`Firestore (${_s}): ${t}`,...n)}}function ns(t,...e){if(pr.logLevel<=se.WARN){const n=e.map(pu);pr.warn(`Firestore (${_s}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function Ie(t,e){t||G()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class kA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DA{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new fg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new et(e)}}class NA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new VA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new xe(0,0))}static max(){return new J(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends fi{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const LA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends fi{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return LA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Re.fromString(e))}static fromName(e){return new K(Re.fromString(e).popFirst(5))}static empty(){return new K(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Re(e.slice()))}}function FA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Bn(s,K.empty(),e)}function UA(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bn(J.min(),K.empty(),-1)}static max(){return new Bn(J.max(),K.empty(),-1)}}function BA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==jA)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}mu._e=-1;function ka(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function qA(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gg("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=HA.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _u(t){const e=t.mapValue.fields.__previous_value__;return gu(e)?_u(e):e}function pi(t){const e=jn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gu(t)?4:KA(t)?9007199254740991:10:G()}function Qt(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jn(s.timestampValue),a=jn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),a=Ne(i.doubleValue);return o===a?Bo(o)===Bo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(xd(o)!==xd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qt(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function gi(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ne(i.integerValue||i.doubleValue),c=Ne(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(pi(t),pi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=mr(i),c=mr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(Ne(i.latitude),Ne(o.latitude));return a!==0?a:he(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ss(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ro.mapValue&&o===ro.mapValue)return 0;if(i===ro.mapValue)return 1;if(o===ro.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const m=ss(a[c[h]],l[u[h]]);if(m!==0)return m}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=jn(t),r=jn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function is(t){return rl(t)}function rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function sl(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fo(t){return!!t&&"mapValue"in t}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ks(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Er(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(Ks(this.value))}}function _g(t){const e=[];return Er(t.fields,(n,r)=>{const s=new Ke([n]);if(fo(r)){const i=_g(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.position=e,this.inclusive=n}}function jd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function WA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{}class Me extends yg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QA(e,n,r):n==="array-contains"?new XA(e,r):n==="in"?new ZA(e,r):n==="not-in"?new e0(e,r):n==="array-contains-any"?new t0(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YA(e,r):new JA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends yg{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Yt(e,n)}matches(e){return vg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vg(t){return t.op==="and"}function Eg(t){return GA(t)&&vg(t)}function GA(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function il(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+is(t.value);if(Eg(t))return t.filters.map(e=>il(e)).join(",");{const e=t.filters.map(n=>il(n)).join(",");return`${t.op}(${e})`}}function Ig(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ig(o,s.filters[a]),!0):!1}(t,e):void G()}function Tg(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(Tg).join(" ,")+"}"}(t):"Filter"}class QA extends Me{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class YA extends Me{constructor(e,n){super(e,"in",n),this.keys=wg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JA extends Me{constructor(e,n){super(e,"not-in",n),this.keys=wg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class XA extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&gi(n.arrayValue,this.value)}}class ZA extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class e0 extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gi(this.value.arrayValue,n)}}class t0 extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new n0(t,e,n,r,s,i,o)}function vu(t){const e=ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>il(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.ce=n}return e.ce}function Eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ig(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$d(t.startAt,e.startAt)&&$d(t.endAt,e.endAt)}function ol(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function r0(t,e,n,r,s,i,o,a){return new Da(t,e,n,r,s,i,o,a)}function Iu(t){return new Da(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s0(t){return t.collectionGroup!==null}function Ws(t){const e=ee(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qe(Ke.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new $o(i,r))}),n.has(Ke.keyField().canonicalString())||e.le.push(new $o(Ke.keyField(),r))}return e.le}function Ht(t){const e=ee(t);return e.he||(e.he=i0(e,Ws(t))),e.he}function i0(t,e){if(t.limitType==="F")return qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $o(s.field,i)});const n=t.endAt?new jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jo(t.startAt.position,t.startAt.inclusive):null;return qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function al(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return Eu(Ht(t),Ht(e))&&t.limitType===e.limitType}function Ag(t){return`${vu(Ht(t))}|lt:${t.limitType}`}function Nr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tg(s)).join(", ")}]`),ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function Oa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=jd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ws(r),s)||r.endAt&&!function(o,a,c){const l=jd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ws(r),s))}(t,e)}function o0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rg(t){return(e,n)=>{let r=!1;for(const s of Ws(t)){const i=a0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function a0(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ss(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Ce(K.comparator);function hn(){return c0}const Sg=new Ce(K.comparator);function xs(...t){let e=Sg;for(const n of t)e=e.insert(n.key,n);return e}function Cg(t){let e=Sg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return Gs()}function Pg(){return Gs()}function Gs(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const l0=new Ce(K.comparator),u0=new Qe(K.comparator);function re(...t){let e=u0;for(const n of t)e=e.add(n);return e}const h0=new Qe(he);function d0(){return h0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function kg(t){return{integerValue:""+t}}function f0(t,e){return qA(e)?kg(e):bg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this._=void 0}}function p0(t,e,n){return t instanceof qo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gu(i)&&(i=_u(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof _i?Ng(t,e):t instanceof yi?Og(t,e):function(s,i){const o=Dg(s,i),a=zd(o)+zd(s.Ie);return sl(o)&&sl(s.Ie)?kg(a):bg(s.serializer,a)}(t,e)}function m0(t,e,n){return t instanceof _i?Ng(t,e):t instanceof yi?Og(t,e):n}function Dg(t,e){return t instanceof Ho?function(r){return sl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qo extends Va{}class _i extends Va{constructor(e){super(),this.elements=e}}function Ng(t,e){const n=Vg(e);for(const r of t.elements)n.some(s=>Qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends Va{constructor(e){super(),this.elements=e}}function Og(t,e){let n=Vg(e);for(const r of t.elements)n=n.filter(s=>!Qt(s,r));return{arrayValue:{values:n}}}class Ho extends Va{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function zd(t){return Ne(t.integerValue||t.doubleValue)}function Vg(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function g0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?rs(r.elements,s.elements,Qt):r instanceof Ho&&s instanceof Ho?Qt(r.Ie,s.Ie):r instanceof qo&&s instanceof qo}(t.transform,e.transform)}class _0{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ma{}function Mg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tu(t.key,Nt.none()):new Mi(t.key,t.data,Nt.none());{const n=t.data,r=mt.empty();let s=new Qe(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zn(t.key,r,new vt(s.toArray()),Nt.none())}}function y0(t,e,n){t instanceof Mi?function(s,i,o){const a=s.value.clone(),c=Wd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(s,i,o){if(!po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Wd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(xg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Mi?function(i,o,a,c){if(!po(i.precondition,o))return a;const l=i.value.clone(),u=Gd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof zn?function(i,o,a,c){if(!po(i.precondition,o))return a;const l=Gd(i.fieldTransforms,c,o),u=o.data;return u.setAll(xg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function v0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Dg(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Kd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,o)=>g0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mi extends Ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zn extends Ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wd(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,m0(o,a,n[s]))}return r}function Gd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,p0(i,o,e))}return r}class Tu extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E0 extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&y0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Mg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>Kd(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>Kd(n,r))}}class wu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return l0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new wu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function A0(t){switch(t){default:return G();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Lg(t){if(t===void 0)return un("GRPC error has no .code"),A.UNKNOWN;switch(t){case De.OK:return A.OK;case De.CANCELLED:return A.CANCELLED;case De.UNKNOWN:return A.UNKNOWN;case De.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case De.INTERNAL:return A.INTERNAL;case De.UNAVAILABLE:return A.UNAVAILABLE;case De.UNAUTHENTICATED:return A.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case De.NOT_FOUND:return A.NOT_FOUND;case De.ALREADY_EXISTS:return A.ALREADY_EXISTS;case De.PERMISSION_DENIED:return A.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case De.ABORTED:return A.ABORTED;case De.OUT_OF_RANGE:return A.OUT_OF_RANGE;case De.UNIMPLEMENTED:return A.UNIMPLEMENTED;case De.DATA_LOSS:return A.DATA_LOSS;default:return G()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new zr([4294967295,4294967295],0);function Qd(t){const e=R0().encode(t),n=new PA;return n.update(e),new Uint8Array(n.digest())}function Yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zr([n,r],0),new zr([s,i],0)]}class Au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ls(`Invalid padding: ${n}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=zr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(zr.fromNumber(r)));return s.compare(S0)===1&&(s=new zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Qd(e),[r,s]=Yd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Au(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Qd(e),[r,s]=Yd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xa(J.min(),s,new Ce(he),hn(),re())}}class xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xi(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Fg{constructor(e,n){this.targetId=e,this.fe=n}}class Ug{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jd{constructor(){this.ge=0,this.pe=Zd(),this.ye=ct.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new xi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Zd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class C0{constructor(e){this.Le=e,this.ke=new Map,this.qe=hn(),this.Qe=Xd(),this.Ke=new Ce(he)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ol(i))if(r===0){const o=new K(i.path);this.We(n,o,tt.newNoDocument(o,J.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=mr(r).toUint8Array()}catch(c){if(c instanceof gg)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Au(o,s,i)}catch(c){return ns(c instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ol(a.target)){const c=new K(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,tt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,n,this.Ke,this.qe,r);return this.qe=hn(),this.Qe=Xd(),this.Ke=new Ce(he),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Jd,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Qe(he),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Jd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Xd(){return new Ce(K.comparator)}function Zd(){return new Ce(K.comparator)}const P0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),b0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),k0=(()=>({and:"AND",or:"OR"}))();class D0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cl(t,e){return t.useProto3Json||ka(e)?e:{value:e}}function zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function N0(t,e){return zo(t,e.toTimestamp())}function zt(t){return Ie(!!t),J.fromTimestamp(function(n){const r=jn(n);return new xe(r.seconds,r.nanos)}(t))}function Ru(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function jg(t){const e=Re.fromString(t);return Ie(zg(e)),e}function ll(t,e){return Ru(t.databaseId,e.path)}function _c(t,e){const n=jg(e);if(n.get(1)!==t.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K($g(n))}function ul(t,e){return Ru(t.databaseId,e)}function O0(t){const e=jg(t);return e.length===4?Re.emptyPath():$g(e)}function hl(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $g(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ef(t,e,n){return{name:ll(t,e),fields:n.value.mapValue.fields}}function V0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:Lg(l.code);return new j(u,l.message||"")}(o);n=new Ug(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):J.min(),a=new mt({mapValue:{fields:r.document.fields}}),c=tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new mo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?zt(r.readTime):J.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new mo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new w0(s,i),a=r.targetId;n=new Fg(a,o)}}return n}function M0(t,e){let n;if(e instanceof Mi)n={update:ef(t,e.key,e.value)};else if(e instanceof Tu)n={delete:ll(t,e.key)};else if(e instanceof zn)n={update:ef(t,e.key,e.data),updateMask:H0(e.fieldMask)};else{if(!(e instanceof E0))return G();n={verify:ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ho)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:N0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function x0(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?zt(s.updateTime):zt(i);return o.isEqual(J.min())&&(o=zt(i)),new _0(o,s.transformResults||[])}(n,e))):[]}function L0(t,e){return{documents:[ul(t,e.path)]}}function F0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ul(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ul(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Hg(Yt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Or(h.field),direction:j0(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=cl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function U0(t){let e=O0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=qg(h);return d instanceof Yt&&Eg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new $o(Vr(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ka(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new jo(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new jo(m,d)}(n.endAt)),r0(e,s,o,i,a,"F",c,l)}function B0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vr(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Vr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>qg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function j0(t){return P0[t]}function $0(t){return b0[t]}function q0(t){return k0[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Vr(t){return Ke.fromServerFormat(t.fieldPath)}function Hg(t){return t instanceof Me?function(n){if(n.op==="=="){if(Bd(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NAN"}};if(Ud(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bd(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NAN"}};if(Ud(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(n.field),op:$0(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>Hg(s));return r.length===1?r[0]:{compositeFilter:{op:q0(n.op),filters:r}}}(t):G()}function H0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.ut=e}}function K0(t){const e=U0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?al(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.on=new G0}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Bn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class G0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new os(0)}static Nn(){return new os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,vt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hn();const o=Gs(),a=function(){return Gs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof zn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Qs(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Y0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Ce((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||vt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Pg();u.forEach(d=>{if(!i.has(d)){const m=Mg(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(ir());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Cg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xs();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,c=>{const l=function(h,d){return new Da(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,tt.newInvalidDocument(u)))});let a=xs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Qs(u.mutation,l,vt.empty(),xe.now()),Oa(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:K0(s.bundledQuery),readTime:zt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.overlays=new Ce(K.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=ir(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ir(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ir(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new T0(n,r));let i=this.lr.get(n);i===void 0&&(i=re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.hr=new Qe(Fe.Pr),this.Ir=new Qe(Fe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Fe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new K(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new K(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return K.comparator(e.key,n.key)||he(e.gr,n.gr)}static Tr(e,n){return he(e.gr,n.gr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Qe(Fe.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new I0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(he);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new K(i),0);let a=new Qe(he);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.Cr=e,this.docs=function(){return new Ce(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||BA(UA(u),r)<=0||(s.has(u.key)||Oa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nR(this)}getSize(e){return S.resolve(this.size)}}class nR extends Q0{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.persistence=e,this.Fr=new ys(n=>vu(n),Eu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Su,this.targetCount=0,this.Nr=os.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.Br={},this.overlays={},this.Lr=new mu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new rR(this),this.indexManager=new W0,this.remoteDocumentCache=function(s){return new tR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new z0(n),this.Kr=new X0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Z0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new eR(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new iR(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class iR extends $A{constructor(e){super(),this.currentSequenceNumber=e}}class Cu{constructor(e){this.persistence=e,this.Gr=new Su,this.zr=null}static jr(e){return new Cu(e)}get Hr(){if(this.zr)return this.zr;throw G()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const s=K.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new oR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(bs()<=se.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Nr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(bs()<=se.DEBUG&&L("QueryEngine","Query:",Nr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(bs()<=se.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Nr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):S.resolve())}zi(e,n){if(Hd(n))return S.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=al(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,al(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Hd(n)||s.isEqual(J.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?S.resolve(null):(bs()<=se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(n)),this.Xi(e,o,n,FA(s,-1)).next(a=>a))})}Yi(e,n){let r=new Qe(Rg(e));return n.forEach((s,i)=>{Oa(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return bs()<=se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Nr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Bn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ce(he),this.ns=new ys(i=>vu(i),Eu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J0(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function lR(t,e,n,r){return new cR(t,e,n,r)}async function Kg(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function uR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=S.resolve();return d.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const w=l.docVersions.get(y);Ie(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Wg(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function hR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(v,w,b){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=hn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(dR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function dR(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function fR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pR(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function dl(t,e,n){const r=ee(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vi(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function tf(t,e,n){const r=ee(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ee(c),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,Ht(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(mR(r,o0(e),a),{documents:a,ls:i})))}function mR(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class nf{constructor(){this.activeTargetIds=d0()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gR{constructor(){this.eo=new nf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new nf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function yc(){return so===null?so=function(){return 268435456+Math.round(2147483648*Math.random())}():so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class ER extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=yc(),c=this.So(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ns("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=yR[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=yc();return new Promise((o,a)=>{const c=new CA;c.setWithCredentials(!0),c.listenOnce(RA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gc.NO_ERROR:const u=c.getResponseJson();L(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case gc.TIMEOUT:L(Xe,`RPC '${e}' ${i} timed out`),a(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const h=c.getStatus();if(L(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(w){const b=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(m.status);a(new j(y,m.message))}else a(new j(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(A.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);L(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=yc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wA(),a=AA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const y=new vR({co:w=>{m?L(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||(L(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),L(Xe,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},lo:()=>h.close()}),v=(w,b,k)=>{w.listen(b,B=>{try{k(B)}catch(V){setTimeout(()=>{throw V},0)}})};return v(h,to.EventType.OPEN,()=>{m||L(Xe,`RPC '${e}' stream ${s} transport opened.`)}),v(h,to.EventType.CLOSE,()=>{m||(m=!0,L(Xe,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),v(h,to.EventType.ERROR,w=>{m||(m=!0,ns(Xe,`RPC '${e}' stream ${s} transport errored:`,w),y.Ro(new j(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,to.EventType.MESSAGE,w=>{var b;if(!m){const k=w.data[0];Ie(!!k);const B=k,V=B.error||((b=B[0])===null||b===void 0?void 0:b.error);if(V){L(Xe,`RPC '${e}' stream ${s} received error:`,V);const te=V.status;let ce=function(ue){const oe=De[ue];if(oe!==void 0)return Lg(oe)}(te),Te=V.message;ce===void 0&&(ce=A.INTERNAL,Te="Unknown error status: "+te+" with message "+V.message),m=!0,y.Ro(new j(ce,Te)),h.close()}else L(Xe,`RPC '${e}' stream ${s} received:`,k),y.Vo(k)}}),v(a,SA.STAT_EVENT,w=>{w.stat===Vd.PROXY?L(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Vd.NOPROXY&&L(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){return new D0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Gg(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new j(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IR extends Qg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=V0(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?zt(o.readTime):J.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=hl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ol(c)?{documents:L0(i,c)}:{query:F0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Bg(i,o.resumeToken);const l=cl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=zo(i,o.snapshotVersion.toTimestamp());const l=cl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=B0(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=hl(this.serializer),n.removeTarget=e,this.e_(n)}}class TR extends Qg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=x0(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.I_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=hl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>M0(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(A.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(A.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class AR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(un(n),this.f_=!1):L("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ir(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ee(c);l.C_.add(4),await Li(l),l.M_.set("Unknown"),l.C_.delete(4),await Fa(l)}(this))})}),this.M_=new AR(r,s)}}async function Fa(t){if(Ir(t))for(const e of t.v_)await e(!0)}async function Li(t){for(const e of t.v_)await e(!1)}function Yg(t,e){const n=ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Du(n)?ku(n):vs(n).Ho()&&bu(n,e))}function Jg(t,e){const n=ee(t),r=vs(n);n.D_.delete(e),r.Ho()&&Xg(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Ir(n)&&n.M_.set("Unknown"))}function bu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).u_(e)}function Xg(t,e){t.x_.Oe(e),vs(t).c_(e)}function ku(t){t.x_=new C0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.M_.g_()}function Du(t){return Ir(t)&&!vs(t).jo()&&t.D_.size>0}function Ir(t){return ee(t).C_.size===0}function Zg(t){t.x_=void 0}async function SR(t){t.D_.forEach((e,n)=>{bu(t,e)})}async function CR(t,e){Zg(t),Du(t)?(t.M_.w_(e),ku(t)):t.M_.set("Unknown")}async function PR(t,e,n){if(t.M_.set("Online"),e instanceof Ug&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ko(t,r)}else if(e instanceof mo?t.x_.$e(e):e instanceof Fg?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(J.min()))try{const r=await Wg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(ct.EMPTY_BYTE_STRING,u.snapshotVersion)),Xg(i,c);const h=new Dn(u.target,c,l,u.sequenceNumber);bu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Ko(t,r)}}async function Ko(t,e,n){if(!Vi(e))throw e;t.C_.add(1),await Li(t),t.M_.set("Offline"),n||(n=()=>Wg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Fa(t)})}function e_(t,e){return e().catch(n=>Ko(t,n,e))}async function Ua(t){const e=ee(t),n=$n(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;bR(e);)try{const s=await fR(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,kR(e,s)}catch(s){await Ko(e,s)}t_(e)&&n_(e)}function bR(t){return Ir(t)&&t.b_.length<10}function kR(t,e){t.b_.push(e);const n=$n(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function t_(t){return Ir(t)&&!$n(t).jo()&&t.b_.length>0}function n_(t){$n(t).start()}async function DR(t){$n(t).E_()}async function NR(t){const e=$n(t);for(const n of t.b_)e.P_(n.mutations)}async function OR(t,e,n){const r=t.b_.shift(),s=wu.from(r,e,n);await e_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function VR(t,e){e&&$n(t).h_&&await async function(r,s){if(function(o){return A0(o)&&o!==A.ABORTED}(s.code)){const i=r.b_.shift();$n(r).Yo(),await e_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(r)}}(t,e),t_(t)&&n_(t)}async function sf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Ir(n);n.C_.add(3),await Li(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Fa(n)}async function MR(t,e){const n=ee(t);e?(n.C_.delete(2),await Fa(n)):e||(n.C_.add(2),await Li(n),n.M_.set("Unknown"))}function vs(t){return t.O_||(t.O_=function(n,r,s){const i=ee(n);return i.A_(),new IR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:SR.bind(null,t),Io:CR.bind(null,t),a_:PR.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Du(t)?ku(t):t.M_.set("Unknown")):(await t.O_.stop(),Zg(t))})),t.O_}function $n(t){return t.N_||(t.N_=function(n,r,s){const i=ee(n);return i.A_(),new TR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:DR.bind(null,t),Io:VR.bind(null,t),T_:NR.bind(null,t),I_:OR.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ua(t)):(await t.N_.stop(),t.b_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Nu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ou(t,e){if(un("AsyncQueue",`${e}: ${t}`),Vi(t))return new j(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.B_=new Ce(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):G():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new as(e,n,Kr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.k_=void 0,this.listeners=[]}}class LR{constructor(){this.queries=new ys(e=>Ag(e),Na),this.onlineState="Unknown",this.q_=new Set}}async function r_(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new xR),s)try{i.k_=await n.onListen(r)}catch(o){const a=Ou(o,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Vu(n)}async function s_(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function FR(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Vu(n)}function UR(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Vu(t){t.q_.forEach(e=>{e.next()})}class i_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.key=e}}class a_{constructor(e){this.key=e}}class BR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=Rg(e),this.aa=new Kr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new of,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=Oa(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),w=!0):this.ha(d,m)||(r.track({type:2,doc:m}),w=!0,(c&&this._a(m,c)>0||l&&this._a(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(m,y){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return v(m)-v(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new as(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new of,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new a_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new o_(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return as.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class jR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $R{constructor(e){this.key=e,this.Ra=!1}}class qR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ys(a=>Ag(a),Na),this.fa=new Map,this.ga=new Set,this.pa=new Ce(K.comparator),this.ya=new Map,this.wa=new Su,this.Sa={},this.ba=new Map,this.Da=os.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function HR(t,e){const n=eS(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await pR(n.localStore,Ht(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await zR(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Yg(n.remoteStore,o)}return s}async function zR(t,e,n,r,s){t.va=(h,d,m)=>async function(v,w,b,k){let B=w.view.ca(b);B.Zi&&(B=await tf(v.localStore,w.query,!1).then(({documents:Te})=>w.view.ca(Te,B)));const V=k&&k.targetChanges.get(w.targetId),te=k&&k.targetMismatches.get(w.targetId)!=null,ce=w.view.applyChanges(B,v.isPrimaryClient,V,te);return cf(v,w.targetId,ce.Ta),ce.snapshot}(t,h,d,m);const i=await tf(t.localStore,e,!0),o=new BR(e,i.ls),a=o.ca(i.documents),c=xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);cf(t,n,l.Ta);const u=new jR(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function KR(t,e){const n=ee(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Na(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Jg(n.remoteStore,r.targetId),fl(n,r.targetId)}).catch(Oi)):(fl(n,r.targetId),await dl(n.localStore,r.targetId,!0))}async function WR(t,e,n){const r=tS(t);try{const s=await function(o,a){const c=ee(o),l=xe.now(),u=a.reduce((m,y)=>m.add(y.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=hn(),v=re();return c.ss.getEntries(m,u).next(w=>{y=w,y.forEach((b,k)=>{k.isValidDocument()||(v=v.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(w=>{h=w;const b=[];for(const k of a){const B=v0(k,h.get(k.key).overlayedDocument);B!=null&&b.push(new zn(k.key,B,_g(B.value.mapValue),Nt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,b,a)}).next(w=>{d=w;const b=w.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,w.batchId,b)})}).then(()=>({batchId:d.batchId,changes:Cg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Ce(he)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Fi(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=Ou(s,"Failed to persist write");n.reject(i)}}async function c_(t,e){const n=ee(t);try{const r=await hR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ie(o.Ra):s.removedDocuments.size>0&&(Ie(o.Ra),o.Ra=!1))}),await Fi(n,r,e)}catch(r){await Oi(r)}}function af(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Vu(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GR(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ce(K.comparator);o=o.insert(i,tt.newNoDocument(i,J.min()));const a=re().add(i),c=new xa(J.min(),new Map,new Ce(he),o,a);await c_(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Mu(r)}else await dl(r.localStore,e,!1).then(()=>fl(r,e,n)).catch(Oi)}async function QR(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await uR(n.localStore,e);u_(n,r,null),l_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(n,s)}catch(s){await Oi(s)}}async function YR(t,e,n){const r=ee(t);try{const s=await function(o,a){const c=ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);u_(r,e,n),l_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fi(r,s)}catch(s){await Oi(s)}}function l_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function u_(t,e,n){const r=ee(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||h_(t,r)})}function h_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Jg(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Mu(t))}function cf(t,e,n){for(const r of n)r instanceof o_?(t.wa.addReference(r.key,e),JR(t,r)):r instanceof a_?(L("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||h_(t,r.key)):G()}function JR(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ga.add(r),Mu(t))}function Mu(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new K(Re.fromString(e)),r=t.Da.next();t.ya.set(r,new $R(n)),t.pa=t.pa.insert(n,r),Yg(t.remoteStore,new Dn(Ht(Iu(n.path)),r,"TargetPurposeLimboResolution",mu._e))}}async function Fi(t,e,n){const r=ee(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Pu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,d=>S.forEach(d.ki,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>S.forEach(d.qi,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Vi(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.ts.get(d),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,v)}}}(r.localStore,i))}async function XR(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Kg(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new j(A.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(n,r._s)}}function ZR(t,e){const n=ee(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let s=re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function eS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=c_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GR.bind(null,e),e.Va.a_=FR.bind(null,e.eventManager),e.Va.Fa=UR.bind(null,e.eventManager),e}function tS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YR.bind(null,e),e}class lf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=La(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lR(this.persistence,new aR,e.initialUser,this.serializer)}createPersistence(e){return new sR(Cu.jr,this.serializer)}createSharedClientState(e){return new gR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>af(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XR.bind(null,this.syncEngine),await MR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LR}()}createDatastore(e){const n=La(e.databaseInfo.databaseId),r=function(i){return new ER(i)}(e.databaseInfo);return function(i,o,a,c){return new wR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new RR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>af(this.syncEngine,n,0),function(){return rf.D()?new rf:new _R}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new qR(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ee(n);L("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Li(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ou(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ec(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iS(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>sf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>sf(e.remoteStore,i)),t._onlineComponents=e}function sS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sS(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Ec(t,new lf)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Ec(t,new lf);return t._offlineComponents}async function f_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await uf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await uf(t,new nS))),t._onlineComponents}function oS(t){return f_(t).then(e=>e.syncEngine)}async function p_(t){const e=await f_(t),n=e.eventManager;return n.onListen=HR.bind(null,e.syncEngine),n.onUnlisten=KR.bind(null,e.syncEngine),n}function aS(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new d_({next:d=>{o.enqueueAndForget(()=>s_(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new j(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new j(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new i_(Iu(a.path),u,{includeMetadataChanges:!0,J_:!0});return r_(i,h)}(await p_(t),t.asyncQueue,e,n,r)),r.promise}function cS(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new d_({next:d=>{o.enqueueAndForget(()=>s_(i,h)),d.fromCache&&c.source==="server"?l.reject(new j(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new i_(a,u,{includeMetadataChanges:!0,J_:!0});return r_(i,h)}(await p_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lS(t,e,n,r){if(e===!0&&r===!0)throw new j(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function df(t){if(!K.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(K.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new j(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bA;switch(r.type){case"firstParty":return new OA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hf.get(n);r&&(L("ComponentProvider","Removing Datastore"),hf.delete(n),r.terminate())}(this),Promise.resolve()}}function uS(t,e,n,r={}){var s;const i=(t=dn(t,Ba))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=et.MOCK_USER;else{a=nT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(l)}t._authCredentials=new kA(new fg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ja(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Ln extends ja{constructor(e,n,r){super(e,n,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new K(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function mf(t,e,...n){if(t=Ye(t),g_("collection","path",e),t instanceof Ba){const r=Re.fromString(e,...n);return ff(r),new Ln(t,null,r)}{if(!(t instanceof Et||t instanceof Ln))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return ff(r),new Ln(t.firestore,null,r)}}function Fs(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=pg.newId()),g_("doc","path",e),t instanceof Ba){const r=Re.fromString(e,...n);return df(r),new Et(t,null,new K(r))}{if(!(t instanceof Et||t instanceof Ln))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return df(r),new Et(t.firestore,t instanceof Ln?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Gg(this,"async_queue_retry"),this.iu=()=>{const n=vc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=vc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new cn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Vi(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Nu.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&G()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Es extends Ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new hS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||__(this),this._firestoreClient.terminate()}}function dS(t,e){const n=typeof t=="object"?t:am(),r=typeof t=="string"?t:e||"(default)",s=zl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eT("firestore");i&&uS(s,...i)}return s}function Lu(t){return t._firestoreClient||__(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function __(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new zA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,m_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new rS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(ct.fromBase64String(e))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=/^__.*__$/;class pS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mi(e,this.data,n,this.fieldTransforms)}}class y_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function v_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Bu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Wo(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(v_(this.Iu)&&fS.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class mS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||La(e)}pu(e,n,r,s=!1){return new Bu({Iu:e,methodName:n,gu:r,path:Ke.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function E_(t){const e=t._freezeSettings(),n=La(t._databaseId);return new mS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gS(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);ju("Data must be an object, but it was:",o,r);const a=I_(r,o);let c,l;if(i.merge)c=new vt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=pl(e,h,n);if(!o.contains(d))throw new j(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);w_(u,d)||u.push(d)}c=new vt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new pS(new mt(a),c,l)}class qa extends Fu{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}function _S(t,e,n,r){const s=t.pu(1,e,n);ju("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();Er(r,(c,l)=>{const u=$u(e,c,n);l=Ye(l);const h=s.Ru(u);if(l instanceof qa)i.push(u);else{const d=Ha(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new vt(i);return new y_(o,a,s.fieldTransforms)}function yS(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[pl(e,r,n)],c=[s];if(i.length%2!=0)throw new j(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(pl(e,i[d])),c.push(i[d+1]);const l=[],u=mt.empty();for(let d=a.length-1;d>=0;--d)if(!w_(l,a[d])){const m=a[d];let y=c[d];y=Ye(y);const v=o.Ru(m);if(y instanceof qa)l.push(m);else{const w=Ha(y,v);w!=null&&(l.push(m),u.set(m,w))}}const h=new vt(l);return new y_(u,h,o.fieldTransforms)}function Ha(t,e){if(T_(t=Ye(t)))return ju("Unsupported field value:",e,t),I_(t,e);if(t instanceof Fu)return function(r,s){if(!v_(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ha(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:zo(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zo(s.serializer,i)}}if(r instanceof Uu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:Bg(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ru(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${xu(r)}`)}(t,e)}function I_(t,e){const n={};return mg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(r,s)=>{const i=Ha(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function T_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Uu||t instanceof cs||t instanceof Et||t instanceof Fu)}function ju(t,e,n){if(!T_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=xu(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function pl(t,e,n){if((e=Ye(e))instanceof $a)return e._internalPath;if(typeof e=="string")return $u(t,e);throw Wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const vS=new RegExp("[~\\*/\\[\\]]");function $u(t,e,n){if(e.search(vS)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $a(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(A.INVALID_ARGUMENT,a+t+c)}function w_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ES(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(R_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ES extends A_{data(){return super.data()}}function R_(t,e){return typeof e=="string"?$u(t,e):e instanceof $a?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TS{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Er(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Uu(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_u(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=jn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Ie(zg(r));const s=new mi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class S_ extends A_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(R_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class go extends S_{data(e={}){return super.data(e)}}class AS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new go(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Us(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new go(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Us(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:RS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){t=dn(t,Et);const e=dn(t.firestore,Es);return aS(Lu(e),t._key).then(n=>kS(e,t,n))}class C_ extends TS{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function CS(t){t=dn(t,ja);const e=dn(t.firestore,Es),n=Lu(e),r=new C_(e);return IS(t._query),cS(n,t._query).then(s=>new AS(e,r,t,s))}function gf(t,e,n,...r){t=dn(t,Et);const s=dn(t.firestore,Es),i=E_(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof $a?yS(i,"updateDoc",t._key,e,n,r):_S(i,"updateDoc",t._key,e),qu(s,[o.toMutation(t._key,Nt.exists(!0))])}function PS(t){return qu(dn(t.firestore,Es),[new Tu(t._key,Nt.none())])}function bS(t,e){const n=dn(t.firestore,Es),r=Fs(t),s=wS(t.converter,e);return qu(n,[gS(E_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function qu(t,e){return function(r,s){const i=new cn;return r.asyncQueue.enqueueAndForget(async()=>WR(await oS(r),s,i)),i.promise}(Lu(t),e)}function kS(t,e,n){const r=n.docs.get(e._key),s=new C_(t);return new S_(t,s,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){_s=s})(ps),es(new dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Es(new DA(r.getProvider("auth-internal")),new MA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xn(Md,"4.4.0",e),xn(Md,"4.4.0","esm2017")})();function Hu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function P_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DS=P_,b_=new wi("auth","Firebase",P_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new ql("@firebase/auth");function NS(t,...e){Go.logLevel<=se.WARN&&Go.warn(`Auth (${ps}): ${t}`,...e)}function _o(t,...e){Go.logLevel<=se.ERROR&&Go.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw zu(t,...e)}function Kt(t,...e){return zu(t,...e)}function OS(t,e,n){const r=Object.assign(Object.assign({},DS()),{[e]:n});return new wi("auth","Firebase",r).create(e,{appName:t.name})}function zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b_.create(t,...e)}function W(t,e,...n){if(!t)throw zu(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function fn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VS(){return _f()==="http:"||_f()==="https:"}function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VS()||sT()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=rT()||iT()}get(){return MS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new Ui(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,s={}){return D_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),k_.fetch()(N_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function D_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LS),e);try{const s=new BS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw io(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw OS(t,u,l);Mt(t,u)}}catch(s){if(s instanceof mn)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function Bi(t,e,n,r,s={}){const i=await gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function N_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ku(t.config,s):`${t.config.apiScheme}://${s}`}function US(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),FS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}function yf(t){return t!==void 0&&t.enterprise!==void 0}class jS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return US(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $S(t,e){return gn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function HS(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zS(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Wu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(Ic(s.auth_time)),issuedAtTime:Ys(Ic(s.iat)),expirationTime:Ys(Ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function Wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=em(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function KS(t){const e=Wu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&WS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ls(t,HS(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?JS(i.providerUserInfo):[],a=YS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new O_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function QS(t){const e=Ye(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function JS(t){return t.map(e=>{var{providerId:n}=e,r=Hu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){const n=await D_(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=N_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZS(t,e){return gn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new O_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zS(this,e)}reload(){return QS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ls(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:V,isAnonymous:te,providerData:ce,stsTokenManager:Te}=n;W(B&&Te,e,"internal-error");const Y=vi.fromJSON(this.name,Te);W(typeof B=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),wn(m,e.name),wn(y,e.name),wn(v,e.name),wn(w,e.name),wn(b,e.name),wn(k,e.name);const ue=new ur({uid:B,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:te,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:Y,createdAt:b,lastLoginAt:k});return ce&&Array.isArray(ce)&&(ue.providerData=ce.map(oe=>Object.assign({},oe))),w&&(ue._redirectEventId=w),ue}static async _fromIdTokenResponse(e,n,r=!1){const s=new vi;s.updateFromServerResponse(n);const i=new ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Map;function sn(t){fn(t instanceof Function,"Expected a class definition");let e=vf.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V_.type="NONE";const Ef=V_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(sn(Ef),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||sn(Ef);const o=yo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ur._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U_(e))return"Blackberry";if(B_(e))return"Webos";if(Gu(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(F_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function M_(t=at()){return/firefox\//i.test(t)}function Gu(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=at()){return/crios\//i.test(t)}function L_(t=at()){return/iemobile/i.test(t)}function F_(t=at()){return/android/i.test(t)}function U_(t=at()){return/blackberry/i.test(t)}function B_(t=at()){return/webos/i.test(t)}function za(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eC(t=at()){var e;return za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tC(){return oT()&&document.documentMode===10}function j_(t=at()){return za(t)||F_(t)||B_(t)||U_(t)||/windows phone/i.test(t)||L_(t)}function nC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t,e=[]){let n;switch(t){case"Browser":n=If(at());break;case"Worker":n=`${If(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e={}){return gn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=6;class oC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new rC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sC(this),n=new oC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return Ye(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=fT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function q_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})}function lC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uC="https://www.google.com/recaptcha/enterprise.js?render=",hC="recaptcha-enterprise",dC="NO_RECAPTCHA";class fC{constructor(e){this.type=hC,this.auth=Tr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{$S(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new jS(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;yf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(dC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}q_(uC+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function wf(t,e,n,r=!1){const s=new fC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await wf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){const n=zl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function mC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gC(t,e,n){const r=Tr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=H_(e),{host:o,port:a}=_C(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yC()}function H_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _C(t){const e=H_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Af(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Af(o)}}}function Af(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function vC(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){return Bi(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function TC(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Qu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ei(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,n,"signInWithPassword",EC);case"emailLink":return IC(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,r,"signUpPassword",vC);case"emailLink":return TC(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return Bi(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="http://localhost";class _r extends Qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:wC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RC(t){const e=Ns(Os(t)).link,n=e?Ns(Os(e)).deep_link_id:null,r=Ns(Os(t)).deep_link_id;return(r?Ns(Os(r)).link:null)||r||n||e||t}class Yu{constructor(e){var n,r,s,i,o,a;const c=Ns(Os(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=AC((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RC(e);try{return new Yu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yu.parseLink(n);return W(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ji{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ji{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ji{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e){return Bi(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ur._fromIdTokenResponse(e,r,s),o=Rf(r);return new yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Rf(r);return new yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yo(e,n,r,s)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,r):i})}async function CC(t,e,n=!1){const r=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ls(t,K_(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Wu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(t,e,n=!1){const r="signIn",s=await K_(t,r,e),i=await yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bC(t,e){return W_(Tr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t){const e=Tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kC(t,e,n){const r=Tr(t),o=await gl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&G_(t),c}),a=await yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function DC(t,e,n){return bC(Ye(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&G_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return gn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ls(r,NC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VC(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function MC(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function xC(t){return Ye(t).signOut()}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){const t=at();return Gu(t)||za(t)}const FC=1e3,UC=10;class Y_ extends Q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LC()&&nC(),this.fallbackToPolling=j_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y_.type="LOCAL";const BC=Y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends Q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J_.type="SESSION";const X_=J_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ju("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function qC(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function HC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KC(){return Z_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="firebaseLocalStorageDb",WC=1,Xo="firebaseLocalStorage",ty="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function GC(){const t=indexedDB.deleteDatabase(ey);return new $i(t).toPromise()}function _l(){const t=indexedDB.open(ey,WC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:ty})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await GC(),e(await _l()))})})}async function Sf(t,e,n){const r=Wa(t,!0).put({[ty]:e,value:n});return new $i(r).toPromise()}async function QC(t,e){const n=Wa(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function Cf(t,e){const n=Wa(t,!0).delete(e);return new $i(n).toPromise()}const YC=800,JC=3;class ny{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(KC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HC(),!this.activeServiceWorker)return;this.sender=new $C(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _l();return await Sf(e,Jo,"1"),await Cf(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wa(s,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ny.type="LOCAL";const XC=ny;new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e){return e?sn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Qu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eP(t){return W_(t.auth,new Xu(t),t.bypassAuthState)}function tP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),PC(n,new Xu(t),t.bypassAuthState)}async function nP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),CC(n,new Xu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:Mt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Ui(2e3,1e4);class xr extends ry{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="pendingRedirect",vo=new Map;class iP extends ry{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(t,e){const n=lP(e),r=cP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aP(t,e){vo.set(t._key(),e)}function cP(t){return sn(t._redirectPersistence)}function lP(t){return yo(sP,t.config.apiKey,t.name)}async function uP(t,e,n=!1){const r=Tr(t),s=ZC(r,e),o=await new iP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=10*60*1e3;class dP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pf(e))}saveEventToCache(e){this.cachedEventUids.add(Pf(e)),this.lastProcessedEventTime=Date.now()}}function Pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gP=/^https?/;async function _P(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pP(t);for(const n of e)try{if(yP(n))return}catch{}Mt(t,"unauthorized-domain")}function yP(t){const e=ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gP.test(n))return!1;if(mP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new Ui(3e4,6e4);function bf(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EP(t){return new Promise((e,n)=>{var r,s,i;function o(){bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bf(),n(Kt(t,"network-request-failed"))},timeout:vP.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=lC("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},q_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function IP(t){return Eo=Eo||EP(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new Ui(5e3,15e3),wP="__/auth/iframe",AP="emulator/auth/iframe",RP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CP(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ku(e,AP):`https://${t.config.authDomain}/${wP}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=SP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function PP(t){const e=await IP(t),n=Wt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:CP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},TP.get());function c(){Wt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kP=500,DP=600,NP="_blank",OP="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VP(t,e,n,r=kP,s=DP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=x_(l)?NP:n),M_(l)&&(e=e||OP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(eC(l)&&a!=="_self")return MP(e||"",a),new kf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new kf(h)}function MP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="__/auth/handler",LP="emulator/auth/handler",FP=encodeURIComponent("fac");async function Df(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof z_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ji){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${FP}=${encodeURIComponent(c)}`:"";return`${UP(t)}?${Ai(a).slice(1)}${l}`}function UP({config:t}){return t.emulator?Ku(t,LP):`https://${t.authDomain}/${xP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class BP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=X_,this._completeRedirectFn=uP,this._overrideRedirectResult=aP}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Df(e,n,r,ml(),s);return VP(e,o,Ju())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Df(e,n,r,ml(),s);return qC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PP(e),r=new dP(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_P(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return j_()||Gu()||za()}}const jP=BP;var Nf="@firebase/auth",Of="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HP(t){es(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(t)},l=new aC(r,s,i,c);return mC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new dr("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(r=>new $P(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Nf,Of,qP(t)),xn(Nf,Of,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=5*60,KP=rm("authIdTokenMaxAge")||zP;let Vf=null;const WP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KP)return;const s=n==null?void 0:n.token;Vf!==s&&(Vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GP(t=am()){const e=zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pC(t,{popupRedirectResolver:jP,persistence:[XC,BC,X_]}),r=rm("authTokenSyncURL");if(r){const i=WP(r);MC(n,i,()=>i(n.currentUser)),VC(n,o=>i(o))}const s=tm("auth");return s&&gC(n,`http://${s}`),n}HP("Browser");const QP={apiKey:"AIzaSyDRqp4eZ1sWDrERrcVmQ62qNV88ZarARgI",authDomain:"collabora-961fc.firebaseapp.com",projectId:"collabora-961fc",storageBucket:"collabora-961fc.appspot.com",messagingSenderId:"179367425509",appId:"1:179367425509:web:1a46be044305e4a425eb0c",measurementId:"G-CR2W3H400C"},iy=om(QP),kr=dS(iy),Ii=GP(iy);const YP={components:{ModalForm:HI},created(){this.getTasks().then(t=>{this.tasks=dd(t,this.selectedGroupID,this.selectedSortID)})},data(){return{isModalVisible:!1,isEditMode:!1,selectedGroupID:0,selectedSortID:0,tasks:{},formData:{taskID:"",course:"",deadline:"",author:"",type:"",visibility:"",groups:[],description:""}}},methods:{showModal(){console.log("Clicked"),this.isModalVisible=!0,console.log(this.isModalVisible)},closeModal(){this.isModalVisible=!1,this.isEditMode=!1,console.log(this.isModalVisible)},async getTasks(){let t=[];return(await CS(mf(kr,"tasks"))).forEach(n=>{t.push(n.data())}),t},loadView(){this.selectedGroupID=Number(this.selectedGroupID),this.selectedSortID=Number(this.selectedSortID),this.getTasks().then(t=>{this.tasks=dd(t,this.selectedGroupID,this.selectedSortID)})},callSubmitHandler(){isEditMode?this.editItem():this.addItem()},async addItem(){const t=mf(kr,"tasks"),e=this.formData,n=await bS(t,e);if(console.log(n.id),n!=null){const r=Fs(kr,"tasks",n.id);await gf(r,{taskID:n.id})}this.formData={taskID:"",course:"",deadline:"",author:"",type:"",visibility:"",groups:[],description:""},this.closeModal(),this.loadView()},async openEditor(t){this.isEditMode=!0;let e=t.target.getAttribute("data-link");console.log(e);const n=await SS(Fs(kr,"tasks",e));if(n!=null){let r=n.data();this.formData=r,this.showModal()}},async editItem(){let t=this.formData.taskID;const e=Fs(kr,"tasks",t);await gf(e,this.formData),this.formData={taskID:"",course:"",deadline:"",author:"",type:"",visibility:"",groups:[],description:""},this.closeModal(),this.loadView()},async deleteItem(t){let e=t.target.getAttribute("data-link");console.log(e),await PS(Fs(kr,"tasks",e)),this.loadView()}}},JP=I("h1",null,"Targets",-1),XP=I("p",null,"Find your submission and test dates here!",-1),ZP={class:"filter-wrap"},eb=Mp('<option value="0">Date</option><option value="1">Course</option><option value="2">Type</option><option value="3">Date (desc)</option><option value="4">Course (desc)</option><option value="5">Type (desc)</option>',6),tb=[eb],nb=Mp('<option value="0">Date</option><option value="1">Course</option><option value="2">Type</option><option value="3">Date (desc)</option><option value="4">Course (desc)</option><option value="5">Type (desc)</option>',6),rb=[nb],sb={id:"task-wrap",class:"task-wrap"},ib={class:"group-detail",open:""},ob={class:"group-heading"},ab=I("hr",{class:"dashed"},null,-1),cb=I("hr",{class:"dashed"},null,-1),lb=["data-tag"],ub={class:"summary-wrap"},hb={class:"course"},db={class:"title"},fb={class:"type assignment"},pb={class:"deadline"},mb={class:"detail-content"},gb={class:"admin-btn-wrap"},_b=["data-link"],yb=["data-link"],vb=I("h2",null,"Editor",-1),Eb={class:"modal-form",id:"modal-form"},Ib={class:"form-group"},Tb=I("label",{for:"input-course"},"Course",-1),wb={class:"form-group"},Ab=I("label",{for:"input-deadline"},"Deadline",-1),Rb={class:"form-group"},Sb=I("label",{for:"author"},"Author",-1),Cb={class:"form-group"},Pb=I("label",{for:"typeSelect"},"Type",-1),bb=I("option",{value:"0"},"Quiz",-1),kb=I("option",{value:"3"},"Final Exam",-1),Db=I("option",{value:"3"},"CA Tests",-1),Nb=I("option",{value:"3"},"General Report",-1),Ob=I("option",{value:"1"},"Thesis",-1),Vb=I("option",{value:"2"},"Presentation",-1),Mb=I("option",{value:"3"},"Self-Study Assessment",-1),xb=I("option",{value:"4"},"Experiment / Lab Report",-1),Lb=I("option",{value:"3"},"Self Assessment",-1),Fb=I("option",{value:"3"},"Peer Assessment",-1),Ub=[bb,kb,Db,Nb,Ob,Vb,Mb,xb,Lb,Fb],Bb={class:"form-group"},jb=I("label",{for:"visibilitySelect"},"Visibility",-1),$b=I("option",{value:"0"},"Yes",-1),qb=I("option",{value:"1"},"No",-1),Hb=[$b,qb],zb={class:"form-group"},Kb=I("label",{for:"groupsText"},"Groups",-1),Wb=I("option",{value:"0"},"Smart EdTech M1",-1),Gb=I("option",{value:"1"},"Smart EdTech M2",-1),Qb=I("option",{value:"2"},"HCI M1",-1),Yb=I("option",{value:"3"},"HCI M2",-1),Jb=I("option",{value:"4"},"AI M1",-1),Xb=I("option",{value:"5"},"AI M2",-1),Zb=I("option",{value:"6"},"Data Science M1",-1),ek=I("option",{value:"7"},"Data Science M2",-1),tk=[Wb,Gb,Qb,Yb,Jb,Xb,Zb,ek],nk={class:"form-group"},rk=I("label",{for:"descriptionText"},"Description",-1);function sk(t,e,n,r,s,i){const o=$r("ModalForm");return rt(),yt(Ue,null,[I("div",null,[JP,XP,I("button",{type:"button",class:"fab",id:"add-btn",onClick:e[0]||(e[0]=(...a)=>i.showModal&&i.showModal(...a))},"ADD +"),I("div",ZP,[I("label",null,[pt("Group By: "),Ze(I("select",{name:"group-by",id:"group-by","onUpdate:modelValue":e[1]||(e[1]=a=>s.selectedGroupID=a),onChange:e[2]||(e[2]=(...a)=>i.loadView&&i.loadView(...a))},tb,544),[[Rs,s.selectedGroupID]])]),I("label",null,[pt("Sort By: "),Ze(I("select",{name:"sort-by",id:"sort-by","onUpdate:modelValue":e[3]||(e[3]=a=>s.selectedSortID=a),onChange:e[4]||(e[4]=(...a)=>i.loadView&&i.loadView(...a))},rb,544),[[Rs,s.selectedSortID]])])]),I("div",sb,[(rt(!0),yt(Ue,null,mh(s.tasks,(a,c)=>(rt(),yt("details",ib,[I("summary",ob,[ab,I("h2",null,yn(c),1),cb]),(rt(!0),yt(Ue,null,mh(a,l=>(rt(),yt("details",{"data-tag":l.taskID,class:"task-detail"},[I("summary",null,[I("div",ub,[I("span",hb,yn(l.course),1),I("span",db,yn(l.heading),1),I("span",fb,yn(l.type),1),I("span",pb,yn(l.deadline),1)])]),I("div",mb,[I("p",null,yn(l.description),1),I("p",null,yn(l.groups.join(",")),1),I("p",null,"Author: "+yn(l.author),1)]),I("div",gb,[I("button",{class:"btn-task-edit","data-link":l.taskID,onClick:e[5]||(e[5]=(...u)=>i.openEditor&&i.openEditor(...u))},"Edit",8,_b),I("button",{class:"btn-task-delete","data-link":l.taskID,onClick:e[6]||(e[6]=(...u)=>i.deleteItem&&i.deleteItem(...u))},"Delete",8,yb)])],8,lb))),256))]))),256))])]),Ze(Se(o,{onClose:i.closeModal},{header:ar(()=>[vb]),body:ar(()=>[I("form",Eb,[I("div",Ib,[Tb,Ze(I("input",{type:"text",name:"input-course",id:"input-course","onUpdate:modelValue":e[7]||(e[7]=a=>s.formData.course=a)},null,512),[[tn,s.formData.course]])]),I("div",wb,[Ab,Ze(I("input",{type:"datetime-local",name:"input-deadline",id:"input-deadline","onUpdate:modelValue":e[8]||(e[8]=a=>s.formData.deadline=a)},null,512),[[tn,s.formData.deadline]])]),I("div",Rb,[Sb,Ze(I("input",{type:"text",name:"author",id:"author","onUpdate:modelValue":e[9]||(e[9]=a=>s.formData.author=a)},null,512),[[tn,s.formData.author]])]),I("div",Cb,[Pb,Ze(I("select",{name:"typeSelect",id:"typeSelect","onUpdate:modelValue":e[10]||(e[10]=a=>s.formData.type=a)},Ub,512),[[Rs,s.formData.type]])]),I("div",Bb,[jb,Ze(I("select",{name:"visibilitySelect",id:"visibilitySelect","onUpdate:modelValue":e[11]||(e[11]=a=>s.formData.visibility=a)},Hb,512),[[Rs,s.formData.visibility]])]),I("div",zb,[Kb,Ze(I("select",{name:"groupsText",id:"groupsText",multiple:"","onUpdate:modelValue":e[12]||(e[12]=a=>s.formData.groups=a)},tk,512),[[Rs,s.formData.groups]])]),I("div",nk,[rk,Ze(I("textarea",{name:"descriptionText",id:"descriptionText",placeholder:"add your task description","onUpdate:modelValue":e[13]||(e[13]=a=>s.formData.description=a)},`
                  `,512),[[tn,s.formData.description]])]),I("button",{type:"button",onClick:e[14]||(e[14]=(...a)=>i.addItem&&i.addItem(...a))},"Save Changes")])]),_:1},8,["onClose"]),[[Up,s.isModalVisible]])],64)}const ik=fs(YP,[["render",sk]]),ok={emits:["loggedIn"],data(){return{username:"",email:"",password:""}},methods:{signUp(){kC(Ii,this.email,this.password).then(()=>{OC(Ii.currentUser,{displayName:this.username}).then(()=>{this.$emit("loggedIn")})})}}},ak=I("h2",null,"Sign Up",-1),ck={class:"form-group"},lk=I("label",{for:"username"},"Username",-1),uk={class:"form-group"},hk=I("label",{for:"email"},"Email",-1),dk={class:"form-group"},fk=I("label",{for:"password"},"Password",-1),pk=I("button",null,"Sign Up",-1);function mk(t,e,n,r,s,i){return rt(),yt("form",{onSubmit:e[3]||(e[3]=Bp((...o)=>i.signUp&&i.signUp(...o),["prevent"]))},[ak,I("div",ck,[lk,Ze(I("input",{type:"text",placeholder:"Username",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o)},null,512),[[tn,s.username]])]),I("div",uk,[hk,Ze(I("input",{type:"email",placeholder:"E.g. abc@xyz.com",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>s.email=o)},null,512),[[tn,s.email]])]),I("div",dk,[fk,Ze(I("input",{type:"password",placeholder:"At least 6 chars",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>s.password=o)},null,512),[[tn,s.password]])]),pk],32)}const gk=fs(ok,[["render",mk]]),_k={emits:["loggedIn"],data(){return{email:"",password:""}},methods:{login(){DC(Ii,this.email,this.password).then(()=>{console.log("Success"),this.$emit("loggedIn")})}}},yk=I("h2",null,"Log in",-1),vk={class:"form-group"},Ek=I("label",{for:"email"},"Email",-1),Ik={class:"form-group"},Tk=I("label",{for:"password"},"Password",-1),wk=I("button",null,"Log in",-1);function Ak(t,e,n,r,s,i){return rt(),yt("form",{onSubmit:e[2]||(e[2]=Bp((...o)=>i.login&&i.login(...o),["prevent"]))},[yk,I("div",vk,[Ek,Ze(I("input",{type:"email",placeholder:"E.g. abc@xyz.com",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o)},null,512),[[tn,s.email]])]),I("div",Ik,[Tk,Ze(I("input",{type:"password",placeholder:"At least 6 chars",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[tn,s.password]])]),wk],32)}const Rk=fs(_k,[["render",Ak]]),Sk="/assets/logo-collabora-79b8a6e1.svg",Ck={components:{SignupForm:gk,LoginForm:Rk,DashboardView:ik},data(){return{isLoggedIn:!1,showLogin:!0,isAdmin:!1}},beforeUpdate(){Ii.currentUser},methods:{signOut(){xC(Ii).then(()=>{this.isLoggedIn=!1})}}},Pk={key:0},bk=I("div",{class:"header-brand"},[I("img",{alt:"Vue logo",class:"logo",src:Sk,width:"125",height:"125"}),I("h1",null,"Promoting Synchronized Educational Spaces")],-1),kk={key:1},Dk={class:"user-header"};function Nk(t,e,n,r,s,i){const o=$r("LoginForm"),a=$r("SignupForm"),c=$r("DashboardView");return s.isLoggedIn?(rt(),yt("div",kk,[I("div",Dk,[s.isLoggedIn?(rt(),yt("button",{key:0,onClick:e[4]||(e[4]=(...l)=>i.signOut&&i.signOut(...l))},"Logout")):Kv("",!0)]),Se(c)])):(rt(),yt("div",Pk,[bk,s.showLogin?(rt(),yt(Ue,{key:0},[Se(o,{onLoggedIn:e[0]||(e[0]=l=>s.isLoggedIn=!0)}),I("p",null,[pt("No account yet? "),I("span",{onClick:e[1]||(e[1]=l=>s.showLogin=!1)},"Sign up"),pt(" instead.")])],64)):(rt(),yt(Ue,{key:1},[Se(a,{onLoggedIn:e[2]||(e[2]=l=>s.isLoggedIn=!0)}),I("p",null,[pt("Already registered? "),I("span",{onClick:e[3]||(e[3]=l=>s.showLogin=!0)},"Login"),pt(" instead.")])],64))]))}const Ok=fs(Ck,[["render",Nk]]);const Vk={},Mk=I("hr",{class:"footer"},null,-1),xk={class:"footer"};function Lk(t,e,n,r,s,i){const o=$r("RouterView"),a=$r("RouterLink");return rt(),yt(Ue,null,[Se(o),Mk,I("div",xk,[I("p",null,[pt("© 2023 nVision Digital | "),Se(a,{to:"/"},{default:ar(()=>[pt("CollaboraPlan")]),_:1})]),I("p",null,[Se(a,{to:"/about"},{default:ar(()=>[pt("About Us")]),_:1}),pt(" - "),Se(a,{to:"/legal"},{default:ar(()=>[pt("Legal")]),_:1})])])],64)}const Fk=fs(Vk,[["render",Lk]]),Uk="modulepreload",Bk=function(t){return"/"+t},Mf={},xf=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Bk(i),i in Mf)return;Mf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Uk,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},jk=xI({history:XE("/"),routes:[{path:"/",name:"home",component:Ok},{path:"/about",name:"about",component:()=>xf(()=>import("./AboutView-4a5fd9a0.js"),[])},{path:"/legal",name:"legal",component:()=>xf(()=>import("./PrivacyDataView-6b0cbb66.js"),[])}]}),oy=OE(Fk);oy.use(jk);oy.mount("#app");export{Ue as F,DI as R,fs as _,I as a,Se as b,yt as c,pt as d,MI as e,rt as o,Br as u,ar as w};
