(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new URL(`symbol-avatar-brand-DN8avZ-q.svg`,import.meta.url).href,t=new URL(`symbol-circle-brand-BEA29ktq.svg`,import.meta.url).href,n=new URL(`symbol-circle-light-C4Qpvhgr.svg`,import.meta.url).href,r=new URL(`symbol-orange-mT39MzWe.svg`,import.meta.url).href,i=new URL(`symbol-tile-brand-CoGVFtK7.svg`,import.meta.url).href,a=new URL(`symbol-tile-light-BtEje1pP.svg`,import.meta.url).href,o=new URL(`symbol-white-CAZau-Ef.svg`,import.meta.url).href,s=new URL(`wordmark-avatar-brand-B5Erl8Un.svg`,import.meta.url).href,c=new URL(`wordmark-black-DrGeSmrX.svg`,import.meta.url).href,l=new URL(`wordmark-card-brand-lg-BNdYnx50.svg`,import.meta.url).href,u=new URL(`wordmark-card-brand-md-BccoAlv1.svg`,import.meta.url).href,d=new URL(`wordmark-card-brand-sm-B7rwLUuy.svg`,import.meta.url).href,ee=new URL(`wordmark-card-light-lg-U7gU6fpi.svg`,import.meta.url).href,te=new URL(`wordmark-card-light-md-C3IAc3Oo.svg`,import.meta.url).href,ne=new URL(`wordmark-card-light-sm-TEUr4i44.svg`,import.meta.url).href,re=new URL(`wordmark-orange-Chdu1FFa.svg`,import.meta.url).href,ie=new URL(`wordmark-pill-brand-ifEL62dR.svg`,import.meta.url).href,ae=new URL(`wordmark-pill-light-NwafUCA2.svg`,import.meta.url).href,oe=new URL(`wordmark-tab-angled-brand-D2zwPVHq.svg`,import.meta.url).href,se=new URL(`wordmark-tab-angled-light-DMVJcWyr.svg`,import.meta.url).href,ce=new URL(`wordmark-tab-brand-Pj2FijUI.svg`,import.meta.url).href,le=new URL(`wordmark-tab-light-DYNb2cLf.svg`,import.meta.url).href,ue=new URL(`wordmark-tile-brand-461XfLzF.svg`,import.meta.url).href,de=new URL(`wordmark-tile-light-DUZw_o8-.svg`,import.meta.url).href,fe=new URL(`wordmark-white-C46Qg2OM.svg`,import.meta.url).href;function f(e,t){typeof customElements<`u`&&(customElements.get(e)||customElements.define(e,t))}var p=globalThis,pe=p.ShadowRoot&&(p.ShadyCSS===void 0||p.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,me=Symbol(),he=new WeakMap,ge=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&he.set(t,e))}return e}toString(){return this.cssText}},_e=e=>new ge(typeof e==`string`?e:e+``,void 0,me),m=(e,...t)=>new ge(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,me),ve=(e,t)=>{if(pe)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=p.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ye=pe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _e(t)})(e):e,{is:be,defineProperty:xe,getOwnPropertyDescriptor:Se,getOwnPropertyNames:Ce,getOwnPropertySymbols:we,getPrototypeOf:Te}=Object,h=globalThis,Ee=h.trustedTypes,De=Ee?Ee.emptyScript:``,Oe=h.reactiveElementPolyfillSupport,g=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?De:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ke=(e,t)=>!be(e,t),Ae={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&xe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Se(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ae}static _$Ei(){if(this.hasOwnProperty(g(`elementProperties`)))return;let e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g(`properties`))){let e=this.properties,t=[...Ce(e),...we(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ye(e))}else e!==void 0&&t.push(ye(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?_:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?_:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ke)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[g(`elementProperties`)]=new Map,v[g(`finalized`)]=new Map,Oe?.({ReactiveElement:v}),(h.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,je=e=>e,b=y.trustedTypes,Me=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ne=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,S=`?`+x,Pe=`<${S}>`,C=document,w=()=>C.createComment(``),T=e=>e===null||typeof e!=`object`&&typeof e!=`function`,E=Array.isArray,Fe=e=>E(e)||typeof e?.[Symbol.iterator]==`function`,Ie=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Re=/>/g,O=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ze=/'/g,Be=/"/g,Ve=/^(?:script|style|textarea|title)$/i,He=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=He(1),Ue=He(2),A=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),We=new WeakMap,M=C.createTreeWalker(C,129);function Ge(e,t){if(!E(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Me===void 0?t:Me.createHTML(t)}var Ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=D;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===D?c[1]===`!--`?o=Le:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=O):(Ve.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=O):o=Re:o===O?c[0]===`>`?(o=i??D,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?O:c[3]===`"`?Be:ze):o===Be||o===ze?o=O:o===Le||o===Re?o=D:(o=O,i=void 0);let d=o===O&&e[t+1].startsWith(`/>`)?` `:``;a+=o===D?n+Pe:l>=0?(r.push(s),n.slice(0,l)+Ne+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[Ge(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},N=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ke(t,n);if(this.el=e.createElement(l,r),M.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=M.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ne)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Je:r[1]===`?`?Ye:r[1]===`@`?Xe:I}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ve.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],w()),M.nextNode(),c.push({type:2,index:++a});i.append(e[t],w())}}}else if(i.nodeType===8){if(i.data===S)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}}a++}}static createElement(e,t){let n=C.createElement(`template`);return n.innerHTML=e,n}};function P(e,t,n=e,r){if(t===A)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=T(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=P(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);M.currentNode=r;let i=M.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new F(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ze(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=M.nextNode(),a++)}return M.currentNode=C,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},F=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),T(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==A&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Fe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=N.createElement(Ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new N(e)),t}k(t){E(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(w()),this.O(w()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=je(e).nextSibling;je(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=P(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==A,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=P(this,r[n+o],t,o),s===A&&(s=this._$AH[o]),a||=!T(s)||s!==this._$AH[o],s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Je=class extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Ye=class extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},Xe=class extends I{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??j)===A)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ze=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}},Qe={M:Ne,P:x,A:S,C:1,L:Ke,R:qe,D:Fe,V:P,I:F,H:I,N:Ye,U:Xe,B:Je,F:Ze},$e=y.litHtmlPolyfillSupport;$e?.(N,F),(y.litHtmlVersions??=[]).push(`3.3.3`);var et=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new F(t.insertBefore(w(),e),e,void 0,n??{})}return i._$AI(e),i},tt=globalThis,L=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};L._$litElement$=!0,L.finalized=!0,tt.litElementHydrateSupport?.({LitElement:L});var nt=tt.litElementPolyfillSupport;nt?.({LitElement:L}),(tt.litElementVersions??=[]).push(`4.2.2`);var R={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rt=e=>(...t)=>({_$litDirective$:e,values:t}),it=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},z=class extends it{constructor(e){if(super(e),this.it=j,e.type!==R.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===A)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};z.directiveName=`unsafeHTML`,z.resultType=1;var B=class extends z{};B.directiveName=`unsafeSVG`,B.resultType=2;var at=rt(B),ot=new Map(Object.entries({check:`<path d="M5 12l5 5l10 -10"/>`,minus:`<path d="M5 12l14 0"/>`,x:`<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>`,"chevron-down":`<path d="M6 9l6 6l6 -6"/>`,"chevron-up":`<path d="M6 15l6 -6l6 6"/>`,"chevron-left":`<path d="M15 6l-6 6l6 6"/>`,"chevron-right":`<path d="M9 6l6 6l-6 6"/>`,selector:`<path d="M8 9l4 -4l4 4"/><path d="M16 15l-4 4l-4 -4"/>`,"info-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/>`,"circle-check":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/>`,"alert-triangle":`<path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0"/><path d="M12 16h.01"/>`,"alert-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/>`,user:`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>`,plus:`<path d="M12 5l0 14"/><path d="M5 12l14 0"/>`,search:`<path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>`,filter:`<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227"/>`,"adjustments-horizontal":`<path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/>`,settings:`<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>`,dots:`<path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>`,"dots-vertical":`<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>`,"menu-2":`<path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/>`,home:`<path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>`,"layout-dashboard":`<path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"/><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"/><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"/><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"/>`,school:`<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/>`,book:`<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>`,books:`<path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/>`,notebook:`<path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"/><path d="M13 8l2 0"/><path d="M13 12l2 0"/>`,certificate:`<path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"/><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"/><path d="M6 9l12 0"/><path d="M6 12l3 0"/><path d="M6 15l2 0"/>`,"clipboard-list":`<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"/><path d="M9 12l.01 0"/><path d="M13 12l2 0"/><path d="M9 16l.01 0"/><path d="M13 16l2 0"/>`,calendar:`<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M11 15h1"/><path d="M12 15v3"/>`,"calendar-event":`<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"/><path d="M16 3l0 4"/><path d="M8 3l0 4"/><path d="M4 11l16 0"/><path d="M8 15h2v2h-2l0 -2"/>`,clock:`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 7v5l3 3"/>`,bell:`<path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/><path d="M9 17v1a3 3 0 0 0 6 0v-1"/>`,mail:`<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/>`,"message-circle":`<path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"/>`,send:`<path d="M10 14l11 -11"/><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>`,phone:`<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>`,users:`<path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>`,"user-plus":`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M16 19h6"/><path d="M19 16v6"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4"/>`,"user-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/>`,"id-badge-2":`<path d="M7 12h3v4h-3l0 -4"/><path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"/><path d="M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3"/><path d="M14 16h2"/><path d="M14 12h4"/>`,lock:`<path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/>`,"lock-open":`<path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M8 11v-5a4 4 0 0 1 8 0"/>`,key:`<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0"/><path d="M15 9h.01"/>`,"shield-check":`<path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"/><path d="M15 19l2 2l4 -4"/>`,logout:`<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M9 12h12l-3 -3"/><path d="M18 15l3 -3"/>`,login:`<path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M21 12h-13l3 -3"/><path d="M11 15l-3 -3"/>`,edit:`<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415"/><path d="M16 5l3 3"/>`,pencil:`<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>`,trash:`<path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>`,copy:`<path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>`,download:`<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>`,upload:`<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/>`,share:`<path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M8.7 10.7l6.6 -3.4"/><path d="M8.7 13.3l6.6 3.4"/>`,link:`<path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>`,"external-link":`<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/>`,paperclip:`<path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/>`,file:`<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/>`,"file-text":`<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/><path d="M9 9l1 0"/><path d="M9 13l6 0"/><path d="M9 17l6 0"/>`,folder:`<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"/>`,photo:`<path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>`,video:`<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4"/><path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8"/>`,microphone:`<path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M8 21l8 0"/><path d="M12 17l0 4"/>`,"player-play":`<path d="M7 4v16l13 -8l-13 -8"/>`,"player-pause":`<path d="M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12"/><path d="M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12"/>`,star:`<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245"/>`,heart:`<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>`,bookmark:`<path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4"/>`,flag:`<path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9"/><path d="M5 21v-7"/>`,tag:`<path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3"/>`,eye:`<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>`,"eye-off":`<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/>`,refresh:`<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>`,"arrow-left":`<path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/>`,"arrow-right":`<path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/>`,"arrow-up":`<path d="M12 5l0 14"/><path d="M18 11l-6 -6"/><path d="M6 11l6 -6"/>`,"arrow-down":`<path d="M12 5l0 14"/><path d="M18 13l-6 6"/><path d="M6 13l6 6"/>`,sun:`<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>`,moon:`<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"/>`,world:`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/>`,"map-pin":`<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"/>`,"chart-bar":`<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6"/><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10"/><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14"/><path d="M4 20h14"/>`,"chart-pie":`<path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"/><path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"/>`,trophy:`<path d="M8 21l8 0"/><path d="M12 17l0 4"/><path d="M7 4l10 0"/><path d="M17 4v8a5 5 0 0 1 -10 0v-8"/><path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>`,"help-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 16v.01"/><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>`,"question-mark":`<path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"/><path d="M12 19l0 .01"/>`,bulb:`<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/>`,sparkles:`<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6"/>`,"cloud-upload":`<path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"/><path d="M9 15l3 -3l3 3"/><path d="M12 12l0 9"/>`,printer:`<path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"/><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"/><path d="M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -4"/>`,"credit-card":`<path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8"/><path d="M3 10l18 0"/><path d="M7 15l.01 0"/><path d="M11 15l2 0"/>`,wallet:`<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"/><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"/>`})),st=new Set;function ct(){return[...ot.keys()]}f(`ep-icon`,class extends L{static properties={name:{reflect:!0},label:{}};static styles=m`
    :host {
      display: inline-flex;
      flex: none;
      width: 1em;
      height: 1em;
      color: inherit;
      vertical-align: -0.125em;
    }

    :host([hidden]) {
      display: none;
    }

    svg {
      width: 100%;
      height: 100%;
      stroke-width: var(--ep-icon-stroke-width, 2);
    }
  `;constructor(){super(),this.name=``,this.label=``}connectedCallback(){super.connectedCallback(),st.add(this)}disconnectedCallback(){super.disconnectedCallback(),st.delete(this)}updated(){this.label?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}render(){return k`<svg
      part="svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
      aria-hidden="true"
    >
      ${Ue`${at(ot.get(this.name)??``)}`}
    </svg>`}});var V=m`
  :host {
    box-sizing: border-box;
    font-family: var(--ep-font-family-sans);
    -webkit-font-smoothing: antialiased;
  }

  :host([hidden]) {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`,H=m`
  outline: var(--ep-border-width-thick) solid var(--ep-color-border-focus);
  outline-offset: 2px;
`;m`
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
`;var U=m`
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--ep-space-100);
  }

  .label {
    font-size: var(--ep-font-size-200);
    font-weight: var(--ep-font-weight-medium);
    line-height: var(--ep-font-line-height-snug);
    color: var(--ep-color-text-primary);
  }

  .required {
    color: var(--ep-color-text-danger);
    margin-inline-start: 2px;
  }

  .helper,
  .error {
    margin: 0;
    font-size: var(--ep-font-size-100);
    line-height: var(--ep-font-line-height-snug);
    color: var(--ep-color-text-secondary);
  }

  .error {
    display: flex;
    align-items: center;
    gap: var(--ep-space-50);
    color: var(--ep-color-text-danger);
  }

  .error ep-icon {
    flex: none;
    font-size: 14px;
  }

  :host([disabled]) .label {
    color: var(--ep-color-text-disabled);
  }
`,lt=m`
  :host {
    display: inline-flex;
    vertical-align: middle;
    --_height: var(--ep-size-control-md);
    --_padding: var(--ep-space-200);
    --_font-size: var(--ep-font-size-200);
    --_icon-size: var(--ep-size-icon-md);
    --_bg: var(--ep-color-interactive-primary-default);
    --_bg-hover: var(--ep-color-interactive-primary-hover);
    --_bg-active: var(--ep-color-interactive-primary-active);
    --_fg: var(--ep-color-text-on-primary);
    --_border: transparent;
  }

  :host([full-width]) {
    display: flex;
  }

  :host([size='sm']) {
    --_height: var(--ep-size-control-sm);
    --_padding: var(--ep-space-150);
    --_icon-size: var(--ep-size-icon-sm);
  }

  :host([size='lg']) {
    --_height: var(--ep-size-control-lg);
    --_padding: var(--ep-space-300);
    --_font-size: var(--ep-font-size-300);
    --_icon-size: var(--ep-size-icon-lg);
  }

  :host([variant='secondary']) {
    --_bg: var(--ep-color-interactive-secondary-default);
    --_bg-hover: var(--ep-color-interactive-secondary-hover);
    --_bg-active: var(--ep-color-interactive-secondary-active);
    --_fg: var(--ep-color-text-primary);
    --_border: var(--ep-color-border-strong);
  }

  :host([variant='tertiary']) {
    --_bg: var(--ep-color-interactive-ghost-default);
    --_bg-hover: var(--ep-color-accent-subtle);
    --_bg-active: var(--ep-color-accent-subtle);
    --_fg: var(--ep-color-text-link);
    --_border: var(--ep-color-interactive-primary-default);
  }

  :host([variant='ghost']) {
    --_bg: var(--ep-color-interactive-ghost-default);
    --_bg-hover: var(--ep-color-interactive-ghost-hover);
    --_bg-active: var(--ep-color-interactive-ghost-active);
    --_fg: var(--ep-color-text-primary);
  }

  :host([variant='danger']) {
    --_bg: var(--ep-color-interactive-danger-default);
    --_bg-hover: var(--ep-color-interactive-danger-hover);
    --_bg-active: var(--ep-color-interactive-danger-active);
    --_fg: var(--ep-color-text-on-color);
  }

  .button {
    position: relative;
    display: inline-flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: var(--ep-space-100);
    min-height: var(--_height);
    padding: 0 var(--_padding);
    border: var(--ep-border-width-thin) solid var(--_border);
    border-radius: var(--ep-radius-control);
    background: var(--_bg);
    color: var(--_fg);
    font: inherit;
    font-size: var(--_font-size);
    font-weight: var(--ep-font-weight-semibold);
    line-height: var(--ep-font-line-height-tight);
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    transition:
      background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard),
      border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
  }

  /* Extends the hit area of buttons shorter than the minimum target, without changing their size. */
  .button::before {
    content: '';
    position: absolute;
    inset: min(0px, calc((var(--_height) - var(--ep-size-target-min)) / 2));
  }

  .button:hover {
    background: var(--_bg-hover);
  }

  .button:active {
    background: var(--_bg-active);
  }

  .button:focus-visible {
    ${H}
  }

  /* Disabled keeps each variant's shape: filled buttons stay filled, outlined stay outlined, ghost stays clear. */
  .button:disabled {
    background: var(--ep-color-interactive-disabled);
    border-color: transparent;
    color: var(--ep-color-text-disabled);
    cursor: not-allowed;
  }

  :host(:is([variant='secondary'], [variant='tertiary'])) .button:disabled {
    background: transparent;
    border-color: var(--ep-color-border-default);
  }

  :host([variant='ghost']) .button:disabled {
    background: transparent;
  }

  ::slotted(ep-icon),
  ep-icon {
    font-size: var(--_icon-size);
  }

  @media (forced-colors: active) {
    .button {
      border-color: ButtonText;
    }

    .button:disabled {
      border-color: GrayText;
      color: GrayText;
    }
  }
`;f(`ep-button`,class extends L{static formAssociated=!0;static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={variant:{reflect:!0},size:{reflect:!0},type:{},disabled:{type:Boolean,reflect:!0},fullWidth:{type:Boolean,reflect:!0,attribute:`full-width`}};static styles=[V,lt];#e=this.attachInternals();constructor(){super(),this.variant=`primary`,this.size=`md`,this.type=`button`,this.disabled=!1,this.fullWidth=!1}#t(){let e=this.#e.form;!this.disabled&&e&&(this.type===`submit`&&e.requestSubmit(),this.type===`reset`&&e.reset())}render(){return k`<button part="base" class="button" type="button" ?disabled=${this.disabled} @click=${this.#t}>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </button>`}}),f(`ep-icon-button`,class extends L{static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={icon:{reflect:!0},label:{},variant:{reflect:!0},size:{reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[V,lt,m`
      .button {
        width: var(--_height);
        padding: 0;
      }
    `];constructor(){super(),this.icon=``,this.label=``,this.variant=`ghost`,this.size=`md`,this.disabled=!1}render(){return k`<button part="base" class="button" type="button" aria-label=${this.label} ?disabled=${this.disabled}>
      <ep-icon name=${this.icon}></ep-icon>
    </button>`}});var{I:ut}=Qe,dt=e=>e.strings===void 0,ft={},pt=(e,t=ft)=>e._$AH=t,W=rt(class extends it{constructor(e){if(super(e),e.type!==R.PROPERTY&&e.type!==R.ATTRIBUTE&&e.type!==R.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!dt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===A||t===j)return t;let n=e.element,r=e.name;if(e.type===R.PROPERTY){if(t===n[r])return A}else if(e.type===R.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return A}else if(e.type===R.ATTRIBUTE&&n.getAttribute(r)===t+``)return A;return pt(e),t}}),G=m`
  :host {
    display: block;
    --_height: var(--ep-size-control-md);
    --_padding: var(--ep-space-150);
    /* 16px on touch screens at every size, so iOS Safari doesn't zoom the page on focus. */
    --_font-size: var(--ep-font-size-input);
  }

  :host([size='sm']) {
    --_height: var(--ep-size-control-sm);
    --_padding: var(--ep-space-100);
  }

  :host([size='lg']) {
    --_height: var(--ep-size-control-lg);
    --_padding: var(--ep-space-200);
    --_font-size: var(--ep-font-size-300);
  }

  .box {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--ep-space-100);
    min-height: var(--_height);
    padding: 0 var(--_padding);
    border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
    border-radius: var(--ep-radius-control);
    background: var(--ep-color-surface-default);
    color: var(--ep-color-text-primary);
    transition: border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
  }

  .box:hover {
    border-color: var(--ep-color-text-secondary);
  }

  .box:focus-within {
    ${H}
    outline-offset: 0;
    border-color: var(--ep-color-border-focus);
  }

  .box.invalid {
    border-color: var(--ep-color-border-danger);
  }

  .box.disabled {
    border-color: var(--ep-color-border-default);
    background: var(--ep-color-interactive-disabled);
    color: var(--ep-color-text-disabled);
    cursor: not-allowed;
  }

  .control {
    flex: 1;
    min-width: 0;
    align-self: stretch;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: var(--_font-size);
    line-height: var(--ep-font-line-height-normal);
  }

  .control::placeholder {
    color: var(--ep-color-text-secondary);
    opacity: 1;
  }

  .control:disabled {
    cursor: not-allowed;
  }

  .box ::slotted(ep-icon),
  .box > ep-icon {
    font-size: var(--ep-size-icon-md);
    color: var(--ep-color-text-secondary);
  }

  @media (forced-colors: active) {
    .box {
      border-color: FieldText;
    }

    .box.disabled {
      border-color: GrayText;
    }
  }
`;f(`ep-text-field`,class extends L{static formAssociated=!0;static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={label:{},value:{},name:{reflect:!0},type:{},placeholder:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},size:{reflect:!0},autocomplete:{},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0}};static styles=[V,U,G];#e=this.attachInternals();#t=``;constructor(){super(),this.label=``,this.value=``,this.name=``,this.type=`text`,this.placeholder=``,this.helperText=``,this.errorText=``,this.size=`md`,this.autocomplete=``,this.disabled=!1,this.readonly=!1,this.required=!1}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``}get form(){return this.#e.form}get validity(){return this.#e.validity}checkValidity(){return this.#e.checkValidity()}formResetCallback(){this.value=this.#t}formDisabledCallback(e){this.disabled=e}updated(){this.#e.setFormValue(this.value);let e=this.renderRoot.querySelector(`input`);this.errorText?this.#e.setValidity({customError:!0},this.errorText,e):e.validity.valid?this.#e.setValidity({}):this.#e.setValidity(e.validity,e.validationMessage,e)}#n(e){this.value=e.target.value}render(){let e=!!this.errorText,t=[this.helperText&&`helper`,e&&`error`].filter(Boolean).join(` `);return k`<div class="field">
      ${this.label?k`<label class="label" for="input"
            >${this.label}${this.required?k`<span class="required" aria-hidden="true">*</span>`:j}</label
          >`:j}
      <div part="base" class="box ${e?`invalid`:``} ${this.disabled?`disabled`:``}">
        <slot name="prefix"></slot>
        <input
          part="input"
          id="input"
          class="control"
          type=${this.type}
          name=${this.name||j}
          .value=${W(this.value)}
          placeholder=${this.placeholder||j}
          autocomplete=${this.autocomplete||j}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${e?`true`:j}
          aria-describedby=${t||j}
          @input=${this.#n}
        />
        <slot name="suffix"></slot>
      </div>
      ${this.helperText?k`<p class="helper" id="helper">${this.helperText}</p>`:j}
      ${e?k`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:j}
    </div>`}}),f(`ep-textarea`,class extends L{static formAssociated=!0;static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={label:{},value:{},name:{reflect:!0},placeholder:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},rows:{type:Number},maxlength:{type:Number},resize:{reflect:!0},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0}};static styles=[V,U,G,m`
      .box {
        align-items: stretch;
        padding: var(--ep-space-100) var(--_padding);
      }

      .control {
        resize: vertical;
      }

      :host([resize='none']) .control {
        resize: none;
      }

      .footer {
        display: flex;
        gap: var(--ep-space-200);
        justify-content: space-between;
      }

      .count {
        margin-inline-start: auto;
        font-size: var(--ep-font-size-100);
        color: var(--ep-color-text-secondary);
        font-variant-numeric: tabular-nums;
      }
    `];#e=this.attachInternals();#t=``;constructor(){super(),this.label=``,this.value=``,this.name=``,this.placeholder=``,this.helperText=``,this.errorText=``,this.rows=4,this.maxlength=void 0,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.required=!1}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``}get form(){return this.#e.form}formResetCallback(){this.value=this.#t}formDisabledCallback(e){this.disabled=e}updated(){this.#e.setFormValue(this.value);let e=this.renderRoot.querySelector(`textarea`);this.errorText?this.#e.setValidity({customError:!0},this.errorText,e):e.validity.valid?this.#e.setValidity({}):this.#e.setValidity(e.validity,e.validationMessage,e)}#n(e){this.value=e.target.value}render(){let e=!!this.errorText,t=e?`error`:this.helperText?`helper`:``,n=this.helperText||e||this.maxlength;return k`<div class="field">
      ${this.label?k`<label class="label" for="textarea"
            >${this.label}${this.required?k`<span class="required" aria-hidden="true">*</span>`:j}</label
          >`:j}
      <div part="base" class="box ${e?`invalid`:``} ${this.disabled?`disabled`:``}">
        <textarea
          part="textarea"
          id="textarea"
          class="control"
          name=${this.name||j}
          rows=${this.rows}
          maxlength=${this.maxlength??j}
          .value=${W(this.value)}
          placeholder=${this.placeholder||j}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${e?`true`:j}
          aria-describedby=${t||j}
          @input=${this.#n}
        ></textarea>
      </div>
      ${n?k`<div class="footer">
            ${e?k`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:this.helperText?k`<p class="helper" id="helper">${this.helperText}</p>`:j}
            ${this.maxlength?k`<span class="count" aria-hidden="true">${this.value.length}/${this.maxlength}</span>`:j}
          </div>`:j}
    </div>`}}),f(`ep-select`,class extends L{static formAssociated=!0;static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={label:{},value:{},name:{reflect:!0},placeholder:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},size:{reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},_options:{state:!0}};static styles=[V,U,G,m`
      .control {
        appearance: none;
        padding-inline-end: 28px;
        margin-inline-end: -28px;
        cursor: pointer;
      }

      .chevron {
        pointer-events: none;
      }

      /* An empty select shows its placeholder in the placeholder color, like a text field. */
      .control.placeholder {
        color: var(--ep-color-text-secondary);
      }

      .control option {
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
      }

      .hidden-slot {
        display: none;
      }
    `];#e=this.attachInternals();#t=``;#n=new MutationObserver(()=>this.#r());constructor(){super(),this.label=``,this.value=``,this.name=``,this.placeholder=``,this.helperText=``,this.errorText=``,this.size=`md`,this.disabled=!1,this.required=!1,this._options=[]}connectedCallback(){super.connectedCallback(),this.#r(),this.#n.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.#n.disconnect()}#r(){let e=[...this.querySelectorAll(`option`)];if(this._options=e.map(e=>({value:e.value,label:e.textContent??``,disabled:e.disabled})),!this.hasUpdated){let t=e.find(e=>e.hasAttribute(`selected`));!this.value&&t?this.value=t.value:!this.value&&!this.placeholder&&e[0]&&(this.value=e[0].value),this.#t=this.value}}get form(){return this.#e.form}formResetCallback(){this.value=this.#t}formDisabledCallback(e){this.disabled=e}updated(){let e=this.renderRoot.querySelector(`select`);e.value=this.value,this.#e.setFormValue(this.value),this.errorText?this.#e.setValidity({customError:!0},this.errorText,e):this.required&&!this.value?this.#e.setValidity({valueMissing:!0},e.validationMessage||`Select an option.`,e):this.#e.setValidity({})}#i(e){this.value=e.target.value,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=!!this.errorText,t=[this.helperText&&`helper`,e&&`error`].filter(Boolean).join(` `);return k`<div class="field">
      ${this.label?k`<label class="label" for="select"
            >${this.label}${this.required?k`<span class="required" aria-hidden="true">*</span>`:j}</label
          >`:j}
      <div part="base" class="box ${e?`invalid`:``} ${this.disabled?`disabled`:``}">
        <select
          part="select"
          id="select"
          class="control ${this.placeholder&&!this.value?`placeholder`:``}"
          name=${this.name||j}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${e?`true`:j}
          aria-describedby=${t||j}
          @change=${this.#i}
        >
          ${this.placeholder?k`<option value="" disabled hidden>${this.placeholder}</option>`:j}
          ${this._options.map(e=>k`<option value=${e.value} ?disabled=${e.disabled} ?selected=${e.value===this.value}>${e.label}</option>`)}
        </select>
        <ep-icon class="chevron" name="chevron-down"></ep-icon>
      </div>
      ${this.helperText?k`<p class="helper" id="helper">${this.helperText}</p>`:j}
      ${e?k`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:j}
      <slot class="hidden-slot"></slot>
    </div>`}}),f(`ep-checkbox`,class extends L{static formAssociated=!0;static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},name:{reflect:!0},value:{},helperText:{attribute:`helper-text`}};static styles=[V,m`
      :host {
        display: inline-flex;
      }

      .base {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--ep-space-100);
        font-size: var(--ep-font-size-200);
        line-height: 20px;
        color: var(--ep-color-text-primary);
        cursor: pointer;
        /* Rows grow to the minimum touch target; the 20px line stays centered in it. */
        padding-block: max(0px, calc((var(--ep-size-target-min) - 20px) / 2));
      }

      .control {
        position: relative;
        display: inline-flex;
        flex: none;
        margin-block: 2px;
      }

      input {
        appearance: none;
        width: 16px;
        height: 16px;
        margin: 0;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
        border-radius: var(--ep-radius-indicator);
        background: var(--ep-color-surface-default);
        cursor: inherit;
        transition: background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      input:hover {
        border-color: var(--ep-color-text-secondary);
      }

      input:checked,
      input:indeterminate {
        border-color: var(--ep-color-accent-default);
        background: var(--ep-color-interactive-primary-default);
      }

      input:focus-visible {
        ${H}
      }

      .mark {
        position: absolute;
        inset: 0;
        margin: auto;
        font-size: 12px;
        color: var(--ep-color-text-on-primary);
        pointer-events: none;
        --ep-icon-stroke-width: 3;
      }

      .text {
        display: flex;
        flex-direction: column;
      }

      .helper {
        font-size: var(--ep-font-size-100);
        line-height: var(--ep-font-line-height-snug);
        color: var(--ep-color-text-secondary);
      }

      :host([disabled]) .base {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      :host([disabled]) input {
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      :host([disabled]) .mark {
        color: var(--ep-color-text-disabled);
      }

      @media (forced-colors: active) {
        input {
          border-color: CanvasText;
        }

        input:checked,
        input:indeterminate {
          background: Highlight;
          border-color: Highlight;
        }

        .mark {
          color: HighlightText;
        }
      }
    `];#e=this.attachInternals();#t=!1;constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.name=``,this.value=`on`,this.helperText=``}connectedCallback(){super.connectedCallback(),this.#t=this.hasAttribute(`checked`)}get form(){return this.#e.form}formResetCallback(){this.checked=this.#t}formDisabledCallback(e){this.disabled=e}updated(){this.#e.setFormValue(this.checked?this.value:null);let e=this.renderRoot.querySelector(`input`);this.required&&!this.checked?this.#e.setValidity({valueMissing:!0},e.validationMessage||`Check this box to continue.`,e):this.#e.setValidity({})}#n(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.indeterminate?`minus`:this.checked?`check`:``;return k`<label part="base" class="base">
      <span class="control">
        <input
          part="control"
          type="checkbox"
          .checked=${W(this.checked)}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-describedby=${this.helperText?`helper`:j}
          @change=${this.#n}
        />
        ${e?k`<ep-icon class="mark" name=${e}></ep-icon>`:j}
      </span>
      <span class="text">
        <slot></slot>
        ${this.helperText?k`<span class="helper" id="helper">${this.helperText}</span>`:j}
      </span>
    </label>`}});var mt=class extends L{static properties={value:{reflect:!0},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[V,m`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--ep-space-100);
        font-size: var(--ep-font-size-200);
        line-height: 20px;
        color: var(--ep-color-text-primary);
        cursor: pointer;
        outline: none;
        /* Rows grow to the minimum touch target; the 20px line stays centered in it. */
        padding-block: max(0px, calc((var(--ep-size-target-min) - 20px) / 2));
      }

      .control {
        position: relative;
        flex: none;
        width: 16px;
        height: 16px;
        margin-block: 2px;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-default);
        transition: border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      :host(:hover) .control {
        border-color: var(--ep-color-text-secondary);
      }

      :host([checked]) .control {
        border: 5px solid var(--ep-color-interactive-primary-default);
        box-shadow: 0 0 0 var(--ep-border-width-thin) var(--ep-color-accent-default);
      }

      :host(:focus-visible) .control {
        ${H}
      }

      :host([disabled]) {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      :host([disabled]) .control {
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      :host([disabled][checked]) .control {
        border-color: var(--ep-color-text-disabled);
        box-shadow: none;
      }

      @media (forced-colors: active) {
        .control {
          border-color: CanvasText;
        }

        :host([checked]) .control {
          border-color: Highlight;
        }

        :host([disabled]) .control {
          border-color: GrayText;
        }
      }
    `];#e=this.attachInternals();constructor(){super(),this.value=``,this.checked=!1,this.disabled=!1,this.#e.role=`radio`}updated(){this.#e.ariaChecked=String(this.checked),this.#e.ariaDisabled=String(this.disabled)}render(){return k`<span part="control" class="control"></span><slot></slot>`}},ht=class extends L{static formAssociated=!0;static properties={label:{},name:{reflect:!0},value:{reflect:!0},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},orientation:{reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0}};static styles=[V,U,m`
      :host {
        display: block;
      }

      fieldset {
        margin: 0;
        padding: 0;
        border: 0;
        min-width: 0;
      }

      .options {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-150);
      }

      :host([orientation='horizontal']) .options {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--ep-space-300);
      }
    `];#e=this.attachInternals();#t=``;constructor(){super(),this.label=``,this.name=``,this.value=``,this.helperText=``,this.errorText=``,this.orientation=`vertical`,this.disabled=!1,this.required=!1,this.#e.role=`radiogroup`,this.addEventListener(`click`,this.#a),this.addEventListener(`keydown`,this.#o)}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``}get form(){return this.#e.form}formResetCallback(){this.value=this.#t}formDisabledCallback(e){this.disabled=e}get#n(){return[...this.querySelectorAll(`ep-radio`)]}#r=e=>!e.disabled&&!this.disabled;#i(e,t){if(!this.#r(e))return;let n=e.value!==this.value;this.value=e.value,t&&e.focus(),n&&this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}#a=e=>{let t=e.target.closest(`ep-radio`);t&&this.#i(t,!0)};#o=e=>{let t=e.target.closest(`ep-radio`);if(!t)return;if(e.key===` `){e.preventDefault(),this.#i(t,!1);return}let n={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(!n)return;e.preventDefault();let r=this.#n.filter(this.#r),i=r[(r.indexOf(t)+n+r.length)%r.length];i&&this.#i(i,!0)};updated(){let e=this.#n,t=e.filter(this.#r),n=e.find(e=>e.value===this.value),r=n&&this.#r(n)?n:t[0];for(let t of e)t.checked=t===n,t.tabIndex=t===r?0:-1,this.disabled&&t.setAttribute(`aria-disabled`,`true`);this.#e.ariaLabel=this.label,this.#e.ariaRequired=String(this.required),this.#e.ariaInvalid=String(!!this.errorText),this.#e.setFormValue(this.value||null),this.errorText?this.#e.setValidity({customError:!0},this.errorText):this.required&&!this.value?this.#e.setValidity({valueMissing:!0},`Select an option.`):this.#e.setValidity({})}render(){let e=!!this.errorText;return k`<div class="field">
      ${this.label?k`<span class="label" aria-hidden="true"
            >${this.label}${this.required?k`<span class="required">*</span>`:j}</span
          >`:j}
      <div part="options" class="options">
        <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </div>
      ${this.helperText&&!e?k`<p class="helper">${this.helperText}</p>`:j}
      ${e?k`<p class="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:j}
    </div>`}};f(`ep-radio`,mt),f(`ep-radio-group`,ht),f(`ep-switch`,class extends L{static formAssociated=!0;static shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0};static properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},name:{reflect:!0},value:{},helperText:{attribute:`helper-text`}};static styles=[V,m`
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: var(--ep-space-25);
      }

      .base {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--ep-space-150);
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        color: var(--ep-color-text-primary);
        font: inherit;
        font-size: var(--ep-font-size-200);
        line-height: 20px;
        text-align: start;
        cursor: pointer;
        /* Rows grow to the minimum touch target; the 20px line stays centered in it. */
        padding-block: max(0px, calc((var(--ep-size-target-min) - 20px) / 2));
      }

      .track {
        position: relative;
        flex: none;
        width: 36px;
        height: 20px;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-default);
        transition: background-color var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-border-strong);
        transition: transform var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      .base[aria-checked='true'] .track {
        border-color: var(--ep-color-accent-default);
        background: var(--ep-color-interactive-primary-default);
      }

      .base[aria-checked='true'] .thumb {
        transform: translateX(16px);
        background: var(--ep-color-text-on-primary);
      }

      .base:hover .track {
        border-color: var(--ep-color-text-secondary);
      }

      .base[aria-checked='true']:hover .track {
        background: var(--ep-color-interactive-primary-hover);
        border-color: var(--ep-color-accent-default);
      }

      .base:focus-visible {
        outline: none;
      }

      .base:focus-visible .track {
        ${H}
      }

      .helper {
        padding-inline-start: 48px;
        font-size: var(--ep-font-size-100);
        line-height: var(--ep-font-line-height-snug);
        color: var(--ep-color-text-secondary);
      }

      .base:disabled {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      .base:disabled .track {
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      .base:disabled .thumb {
        background: var(--ep-color-text-disabled);
      }

      @media (forced-colors: active) {
        .track {
          border-color: CanvasText;
        }

        .thumb {
          background: CanvasText;
        }

        .base[aria-checked='true'] .track {
          background: Highlight;
          border-color: Highlight;
        }

        .base[aria-checked='true'] .thumb {
          background: HighlightText;
        }

        .base:disabled .track,
        .base:disabled .thumb {
          border-color: GrayText;
          background: GrayText;
        }
      }
    `];#e=this.attachInternals();#t=!1;constructor(){super(),this.checked=!1,this.disabled=!1,this.name=``,this.value=`on`,this.helperText=``}connectedCallback(){super.connectedCallback(),this.#t=this.hasAttribute(`checked`)}get form(){return this.#e.form}formResetCallback(){this.checked=this.#t}formDisabledCallback(e){this.disabled=e}updated(){this.#e.setFormValue(this.checked?this.value:null)}#n(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})))}render(){return k`<button
      part="base"
      class="base"
      type="button"
      role="switch"
      aria-checked=${String(this.checked)}
      aria-describedby=${this.helperText?`helper`:j}
      ?disabled=${this.disabled}
      @click=${this.#n}
    >
      <span part="track" class="track"><span part="thumb" class="thumb"></span></span>
      <slot></slot>
    </button>
    ${this.helperText?k`<span class="helper" id="helper">${this.helperText}</span>`:j}`}});var gt=m`
  :host {
    --_bg: var(--ep-color-background-subtle);
    --_fg: var(--ep-color-text-secondary);
    --_border: var(--ep-color-border-default);
  }

  :host([variant='accent']) {
    --_bg: var(--ep-color-accent-subtle);
    --_fg: var(--ep-color-text-link);
    --_border: var(--ep-color-accent-default);
  }

  :host([variant='info']) {
    --_bg: var(--ep-color-feedback-info-background);
    --_fg: var(--ep-color-text-info);
    --_border: var(--ep-color-feedback-info-border);
  }

  :host([variant='success']) {
    --_bg: var(--ep-color-feedback-success-background);
    --_fg: var(--ep-color-text-success);
    --_border: var(--ep-color-feedback-success-border);
  }

  :host([variant='warning']) {
    --_bg: var(--ep-color-feedback-warning-background);
    --_fg: var(--ep-color-text-warning);
    --_border: var(--ep-color-feedback-warning-border);
  }

  :host([variant='danger']) {
    --_bg: var(--ep-color-feedback-danger-background);
    --_fg: var(--ep-color-text-danger);
    --_border: var(--ep-color-feedback-danger-border);
  }
`;f(`ep-badge`,class extends L{static properties={variant:{reflect:!0},dot:{type:Boolean,reflect:!0}};static styles=[V,gt,m`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      .base {
        display: inline-flex;
        align-items: center;
        gap: var(--ep-space-50);
        min-width: 20px;
        height: 20px;
        padding: 0 var(--ep-space-100);
        border-radius: var(--ep-radius-indicator);
        background: var(--_bg);
        color: var(--_fg);
        font-size: var(--ep-font-size-100);
        font-weight: var(--ep-font-weight-semibold);
        line-height: 1;
        white-space: nowrap;
        justify-content: center;
        font-variant-numeric: tabular-nums;
      }

      .dot {
        width: 6px;
        height: 6px;
        border-radius: var(--ep-radius-round);
        background: var(--_border);
      }

      ::slotted(ep-icon) {
        font-size: 12px;
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
        }

        .dot {
          background: CanvasText;
        }
      }
    `];constructor(){super(),this.variant=`neutral`,this.dot=!1}render(){return k`<span part="base" class="base">
      ${this.dot?k`<span class="dot"></span>`:k`<slot name="prefix"></slot>`}
      <slot></slot>
    </span>`}}),f(`ep-tag`,class extends L{static properties={variant:{reflect:!0},size:{reflect:!0},removable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[V,gt,m`
      :host {
        display: inline-flex;
        vertical-align: middle;
        --_height: 28px;
        --_font-size: var(--ep-font-size-200);
      }

      :host([size='sm']) {
        --_height: 24px;
        --_font-size: var(--ep-font-size-100);
      }

      .base {
        display: inline-flex;
        align-items: center;
        gap: var(--ep-space-50);
        height: var(--_height);
        padding: 0 var(--ep-space-100);
        border: var(--ep-border-width-thin) solid var(--_border);
        border-radius: var(--ep-radius-indicator);
        background: var(--_bg);
        color: var(--_fg);
        font-size: var(--_font-size);
        font-weight: var(--ep-font-weight-medium);
        line-height: 1;
        white-space: nowrap;
      }

      :host([removable]) .base {
        padding-inline-end: var(--ep-space-25);
      }

      .remove {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: calc(var(--_height) - 8px);
        height: calc(var(--_height) - 8px);
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: var(--ep-radius-indicator);
        background: transparent;
        color: inherit;
        font-size: 14px;
        cursor: pointer;
      }

      /* The button stays small to fit the tag; its hit area grows to the minimum target. */
      .remove::before {
        content: '';
        position: absolute;
        inset: min(0px, calc((var(--_height) - 8px - var(--ep-size-target-min)) / 2));
      }

      .remove:hover {
        background: var(--ep-color-interactive-ghost-hover);
        color: var(--ep-color-text-primary);
      }

      .remove:focus-visible {
        ${H}
        outline-offset: 0;
      }

      ::slotted(ep-icon) {
        font-size: 14px;
      }

      :host([disabled]) .base {
        background: var(--ep-color-interactive-disabled);
        border-color: var(--ep-color-border-default);
        color: var(--ep-color-text-disabled);
      }

      :host([disabled]) .remove {
        cursor: not-allowed;
        background: transparent;
        color: inherit;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `];constructor(){super(),this.variant=`neutral`,this.size=`md`,this.removable=!1,this.disabled=!1}#e(){this.dispatchEvent(new CustomEvent(`ep-remove`,{bubbles:!0,composed:!0}))}render(){let e=this.textContent?.trim()??``;return k`<span part="base" class="base">
      <slot name="prefix"></slot>
      <slot></slot>
      ${this.removable?k`<button
            part="remove"
            class="remove"
            type="button"
            aria-label=${`Remove ${e}`}
            ?disabled=${this.disabled}
            @click=${this.#e}
          >
            <ep-icon name="x"></ep-icon>
          </button>`:j}
    </span>`}}),f(`ep-avatar`,class extends L{static properties={name:{},src:{},size:{reflect:!0},_failed:{state:!0}};static styles=[V,m`
      :host {
        display: inline-flex;
        vertical-align: middle;
        --_size: 40px;
        --_font-size: var(--ep-font-size-200);
      }

      :host([size='xs']) {
        --_size: 24px;
        --_font-size: 10px;
      }

      :host([size='sm']) {
        --_size: 32px;
        --_font-size: var(--ep-font-size-100);
      }

      :host([size='lg']) {
        --_size: 56px;
        --_font-size: var(--ep-font-size-500);
      }

      :host([size='xl']) {
        --_size: 80px;
        --_font-size: var(--ep-font-size-700);
      }

      .base {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--_size);
        height: var(--_size);
        overflow: hidden;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-muted);
        color: var(--ep-color-text-primary);
        font-size: var(--_font-size);
        font-weight: var(--ep-font-weight-semibold);
        line-height: 1;
        user-select: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      ep-icon {
        font-size: calc(var(--_size) * 0.55);
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
        }
      }
    `];constructor(){super(),this.name=``,this.src=``,this.size=`md`,this._failed=!1}willUpdate(e){e.has(`src`)&&(this._failed=!1)}get initials(){let e=this.name.trim().split(/\s+/).filter(Boolean);return e.length===0?``:(e[0][0]+(e.length>1?e[e.length-1][0]:``)).toUpperCase()}render(){let e=this.src&&!this._failed?k`<img src=${this.src} alt="" @error=${()=>this._failed=!0} />`:this.initials?k`<span aria-hidden="true">${this.initials}</span>`:k`<ep-icon name="user"></ep-icon>`;return k`<span part="base" class="base" role=${this.name?`img`:j} aria-label=${this.name||j} aria-hidden=${this.name?j:`true`}
      >${e}</span
    >`}});var K={info:`info-circle`,success:`circle-check`,warning:`alert-triangle`,danger:`alert-circle`},_t=m`
  :host {
    --_bg: var(--ep-color-feedback-info-background);
    --_border: var(--ep-color-feedback-info-border);
    --_icon: var(--ep-color-text-info);
  }

  :host([variant='success']) {
    --_bg: var(--ep-color-feedback-success-background);
    --_border: var(--ep-color-feedback-success-border);
    --_icon: var(--ep-color-text-success);
  }

  :host([variant='warning']) {
    --_bg: var(--ep-color-feedback-warning-background);
    --_border: var(--ep-color-feedback-warning-border);
    --_icon: var(--ep-color-text-warning);
  }

  :host([variant='danger']) {
    --_bg: var(--ep-color-feedback-danger-background);
    --_border: var(--ep-color-feedback-danger-border);
    --_icon: var(--ep-color-text-danger);
  }
`,q=class{#e;#t;constructor(e,...t){this.#e=e,this.#t=t,e.addController(this)}test(e){return e===`[default]`?[...this.#e.childNodes].some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`)):this.#e.querySelector(`:scope > [slot="${e}"]`)!==null}#n=e=>{let t=e.target;this.#t.includes(t.name||`[default]`)&&this.#e.requestUpdate()};hostConnected(){this.#e.shadowRoot?.addEventListener(`slotchange`,this.#n)}hostDisconnected(){this.#e.shadowRoot?.removeEventListener(`slotchange`,this.#n)}};f(`ep-alert`,class extends L{static properties={variant:{reflect:!0},heading:{},dismissible:{type:Boolean,reflect:!0}};static styles=[V,_t,m`
      :host {
        display: block;
      }

      .base {
        display: flex;
        gap: var(--ep-space-150);
        padding: var(--ep-space-150) var(--ep-space-200);
        border: var(--ep-border-width-thin) solid var(--_border);
        border-inline-start-width: 4px;
        border-radius: var(--ep-radius-container);
        background: var(--_bg);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      .icon {
        flex: none;
        margin-top: 2px;
        font-size: var(--ep-size-icon-md);
        color: var(--_icon);
      }

      .content {
        flex: 1;
        min-width: 0;
      }

      .heading {
        margin: 0;
        font-size: inherit;
        font-weight: var(--ep-font-weight-semibold);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ep-space-100);
        margin-top: var(--ep-space-150);
      }

      ep-icon-button {
        align-self: flex-start;
        margin: -4px -8px -4px 0;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `];#e=new q(this,`actions`);constructor(){super(),this.variant=`info`,this.heading=``,this.dismissible=!1}#t(){let e=new CustomEvent(`ep-close`,{bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(this.hidden=!0)}render(){return k`<div part="base" class="base">
      <ep-icon class="icon" name=${K[this.variant]??K.info}></ep-icon>
      <div class="content">
        ${this.heading?k`<p class="heading">${this.heading}</p>`:j}
        <slot></slot>
        <div class="actions" ?hidden=${!this.#e.test(`actions`)}><slot name="actions"></slot></div>
      </div>
      ${this.dismissible?k`<ep-icon-button icon="x" label="Dismiss" size="sm" @click=${this.#t}></ep-icon-button>`:j}
    </div>`}}),f(`ep-card`,class extends L{static properties={variant:{reflect:!0}};static styles=[V,m`
      :host {
        display: block;
      }

      .base {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-default);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      :host([variant='elevated']) .base {
        border-color: transparent;
        background: var(--ep-color-surface-raised);
        box-shadow: var(--ep-shadow-md);
      }

      :host([variant='filled']) .base {
        border-color: transparent;
        background: var(--ep-color-surface-muted);
      }

      .media ::slotted(*) {
        display: block;
        width: 100%;
      }

      .header {
        display: flex;
        align-items: flex-start;
        gap: var(--ep-space-100);
        padding: var(--ep-space-200) var(--ep-space-200) 0;
      }

      .header ::slotted([slot='heading']) {
        flex: 1;
        margin: 0;
        font-size: var(--ep-font-size-300);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-snug);
      }

      .body {
        flex: 1;
        padding: var(--ep-space-200);
      }

      .header:not([hidden]) + .body {
        padding-top: var(--ep-space-100);
      }

      .footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--ep-space-100);
        padding: var(--ep-space-150) var(--ep-space-200);
        border-top: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      [hidden] {
        display: none !important;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `];#e=new q(this,`media`,`heading`,`header-actions`,`footer`);constructor(){super(),this.variant=`outlined`}render(){let e=this.#e.test(`heading`)||this.#e.test(`header-actions`);return k`<div part="base" class="base">
      <div class="media" ?hidden=${!this.#e.test(`media`)}><slot name="media"></slot></div>
      <div class="header" ?hidden=${!e}>
        <slot name="heading"></slot>
        <slot name="header-actions"></slot>
      </div>
      <div class="body"><slot></slot></div>
      <div class="footer" ?hidden=${!this.#e.test(`footer`)}><slot name="footer"></slot></div>
    </div>`}});var vt=class extends L{static properties={panel:{reflect:!0},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[V,m`
      :host {
        display: inline-flex;
        outline: none;
        cursor: pointer;
      }

      .base {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: var(--ep-space-100);
        height: var(--ep-size-control-md);
        padding: 0 var(--ep-space-200);
        border-radius: var(--ep-radius-control) var(--ep-radius-control) 0 0;
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-200);
        font-weight: var(--ep-font-weight-medium);
        white-space: nowrap;
        user-select: none;
        transition: color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      .base::after {
        content: '';
        position: absolute;
        inset: auto 0 0;
        height: 2px;
        background: transparent;
      }

      :host(:hover) .base {
        color: var(--ep-color-text-primary);
        background: var(--ep-color-interactive-ghost-hover);
      }

      :host([selected]) .base {
        color: var(--ep-color-text-primary);
        font-weight: var(--ep-font-weight-semibold);
      }

      :host([selected]) .base::after {
        background: var(--ep-color-accent-default);
      }

      :host(:focus-visible) .base {
        ${H}
        outline-offset: -2px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .base {
        color: var(--ep-color-text-disabled);
        background: none;
      }

      ::slotted(ep-icon) {
        font-size: var(--ep-size-icon-md);
      }

      @media (forced-colors: active) {
        :host([selected]) .base::after {
          background: Highlight;
        }
      }
    `];constructor(){super(),this.panel=``,this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`),this.slot=`nav`}updated(){this.setAttribute(`aria-selected`,String(this.selected)),this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`)}render(){return k`<span part="base" class="base"><slot name="prefix"></slot><slot></slot></span>`}},yt=class extends L{static properties={name:{reflect:!0},active:{type:Boolean,reflect:!0}};static styles=[V,m`
      :host {
        display: block;
        padding: var(--ep-space-200) 0;
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        border-radius: var(--ep-radius-control);
        outline: none;
      }

      :host(:not([active])) {
        display: none;
      }

      :host(:focus-visible) {
        ${H}
      }
    `];constructor(){super(),this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tabpanel`),this.hasAttribute(`tabindex`)||(this.tabIndex=0)}render(){return k`<slot></slot>`}},bt=0;function xt(e=`ep`){return bt+=1,`${e}-${bt}`}var St=class extends L{static properties={value:{reflect:!0},label:{}};static styles=[V,m`
      :host {
        display: block;
      }

      .tablist {
        display: flex;
        overflow-x: auto;
        border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        scrollbar-width: thin;
      }
    `];constructor(){super(),this.value=``,this.label=``}get#e(){return[...this.querySelectorAll(`:scope > ep-tab`)]}get#t(){return[...this.querySelectorAll(`:scope > ep-tab-panel`)]}#n(e,t){e&&!e.disabled&&(t&&e.focus(),e.panel!==this.value&&(this.value=e.panel,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))))}#r(e){this.#n(e.target.closest(`ep-tab`)??void 0,!0)}#i(e){let t=e.target.closest(`ep-tab`);if(!t)return;let n=this.#e.filter(e=>!e.disabled),r=n.indexOf(t),i={ArrowRight:n[(r+1)%n.length],ArrowLeft:n[(r-1+n.length)%n.length],Home:n[0],End:n[n.length-1]}[e.key];i&&(e.preventDefault(),this.#n(i,!0))}updated(){let e=this.#e,t=this.#t,n=this.value||e.find(e=>!e.disabled)?.panel||``;for(let r of e){let e=t.find(e=>e.name===r.panel);r.id||=xt(`ep-tab`),e&&(e.id||=xt(`ep-tab-panel`),r.setAttribute(`aria-controls`,e.id),e.setAttribute(`aria-labelledby`,r.id)),r.selected=r.panel===n,r.tabIndex=r.selected?0:-1}for(let e of t)e.active=e.name===n}render(){return k`<div
        part="tablist"
        class="tablist"
        role="tablist"
        aria-label=${this.label}
        @click=${this.#r}
        @keydown=${this.#i}
      >
        <slot name="nav" @slotchange=${()=>this.requestUpdate()}></slot>
      </div>
      <slot @slotchange=${()=>this.requestUpdate()}></slot>`}};f(`ep-tab`,vt),f(`ep-tab-panel`,yt),f(`ep-tabs`,St);var Ct=100,J=6;f(`ep-tooltip`,class extends L{static properties={content:{},placement:{reflect:!0},_open:{state:!0}};static styles=[V,m`
      :host {
        display: inline-block;
      }

      .tooltip {
        position: fixed;
        inset: auto;
        margin: 0;
        padding: var(--ep-space-50) var(--ep-space-100);
        max-width: 280px;
        border: 0;
        border-radius: var(--ep-radius-indicator);
        background: var(--ep-color-background-inverse);
        color: var(--ep-color-text-inverse);
        font-size: var(--ep-font-size-100);
        font-weight: var(--ep-font-weight-medium);
        line-height: var(--ep-font-line-height-snug);
        box-shadow: var(--ep-shadow-md);
        pointer-events: auto;
        opacity: 0;
        transition: opacity var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
        overflow: visible;
      }

      .tooltip.open {
        opacity: 1;
      }

      .tooltip:not(.open):not(:popover-open) {
        display: none;
      }

      @media (forced-colors: active) {
        .tooltip {
          border: 1px solid CanvasText;
        }
      }
    `];#e;constructor(){super(),this.content=``,this.placement=`top`,this._open=!1,this.addEventListener(`pointerenter`,this.#r),this.addEventListener(`pointerleave`,this.#i),this.addEventListener(`focusin`,this.#r),this.addEventListener(`focusout`,this.#a)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.#o)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.#o)}get#t(){return[...this.children].find(e=>e instanceof HTMLElement)}get#n(){return this.renderRoot.querySelector(`.tooltip`)}#r=()=>{clearTimeout(this.#e),this.content&&(this._open=!0)};#i=()=>{this.#e=setTimeout(this.#a,Ct)};#a=()=>{clearTimeout(this.#e),this._open=!1};#o=e=>{e.key===`Escape`&&this._open&&this.#a()};#s(){let e=this.#t,t=this.#n;if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i={top:n.top-r.height-J>=0,bottom:n.bottom+r.height+J<=innerHeight,left:n.left-r.width-J>=0,right:n.right+r.width+J<=innerWidth},a={top:`bottom`,bottom:`top`,left:`right`,right:`left`},o=i[this.placement]||!i[a[this.placement]]?this.placement:a[this.placement],s=0,c=0;o===`top`||o===`bottom`?(s=o===`top`?n.top-r.height-J:n.bottom+J,c=n.left+n.width/2-r.width/2):(s=n.top+n.height/2-r.height/2,c=o===`left`?n.left-r.width-J:n.right+J),c=Math.min(Math.max(4,c),innerWidth-r.width-4),t.style.top=`${Math.round(s)}px`,t.style.left=`${Math.round(c)}px`}updated(e){let t=this.#t;if(t&&e.has(`content`)){let e=t.getAttribute(`label`)===this.content||t.getAttribute(`aria-label`)===this.content;this.content&&!e?t.setAttribute(`aria-description`,this.content):t.removeAttribute(`aria-description`)}if(e.has(`_open`)){let e=this.#n;typeof e.showPopover==`function`&&(this._open&&!e.matches(`:popover-open`)&&e.showPopover(),!this._open&&e.matches(`:popover-open`)&&e.hidePopover()),this._open&&this.#s()}}render(){return k`<slot @slotchange=${()=>this.requestUpdate(`content`)}></slot>
      <div
        part="tooltip"
        class="tooltip ${this._open?`open`:``}"
        role="tooltip"
        popover="manual"
        aria-hidden="true"
        @pointerenter=${this.#r}
        @pointerleave=${this.#i}
      >
        ${this.content}
      </div>`}});var Y=[],X=new Set,wt=()=>Y.at(-1)??null;function Tt(e){Y.includes(e)||Y.push(e),X.forEach(e=>e())}function Et(e){let t=Y.indexOf(e);t!==-1&&(Y.splice(t,1),X.forEach(e=>e()))}function Dt(e){return X.add(e),()=>X.delete(e)}f(`ep-modal`,class extends L{static properties={open:{type:Boolean,reflect:!0},heading:{},size:{reflect:!0}};static styles=[V,m`
      :host {
        display: contents;
        --_width: 520px;
      }

      :host([size='sm']) {
        --_width: 400px;
      }

      :host([size='lg']) {
        --_width: 720px;
      }

      dialog {
        width: min(var(--_width), calc(100vw - 32px));
        max-height: min(85vh, 800px);
        padding: 0;
        border: 0;
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
        box-shadow: var(--ep-shadow-lg);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        overflow: hidden;
      }

      dialog[open] {
        display: flex;
        flex-direction: column;
        animation: enter var(--ep-motion-duration-normal) var(--ep-motion-easing-enter);
      }

      dialog::backdrop {
        background: var(--ep-color-background-scrim, rgb(0 0 0 / 0.6));
      }

      @keyframes enter {
        from {
          opacity: 0;
          transform: translateY(8px) scale(0.98);
        }
      }

      header {
        display: flex;
        align-items: flex-start;
        gap: var(--ep-space-150);
        padding: var(--ep-space-200) var(--ep-space-200) 0 var(--ep-space-300);
      }

      h2 {
        flex: 1;
        margin: var(--ep-space-100) 0 0;
        font-size: var(--ep-font-size-500);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-tight);
      }

      .body {
        flex: 1;
        overflow-y: auto;
        padding: var(--ep-space-200) var(--ep-space-300) var(--ep-space-300);
      }

      footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: var(--ep-space-100);
        padding: var(--ep-space-200) var(--ep-space-300);
        border-top: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      footer[hidden] {
        display: none;
      }

      @media (forced-colors: active) {
        dialog {
          border: 1px solid CanvasText;
        }
      }
    `];#e=new q(this,`footer`);constructor(){super(),this.open=!1,this.heading=``,this.size=`md`}show(){this.open=!0}close(){this.open=!1}get#t(){return this.renderRoot.querySelector(`dialog`)}updated(e){if(!e.has(`open`))return;let t=this.#t;this.open&&!t.open&&(t.showModal(),Tt(this)),!this.open&&t.open&&t.close(),this.open||Et(this)}disconnectedCallback(){super.disconnectedCallback(),Et(this)}#n(){this.open=!1,this.dispatchEvent(new CustomEvent(`ep-close`,{bubbles:!0,composed:!0}))}render(){return k`<dialog part="dialog" aria-labelledby="heading" @close=${this.#n}>
      <header>
        <h2 id="heading">${this.heading}</h2>
        <ep-icon-button icon="x" label="Close" @click=${()=>this.close()}></ep-icon-button>
      </header>
      <div class="body"><slot></slot></div>
      <footer ?hidden=${!this.#e.test(`footer`)}><slot name="footer"></slot></footer>
      <slot name="toaster"></slot>
    </dialog>`}});var Ot=class extends L{static properties={variant:{reflect:!0},heading:{},duration:{type:Number}};static styles=[V,m`
      :host {
        display: block;
        pointer-events: auto;
        --_icon: var(--ep-color-text-info);
      }

      :host([variant='success']) {
        --_icon: var(--ep-color-text-success);
      }

      :host([variant='warning']) {
        --_icon: var(--ep-color-text-warning);
      }

      :host([variant='danger']) {
        --_icon: var(--ep-color-text-danger);
      }

      .base {
        display: flex;
        align-items: flex-start;
        gap: var(--ep-space-150);
        width: min(380px, calc(100vw - 32px));
        padding: var(--ep-space-150) var(--ep-space-100) var(--ep-space-150) var(--ep-space-200);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
        box-shadow: var(--ep-shadow-lg);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        animation: enter var(--ep-motion-duration-slow) var(--ep-motion-easing-enter);
      }

      @keyframes enter {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
      }

      .icon {
        flex: none;
        margin-top: 2px;
        font-size: var(--ep-size-icon-md);
        color: var(--_icon);
      }

      .content {
        flex: 1;
        min-width: 0;
        padding-top: 0;
      }

      .heading {
        margin: 0;
        font-weight: var(--ep-font-weight-semibold);
      }

      .message {
        color: var(--ep-color-text-secondary);
      }

      .action {
        display: flex;
        align-self: center;
      }

      ep-icon-button {
        margin-block: -4px;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `];#e;#t=0;#n=0;constructor(){super(),this.variant=`info`,this.heading=``,this.duration=5e3,this.addEventListener(`pointerenter`,this.#r),this.addEventListener(`pointerleave`,this.#i),this.addEventListener(`focusin`,this.#r),this.addEventListener(`focusout`,this.#i)}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.#t=this.duration),this.#i()}disconnectedCallback(){super.disconnectedCallback(),this.#r()}#r=()=>{this.#e&&(clearTimeout(this.#e),this.#e=void 0,this.#t-=Date.now()-this.#n)};#i=()=>{this.duration<=0||this.#e||this.matches(`:focus-within`)||(this.#n=Date.now(),this.#e=setTimeout(()=>this.close(),Math.max(this.#t,1e3)))};close(){clearTimeout(this.#e),this.dispatchEvent(new CustomEvent(`ep-close`,{bubbles:!0,composed:!0})),this.remove()}render(){return k`<div part="base" class="base">
      <ep-icon class="icon" name=${K[this.variant]??K.info}></ep-icon>
      <div class="content">
        ${this.heading?k`<p class="heading">${this.heading}</p>`:j}
        <div class="message"><slot></slot></div>
      </div>
      <div class="action"><slot name="action"></slot></div>
      <ep-icon-button icon="x" label="Dismiss notification" size="sm" @click=${()=>this.close()}></ep-icon-button>
    </div>`}},kt=typeof HTMLElement<`u`&&`showPopover`in HTMLElement.prototype,At=class extends L{static properties={placement:{reflect:!0}};static styles=m`
    :host {
      position: fixed;
      z-index: var(--ep-z-index-toast);
      inset: auto var(--ep-space-300) var(--ep-space-300) auto;
      /* Reset the browser's popover box. */
      width: auto;
      height: auto;
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      color: inherit;
      overflow: visible;
      display: flex;
      flex-direction: column-reverse;
      gap: var(--ep-space-150);
      pointer-events: none;
    }

    :host([placement='top-end']) {
      inset: var(--ep-space-300) var(--ep-space-300) auto auto;
      flex-direction: column;
    }

    :host([placement='bottom-center']) {
      inset: auto 0 var(--ep-space-300);
      align-items: center;
    }
  `;constructor(){super(),this.placement=`bottom-end`}#e=null;#t;connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,`Notifications`),this.setAttribute(`aria-live`,`polite`),this.setAttribute(`aria-relevant`,`additions`),kt&&this.setAttribute(`popover`,`manual`),this.#t||=(this.#e=this.parentNode,Dt(()=>this.#n())),this.#n(),this.#r()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.#t?.(),this.#t=void 0)})}#n(){let e=wt(),t=e??this.#e;t&&this.parentNode!==t&&(e?this.slot=`toaster`:this.removeAttribute(`slot`),t.append(this))}#r(){kt&&this.isConnected&&(this.matches(`:popover-open`)&&this.hidePopover(),this.showPopover())}render(){return k`<slot @slotchange=${()=>this.#r()}></slot>`}};function jt(e){let t=document.querySelector(`ep-toaster`);t||(t=document.createElement(`ep-toaster`),document.body.append(t));let n=document.createElement(`ep-toast`);return n.variant=e.variant??`info`,n.heading=e.heading??``,n.duration=e.duration??5e3,n.textContent=e.message,requestAnimationFrame(()=>t.append(n)),n}f(`ep-toast`,Ot),f(`ep-toaster`,At);var Mt={$comment:"Every Eduport logo file in svg/. `use` says where each one belongs; the gallery and docs are generated from this list.",color:`#ff6518`,logos:[{name:`wordmark-orange`,group:`core`,mark:`wordmark`,title:`Wordmark, orange`,preview:`light`,use:`The primary logo. Use it whenever the background is white or a light neutral: app and website headers, sign-in screens, emails, documents and slides.`},{name:`wordmark-white`,group:`core`,mark:`wordmark`,title:`Wordmark, white`,preview:`brand`,use:`On brand orange, dark surfaces (dark theme headers) and dark photos or video. Check the background behind it is dark enough to read the cap and tassel.`},{name:`wordmark-black`,group:`core`,mark:`wordmark`,title:`Wordmark, black`,preview:`light`,use:`One-color reproduction only: black-and-white print, stamps, engraving and embossing, fax, and partner lockups that require a mono logo.`},{name:`symbol-orange`,group:`core`,mark:`symbol`,title:`Symbol, orange`,preview:`light`,derived:!0,use:`The cap-and-e mark alone, for tight spaces where Eduport is already named nearby: a collapsed sidebar, a loading screen, a watermark.`},{name:`symbol-white`,group:`core`,mark:`symbol`,title:`Symbol, white`,preview:`brand`,derived:!0,use:`The symbol on brand orange or dark surfaces, for the same tight spaces as the orange symbol.`},{name:`symbol-tile-brand`,group:`icon`,mark:`symbol`,title:`App icon, orange`,use:`The default app icon: iOS and Android launcher icons, PWA manifest icons, favicons, and app store listings.`},{name:`symbol-tile-light`,group:`icon`,mark:`symbol`,title:`App icon, white`,use:`Alternate app icon for orange or dark backgrounds where the orange tile would disappear, such as a tile on a brand-colored page or a dark-mode home screen preview.`},{name:`symbol-circle-brand`,group:`icon`,mark:`symbol`,title:`Round icon, orange`,use:`Eduport as the sender inside a product: the avatar on system messages, notifications, comments and chat, and map pins.`},{name:`symbol-circle-light`,group:`icon`,mark:`symbol`,title:`Round icon, white`,use:`The round icon on orange or dark backgrounds, for example a system avatar inside an orange banner.`},{name:`wordmark-tile-brand`,group:`icon`,mark:`wordmark`,title:`Wordmark tile, orange`,use:`Square spaces big enough to read the name: default cover images for courses and videos, square ads, social post templates and end cards.`},{name:`wordmark-tile-light`,group:`icon`,mark:`wordmark`,title:`Wordmark tile, white`,use:`The wordmark tile on orange or dark backgrounds, or where a lighter placeholder image reads better.`},{name:`symbol-avatar-brand`,group:`social`,mark:`symbol`,title:`Social avatar, symbol`,use:`Profile pictures on platforms that crop to a circle and show them small: WhatsApp, YouTube, Instagram, X. The extra padding keeps the mark inside the circle.`},{name:`wordmark-avatar-brand`,group:`social`,mark:`wordmark`,title:`Social avatar, wordmark`,use:`Profile pictures shown large enough to read the name, such as a LinkedIn or Facebook page. Safe for circular crops.`},{name:`wordmark-card-light-lg`,group:`card`,mark:`wordmark`,title:`White card, large mark`,use:`Places the logo on photos, colored or busy backgrounds where it needs its own plate. Use the large mark when the card is shown small, such as a partner logo strip or a sponsor row.`},{name:`wordmark-card-light-md`,group:`card`,mark:`wordmark`,title:`White card, medium mark`,use:`The same white card at mid size, such as a logo on an event banner or certificate.`},{name:`wordmark-card-light-sm`,group:`card`,mark:`wordmark`,title:`White card, small mark`,use:`The white card shown large, where the generous padding reads as breathing room: a hero banner or a printed backdrop.`},{name:`wordmark-card-brand-lg`,group:`card`,mark:`wordmark`,title:`Orange card, large mark`,use:`A solid brand block on white, neutral or dark backgrounds. Use the large mark when the card is shown small, such as an email header or a footer.`},{name:`wordmark-card-brand-md`,group:`card`,mark:`wordmark`,title:`Orange card, medium mark`,use:`The orange card at mid size, such as a presentation title slide or a web banner.`},{name:`wordmark-card-brand-sm`,group:`card`,mark:`wordmark`,title:`Orange card, small mark`,use:`The orange card shown large, where the padding reads as breathing room: a hero, a stage screen or a printed backdrop.`},{name:`wordmark-pill-light`,group:`badge`,mark:`wordmark`,title:`White pill`,use:`A floating badge over photos and video, a 'powered by Eduport' mark on partner pages, and stickers or merchandise.`},{name:`wordmark-pill-brand`,group:`badge`,mark:`wordmark`,title:`Orange pill`,use:`The pill on white or neutral backgrounds, for the same badge, sticker and co-branding uses.`},{name:`wordmark-tab-brand`,group:`tab`,mark:`wordmark`,title:`Orange tab`,use:`Hangs from the top edge of a page: landing page headers, letterheads, certificates and slide masters. Align its flat top edge with the edge of the page.`},{name:`wordmark-tab-light`,group:`tab`,mark:`wordmark`,title:`White tab`,use:`The hanging tab on orange, dark or photo backgrounds.`},{name:`wordmark-tab-angled-brand`,group:`tab`,mark:`wordmark`,title:`Orange angled tab`,use:`A more expressive hanging tab for marketing: posters, social graphics, event banners and campaign pages. Keep it out of product UI.`},{name:`wordmark-tab-angled-light`,group:`tab`,mark:`wordmark`,title:`White angled tab`,use:`The angled tab on orange, dark or photo backgrounds, for the same marketing uses.`}]},Nt=document.documentElement,Pt={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}};function Z(e,t){Nt.setAttribute(`data-${e}`,t);for(let n of document.querySelectorAll(`[data-set-${e}]`))n.setAttribute(`aria-pressed`,String(n.getAttribute(`data-set-${e}`)===t));Pt.set(`ep-gallery-${e}`,t)}var Ft=matchMedia(`(prefers-color-scheme: dark)`).matches;Z(`theme`,Pt.get(`ep-gallery-theme`)??Nt.dataset.theme??(Ft?`dark`:`light`)),Z(`corners`,Pt.get(`ep-gallery-corners`)??`soft`),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-set-theme], [data-set-corners], [data-open], [data-close], [data-toast]`);t&&(t.dataset.setTheme&&Z(`theme`,t.dataset.setTheme),t.dataset.setCorners&&Z(`corners`,t.dataset.setCorners),t.dataset.open&&document.getElementById(t.dataset.open).show(),t.hasAttribute(`data-close`)&&t.closest(`ep-modal`).close(),t.dataset.toast&&Lt(t.dataset.toast))});var It={success:{variant:`success`,heading:`Assignment submitted`,message:`Your teacher will review it by Thursday.`},info:{variant:`info`,message:`A new lesson was added to Physics for Class 11.`},warning:{variant:`warning`,heading:`Storage almost full`,message:`You have used 90% of your 5 GB.`},danger:{variant:`danger`,heading:`Couldn't save`,message:`Check your connection and try again.`,duration:0},"danger-deleted":{variant:`success`,message:`Course deleted.`},invite:{variant:`success`,heading:`Invite sent`,message:`They will get an email with a join link.`}};function Lt(e){It[e]&&jt(It[e])}var Rt=document.getElementById(`doubt-form`);Rt.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(Rt);jt({variant:`success`,heading:`Question sent`,message:`Your ${t.get(`subject`)??``} question on "${t.get(`topic`)}" is in the queue.`}),Rt.reset()});var Q=document.querySelector(`#select-all-demo [data-all]`),$=[...document.querySelectorAll(`#select-all-demo [data-item]`)];function zt(){let e=$.filter(e=>e.checked).length;Q.checked=e===$.length,Q.indeterminate=e>0&&e<$.length}Q.addEventListener(`change`,()=>{for(let e of $)e.checked=Q.checked});for(let e of $)e.addEventListener(`change`,zt);document.getElementById(`filter-tags`).addEventListener(`ep-remove`,e=>{let t=e.target,n=t.nextElementSibling??t.previousElementSibling;t.remove(),n?.focus()});var Bt=document.getElementById(`icon-grid`);for(let e of ct()){let t=document.createElement(`figure`);t.innerHTML=`<ep-icon name="${e}"></ep-icon><figcaption>${e}</figcaption>`,Bt.append(t)}var Vt=[[`core`,`Core marks`,`The logo on a transparent background. Use these in most places.`],[`icon`,`App icons and tiles`,`For app launchers, favicons, system avatars and square placeholders.`],[`social`,`Social avatars`,`Extra padding so the mark survives a circular crop.`],[`card`,`Cards`,`A plate for photos and busy backgrounds. The sizes differ only in how much of the card the wordmark fills.`],[`badge`,`Pills`,`Badges, stickers and 'powered by Eduport' marks.`],[`tab`,`Hanging tabs`,`Hang from the top edge of a page, letterhead or slide.`]],Ht=Object.assign({"../../../packages/logos/svg/symbol-avatar-brand.svg":e,"../../../packages/logos/svg/symbol-circle-brand.svg":t,"../../../packages/logos/svg/symbol-circle-light.svg":n,"../../../packages/logos/svg/symbol-orange.svg":r,"../../../packages/logos/svg/symbol-tile-brand.svg":i,"../../../packages/logos/svg/symbol-tile-light.svg":a,"../../../packages/logos/svg/symbol-white.svg":o,"../../../packages/logos/svg/wordmark-avatar-brand.svg":s,"../../../packages/logos/svg/wordmark-black.svg":c,"../../../packages/logos/svg/wordmark-card-brand-lg.svg":l,"../../../packages/logos/svg/wordmark-card-brand-md.svg":u,"../../../packages/logos/svg/wordmark-card-brand-sm.svg":d,"../../../packages/logos/svg/wordmark-card-light-lg.svg":ee,"../../../packages/logos/svg/wordmark-card-light-md.svg":te,"../../../packages/logos/svg/wordmark-card-light-sm.svg":ne,"../../../packages/logos/svg/wordmark-orange.svg":re,"../../../packages/logos/svg/wordmark-pill-brand.svg":ie,"../../../packages/logos/svg/wordmark-pill-light.svg":ae,"../../../packages/logos/svg/wordmark-tab-angled-brand.svg":oe,"../../../packages/logos/svg/wordmark-tab-angled-light.svg":se,"../../../packages/logos/svg/wordmark-tab-brand.svg":ce,"../../../packages/logos/svg/wordmark-tab-light.svg":le,"../../../packages/logos/svg/wordmark-tile-brand.svg":ue,"../../../packages/logos/svg/wordmark-tile-light.svg":de,"../../../packages/logos/svg/wordmark-white.svg":fe}),Ut=e=>Ht[`../../../packages/logos/svg/${e}.svg`],Wt=document.getElementById(`logo-groups`);for(let[e,t,n]of Vt){let r=document.createElement(`div`);r.className=`demo logo-group`,r.innerHTML=`<h3>${t}</h3><p>${n}</p><div class="logo-grid"></div>`;for(let t of Mt.logos.filter(t=>t.group===e)){let e=document.createElement(`figure`);e.className=`logo-card`,e.innerHTML=`
      <div class="logo-preview" data-preview="${t.preview??`neutral`}" data-mark="${t.mark}">
        <img src="${Ut(t.name)}" alt="" />
      </div>
      <figcaption>
        <strong>${t.title}</strong>
        <span>${t.use}</span>
        <a href="${Ut(t.name)}" download="eduport-${t.name}.svg"><ep-icon name="download"></ep-icon>${t.name}.svg</a>
      </figcaption>`,r.querySelector(`.logo-grid`).append(e)}Wt.append(r)}var Gt=[[`0`,`0`,`Resetting; flush edges`],[`25`,`2px`,`Optical nudges, badge and tag padding`],[`50`,`4px`,`Icon to text in small items; label to helper text`],[`100`,`8px`,`Icon to text in buttons; between buttons in a group; label to field`],[`150`,`12px`,`Padding in menus, tooltips and list rows`],[`200`,`16px`,`Card padding; related controls in a row; phone margin and gutter`],[`300`,`24px`,`Between form fields; heading to its content`],[`400`,`32px`,`Between groups inside a section; phone section gap`],[`500`,`40px`,`Page header to content on large screens; tablet section gap`],[`600`,`48px`,`Between major page sections on desktop; between form sections`],[`800`,`64px`,`Empty states; generous page padding`]],Kt=document.getElementById(`space-scale`);for(let[e,t,n]of Gt){let r=Kt.insertRow();r.innerHTML=`<td><code>--ep-space-${e}</code></td><td>${t}</td><td><span class="space-bar" style="width: var(--ep-space-${e})"></span></td><td>${n}</td>`}var qt=[[`xl`,matchMedia(`(min-width: 1440px)`)],[`lg`,matchMedia(`(min-width: 1024px)`)],[`md`,matchMedia(`(min-width: 600px)`)]],Jt=document.getElementById(`grid-overlay`),Yt=document.getElementById(`grid-readout`);function Xt(){let e=qt.find(([,e])=>e.matches)?.[0]??`base`,t=getComputedStyle(Nt),n=Number((e=>t.getPropertyValue(`--ep-layout-${e}`).trim())(`columns`));Jt.replaceChildren(...Array.from({length:n},(e,t)=>Object.assign(document.createElement(`span`),{textContent:t+1})));let r=Object.assign(document.createElement(`div`),{style:`position:absolute;visibility:hidden`});document.body.append(r);let i=e=>(r.style.width=`var(--ep-layout-${e})`,`${Math.round(r.getBoundingClientRect().width)}px`);Yt.textContent=`Breakpoint ${e}: ${n} columns, ${i(`margin`)} margin, ${i(`gutter`)} gutter, ${i(`section-gap`)} section gap.`,r.remove();for(let t of document.querySelectorAll(`.token-table tr[data-bp]`))t.toggleAttribute(`data-active`,t.dataset.bp===e)}for(let[,e]of qt)e.addEventListener(`change`,Xt);Xt();var Zt=new Map([...document.querySelectorAll(`.toc a`)].map(e=>[e.hash.slice(1),e])),Qt=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){for(let e of Zt.values())e.removeAttribute(`aria-current`);Zt.get(t.target.id)?.setAttribute(`aria-current`,`true`)}},{rootMargin:`-80px 0px -70% 0px`});for(let e of Zt.keys()){let t=document.getElementById(e);t&&Qt.observe(t)}