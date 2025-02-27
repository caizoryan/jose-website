(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const le=!1,ie=(e,t)=>e===t,re=Symbol("solid-track"),j={equals:ie};let oe=ee;const E=1,M=2,W={owned:null,cleanups:null,context:null,owner:null};var h=null;let R=null,fe=null,d=null,p=null,$=null,V=0;function I(e,t){const n=d,i=h,s=e.length===0,l=t===void 0?i:t,o=s?W:{owned:null,cleanups:null,context:l?l.context:null,owner:l},r=s?e:()=>e(()=>T(()=>L(o)));h=o,d=null;try{return N(r,!0)}finally{d=n,h=i}}function X(e,t){t=t?Object.assign({},j,t):j;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),Y(n,s));return[J.bind(n),i]}function D(e,t,n){const i=Z(e,t,!1,E);F(i)}function P(e,t,n){n=n?Object.assign({},j,n):j;const i=Z(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,F(i),J.bind(i)}function T(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function ue(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function J(){if(this.sources&&this.state)if(this.state===E)F(this);else{const e=p;p=null,N(()=>U(this),!1),p=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function Y(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],o=R&&R.running;o&&R.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?p.push(l):$.push(l),l.observers&&te(l)),o||(l.state=E)}if(p.length>1e6)throw p=[],new Error},!1)),t}function F(e){if(!e.fn)return;L(e);const t=V;ce(e,e.value,t)}function ce(e,t,n){let i;const s=h,l=d;d=h=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(L),e.owned=null),e.updatedAt=n+1,ne(o)}finally{d=l,h=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,i):e.value=i,e.updatedAt=n)}function Z(e,t,n,i=E,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==W&&(h.owned?h.owned.push(l):h.owned=[l]),l}function z(e){if(e.state===0)return;if(e.state===M)return U(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<V);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)F(e);else if(e.state===M){const i=p;p=null,N(()=>U(e,t[0]),!1),p=i}}function N(e,t){if(p)return e();let n=!1;t||(p=[]),$?n=!0:$=[],V++;try{const i=e();return ae(n),i}catch(i){n||($=null),p=null,ne(i)}}function ae(e){if(p&&(ee(p),p=null),e)return;const t=$;$=null,t.length&&N(()=>oe(t),!1)}function ee(e){for(let t=0;t<e.length;t++)z(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const s=i.state;s===E?i!==t&&(!i.updatedAt||i.updatedAt<V)&&z(i):s===M&&U(i,t)}}}function te(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=M,n.pure?p.push(n):$.push(n),n.observers&&te(n))}}function L(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),o=n.observerSlots.pop();i<s.length&&(l.sourceSlots[o]=i,s[i]=l,n.observerSlots[i]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)L(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)L(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function de(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ne(e,t=h){throw de(e)}const he=Symbol("fallback");function K(e){for(let t=0;t<e.length;t++)e[t]()}function pe(e,t,n={}){let i=[],s=[],l=[],o=0,r=t.length>1?[]:null;return ue(()=>K(l)),()=>{let u=e()||[],c=u.length,a,f;return u[re],T(()=>{let g,v,_,O,B,w,b,m,C;if(c===0)o!==0&&(K(l),l=[],i=[],s=[],o=0,r&&(r=[])),n.fallback&&(i=[he],s[0]=I(se=>(l[0]=se,n.fallback())),o=1);else if(o===0){for(s=new Array(c),f=0;f<c;f++)i[f]=u[f],s[f]=I(x);o=c}else{for(_=new Array(c),O=new Array(c),r&&(B=new Array(c)),w=0,b=Math.min(o,c);w<b&&i[w]===u[w];w++);for(b=o-1,m=c-1;b>=w&&m>=w&&i[b]===u[m];b--,m--)_[m]=s[b],O[m]=l[b],r&&(B[m]=r[b]);for(g=new Map,v=new Array(m+1),f=m;f>=w;f--)C=u[f],a=g.get(C),v[f]=a===void 0?-1:a,g.set(C,f);for(a=w;a<=b;a++)C=i[a],f=g.get(C),f!==void 0&&f!==-1?(_[f]=s[a],O[f]=l[a],r&&(B[f]=r[a]),f=v[f],g.set(C,f)):l[a]();for(f=w;f<c;f++)f in _?(s[f]=_[f],l[f]=O[f],r&&(r[f]=B[f],r[f](f))):s[f]=I(x);s=s.slice(0,o=c),i=u.slice(0)}return s});function x(g){if(l[f]=g,r){const[v,_]=X(f);return r[f]=_,t(u[f],v)}return t(u[f])}}}function y(e,t){return T(()=>e(t||{}))}const ge=e=>`Stale read from <${e}>.`;function we(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(pe(()=>e.each,e.children,t||void 0))}function be(e){const t=e.keyed,n=P(()=>e.when,void 0,void 0),i=t?n:P(n,void 0,{equals:(s,l)=>!s==!l});return P(()=>{const s=i();if(s){const l=e.children;return typeof l=="function"&&l.length>0?T(()=>l(t?s:()=>{if(!T(i))throw ge("Show");return n()})):l}return e.fallback},void 0,void 0)}function me(e,t,n){let i=n.length,s=t.length,l=i,o=0,r=0,u=t[s-1].nextSibling,c=null;for(;o<s||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===o){const a=l<i?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],a)}else if(l===r)for(;o<s;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],a),t[s]=n[l]}else{if(!c){c=new Map;let f=r;for(;f<l;)c.set(n[f],f++)}const a=c.get(t[o]);if(a!=null)if(r<a&&a<l){let f=o,x=1,g;for(;++f<s&&f<l&&!((g=c.get(t[f]))==null||g!==a+x);)x++;if(x>a-r){const v=t[o];for(;r<a;)e.insertBefore(n[r++],v)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const H="_$DX_DELEGATE";function ye(e,t,n,i={}){let s;return I(l=>{s=l,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function S(e,t,n,i){let s;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(s||(s=l())).cloneNode(!0);return o.cloneNode=o,o}function Ae(e,t=window.document){const n=t[H]||(t[H]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,ve))}}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function A(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return q(e,t,i,n);D(s=>q(e,t(),s,n),i)}function ve(e){let t=e.target;const n=`$$${e.type}`,i=e.target,s=e.currentTarget,l=u=>Object.defineProperty(e,"target",{configurable:!0,value:u}),o=()=>{const u=t[n];if(u&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?u.call(t,c,e):u.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},r=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const u=e.composedPath();l(u[0]);for(let c=0;c<u.length-2&&(t=u[c],!!o());c++){if(t._$host){t=t._$host,r();break}if(t.parentNode===s)break}}else r();l(i)}function q(e,t,n,i,s){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(o){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=k(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=k(e,n,i);else{if(l==="function")return D(()=>{let r=t();for(;typeof r=="function";)r=r();n=q(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(G(r,t,n,s))return D(()=>n=q(e,r,n,i,!0)),()=>n;if(r.length===0){if(n=k(e,n,i),o)return n}else u?n.length===0?Q(e,r,i):me(e,n,r):(n&&k(e),Q(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=k(e,n,i,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function G(e,t,n,i){let s=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=n&&n[e.length],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))s=G(e,r,u)||s;else if(c==="function")if(i){for(;typeof r=="function";)r=r();s=G(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||s}else e.push(r),s=!0;else{const a=String(r);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return s}function Q(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function k(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(s!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(s,r):e.insertBefore(s,n):u&&r.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}var _e=S("<div class=title-bar><div class=title-text> 360 Bike Safety "),$e=S("<div class=content-grid><div class=left></div><div class=right>"),Ee=S("<div>About"),xe=S("<div class=images><div class=text>Images"),Ce=S("<img class=hover-image>"),ke=S("<div><h4 class=project-title> <!> "),Te=S("<div>Links"),Le=S("<div class=container>");let Ne=[{title:"Poster #1",images:["./assets/poster_1.jpg"]},{title:"Booklet",images:["./assets/booklet_1.png","./assets/booklet_2.png","./assets/booklet_3.png","./assets/booklet_4.png","./assets/booklet_5.png","./assets/booklet_6.png","./assets/booklet_7.png","./assets/booklet_8.png","./assets/booklet_9.png","./assets/booklet_10.png","./assets/booklet_11.png"]}];function Oe(){return _e()}function Be(){return(()=>{var e=$e(),t=e.firstChild,n=t.nextSibling;return A(t,y(Ie,{}),null),A(t,y(Me,{}),null),A(n,y(Pe,{})),e})()}function Ie(){return Ee()}function Pe(){return(()=>{var e=xe();return e.firstChild,A(e,y(we,{each:Ne,children:t=>y(je,{get title(){return t.title},get images(){return t.images}})}),null),e})()}function je(e){const[t,n]=X(!1),i=()=>n(!0),s=()=>n(!1);return(()=>{var l=ke(),o=l.firstChild,r=o.firstChild,u=r.nextSibling;return u.nextSibling,o.$$mouseout=s,o.$$mouseover=i,A(o,()=>e.title,u),A(l,y(be,{get when(){return t()},get children(){var c=Ce();return D(()=>Se(c,"src",e.images[0])),c}}),null),l})()}function Me(){return Te()}function De(){return(()=>{var e=Le();return A(e,y(Oe,{}),null),A(e,y(Be,{}),null),e})()}Ae(["mouseover","mouseout"]);const Ue=document.getElementById("root");ye(()=>y(De,{}),Ue);
