(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,G=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),it=new WeakMap;let At=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(G&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=it.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&it.set(r,t))}return t}toString(){return this.cssText}};const Bt=e=>new At(typeof e=="string"?e:e+"",void 0,Q),St=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new At(r,e,Q)},Vt=(e,t)=>{if(G)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=z.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},lt=G?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Bt(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ft,defineProperty:qt,getOwnPropertyDescriptor:Wt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Kt,getPrototypeOf:Jt}=Object,g=globalThis,ct=g.trustedTypes,Yt=ct?ct.emptyScript:"",q=g.reactiveElementPolyfillSupport,R=(e,t)=>e,B={toAttribute(e,t){switch(t){case Boolean:e=e?Yt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},X=(e,t)=>!Ft(e,t),at={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=at){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&qt(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:s}=Wt(this.prototype,t)??{get(){return this[r]},set(i){this[r]=i}};return{get(){return o==null?void 0:o.call(this)},set(i){const c=o==null?void 0:o.call(this);s.call(this,i),this.requestUpdate(t,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const r=this.properties,n=[...Zt(r),...Kt(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(lt(o))}else t!==void 0&&r.push(lt(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var s;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:B).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){var s;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),c=typeof i.converter=="function"?{fromAttribute:i.converter}:((s=i.converter)==null?void 0:s.fromAttribute)!==void 0?i.converter:B;this._$Em=o,this[o]=c.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??X)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],i)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[R("elementProperties")]=new Map,E[R("finalized")]=new Map,q==null||q({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,V=U.trustedTypes,ut=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,Et="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+_,Gt=`<${wt}>`,S=document,M=()=>S.createComment(""),N=e=>e===null||typeof e!="object"&&typeof e!="function",Ct=Array.isArray,Qt=e=>Ct(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",W=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,dt=/>/g,b=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ft=/"/g,xt=/^(?:script|style|textarea|title)$/i,Xt=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Pt=Xt(1),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),$t=new WeakMap,A=S.createTreeWalker(S,129);function kt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}const te=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",i=O;for(let c=0;c<r;c++){const l=e[c];let a,h,d=-1,m=0;for(;m<l.length&&(i.lastIndex=m,h=i.exec(l),h!==null);)m=i.lastIndex,i===O?h[1]==="!--"?i=ht:h[1]!==void 0?i=dt:h[2]!==void 0?(xt.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=b):h[3]!==void 0&&(i=b):i===b?h[0]===">"?(i=o??O,d=-1):h[1]===void 0?d=-2:(d=i.lastIndex-h[2].length,a=h[1],i=h[3]===void 0?b:h[3]==='"'?ft:pt):i===ft||i===pt?i=b:i===ht||i===dt?i=O:(i=b,o=void 0);const p=i===b&&e[c+1].startsWith("/>")?" ":"";s+=i===O?l+Gt:d>=0?(n.push(a),l.slice(0,d)+Et+l.slice(d)+_+p):l+_+(d===-2?c:p)}return[kt(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};let Y=class Ot{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const c=t.length-1,l=this.parts,[a,h]=te(t,r);if(this.el=Ot.createElement(a,n),A.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=A.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Et)){const m=h[i++],p=o.getAttribute(d).split(_),$=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:$[2],strings:p,ctor:$[1]==="."?re:$[1]==="?"?oe:$[1]==="@"?ne:F}),o.removeAttribute(d)}else d.startsWith(_)&&(l.push({type:6,index:s}),o.removeAttribute(d));if(xt.test(o.tagName)){const d=o.textContent.split(_),m=d.length-1;if(m>0){o.textContent=V?V.emptyScript:"";for(let p=0;p<m;p++)o.append(d[p],M()),A.nextNode(),l.push({type:2,index:++s});o.append(d[m],M())}}}else if(o.nodeType===8)if(o.data===wt)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(_,d+1))!==-1;)l.push({type:7,index:s}),d+=_.length-1}s++}}static createElement(t,r){const n=S.createElement("template");return n.innerHTML=t,n}};function x(e,t,r=e,n){var i,c;if(t===C)return t;let o=n!==void 0?(i=r._$Co)==null?void 0:i[n]:r._$Cl;const s=N(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=x(e,o._$AS(e,t.values),o,n)),t}let ee=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??S).importNode(r,!0);A.currentNode=o;let s=A.nextNode(),i=0,c=0,l=n[0];for(;l!==void 0;){if(i===l.index){let a;l.type===2?a=new tt(s,s.nextSibling,this,t):l.type===1?a=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(a=new se(s,this,t)),this._$AV.push(a),l=n[++c]}i!==(l==null?void 0:l.index)&&(s=A.nextNode(),i++)}return A.currentNode=S,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},tt=class Rt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=x(this,t,r),N(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==f&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var s;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Y.createElement(kt(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(r);else{const i=new ee(o,this),c=i.u(this.options);i.p(r),this.T(c),this._$AH=i}}_$AC(t){let r=$t.get(t.strings);return r===void 0&&$t.set(t.strings,r=new Y(t)),r}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new Rt(this.S(M()),this.S(M()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}},F=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(t,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)t=x(this,t,r,0),i=!N(t)||t!==this._$AH&&t!==C,i&&(this._$AH=t);else{const c=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=x(this,c[n+l],r,l),a===C&&(a=this._$AH[l]),i||(i=!N(a)||a!==this._$AH[l]),a===f?t=f:t!==f&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}i&&!o&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class re extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}let oe=class extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},ne=class extends F{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){if((t=x(this,t,r,0)??f)===C)return;const n=this._$AH,o=t===f&&n!==f||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==f&&(n===f||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}},se=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};const Z=U.litHtmlPolyfillSupport;Z==null||Z(Y,tt),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.1.2");const ie=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new tt(t.insertBefore(M(),s),s,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}}var bt;w._$litElement$=!0,w.finalized=!0,(bt=globalThis.litElementHydrateSupport)==null||bt.call(globalThis,{LitElement:w});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:X},ce=(e=le,t,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,e),n==="accessor"){const{name:i}=r;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(i,l,e)},init(c){return c!==void 0&&this.P(i,void 0,e),c}}}if(n==="setter"){const{name:i}=r;return function(c){const l=this[i];t.call(this,c),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+n)};function P(e){return(t,r)=>typeof r=="object"?ce(e,t,r):((n,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,r)}const ae="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e",ue="/vite.svg";var he=Object.defineProperty,de=Object.getOwnPropertyDescriptor,et=(e,t,r,n)=>{for(var o=n>1?void 0:n?de(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&he(t,r,o),o};let T=class extends w{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return Pt`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${ue} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${ae} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};T.styles=St`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;et([P()],T.prototype,"docsHint",2);et([P({type:Number})],T.prototype,"count",2);T=et([Ut("my-element")],T);function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mt={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=Symbol.for("react.element"),fe=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),ge=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ae=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),yt=Symbol.iterator;function Ee(e){return e===null||typeof e!="object"?null:(e=yt&&e[yt]||e["@@iterator"],typeof e=="function"?e:null)}var Nt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tt=Object.assign,Ht={};function k(e,t,r){this.props=e,this.context=t,this.refs=Ht,this.updater=r||Nt}k.prototype.isReactComponent={};k.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jt(){}jt.prototype=k.prototype;function rt(e,t,r){this.props=e,this.context=t,this.refs=Ht,this.updater=r||Nt}var ot=rt.prototype=new jt;ot.constructor=rt;Tt(ot,k.prototype);ot.isPureReactComponent=!0;var mt=Array.isArray,Lt=Object.prototype.hasOwnProperty,nt={current:null},zt={key:!0,ref:!0,__self:!0,__source:!0};function Dt(e,t,r){var n,o={},s=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Lt.call(t,n)&&!zt.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var l=Array(c),a=0;a<c;a++)l[a]=arguments[a+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:H,type:e,key:s,ref:i,props:o,_owner:nt.current}}function we(e,t){return{$$typeof:H,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function st(e){return typeof e=="object"&&e!==null&&e.$$typeof===H}function Ce(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var _t=/\/+/g;function J(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ce(""+e.key):t.toString(36)}function D(e,t,r,n,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case H:case fe:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+J(i,0):n,mt(o)?(r="",e!=null&&(r=e.replace(_t,"$&/")+"/"),D(o,t,r,"",function(a){return a})):o!=null&&(st(o)&&(o=we(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(_t,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=n===""?".":n+":",mt(e))for(var c=0;c<e.length;c++){s=e[c];var l=n+J(s,c);i+=D(s,t,r,l,o)}else if(l=Ee(e),typeof l=="function")for(e=l.call(e),c=0;!(s=e.next()).done;)s=s.value,l=n+J(s,c++),i+=D(s,t,r,l,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function L(e,t,r){if(e==null)return e;var n=[],o=0;return D(e,n,"","",function(s){return t.call(r,s,o++)}),n}function xe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var y={current:null},I={transition:null},Pe={ReactCurrentDispatcher:y,ReactCurrentBatchConfig:I,ReactCurrentOwner:nt};u.Children={map:L,forEach:function(e,t,r){L(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return L(e,function(){t++}),t},toArray:function(e){return L(e,function(t){return t})||[]},only:function(e){if(!st(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=k;u.Fragment=$e;u.Profiler=me;u.PureComponent=rt;u.StrictMode=ye;u.Suspense=be;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pe;u.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Tt({},e.props),o=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=nt.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)Lt.call(t,l)&&!zt.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){c=Array(l);for(var a=0;a<l;a++)c[a]=arguments[a+2];n.children=c}return{$$typeof:H,type:e.type,key:o,ref:s,props:n,_owner:i}};u.createContext=function(e){return e={$$typeof:ge,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_e,_context:e},e.Consumer=e};u.createElement=Dt;u.createFactory=function(e){var t=Dt.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:ve,render:e}};u.isValidElement=st;u.lazy=function(e){return{$$typeof:Se,_payload:{_status:-1,_result:e},_init:xe}};u.memo=function(e,t){return{$$typeof:Ae,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return y.current.useCallback(e,t)};u.useContext=function(e){return y.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return y.current.useDeferredValue(e)};u.useEffect=function(e,t){return y.current.useEffect(e,t)};u.useId=function(){return y.current.useId()};u.useImperativeHandle=function(e,t,r){return y.current.useImperativeHandle(e,t,r)};u.useInsertionEffect=function(e,t){return y.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return y.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return y.current.useMemo(e,t)};u.useReducer=function(e,t,r){return y.current.useReducer(e,t,r)};u.useRef=function(e){return y.current.useRef(e)};u.useState=function(e){return y.current.useState(e)};u.useSyncExternalStore=function(e,t,r){return y.current.useSyncExternalStore(e,t,r)};u.useTransition=function(){return y.current.useTransition()};u.version="18.2.0";Mt.exports=u;var ke=Mt.exports;const Oe=pe(ke);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=new Set(["children","localName","ref","style","className"]),gt=new WeakMap,vt=(e,t,r,n,o)=>{const s=o==null?void 0:o[t];s===void 0?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==n&&((i,c,l)=>{let a=gt.get(i);a===void 0&&gt.set(i,a=new Map);let h=a.get(c);l!==void 0?h===void 0?(a.set(c,h={handleEvent:l}),i.addEventListener(c,h)):h.handleEvent=l:h!==void 0&&(a.delete(c),i.removeEventListener(c,h))})(e,s,r)},Ue=({react:e,tagName:t,elementClass:r,events:n,displayName:o})=>{const s=new Set(Object.keys(n??{})),i=e.forwardRef((c,l)=>{const a=e.useRef(new Map),h=e.useRef(null),d={},m={};for(const[p,$]of Object.entries(c))Re.has(p)?d[p==="className"?"class":p]=$:s.has(p)||p in r.prototype?m[p]=$:d[p]=$;return e.useLayoutEffect(()=>{if(h.current===null)return;const p=new Map;for(const $ in m)vt(h.current,$,c[$],a.current.get($),n),a.current.delete($),p.set($,c[$]);for(const[$,It]of a.current)vt(h.current,$,void 0,It,n);a.current=p}),e.useLayoutEffect(()=>{var p;(p=h.current)==null||p.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(p=>{h.current=p,typeof l=="function"?l(p):l!==null&&(l.current=p)},[l])})});return i.displayName=o??r.name,i};var Me=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,j=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ne(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Me(t,r,o),o};let v=class extends w{constructor(){super(...arguments),this.label="Click me",this.disabled=!1,this.type="primary",this.size="medium"}render(){return Pt`
      <button
        class="${this.type} ${this.size}"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `}handleClick(){this.dispatchEvent(new CustomEvent("button-clicked"))}};v.styles=St`
    button {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      outline: none;
    }

    button.small {
      padding: 5px 10px;
      font-size: 14px;
    }

    button.medium {
      padding: 10px 20px;
      font-size: 16px;
    }

    button.large {
      padding: 15px 30px;
      font-size: 18px;
    }

    button.primary {
      background-color: #007bff; /* Bootstrap primary color */
      color: white;
    }

    button.primary:hover {
      background-color: #0056b3; /* Slightly darker shade */
    }

    button.secondary {
      background-color: #6c757d; /* Bootstrap secondary color */
      color: white;
    }

    button.secondary:hover {
      background-color: #545b62; /* Slightly darker shade */
    }

    button.error {
      background-color: #dc3545; /* Bootstrap error color */
      color: white;
    }

    button.error:hover {
      background-color: #bd2130; /* Slightly darker shade */
    }

    /* Additional types */
    button.success {
      background-color: #28a745; /* Bootstrap success color */
      color: white;
    }

    button.success:hover {
      background-color: #218838; /* Slightly darker shade */
    }

    button.warning {
      background-color: #ffc107; /* Bootstrap warning color */
      color: black;
    }

    button.warning:hover {
      background-color: #e0a800; /* Slightly darker shade */
    }

    button.info {
      background-color: #17a2b8; /* Bootstrap info color */
      color: white;
    }

    button.info:hover {
      background-color: #138496; /* Slightly darker shade */
    }

    /* Disabled state */
    button:disabled {
      background-color: lightgray;
      cursor: not-allowed;
    }
  `;j([P({type:String})],v.prototype,"label",2);j([P({type:Boolean})],v.prototype,"disabled",2);j([P({type:String})],v.prototype,"type",2);j([P({type:String})],v.prototype,"size",2);v=j([Ut("simple-button")],v);Ue({tagName:"simple-button",elementClass:v,react:Oe,events:{"button-clicked":"buttonClicked"}});
