(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function yl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},xr=[],bt=()=>{},oy=()=>!1,ay=/^on[^a-z]/,Zo=t=>ay.test(t),vl=t=>t.startsWith("onUpdate:"),xe=Object.assign,El=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cy=Object.prototype.hasOwnProperty,ae=(t,e)=>cy.call(t,e),z=Array.isArray,Lr=t=>yi(t)==="[object Map]",ea=t=>yi(t)==="[object Set]",th=t=>yi(t)==="[object Date]",Z=t=>typeof t=="function",Ne=t=>typeof t=="string",Wr=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",Mf=t=>(ve(t)||Z(t))&&Z(t.then)&&Z(t.catch),xf=Object.prototype.toString,yi=t=>xf.call(t),ly=t=>yi(t).slice(8,-1),Lf=t=>yi(t)==="[object Object]",Il=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uy=/-(\w)/g,Wt=ta(t=>t.replace(uy,(e,n)=>n?n.toUpperCase():"")),hy=/\B([A-Z])/g,cs=ta(t=>t.replace(hy,"-$1").toLowerCase()),na=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ta(t=>t?`on${na(t)}`:""),ur=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dy=t=>{const e=Ne(t)?Number(t):NaN;return isNaN(e)?t:e};let nh;const wc=()=>nh||(nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?gy(r):Tl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(t)||ve(t))return t}const fy=/;(?![^(]*\))/g,py=/:([^]+)/,my=/\/\*[^]*?\*\//g;function gy(t){const e={};return t.replace(my,"").split(fy).forEach(n=>{if(n){const r=n.split(py);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wl(t){let e="";if(Ne(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=wl(t[n]);r&&(e+=r+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yy=yl(_y);function Ff(t){return!!t||t===""}function vy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ra(t[r],e[r]);return n}function ra(t,e){if(t===e)return!0;let n=th(t),r=th(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Wr(t),r=Wr(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?vy(t,e):!1;if(n=ve(t),r=ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ra(t[o],e[o]))return!1}}return String(t)===String(e)}function Ey(t,e){return t.findIndex(n=>ra(n,e))}const yn=t=>Ne(t)?t:t==null?"":z(t)||ve(t)&&(t.toString===xf||!Z(t.toString))?JSON.stringify(t,Uf,2):String(t),Uf=(t,e)=>e&&e.__v_isRef?Uf(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ea(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!z(e)&&!Lf(e)?String(e):e;let Rt;class Iy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ty(t,e=Rt){e&&e.active&&e.effects.push(t)}function wy(){return Rt}const Al=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bf=t=>(t.w&Fn)>0,jf=t=>(t.n&Fn)>0,Ay=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fn},Ry=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Bf(s)&&!jf(s)?s.delete(t):e[n++]=s,s.w&=~Fn,s.n&=~Fn}e.length=n}},Ac=new WeakMap;let Cs=0,Fn=1;const Rc=30;let St;const or=Symbol(""),Sc=Symbol("");class Rl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ty(this,r)}run(){if(!this.active)return this.fn();let e=St,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,Nn=!0,Fn=1<<++Cs,Cs<=Rc?Ay(this):rh(this),this.fn()}finally{Cs<=Rc&&Ry(this),Fn=1<<--Cs,St=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(rh(this),this.onStop&&this.onStop(),this.active=!1)}}function rh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const $f=[];function ls(){$f.push(Nn),Nn=!1}function us(){const t=$f.pop();Nn=t===void 0?!0:t}function mt(t,e,n){if(Nn&&St){let r=Ac.get(t);r||Ac.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Al()),qf(s)}}function qf(t,e){let n=!1;Cs<=Rc?jf(t)||(t.n|=Fn,n=!Bf(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function on(t,e,n,r,s,i){const o=Ac.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Wr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Il(n)&&a.push(o.get("length")):(a.push(o.get(or)),Lr(t)&&a.push(o.get(Sc)));break;case"delete":z(t)||(a.push(o.get(or)),Lr(t)&&a.push(o.get(Sc)));break;case"set":Lr(t)&&a.push(o.get(or));break}if(a.length===1)a[0]&&Cc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Cc(Al(c))}}function Cc(t,e){const n=z(t)?t:[...t];for(const r of n)r.computed&&sh(r);for(const r of n)r.computed||sh(r)}function sh(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Sy=yl("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wr)),ih=Cy();function Cy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ls();const r=le(this)[e].apply(this,n);return us(),r}}),t}function Py(t){const e=le(this);return mt(e,"has",t),e.hasOwnProperty(t)}class zf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?jy:Qf:i?Gf:Wf).get(e))return e;const o=z(e);if(!s){if(o&&ae(ih,n))return Reflect.get(ih,n,r);if(n==="hasOwnProperty")return Py}const a=Reflect.get(e,n,r);return(Wr(n)?Hf.has(n):Sy(n))||(s||mt(e,"get",n),i)?a:nt(a)?o&&Il(n)?a:a.value:ve(a)?s?Jf(a):ia(a):a}}class Kf extends zf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Gr(i)&&nt(i)&&!nt(r))return!1;if(!this._shallow&&(!Io(r)&&!Gr(r)&&(i=le(i),r=le(r)),!z(e)&&nt(i)&&!nt(r)))return i.value=r,!0;const o=z(e)&&Il(n)?Number(n)<e.length:ae(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?ur(r,i)&&on(e,"set",n,r):on(e,"add",n,r)),a}deleteProperty(e,n){const r=ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&on(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wr(n)||!Hf.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",z(e)?"length":or),Reflect.ownKeys(e)}}class by extends zf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ky=new Kf,Dy=new by,Ny=new Kf(!0),Sl=t=>t,sa=t=>Reflect.getPrototypeOf(t);function ji(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(ur(e,i)&&mt(s,"get",e),mt(s,"get",i));const{has:o}=sa(s),a=r?Sl:n?bl:Gs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(ur(t,s)&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qi(t,e=!1){return t=t.__v_raw,!e&&mt(le(t),"iterate",or),Reflect.get(t,"size",t)}function oh(t){t=le(t);const e=le(this);return sa(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function ah(t,e){e=le(e);const n=le(this),{has:r,get:s}=sa(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ur(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function ch(t){const e=le(this),{has:n,get:r}=sa(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&on(e,"delete",t,void 0),i}function lh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Hi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?Sl:t?bl:Gs;return!t&&mt(a,"iterate",or),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function zi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=Lr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Sl:e?bl:Gs;return!e&&mt(i,"iterate",c?Sc:or),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Oy(){const t={get(i){return ji(this,i)},get size(){return qi(this)},has:$i,add:oh,set:ah,delete:ch,clear:lh,forEach:Hi(!1,!1)},e={get(i){return ji(this,i,!1,!0)},get size(){return qi(this)},has:$i,add:oh,set:ah,delete:ch,clear:lh,forEach:Hi(!1,!0)},n={get(i){return ji(this,i,!0)},get size(){return qi(this,!0)},has(i){return $i.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hi(!0,!1)},r={get(i){return ji(this,i,!0,!0)},get size(){return qi(this,!0)},has(i){return $i.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zi(i,!1,!1),n[i]=zi(i,!0,!1),e[i]=zi(i,!1,!0),r[i]=zi(i,!0,!0)}),[t,n,e,r]}const[Vy,My,xy,Ly]=Oy();function Cl(t,e){const n=e?t?Ly:xy:t?My:Vy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const Fy={get:Cl(!1,!1)},Uy={get:Cl(!1,!0)},By={get:Cl(!0,!1)},Wf=new WeakMap,Gf=new WeakMap,Qf=new WeakMap,jy=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qy(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(ly(t))}function ia(t){return Gr(t)?t:Pl(t,!1,ky,Fy,Wf)}function Yf(t){return Pl(t,!1,Ny,Uy,Gf)}function Jf(t){return Pl(t,!0,Dy,By,Qf)}function Pl(t,e,n,r,s){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Fr(t){return Gr(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function Gr(t){return!!(t&&t.__v_isReadonly)}function Io(t){return!!(t&&t.__v_isShallow)}function Xf(t){return Fr(t)||Gr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Zf(t){return vo(t,"__v_skip",!0),t}const Gs=t=>ve(t)?ia(t):t,bl=t=>ve(t)?Jf(t):t;function ep(t){Nn&&St&&(t=le(t),qf(t.dep||(t.dep=Al())))}function tp(t,e){t=le(t);const n=t.dep;n&&Cc(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Hy(t){return np(t,!1)}function zy(t){return np(t,!0)}function np(t,e){return nt(t)?t:new Ky(t,e)}class Ky{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Gs(e)}get value(){return ep(this),this._value}set value(e){const n=this.__v_isShallow||Io(e)||Gr(e);e=n?e:le(e),ur(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Gs(e),tp(this))}}function Ur(t){return nt(t)?t.value:t}const Wy={get:(t,e,n)=>Ur(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rp(t){return Fr(t)?t:new Proxy(t,Wy)}class Gy{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,tp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return ep(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qy(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=bt):(r=t.get,s=t.set),new Gy(r,s,i||!s,n)}function On(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){oa(i,e,n)}return s}function wt(t,e,n,r){if(Z(t)){const i=On(t,e,n,r);return i&&Mf(i)&&i.catch(o=>{oa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(wt(t[i],e,n,r));return s}function oa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){On(c,null,10,[t,o,a]);return}}Yy(t,n,s,r)}function Yy(t,e,n,r=!0){console.error(t)}let Qs=!1,Pc=!1;const tt=[];let Ft=0;const Br=[];let Zt=null,Xn=0;const sp=Promise.resolve();let kl=null;function ip(t){const e=kl||sp;return t?e.then(this?t.bind(this):t):e}function Jy(t){let e=Ft+1,n=tt.length;for(;e<n;){const r=e+n>>>1,s=tt[r],i=Ys(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Dl(t){(!tt.length||!tt.includes(t,Qs&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?tt.push(t):tt.splice(Jy(t.id),0,t),op())}function op(){!Qs&&!Pc&&(Pc=!0,kl=sp.then(cp))}function Xy(t){const e=tt.indexOf(t);e>Ft&&tt.splice(e,1)}function Zy(t){z(t)?Br.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?Xn+1:Xn))&&Br.push(t),op()}function uh(t,e=Qs?Ft+1:0){for(;e<tt.length;e++){const n=tt[e];n&&n.pre&&(tt.splice(e,1),e--,n())}}function ap(t){if(Br.length){const e=[...new Set(Br)];if(Br.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,r)=>Ys(n)-Ys(r)),Xn=0;Xn<Zt.length;Xn++)Zt[Xn]();Zt=null,Xn=0}}const Ys=t=>t.id==null?1/0:t.id,ev=(t,e)=>{const n=Ys(t)-Ys(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cp(t){Pc=!1,Qs=!0,tt.sort(ev);const e=bt;try{for(Ft=0;Ft<tt.length;Ft++){const n=tt[Ft];n&&n.active!==!1&&On(n,null,14)}}finally{Ft=0,tt.length=0,ap(),Qs=!1,kl=null,(tt.length||Br.length)&&cp()}}function tv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(m=>Ne(m)?m.trim():m)),h&&(s=n.map(Eo))}let a,c=r[a=Ga(e)]||r[a=Ga(Wt(e))];!c&&i&&(c=r[a=Ga(cs(e))]),c&&wt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,s)}}function lp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=lp(l,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):xe(o,i),ve(t)&&r.set(t,o),o)}function aa(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,cs(e))||ae(t,e))}let We=null,up=null;function To(t){const e=We;return We=t,up=t&&t.type.__scopeId||null,e}function wo(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ah(-1);const i=To(e);let o;try{o=t(...s)}finally{To(i),r._d&&Ah(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:v}=t;let w,b;const k=To(t);try{if(n.shapeFlag&4){const V=s||r,te=V;w=Lt(u.call(te,V,h,i,m,d,y)),b=c}else{const V=e;w=Lt(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),b=e.props?c:nv(c)}}catch(V){Us.length=0,oa(V,t,1),w=Be($t)}let B=w;if(b&&v!==!1){const V=Object.keys(b),{shapeFlag:te}=B;V.length&&te&7&&(o&&V.some(vl)&&(b=rv(b,o)),B=Un(B,b))}return n.dirs&&(B=Un(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),w=B,To(k),w}const nv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},rv=(t,e)=>{const n={};for(const r in t)(!vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!aa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hh(r,o,l):!0:!!o;return!1}function hh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function iv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hp="components";function io(t,e){return av(hp,t,!0,e)||t}const ov=Symbol.for("v-ndc");function av(t,e,n=!0,r=!1){const s=We||Ue;if(s){const i=s.type;if(t===hp){const a=eE(i,!1);if(a&&(a===e||a===Wt(e)||a===na(Wt(e))))return i}const o=dh(s[t]||i[t],e)||dh(s.appContext[t],e);return!o&&r?i:o}}function dh(t,e){return t&&(t[e]||t[Wt(e)]||t[na(Wt(e))])}const cv=t=>t.__isSuspense;function lv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Zy(t)}const Ki={};function oo(t,e,n){return dp(t,e,n)}function dp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const c=wy()===((a=Ue)==null?void 0:a.scope)?Ue:null;let l,u=!1,h=!1;if(nt(t)?(l=()=>t.value,u=Io(t)):Fr(t)?(l=()=>t,r=!0):z(t)?(h=!0,u=t.some(V=>Fr(V)||Io(V)),l=()=>t.map(V=>{if(nt(V))return V.value;if(Fr(V))return nr(V);if(Z(V))return On(V,c,2)})):Z(t)?e?l=()=>On(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),wt(t,c,3,[m])}:l=bt,e&&r){const V=l;l=()=>nr(V())}let d,m=V=>{d=k.onStop=()=>{On(V,c,4),d=k.onStop=void 0}},y;if(Xs)if(m=bt,e?n&&wt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const V=rE();y=V.__watcherHandles||(V.__watcherHandles=[])}else return bt;let v=h?new Array(t.length).fill(Ki):Ki;const w=()=>{if(k.active)if(e){const V=k.run();(r||u||(h?V.some((te,ce)=>ur(te,v[ce])):ur(V,v)))&&(d&&d(),wt(e,c,3,[V,v===Ki?void 0:h&&v[0]===Ki?[]:v,m]),v=V)}else k.run()};w.allowRecurse=!!e;let b;s==="sync"?b=w:s==="post"?b=()=>dt(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),b=()=>Dl(w));const k=new Rl(l,b);e?n?w():v=k.run():s==="post"?dt(k.run.bind(k),c&&c.suspense):k.run();const B=()=>{k.stop(),c&&c.scope&&El(c.scope.effects,k)};return y&&y.push(B),B}function uv(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?fp(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Ue;Qr(this);const a=dp(s,i.bind(r),n);return o?Qr(o):ar(),a}function fp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function nr(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))nr(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)nr(t[n],e);else if(ea(t)||Lr(t))t.forEach(n=>{nr(n,e)});else if(Lf(t))for(const n in t)nr(t[n],e);return t}function Xe(t,e){const n=We;if(n===null)return t;const r=da(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&nr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ls(),wt(c,n,8,[t.el,a,t,e]),us())}}const An=Symbol("_leaveCb"),Wi=Symbol("_enterCb");function hv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vp(()=>{t.isMounted=!0}),Ep(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],pp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},dv={name:"BaseTransition",props:pp,setup(t,{slots:e}){const n=Qv(),r=hv();let s;return()=>{const i=e.default&&gp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==$t){o=v;break}}const a=le(t),{mode:c}=a;if(r.isLeaving)return Ya(o);const l=fh(o);if(!l)return Ya(o);const u=bc(l,a,r,n);kc(l,u);const h=n.subTree,d=h&&fh(h);let m=!1;const{getTransitionKey:y}=l.type;if(y){const v=y();s===void 0?s=v:v!==s&&(s=v,m=!0)}if(d&&d.type!==$t&&(!Zn(l,d)||m)){const v=bc(d,a,r,n);if(kc(d,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ya(o);c==="in-out"&&l.type!==$t&&(v.delayLeave=(w,b,k)=>{const B=mp(r,d);B[String(d.key)]=d,w[An]=()=>{b(),w[An]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return o}}},fv=dv;function mp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:k}=e,B=String(t.key),V=mp(n,t),te=(Y,ue)=>{Y&&wt(Y,r,9,ue)},ce=(Y,ue)=>{const oe=ue[1];te(Y,ue),z(Y)?Y.every(Oe=>Oe.length<=1)&&oe():Y.length<=1&&oe()},Te={mode:i,persisted:o,beforeEnter(Y){let ue=a;if(!n.isMounted)if(s)ue=v||a;else return;Y[An]&&Y[An](!0);const oe=V[B];oe&&Zn(t,oe)&&oe.el[An]&&oe.el[An](),te(ue,[Y])},enter(Y){let ue=c,oe=l,Oe=u;if(!n.isMounted)if(s)ue=w||c,oe=b||l,Oe=k||u;else return;let U=!1;const pe=Y[Wi]=ct=>{U||(U=!0,ct?te(Oe,[Y]):te(oe,[Y]),Te.delayedLeave&&Te.delayedLeave(),Y[Wi]=void 0)};ue?ce(ue,[Y,pe]):pe()},leave(Y,ue){const oe=String(t.key);if(Y[Wi]&&Y[Wi](!0),n.isUnmounting)return ue();te(h,[Y]);let Oe=!1;const U=Y[An]=pe=>{Oe||(Oe=!0,ue(),pe?te(y,[Y]):te(m,[Y]),Y[An]=void 0,V[oe]===t&&delete V[oe])};V[oe]=t,d?ce(d,[Y,U]):U()},clone(Y){return bc(Y,e,n,r)}};return Te}function Ya(t){if(ca(t))return t=Un(t),t.children=null,t}function fh(t){return ca(t)?t.children?t.children[0]:void 0:t}function kc(t,e){t.shapeFlag&6&&t.component?kc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(gp(o.children,e,a))):(e||o.type!==$t)&&r.push(a!=null?Un(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function _p(t,e){return Z(t)?(()=>xe({name:t.name},e,{setup:t}))():t}const Ls=t=>!!t.type.__asyncLoader,ca=t=>t.type.__isKeepAlive;function pv(t,e){yp(t,"a",e)}function mv(t,e){yp(t,"da",e)}function yp(t,e,n=Ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(la(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ca(s.parent.vnode)&&gv(r,e,n,s),s=s.parent}}function gv(t,e,n,r){const s=la(e,t,r,!0);Ip(()=>{El(r[e],s)},n)}function la(t,e,n=Ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ls(),Qr(n);const a=wt(e,n,t,o);return ar(),us(),a});return r?s.unshift(i):s.push(i),i}}const pn=t=>(e,n=Ue)=>(!Xs||t==="sp")&&la(t,(...r)=>e(...r),n),_v=pn("bm"),vp=pn("m"),yv=pn("bu"),vv=pn("u"),Ep=pn("bum"),Ip=pn("um"),Ev=pn("sp"),Iv=pn("rtg"),Tv=pn("rtc");function wv(t,e=Ue){la("ec",t,e)}function ph(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Ne(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function mh(t,e,n={},r,s){if(We.isCE||We.parent&&Ls(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),Be("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ft();const o=i&&Tp(i(n)),a=Np(He,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Tp(t){return t.some(e=>So(e)?!(e.type===$t||e.type===He&&!Tp(e.children)):!0)?t:null}const Dc=t=>t?Mp(t)?da(t)||t.proxy:Dc(t.parent):null,Fs=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$emit:t=>t.emit,$options:t=>Nl(t),$forceUpdate:t=>t.f||(t.f=()=>Dl(t.update)),$nextTick:t=>t.n||(t.n=ip.bind(t.proxy)),$watch:t=>uv.bind(t)}),Ja=(t,e)=>t!==we&&!t.__isScriptSetup&&ae(t,e),Av={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(r,e))return o[e]=1,r[e];if(s!==we&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const u=Fs[e];let h,d;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ja(s,e)?(s[e]=n,!0):r!==we&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ae(t,o)||Ja(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(Fs,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gh(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function Rv(t){const e=Nl(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&_h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:v,deactivated:w,beforeDestroy:b,beforeUnmount:k,destroyed:B,unmounted:V,render:te,renderTracked:ce,renderTriggered:Te,errorCaptured:Y,serverPrefetch:ue,expose:oe,inheritAttrs:Oe,components:U,directives:pe,filters:ct}=e;if(l&&Sv(l,r,null),o)for(const ye in o){const de=o[ye];Z(de)&&(r[ye]=de.bind(n))}if(s){const ye=s.call(n,n);ve(ye)&&(t.data=ia(ye))}if(Nc=!0,i)for(const ye in i){const de=i[ye],Jt=Z(de)?de.bind(n,n):Z(de.get)?de.get.bind(n,n):bt,_n=!Z(de)&&Z(de.set)?de.set.bind(n):bt,Vt=Ct({get:Jt,set:_n});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:ht=>Vt.value=ht})}if(a)for(const ye in a)wp(a[ye],r,n,ye);if(c){const ye=Z(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(de=>{ao(de,ye[de])})}u&&_h(u,t,"c");function Pe(ye,de){z(de)?de.forEach(Jt=>ye(Jt.bind(n))):de&&ye(de.bind(n))}if(Pe(_v,h),Pe(vp,d),Pe(yv,m),Pe(vv,y),Pe(pv,v),Pe(mv,w),Pe(wv,Y),Pe(Tv,ce),Pe(Iv,Te),Pe(Ep,k),Pe(Ip,V),Pe(Ev,ue),z(oe))if(oe.length){const ye=t.exposed||(t.exposed={});oe.forEach(de=>{Object.defineProperty(ye,de,{get:()=>n[de],set:Jt=>n[de]=Jt})})}else t.exposed||(t.exposed={});te&&t.render===bt&&(t.render=te),Oe!=null&&(t.inheritAttrs=Oe),U&&(t.components=U),pe&&(t.directives=pe)}function Sv(t,e,n=bt){z(t)&&(t=Oc(t));for(const r in t){const s=t[r];let i;ve(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _h(t,e,n){wt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wp(t,e,n,r){const s=r.includes(".")?fp(n,r):()=>n[r];if(Ne(t)){const i=e[t];Z(i)&&oo(s,i)}else if(Z(t))oo(s,t.bind(n));else if(ve(t))if(z(t))t.forEach(i=>wp(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&oo(s,i,t)}}function Nl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ao(c,l,o,!0)),Ao(c,e,o)),ve(e)&&i.set(e,c),c}function Ao(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ao(t,i,n,!0),s&&s.forEach(o=>Ao(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cv={data:yh,props:vh,emits:vh,methods:Ps,computed:Ps,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Ps,directives:Ps,watch:bv,provide:yh,inject:Pv};function yh(t,e){return e?t?function(){return xe(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return Ps(Oc(t),Oc(e))}function Oc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?xe(Object.create(null),t,e):e}function vh(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:xe(Object.create(null),gh(t),gh(e??{})):e}function bv(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Ap(){return{app:null,config:{isNativeTag:oy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kv=0;function Dv(t,e){return function(r,s=null){Z(r)||(r=xe({},r)),s!=null&&!ve(s)&&(s=null);const i=Ap(),o=new WeakSet;let a=!1;const c=i.app={_uid:kv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Be(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,da(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ro=c;try{return l()}finally{Ro=null}}};return c}}let Ro=null;function ao(t,e){if(Ue){let n=Ue.provides;const r=Ue.parent&&Ue.parent.provides;r===n&&(n=Ue.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=Ue||We;if(r||Ro){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ro._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function Nv(t,e,n,r=!1){const s={},i={};vo(i,ha,1),t.propsDefaults=Object.create(null),Rp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ov(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(aa(t.emitsOptions,d))continue;const m=e[d];if(c)if(ae(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Wt(d);s[y]=Vc(c,a,y,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Rp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=cs(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Vc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&on(t,"set","$attrs")}function Rp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ro(c))continue;const l=e[c];let u;s&&ae(s,u=Wt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:aa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Vc(s,c,h,l[h],t,!ae(l,h))}}return o}function Vc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Qr(s),r=l[n]=c.call(null,e),ar())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}function Sp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,m]=Sp(h,e,!0);xe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ve(t)&&r.set(t,xr),xr;if(z(i))for(let u=0;u<i.length;u++){const h=Wt(i[u]);Eh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Wt(u);if(Eh(h)){const d=i[u],m=o[h]=z(d)||Z(d)?{type:d}:xe({},d);if(m){const y=wh(Boolean,m.type),v=wh(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||ae(m,"default"))&&a.push(h)}}}const l=[o,a];return ve(t)&&r.set(t,l),l}function Eh(t){return t[0]!=="$"}function Ih(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Th(t,e){return Ih(t)===Ih(e)}function wh(t,e){return z(e)?e.findIndex(n=>Th(n,t)):Z(e)&&Th(e,t)?0:-1}const Cp=t=>t[0]==="_"||t==="$stable",Ol=t=>z(t)?t.map(Lt):[Lt(t)],Vv=(t,e,n)=>{if(e._n)return e;const r=wo((...s)=>Ol(e(...s)),n);return r._c=!1,r},Pp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cp(s))continue;const i=t[s];if(Z(i))e[s]=Vv(s,i,r);else if(i!=null){const o=Ol(i);e[s]=()=>o}}},bp=(t,e)=>{const n=Ol(e);t.slots.default=()=>n},Mv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),vo(e,"_",n)):Pp(e,t.slots={})}else t.slots={},e&&bp(t,e);vo(t.slots,ha,1)},xv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(xe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Pp(e,s)),o=e}else e&&(bp(t,e),o={default:1});if(i)for(const a in s)!Cp(a)&&o[a]==null&&delete s[a]};function Mc(t,e,n,r,s=!1){if(z(t)){t.forEach((d,m)=>Mc(d,e&&(z(e)?e[m]:e),n,r,s));return}if(Ls(r)&&!s)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),Z(c))On(c,a,12,[o,u]);else{const d=Ne(c),m=nt(c);if(d||m){const y=()=>{if(t.f){const v=d?ae(h,c)?h[c]:u[c]:c.value;s?z(v)&&El(v,i):z(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,dt(y,n)):y()}}}const dt=lv;function Lv(t){return Fv(t)}function Fv(t,e){const n=wc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=bt,insertStaticContent:y}=t,v=(f,p,g,_=null,I=null,R=null,M=!1,P=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!Zn(f,p)&&(_=E(f),ht(f,I,R,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:C,ref:q,shapeFlag:F}=p;switch(C){case ua:w(f,p,g,_);break;case $t:b(f,p,g,_);break;case co:f==null&&k(p,g,_,M);break;case He:U(f,p,g,_,I,R,M,P,D);break;default:F&1?te(f,p,g,_,I,R,M,P,D):F&6?pe(f,p,g,_,I,R,M,P,D):(F&64||F&128)&&C.process(f,p,g,_,I,R,M,P,D,N)}q!=null&&I&&Mc(q,f&&f.ref,R,p||f,!p)},w=(f,p,g,_)=>{if(f==null)r(p.el=a(p.children),g,_);else{const I=p.el=f.el;p.children!==f.children&&l(I,p.children)}},b=(f,p,g,_)=>{f==null?r(p.el=c(p.children||""),g,_):p.el=f.el},k=(f,p,g,_)=>{[f.el,f.anchor]=y(f.children,p,g,_,f.el,f.anchor)},B=({el:f,anchor:p},g,_)=>{let I;for(;f&&f!==p;)I=d(f),r(f,g,_),f=I;r(p,g,_)},V=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),s(f),f=g;s(p)},te=(f,p,g,_,I,R,M,P,D)=>{M=M||p.type==="svg",f==null?ce(p,g,_,I,R,M,P,D):ue(f,p,I,R,M,P,D)},ce=(f,p,g,_,I,R,M,P)=>{let D,C;const{type:q,props:F,shapeFlag:H,transition:X,dirs:ne}=f;if(D=f.el=o(f.type,R,F&&F.is,F),H&8?u(D,f.children):H&16&&Y(f.children,D,null,_,I,R&&q!=="foreignObject",M,P),ne&&Wn(f,null,_,"created"),Te(D,f,f.scopeId,M,_),F){for(const _e in F)_e!=="value"&&!ro(_e)&&i(D,_e,null,F[_e],R,f.children,_,I,Ye);"value"in F&&i(D,"value",null,F.value),(C=F.onVnodeBeforeMount)&&xt(C,_,f)}ne&&Wn(f,null,_,"beforeMount");const Ee=Uv(I,X);Ee&&X.beforeEnter(D),r(D,p,g),((C=F&&F.onVnodeMounted)||Ee||ne)&&dt(()=>{C&&xt(C,_,f),Ee&&X.enter(D),ne&&Wn(f,null,_,"mounted")},I)},Te=(f,p,g,_,I)=>{if(g&&m(f,g),_)for(let R=0;R<_.length;R++)m(f,_[R]);if(I){let R=I.subTree;if(p===R){const M=I.vnode;Te(f,M,M.scopeId,M.slotScopeIds,I.parent)}}},Y=(f,p,g,_,I,R,M,P,D=0)=>{for(let C=D;C<f.length;C++){const q=f[C]=P?Rn(f[C]):Lt(f[C]);v(null,q,p,g,_,I,R,M,P)}},ue=(f,p,g,_,I,R,M)=>{const P=p.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:q}=p;D|=f.patchFlag&16;const F=f.props||we,H=p.props||we;let X;g&&Gn(g,!1),(X=H.onVnodeBeforeUpdate)&&xt(X,g,p,f),q&&Wn(p,f,g,"beforeUpdate"),g&&Gn(g,!0);const ne=I&&p.type!=="foreignObject";if(C?oe(f.dynamicChildren,C,P,g,_,ne,R):M||de(f,p,P,null,g,_,ne,R,!1),D>0){if(D&16)Oe(P,p,F,H,g,_,I);else if(D&2&&F.class!==H.class&&i(P,"class",null,H.class,I),D&4&&i(P,"style",F.style,H.style,I),D&8){const Ee=p.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const be=Ee[_e],At=F[be],Ar=H[be];(Ar!==At||be==="value")&&i(P,be,At,Ar,I,f.children,g,_,Ye)}}D&1&&f.children!==p.children&&u(P,p.children)}else!M&&C==null&&Oe(P,p,F,H,g,_,I);((X=H.onVnodeUpdated)||q)&&dt(()=>{X&&xt(X,g,p,f),q&&Wn(p,f,g,"updated")},_)},oe=(f,p,g,_,I,R,M)=>{for(let P=0;P<p.length;P++){const D=f[P],C=p[P],q=D.el&&(D.type===He||!Zn(D,C)||D.shapeFlag&70)?h(D.el):g;v(D,C,q,null,_,I,R,M,!0)}},Oe=(f,p,g,_,I,R,M)=>{if(g!==_){if(g!==we)for(const P in g)!ro(P)&&!(P in _)&&i(f,P,g[P],null,M,p.children,I,R,Ye);for(const P in _){if(ro(P))continue;const D=_[P],C=g[P];D!==C&&P!=="value"&&i(f,P,C,D,M,p.children,I,R,Ye)}"value"in _&&i(f,"value",g.value,_.value)}},U=(f,p,g,_,I,R,M,P,D)=>{const C=p.el=f?f.el:a(""),q=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:X}=p;X&&(P=P?P.concat(X):X),f==null?(r(C,g,_),r(q,g,_),Y(p.children,g,q,I,R,M,P,D)):F>0&&F&64&&H&&f.dynamicChildren?(oe(f.dynamicChildren,H,g,I,R,M,P),(p.key!=null||I&&p===I.subTree)&&kp(f,p,!0)):de(f,p,g,q,I,R,M,P,D)},pe=(f,p,g,_,I,R,M,P,D)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?I.ctx.activate(p,g,_,M,D):ct(p,g,_,I,R,M,D):Yt(f,p,D)},ct=(f,p,g,_,I,R,M)=>{const P=f.component=Gv(f,_,I);if(ca(f)&&(P.ctx.renderer=N),Yv(P),P.asyncDep){if(I&&I.registerDep(P,Pe),!f.el){const D=P.subTree=Be($t);b(null,D,p,g)}return}Pe(P,f,p,g,I,R,M)},Yt=(f,p,g)=>{const _=p.component=f.component;if(sv(f,p,g))if(_.asyncDep&&!_.asyncResolved){ye(_,p,g);return}else _.next=p,Xy(_.update),_.update();else p.el=f.el,_.vnode=p},Pe=(f,p,g,_,I,R,M)=>{const P=()=>{if(f.isMounted){let{next:q,bu:F,u:H,parent:X,vnode:ne}=f,Ee=q,_e;Gn(f,!1),q?(q.el=ne.el,ye(f,q,M)):q=ne,F&&so(F),(_e=q.props&&q.props.onVnodeBeforeUpdate)&&xt(_e,X,q,ne),Gn(f,!0);const be=Qa(f),At=f.subTree;f.subTree=be,v(At,be,h(At.el),E(At),f,I,R),q.el=be.el,Ee===null&&iv(f,be.el),H&&dt(H,I),(_e=q.props&&q.props.onVnodeUpdated)&&dt(()=>xt(_e,X,q,ne),I)}else{let q;const{el:F,props:H}=p,{bm:X,m:ne,parent:Ee}=f,_e=Ls(p);if(Gn(f,!1),X&&so(X),!_e&&(q=H&&H.onVnodeBeforeMount)&&xt(q,Ee,p),Gn(f,!0),F&&fe){const be=()=>{f.subTree=Qa(f),fe(F,f.subTree,f,I,null)};_e?p.type.__asyncLoader().then(()=>!f.isUnmounted&&be()):be()}else{const be=f.subTree=Qa(f);v(null,be,g,_,f,I,R),p.el=be.el}if(ne&&dt(ne,I),!_e&&(q=H&&H.onVnodeMounted)){const be=p;dt(()=>xt(q,Ee,be),I)}(p.shapeFlag&256||Ee&&Ls(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&dt(f.a,I),f.isMounted=!0,p=g=_=null}},D=f.effect=new Rl(P,()=>Dl(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,Gn(f,!0),C()},ye=(f,p,g)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Ov(f,p.props,_,g),xv(f,p.children,g),ls(),uh(),us()},de=(f,p,g,_,I,R,M,P,D=!1)=>{const C=f&&f.children,q=f?f.shapeFlag:0,F=p.children,{patchFlag:H,shapeFlag:X}=p;if(H>0){if(H&128){_n(C,F,g,_,I,R,M,P,D);return}else if(H&256){Jt(C,F,g,_,I,R,M,P,D);return}}X&8?(q&16&&Ye(C,I,R),F!==C&&u(g,F)):q&16?X&16?_n(C,F,g,_,I,R,M,P,D):Ye(C,I,R,!0):(q&8&&u(g,""),X&16&&Y(F,g,_,I,R,M,P,D))},Jt=(f,p,g,_,I,R,M,P,D)=>{f=f||xr,p=p||xr;const C=f.length,q=p.length,F=Math.min(C,q);let H;for(H=0;H<F;H++){const X=p[H]=D?Rn(p[H]):Lt(p[H]);v(f[H],X,g,null,I,R,M,P,D)}C>q?Ye(f,I,R,!0,!1,F):Y(p,g,_,I,R,M,P,D,F)},_n=(f,p,g,_,I,R,M,P,D)=>{let C=0;const q=p.length;let F=f.length-1,H=q-1;for(;C<=F&&C<=H;){const X=f[C],ne=p[C]=D?Rn(p[C]):Lt(p[C]);if(Zn(X,ne))v(X,ne,g,null,I,R,M,P,D);else break;C++}for(;C<=F&&C<=H;){const X=f[F],ne=p[H]=D?Rn(p[H]):Lt(p[H]);if(Zn(X,ne))v(X,ne,g,null,I,R,M,P,D);else break;F--,H--}if(C>F){if(C<=H){const X=H+1,ne=X<q?p[X].el:_;for(;C<=H;)v(null,p[C]=D?Rn(p[C]):Lt(p[C]),g,ne,I,R,M,P,D),C++}}else if(C>H)for(;C<=F;)ht(f[C],I,R,!0),C++;else{const X=C,ne=C,Ee=new Map;for(C=ne;C<=H;C++){const gt=p[C]=D?Rn(p[C]):Lt(p[C]);gt.key!=null&&Ee.set(gt.key,C)}let _e,be=0;const At=H-ne+1;let Ar=!1,Xu=0;const vs=new Array(At);for(C=0;C<At;C++)vs[C]=0;for(C=X;C<=F;C++){const gt=f[C];if(be>=At){ht(gt,I,R,!0);continue}let Mt;if(gt.key!=null)Mt=Ee.get(gt.key);else for(_e=ne;_e<=H;_e++)if(vs[_e-ne]===0&&Zn(gt,p[_e])){Mt=_e;break}Mt===void 0?ht(gt,I,R,!0):(vs[Mt-ne]=C+1,Mt>=Xu?Xu=Mt:Ar=!0,v(gt,p[Mt],g,null,I,R,M,P,D),be++)}const Zu=Ar?Bv(vs):xr;for(_e=Zu.length-1,C=At-1;C>=0;C--){const gt=ne+C,Mt=p[gt],eh=gt+1<q?p[gt+1].el:_;vs[C]===0?v(null,Mt,g,eh,I,R,M,P,D):Ar&&(_e<0||C!==Zu[_e]?Vt(Mt,g,eh,2):_e--)}}},Vt=(f,p,g,_,I=null)=>{const{el:R,type:M,transition:P,children:D,shapeFlag:C}=f;if(C&6){Vt(f.component.subTree,p,g,_);return}if(C&128){f.suspense.move(p,g,_);return}if(C&64){M.move(f,p,g,N);return}if(M===He){r(R,p,g);for(let F=0;F<D.length;F++)Vt(D[F],p,g,_);r(f.anchor,p,g);return}if(M===co){B(f,p,g);return}if(_!==2&&C&1&&P)if(_===0)P.beforeEnter(R),r(R,p,g),dt(()=>P.enter(R),I);else{const{leave:F,delayLeave:H,afterLeave:X}=P,ne=()=>r(R,p,g),Ee=()=>{F(R,()=>{ne(),X&&X()})};H?H(R,ne,Ee):Ee()}else r(R,p,g)},ht=(f,p,g,_=!1,I=!1)=>{const{type:R,props:M,ref:P,children:D,dynamicChildren:C,shapeFlag:q,patchFlag:F,dirs:H}=f;if(P!=null&&Mc(P,null,g,f,!0),q&256){p.ctx.deactivate(f);return}const X=q&1&&H,ne=!Ls(f);let Ee;if(ne&&(Ee=M&&M.onVnodeBeforeUnmount)&&xt(Ee,p,f),q&6)Bi(f.component,g,_);else{if(q&128){f.suspense.unmount(g,_);return}X&&Wn(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,g,I,N,_):C&&(R!==He||F>0&&F&64)?Ye(C,p,g,!1,!0):(R===He&&F&384||!I&&q&16)&&Ye(D,p,g),_&&Tr(f)}(ne&&(Ee=M&&M.onVnodeUnmounted)||X)&&dt(()=>{Ee&&xt(Ee,p,f),X&&Wn(f,null,p,"unmounted")},g)},Tr=f=>{const{type:p,el:g,anchor:_,transition:I}=f;if(p===He){wr(g,_);return}if(p===co){V(f);return}const R=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:P}=I,D=()=>M(g,R);P?P(f.el,R,D):D()}else R()},wr=(f,p)=>{let g;for(;f!==p;)g=d(f),s(f),f=g;s(p)},Bi=(f,p,g)=>{const{bum:_,scope:I,update:R,subTree:M,um:P}=f;_&&so(_),I.stop(),R&&(R.active=!1,ht(M,f,p,g)),P&&dt(P,p),dt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,g,_=!1,I=!1,R=0)=>{for(let M=R;M<f.length;M++)ht(f[M],p,g,_,I)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,p,g)=>{f==null?p._vnode&&ht(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,g),uh(),ap(),p._vnode=f},N={p:v,um:ht,m:Vt,r:Tr,mt:ct,mc:Y,pc:de,pbc:oe,n:E,o:t};let $,fe;return e&&([$,fe]=e(N)),{render:x,hydrate:$,createApp:Dv(x,$)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Uv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kp(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rn(s[i]),a.el=o.el),n||kp(o,a)),a.type===ua&&(a.el=o.el)}}function Bv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const jv=t=>t.__isTeleport,He=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),co=Symbol.for("v-stc"),Us=[];let Pt=null;function ft(t=!1){Us.push(Pt=t?null:[])}function $v(){Us.pop(),Pt=Us[Us.length-1]||null}let Js=1;function Ah(t){Js+=t}function Dp(t){return t.dynamicChildren=Js>0?Pt||xr:null,$v(),Js>0&&Pt&&Pt.push(t),t}function It(t,e,n,r,s,i){return Dp(T(t,e,n,r,s,i,!0))}function Np(t,e,n,r,s){return Dp(Be(t,e,n,r,s,!0))}function So(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const ha="__vInternal",Op=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||nt(t)||Z(t)?{i:We,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Op(e),ref:e&&lo(e),scopeId:up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return a?(Vl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Js>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Be=qv;function qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ov)&&(t=$t),So(t)){const a=Un(t,e,!0);return n&&Vl(a,n),Js>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(tE(t)&&(t=t.__vccOpts),e){e=Hv(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=wl(a)),ve(c)&&(Xf(c)&&!z(c)&&(c=xe({},c)),e.style=Tl(c))}const o=Ne(t)?1:cv(t)?128:jv(t)?64:ve(t)?4:Z(t)?2:0;return T(t,e,n,r,s,o,i,!0)}function Hv(t){return t?Xf(t)||ha in t?xe({},t):t:null}function Un(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?zv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Op(a),ref:e&&e.ref?n&&s?z(s)?s.concat(lo(e)):[s,lo(e)]:lo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function en(t=" ",e=0){return Be(ua,null,t,e)}function Vp(t,e){const n=Be(co,null,t);return n.staticCount=e,n}function Lt(t){return t==null||typeof t=="boolean"?Be($t):z(t)?Be(He,null,t.slice()):typeof t=="object"?Rn(t):Be(ua,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function Vl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ha in e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wl([e.class,r.class]));else if(s==="style")e.style=Tl([e.style,r.style]);else if(Zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xt(t,e,n,r=null){wt(t,e,7,[n,r])}const Kv=Ap();let Wv=0;function Gv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Kv,i={uid:Wv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Iy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sp(r,s),emitsOptions:lp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tv.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const Qv=()=>Ue||We;let Ml,Rr,Rh="__VUE_INSTANCE_SETTERS__";(Rr=wc()[Rh])||(Rr=wc()[Rh]=[]),Rr.push(t=>Ue=t),Ml=t=>{Rr.length>1?Rr.forEach(e=>e(t)):Rr[0](t)};const Qr=t=>{Ml(t),t.scope.on()},ar=()=>{Ue&&Ue.scope.off(),Ml(null)};function Mp(t){return t.vnode.shapeFlag&4}let Xs=!1;function Yv(t,e=!1){Xs=e;const{props:n,children:r}=t.vnode,s=Mp(t);Nv(t,n,s,e),Mv(t,r);const i=s?Jv(t,e):void 0;return Xs=!1,i}function Jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zf(new Proxy(t.ctx,Av));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Zv(t):null;Qr(t),ls();const i=On(r,t,0,[t.props,s]);if(us(),ar(),Mf(i)){if(i.then(ar,ar),e)return i.then(o=>{Sh(t,o,e)}).catch(o=>{oa(o,t,0)});t.asyncDep=i}else Sh(t,i,e)}else xp(t,e)}function Sh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=rp(e)),xp(t,n)}let Ch;function xp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ch&&!r.render){const s=r.template||Nl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=xe(xe({isCustomElement:i,delimiters:a},o),c);r.render=Ch(s,l)}}t.render=r.render||bt}{Qr(t),ls();try{Rv(t)}finally{us(),ar()}}}function Xv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function Zv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Xv(t)},slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rp(Zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}}))}function eE(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function tE(t){return Z(t)&&"__vccOpts"in t}const Ct=(t,e)=>Qy(t,e,Xs);function xl(t,e,n){const r=arguments.length;return r===2?ve(e)&&!z(e)?So(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&So(n)&&(n=[n]),Be(t,e,n))}const nE=Symbol.for("v-scx"),rE=()=>an(nE),sE="3.3.9",iE="http://www.w3.org/2000/svg",er=typeof document<"u"?document:null,Ph=er&&er.createElement("template"),oE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?er.createElementNS(iE,t):er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ph.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ph.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},En="transition",Es="animation",Zs=Symbol("_vtc"),Ll=(t,{slots:e})=>xl(fv,aE(t),e);Ll.displayName="Transition";const Lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ll.props=xe({},pp,Lp);const Qn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},bh=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function aE(t){const e={};for(const U in t)U in Lp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=cE(s),v=y&&y[0],w=y&&y[1],{onBeforeEnter:b,onEnter:k,onEnterCancelled:B,onLeave:V,onLeaveCancelled:te,onBeforeAppear:ce=b,onAppear:Te=k,onAppearCancelled:Y=B}=e,ue=(U,pe,ct)=>{Yn(U,pe?u:a),Yn(U,pe?l:o),ct&&ct()},oe=(U,pe)=>{U._isLeaving=!1,Yn(U,h),Yn(U,m),Yn(U,d),pe&&pe()},Oe=U=>(pe,ct)=>{const Yt=U?Te:k,Pe=()=>ue(pe,U,ct);Qn(Yt,[pe,Pe]),kh(()=>{Yn(pe,U?c:i),In(pe,U?u:a),bh(Yt)||Dh(pe,r,v,Pe)})};return xe(e,{onBeforeEnter(U){Qn(b,[U]),In(U,i),In(U,o)},onBeforeAppear(U){Qn(ce,[U]),In(U,c),In(U,l)},onEnter:Oe(!1),onAppear:Oe(!0),onLeave(U,pe){U._isLeaving=!0;const ct=()=>oe(U,pe);In(U,h),hE(),In(U,d),kh(()=>{U._isLeaving&&(Yn(U,h),In(U,m),bh(V)||Dh(U,r,w,ct))}),Qn(V,[U,ct])},onEnterCancelled(U){ue(U,!1),Qn(B,[U])},onAppearCancelled(U){ue(U,!0),Qn(Y,[U])},onLeaveCancelled(U){oe(U),Qn(te,[U])}})}function cE(t){if(t==null)return null;if(ve(t))return[Xa(t.enter),Xa(t.leave)];{const e=Xa(t);return[e,e]}}function Xa(t){return dy(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Zs]||(t[Zs]=new Set)).add(e)}function Yn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Zs];n&&(n.delete(e),n.size||(t[Zs]=void 0))}function kh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lE=0;function Dh(t,e,n,r){const s=t._endId=++lE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=uE(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=m=>{m.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function uE(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${En}Delay`),i=r(`${En}Duration`),o=Nh(s,i),a=r(`${Es}Delay`),c=r(`${Es}Duration`),l=Nh(a,c);let u=null,h=0,d=0;e===En?o>0&&(u=En,h=o,d=i.length):e===Es?l>0&&(u=Es,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?En:Es:null,d=u?u===En?i.length:c.length:0);const m=u===En&&/\b(transform|all)(,|$)/.test(r(`${En}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function Nh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Oh(n)+Oh(t[r])))}function Oh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function hE(){return document.body.offsetHeight}function dE(t,e,n){const r=t[Zs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fl=Symbol("_vod"),Fp={beforeMount(t,{value:e},{transition:n}){t[Fl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Is(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Is(t,!0),r.enter(t)):r.leave(t,()=>{Is(t,!1)}):Is(t,e))},beforeUnmount(t,{value:e}){Is(t,e)}};function Is(t,e){t.style.display=e?t[Fl]:"none"}function fE(t,e,n){const r=t.style,s=Ne(n);if(n&&!s){if(e&&!Ne(e))for(const i in e)n[i]==null&&xc(r,i,"");for(const i in n)xc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Fl in t&&(r.display=i)}}const Vh=/\s*!important$/;function xc(t,e,n){if(z(n))n.forEach(r=>xc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pE(t,e);Vh.test(n)?t.setProperty(cs(r),n.replace(Vh,""),"important"):t[r]=n}}const Mh=["Webkit","Moz","ms"],Za={};function pE(t,e){const n=Za[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Za[e]=r;r=na(r);for(let s=0;s<Mh.length;s++){const i=Mh[s]+r;if(i in t)return Za[e]=i}return e}const xh="http://www.w3.org/1999/xlink";function mE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xh,e.slice(6,e.length)):t.setAttributeNS(xh,e,n);else{const i=yy(e);n==null||i&&!Ff(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ff(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function tr(t,e,n,r){t.addEventListener(e,n,r)}function _E(t,e,n,r){t.removeEventListener(e,n,r)}const Lh=Symbol("_vei");function yE(t,e,n,r,s=null){const i=t[Lh]||(t[Lh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=vE(e);if(r){const l=i[e]=TE(r,s);tr(t,a,l,c)}else o&&(_E(t,a,o,c),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function vE(t){let e;if(Fh.test(t)){e={};let r;for(;r=t.match(Fh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let ec=0;const EE=Promise.resolve(),IE=()=>ec||(EE.then(()=>ec=0),ec=Date.now());function TE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wt(wE(r,n.value),e,5,[r])};return n.value=t,n.attached=IE(),n}function wE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uh=/^on[a-z]/,AE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dE(t,r,s):e==="style"?fE(t,n,r):Zo(e)?vl(e)||yE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RE(t,e,r,s))?gE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mE(t,e,r,s))};function RE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uh.test(e)&&Ne(n)?!1:e in t}const Co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>so(e,n):e};function SE(t){t.target.composing=!0}function Bh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr=Symbol("_assign"),tn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jr]=Co(s);const i=r||s.props&&s.props.type==="number";tr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Eo(a)),t[jr](a)}),n&&tr(t,"change",()=>{t.value=t.value.trim()}),e||(tr(t,"compositionstart",SE),tr(t,"compositionend",Bh),tr(t,"change",Bh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[jr]=Co(i),t.composing)return;const o=s||t.type==="number"?Eo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Ts={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ea(e);tr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Eo(Po(o)):Po(o));t[jr](t.multiple?s?new Set(i):i:i[0])}),t[jr]=Co(r)},mounted(t,{value:e}){jh(t,e)},beforeUpdate(t,e,n){t[jr]=Co(n)},updated(t,{value:e}){jh(t,e)}};function jh(t,e){const n=t.multiple;if(!(n&&!z(e)&&!ea(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Po(i);if(n)z(e)?i.selected=Ey(e,o)>-1:i.selected=e.has(o);else if(ra(Po(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Po(t){return"_value"in t?t._value:t.value}const CE=["ctrl","shift","alt","meta"],PE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CE.some(n=>t[`${n}Key`]&&!e.includes(n))},Up=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=PE[e[s]];if(i&&i(n,e))return}return t(n,...r)},bE=xe({patchProp:AE},oE);let $h;function kE(){return $h||($h=Lv(bE))}const DE=(...t)=>{const e=kE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=NE(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function NE(t){return Ne(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const kr=typeof window<"u";function OE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Dt(s)?s.map(t):t(s)}return n}const Bs=()=>{},Dt=Array.isArray,VE=/\/$/,ME=t=>t.replace(VE,"");function nc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=UE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yr(e.matched[r],n.matched[s])&&Bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return Dt(t)?Hh(t,e):Dt(e)?Hh(e,t):t===e}function Hh(t,e){return Dt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function BE(t){if(!t)if(kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ME(t)}const jE=/^[^#]+#/;function $E(t,e){return t.replace(jE,"#")+e}function qE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function HE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zh(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function zE(t,e){Lc.set(t,e)}function KE(t){const e=Lc.get(t);return Lc.delete(t),e}let WE=()=>location.protocol+"//"+location.host;function jp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),qh(c,"")}return qh(n,t)+r+s}function GE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=jp(t,location),y=n.value,v=e.value;let w=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}w=v?d.position-v.position:0}else r(m);s.forEach(b=>{b(n.value,y,{delta:w,type:ei.pop,direction:w?w>0?js.forward:js.back:js.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Kh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fa():null}}function QE(t){const{history:e,location:n}=window,r={value:jp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:WE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,Kh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:fa()});i(u.current,u,!0);const h=me({},Kh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function YE(t){t=BE(t);const e=QE(t),n=GE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:$E.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JE(t){return typeof t=="string"||t&&typeof t=="object"}function $p(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qp=Symbol("");var Wh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wh||(Wh={}));function Jr(t,e){return me(new Error,{type:t,[qp]:!0},e)}function Xt(t,e){return t instanceof Error&&qp in t&&(e==null||!!(t.type&e))}const Gh="[^/]+?",XE={sensitive:!1,strict:!1,start:!0,end:!0},ZE=/[.+*?^${}()[\]/\\]/g;function eI(t,e){const n=me({},XE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(ZE,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:v,optional:w,regexp:b}=d;i.push({name:y,repeatable:v,optional:w});const k=b||Gh;if(k!==Gh){m+=10;try{new RegExp(`(${k})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+V.message)}}let B=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(B=w&&l.length<2?`(?:/${B})`:"/"+B),w&&(B+="?"),s+=B,m+=20,w&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:w}=m,b=y in l?l[y]:"";if(Dt(b)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Dt(b)?b.join("/"):b;if(!k)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function tI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=tI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qh(r))return 1;if(Qh(s))return-1}return s.length-r.length}function Qh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rI={type:0,value:""},sI=/[a-zA-Z0-9_]/;function iI(t){if(!t)return[[]];if(t==="/")return[[rI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:sI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function oI(t,e,n){const r=eI(iI(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aI(t,e){const n=[],r=new Map;e=Xh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,y=cI(u);y.aliasOf=d&&d.record;const v=Xh(e,u),w=[y];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of B)w.push(me({},y,{components:d?d.record.components:y.components,path:V,aliasOf:d?d.record:y}))}let b,k;for(const B of w){const{path:V}=B;if(h&&V[0]!=="/"){const te=h.record.path,ce=te[te.length-1]==="/"?"":"/";B.path=h.record.path+(V&&ce+V)}if(b=oI(B,h,v),d?d.alias.push(b):(k=k||b,k!==b&&k.alias.push(b),m&&u.name&&!Jh(b)&&o(u.name)),y.children){const te=y.children;for(let ce=0;ce<te.length;ce++)i(te[ce],b,d&&d.children[ce])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return k?()=>{o(k)}:Bs}function o(u){if($p(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&nI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Jh(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Jr(1,{location:u});v=d.record.name,m=me(Yh(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Yh(u.params,d.keys.map(k=>k.name))),y=d.stringify(m)}else if("path"in u)y=u.path,d=n.find(k=>k.re.test(y)),d&&(m=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw Jr(1,{location:u,currentLocation:h});v=d.record.name,m=me({},h.params,u.params),y=d.stringify(m)}const w=[];let b=d;for(;b;)w.unshift(b.record),b=b.parent;return{name:v,path:y,params:m,matched:w,meta:uI(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Jh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uI(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Xh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Hp(t,e){return e.children.some(n=>n===t||Hp(t,n))}const zp=/#/g,hI=/&/g,dI=/\//g,fI=/=/g,pI=/\?/g,Kp=/\+/g,mI=/%5B/g,gI=/%5D/g,Wp=/%5E/g,_I=/%60/g,Gp=/%7B/g,yI=/%7C/g,Qp=/%7D/g,vI=/%20/g;function Ul(t){return encodeURI(""+t).replace(yI,"|").replace(mI,"[").replace(gI,"]")}function EI(t){return Ul(t).replace(Gp,"{").replace(Qp,"}").replace(Wp,"^")}function Fc(t){return Ul(t).replace(Kp,"%2B").replace(vI,"+").replace(zp,"%23").replace(hI,"%26").replace(_I,"`").replace(Gp,"{").replace(Qp,"}").replace(Wp,"^")}function II(t){return Fc(t).replace(fI,"%3D")}function TI(t){return Ul(t).replace(zp,"%23").replace(pI,"%3F")}function wI(t){return t==null?"":TI(t).replace(dI,"%2F")}function bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function AI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Kp," "),o=i.indexOf("="),a=bo(o<0?i:i.slice(0,o)),c=o<0?null:bo(i.slice(o+1));if(a in e){let l=e[a];Dt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Zh(t){let e="";for(let n in t){const r=t[n];if(n=II(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(r)?r.map(i=>i&&Fc(i)):[r&&Fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const SI=Symbol(""),ed=Symbol(""),Bl=Symbol(""),Yp=Symbol(""),Uc=Symbol("");function ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Jr(4,{from:n,to:e})):h instanceof Error?a(h):JE(h)?a(Jr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function rc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=OE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Sn(d,n,r,i,o)()}))}}return s}function CI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function td(t){const e=an(Bl),n=an(Yp),r=Ct(()=>e.resolve(Ur(t.to))),s=Ct(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Yr.bind(null,u));if(d>-1)return d;const m=nd(c[l-2]);return l>1&&nd(u)===m&&h[h.length-1].path!==m?h.findIndex(Yr.bind(null,c[l-2])):d}),i=Ct(()=>s.value>-1&&DI(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&Bp(n.params,r.value.params));function a(c={}){return kI(c)?e[Ur(t.replace)?"replace":"push"](Ur(t.to)).catch(Bs):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const PI=_p({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:td,setup(t,{slots:e}){const n=ia(td(t)),{options:r}=an(Bl),s=Ct(()=>({[rd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bI=PI;function kI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Dt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rd=(t,e,n)=>t??e??n,NI=_p({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Uc),s=Ct(()=>t.route||r.value),i=an(ed,0),o=Ct(()=>{let l=Ur(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ct(()=>s.value.matched[o.value]);ao(ed,Ct(()=>o.value+1)),ao(SI,a),ao(Uc,s);const c=Hy();return oo(()=>[c.value,a.value,t.name],([l,u,h],[d,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Yr(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return sd(n.default,{Component:d,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,w=xl(d,me({},y,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return sd(n.default,{Component:w,route:l})||w}}});function sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OI=NI;function VI(t){const e=aI(t.routes,t),n=t.parseQuery||AI,r=t.stringifyQuery||Zh,s=t.history,i=ws(),o=ws(),a=ws(),c=zy(Tn);let l=Tn;kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,E=>""+E),h=tc.bind(null,wI),d=tc.bind(null,bo);function m(E,x){let N,$;return $p(E)?(N=e.getRecordMatcher(E),$=x):$=E,e.addRoute($,N)}function y(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function b(E,x){if(x=me({},x||c.value),typeof E=="string"){const g=nc(n,E,x.path),_=e.resolve({path:g.path},x),I=s.createHref(g.fullPath);return me(g,_,{params:d(_.params),hash:bo(g.hash),redirectedFrom:void 0,href:I})}let N;if("path"in E)N=me({},E,{path:nc(n,E.path,x.path).path});else{const g=me({},E.params);for(const _ in g)g[_]==null&&delete g[_];N=me({},E,{params:h(g)}),x.params=h(x.params)}const $=e.resolve(N,x),fe=E.hash||"";$.params=u(d($.params));const f=xE(r,me({},E,{hash:EI(fe),path:$.path})),p=s.createHref(f);return me({fullPath:f,hash:fe,query:r===Zh?RI(E.query):E.query||{}},$,{redirectedFrom:void 0,href:p})}function k(E){return typeof E=="string"?nc(n,E,c.value.path):me({},E)}function B(E,x){if(l!==E)return Jr(8,{from:x,to:E})}function V(E){return Te(E)}function te(E){return V(me(k(E),{replace:!0}))}function ce(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let $=typeof N=="function"?N(E):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=k($):{path:$},$.params={}),me({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function Te(E,x){const N=l=b(E),$=c.value,fe=E.state,f=E.force,p=E.replace===!0,g=ce(N);if(g)return Te(me(k(g),{state:typeof g=="object"?me({},fe,g.state):fe,force:f,replace:p}),x||N);const _=N;_.redirectedFrom=x;let I;return!f&&LE(r,$,N)&&(I=Jr(16,{to:_,from:$}),Vt($,$,!0,!1)),(I?Promise.resolve(I):oe(_,$)).catch(R=>Xt(R)?Xt(R,2)?R:_n(R):de(R,_,$)).then(R=>{if(R){if(Xt(R,2))return Te(me({replace:p},k(R.to),{state:typeof R.to=="object"?me({},fe,R.to.state):fe,force:f}),x||_)}else R=U(_,$,!0,p,fe);return Oe(_,$,R),R})}function Y(E,x){const N=B(E,x);return N?Promise.reject(N):Promise.resolve()}function ue(E){const x=wr.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function oe(E,x){let N;const[$,fe,f]=MI(E,x);N=rc($.reverse(),"beforeRouteLeave",E,x);for(const g of $)g.leaveGuards.forEach(_=>{N.push(Sn(_,E,x))});const p=Y.bind(null,E,x);return N.push(p),Ye(N).then(()=>{N=[];for(const g of i.list())N.push(Sn(g,E,x));return N.push(p),Ye(N)}).then(()=>{N=rc(fe,"beforeRouteUpdate",E,x);for(const g of fe)g.updateGuards.forEach(_=>{N.push(Sn(_,E,x))});return N.push(p),Ye(N)}).then(()=>{N=[];for(const g of f)if(g.beforeEnter)if(Dt(g.beforeEnter))for(const _ of g.beforeEnter)N.push(Sn(_,E,x));else N.push(Sn(g.beforeEnter,E,x));return N.push(p),Ye(N)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),N=rc(f,"beforeRouteEnter",E,x),N.push(p),Ye(N))).then(()=>{N=[];for(const g of o.list())N.push(Sn(g,E,x));return N.push(p),Ye(N)}).catch(g=>Xt(g,8)?g:Promise.reject(g))}function Oe(E,x,N){a.list().forEach($=>ue(()=>$(E,x,N)))}function U(E,x,N,$,fe){const f=B(E,x);if(f)return f;const p=x===Tn,g=kr?history.state:{};N&&($||p?s.replace(E.fullPath,me({scroll:p&&g&&g.scroll},fe)):s.push(E.fullPath,fe)),c.value=E,Vt(E,x,N,p),_n()}let pe;function ct(){pe||(pe=s.listen((E,x,N)=>{if(!Bi.listening)return;const $=b(E),fe=ce($);if(fe){Te(me(fe,{replace:!0}),$).catch(Bs);return}l=$;const f=c.value;kr&&zE(zh(f.fullPath,N.delta),fa()),oe($,f).catch(p=>Xt(p,12)?p:Xt(p,2)?(Te(p.to,$).then(g=>{Xt(g,20)&&!N.delta&&N.type===ei.pop&&s.go(-1,!1)}).catch(Bs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),de(p,$,f))).then(p=>{p=p||U($,f,!1),p&&(N.delta&&!Xt(p,8)?s.go(-N.delta,!1):N.type===ei.pop&&Xt(p,20)&&s.go(-1,!1)),Oe($,f,p)}).catch(Bs)}))}let Yt=ws(),Pe=ws(),ye;function de(E,x,N){_n(E);const $=Pe.list();return $.length?$.forEach(fe=>fe(E,x,N)):console.error(E),Promise.reject(E)}function Jt(){return ye&&c.value!==Tn?Promise.resolve():new Promise((E,x)=>{Yt.add([E,x])})}function _n(E){return ye||(ye=!E,ct(),Yt.list().forEach(([x,N])=>E?N(E):x()),Yt.reset()),E}function Vt(E,x,N,$){const{scrollBehavior:fe}=t;if(!kr||!fe)return Promise.resolve();const f=!N&&KE(zh(E.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return ip().then(()=>fe(E,x,f)).then(p=>p&&HE(p)).catch(p=>de(p,E,x))}const ht=E=>s.go(E);let Tr;const wr=new Set,Bi={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:w,getRoutes:v,resolve:b,options:t,push:V,replace:te,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pe.add,isReady:Jt,install(E){const x=this;E.component("RouterLink",bI),E.component("RouterView",OI),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ur(c)}),kr&&!Tr&&c.value===Tn&&(Tr=!0,V(s.location).catch(fe=>{}));const N={};for(const fe in Tn)Object.defineProperty(N,fe,{get:()=>c.value[fe],enumerable:!0});E.provide(Bl,x),E.provide(Yp,Yf(N)),E.provide(Uc,c);const $=E.unmount;wr.add(E),E.unmount=function(){wr.delete(E),wr.size<1&&(l=Tn,pe&&pe(),pe=null,c.value=Tn,Tr=!1,ye=!1),$()}}};function Ye(E){return E.reduce((x,N)=>x.then(()=>ue(N)),Promise.resolve())}return Bi}function MI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Yr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Yr(l,c))||s.push(c))}return[n,r,s]}const vi=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xI={methods:{close(){this.$emit("close")}}},LI={class:"modal-wrap",id:"item-modal"},FI={class:"modal-content"},UI={class:"modal-header",id:"modal-title"},BI={class:"modal-body",id:"modal-details"};function jI(t,e,n,r,s,i){return ft(),Np(Ll,{name:"modal-fade"},{default:wo(()=>[Xe(T("div",LI,[T("div",FI,[T("header",UI,[mh(t.$slots,"header",{},()=>[en(" Hi User ")]),T("button",{type:"button",onClick:e[0]||(e[0]=(...o)=>i.close&&i.close(...o))},"Close ✗")]),T("section",BI,[mh(t.$slots,"body",{},()=>[en("Add something here")])])])],512),[[Fp,t.isModalVisible]])]),_:3})}const $I=vi(xI,[["render",jI]]),Sr={DATE:0,COURSE:1,TYPE:2,DATE_DESC:3,COURSE_DESC:4,TYPE_DESC:5},Cr={DATE:0,COURSE:1,TYPE:2,DATE_DESC:3,COURSE_DESC:4,TYPE_DESC:5},Fe={ASCENDING:0,DESCENDING:1};function id(t,e){const n=t.reduce((i,o)=>{let a=o.course;return i[a]||(i[a]=[]),i[a].push(o),i},{});let r;r=Object.keys(n).sort((i,o)=>i.toLowerCase().localeCompare(o.toLowerCase())),e==Fe.DESCENDING&&(r=r.reverse());let s={};for(const i in r){let o=r[i];s[o]=n[o]}return s}function od(t,e){const n=t.reduce((i,o)=>{let a=o.type;return i[a]||(i[a]=[]),i[a].push(o),i},{});let r;r=Object.keys(n).sort((i,o)=>i.toLowerCase().localeCompare(o.toLowerCase())),e==Fe.DESCENDING&&(r=r.reverse());let s={};for(const i in r){let o=r[i];s[o]=n[o]}return s}function ad(t,e){const n=t.reduce((a,c)=>{const l=c.deadline.split("T")[0];return a[l]||(a[l]=[]),a[l].push(c),a},{});let r=(a,c)=>new Date(c)-new Date(a),s=(a,c)=>new Date(a)-new Date(c),i;e==Fe.DESCENDING?i=Object.keys(n).sort((a,c)=>r(a,c)):i=Object.keys(n).sort((a,c)=>s(a,c));let o={};for(let a=0;a<i.length;a++){const c=i[a];o[c]=n[c]}return o}function cd(t,e){let n;return e==Fe.DESCENDING?n=t.sort((r,s)=>new Date(s.deadline)-new Date(r.deadline)):n=t.sort((r,s)=>new Date(r.deadline)-new Date(s.deadline)),n}function ld(t,e){let n;return e==Fe.DESCENDING?n=t.sort((r,s)=>s.course.toLowerCase().localeCompare(r.course.toLowerCase())):n=t.sort((r,s)=>r.course.toLowerCase().localeCompare(s.course.toLowerCase())),n}function ud(t,e){let n;return e==Fe.DESCENDING?n=t.sort((r,s)=>s.type.toLowerCase().localeCompare(r.type.toLowerCase())):n=t.sort((r,s)=>r.type.toLowerCase().localeCompare(s.type.toLowerCase())),n}function qI(t,e){let n;switch(e){case Sr.COURSE:n=id(t,Fe.ASCENDING);break;case Sr.TYPE:n=od(t,Fe.ASCENDING);break;case Sr.DATE_DESC:n=ad(t,Fe.DESCENDING);break;case Sr.COURSE_DESC:n=id(t,Fe.DESCENDING);break;case Sr.TYPE_DESC:n=od(t,Fe.DESCENDING);break;case Sr.DATE:default:n=ad(t,Fe.ASCENDING);break}return n}function HI(t,e){let n;switch(e){case Cr.COURSE:n=ld(t,Fe.ASCENDING);break;case Cr.TYPE:n=ud(t,Fe.ASCENDING);break;case Cr.DATE_DESC:n=cd(t,Fe.DESCENDING);break;case Cr.COURSE_DESC:n=ld(t,Fe.DESCENDING);break;case Cr.TYPE_DESC:n=ud(t,Fe.DESCENDING);break;case Cr.DATE:default:n=cd(t,Fe.ASCENDING);break}return n}function hd(t,e,n){let r=qI(t,e);for(const s in r){let i=r[s],o=HI(i,n);r[s]=o}return r}/**
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
 */const Jp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new KI;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WI=function(t){const e=Jp(t);return Xp.encodeByteArray(e,!0)},ko=function(t){return WI(t).replace(/\./g,"")},Zp=function(t){try{return Xp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QI=()=>GI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zp(t[1]);return e&&JSON.parse(e)},jl=()=>{try{return QI()||YI()||JI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},em=t=>{var e,n;return(n=(e=jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XI=t=>{const e=em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tm=()=>{var t;return(t=jl())===null||t===void 0?void 0:t.config},nm=t=>{var e;return(e=jl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function nT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sT(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function oT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const aT="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aT,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mn(s,a,r)}}function cT(t,e){return t.replace(lT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lT=/\{\$([^}]+)}/g;function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dd(i)&&dd(o)){if(!Do(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hT(t,e){const n=new dT(t,e);return n.subscribe.bind(n)}class dT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class pT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gT(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mT(t){return t===Jn?void 0:t}function gT(t){return t.instantiationMode==="EAGER"}/**
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
 */class _T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const yT={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vT=se.INFO,ET={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},IT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ET[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=vT,this._logHandler=IT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const TT=(t,e)=>e.some(n=>t instanceof n);let fd,pd;function wT(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AT(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rm=new WeakMap,Bc=new WeakMap,sm=new WeakMap,ic=new WeakMap,ql=new WeakMap;function RT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rm.set(n,t)}).catch(()=>{}),ql.set(e,t),e}function ST(t){if(Bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CT(t){jc=t(jc)}function PT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return sm.set(r,e.sort?e.sort():[e]),Vn(r)}:AT().includes(t)?function(...e){return t.apply(oc(this),e),Vn(rm.get(this))}:function(...e){return Vn(t.apply(oc(this),e))}}function bT(t){return typeof t=="function"?PT(t):(t instanceof IDBTransaction&&ST(t),TT(t,wT())?new Proxy(t,jc):t)}function Vn(t){if(t instanceof IDBRequest)return RT(t);if(ic.has(t))return ic.get(t);const e=bT(t);return e!==t&&(ic.set(t,e),ql.set(e,t)),e}const oc=t=>ql.get(t);function kT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vn(o.result),c.oldVersion,c.newVersion,Vn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const DT=["get","getKey","getAll","getAllKeys","count"],NT=["put","add","delete","clear"],ac=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=NT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||DT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ac.set(e,i),i}CT(t=>({...t,get:(e,n,r)=>md(e,n)||t.get(e,n,r),has:(e,n)=>!!md(e,n)||t.has(e,n)}));/**
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
 */class OT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",gd="0.9.25";/**
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
 */const dr=new $l("@firebase/app"),MT="@firebase/app-compat",xT="@firebase/analytics-compat",LT="@firebase/analytics",FT="@firebase/app-check-compat",UT="@firebase/app-check",BT="@firebase/auth",jT="@firebase/auth-compat",$T="@firebase/database",qT="@firebase/database-compat",HT="@firebase/functions",zT="@firebase/functions-compat",KT="@firebase/installations",WT="@firebase/installations-compat",GT="@firebase/messaging",QT="@firebase/messaging-compat",YT="@firebase/performance",JT="@firebase/performance-compat",XT="@firebase/remote-config",ZT="@firebase/remote-config-compat",ew="@firebase/storage",tw="@firebase/storage-compat",nw="@firebase/firestore",rw="@firebase/firestore-compat",sw="firebase",iw="10.7.1";/**
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
 */const qc="[DEFAULT]",ow={[$c]:"fire-core",[MT]:"fire-core-compat",[LT]:"fire-analytics",[xT]:"fire-analytics-compat",[UT]:"fire-app-check",[FT]:"fire-app-check-compat",[BT]:"fire-auth",[jT]:"fire-auth-compat",[$T]:"fire-rtdb",[qT]:"fire-rtdb-compat",[HT]:"fire-fn",[zT]:"fire-fn-compat",[KT]:"fire-iid",[WT]:"fire-iid-compat",[GT]:"fire-fcm",[QT]:"fire-fcm-compat",[YT]:"fire-perf",[JT]:"fire-perf-compat",[XT]:"fire-rc",[ZT]:"fire-rc-compat",[ew]:"fire-gcs",[tw]:"fire-gcs-compat",[nw]:"fire-fst",[rw]:"fire-fst-compat","fire-js":"fire-js",[sw]:"fire-js-all"};/**
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
 */const No=new Map,Hc=new Map;function aw(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(Hc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of No.values())aw(n,t);return!0}function Hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new Ei("app","Firebase",cw);/**
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
 */class lw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=iw;function im(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=tm()),!n)throw Mn.create("no-options");const i=No.get(s);if(i){if(Do(n,i.options)&&Do(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const o=new _T(s);for(const c of Hc.values())o.addComponent(c);const a=new lw(n,r,o);return No.set(s,a),a}function om(t=qc){const e=No.get(t);if(!e&&t===qc&&tm())return im();if(!e)throw Mn.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let s=(r=ow[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}Xr(new hr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const uw="firebase-heartbeat-database",hw=1,ti="firebase-heartbeat-store";let cc=null;function am(){return cc||(cc=kT(uw,hw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),cc}async function dw(t){try{return await(await am()).transaction(ti).objectStore(ti).get(cm(t))}catch(e){if(e instanceof mn)dr.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function _d(t,e){try{const r=(await am()).transaction(ti,"readwrite");await r.objectStore(ti).put(e,cm(t)),await r.done}catch(n){if(n instanceof mn)dr.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function cm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fw=1024,pw=30*24*60*60*1e3;class mw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _w(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yd(),{heartbeatsToSend:r,unsentEntries:s}=gw(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yd(){return new Date().toISOString().substring(0,10)}function gw(t,e=fw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _w{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?oT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vd(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yw(t){Xr(new hr("platform-logger",e=>new OT(e),"PRIVATE")),Xr(new hr("heartbeat",e=>new mw(e),"PRIVATE")),xn($c,gd,t),xn($c,gd,"esm2017"),xn("fire-js","")}yw("");var vw="firebase",Ew="10.7.1";/**
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
 */xn(vw,Ew,"app");var Iw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,zl=zl||{},Q=Iw||self;function pa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Tw(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++ww)}var lc="closure_uid_"+(1e9*Math.random()>>>0),ww=0;function Aw(t,e,n){return t.call.apply(t.bind,arguments)}function Rw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=Aw:rt=Rw,rt.apply(null,arguments)}function Gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function qn(){this.s=this.s,this.o=this.o}var Sw=0;qn.prototype.s=!1;qn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Sw!=0)&&Tw(this)};qn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Kl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ed(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(pa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Cw=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function ni(t){return/^[\s\xa0]*$/.test(t)}function ma(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return ma().indexOf(t)!=-1}function Wl(t){return Wl[" "](t),t}Wl[" "]=function(){};function Pw(t,e){var n=EA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bw=Ut("Opera"),Zr=Ut("Trident")||Ut("MSIE"),um=Ut("Edge"),zc=um||Zr,hm=Ut("Gecko")&&!(ma().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),kw=ma().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function dm(){var t=Q.document;return t?t.documentMode:void 0}var Kc;e:{var uc="",hc=function(){var t=ma();if(hm)return/rv:([^\);]+)(\)|;)/.exec(t);if(um)return/Edge\/([\d\.]+)/.exec(t);if(Zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kw)return/WebKit\/(\S+)/.exec(t);if(bw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hc&&(uc=hc?hc[1]:""),Zr){var dc=dm();if(dc!=null&&dc>parseFloat(uc)){Kc=String(dc);break e}}Kc=uc}var Wc;if(Q.document&&Zr){var Id=dm();Wc=Id||parseInt(Kc,10)||void 0}else Wc=void 0;var Dw=Wc;function ri(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hm){e:{try{Wl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Nw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ri.$.h.call(this)}}$e(ri,st);var Nw={2:"touch",3:"pen",4:"mouse"};ri.prototype.h=function(){ri.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wi="closure_listenable_"+(1e6*Math.random()|0),Ow=0;function Vw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Ow,this.fa=this.ia=!1}function ga(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Mw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fm(t){const e={};for(const n in t)e[n]=t[n];return e}const Td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Td.length;i++)n=Td[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _a(t){this.src=t,this.g={},this.h=0}_a.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Qc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Vw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Gc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=lm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ga(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ql="closure_lm_"+(1e6*Math.random()|0),fc={};function mm(t,e,n,r,s){if(r&&r.once)return _m(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mm(t,e[i],n,r,s);return null}return n=Xl(n),t&&t[wi]?t.O(e,n,Ti(r)?!!r.capture:!!r,s):gm(t,e,n,!1,r,s)}function gm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ti(s)?!!s.capture:!!s,a=Jl(t);if(a||(t[Ql]=a=new _a(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=xw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Cw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(vm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xw(){function t(n){return e.call(t.src,t.listener,n)}const e=Lw;return t}function _m(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_m(t,e[i],n,r,s);return null}return n=Xl(n),t&&t[wi]?t.P(e,n,Ti(r)?!!r.capture:!!r,s):gm(t,e,n,!0,r,s)}function ym(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ym(t,e[i],n,r,s);else r=Ti(r)?!!r.capture:!!r,n=Xl(n),t&&t[wi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qc(i,n,r,s),-1<n&&(ga(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qc(e,n,r,s)),(n=-1<t?e[t]:null)&&Yl(n))}function Yl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[wi])Gc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Jl(e))?(Gc(n,t),n.h==0&&(n.src=null,e[Ql]=null)):ga(t)}}}function vm(t){return t in fc?fc[t]:fc[t]="on"+t}function Lw(t,e){if(t.fa)t=!0;else{e=new ri(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Yl(t),t=n.call(r,e)}return t}function Jl(t){return t=t[Ql],t instanceof _a?t:null}var pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(t){return typeof t=="function"?t:(t[pc]||(t[pc]=function(e){return t.handleEvent(e)}),t[pc])}function je(){qn.call(this),this.i=new _a(this),this.S=this,this.J=null}$e(je,qn);je.prototype[wi]=!0;je.prototype.removeEventListener=function(t,e,n,r){ym(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),pm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Qi(o,r,!0,e)&&s}if(o=e.g=t,s=Qi(o,r,!0,e)&&s,s=Qi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Qi(o,r,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ga(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Gc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Zl=Q.JSON.stringify;class Fw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Uw(){var t=eu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Bw{constructor(){this.h=this.g=null}add(e,n){const r=Em.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Em=new Fw(()=>new jw,t=>t.reset());class jw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $w(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qw(t){Q.setTimeout(()=>{throw t},0)}let si,ii=!1,eu=new Bw,Im=()=>{const t=Q.Promise.resolve(void 0);si=()=>{t.then(Hw)}};var Hw=()=>{for(var t;t=Uw();){try{t.h.call(t.g)}catch(n){qw(n)}var e=Em;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ii=!1};function ya(t,e){je.call(this),this.h=t||1,this.g=e||Q,this.j=rt(this.qb,this),this.l=Date.now()}$e(ya,je);O=ya.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(tu(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){ya.$.N.call(this),tu(this),delete this.g};function nu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Tm(t){t.g=nu(()=>{t.g=null,t.i&&(t.i=!1,Tm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zw extends qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tm(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(t){qn.call(this),this.h=t,this.g={}}$e(oi,qn);var wd=[];function wm(t,e,n,r){Array.isArray(n)||(n&&(wd[0]=n.toString()),n=wd);for(var s=0;s<n.length;s++){var i=mm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Am(t){Gl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yl(e)},t),t.g={}}oi.prototype.N=function(){oi.$.N.call(this),Am(this)};oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function va(){this.g=!0}va.prototype.Ea=function(){this.g=!1};function Kw(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ww(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Vr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Qw(t,n)+(r?" "+r:"")})}function Gw(t,e){t.info(function(){return"TIMEOUT: "+e})}va.prototype.info=function(){};function Qw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Zl(n)}catch{return e}}var yr={},Ad=null;function Ea(){return Ad=Ad||new je}yr.Ta="serverreachability";function Rm(t){st.call(this,yr.Ta,t)}$e(Rm,st);function ai(t){const e=Ea();Ge(e,new Rm(e))}yr.STAT_EVENT="statevent";function Sm(t,e){st.call(this,yr.STAT_EVENT,t),this.stat=e}$e(Sm,st);function ut(t){const e=Ea();Ge(e,new Sm(e,t))}yr.Ua="timingevent";function Cm(t,e){st.call(this,yr.Ua,t),this.size=e}$e(Cm,st);function Ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ru(){}ru.prototype.h=null;function Rd(t){return t.h||(t.h=t.i())}function bm(){}var Ri={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function su(){st.call(this,"d")}$e(su,st);function iu(){st.call(this,"c")}$e(iu,st);var Yc;function Ta(){}$e(Ta,ru);Ta.prototype.g=function(){return new XMLHttpRequest};Ta.prototype.i=function(){return{}};Yc=new Ta;function Si(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new oi(this),this.P=Yw,t=zc?125:void 0,this.V=new ya(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new km}function km(){this.i=null,this.g="",this.h=!1}var Yw=45e3,Dm={},Jc={};O=Si.prototype;O.setTimeout=function(t){this.P=t};function Xc(t,e,n){t.L=1,t.A=Aa(ln(e)),t.u=n,t.S=!0,Nm(t,null)}function Nm(t,e){t.G=Date.now(),Ci(t),t.B=ln(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Bm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new km,t.g=ag(t.l,n?e:null,!t.u),0<t.O&&(t.M=new zw(rt(t.Pa,t,t.g),t.O)),wm(t.U,t.g,"readystatechange",t.nb),e=t.I?fm(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ai(),Kw(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Bt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||zc||this.g&&(this.h.h||this.g.ja()||bd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ai(3):ai(2)),wa(this);var n=this.g.da();this.ca=n;t:if(Om(this)){var r=bd(this.g);t="";var s=r.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),$s(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ww(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ni(a)){var l=a;break t}}l=null}if(n=l)Vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zc(this,n);else{this.i=!1,this.s=3,ut(12),rr(this),$s(this);break e}}this.S?(Vm(this,u,o),zc&&this.i&&u==3&&(wm(this.U,this.V,"tick",this.mb),this.V.start())):(Vr(this.j,this.m,o,null),Zc(this,o)),u==4&&rr(this),this.i&&!this.J&&(u==4?rg(this.l,this):(this.i=!1,Ci(this)))}else _A(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),rr(this),$s(this)}}}catch{}finally{}};function Om(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Vm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Jw(t,n),s==Jc){e==4&&(t.s=4,ut(14),r=!1),Vr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Dm){t.s=4,ut(15),Vr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vr(t.j,t.m,s,null),Zc(t,s);Om(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hu(e),e.M=!0,ut(11))):(Vr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),$s(t))}O.mb=function(){if(this.g){var t=Bt(this.g),e=this.g.ja();this.o<e.length&&(wa(this),Vm(this,t,e),this.i&&t!=4&&Ci(this))}};function Jw(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Jc:(n=Number(e.substring(n,r)),isNaN(n)?Dm:(r+=1,r+n>e.length?Jc:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,rr(this)};function Ci(t){t.Y=Date.now()+t.P,Mm(t,t.P)}function Mm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ai(rt(t.lb,t),e)}function wa(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Gw(this.j,this.B),this.L!=2&&(ai(),ut(17)),rr(this),this.s=2,$s(this)):Mm(this,this.Y-t)};function $s(t){t.l.H==0||t.J||rg(t.l,t)}function rr(t){wa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tu(t.V),Am(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Zc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||el(n.i,t))){if(!t.K&&el(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Mo(n),Pa(n);else break e;uu(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ai(rt(n.ib,n),6e3));if(1>=qm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&Mo(n),!ni(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ou(i,i.h),i.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ae(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=og(r,r.J?r.pa:null,r.Y),o.K){Hm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(wa(a),Ci(a)),r.g=o}else tg(r);0<n.j.length&&ba(n)}else l[0]!="stop"&&l[0]!="close"||sr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sr(n,7):lu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ai(4)}catch{}}function Xw(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Zw(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Zw(t),r=Xw(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cr){this.h=t.h,Oo(this,t.j),this.s=t.s,this.g=t.g,Vo(this,t.m),this.l=t.l;var e=t.i,n=new ci;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sd(this,n),this.o=t.o}else t&&(e=String(t).match(Lm))?(this.h=!1,Oo(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),Vo(this,e[4]),this.l=Ds(e[5]||"",!0),Sd(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,Cd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,Cd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?rA:nA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,iA)),t.join("")};function ln(t){return new cr(t)}function Oo(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sd(t,e,n){e instanceof ci?(t.i=e,oA(t.i,t.h)):(n||(e=Ns(e,sA)),t.i=new ci(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Aa(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cd=/[#\/\?@]/g,nA=/[#\?:]/g,rA=/[#\?]/g,sA=/[#\?@]/g,iA=/#/g;function ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hn(t){t.g||(t.g=new Map,t.h=0,t.i&&eA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ci.prototype;O.add=function(t,e){Hn(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Fm(t,e){Hn(t),e=ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Um(t,e){return Hn(t),e=ds(t,e),t.g.has(e)}O.forEach=function(t,e){Hn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Hn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Hn(this);let e=[];if(typeof t=="string")Um(this,t)&&(e=e.concat(this.g.get(ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Hn(this),this.i=null,t=ds(this,t),Um(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Bm(t,e,n){Fm(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),Kl(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oA(t,e){e&&!t.j&&(Hn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Fm(this,r),Bm(this,s,n))},t)),t.j=e}var aA=class{constructor(t,e){this.g=t,this.map=e}};function jm(t){this.l=t||cA,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cA=10;function $m(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qm(t){return t.h?1:t.g?t.g.size:0}function el(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ou(t,e){t.g?t.g.add(e):t.h=e}function Hm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jm.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Kl(t.i)}var lA=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function uA(){this.g=new lA}function hA(t,e,n){const r=n||"";try{xm(t,function(s,i){let o=s;Ti(s)&&(o=Zl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dA(t,e){const n=new va;if(Q.Image){const r=new Image;r.onload=Gi(Yi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gi(Yi,n,r,"TestLoadImage: error",!1,e),r.onabort=Gi(Yi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gi(Yi,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ra(t){this.l=t.ec||null,this.j=t.ob||!1}$e(Ra,ru);Ra.prototype.g=function(){return new Sa(this.l,this.j)};Ra.prototype.i=function(t){return function(){return t}}({});function Sa(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Sa,je);var au=0;O=Sa.prototype;O.open=function(t,e){if(this.readyState!=au)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,li(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=au};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Km(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Km(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pi(this):li(this),this.readyState==3&&Km(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Pi(this))};O.Ya=function(t){this.g&&(this.response=t,Pi(this))};O.ka=function(){this.g&&Pi(this)};function Pi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,li(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fA=Q.JSON.parse;function Ce(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wm,this.L=this.M=!1}$e(Ce,je);var Wm="",pA=/^https?$/i,mA=["POST","PUT"];O=Ce.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yc.g(),this.C=this.u?Rd(this.u):Rd(Yc),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Pd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=lm(mA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ym(this),0<this.B&&((this.L=gA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=nu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pd(this,i)}};function gA(t){return Zr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof zl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Pd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gm(t),Ca(t)}function Gm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ca(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ca(this,!0)),Ce.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Qm(this):this.kb())};O.kb=function(){Qm(this)};function Qm(t){if(t.h&&typeof zl<"u"&&(!t.C[1]||Bt(t)!=4||t.da()!=2)){if(t.v&&Bt(t)==4)nu(t.La,0,t);else if(Ge(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Lm)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!pA.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<Bt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Gm(t)}}finally{Ca(t)}}}}function Ca(t,e){if(t.g){Ym(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ym(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Bt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fA(e)}};function bd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Wm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _A(t){const e={};t=(t.g&&2<=Bt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ni(t[r]))continue;var n=$w(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Mw(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jm(t){let e="";return Gl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xm(t){this.Ga=0,this.j=[],this.l=new va,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jm(t&&t.concurrentRequestLimit),this.Ja=new uA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Xm.prototype;O.ra=8;O.H=1;function lu(t){if(Zm(t),t.H==3){var e=t.W++,n=ln(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),bi(t,n),e=new Si(t,t.l,e),e.L=2,e.A=Aa(ln(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=ag(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ci(e)}ig(t)}function Pa(t){t.g&&(hu(t),t.g.cancel(),t.g=null)}function Zm(t){Pa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Mo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function ba(t){if(!$m(t.i)&&!t.m){t.m=!0;var e=t.Na;si||Im(),ii||(si(),ii=!0),eu.add(e,t),t.C=0}}function yA(t,e){return qm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ai(rt(t.Na,t,e),sg(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Si(this,this.l,t);let i=this.s;if(this.U&&(i?(i=fm(i),pm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=eg(this,s,e),n=ln(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),bi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Jm(i)))+"&"+e:this.o&&cu(n,this.o,i)),ou(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,Xc(s,n,null)):Xc(s,n,e),this.H=2}}else this.H==3&&(t?kd(this,t):this.j.length==0||$m(this.i)||kd(this))};function kd(t,e){var n;e?n=e.m:n=t.W++;const r=ln(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),bi(t,r),t.o&&t.s&&cu(r,t.o,t.s),n=new Si(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=eg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ou(t.i,n),Xc(n,r,e)}function bi(t,e){t.na&&Gl(t.na,function(n,r){Ae(e,r,n)}),t.h&&xm({},function(n,r){Ae(e,r,n)})}function eg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{hA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function tg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;si||Im(),ii||(si(),ii=!0),eu.add(e,t),t.A=0}}function uu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ai(rt(t.Ma,t),sg(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,ng(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ai(rt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Pa(this),ng(this))};function hu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function ng(t){t.g=new Si(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ln(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),bi(t,e),t.o&&t.s&&cu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Aa(ln(e)),n.u=null,n.S=!0,Nm(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Pa(this),uu(this),ut(19))};function Mo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function rg(t,e){var n=null;if(t.g==e){Mo(t),hu(t),t.g=null;var r=2}else if(el(t.i,e))n=e.F,Hm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ea(),Ge(r,new Cm(r,n)),ba(t)}else tg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&yA(t,e)||r==2&&uu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function sg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new cr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Oo(n,"https"),Aa(n)),dA(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),ig(t),Zm(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function ig(t){if(t.H=0,t.ma=[],t.h){const e=zm(t.i);(e.length!=0||t.j.length!=0)&&(Ed(t.ma,e),Ed(t.ma,t.j),t.i.i.length=0,Kl(t.j),t.j.length=0),t.h.ya()}}function og(t,e,n){var r=n instanceof cr?ln(n):new cr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Vo(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new cr(null);r&&Oo(i,r),e&&(i.g=e),s&&Vo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),bi(t,r),r}function ag(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ce(new Ra({ob:n})):new Ce(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function cg(){}O=cg.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function xo(){if(Zr&&!(10<=Number(Dw)))throw Error("Environmental error: no available transport.")}xo.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){je.call(this),this.g=new Xm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ni(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ni(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}$e(vt,je);vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=og(t,null,t.Y),ba(t)};vt.prototype.close=function(){lu(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zl(t),t=n);e.j.push(new aA(e.fb++,t)),e.H==3&&ba(e)};vt.prototype.N=function(){this.g.h=null,delete this.j,lu(this.g),delete this.g,vt.$.N.call(this)};function lg(t){su.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(lg,su);function ug(){iu.call(this),this.status=1}$e(ug,iu);function fs(t){this.g=t}$e(fs,cg);fs.prototype.Ba=function(){Ge(this.g,"a")};fs.prototype.Aa=function(t){Ge(this.g,new lg(t))};fs.prototype.za=function(t){Ge(this.g,new ug)};fs.prototype.ya=function(){Ge(this.g,"b")};function vA(){this.blockSize=-1}function Nt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(Nt,vA);Nt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Nt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)mc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){mc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){mc(this,r),s=0;break}}this.h=s,this.i+=e};Nt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var EA={};function du(t){return-128<=t&&128>t?Pw(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function jt(t){if(isNaN(t)||!isFinite(t))return $r;if(0>t)return ze(jt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=tl;return new ge(e,0)}function hg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(hg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=jt(Math.pow(e,8)),r=$r,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=jt(Math.pow(e,i)),r=r.R(i).add(jt(o))):(r=r.R(n),r=r.add(jt(o)))}return r}var tl=4294967296,$r=du(0),nl=du(1),Dd=du(16777216);O=ge.prototype;O.ea=function(){if(Tt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:tl+r)*e,e*=tl}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(nn(this))return"0";if(Tt(this))return"-"+ze(this).toString(t);for(var e=jt(Math.pow(t,6)),n=this,r="";;){var s=Fo(n,e).g;n=Lo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,nn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function nn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}O.X=function(t){return t=Lo(this,t),Tt(t)?-1:nn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(nl)}O.abs=function(){return Tt(this)?ze(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Lo(t,e){return t.add(ze(e))}O.R=function(t){if(nn(this)||nn(t))return $r;if(Tt(this))return Tt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Tt(t))return ze(this.R(ze(t)));if(0>this.X(Dd)&&0>t.X(Dd))return jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ji(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ji(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ji(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ji(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Ji(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rs(t,e){this.g=t,this.h=e}function Fo(t,e){if(nn(e))throw Error("division by zero");if(nn(t))return new Rs($r,$r);if(Tt(t))return e=Fo(ze(t),e),new Rs(ze(e.g),ze(e.h));if(Tt(e))return e=Fo(t,ze(e)),new Rs(ze(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=nl,r=e;0>=r.X(t);)n=Nd(n),r=Nd(r);var s=Pr(n,1),i=Pr(r,1);for(r=Pr(r,2),n=Pr(n,2);!nn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Pr(r,1),n=Pr(n,1)}return e=Lo(t,s.R(e)),new Rs(s,e)}for(s=$r;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=jt(n),o=i.R(e);Tt(o)||0<o.X(t);)n-=r,i=jt(n),o=i.R(e);nn(i)&&(i=nl),s=s.add(i),t=Lo(t,o)}return new Rs(s,t)}O.gb=function(t){return Fo(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function Nd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function Pr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}xo.prototype.createWebChannel=xo.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Ia.NO_ERROR=0;Ia.TIMEOUT=8;Ia.HTTP_ERROR=6;Pm.COMPLETE="complete";bm.EventType=Ri;Ri.OPEN="a";Ri.CLOSE="b";Ri.ERROR="c";Ri.MESSAGE="d";je.prototype.listen=je.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;Nt.prototype.digest=Nt.prototype.l;Nt.prototype.reset=Nt.prototype.reset;Nt.prototype.update=Nt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=jt;ge.fromString=hg;var IA=function(){return new xo},TA=function(){return Ea()},gc=Ia,wA=Pm,AA=yr,Od={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xi=bm,RA=Ce,SA=Nt,qr=ge;const Vd="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let ps="10.7.0";/**
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
 */const fr=new $l("@firebase/firestore");function Ss(){return fr.logLevel}function L(t,...e){if(fr.logLevel<=se.DEBUG){const n=e.map(fu);fr.debug(`Firestore (${ps}): ${t}`,...n)}}function un(t,...e){if(fr.logLevel<=se.ERROR){const n=e.map(fu);fr.error(`Firestore (${ps}): ${t}`,...n)}}function es(t,...e){if(fr.logLevel<=se.WARN){const n=e.map(fu);fr.warn(`Firestore (${ps}): ${t}`,...n)}}function fu(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function Ie(t,e){t||G()}function ee(t,e){return t}/**
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
 */class dg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class PA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bA{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new dg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Ze(e)}}class kA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new NA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=VA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Me(0,0))}static max(){return new J(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ui{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends ui{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const MA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ui{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return MA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Re.fromString(e))}static fromName(e){return new K(Re.fromString(e).popFirst(5))}static empty(){return new K(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Re(e.slice()))}}function xA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Bn(s,K.empty(),e)}function LA(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bn(J.min(),K.empty(),-1)}static max(){return new Bn(J.max(),K.empty(),-1)}}function FA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const UA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ki(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==UA)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}pu._e=-1;function ka(t){return t==null}function Uo(t){return t===0&&1/t==-1/0}function jA(t){return typeof t=="number"&&Number.isInteger(t)&&!Uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new _t([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mg("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const $A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=$A.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gu(t){const e=t.mapValue.fields.__previous_value__;return mu(e)?gu(e):e}function hi(t){const e=jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class qA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mu(t)?4:HA(t)?9007199254740991:10:G()}function Gt(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jn(s.timestampValue),a=jn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return pr(s.bytesValue).isEqual(pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),a=De(i.doubleValue);return o===a?Uo(o)===Uo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Md(o)!==Md(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gt(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function fi(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=De(i.integerValue||i.doubleValue),c=De(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ld(t.timestampValue,e.timestampValue);case 4:return Ld(hi(t),hi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=pr(i),c=pr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(De(i.latitude),De(o.latitude));return a!==0?a:he(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ns(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===eo.mapValue&&o===eo.mapValue)return 0;if(i===eo.mapValue)return 1;if(o===eo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const m=ns(a[c[h]],l[u[h]]);if(m!==0)return m}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=jn(t),r=jn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function rs(t){return rl(t)}function rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function sl(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function Fd(t){return!!t&&"nullValue"in t}function Ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uo(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(qs(this.value))}}function gg(t){const e=[];return vr(t.fields,(n,r)=>{const s=new Ke([n]);if(uo(r)){const i=gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _t(e)}/**
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
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,J.min(),J.min(),J.min(),pt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,J.min(),J.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,J.min(),J.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bo{constructor(e,n){this.position=e,this.inclusive=n}}function Bd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function zA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _g{}class Ve extends _g{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WA(e,n,r):n==="array-contains"?new YA(e,r):n==="in"?new JA(e,r):n==="not-in"?new XA(e,r):n==="array-contains-any"?new ZA(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GA(e,r):new QA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends _g{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Qt(e,n)}matches(e){return yg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function yg(t){return t.op==="and"}function vg(t){return KA(t)&&yg(t)}function KA(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function il(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(vg(t))return t.filters.map(e=>il(e)).join(",");{const e=t.filters.map(n=>il(n)).join(",");return`${t.op}(${e})`}}function Eg(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(t,e):t instanceof Qt?function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Eg(o,s.filters[a]),!0):!1}(t,e):void G()}function Ig(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(Ig).join(" ,")+"}"}(t):"Filter"}class WA extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class GA extends Ve{constructor(e,n){super(e,"in",n),this.keys=Tg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QA extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Tg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class YA extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&fi(n.arrayValue,this.value)}}class JA extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class XA extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class ZA extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
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
 */class e0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function $d(t,e=null,n=[],r=[],s=null,i=null,o=null){return new e0(t,e,n,r,s,i,o)}function yu(t){const e=ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>il(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ce=n}return e.ce}function vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Eg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jd(t.startAt,e.startAt)&&jd(t.endAt,e.endAt)}function ol(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Da{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function t0(t,e,n,r,s,i,o,a){return new Da(t,e,n,r,s,i,o,a)}function Eu(t){return new Da(t)}function qd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function n0(t){return t.collectionGroup!==null}function Hs(t){const e=ee(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qe(Ke.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new jo(i,r))}),n.has(Ke.keyField().canonicalString())||e.le.push(new jo(Ke.keyField(),r))}return e.le}function qt(t){const e=ee(t);return e.he||(e.he=r0(e,Hs(t))),e.he}function r0(t,e){if(t.limitType==="F")return $d(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new jo(s.field,i)});const n=t.endAt?new Bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bo(t.startAt.position,t.startAt.inclusive):null;return $d(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function al(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return vu(qt(t),qt(e))&&t.limitType===e.limitType}function wg(t){return`${yu(qt(t))}|lt:${t.limitType}`}function Dr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ig(s)).join(", ")}]`),ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function Oa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Bd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Hs(r),s)||r.endAt&&!function(o,a,c){const l=Bd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Hs(r),s))}(t,e)}function s0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ag(t){return(e,n)=>{let r=!1;for(const s of Hs(t)){const i=i0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function i0(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ns(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pg(this.inner)}size(){return this.innerSize}}/**
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
 */const o0=new Se(K.comparator);function hn(){return o0}const Rg=new Se(K.comparator);function Os(...t){let e=Rg;for(const n of t)e=e.insert(n.key,n);return e}function Sg(t){let e=Rg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return zs()}function Cg(){return zs()}function zs(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const a0=new Se(K.comparator),c0=new Qe(K.comparator);function re(...t){let e=c0;for(const n of t)e=e.add(n);return e}const l0=new Qe(he);function u0(){return l0}/**
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
 */function Pg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function bg(t){return{integerValue:""+t}}function h0(t,e){return jA(e)?bg(e):Pg(t,e)}/**
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
 */class Va{constructor(){this._=void 0}}function d0(t,e,n){return t instanceof $o?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mu(i)&&(i=gu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof pi?Dg(t,e):t instanceof mi?Ng(t,e):function(s,i){const o=kg(s,i),a=Hd(o)+Hd(s.Ie);return sl(o)&&sl(s.Ie)?bg(a):Pg(s.serializer,a)}(t,e)}function f0(t,e,n){return t instanceof pi?Dg(t,e):t instanceof mi?Ng(t,e):n}function kg(t,e){return t instanceof qo?function(r){return sl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $o extends Va{}class pi extends Va{constructor(e){super(),this.elements=e}}function Dg(t,e){const n=Og(e);for(const r of t.elements)n.some(s=>Gt(s,r))||n.push(r);return{arrayValue:{values:n}}}class mi extends Va{constructor(e){super(),this.elements=e}}function Ng(t,e){let n=Og(e);for(const r of t.elements)n=n.filter(s=>!Gt(s,r));return{arrayValue:{values:n}}}class qo extends Va{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Hd(t){return De(t.integerValue||t.doubleValue)}function Og(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function p0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof pi&&s instanceof pi||r instanceof mi&&s instanceof mi?ts(r.elements,s.elements,Gt):r instanceof qo&&s instanceof qo?Gt(r.Ie,s.Ie):r instanceof $o&&s instanceof $o}(t.transform,e.transform)}class m0{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ma{}function Vg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iu(t.key,kt.none()):new Ni(t.key,t.data,kt.none());{const n=t.data,r=pt.empty();let s=new Qe(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zn(t.key,r,new _t(s.toArray()),kt.none())}}function g0(t,e,n){t instanceof Ni?function(s,i,o){const a=s.value.clone(),c=Kd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(s,i,o){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Kd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Mg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof Ni?function(i,o,a,c){if(!ho(i.precondition,o))return a;const l=i.value.clone(),u=Wd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof zn?function(i,o,a,c){if(!ho(i.precondition,o))return a;const l=Wd(i.fieldTransforms,c,o),u=o.data;return u.setAll(Mg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function _0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=kg(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,(i,o)=>p0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends Ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zn extends Ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kd(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,f0(o,a,n[s]))}return r}function Wd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,d0(i,o,e))}return r}class Iu extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y0 extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class v0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&g0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Cg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Vg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>zd(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>zd(n,r))}}class Tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return a0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tu(e,n,r,s)}}/**
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
 */class E0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class I0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,ie;function T0(t){switch(t){default:return G();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function xg(t){if(t===void 0)return un("GRPC error has no .code"),A.UNKNOWN;switch(t){case ke.OK:return A.OK;case ke.CANCELLED:return A.CANCELLED;case ke.UNKNOWN:return A.UNKNOWN;case ke.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ke.INTERNAL:return A.INTERNAL;case ke.UNAVAILABLE:return A.UNAVAILABLE;case ke.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ke.NOT_FOUND:return A.NOT_FOUND;case ke.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ke.ABORTED:return A.ABORTED;case ke.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ke.DATA_LOSS:return A.DATA_LOSS;default:return G()}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function w0(){return new TextEncoder}/**
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
 */const A0=new qr([4294967295,4294967295],0);function Gd(t){const e=w0().encode(t),n=new SA;return n.update(e),new Uint8Array(n.digest())}function Qd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class wu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=qr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(A0)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Gd(e),[r,s]=Qd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Gd(e),[r,s]=Qd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xa(J.min(),s,new Se(he),hn(),re())}}class Oi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oi(r,n,re(),re(),re())}}/**
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
 */class fo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Lg{constructor(e,n){this.targetId=e,this.fe=n}}class Fg{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yd{constructor(){this.ge=0,this.pe=Xd(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Oi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Xd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class R0{constructor(e){this.Le=e,this.ke=new Map,this.qe=hn(),this.Qe=Jd(),this.Ke=new Se(he)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ol(i))if(r===0){const o=new K(i.path);this.We(n,o,et.newNoDocument(o,J.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=pr(r).toUint8Array()}catch(c){if(c instanceof mg)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new wu(o,s,i)}catch(c){return es(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ol(a.target)){const c=new K(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,et.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,n,this.Ke,this.qe,r);return this.qe=hn(),this.Qe=Jd(),this.Ke=new Se(he),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Yd,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Qe(he),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Yd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Jd(){return new Se(K.comparator)}function Xd(){return new Se(K.comparator)}const S0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),C0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),P0=(()=>({and:"AND",or:"OR"}))();class b0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cl(t,e){return t.useProto3Json||ka(e)?e:{value:e}}function Ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ug(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function k0(t,e){return Ho(t,e.toTimestamp())}function Ht(t){return Ie(!!t),J.fromTimestamp(function(n){const r=jn(n);return new Me(r.seconds,r.nanos)}(t))}function Au(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Bg(t){const e=Re.fromString(t);return Ie(Hg(e)),e}function ll(t,e){return Au(t.databaseId,e.path)}function _c(t,e){const n=Bg(e);if(n.get(1)!==t.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(jg(n))}function ul(t,e){return Au(t.databaseId,e)}function D0(t){const e=Bg(t);return e.length===4?Re.emptyPath():jg(e)}function hl(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jg(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zd(t,e,n){return{name:ll(t,e),fields:n.value.mapValue.fields}}function N0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:xg(l.code);return new j(u,l.message||"")}(o);n=new Fg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):J.min(),a=new pt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new fo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?Ht(r.readTime):J.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new fo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new I0(s,i),a=r.targetId;n=new Lg(a,o)}}return n}function O0(t,e){let n;if(e instanceof Ni)n={update:Zd(t,e.key,e.value)};else if(e instanceof Iu)n={delete:ll(t,e.key)};else if(e instanceof zn)n={update:Zd(t,e.key,e.data),updateMask:$0(e.fieldMask)};else{if(!(e instanceof y0))return G();n={verify:ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:k0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function V0(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ht(s.updateTime):Ht(i);return o.isEqual(J.min())&&(o=Ht(i)),new m0(o,s.transformResults||[])}(n,e))):[]}function M0(t,e){return{documents:[ul(t,e.path)]}}function x0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ul(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ul(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return qg(Qt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Nr(h.field),direction:U0(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=cl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function L0(t){let e=D0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=$g(h);return d instanceof Qt&&vg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new jo(Or(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ka(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new Bo(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new Bo(m,d)}(n.endAt)),t0(e,s,o,i,a,"F",c,l)}function F0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $g(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Or(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>$g(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function U0(t){return S0[t]}function B0(t){return C0[t]}function j0(t){return P0[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function Or(t){return Ke.fromServerFormat(t.fieldPath)}function qg(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Ud(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NAN"}};if(Fd(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ud(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NAN"}};if(Fd(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(n.field),op:B0(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(s=>qg(s));return r.length===1?r[0]:{compositeFilter:{op:j0(n.op),filters:r}}}(t):G()}function $0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Dn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class q0{constructor(e){this.ut=e}}function H0(t){const e=L0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?al(e,e.limit,"L"):e}/**
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
 */class z0{constructor(){this.on=new K0}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Bn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class K0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Re.comparator)).toArray()}}/**
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
 */class ss{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ss(0)}static Nn(){return new ss(-1)}}/**
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
 */class W0{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Q0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ks(r.mutation,s,_t.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Os();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hn();const o=zs(),a=function(){return zs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof zn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ks(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,_t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new G0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let s=new Se((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||_t.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Cg();u.forEach(d=>{if(!i.has(d)){const m=Vg(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(ir());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Sg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Os();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,c=>{const l=function(h,d){return new Da(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Os();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Ks(u.mutation,l,_t.empty(),Me.now()),Oa(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Y0{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:H0(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),S.resolve()}}/**
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
 */class J0{constructor(){this.overlays=new Se(K.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=ir(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ir(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ir(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new E0(n,r));let i=this.lr.get(n);i===void 0&&(i=re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class Ru{constructor(){this.hr=new Qe(Le.Pr),this.Ir=new Qe(Le.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Le(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new K(new Re([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new K(new Re([])),r=new Le(n,e),s=new Le(n,e+1);let i=re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return K.comparator(e.key,n.key)||he(e.gr,n.gr)}static Tr(e,n){return he(e.gr,n.gr)||K.comparator(e.key,n.key)}}/**
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
 */class X0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Qe(Le.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new v0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(he);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Le(new K(i),0);let a=new Qe(he);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Le(n,0),s=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Z0{constructor(e){this.Cr=e,this.docs=function(){return new Se(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||FA(LA(u),r)<=0||(s.has(u.key)||Oa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eR(this)}getSize(e){return S.resolve(this.size)}}class eR extends W0{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class tR{constructor(e){this.persistence=e,this.Fr=new ms(n=>yu(n),vu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ru,this.targetCount=0,this.Nr=ss.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
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
 */class nR{constructor(e,n){this.Br={},this.overlays={},this.Lr=new pu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new tR(this),this.indexManager=new z0,this.remoteDocumentCache=function(s){return new Z0(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new q0(n),this.Kr=new Y0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new J0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new X0(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new rR(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class rR extends BA{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.Gr=new Ru,this.zr=null}static jr(e){return new Su(e)}get Hr(){if(this.zr)return this.zr;throw G()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const s=K.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Cu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cu(e,n.fromCache,r,s)}}/**
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
 */class sR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ss()<=se.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Dr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Ss()<=se.DEBUG&&L("QueryEngine","Query:",Dr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ss()<=se.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Dr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):S.resolve())}zi(e,n){if(qd(n))return S.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=al(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,al(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return qd(n)||s.isEqual(J.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?S.resolve(null):(Ss()<=se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dr(n)),this.Xi(e,o,n,xA(s,-1)).next(a=>a))})}Yi(e,n){let r=new Qe(Ag(e));return n.forEach((s,i)=>{Oa(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ss()<=se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Dr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Bn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class oR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Se(he),this.ns=new ms(i=>yu(i),vu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q0(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function aR(t,e,n,r){return new oR(t,e,n,r)}async function zg(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function cR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=S.resolve();return d.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const w=l.docVersions.get(y);Ie(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Kg(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function lR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(at.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(v,w,b){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=hn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(uR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function uR(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function hR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dR(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function dl(t,e,n){const r=ee(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Di(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function ef(t,e,n){const r=ee(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ee(c),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(fR(r,s0(e),a),{documents:a,ls:i})))}function fR(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class tf{constructor(){this.activeTargetIds=u0()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pR{constructor(){this.eo=new tf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new tf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mR{ro(e){}shutdown(){}}/**
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
 */class nf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let to=null;function yc(){return to===null?to=function(){return 268435456+Math.round(2147483648*Math.random())}():to++,"0x"+to.toString(16)}/**
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
 */const gR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _R{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Je="WebChannelConnection";class yR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=yc(),c=this.So(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw es("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=gR[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=yc();return new Promise((o,a)=>{const c=new RA;c.setWithCredentials(!0),c.listenOnce(wA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gc.NO_ERROR:const u=c.getResponseJson();L(Je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case gc.TIMEOUT:L(Je,`RPC '${e}' ${i} timed out`),a(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const h=c.getStatus();if(L(Je,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(w){const b=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(m.status);a(new j(y,m.message))}else a(new j(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(A.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L(Je,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);L(Je,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=yc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IA(),a=TA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(Je,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const y=new _R({co:w=>{m?L(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||(L(Je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),L(Je,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},lo:()=>h.close()}),v=(w,b,k)=>{w.listen(b,B=>{try{k(B)}catch(V){setTimeout(()=>{throw V},0)}})};return v(h,Xi.EventType.OPEN,()=>{m||L(Je,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Xi.EventType.CLOSE,()=>{m||(m=!0,L(Je,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),v(h,Xi.EventType.ERROR,w=>{m||(m=!0,es(Je,`RPC '${e}' stream ${s} transport errored:`,w),y.Ro(new j(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,Xi.EventType.MESSAGE,w=>{var b;if(!m){const k=w.data[0];Ie(!!k);const B=k,V=B.error||((b=B[0])===null||b===void 0?void 0:b.error);if(V){L(Je,`RPC '${e}' stream ${s} received error:`,V);const te=V.status;let ce=function(ue){const oe=ke[ue];if(oe!==void 0)return xg(oe)}(te),Te=V.message;ce===void 0&&(ce=A.INTERNAL,Te="Unknown error status: "+te+" with message "+V.message),m=!0,y.Ro(new j(ce,Te)),h.close()}else L(Je,`RPC '${e}' stream ${s} received:`,k),y.Vo(k)}}),v(a,AA.STAT_EVENT,w=>{w.stat===Od.PROXY?L(Je,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Od.NOPROXY&&L(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function vc(){return typeof document<"u"?document:null}/**
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
 */function La(t){return new b0(t,!0)}/**
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
 */class Wg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class Gg{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Wg(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new j(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vR extends Gg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=N0(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ht(o.readTime):J.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=hl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ol(c)?{documents:M0(i,c)}:{query:x0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ug(i,o.resumeToken);const l=cl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Ho(i,o.snapshotVersion.toTimestamp());const l=cl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=F0(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=hl(this.serializer),n.removeTarget=e,this.e_(n)}}class ER extends Gg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=V0(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.I_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=hl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>O0(this.serializer,r))};this.e_(n)}}/**
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
 */class IR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(A.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(A.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class TR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class wR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Er(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ee(c);l.C_.add(4),await Vi(l),l.M_.set("Unknown"),l.C_.delete(4),await Fa(l)}(this))})}),this.M_=new TR(r,s)}}async function Fa(t){if(Er(t))for(const e of t.v_)await e(!0)}async function Vi(t){for(const e of t.v_)await e(!1)}function Qg(t,e){const n=ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ku(n)?bu(n):gs(n).Ho()&&Pu(n,e))}function Yg(t,e){const n=ee(t),r=gs(n);n.D_.delete(e),r.Ho()&&Jg(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Er(n)&&n.M_.set("Unknown"))}function Pu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).u_(e)}function Jg(t,e){t.x_.Oe(e),gs(t).c_(e)}function bu(t){t.x_=new R0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.M_.g_()}function ku(t){return Er(t)&&!gs(t).jo()&&t.D_.size>0}function Er(t){return ee(t).C_.size===0}function Xg(t){t.x_=void 0}async function AR(t){t.D_.forEach((e,n)=>{Pu(t,e)})}async function RR(t,e){Xg(t),ku(t)?(t.M_.w_(e),bu(t)):t.M_.set("Unknown")}async function SR(t,e,n){if(t.M_.set("Online"),e instanceof Fg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zo(t,r)}else if(e instanceof fo?t.x_.$e(e):e instanceof Lg?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(J.min()))try{const r=await Kg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),Jg(i,c);const h=new Dn(u.target,c,l,u.sequenceNumber);Pu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await zo(t,r)}}async function zo(t,e,n){if(!Di(e))throw e;t.C_.add(1),await Vi(t),t.M_.set("Offline"),n||(n=()=>Kg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Fa(t)})}function Zg(t,e){return e().catch(n=>zo(t,n,e))}async function Ua(t){const e=ee(t),n=$n(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;CR(e);)try{const s=await hR(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,PR(e,s)}catch(s){await zo(e,s)}e_(e)&&t_(e)}function CR(t){return Er(t)&&t.b_.length<10}function PR(t,e){t.b_.push(e);const n=$n(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function e_(t){return Er(t)&&!$n(t).jo()&&t.b_.length>0}function t_(t){$n(t).start()}async function bR(t){$n(t).E_()}async function kR(t){const e=$n(t);for(const n of t.b_)e.P_(n.mutations)}async function DR(t,e,n){const r=t.b_.shift(),s=Tu.from(r,e,n);await Zg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function NR(t,e){e&&$n(t).h_&&await async function(r,s){if(function(o){return T0(o)&&o!==A.ABORTED}(s.code)){const i=r.b_.shift();$n(r).Yo(),await Zg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(r)}}(t,e),e_(t)&&t_(t)}async function rf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Er(n);n.C_.add(3),await Vi(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Fa(n)}async function OR(t,e){const n=ee(t);e?(n.C_.delete(2),await Fa(n)):e||(n.C_.add(2),await Vi(n),n.M_.set("Unknown"))}function gs(t){return t.O_||(t.O_=function(n,r,s){const i=ee(n);return i.A_(),new vR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:AR.bind(null,t),Io:RR.bind(null,t),a_:SR.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),ku(t)?bu(t):t.M_.set("Unknown")):(await t.O_.stop(),Xg(t))})),t.O_}function $n(t){return t.N_||(t.N_=function(n,r,s){const i=ee(n);return i.A_(),new ER(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:bR.bind(null,t),Io:NR.bind(null,t),T_:kR.bind(null,t),I_:DR.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ua(t)):(await t.N_.stop(),t.b_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Du{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Du(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nu(t,e){if(un("AsyncQueue",`${e}: ${t}`),Di(t))return new j(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class sf{constructor(){this.B_=new Se(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):G():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new is(e,n,Hr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class VR{constructor(){this.k_=void 0,this.listeners=[]}}class MR{constructor(){this.queries=new ms(e=>wg(e),Na),this.onlineState="Unknown",this.q_=new Set}}async function n_(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new VR),s)try{i.k_=await n.onListen(r)}catch(o){const a=Nu(o,`Initialization of query '${Dr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Ou(n)}async function r_(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xR(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Ou(n)}function LR(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ou(t){t.q_.forEach(e=>{e.next()})}class s_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class i_{constructor(e){this.key=e}}class o_{constructor(e){this.key=e}}class FR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=Ag(e),this.aa=new Hr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new sf,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=Oa(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),w=!0):this.ha(d,m)||(r.track({type:2,doc:m}),w=!0,(c&&this._a(m,c)>0||l&&this._a(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(m,y){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return v(m)-v(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new is(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new sf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new o_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new i_(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return is.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class UR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BR{constructor(e){this.key=e,this.Ra=!1}}class jR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ms(a=>wg(a),Na),this.fa=new Map,this.ga=new Set,this.pa=new Se(K.comparator),this.ya=new Map,this.wa=new Ru,this.Sa={},this.ba=new Map,this.Da=ss.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function $R(t,e){const n=XR(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await dR(n.localStore,qt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await qR(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Qg(n.remoteStore,o)}return s}async function qR(t,e,n,r,s){t.va=(h,d,m)=>async function(v,w,b,k){let B=w.view.ca(b);B.Zi&&(B=await ef(v.localStore,w.query,!1).then(({documents:Te})=>w.view.ca(Te,B)));const V=k&&k.targetChanges.get(w.targetId),te=k&&k.targetMismatches.get(w.targetId)!=null,ce=w.view.applyChanges(B,v.isPrimaryClient,V,te);return af(v,w.targetId,ce.Ta),ce.snapshot}(t,h,d,m);const i=await ef(t.localStore,e,!0),o=new FR(e,i.ls),a=o.ca(i.documents),c=Oi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);af(t,n,l.Ta);const u=new UR(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function HR(t,e){const n=ee(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Na(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Yg(n.remoteStore,r.targetId),fl(n,r.targetId)}).catch(ki)):(fl(n,r.targetId),await dl(n.localStore,r.targetId,!0))}async function zR(t,e,n){const r=ZR(t);try{const s=await function(o,a){const c=ee(o),l=Me.now(),u=a.reduce((m,y)=>m.add(y.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=hn(),v=re();return c.ss.getEntries(m,u).next(w=>{y=w,y.forEach((b,k)=>{k.isValidDocument()||(v=v.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(w=>{h=w;const b=[];for(const k of a){const B=_0(k,h.get(k.key).overlayedDocument);B!=null&&b.push(new zn(k.key,B,gg(B.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,b,a)}).next(w=>{d=w;const b=w.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,w.batchId,b)})}).then(()=>({batchId:d.batchId,changes:Sg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Se(he)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Mi(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=Nu(s,"Failed to persist write");n.reject(i)}}async function a_(t,e){const n=ee(t);try{const r=await lR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ie(o.Ra):s.removedDocuments.size>0&&(Ie(o.Ra),o.Ra=!1))}),await Mi(n,r,e)}catch(r){await ki(r)}}function of(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Ou(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KR(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Se(K.comparator);o=o.insert(i,et.newNoDocument(i,J.min()));const a=re().add(i),c=new xa(J.min(),new Map,new Se(he),o,a);await a_(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Vu(r)}else await dl(r.localStore,e,!1).then(()=>fl(r,e,n)).catch(ki)}async function WR(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await cR(n.localStore,e);l_(n,r,null),c_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(n,s)}catch(s){await ki(s)}}async function GR(t,e,n){const r=ee(t);try{const s=await function(o,a){const c=ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);l_(r,e,n),c_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mi(r,s)}catch(s){await ki(s)}}function c_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function l_(t,e,n){const r=ee(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||u_(t,r)})}function u_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Yg(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Vu(t))}function af(t,e,n){for(const r of n)r instanceof i_?(t.wa.addReference(r.key,e),QR(t,r)):r instanceof o_?(L("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||u_(t,r.key)):G()}function QR(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ga.add(r),Vu(t))}function Vu(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new K(Re.fromString(e)),r=t.Da.next();t.ya.set(r,new BR(n)),t.pa=t.pa.insert(n,r),Qg(t.remoteStore,new Dn(qt(Eu(n.path)),r,"TargetPurposeLimboResolution",pu._e))}}async function Mi(t,e,n){const r=ee(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Cu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,d=>S.forEach(d.ki,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>S.forEach(d.qi,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Di(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.ts.get(d),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,v)}}}(r.localStore,i))}async function YR(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await zg(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new j(A.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(n,r._s)}}function JR(t,e){const n=ee(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let s=re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function XR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=a_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KR.bind(null,e),e.Va.a_=xR.bind(null,e.eventManager),e.Va.Fa=LR.bind(null,e.eventManager),e}function ZR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GR.bind(null,e),e}class cf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=La(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return aR(this.persistence,new iR,e.initialUser,this.serializer)}createPersistence(e){return new nR(Su.jr,this.serializer)}createSharedClientState(e){return new pR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>of(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YR.bind(null,this.syncEngine),await OR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MR}()}createDatastore(e){const n=La(e.databaseInfo.databaseId),r=function(i){return new yR(i)}(e.databaseInfo);return function(i,o,a,c){return new IR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new wR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>of(this.syncEngine,n,0),function(){return nf.D()?new nf:new mR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new jR(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ee(n);L("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Vi(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class h_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ec(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rS(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>rf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>rf(e.remoteStore,i)),t._onlineComponents=e}function nS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nS(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await Ec(t,new cf)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Ec(t,new cf);return t._offlineComponents}async function d_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await lf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await lf(t,new eS))),t._onlineComponents}function sS(t){return d_(t).then(e=>e.syncEngine)}async function f_(t){const e=await d_(t),n=e.eventManager;return n.onListen=$R.bind(null,e.syncEngine),n.onUnlisten=HR.bind(null,e.syncEngine),n}function iS(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new h_({next:d=>{o.enqueueAndForget(()=>r_(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new j(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new j(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new s_(Eu(a.path),u,{includeMetadataChanges:!0,J_:!0});return n_(i,h)}(await f_(t),t.asyncQueue,e,n,r)),r.promise}function oS(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new h_({next:d=>{o.enqueueAndForget(()=>r_(i,h)),d.fromCache&&c.source==="server"?l.reject(new j(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new s_(a,u,{includeMetadataChanges:!0,J_:!0});return n_(i,h)}(await f_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function p_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const uf=new Map;/**
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
 */function m_(t,e,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aS(t,e,n,r){if(e===!0&&r===!0)throw new j(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hf(t){if(!K.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(K.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mu(t);throw new j(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ff{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CA;switch(r.type){case"firstParty":return new DA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uf.get(n);r&&(L("ComponentProvider","Removing Datastore"),uf.delete(n),r.terminate())}(this),Promise.resolve()}}function cS(t,e,n,r={}){var s;const i=(t=dn(t,Ba))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=eT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new PA(new dg(a,c))}}/**
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
 */class ja{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ja(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Ln extends ja{constructor(e,n,r){super(e,n,Eu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new K(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function pf(t,e,...n){if(t=ot(t),m_("collection","path",e),t instanceof Ba){const r=Re.fromString(e,...n);return df(r),new Ln(t,null,r)}{if(!(t instanceof yt||t instanceof Ln))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return df(r),new Ln(t.firestore,null,r)}}function Ms(t,e,...n){if(t=ot(t),arguments.length===1&&(e=fg.newId()),m_("doc","path",e),t instanceof Ba){const r=Re.fromString(e,...n);return hf(r),new yt(t,null,new K(r))}{if(!(t instanceof yt||t instanceof Ln))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return hf(r),new yt(t.firestore,t instanceof Ln?t.converter:null,new K(r))}}/**
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
 */class lS{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Wg(this,"async_queue_retry"),this.iu=()=>{const n=vc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=vc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new cn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Di(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Du.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&G()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class _s extends Ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new lS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||g_(this),this._firestoreClient.terminate()}}function uS(t,e){const n=typeof t=="object"?t:om(),r=typeof t=="string"?t:e||"(default)",s=Hl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=XI("firestore");i&&cS(s,...i)}return s}function xu(t){return t._firestoreClient||g_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function g_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new qA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,p_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new tS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(at.fromBase64String(e))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lu{constructor(e){this._methodName=e}}/**
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
 */class Fu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const hS=/^__.*__$/;class dS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}class __{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function y_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Uu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ko(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(y_(this.Iu)&&hS.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class fS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||La(e)}pu(e,n,r,s=!1){return new Uu({Iu:e,methodName:n,gu:r,path:Ke.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function v_(t){const e=t._freezeSettings(),n=La(t._databaseId);return new fS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pS(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Bu("Data must be an object, but it was:",o,r);const a=E_(r,o);let c,l;if(i.merge)c=new _t(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=pl(e,h,n);if(!o.contains(d))throw new j(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);T_(u,d)||u.push(d)}c=new _t(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new dS(new pt(a),c,l)}class qa extends Lu{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}function mS(t,e,n,r){const s=t.pu(1,e,n);Bu("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();vr(r,(c,l)=>{const u=ju(e,c,n);l=ot(l);const h=s.Ru(u);if(l instanceof qa)i.push(u);else{const d=Ha(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new _t(i);return new __(o,a,s.fieldTransforms)}function gS(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[pl(e,r,n)],c=[s];if(i.length%2!=0)throw new j(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(pl(e,i[d])),c.push(i[d+1]);const l=[],u=pt.empty();for(let d=a.length-1;d>=0;--d)if(!T_(l,a[d])){const m=a[d];let y=c[d];y=ot(y);const v=o.Ru(m);if(y instanceof qa)l.push(m);else{const w=Ha(y,v);w!=null&&(l.push(m),u.set(m,w))}}const h=new _t(l);return new __(u,h,o.fieldTransforms)}function Ha(t,e){if(I_(t=ot(t)))return Bu("Unsupported field value:",e,t),E_(t,e);if(t instanceof Lu)return function(r,s){if(!y_(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ha(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return h0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Ho(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(s.serializer,i)}}if(r instanceof Fu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:Ug(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Au(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Mu(r)}`)}(t,e)}function E_(t,e){const n={};return pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,s)=>{const i=Ha(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function I_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Fu||t instanceof os||t instanceof yt||t instanceof Lu)}function Bu(t,e,n){if(!I_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Mu(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function pl(t,e,n){if((e=ot(e))instanceof $a)return e._internalPath;if(typeof e=="string")return ju(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const _S=new RegExp("[~\\*/\\[\\]]");function ju(t,e,n){if(e.search(_S)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $a(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(A.INVALID_ARGUMENT,a+t+c)}function T_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class w_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(A_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yS extends w_{data(){return super.data()}}function A_(t,e){return typeof e=="string"?ju(t,e):e instanceof $a?e._internalPath:e._delegate._internalPath}/**
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
 */function vS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ES{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Fu(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=jn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Ie(Hg(r));const s=new di(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function IS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R_ extends w_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(A_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class po extends R_{data(e={}){return super.data(e)}}class TS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new po(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new po(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new po(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:wS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function AS(t){t=dn(t,yt);const e=dn(t.firestore,_s);return iS(xu(e),t._key).then(n=>PS(e,t,n))}class S_ extends ES{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function RS(t){t=dn(t,ja);const e=dn(t.firestore,_s),n=xu(e),r=new S_(e);return vS(t._query),oS(n,t._query).then(s=>new TS(e,r,t,s))}function mf(t,e,n,...r){t=dn(t,yt);const s=dn(t.firestore,_s),i=v_(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof $a?gS(i,"updateDoc",t._key,e,n,r):mS(i,"updateDoc",t._key,e),$u(s,[o.toMutation(t._key,kt.exists(!0))])}function SS(t){return $u(dn(t.firestore,_s),[new Iu(t._key,kt.none())])}function CS(t,e){const n=dn(t.firestore,_s),r=Ms(t),s=IS(t.converter,e);return $u(n,[pS(v_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function $u(t,e){return function(r,s){const i=new cn;return r.asyncQueue.enqueueAndForget(async()=>zR(await sS(r),s,i)),i.promise}(xu(t),e)}function PS(t,e,n){const r=n.docs.get(e._key),s=new S_(t);return new R_(t,s,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ps=s})(hs),Xr(new hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new _s(new bA(r.getProvider("auth-internal")),new OA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xn(Vd,"4.4.0",e),xn(Vd,"4.4.0","esm2017")})();function qu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function C_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bS=C_,P_=new Ei("auth","Firebase",C_());/**
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
 */const Wo=new $l("@firebase/auth");function kS(t,...e){Wo.logLevel<=se.WARN&&Wo.warn(`Auth (${hs}): ${t}`,...e)}function mo(t,...e){Wo.logLevel<=se.ERROR&&Wo.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw Hu(t,...e)}function zt(t,...e){return Hu(t,...e)}function DS(t,e,n){const r=Object.assign(Object.assign({},bS()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return P_.create(t,...e)}function W(t,e,...n){if(!t)throw Hu(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function fn(t,e){t||rn(e)}/**
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
 */function ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NS(){return gf()==="http:"||gf()==="https:"}function gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NS()||nT()||"connection"in navigator)?navigator.onLine:!0}function VS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=tT()||rT()}get(){return OS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zu(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class b_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new xi(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,s={}){return k_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),b_.fetch()(D_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function k_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MS),e);try{const s=new FS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw DS(t,u,l);Ot(t,u)}}catch(s){if(s instanceof mn)throw s;Ot(t,"network-request-failed",{message:String(s)})}}async function Li(t,e,n,r,s={}){const i=await gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function D_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zu(t.config,s):`${t.config.apiScheme}://${s}`}function LS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}function _f(t){return t!==void 0&&t.enterprise!==void 0}class US{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function BS(t,e){return gn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
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
 */async function jS(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function $S(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qS(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=Ku(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(Ic(s.auth_time)),issuedAtTime:Ws(Ic(s.iat)),expirationTime:Ws(Ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function Ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zp(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function HS(t){const e=Ku(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&zS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class N_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var e;const n=t.auth,r=await t.getIdToken(),s=await as(t,$S(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?QS(i.providerUserInfo):[],a=GS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new N_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WS(t){const e=ot(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function QS(t){return t.map(e=>{var{providerId:n}=e,r=qu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YS(t,e){const n=await k_(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=D_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",b_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JS(t,e){return gn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function wn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new N_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qS(this,e)}reload(){return WS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await as(this,jS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:V,isAnonymous:te,providerData:ce,stsTokenManager:Te}=n;W(B&&Te,e,"internal-error");const Y=gi.fromJSON(this.name,Te);W(typeof B=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),wn(m,e.name),wn(y,e.name),wn(v,e.name),wn(w,e.name),wn(b,e.name),wn(k,e.name);const ue=new lr({uid:B,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:te,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:Y,createdAt:b,lastLoginAt:k});return ce&&Array.isArray(ce)&&(ue.providerData=ce.map(oe=>Object.assign({},oe))),w&&(ue._redirectEventId=w),ue}static async _fromIdTokenResponse(e,n,r=!1){const s=new gi;s.updateFromServerResponse(n);const i=new lr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Go(i),i}}/**
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
 */const yf=new Map;function sn(t){fn(t instanceof Function,"Expected a class definition");let e=yf.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yf.set(t,e),e)}/**
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
 */class O_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O_.type="NONE";const vf=O_;/**
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
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(sn(vf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||sn(vf);const o=go(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=lr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zr(i,e,r))}}/**
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
 */function Ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F_(e))return"Blackberry";if(U_(e))return"Webos";if(Wu(e))return"Safari";if((e.includes("chrome/")||M_(e))&&!e.includes("edge/"))return"Chrome";if(L_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=it()){return/firefox\//i.test(t)}function Wu(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M_(t=it()){return/crios\//i.test(t)}function x_(t=it()){return/iemobile/i.test(t)}function L_(t=it()){return/android/i.test(t)}function F_(t=it()){return/blackberry/i.test(t)}function U_(t=it()){return/webos/i.test(t)}function za(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=it()){var e;return za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZS(){return sT()&&document.documentMode===10}function B_(t=it()){return za(t)||L_(t)||U_(t)||F_(t)||/windows phone/i.test(t)||x_(t)}function eC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function j_(t,e=[]){let n;switch(t){case"Browser":n=Ef(it());break;case"Worker":n=`${Ef(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class tC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nC(t,e={}){return gn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const rC=6;class sC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class iC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new If(this),this.idTokenSubscription=new If(this),this.beforeStateQueue=new tC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nC(this),n=new sC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return ot(t)}class If{constructor(e){this.auth=e,this.observer=null,this.addObserver=hT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function oC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",oC().appendChild(r)})}function aC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cC="https://www.google.com/recaptcha/enterprise.js?render=",lC="recaptcha-enterprise",uC="NO_RECAPTCHA";class hC{constructor(e){this.type=lC,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{BS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new US(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;_f(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(uC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&_f(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$_(cC+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Tf(t,e,n,r=!1){const s=new hC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Tf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Tf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function dC(t,e){const n=Hl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Do(i,e??{}))return s;Ot(s,"already-initialized")}return n.initialize({options:e})}function fC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pC(t,e,n){const r=Ir(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=q_(e),{host:o,port:a}=mC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||gC()}function q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mC(t){const e=q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wf(o)}}}function wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function _C(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yC(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
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
 */async function vC(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function EC(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
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
 */class _i extends Gu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,n,"signInWithPassword",yC);case"emailLink":return vC(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,r,"signUpPassword",_C);case"emailLink":return EC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
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
 */const IC="http://localhost";class gr extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:IC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */function TC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wC(t){const e=bs(ks(t)).link,n=e?bs(ks(e)).deep_link_id:null,r=bs(ks(t)).deep_link_id;return(r?bs(ks(r)).link:null)||r||n||e||t}class Qu{constructor(e){var n,r,s,i,o,a;const c=bs(ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=TC((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wC(e);try{return new Qu(n)}catch{return null}}}/**
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
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return _i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qu.parseLink(n);return W(r,"argument-error"),_i._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class H_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fi extends H_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends Fi{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class bn extends Fi{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class kn extends Fi{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function AC(t,e){return Li(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await lr._fromIdTokenResponse(e,r,s),o=Af(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Af(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qo extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qo(e,n,r,s)}}function z_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,i,e,r):i})}async function RC(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function SC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await as(t,z_(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Ku(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
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
 */async function K_(t,e,n=!1){const r="signIn",s=await z_(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CC(t,e){return K_(Ir(t),e)}/**
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
 */async function W_(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PC(t,e,n){const r=Ir(t),o=await gl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&W_(t),c}),a=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bC(t,e,n){return CC(ot(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&W_(t),r})}/**
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
 */async function kC(t,e){return gn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function DC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ot(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await as(r,kC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function NC(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function OC(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const Yo="__sak";/**
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
 */class G_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function VC(){const t=it();return Wu(t)||za(t)}const MC=1e3,xC=10;class Q_ extends G_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VC()&&eC(),this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ZS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q_.type="LOCAL";const LC=Q_;/**
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
 */class Y_ extends G_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Y_.type="SESSION";const J_=Y_;/**
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
 */function FC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await FC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
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
 */function Yu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Yu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kt(){return window}function BC(t){Kt().location.href=t}/**
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
 */function X_(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function jC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $C(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qC(){return X_()?self:null}/**
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
 */const Z_="firebaseLocalStorageDb",HC=1,Jo="firebaseLocalStorage",ey="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function zC(){const t=indexedDB.deleteDatabase(Z_);return new Ui(t).toPromise()}function _l(){const t=indexedDB.open(Z_,HC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:ey})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await zC(),e(await _l()))})})}async function Rf(t,e,n){const r=Wa(t,!0).put({[ey]:e,value:n});return new Ui(r).toPromise()}async function KC(t,e){const n=Wa(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function Sf(t,e){const n=Wa(t,!0).delete(e);return new Ui(n).toPromise()}const WC=800,GC=3;class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(qC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jC(),!this.activeServiceWorker)return;this.sender=new UC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$C()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _l();return await Rf(e,Yo,"1"),await Sf(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wa(s,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ty.type="LOCAL";const QC=ty;new xi(3e4,6e4);/**
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
 */function YC(t,e){return e?sn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ju extends Gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JC(t){return K_(t.auth,new Ju(t),t.bypassAuthState)}function XC(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),SC(n,new Ju(t),t.bypassAuthState)}async function ZC(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),RC(n,new Ju(t),t.bypassAuthState)}/**
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
 */class ny{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JC;case"linkViaPopup":case"linkViaRedirect":return ZC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:Ot(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eP=new xi(2e3,1e4);class Mr extends ny{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eP.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const tP="pendingRedirect",_o=new Map;class nP extends ny{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await rP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rP(t,e){const n=oP(e),r=iP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sP(t,e){_o.set(t._key(),e)}function iP(t){return sn(t._redirectPersistence)}function oP(t){return go(tP,t.config.apiKey,t.name)}async function aP(t,e,n=!1){const r=Ir(t),s=YC(r,e),o=await new nP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cP=10*60*1e3;class lP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ry(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ry({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ry(t);default:return!1}}/**
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
 */async function hP(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
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
 */const dP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fP=/^https?/;async function pP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hP(t);for(const n of e)try{if(mP(n))return}catch{}Ot(t,"unauthorized-domain")}function mP(t){const e=ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fP.test(n))return!1;if(dP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gP=new xi(3e4,6e4);function Pf(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _P(t){return new Promise((e,n)=>{var r,s,i;function o(){Pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pf(),n(zt(t,"network-request-failed"))},timeout:gP.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)o();else{const a=aC("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},$_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yo=null,e})}let yo=null;function yP(t){return yo=yo||_P(t),yo}/**
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
 */const vP=new xi(5e3,15e3),EP="__/auth/iframe",IP="emulator/auth/iframe",TP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AP(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zu(e,IP):`https://${t.config.authDomain}/${EP}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=wP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function RP(t){const e=await yP(t),n=Kt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:AP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Kt().setTimeout(()=>{i(o)},vP.get());function c(){Kt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const SP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CP=500,PP=600,bP="_blank",kP="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DP(t,e,n,r=CP,s=PP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},SP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=it().toLowerCase();n&&(a=M_(l)?bP:n),V_(l)&&(e=e||kP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(XS(l)&&a!=="_self")return NP(e||"",a),new bf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new bf(h)}function NP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OP="__/auth/handler",VP="emulator/auth/handler",MP=encodeURIComponent("fac");async function kf(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof H_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Fi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${MP}=${encodeURIComponent(c)}`:"";return`${xP(t)}?${Ii(a).slice(1)}${l}`}function xP({config:t}){return t.emulator?zu(t,VP):`https://${t.authDomain}/${OP}`}/**
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
 */const Tc="webStorageSupport";class LP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J_,this._completeRedirectFn=aP,this._overrideRedirectResult=sP}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kf(e,n,r,ml(),s);return DP(e,o,Yu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kf(e,n,r,ml(),s);return BC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RP(e),r=new lP(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B_()||Wu()||za()}}const FP=LP;var Df="@firebase/auth",Nf="1.5.1";/**
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
 */class UP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jP(t){Xr(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j_(t)},l=new iC(r,s,i,c);return fC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new hr("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new UP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Df,Nf,BP(t)),xn(Df,Nf,"esm2017")}/**
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
 */const $P=5*60,qP=nm("authIdTokenMaxAge")||$P;let Of=null;const HP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qP)return;const s=n==null?void 0:n.token;Of!==s&&(Of=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zP(t=om()){const e=Hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dC(t,{popupRedirectResolver:FP,persistence:[QC,LC,J_]}),r=nm("authTokenSyncURL");if(r){const i=HP(r);OC(n,i,()=>i(n.currentUser)),NC(n,o=>i(o))}const s=em("auth");return s&&pC(n,`http://${s}`),n}jP("Browser");const KP={apiKey:"AIzaSyDRqp4eZ1sWDrERrcVmQ62qNV88ZarARgI",authDomain:"collabora-961fc.firebaseapp.com",projectId:"collabora-961fc",storageBucket:"collabora-961fc.appspot.com",messagingSenderId:"179367425509",appId:"1:179367425509:web:1a46be044305e4a425eb0c",measurementId:"G-CR2W3H400C"},sy=im(KP),br=uS(sy),Xo=zP(sy);const WP={components:{ModalForm:$I},created(){this.getTasks().then(t=>{this.tasks=hd(t,this.selectedGroupID,this.selectedSortID)})},data(){return{isModalVisible:!1,isEditMode:!1,selectedGroupID:0,selectedSortID:0,tasks:{},formData:{taskID:"",course:"",deadline:"",author:"",type:"",visibility:"",groups:[],description:""}}},methods:{showModal(){console.log("Clicked"),this.isModalVisible=!0,console.log(this.isModalVisible)},closeModal(){this.isModalVisible=!1,this.isEditMode=!1,console.log(this.isModalVisible)},async getTasks(){let t=[];return(await RS(pf(br,"tasks"))).forEach(n=>{t.push(n.data())}),t},loadView(){this.selectedGroupID=Number(this.selectedGroupID),this.selectedSortID=Number(this.selectedSortID),this.getTasks().then(t=>{this.tasks=hd(t,this.selectedGroupID,this.selectedSortID)})},callSubmitHandler(){isEditMode?this.editItem():this.addItem()},async addItem(){const t=pf(br,"tasks"),e=this.formData,n=await CS(t,e);if(console.log(n.id),n!=null){const r=Ms(br,"tasks",n.id);await mf(r,{taskID:n.id})}this.formData={taskID:"",course:"",deadline:"",author:"",type:"",visibility:"",groups:[],description:""},this.closeModal(),this.loadView()},async openEditor(t){this.isEditMode=!0;let e=t.target.getAttribute("data-link");console.log(e);const n=await AS(Ms(br,"tasks",e));if(n!=null){let r=n.data();this.formData=r,this.showModal()}},async editItem(){let t=this.formData.taskID;const e=Ms(br,"tasks",t);await mf(e,this.formData),this.formData={taskID:"",course:"",deadline:"",author:"",type:"",visibility:"",groups:[],description:""},this.closeModal(),this.loadView()},async deleteItem(t){let e=t.target.getAttribute("data-link");console.log(e),await SS(Ms(br,"tasks",e)),this.loadView()}}},GP=T("h1",null,"Targets",-1),QP=T("p",null,"Find your submission and test dates here!",-1),YP={class:"filter-wrap"},JP=Vp('<option value="0">Date</option><option value="1">Course</option><option value="2">Type</option><option value="3">Date (desc)</option><option value="4">Course (desc)</option><option value="5">Type (desc)</option>',6),XP=[JP],ZP=Vp('<option value="0">Date</option><option value="1">Course</option><option value="2">Type</option><option value="3">Date (desc)</option><option value="4">Course (desc)</option><option value="5">Type (desc)</option>',6),eb=[ZP],tb={id:"task-wrap",class:"task-wrap"},nb={class:"group-detail",open:""},rb={class:"group-heading"},sb=T("hr",{class:"dashed"},null,-1),ib=T("hr",{class:"dashed"},null,-1),ob=["data-tag"],ab={class:"summary-wrap"},cb={class:"course"},lb={class:"title"},ub={class:"type assignment"},hb={class:"deadline"},db={class:"detail-content"},fb={class:"admin-btn-wrap"},pb=["data-link"],mb=["data-link"],gb=T("h2",null,"Editor",-1),_b={class:"modal-form",id:"modal-form"},yb={class:"form-group"},vb=T("label",{for:"input-course"},"Course",-1),Eb={class:"form-group"},Ib=T("label",{for:"input-deadline"},"Deadline",-1),Tb={class:"form-group"},wb=T("label",{for:"author"},"Author",-1),Ab={class:"form-group"},Rb=T("label",{for:"typeSelect"},"Type",-1),Sb=T("option",{value:"0"},"Quiz",-1),Cb=T("option",{value:"3"},"Final Exam",-1),Pb=T("option",{value:"3"},"CA Tests",-1),bb=T("option",{value:"3"},"General Report",-1),kb=T("option",{value:"1"},"Thesis",-1),Db=T("option",{value:"2"},"Presentation",-1),Nb=T("option",{value:"3"},"Self-Study Assessment",-1),Ob=T("option",{value:"4"},"Experiment / Lab Report",-1),Vb=T("option",{value:"3"},"Self Assessment",-1),Mb=T("option",{value:"3"},"Peer Assessment",-1),xb=[Sb,Cb,Pb,bb,kb,Db,Nb,Ob,Vb,Mb],Lb={class:"form-group"},Fb=T("label",{for:"visibilitySelect"},"Visibility",-1),Ub=T("option",{value:"0"},"Yes",-1),Bb=T("option",{value:"1"},"No",-1),jb=[Ub,Bb],$b={class:"form-group"},qb=T("label",{for:"groupsText"},"Groups",-1),Hb=T("option",{value:"0"},"Smart EdTech M1",-1),zb=T("option",{value:"1"},"Smart EdTech M2",-1),Kb=T("option",{value:"2"},"HCI M1",-1),Wb=T("option",{value:"3"},"HCI M2",-1),Gb=T("option",{value:"4"},"AI M1",-1),Qb=T("option",{value:"5"},"AI M2",-1),Yb=T("option",{value:"6"},"Data Science M1",-1),Jb=T("option",{value:"7"},"Data Science M2",-1),Xb=[Hb,zb,Kb,Wb,Gb,Qb,Yb,Jb],Zb={class:"form-group"},ek=T("label",{for:"descriptionText"},"Description",-1);function tk(t,e,n,r,s,i){const o=io("ModalForm");return ft(),It(He,null,[T("div",null,[GP,QP,T("button",{type:"button",class:"fab",id:"add-btn",onClick:e[0]||(e[0]=(...a)=>i.showModal&&i.showModal(...a))},"ADD +"),T("div",YP,[T("label",null,[en("Group By: "),Xe(T("select",{name:"group-by",id:"group-by","onUpdate:modelValue":e[1]||(e[1]=a=>s.selectedGroupID=a),onChange:e[2]||(e[2]=(...a)=>i.loadView&&i.loadView(...a))},XP,544),[[Ts,s.selectedGroupID]])]),T("label",null,[en("Sort By: "),Xe(T("select",{name:"sort-by",id:"sort-by","onUpdate:modelValue":e[3]||(e[3]=a=>s.selectedSortID=a),onChange:e[4]||(e[4]=(...a)=>i.loadView&&i.loadView(...a))},eb,544),[[Ts,s.selectedSortID]])])]),T("div",tb,[(ft(!0),It(He,null,ph(s.tasks,(a,c)=>(ft(),It("details",nb,[T("summary",rb,[sb,T("h2",null,yn(c),1),ib]),(ft(!0),It(He,null,ph(a,l=>(ft(),It("details",{"data-tag":l.taskID,class:"task-detail"},[T("summary",null,[T("div",ab,[T("span",cb,yn(l.course),1),T("span",lb,yn(l.heading),1),T("span",ub,yn(l.type),1),T("span",hb,yn(l.deadline),1)])]),T("div",db,[T("p",null,yn(l.description),1),T("p",null,yn(l.groups.join(",")),1),T("p",null,"Author: "+yn(l.author),1)]),T("div",fb,[T("button",{class:"btn-task-edit","data-link":l.taskID,onClick:e[5]||(e[5]=(...u)=>i.openEditor&&i.openEditor(...u))},"Edit",8,pb),T("button",{class:"btn-task-delete","data-link":l.taskID,onClick:e[6]||(e[6]=(...u)=>i.deleteItem&&i.deleteItem(...u))},"Delete",8,mb)])],8,ob))),256))]))),256))])]),Xe(Be(o,{onClose:i.closeModal},{header:wo(()=>[gb]),body:wo(()=>[T("form",_b,[T("div",yb,[vb,Xe(T("input",{type:"text",name:"input-course",id:"input-course","onUpdate:modelValue":e[7]||(e[7]=a=>s.formData.course=a)},null,512),[[tn,s.formData.course]])]),T("div",Eb,[Ib,Xe(T("input",{type:"datetime-local",name:"input-deadline",id:"input-deadline","onUpdate:modelValue":e[8]||(e[8]=a=>s.formData.deadline=a)},null,512),[[tn,s.formData.deadline]])]),T("div",Tb,[wb,Xe(T("input",{type:"text",name:"author",id:"author","onUpdate:modelValue":e[9]||(e[9]=a=>s.formData.author=a)},null,512),[[tn,s.formData.author]])]),T("div",Ab,[Rb,Xe(T("select",{name:"typeSelect",id:"typeSelect","onUpdate:modelValue":e[10]||(e[10]=a=>s.formData.type=a)},xb,512),[[Ts,s.formData.type]])]),T("div",Lb,[Fb,Xe(T("select",{name:"visibilitySelect",id:"visibilitySelect","onUpdate:modelValue":e[11]||(e[11]=a=>s.formData.visibility=a)},jb,512),[[Ts,s.formData.visibility]])]),T("div",$b,[qb,Xe(T("select",{name:"groupsText",id:"groupsText",multiple:"","onUpdate:modelValue":e[12]||(e[12]=a=>s.formData.groups=a)},Xb,512),[[Ts,s.formData.groups]])]),T("div",Zb,[ek,Xe(T("textarea",{name:"descriptionText",id:"descriptionText",placeholder:"add your task description","onUpdate:modelValue":e[13]||(e[13]=a=>s.formData.description=a)},`
                  `,512),[[tn,s.formData.description]])]),T("button",{type:"button",onClick:e[14]||(e[14]=(...a)=>i.addItem&&i.addItem(...a))},"Save Changes")])]),_:1},8,["onClose"]),[[Fp,s.isModalVisible]])],64)}const nk=vi(WP,[["render",tk]]),rk={emits:["loggedIn"],data(){return{username:"",email:"",password:""}},methods:{signUp(){PC(Xo,this.email,this.password).then(()=>{DC(Xo.currentUser,{displayName:this.username}).then(()=>{this.$emit("loggedIn")})})}}},sk=T("h2",null,"Sign Up",-1),ik={class:"form-group"},ok=T("label",{for:"username"},"Username",-1),ak={class:"form-group"},ck=T("label",{for:"email"},"Email",-1),lk={class:"form-group"},uk=T("label",{for:"password"},"Password",-1),hk=T("button",null,"Sign Up",-1);function dk(t,e,n,r,s,i){return ft(),It("form",{onSubmit:e[3]||(e[3]=Up((...o)=>i.signUp&&i.signUp(...o),["prevent"]))},[sk,T("div",ik,[ok,Xe(T("input",{type:"text",placeholder:"Username",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o)},null,512),[[tn,s.username]])]),T("div",ak,[ck,Xe(T("input",{type:"email",placeholder:"E.g. abc@xyz.com",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>s.email=o)},null,512),[[tn,s.email]])]),T("div",lk,[uk,Xe(T("input",{type:"password",placeholder:"At least 6 chars",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>s.password=o)},null,512),[[tn,s.password]])]),hk],32)}const fk=vi(rk,[["render",dk]]),pk={emits:["loggedIn"],data(){return{email:"",password:""}},methods:{login(){bC(Xo,this.email,this.password).then(()=>{console.log("Success"),this.$emit("loggedIn")})}}},mk=T("h2",null,"Log in",-1),gk={class:"form-group"},_k=T("label",{for:"email"},"Email",-1),yk={class:"form-group"},vk=T("label",{for:"password"},"Password",-1),Ek=T("button",null,"Log in",-1);function Ik(t,e,n,r,s,i){return ft(),It("form",{onSubmit:e[2]||(e[2]=Up((...o)=>i.login&&i.login(...o),["prevent"]))},[mk,T("div",gk,[_k,Xe(T("input",{type:"email",placeholder:"E.g. abc@xyz.com",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o)},null,512),[[tn,s.email]])]),T("div",yk,[vk,Xe(T("input",{type:"password",placeholder:"At least 6 chars",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[tn,s.password]])]),Ek],32)}const Tk=vi(pk,[["render",Ik]]),wk="/assets/logo-collabora-79b8a6e1.svg",Ak={components:{SignupForm:fk,LoginForm:Tk,DashboardView:nk},data(){return{isLoggedIn:!1,showLogin:!0,isAdmin:!1}},beforeUpdate(){Xo.currentUser}},Rk={key:0},Sk=T("div",{class:"header-brand"},[T("img",{alt:"Vue logo",class:"logo",src:wk,width:"125",height:"125"}),T("h1",null,"Promoting Synchronized Educational Spaces")],-1),Ck={key:1};function Pk(t,e,n,r,s,i){const o=io("LoginForm"),a=io("SignupForm"),c=io("DashboardView");return s.isLoggedIn?(ft(),It("div",Ck,[Be(c)])):(ft(),It("div",Rk,[Sk,s.showLogin?(ft(),It(He,{key:0},[Be(o,{onLoggedIn:e[0]||(e[0]=l=>s.isLoggedIn=!0)}),T("p",null,[en("No account yet? "),T("span",{onClick:e[1]||(e[1]=l=>s.showLogin=!1)},"Sign up"),en(" instead.")])],64)):(ft(),It(He,{key:1},[Be(a,{onLoggedIn:e[2]||(e[2]=l=>s.isLoggedIn=!0)}),T("p",null,[en("Already registered? "),T("span",{onClick:e[3]||(e[3]=l=>s.showLogin=!0)},"Login"),en(" instead.")])],64))]))}const bk=vi(Ak,[["render",Pk]]),kk="modulepreload",Dk=function(t){return"/"+t},Vf={},Nk=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Dk(i),i in Vf)return;Vf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":kk,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ok={__name:"HomeView",setup(t){return(e,n)=>(ft(),It("main"))}},Vk=VI({history:YE("/"),routes:[{path:"/",name:"home",component:Ok},{path:"/about",name:"about",component:()=>Nk(()=>import("./AboutView-2408d60c.js"),[])}]}),iy=DE(bk);iy.use(Vk);iy.mount("#app");export{vi as _,T as a,It as c,ft as o};
