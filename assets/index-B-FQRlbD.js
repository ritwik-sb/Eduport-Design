(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new URL(`symbol-avatar-brand-DN8avZ-q.svg`,import.meta.url).href,t=new URL(`symbol-circle-brand-BEA29ktq.svg`,import.meta.url).href,n=new URL(`symbol-circle-light-C4Qpvhgr.svg`,import.meta.url).href,r=new URL(`symbol-orange-mT39MzWe.svg`,import.meta.url).href,i=new URL(`symbol-tile-brand-CoGVFtK7.svg`,import.meta.url).href,a=new URL(`symbol-tile-light-BtEje1pP.svg`,import.meta.url).href,o=new URL(`symbol-white-CAZau-Ef.svg`,import.meta.url).href,s=new URL(`wordmark-avatar-brand-B5Erl8Un.svg`,import.meta.url).href,c=new URL(`wordmark-black-DrGeSmrX.svg`,import.meta.url).href,l=new URL(`wordmark-card-brand-lg-BNdYnx50.svg`,import.meta.url).href,u=new URL(`wordmark-card-brand-md-BccoAlv1.svg`,import.meta.url).href,d=new URL(`wordmark-card-brand-sm-B7rwLUuy.svg`,import.meta.url).href,f=new URL(`wordmark-card-light-lg-U7gU6fpi.svg`,import.meta.url).href,p=new URL(`wordmark-card-light-md-C3IAc3Oo.svg`,import.meta.url).href,m=new URL(`wordmark-card-light-sm-TEUr4i44.svg`,import.meta.url).href,ee=new URL(`wordmark-orange-Chdu1FFa.svg`,import.meta.url).href,te=new URL(`wordmark-pill-brand-ifEL62dR.svg`,import.meta.url).href,ne=new URL(`wordmark-pill-light-NwafUCA2.svg`,import.meta.url).href,re=new URL(`wordmark-tab-angled-brand-D2zwPVHq.svg`,import.meta.url).href,ie=new URL(`wordmark-tab-angled-light-DMVJcWyr.svg`,import.meta.url).href,ae=new URL(`wordmark-tab-brand-Pj2FijUI.svg`,import.meta.url).href,oe=new URL(`wordmark-tab-light-DYNb2cLf.svg`,import.meta.url).href,se=new URL(`wordmark-tile-brand-461XfLzF.svg`,import.meta.url).href,ce=new URL(`wordmark-tile-light-DUZw_o8-.svg`,import.meta.url).href,le=new URL(`wordmark-white-C46Qg2OM.svg`,import.meta.url).href;function h(e,t){typeof customElements<`u`&&(customElements.get(e)||customElements.define(e,t))}var ue=globalThis,de=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,fe=Symbol(),pe=new WeakMap,me=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(de&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&pe.set(t,e))}return e}toString(){return this.cssText}},he=e=>new me(typeof e==`string`?e:e+``,void 0,fe),g=(e,...t)=>new me(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,fe),ge=(e,t)=>{if(de)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ue.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},_e=de?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return he(t)})(e):e,{is:ve,defineProperty:ye,getOwnPropertyDescriptor:be,getOwnPropertyNames:xe,getOwnPropertySymbols:Se,getPrototypeOf:Ce}=Object,we=globalThis,Te=we.trustedTypes,Ee=Te?Te.emptyScript:``,De=we.reactiveElementPolyfillSupport,_=(e,t)=>e,Oe={toAttribute(e,t){switch(t){case Boolean:e=e?Ee:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ke=(e,t)=>!ve(e,t),Ae={attribute:!0,type:String,converter:Oe,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol(`metadata`),we.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ye(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=be(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ae}static _$Ei(){if(this.hasOwnProperty(_(`elementProperties`)))return;let e=Ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_(`properties`))){let e=this.properties,t=[...xe(e),...Se(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(_e(e))}else e!==void 0&&t.push(_e(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Oe:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Oe:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ke)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[_(`elementProperties`)]=new Map,v[_(`finalized`)]=new Map,De?.({ReactiveElement:v}),(we.reactiveElementVersions??=[]).push(`2.1.2`);var je=globalThis,Me=e=>e,Ne=je.trustedTypes,Pe=Ne?Ne.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Fe=`$lit$`,y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie=`?`+y,Le=`<${Ie}>`,b=document,x=()=>b.createComment(``),S=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Re=Array.isArray,ze=e=>Re(e)||typeof e?.[Symbol.iterator]==`function`,Be=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,He=/>/g,w=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ue=/'/g,We=/"/g,Ge=/^(?:script|style|textarea|title)$/i,Ke=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),T=Ke(1),qe=Ke(2),E=Symbol.for(`lit-noChange`),D=Symbol.for(`lit-nothing`),Je=new WeakMap,O=b.createTreeWalker(b,129);function Ye(e,t){if(!Re(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Pe===void 0?t:Pe.createHTML(t)}var Xe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=C;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===C?c[1]===`!--`?o=Ve:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=w):(Ge.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=w):o=He:o===w?c[0]===`>`?(o=i??C,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?w:c[3]===`"`?We:Ue):o===We||o===Ue?o=w:o===Ve||o===He?o=C:(o=w,i=void 0);let d=o===w&&e[t+1].startsWith(`/>`)?` `:``;a+=o===C?n+Le:l>=0?(r.push(s),n.slice(0,l)+Fe+n.slice(l)+y+d):n+y+(l===-2?t:d)}return[Ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ze=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Xe(t,n);if(this.el=e.createElement(l,r),O.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=O.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Fe)){let t=u[o++],n=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?et:r[1]===`?`?tt:r[1]===`@`?nt:A}),i.removeAttribute(e)}else e.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ge.test(i.tagName)){let e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=Ne?Ne.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],x()),O.nextNode(),c.push({type:2,index:++a});i.append(e[t],x())}}}else if(i.nodeType===8){if(i.data===Ie)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(y,e+1))!==-1;)c.push({type:7,index:a}),e+=y.length-1}}a++}}static createElement(e,t){let n=b.createElement(`template`);return n.innerHTML=e,n}};function k(e,t,n=e,r){if(t===E)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=S(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=k(e,i._$AS(e,t.values),i,r)),t}var Qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??b).importNode(t,!0);O.currentNode=r;let i=O.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new $e(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new rt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=O.nextNode(),a++)}return O.currentNode=b,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},$e=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),S(e)?e===D||e==null||e===``?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==E&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ze(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ze.createElement(Ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new Ze(e)),t}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(x()),this.O(x()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Me(e).nextSibling;Me(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=k(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==E,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=k(this,r[n+o],t,o),s===E&&(s=this._$AH[o]),a||=!S(s)||s!==this._$AH[o],s===D?e=D:e!==D&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},et=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}},tt=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==D)}},nt=class extends A{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??D)===E)return;let n=this._$AH,r=e===D&&n!==D||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==D&&(n===D||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},rt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}},it={M:Fe,P:y,A:Ie,C:1,L:Xe,R:Qe,D:ze,V:k,I:$e,H:A,N:tt,U:nt,B:et,F:rt},at=je.litHtmlPolyfillSupport;at?.(Ze,$e),(je.litHtmlVersions??=[]).push(`3.3.3`);var ot=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new $e(t.insertBefore(x(),e),e,void 0,n??{})}return i._$AI(e),i},st=globalThis,j=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ot(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};j._$litElement$=!0,j.finalized=!0,st.litElementHydrateSupport?.({LitElement:j});var ct=st.litElementPolyfillSupport;ct?.({LitElement:j}),(st.litElementVersions??=[]).push(`4.2.2`);var M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lt=e=>(...t)=>({_$litDirective$:e,values:t}),ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},dt=class extends ut{constructor(e){if(super(e),this.it=D,e.type!==M.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===D||e==null)return this._t=void 0,this.it=e;if(e===E)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};dt.directiveName=`unsafeHTML`,dt.resultType=1;var ft=class extends dt{};ft.directiveName=`unsafeSVG`,ft.resultType=2;var pt=lt(ft),mt=new Map(Object.entries({check:`<path d="M5 12l5 5l10 -10"/>`,minus:`<path d="M5 12l14 0"/>`,x:`<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>`,"chevron-down":`<path d="M6 9l6 6l6 -6"/>`,"chevron-up":`<path d="M6 15l6 -6l6 6"/>`,"chevron-left":`<path d="M15 6l-6 6l6 6"/>`,"chevron-right":`<path d="M9 6l6 6l-6 6"/>`,selector:`<path d="M8 9l4 -4l4 4"/><path d="M16 15l-4 4l-4 -4"/>`,"info-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/>`,"circle-check":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/>`,"alert-triangle":`<path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0"/><path d="M12 16h.01"/>`,"alert-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/>`,user:`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>`,plus:`<path d="M12 5l0 14"/><path d="M5 12l14 0"/>`,search:`<path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>`,filter:`<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227"/>`,"adjustments-horizontal":`<path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/>`,settings:`<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>`,dots:`<path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>`,"dots-vertical":`<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>`,"menu-2":`<path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/>`,home:`<path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>`,"layout-dashboard":`<path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"/><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"/><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"/><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"/>`,school:`<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/>`,book:`<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>`,books:`<path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/>`,notebook:`<path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"/><path d="M13 8l2 0"/><path d="M13 12l2 0"/>`,certificate:`<path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"/><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"/><path d="M6 9l12 0"/><path d="M6 12l3 0"/><path d="M6 15l2 0"/>`,"clipboard-list":`<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"/><path d="M9 12l.01 0"/><path d="M13 12l2 0"/><path d="M9 16l.01 0"/><path d="M13 16l2 0"/>`,calendar:`<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M11 15h1"/><path d="M12 15v3"/>`,"calendar-event":`<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"/><path d="M16 3l0 4"/><path d="M8 3l0 4"/><path d="M4 11l16 0"/><path d="M8 15h2v2h-2l0 -2"/>`,clock:`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 7v5l3 3"/>`,bell:`<path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/><path d="M9 17v1a3 3 0 0 0 6 0v-1"/>`,mail:`<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/>`,"message-circle":`<path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"/>`,send:`<path d="M10 14l11 -11"/><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>`,phone:`<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>`,users:`<path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>`,"user-plus":`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M16 19h6"/><path d="M19 16v6"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4"/>`,"user-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/>`,"id-badge-2":`<path d="M7 12h3v4h-3l0 -4"/><path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"/><path d="M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3"/><path d="M14 16h2"/><path d="M14 12h4"/>`,lock:`<path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/>`,"lock-open":`<path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M8 11v-5a4 4 0 0 1 8 0"/>`,key:`<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0"/><path d="M15 9h.01"/>`,"shield-check":`<path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"/><path d="M15 19l2 2l4 -4"/>`,logout:`<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M9 12h12l-3 -3"/><path d="M18 15l3 -3"/>`,login:`<path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M21 12h-13l3 -3"/><path d="M11 15l-3 -3"/>`,edit:`<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415"/><path d="M16 5l3 3"/>`,pencil:`<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>`,trash:`<path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>`,copy:`<path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>`,download:`<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>`,upload:`<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/>`,share:`<path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M8.7 10.7l6.6 -3.4"/><path d="M8.7 13.3l6.6 3.4"/>`,link:`<path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>`,"external-link":`<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/>`,paperclip:`<path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/>`,file:`<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/>`,"file-text":`<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/><path d="M9 9l1 0"/><path d="M9 13l6 0"/><path d="M9 17l6 0"/>`,folder:`<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"/>`,photo:`<path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>`,video:`<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4"/><path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8"/>`,microphone:`<path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M8 21l8 0"/><path d="M12 17l0 4"/>`,"player-play":`<path d="M7 4v16l13 -8l-13 -8"/>`,"player-pause":`<path d="M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12"/><path d="M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12"/>`,star:`<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245"/>`,heart:`<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>`,bookmark:`<path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4"/>`,flag:`<path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9"/><path d="M5 21v-7"/>`,tag:`<path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3"/>`,eye:`<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>`,"eye-off":`<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/>`,refresh:`<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>`,"arrow-left":`<path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/>`,"arrow-right":`<path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/>`,"arrow-up":`<path d="M12 5l0 14"/><path d="M18 11l-6 -6"/><path d="M6 11l6 -6"/>`,"arrow-down":`<path d="M12 5l0 14"/><path d="M18 13l-6 6"/><path d="M6 13l6 6"/>`,sun:`<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>`,moon:`<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"/>`,world:`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/>`,"map-pin":`<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"/>`,"chart-bar":`<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6"/><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10"/><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14"/><path d="M4 20h14"/>`,"chart-pie":`<path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"/><path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"/>`,trophy:`<path d="M8 21l8 0"/><path d="M12 17l0 4"/><path d="M7 4l10 0"/><path d="M17 4v8a5 5 0 0 1 -10 0v-8"/><path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>`,"help-circle":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 16v.01"/><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>`,"question-mark":`<path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"/><path d="M12 19l0 .01"/>`,bulb:`<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/>`,sparkles:`<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6"/>`,"cloud-upload":`<path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"/><path d="M9 15l3 -3l3 3"/><path d="M12 12l0 9"/>`,printer:`<path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"/><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"/><path d="M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -4"/>`,"credit-card":`<path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8"/><path d="M3 10l18 0"/><path d="M7 15l.01 0"/><path d="M11 15l2 0"/>`,wallet:`<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"/><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"/>`,atom:`<path d="M12 12v.01"/><path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9"/><path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242"/>`,flask:`<path d="M9 3l6 0"/><path d="M10 9l4 0"/><path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6"/>`,"math-function":`<path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2"/><path d="M5 12h6"/><path d="M15 12l6 6"/><path d="M15 18l6 -6"/>`,leaf:`<path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0"/>`,language:`<path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629"/><path d="M4 6.371h7"/><path d="M5 9c0 2.144 2.252 3.908 6 4"/><path d="M12 20l4 -9l4 9"/><path d="M19.1 18h-6.2"/><path d="M6.694 3l.793 .582"/>`,palette:`<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>`,music:`<path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M9 17v-13h10v13"/><path d="M9 8h10"/>`,"ball-football":`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55l4.76 -3.45"/><path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45"/>`,"trending-up":`<path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/>`})),ht=new Set;function gt(){return[...mt.keys()]}h(`ep-icon`,class extends j{static properties={name:{reflect:!0},label:{}};static styles=g`
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
  `;constructor(){super(),this.name=``,this.label=``}connectedCallback(){super.connectedCallback(),ht.add(this)}disconnectedCallback(){super.disconnectedCallback(),ht.delete(this)}updated(){this.label?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}render(){return T`<svg
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
      ${qe`${pt(mt.get(this.name)??``)}`}
    </svg>`}});var N=g`
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
`,P=g`
  outline: var(--ep-border-width-thick) solid var(--ep-color-border-focus);
  outline-offset: 2px;
`,_t=g`
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
`,F=g`
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

  :host(:is([disabled], :disabled)) .label {
    color: var(--ep-color-text-disabled);
  }
`,I=g`
  :host {
    --ep-tone-subtle: var(--ep-color-surface-muted);
    --ep-tone-bold: var(--ep-color-text-primary);
    --ep-tone-on-bold: var(--ep-color-text-inverse);
    --ep-tone-text: var(--ep-color-text-primary);
  }
  ${he([1,2,3,4,5,6].map(e=>`:host([tone='${e}']) {
    --ep-tone-subtle: var(--ep-color-category-${e}-subtle);
    --ep-tone-bold: var(--ep-color-category-${e}-bold);
    --ep-tone-on-bold: var(--ep-color-category-${e}-on-bold);
    --ep-tone-text: var(--ep-color-category-${e}-text);
  }`).join(`
`))}
`,vt=g`
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
    ${P}
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

  slot[hidden] {
    display: none;
  }

  :host([loading]) .button {
    cursor: progress;
  }

  /* A progress indicator, so it keeps turning under reduced motion: it's the only sign that work is happening. */
  .spinner {
    flex: none;
    width: var(--_icon-size);
    height: var(--_icon-size);
    border: 2px solid currentColor;
    border-inline-end-color: transparent;
    border-radius: 50%;
    animation:
      spinner-in var(--ep-motion-duration-fast) var(--ep-motion-easing-enter),
      spinner-turn 1s linear infinite;
  }

  @keyframes spinner-in {
    from {
      opacity: 0;
    }
  }

  @keyframes spinner-turn {
    to {
      transform: rotate(1turn);
    }
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
`,yt=400,bt=500;h(`ep-button`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={variant:{reflect:!0},size:{reflect:!0},type:{},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},fullWidth:{type:Boolean,reflect:!0,attribute:`full-width`},_spinning:{state:!0}};static styles=[N,vt];#e=this.attachInternals();#t;#n=0;constructor(){super(),this.variant=`primary`,this.size=`md`,this.type=`button`,this.disabled=!1,this.fullWidth=!1,this.loading=!1,this._spinning=!1,this.addEventListener(`click`,e=>{this.loading&&(e.preventDefault(),e.stopImmediatePropagation())},{capture:!0})}willUpdate(e){if(e.has(`loading`)){if(clearTimeout(this.#t),this.loading){if(this._spinning)return;this.#t=setTimeout(()=>{this._spinning=!0,this.#n=performance.now()},yt)}else if(this._spinning){let e=bt-(performance.now()-this.#n);e<=0?this._spinning=!1:this.#t=setTimeout(()=>this._spinning=!1,e)}}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.#t),this._spinning=!1}#r=!1;formDisabledCallback(e){this.#r=e,this.requestUpdate()}get#i(){return this.disabled||this.#r}#a(){let e=this.#e.form;this.#i||this.loading||!e||(this.type===`submit`&&e.requestSubmit(),this.type===`reset`&&e.reset())}render(){return T`<button
      part="base"
      class="button"
      type="button"
      ?disabled=${this.#i}
      aria-busy=${this.loading?`true`:D}
      @click=${this.#a}
    >
      ${this._spinning?T`<span class="spinner" aria-hidden="true"></span>`:D}
      <slot name="prefix" ?hidden=${this._spinning}></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </button>`}}),h(`ep-icon-button`,class extends j{static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={icon:{reflect:!0},label:{},variant:{reflect:!0},size:{reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[N,vt,g`
      .button {
        width: var(--_height);
        padding: 0;
      }
    `];constructor(){super(),this.icon=``,this.label=``,this.variant=`ghost`,this.size=`md`,this.disabled=!1}render(){return T`<button part="base" class="button" type="button" aria-label=${this.label} ?disabled=${this.disabled}>
      <ep-icon name=${this.icon}></ep-icon>
    </button>`}});var{I:xt}=it,St=e=>e,Ct=e=>e.strings===void 0,wt=()=>document.createComment(``),L=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new xt(r.insertBefore(wt(),i),r.insertBefore(wt(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=St(e).nextSibling;St(r).insertBefore(e,i),e=t}}}return n},R=(e,t,n=e)=>(e._$AI(t,n),e),Tt={},Et=(e,t=Tt)=>e._$AH=t,Dt=e=>e._$AH,Ot=e=>{e._$AR(),e._$AA.remove()},kt=lt(class extends ut{constructor(e){if(super(e),e.type!==M.PROPERTY&&e.type!==M.ATTRIBUTE&&e.type!==M.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ct(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===E||t===D)return t;let n=e.element,r=e.name;if(e.type===M.PROPERTY){if(t===n[r])return E}else if(e.type===M.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return E}else if(e.type===M.ATTRIBUTE&&n.getAttribute(r)===t+``)return E;return Et(e),t}}),At=g`
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
    ${P}
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
`;h(`ep-text-field`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={label:{},hideLabel:{type:Boolean,reflect:!0,attribute:`hide-label`},value:{},name:{reflect:!0},type:{},placeholder:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},size:{reflect:!0},autocomplete:{},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0}};static styles=[N,F,At,_t];#e=this.attachInternals();#t=``;constructor(){super(),this.label=``,this.hideLabel=!1,this.value=``,this.name=``,this.type=`text`,this.placeholder=``,this.helperText=``,this.errorText=``,this.size=`md`,this.autocomplete=``,this.disabled=!1,this.readonly=!1,this.required=!1}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``}get form(){return this.#e.form}get validity(){return this.#e.validity}checkValidity(){return this.#e.checkValidity()}formResetCallback(){this.value=this.#t}#n=!1;formDisabledCallback(e){this.#n=e,this.requestUpdate()}get#r(){return this.disabled||this.#n}updated(){this.#e.setFormValue(this.value);let e=this.renderRoot.querySelector(`input`);this.errorText?this.#e.setValidity({customError:!0},this.errorText,e):e.validity.valid?this.#e.setValidity({}):this.#e.setValidity(e.validity,e.validationMessage,e)}#i(e){this.value=e.target.value}#a(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}#o(e){let t=this.#e.form;if(e.key!==`Enter`||e.isComposing||e.defaultPrevented||!t)return;let n=[...t.elements].find(e=>e.type===`submit`);if(n?.matches(`:disabled`))return;e.preventDefault();let r=n instanceof HTMLButtonElement||n instanceof HTMLInputElement;t.requestSubmit(r?n:void 0)}render(){let e=!!this.errorText,t=[this.helperText&&`helper`,e&&`error`].filter(Boolean).join(` `);return T`<div class="field">
      ${this.label?T`<label class="label ${this.hideLabel?`visually-hidden`:``}" for="input"
            >${this.label}${this.required?T`<span class="required" aria-hidden="true">*</span>`:D}</label
          >`:D}
      <div part="base" class="box ${e?`invalid`:``} ${this.#r?`disabled`:``}">
        <slot name="prefix"></slot>
        <input
          part="input"
          id="input"
          class="control"
          type=${this.type}
          name=${this.name||D}
          .value=${kt(this.value)}
          placeholder=${this.placeholder||D}
          autocomplete=${this.autocomplete||D}
          ?disabled=${this.#r}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${e?`true`:D}
          aria-describedby=${t||D}
          @input=${this.#i}
          @change=${this.#a}
          @keydown=${this.#o}
        />
        <slot name="suffix"></slot>
      </div>
      ${this.helperText?T`<p class="helper" id="helper">${this.helperText}</p>`:D}
      ${e?T`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:D}
    </div>`}}),h(`ep-textarea`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={label:{},value:{},name:{reflect:!0},placeholder:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},rows:{type:Number},maxlength:{type:Number},resize:{reflect:!0},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0}};static styles=[N,F,At,g`
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
    `];#e=this.attachInternals();#t=``;constructor(){super(),this.label=``,this.value=``,this.name=``,this.placeholder=``,this.helperText=``,this.errorText=``,this.rows=4,this.maxlength=void 0,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.required=!1}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``}get form(){return this.#e.form}formResetCallback(){this.value=this.#t}#n=!1;formDisabledCallback(e){this.#n=e,this.requestUpdate()}get#r(){return this.disabled||this.#n}updated(){this.#e.setFormValue(this.value);let e=this.renderRoot.querySelector(`textarea`);this.errorText?this.#e.setValidity({customError:!0},this.errorText,e):e.validity.valid?this.#e.setValidity({}):this.#e.setValidity(e.validity,e.validationMessage,e)}#i(e){this.value=e.target.value}#a(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=!!this.errorText,t=e?`error`:this.helperText?`helper`:``,n=this.helperText||e||this.maxlength;return T`<div class="field">
      ${this.label?T`<label class="label" for="textarea"
            >${this.label}${this.required?T`<span class="required" aria-hidden="true">*</span>`:D}</label
          >`:D}
      <div part="base" class="box ${e?`invalid`:``} ${this.#r?`disabled`:``}">
        <textarea
          part="textarea"
          id="textarea"
          class="control"
          name=${this.name||D}
          rows=${this.rows}
          maxlength=${this.maxlength??D}
          .value=${kt(this.value)}
          placeholder=${this.placeholder||D}
          ?disabled=${this.#r}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${e?`true`:D}
          aria-describedby=${t||D}
          @input=${this.#i}
          @change=${this.#a}
        ></textarea>
      </div>
      ${n?T`<div class="footer">
            ${e?T`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:this.helperText?T`<p class="helper" id="helper">${this.helperText}</p>`:D}
            ${this.maxlength?T`<span class="count" aria-hidden="true">${this.value.length}/${this.maxlength}</span>`:D}
          </div>`:D}
    </div>`}}),h(`ep-select`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={label:{},value:{},name:{reflect:!0},placeholder:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},size:{reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},_options:{state:!0}};static styles=[N,F,At,g`
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
    `];#e=this.attachInternals();#t=``;#n=new MutationObserver(()=>this.#r());constructor(){super(),this.label=``,this.value=``,this.name=``,this.placeholder=``,this.helperText=``,this.errorText=``,this.size=`md`,this.disabled=!1,this.required=!1,this._options=[]}connectedCallback(){super.connectedCallback(),this.#r(),this.#n.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.#n.disconnect()}#r(){let e=[...this.querySelectorAll(`option`)];if(this._options=e.map(e=>({value:e.value,label:e.textContent??``,disabled:e.disabled})),!this.hasUpdated){let t=e.find(e=>e.hasAttribute(`selected`));!this.value&&t?this.value=t.value:!this.value&&!this.placeholder&&e[0]&&(this.value=e[0].value),this.#t=this.value}}get form(){return this.#e.form}formResetCallback(){this.value=this.#t}#i=!1;formDisabledCallback(e){this.#i=e,this.requestUpdate()}get#a(){return this.disabled||this.#i}updated(){let e=this.renderRoot.querySelector(`select`);e.value=this.value,this.#e.setFormValue(this.value),this.errorText?this.#e.setValidity({customError:!0},this.errorText,e):this.required&&!this.value?this.#e.setValidity({valueMissing:!0},e.validationMessage||`Select an option.`,e):this.#e.setValidity({})}#o(e){this.value=e.target.value,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=!!this.errorText,t=[this.helperText&&`helper`,e&&`error`].filter(Boolean).join(` `);return T`<div class="field">
      ${this.label?T`<label class="label" for="select"
            >${this.label}${this.required?T`<span class="required" aria-hidden="true">*</span>`:D}</label
          >`:D}
      <div part="base" class="box ${e?`invalid`:``} ${this.#a?`disabled`:``}">
        <select
          part="select"
          id="select"
          class="control ${this.placeholder&&!this.value?`placeholder`:``}"
          name=${this.name||D}
          ?disabled=${this.#a}
          ?required=${this.required}
          aria-invalid=${e?`true`:D}
          aria-describedby=${t||D}
          @change=${this.#o}
        >
          ${this.placeholder?T`<option value="" disabled hidden>${this.placeholder}</option>`:D}
          ${this._options.map(e=>T`<option value=${e.value} ?disabled=${e.disabled} ?selected=${e.value===this.value}>${e.label}</option>`)}
        </select>
        <ep-icon class="chevron" name="chevron-down"></ep-icon>
      </div>
      ${this.helperText?T`<p class="helper" id="helper">${this.helperText}</p>`:D}
      ${e?T`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:D}
      <slot class="hidden-slot"></slot>
    </div>`}}),h(`ep-checkbox`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},name:{reflect:!0},value:{},helperText:{attribute:`helper-text`}};static styles=[N,g`
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
        ${P}
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

      :host(:is([disabled], :disabled)) .base {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      :host(:is([disabled], :disabled)) input {
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      :host(:is([disabled], :disabled)) .mark {
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
    `];#e=this.attachInternals();#t=!1;constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.name=``,this.value=`on`,this.helperText=``}connectedCallback(){super.connectedCallback(),this.#t=this.hasAttribute(`checked`)}get form(){return this.#e.form}formResetCallback(){this.checked=this.#t}#n=!1;formDisabledCallback(e){this.#n=e,this.requestUpdate()}get#r(){return this.disabled||this.#n}updated(){this.#e.setFormValue(this.checked?this.value:null);let e=this.renderRoot.querySelector(`input`);this.required&&!this.checked?this.#e.setValidity({valueMissing:!0},e.validationMessage||`Check this box to continue.`,e):this.#e.setValidity({})}#i(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.indeterminate?`minus`:this.checked?`check`:``;return T`<label part="base" class="base">
      <span class="control">
        <input
          part="control"
          type="checkbox"
          .checked=${kt(this.checked)}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.#r}
          ?required=${this.required}
          aria-describedby=${this.helperText?`helper`:D}
          @change=${this.#i}
        />
        ${e?T`<ep-icon class="mark" name=${e}></ep-icon>`:D}
      </span>
      <span class="text">
        <slot></slot>
        ${this.helperText?T`<span class="helper" id="helper">${this.helperText}</span>`:D}
      </span>
    </label>`}});var jt=class extends j{static properties={value:{reflect:!0},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[N,g`
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
        ${P}
      }

      :host([aria-disabled='true']) {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      :host([aria-disabled='true']) .control {
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      :host([aria-disabled='true'][checked]) .control {
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

        :host([aria-disabled='true']) .control {
          border-color: GrayText;
        }
      }
    `];#e=this.attachInternals();constructor(){super(),this.value=``,this.checked=!1,this.disabled=!1,this.#e.role=`radio`}updated(){this.#e.ariaChecked=String(this.checked),this.disabled||this.closest(`ep-radio-group`)?.matches(`:disabled`)?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`)}render(){return T`<span part="control" class="control"></span><slot></slot>`}},Mt=class extends j{static formAssociated=!0;static properties={label:{},name:{reflect:!0},value:{reflect:!0},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},orientation:{reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0}};static styles=[N,F,g`
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
    `];#e=this.attachInternals();#t=``;constructor(){super(),this.label=``,this.name=``,this.value=``,this.helperText=``,this.errorText=``,this.orientation=`vertical`,this.disabled=!1,this.required=!1,this.addEventListener(`click`,this.#s),this.addEventListener(`keydown`,this.#c)}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``}get form(){return this.#e.form}formResetCallback(){this.value=this.#t}#n=!1;formDisabledCallback(e){this.#n=e,this.requestUpdate()}get#r(){return this.disabled||this.#n}get#i(){return[...this.querySelectorAll(`ep-radio`)]}#a=e=>!e.disabled&&!this.#r;#o(e,t){if(!this.#a(e))return;let n=e.value!==this.value;this.value=e.value,t&&e.focus(),n&&this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}#s=e=>{let t=e.target.closest(`ep-radio`);t&&this.#o(t,!0)};#c=e=>{let t=e.target.closest(`ep-radio`);if(!t)return;if(e.key===` `){e.preventDefault(),this.#o(t,!1);return}let n={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(!n)return;e.preventDefault();let r=this.#i.filter(this.#a),i=r[(r.indexOf(t)+n+r.length)%r.length];i&&this.#o(i,!0)};updated(){let e=this.#i,t=e.filter(this.#a),n=e.find(e=>e.value===this.value),r=n&&this.#a(n)?n:t[0];for(let t of e)t.checked=t===n,t.tabIndex=t===r?0:-1,t.requestUpdate();this.#e.setFormValue(this.value||null),this.errorText?this.#e.setValidity({customError:!0},this.errorText):this.required&&!this.value?this.#e.setValidity({valueMissing:!0},`Select an option.`):this.#e.setValidity({})}render(){let e=!!this.errorText,t=e?`error`:this.helperText?`helper`:``;return T`<div
      class="field"
      role="radiogroup"
      aria-labelledby=${this.label?`label`:D}
      aria-describedby=${t||D}
      aria-required=${this.required?`true`:D}
      aria-invalid=${e?`true`:D}
      aria-disabled=${this.#r?`true`:D}
    >
      ${this.label?T`<span class="label" id="label" aria-hidden="true"
            >${this.label}${this.required?T`<span class="required" aria-hidden="true">*</span>`:D}</span
          >`:D}
      <div part="options" class="options">
        <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </div>
      ${this.helperText&&!e?T`<p class="helper" id="helper">${this.helperText}</p>`:D}
      ${e?T`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`:D}
    </div>`}};h(`ep-radio`,jt),h(`ep-radio-group`,Mt),h(`ep-switch`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},name:{reflect:!0},value:{},helperText:{attribute:`helper-text`}};static styles=[N,g`
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
        transition: background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-border-strong);
        transition: transform var(--ep-motion-duration-move) var(--ep-motion-easing-standard);
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
        ${P}
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
    `];#e=this.attachInternals();#t=!1;constructor(){super(),this.checked=!1,this.disabled=!1,this.name=``,this.value=`on`,this.helperText=``}connectedCallback(){super.connectedCallback(),this.#t=this.hasAttribute(`checked`)}get form(){return this.#e.form}formResetCallback(){this.checked=this.#t}#n=!1;formDisabledCallback(e){this.#n=e,this.requestUpdate()}get#r(){return this.disabled||this.#n}updated(){this.#e.setFormValue(this.checked?this.value:null)}#i(){this.#r||(this.checked=!this.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})))}render(){return T`<button
      part="base"
      class="base"
      type="button"
      role="switch"
      aria-checked=${String(this.checked)}
      aria-describedby=${this.helperText?`helper`:D}
      ?disabled=${this.#r}
      @click=${this.#i}
    >
      <span part="track" class="track"><span part="thumb" class="thumb"></span></span>
      <slot></slot>
    </button>
    ${this.helperText?T`<span class="helper" id="helper">${this.helperText}</span>`:D}`}});var Nt=g`
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
`;h(`ep-badge`,class extends j{static properties={variant:{reflect:!0},dot:{type:Boolean,reflect:!0}};static styles=[N,Nt,g`
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
    `];constructor(){super(),this.variant=`neutral`,this.dot=!1}render(){return T`<span part="base" class="base">
      ${this.dot?T`<span class="dot"></span>`:T`<slot name="prefix"></slot>`}
      <slot></slot>
    </span>`}}),h(`ep-tag`,class extends j{static properties={variant:{reflect:!0},size:{reflect:!0},removable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[N,Nt,g`
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
        ${P}
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
    `];constructor(){super(),this.variant=`neutral`,this.size=`md`,this.removable=!1,this.disabled=!1}#e(){this.dispatchEvent(new CustomEvent(`ep-remove`,{bubbles:!0,composed:!0}))}render(){let e=this.textContent?.trim()??``;return T`<span part="base" class="base">
      <slot name="prefix"></slot>
      <slot></slot>
      ${this.removable?T`<button
            part="remove"
            class="remove"
            type="button"
            aria-label=${`Remove ${e}`}
            ?disabled=${this.disabled}
            @click=${this.#e}
          >
            <ep-icon name="x"></ep-icon>
          </button>`:D}
    </span>`}}),h(`ep-avatar`,class extends j{static properties={name:{},src:{},size:{reflect:!0},_failed:{state:!0}};static styles=[N,g`
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
    `];constructor(){super(),this.name=``,this.src=``,this.size=`md`,this._failed=!1}willUpdate(e){e.has(`src`)&&(this._failed=!1)}get initials(){let e=this.name.trim().split(/\s+/).filter(Boolean);return e.length===0?``:(e[0][0]+(e.length>1?e[e.length-1][0]:``)).toUpperCase()}render(){let e=this.src&&!this._failed?T`<img src=${this.src} alt="" @error=${()=>this._failed=!0} />`:this.initials?T`<span aria-hidden="true">${this.initials}</span>`:T`<ep-icon name="user"></ep-icon>`;return T`<span part="base" class="base" role=${this.name?`img`:D} aria-label=${this.name||D} aria-hidden=${this.name?D:`true`}
      >${e}</span
    >`}}),h(`ep-avatar-group`,class extends j{static properties={max:{type:Number},label:{},size:{reflect:!0},_hidden:{state:!0}};static styles=[N,g`
      :host {
        display: inline-flex;
        align-items: center;
        --_overlap: -8px;
        --_ring: var(--ep-color-surface-raised);
      }

      :host([size='sm']) {
        --_overlap: -6px;
      }

      .group {
        display: inline-flex;
        align-items: center;
      }

      ::slotted(ep-avatar) {
        border-radius: var(--ep-radius-round);
        box-shadow: 0 0 0 2px var(--_ring);
      }

      ::slotted(ep-avatar:not(:first-child)) {
        margin-inline-start: var(--_overlap);
      }

      .count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: var(--_count-size, 32px);
        height: var(--_count-size, 32px);
        margin-inline-start: var(--_overlap);
        padding-inline: var(--ep-space-50);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-muted);
        box-shadow: 0 0 0 2px var(--_ring);
        color: var(--ep-color-text-primary);
        font: var(--ep-font-label-sm);
        font-variant-numeric: tabular-nums;
      }

      :host([size='md']) .count {
        --_count-size: 40px;
      }

      :host([size='xs']) .count {
        --_count-size: 24px;
      }

      @media (forced-colors: active) {
        .count {
          border: 1px solid CanvasText;
        }
      }
    `];constructor(){super(),this.max=4,this.label=``,this.size=`sm`,this._hidden=0}get#e(){return[...this.children].filter(e=>e.localName===`ep-avatar`)}#t=()=>{let e=Math.max(1,Math.floor(this.max)||1),t=this.#e;t.forEach((t,n)=>{t.hidden=n>=e,t.size=this.size}),this._hidden=Math.max(0,t.length-e)};willUpdate(){this.#t()}render(){return T`<div class="group" role=${this.label?`group`:D} aria-label=${this.label||D}>
      <slot @slotchange=${this.#t}></slot>
      ${this._hidden>0?T`<span part="count" class="count" role="img" aria-label="${this._hidden} more">+${this._hidden}</span>`:D}
    </div>`}}),h(`ep-icon-tile`,class extends j{static properties={icon:{},tone:{reflect:!0},size:{reflect:!0},label:{}};static styles=[N,I,g`
      :host {
        display: inline-flex;
        --_size: 40px;
      }

      :host([size='sm']) {
        --_size: 32px;
      }

      :host([size='lg']) {
        --_size: 56px;
      }

      .base {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--_size);
        height: var(--_size);
        border-radius: var(--ep-radius-control);
        background: var(--ep-tone-bold);
        color: var(--ep-tone-on-bold);
        font-size: calc(var(--_size) * 0.5);
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
          background: Canvas;
          color: CanvasText;
        }
      }
    `];constructor(){super(),this.icon=``,this.tone=``,this.size=`md`,this.label=``}render(){return T`<span
      part="base"
      class="base"
      role=${this.label?`img`:`presentation`}
      aria-label=${this.label||``}
      ><ep-icon name=${this.icon}></ep-icon
    ></span>`}});var Pt=18,Ft=2*Math.PI*Pt;h(`ep-progress-ring`,class extends j{static properties={value:{type:Number},max:{type:Number},label:{},tone:{reflect:!0},size:{reflect:!0}};static styles=[N,I,g`
      :host {
        display: inline-grid;
        place-items: center;
        position: relative;
        --_size: 44px;
        --_fill: var(--ep-tone-bold);
        color: var(--ep-tone-text);
      }

      :host([size='sm']) {
        --_size: 32px;
      }

      :host([size='lg']) {
        --_size: 64px;
      }

      svg {
        grid-area: 1 / 1;
        width: var(--_size);
        height: var(--_size);
        transform: rotate(-90deg);
      }

      circle {
        fill: none;
        stroke-width: 4;
      }

      .track {
        stroke: var(--ep-color-border-default);
      }

      .fill {
        stroke: var(--_fill);
        stroke-linecap: round;
        stroke-dasharray: var(--_circumference);
        stroke-dashoffset: var(--_offset);
        transition: stroke-dashoffset var(--ep-motion-duration-slow) var(--ep-motion-easing-standard);
      }

      .value {
        grid-area: 1 / 1;
        font: var(--ep-font-label-sm);
        font-size: calc(var(--_size) * 0.26);
        font-variant-numeric: tabular-nums;
      }

      @media (forced-colors: active) {
        .track {
          stroke: GrayText;
        }

        .fill {
          stroke: Highlight;
        }
      }
    `];constructor(){super(),this.value=0,this.max=100,this.label=``,this.tone=``,this.size=`md`}render(){let e=this.max>0?this.max:100,t=Math.min(Math.max(0,Number.isFinite(this.value)?this.value:0),e),n=Math.round(t/e*100);return T`<div
        role="progressbar"
        aria-label=${this.label}
        aria-valuemin="0"
        aria-valuemax=${e}
        aria-valuenow=${t}
        aria-valuetext="${n}%"
        style="display: contents"
      >
        <svg part="ring" viewBox="0 0 44 44" aria-hidden="true">
          <circle class="track" cx="22" cy="22" r=${Pt}></circle>
          <circle
            class="fill"
            cx="22"
            cy="22"
            r=${Pt}
            style="--_circumference: ${Ft}; --_offset: ${Ft*(1-t/e)}"
          ></circle>
        </svg>
        <span part="value" class="value" aria-hidden="true">${n}%</span>
      </div>`}});var z=class{#e;#t;constructor(e,...t){this.#e=e,this.#t=t,e.addController(this)}test(e){return e===`[default]`?[...this.#e.childNodes].some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`)):this.#e.querySelector(`:scope > [slot="${e}"]`)!==null}#n=e=>{let t=e.target;this.#t.includes(t.name||`[default]`)&&this.#e.requestUpdate()};hostConnected(){this.#e.shadowRoot?.addEventListener(`slotchange`,this.#n)}hostDisconnected(){this.#e.shadowRoot?.removeEventListener(`slotchange`,this.#n)}};h(`ep-stat`,class extends j{static properties={label:{},value:{},tone:{reflect:!0},variant:{reflect:!0}};static styles=[N,I,g`
      :host {
        display: block;
      }

      .base {
        display: grid;
        gap: var(--ep-space-25);
        height: 100%;
        padding: var(--ep-space-150) var(--ep-space-200);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-raised);
        box-shadow: var(--ep-shadow-raised);
        color: var(--ep-color-text-primary);
      }

      :host([variant='hero']) .base {
        background: var(--ep-color-hero-chip);
        box-shadow: none;
        color: var(--ep-color-hero-text);
      }

      :host([tone]) .base {
        background: var(--ep-tone-subtle);
        box-shadow: none;
        color: var(--ep-tone-text);
      }

      .label {
        font: var(--ep-font-label-md);
      }

      .value {
        margin: 0;
        font: var(--ep-font-heading-lg);
        letter-spacing: -0.03em;
        font-variant-numeric: tabular-nums;
      }

      .note {
        font: var(--ep-font-label-sm);
      }

      .note[hidden] {
        display: none;
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
        }
      }
    `];#e=new z(this,`note`);constructor(){super(),this.label=``,this.value=``,this.tone=``,this.variant=`default`}render(){return T`<div part="base" class="base" role="group" aria-label=${this.label}>
      <span class="label">${this.label}</span>
      <p part="value" class="value">${this.value}</p>
      <span class="note" ?hidden=${!this.#e.test(`note`)}><slot name="note"></slot></span>
    </div>`}});var It={info:`info-circle`,success:`circle-check`,warning:`alert-triangle`,danger:`alert-circle`},Lt=g`
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
`;h(`ep-alert`,class extends j{static properties={variant:{reflect:!0},heading:{},dismissible:{type:Boolean,reflect:!0}};static styles=[N,Lt,g`
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
    `];#e=new z(this,`actions`);constructor(){super(),this.variant=`info`,this.heading=``,this.dismissible=!1}#t(){let e=new CustomEvent(`ep-close`,{bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(this.hidden=!0)}render(){return T`<div part="base" class="base">
      <ep-icon class="icon" name=${It[this.variant]??It.info}></ep-icon>
      <div class="content">
        ${this.heading?T`<p class="heading">${this.heading}</p>`:D}
        <slot></slot>
        <div class="actions" ?hidden=${!this.#e.test(`actions`)}><slot name="actions"></slot></div>
      </div>
      ${this.dismissible?T`<ep-icon-button icon="x" label="Dismiss" size="sm" @click=${this.#t}></ep-icon-button>`:D}
    </div>`}}),h(`ep-card`,class extends j{static properties={variant:{reflect:!0},tone:{reflect:!0},interactive:{type:Boolean,reflect:!0}};static styles=[N,I,g`
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
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      :host([variant='elevated']) .base {
        border-color: transparent;
        background: var(--ep-color-surface-raised);
        box-shadow: var(--ep-shadow-raised);
      }

      /* Hover is a state change only: the shadow deepens, nothing moves (docs/motion.md, section 6). */
      @media (hover: hover) {
        :host([interactive][variant='elevated']) .base:hover {
          box-shadow: var(--ep-shadow-raised-hover);
        }
      }

      :host([interactive][variant='elevated']) .base:focus-within {
        box-shadow: var(--ep-shadow-raised-hover);
      }

      :host([interactive]) .base {
        transition: box-shadow var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      :host([variant='outlined']) .base {
        background: var(--ep-color-surface-default);
      }

      :host([variant='filled']) .base {
        border-color: transparent;
        background: var(--ep-color-surface-muted);
      }

      /* A toned card turns its media area into a tinted cover. Slotted content reads the --ep-tone-* properties. */
      :host([tone]) .media {
        margin: var(--ep-space-100);
        padding: var(--ep-space-150);
        border-radius: var(--ep-radius-control);
        background: var(--ep-tone-subtle);
        color: var(--ep-tone-text);
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
    `];#e=new z(this,`media`,`heading`,`header-actions`,`footer`);constructor(){super(),this.variant=`elevated`,this.tone=``,this.interactive=!1}render(){let e=this.#e.test(`heading`)||this.#e.test(`header-actions`);return T`<div part="base" class="base">
      <div class="media" ?hidden=${!this.#e.test(`media`)}><slot name="media"></slot></div>
      <div class="header" ?hidden=${!e}>
        <slot name="heading"></slot>
        <slot name="header-actions"></slot>
      </div>
      <div class="body"><slot></slot></div>
      <div class="footer" ?hidden=${!this.#e.test(`footer`)}><slot name="footer"></slot></div>
    </div>`}});var Rt=class extends j{static properties={panel:{reflect:!0},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[N,g`
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
        ${P}
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
    `];constructor(){super(),this.panel=``,this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`),this.slot=`nav`}updated(){this.setAttribute(`aria-selected`,String(this.selected)),this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`)}render(){return T`<span part="base" class="base"><slot name="prefix"></slot><slot></slot></span>`}},zt=class extends j{static properties={name:{reflect:!0},active:{type:Boolean,reflect:!0}};static styles=[N,g`
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
        ${P}
      }
    `];constructor(){super(),this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tabpanel`),this.hasAttribute(`tabindex`)||(this.tabIndex=0)}render(){return T`<slot></slot>`}},Bt=0;function Vt(e=`ep`){return Bt+=1,`${e}-${Bt}`}var Ht=class extends j{static properties={value:{reflect:!0},label:{}};static styles=[N,g`
      :host {
        display: block;
      }

      .tablist {
        display: flex;
        overflow-x: auto;
        border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        scrollbar-width: thin;
      }
    `];constructor(){super(),this.value=``,this.label=``}get#e(){return[...this.querySelectorAll(`:scope > ep-tab`)]}get#t(){return[...this.querySelectorAll(`:scope > ep-tab-panel`)]}#n(e,t){e&&!e.disabled&&(t&&e.focus(),e.panel!==this.value&&(this.value=e.panel,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))))}#r(e){this.#n(e.target.closest(`ep-tab`)??void 0,!0)}#i(e){let t=e.target.closest(`ep-tab`);if(!t)return;let n=this.#e.filter(e=>!e.disabled),r=n.indexOf(t),i={ArrowRight:n[(r+1)%n.length],ArrowLeft:n[(r-1+n.length)%n.length],Home:n[0],End:n[n.length-1]}[e.key];i&&(e.preventDefault(),this.#n(i,!0))}updated(){let e=this.#e,t=this.#t,n=this.value||e.find(e=>!e.disabled)?.panel||``;for(let r of e){let e=t.find(e=>e.name===r.panel);r.id||=Vt(`ep-tab`),e&&(e.id||=Vt(`ep-tab-panel`),r.setAttribute(`aria-controls`,e.id),e.setAttribute(`aria-labelledby`,r.id)),r.selected=r.panel===n,r.tabIndex=r.selected?0:-1}for(let e of t)e.active=e.name===n}render(){return T`<div
        part="tablist"
        class="tablist"
        role="tablist"
        aria-label=${this.label}
        @click=${this.#r}
        @keydown=${this.#i}
      >
        <slot name="nav" @slotchange=${()=>this.requestUpdate()}></slot>
      </div>
      <slot @slotchange=${()=>this.requestUpdate()}></slot>`}};h(`ep-tab`,Rt),h(`ep-tab-panel`,zt),h(`ep-tabs`,Ht);var Ut=500,Wt=300,Gt=100,B=6,Kt=-1/0,qt=new Set;h(`ep-tooltip`,class extends j{static properties={content:{},placement:{reflect:!0},_open:{state:!0}};static styles=[N,g`
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
        box-shadow: var(--ep-shadow-raised);
        pointer-events: auto;
        overflow: visible;
        /* Enters with a fade and a small slide away from the trigger. The slide is 0 under reduced motion. */
        --_dx: 0px;
        --_dy: 0px;
      }

      .tooltip.open {
        animation: tooltip-enter var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
      }

      .tooltip[data-side='top'] {
        --_dy: var(--ep-motion-distance-sm);
      }

      .tooltip[data-side='bottom'] {
        --_dy: calc(-1 * var(--ep-motion-distance-sm));
      }

      .tooltip[data-side='left'] {
        --_dx: var(--ep-motion-distance-sm);
      }

      .tooltip[data-side='right'] {
        --_dx: calc(-1 * var(--ep-motion-distance-sm));
      }

      @keyframes tooltip-enter {
        from {
          opacity: 0;
          transform: translate(var(--_dx), var(--_dy));
        }
      }

      .tooltip:not(.open):not(:popover-open) {
        display: none;
      }

      @media (forced-colors: active) {
        .tooltip {
          border: 1px solid CanvasText;
        }
      }
    `];#e;#t;constructor(){super(),this.content=``,this.placement=`top`,this._open=!1,this.addEventListener(`pointerenter`,this.#a),this.addEventListener(`pointerleave`,this.#o),this.addEventListener(`focusin`,this.#i),this.addEventListener(`focusout`,this.#s)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.#c)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.#c),clearTimeout(this.#t),clearTimeout(this.#e),qt.delete(this)}get#n(){return[...this.children].find(e=>e instanceof HTMLElement)}get#r(){return this.renderRoot.querySelector(`.tooltip`)}#i=()=>{clearTimeout(this.#e),clearTimeout(this.#t),this.content&&(this._open=!0)};#a=()=>{if(clearTimeout(this.#e),this._open||qt.size>0||performance.now()-Kt<Wt)return this.#i();clearTimeout(this.#t),this.#t=setTimeout(this.#i,Ut)};#o=()=>{clearTimeout(this.#t),this.#e=setTimeout(this.#s,Gt)};#s=()=>{clearTimeout(this.#e),clearTimeout(this.#t),this._open&&(Kt=performance.now()),this._open=!1};#c=e=>{e.key===`Escape`&&this._open&&this.#s()};#l(){let e=this.#n,t=this.#r;if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i={top:n.top-r.height-B>=0,bottom:n.bottom+r.height+B<=innerHeight,left:n.left-r.width-B>=0,right:n.right+r.width+B<=innerWidth},a={top:`bottom`,bottom:`top`,left:`right`,right:`left`},o=i[this.placement]||!i[a[this.placement]]?this.placement:a[this.placement],s=0,c=0;o===`top`||o===`bottom`?(s=o===`top`?n.top-r.height-B:n.bottom+B,c=n.left+n.width/2-r.width/2):(s=n.top+n.height/2-r.height/2,c=o===`left`?n.left-r.width-B:n.right+B),c=Math.min(Math.max(4,c),innerWidth-r.width-4),t.dataset.side=o,t.style.top=`${Math.round(s)}px`,t.style.left=`${Math.round(c)}px`}updated(e){let t=this.#n;if(t&&e.has(`content`)){let e=t.getAttribute(`label`)===this.content||t.getAttribute(`aria-label`)===this.content;this.content&&!e?t.setAttribute(`aria-description`,this.content):t.removeAttribute(`aria-description`)}if(e.has(`_open`)){let e=this.#r;typeof e.showPopover==`function`&&(this._open&&!e.matches(`:popover-open`)&&e.showPopover(),!this._open&&e.matches(`:popover-open`)&&e.hidePopover()),this._open?qt.add(this):qt.delete(this),this._open&&this.#l()}}render(){return T`<slot @slotchange=${()=>this.requestUpdate(`content`)}></slot>
      <div
        part="tooltip"
        class="tooltip ${this._open?`open`:``}"
        role="tooltip"
        popover="manual"
        aria-hidden="true"
        @pointerenter=${this.#i}
        @pointerleave=${this.#o}
      >
        ${this.content}
      </div>`}});var V=[],Jt=new Set,Yt=()=>V.at(-1)??null;function Xt(e){V.includes(e)||V.push(e),Jt.forEach(e=>e())}function H(e){let t=V.indexOf(e);t!==-1&&(V.splice(t,1),Jt.forEach(e=>e()))}function Zt(e){return Jt.add(e),()=>Jt.delete(e)}h(`ep-modal`,class extends j{static properties={open:{type:Boolean,reflect:!0},heading:{},size:{reflect:!0}};static styles=[N,g`
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
        box-shadow: var(--ep-shadow-overlay);
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
        animation: fade var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      @keyframes enter {
        from {
          opacity: 0;
          transform: scale(var(--ep-motion-scale-enter));
        }
      }

      @keyframes fade {
        from {
          opacity: 0;
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
    `];#e=new z(this,`footer`);constructor(){super(),this.open=!1,this.heading=``,this.size=`md`}show(){this.open=!0}close(){this.open=!1}get#t(){return this.renderRoot.querySelector(`dialog`)}updated(e){if(!e.has(`open`))return;let t=this.#t;this.open&&!t.open&&(t.showModal(),Xt(this)),!this.open&&t.open&&t.close(),this.open||H(this)}disconnectedCallback(){super.disconnectedCallback(),H(this)}#n(){this.open=!1,this.dispatchEvent(new CustomEvent(`ep-close`,{bubbles:!0,composed:!0}))}render(){return T`<dialog part="dialog" aria-labelledby="heading" @close=${this.#n}>
      <header>
        <h2 id="heading">${this.heading}</h2>
        <ep-icon-button icon="x" label="Close" @click=${()=>this.close()}></ep-icon-button>
      </header>
      <div class="body"><slot></slot></div>
      <footer ?hidden=${!this.#e.test(`footer`)}><slot name="footer"></slot></footer>
      <slot name="toaster"></slot>
    </dialog>`}});function Qt(e,t){let n=getComputedStyle(e).getPropertyValue(`--ep-motion-duration-${t}`).trim(),r=parseFloat(n);return Number.isFinite(r)?n.endsWith(`ms`)?r:r*1e3:0}var $t=class extends j{static properties={variant:{reflect:!0},heading:{},duration:{type:Number}};static styles=[N,g`
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
        box-shadow: var(--ep-shadow-overlay);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        animation: enter var(--ep-motion-duration-slow) var(--ep-motion-easing-enter);
      }

      @keyframes enter {
        from {
          opacity: 0;
          transform: translateY(var(--ep-motion-distance-md));
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
    `];#e;#t=0;#n=0;#r=!1;constructor(){super(),this.variant=`info`,this.heading=``,this.duration=void 0,this.addEventListener(`pointerenter`,this.#a),this.addEventListener(`pointerleave`,this.#o),this.addEventListener(`focusin`,this.#a),this.addEventListener(`focusout`,this.#o)}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.#t=this.#i),this.#o()}disconnectedCallback(){super.disconnectedCallback(),this.#a()}get#i(){return this.querySelector(`:scope > [slot="action"]`)?0:this.duration===void 0?en(`${this.heading} ${this.textContent??``}`):this.duration}#a=()=>{this.#e&&(clearTimeout(this.#e),this.#e=void 0,this.#t-=Date.now()-this.#n)};#o=()=>{this.#i<=0||this.#e||this.matches(`:focus-within`)||(this.#n=Date.now(),this.#e=setTimeout(()=>this.close(),Math.max(this.#t,1e3)))};async close(){if(this.#r)return;this.#r=!0,clearTimeout(this.#e);let e=this.renderRoot.querySelector(`.base`),t=Qt(this,`normal`);e&&t>0&&typeof e.animate==`function`&&await e.animate([{opacity:1},{opacity:0}],{duration:t,easing:getComputedStyle(this).getPropertyValue(`--ep-motion-easing-exit`).trim()||`ease-in`,fill:`forwards`}).finished.catch(()=>{}),this.dispatchEvent(new CustomEvent(`ep-close`,{bubbles:!0,composed:!0})),this.remove()}render(){return T`<div part="base" class="base">
      <ep-icon class="icon" name=${It[this.variant]??It.info}></ep-icon>
      <div class="content">
        ${this.heading?T`<p class="heading">${this.heading}</p>`:D}
        <div class="message"><slot></slot></div>
      </div>
      <div class="action"><slot name="action"></slot></div>
      <ep-icon-button icon="x" label="Dismiss notification" size="sm" @click=${()=>this.close()}></ep-icon-button>
    </div>`}};function en(e){let t=e.trim().split(/\s+/).filter(Boolean).length;return 6e3+Math.ceil(Math.max(0,t-20)/20)*1e3}var tn=typeof HTMLElement<`u`&&`showPopover`in HTMLElement.prototype,nn=class extends j{static properties={placement:{reflect:!0}};static styles=g`
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
  `;constructor(){super(),this.placement=`bottom-end`}#e=null;#t;connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,`Notifications`),this.setAttribute(`aria-live`,`polite`),this.setAttribute(`aria-relevant`,`additions`),tn&&this.setAttribute(`popover`,`manual`),this.#t||=(this.#e=this.parentNode,Zt(()=>this.#n())),this.#n(),this.#r()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.#t?.(),this.#t=void 0)})}#n(){let e=Yt(),t=e??this.#e;t&&this.parentNode!==t&&(e?this.slot=`toaster`:this.removeAttribute(`slot`),t.append(this))}#r(){tn&&this.isConnected&&(this.matches(`:popover-open`)&&this.hidePopover(),this.showPopover())}render(){return T`<slot @slotchange=${()=>this.#r()}></slot>`}};function U(e){let t=document.querySelector(`ep-toaster`);t||(t=document.createElement(`ep-toaster`),document.body.append(t));let n=document.createElement(`ep-toast`);return n.variant=e.variant??`info`,n.heading=e.heading??``,n.duration=e.duration,n.textContent=e.message,requestAnimationFrame(()=>t.append(n)),n}h(`ep-toast`,$t),h(`ep-toaster`,nn);var rn=class extends j{static properties={label:{}};static styles=[N,g`
      :host {
        display: block;
      }

      .list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `];constructor(){super(),this.label=`Breadcrumb`}#e(){let e=[...this.querySelectorAll(`:scope > ep-breadcrumb-item`)];e.forEach((t,n)=>{t.current=n===e.length-1,t.first=n===0})}render(){return T`<nav part="base" aria-label=${this.label}>
      <div part="list" class="list" role="list"><slot @slotchange=${this.#e}></slot></div>
    </nav>`}},an=class extends j{static properties={href:{},current:{type:Boolean,reflect:!0},first:{type:Boolean,state:!0}};static styles=[N,g`
      :host {
        display: inline-flex;
        align-items: center;
        min-width: 0;
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-snug);
      }

      .separator {
        flex: none;
        margin: 0 var(--ep-space-50);
        font-size: var(--ep-size-icon-sm);
        color: var(--ep-color-text-secondary);
      }

      .link {
        display: inline-block;
        max-width: 24ch;
        padding: var(--ep-space-50) var(--ep-space-25);
        overflow: hidden;
        border-radius: var(--ep-radius-indicator);
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      a.link {
        color: var(--ep-color-text-link);
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      a.link:hover {
        text-decoration-thickness: 2px;
      }

      a.link:focus-visible {
        ${P}
      }

      span.link {
        color: var(--ep-color-text-primary);
        font-weight: var(--ep-font-weight-medium);
      }

      @media (forced-colors: active) {
        a.link {
          color: LinkText;
        }
      }
    `];constructor(){super(),this.href=``,this.current=!1,this.first=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`listitem`)}render(){return T`${this.first?D:T`<ep-icon part="separator" class="separator" name="chevron-right"></ep-icon>`}${this.href&&!this.current?T`<a part="link" class="link" href=${this.href}><slot></slot></a>`:T`<span part="link" class="link" aria-current=${this.current?`page`:D}><slot></slot></span>`}`}};h(`ep-breadcrumbs`,rn),h(`ep-breadcrumb-item`,an);var on=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},sn=lt(class extends ut{constructor(e){if(super(e),e.type!==M.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Dt(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=R(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=R(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=R(i[d],a[m]),L(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=R(i[f],a[p]),L(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=on(o,p,m),u=on(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=L(e,i[d]);R(t,a[p]),c[p]=t}else c[p]=R(n,a[p]),L(e,i[d],n),i[t]=null;p++}else Ot(i[f]),f--}else Ot(i[d]),d++;for(;p<=m;){let t=L(e,c[m+1]);R(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Ot(e)}return this.ut=o,Et(e,c),E}});function cn(e,t){if(t<=7)return Array.from({length:t},(e,t)=>t+1);let n=Math.max(2,Math.min(e-1,t-4)),r=Math.min(t-1,Math.max(e+1,5)),i=Array.from({length:r-n+1},(e,t)=>n+t);return[1,...n>2?[`gap`]:[],...i,...r<t-1?[`gap`]:[],t]}h(`ep-pagination`,class extends j{static properties={page:{type:Number,reflect:!0},totalPages:{type:Number,attribute:`total-pages`},label:{}};static styles=[N,g`
      :host {
        display: block;
        container-type: inline-size;
      }

      .list {
        display: flex;
        align-items: center;
        gap: var(--ep-space-50);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--ep-space-50);
        min-width: var(--ep-size-control-md);
        height: var(--ep-size-control-md);
        padding: 0 var(--ep-space-100);
        border: var(--ep-border-width-thin) solid transparent;
        border-radius: var(--ep-radius-control);
        background: var(--ep-color-interactive-ghost-default);
        color: var(--ep-color-text-primary);
        font: inherit;
        font-size: var(--ep-font-size-200);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        transition: background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      .button:hover {
        background: var(--ep-color-interactive-ghost-hover);
      }

      .button:active {
        background: var(--ep-color-interactive-ghost-active);
      }

      .button:focus-visible {
        ${P}
      }

      .button[aria-current='page'] {
        background: var(--ep-color-interactive-primary-default);
        color: var(--ep-color-text-on-primary);
        font-weight: var(--ep-font-weight-semibold);
        cursor: default;
      }

      .button:disabled {
        background: transparent;
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      .gap,
      .summary {
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-200);
        font-variant-numeric: tabular-nums;
      }

      .gap {
        min-width: var(--ep-size-control-sm);
        text-align: center;
      }

      .summary {
        display: none;
        padding: 0 var(--ep-space-100);
        white-space: nowrap;
      }

      ep-icon {
        font-size: var(--ep-size-icon-md);
      }

      @container (max-width: 400px) {
        .number,
        .gap {
          display: none;
        }

        .summary {
          display: block;
        }

        .step-label {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
      }

      @media (forced-colors: active) {
        .button[aria-current='page'] {
          border-color: Highlight;
          background: Highlight;
          color: HighlightText;
        }

        .button:disabled {
          color: GrayText;
        }
      }
    `];constructor(){super(),this.page=1,this.totalPages=1,this.label=`Pagination`}#e(e){let t=Math.max(1,this.totalPages),n=Math.min(Math.max(1,e),t);n!==this.page&&(this.page=n,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})))}render(){let e=Math.max(1,this.totalPages),t=Math.min(Math.max(1,this.page),e);return T`<nav part="base" aria-label=${this.label}>
      <ul class="list">
        <li>
          <button class="button" type="button" ?disabled=${t<=1} @click=${()=>this.#e(t-1)}>
            <ep-icon name="chevron-left"></ep-icon><span class="step-label">Previous</span>
          </button>
        </li>
        ${sn(cn(t,e),(e,t)=>e===`gap`?`gap-${t}`:e,e=>e===`gap`?T`<li class="gap" aria-hidden="true">…</li>`:T`<li class="number">
                  <button
                    class="button"
                    type="button"
                    aria-label="Page ${e}"
                    aria-current=${e===t?`page`:`false`}
                    @click=${()=>this.#e(e)}
                  >
                    ${e}
                  </button>
                </li>`)}
        <li class="summary">Page ${t} of ${e}</li>
        <li>
          <button class="button" type="button" ?disabled=${t>=e} @click=${()=>this.#e(t+1)}>
            <span class="step-label">Next</span><ep-icon name="chevron-right"></ep-icon>
          </button>
        </li>
      </ul>
    </nav>`}}),h(`ep-progress-bar`,class extends j{static properties={value:{type:Number},max:{type:Number},label:{},helperText:{attribute:`helper-text`},hideLabel:{type:Boolean,attribute:`hide-label`},showValue:{type:Boolean,attribute:`show-value`},variant:{reflect:!0},size:{reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        --_height: 8px;
        --_fill: var(--ep-color-accent-default);
      }

      :host([size='sm']) {
        --_height: 4px;
      }

      :host([variant='success']) {
        --_fill: var(--ep-color-text-success);
      }

      :host([variant='danger']) {
        --_fill: var(--ep-color-text-danger);
      }

      .header {
        display: flex;
        justify-content: space-between;
        gap: var(--ep-space-200);
        margin-bottom: var(--ep-space-100);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-snug);
      }

      .label {
        color: var(--ep-color-text-primary);
        font-weight: var(--ep-font-weight-medium);
      }

      .value {
        color: var(--ep-color-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .track {
        position: relative;
        height: var(--_height);
        overflow: hidden;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-border-default);
      }

      .indicator {
        height: 100%;
        background: var(--_fill);
        transform: scaleX(var(--_progress, 0));
        transform-origin: left;
        transition: transform var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      :host(:dir(rtl)) .indicator {
        transform-origin: right;
      }

      /* A segment that slides across. Its cycle is a multiple of the move token, which is 0 under reduced motion
         (prefers-reduced-motion or data-motion="reduced"), so the animation stops. */
      .indeterminate .indicator {
        width: 40%;
        transform: none;
        animation: slide calc(var(--ep-motion-duration-move) * 7) var(--ep-motion-easing-standard) infinite;
      }

      @keyframes slide {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(250%);
        }
      }

      /* Reduced motion: a still, striped full-width bar instead of a moving segment. The style query follows the
         token, so it reacts to data-motion="reduced" too; the media query covers browsers without style queries. */
      @container style(--ep-motion-duration-move: 0ms) {
        .indeterminate .indicator {
          width: 100%;
          background: repeating-linear-gradient(-45deg, var(--_fill) 0 6px, transparent 6px 12px);
          animation: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .indeterminate .indicator {
          width: 100%;
          background: repeating-linear-gradient(-45deg, var(--_fill) 0 6px, transparent 6px 12px);
          animation: none;
        }
      }

      .helper {
        margin: var(--ep-space-100) 0 0;
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-100);
        line-height: var(--ep-font-line-height-snug);
      }

      @media (forced-colors: active) {
        .track {
          border: 1px solid CanvasText;
        }

        .indicator {
          background: Highlight;
        }
      }
    `];constructor(){super(),this.value=void 0,this.max=100,this.label=``,this.helperText=``,this.hideLabel=!1,this.showValue=!1,this.variant=`default`,this.size=`md`}render(){let e=this.value===void 0||this.value===null||Number.isNaN(this.value),t=this.max>0?this.max:100,n=e?0:Math.min(Math.max(0,this.value),t),r=Math.round(n/t*100);return T`${!this.hideLabel||this.showValue&&!e?T`<div class="header" aria-hidden="true">
            <span class="label">${this.hideLabel?``:this.label}</span>
            ${this.showValue&&!e?T`<span class="value">${r}%</span>`:D}
          </div>`:D}
      <div
        part="track"
        class="track ${e?`indeterminate`:``}"
        role="progressbar"
        aria-label=${this.label}
        aria-describedby=${this.helperText?`helper`:D}
        aria-valuemin=${e?D:0}
        aria-valuemax=${e?D:t}
        aria-valuenow=${e?D:n}
        aria-valuetext=${e?D:`${r}%`}
      >
        <div part="indicator" class="indicator" style=${e?``:`--_progress: ${n/t}`}></div>
      </div>
      ${this.helperText?T`<p class="helper" id="helper">${this.helperText}</p>`:D}`}}),h(`ep-spinner`,class extends j{static properties={label:{},size:{reflect:!0}};static styles=g`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --_size: var(--ep-size-icon-md);
      color: var(--ep-color-accent-default);
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([size='sm']) {
      --_size: var(--ep-size-icon-sm);
    }

    :host([size='lg']) {
      --_size: var(--ep-space-400);
    }

    svg {
      width: var(--_size);
      height: var(--_size);
      /* One turn a second, the most the motion policy allows. A fixed value on purpose: the duration tokens shrink
         under reduced motion, and the spinner must keep turning at the same pace. */
      animation: spin 1s linear infinite;
    }

    .track {
      stroke: var(--ep-color-border-default);
    }

    .arc {
      stroke: currentColor;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (forced-colors: active) {
      .track {
        stroke: GrayText;
      }

      .arc {
        stroke: CanvasText;
      }
    }
  `;constructor(){super(),this.label=`Loading`,this.size=`md`}updated(){this.label?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}render(){return T`<svg part="base" viewBox="0 0 24 24" fill="none" stroke-width="3" aria-hidden="true">
      <circle class="track" cx="12" cy="12" r="9.5"></circle>
      <path class="arc" d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5" stroke-linecap="round"></path>
    </svg>`}}),h(`ep-skeleton`,class extends j{static properties={variant:{reflect:!0},lines:{type:Number}};static styles=[N,g`
      :host {
        display: block;
      }

      :host([variant='circle']),
      :host([variant='rect']) {
        width: var(--ep-size-control-md);
        height: var(--ep-size-control-md);
      }

      :host([variant='rect']) {
        width: 100%;
      }

      .lines {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        height: 100%;
      }

      .line {
        height: 1em;
        border-radius: var(--ep-radius-indicator);
        /* border-default rather than surface-muted, which is nearly invisible on the dark page. */
        background: var(--ep-color-border-default);
        /* 1.6s normally. The move token is 0 under reduced motion (OS setting or data-motion="reduced"), which
           stops the pulse and leaves a static skeleton. */
        animation: pulse calc(var(--ep-motion-duration-move) * 8) var(--ep-motion-easing-standard) infinite;
      }

      .line:last-child:not(:first-child) {
        width: 60%;
      }

      :host([variant='rect']) .line,
      :host([variant='circle']) .line {
        height: 100%;
        border-radius: var(--ep-radius-container);
      }

      :host([variant='circle']) .line {
        border-radius: var(--ep-radius-round);
      }

      @keyframes pulse {
        50% {
          opacity: 0.5;
        }
      }

      @media (forced-colors: active) {
        .line {
          border: 1px solid GrayText;
        }
      }
    `];constructor(){super(),this.variant=`text`,this.lines=1}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}render(){let e=this.variant===`text`?Math.max(1,Math.floor(this.lines)):1;return T`<div class="lines">
      ${Array.from({length:e},()=>T`<div part="line" class="line"></div>`)}
    </div>`}}),h(`ep-empty-state`,class extends j{static properties={heading:{},headingLevel:{type:Number,attribute:`heading-level`},icon:{},size:{reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        --_padding: var(--ep-space-800) var(--ep-space-300);
        --_icon-size: 32px;
        --_heading: var(--ep-font-size-400);
      }

      :host([size='sm']) {
        --_padding: var(--ep-space-400) var(--ep-space-200);
        --_icon-size: var(--ep-size-icon-lg);
        --_heading: var(--ep-font-size-300);
      }

      .base {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 48ch;
        margin: 0 auto;
        padding: var(--_padding);
        text-align: center;
      }

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--ep-space-200);
        padding: var(--ep-space-150);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-muted);
        color: var(--ep-color-text-secondary);
        font-size: var(--_icon-size);
      }

      ::slotted([slot='media']) {
        max-width: 100%;
        margin-bottom: var(--ep-space-200);
      }

      .heading {
        margin: 0;
        color: var(--ep-color-text-primary);
        font-size: var(--_heading);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-snug);
      }

      .description {
        margin-top: var(--ep-space-100);
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--ep-space-100);
        margin-top: var(--ep-space-300);
      }

      [hidden] {
        display: none !important;
      }

      @media (forced-colors: active) {
        .icon {
          border: 1px solid CanvasText;
        }
      }
    `];#e=new z(this,`[default]`,`media`,`actions`);constructor(){super(),this.heading=``,this.headingLevel=2,this.icon=``,this.size=`md`}render(){let e=Math.min(6,Math.max(1,Math.floor(this.headingLevel)||2));return T`<div part="base" class="base">
      <slot name="media"></slot>
      ${!this.#e.test(`media`)&&this.icon?T`<span class="icon"><ep-icon name=${this.icon}></ep-icon></span>`:D}
      ${this.heading?T`<div part="heading" class="heading" role="heading" aria-level=${e}>${this.heading}</div>`:D}
      <div class="description" ?hidden=${!this.#e.test(`[default]`)}><slot></slot></div>
      <div class="actions" ?hidden=${!this.#e.test(`actions`)}><slot name="actions"></slot></div>
    </div>`}});var ln=class extends j{static properties={single:{type:Boolean,reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        border-top: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }
    `];constructor(){super(),this.single=!1,this.addEventListener(`ep-open`,this.#t),this.addEventListener(`keydown`,this.#n)}get#e(){return[...this.querySelectorAll(`:scope > ep-accordion-item`)]}#t=e=>{let t=e.target;if(this.single&&t.parentElement===this&&t.localName===`ep-accordion-item`)for(let t of this.#e)t!==e.target&&(t.open=!1)};#n=e=>{let t=e.target.closest(`ep-accordion-item`);if(!t||t.parentElement!==this||e.composedPath()[0]!==t.shadowRoot?.activeElement)return;let n=this.#e.filter(e=>!e.disabled),r=n.indexOf(t),i={ArrowDown:n[(r+1)%n.length],ArrowUp:n[(r-1+n.length)%n.length],Home:n[0],End:n[n.length-1]}[e.key];i&&(e.preventDefault(),i.focus())};render(){return T`<slot></slot>`}},un=class extends j{static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={heading:{},headingLevel:{type:Number,attribute:`heading-level`},open:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      .heading {
        margin: 0;
      }

      .header {
        display: flex;
        align-items: center;
        gap: var(--ep-space-150);
        width: 100%;
        min-height: var(--ep-size-control-lg);
        padding: var(--ep-space-150) var(--ep-space-100);
        border: 0;
        border-radius: var(--ep-radius-control);
        background: none;
        color: var(--ep-color-text-primary);
        font: inherit;
        font-size: var(--ep-font-size-300);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-snug);
        text-align: start;
        cursor: pointer;
      }

      .header:hover {
        background: var(--ep-color-interactive-ghost-hover);
      }

      .header:focus-visible {
        ${P}
        outline-offset: -2px;
      }

      .header:disabled {
        background: none;
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      .title {
        flex: 1;
      }

      .chevron {
        flex: none;
        font-size: var(--ep-size-icon-md);
        color: var(--ep-color-text-secondary);
        transition: transform var(--ep-motion-duration-move) var(--ep-motion-easing-standard);
      }

      :host([open]) .chevron {
        transform: rotate(180deg);
      }

      ::slotted([slot='prefix']) {
        font-size: var(--ep-size-icon-md);
      }

      .content {
        padding: 0 var(--ep-space-100) var(--ep-space-200);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      .content[hidden] {
        display: none;
      }

      @media (forced-colors: active) {
        .header:disabled {
          color: GrayText;
        }
      }
    `];constructor(){super(),this.heading=``,this.headingLevel=3,this.open=!1,this.disabled=!1}#e(){this.disabled||(this.open=!this.open,this.dispatchEvent(new Event(this.open?`ep-open`:`ep-close`,{bubbles:!0,composed:!0})))}render(){return T`<div class="heading" role="heading" aria-level=${Math.min(6,Math.max(1,Math.floor(this.headingLevel)||3))}>
        <button
          part="header"
          class="header"
          id="header"
          type="button"
          aria-expanded=${String(this.open)}
          aria-controls="content"
          ?disabled=${this.disabled}
          @click=${this.#e}
        >
          <slot name="prefix"></slot>
          <span class="title">${this.heading}</span>
          <ep-icon class="chevron" name="chevron-down"></ep-icon>
        </button>
      </div>
      <div part="content" class="content" id="content" role="region" aria-labelledby="header" ?hidden=${!this.open}>
        <slot></slot>
      </div>`}};h(`ep-accordion`,ln),h(`ep-accordion-item`,un);var W=4,dn=8,fn={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function pn(e,t,n,r=`start`){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o={top:i.top-W,bottom:innerHeight-i.bottom-W,left:i.left-W,right:innerWidth-i.right-W},s=n===`top`||n===`bottom`?a.height:a.width,c=o[n]>=s||o[n]>=o[fn[n]]?n:fn[n],l,u;c===`top`||c===`bottom`?(l=c===`top`?i.top-a.height-W:i.bottom+W,u=r===`start`?i.left:r===`end`?i.right-a.width:i.left+i.width/2-a.width/2):(u=c===`left`?i.left-a.width-W:i.right+W,l=r===`start`?i.top:r===`end`?i.bottom-a.height:i.top+i.height/2-a.height/2),u=Math.min(Math.max(dn,u),innerWidth-a.width-dn),l=Math.min(Math.max(dn,l),innerHeight-a.height-dn),t.style.top=`${Math.round(l)}px`,t.style.left=`${Math.round(u)}px`,t.dataset.side=c}function G(e,t,n){let r=e.shadowRoot?.querySelector(`[part="base"]`)??e;n===null?r.removeAttribute(t):r.setAttribute(t,n)}var mn=`button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), ep-button, ep-icon-button, ep-text-field, ep-textarea, ep-select, ep-checkbox, ep-radio-group, ep-switch`;h(`ep-popover`,class extends j{static properties={open:{type:Boolean,reflect:!0},placement:{reflect:!0},label:{}};static styles=[N,g`
      :host {
        display: inline-block;
      }

      .panel {
        position: fixed;
        inset: auto;
        margin: 0;
        box-sizing: border-box;
        width: max-content;
        max-width: min(360px, calc(100vw - 16px));
        max-height: calc(100vh - 16px);
        overflow: auto;
        padding: var(--ep-space-200);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        box-shadow: var(--ep-shadow-overlay);
        outline: none;
      }

      .panel:not(:popover-open) {
        display: none;
      }

      /* Fade and a small offset from the trigger on open; the tokens drop the offset under reduced motion. */
      .panel:popover-open {
        opacity: 1;
        translate: 0 0;
        transition:
          opacity var(--ep-motion-duration-fast) var(--ep-motion-easing-enter),
          translate var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
      }

      @starting-style {
        .panel:popover-open {
          opacity: 0;
          translate: 0 calc(-1 * var(--ep-motion-distance-sm));
        }

        .panel:popover-open[data-side='top'] {
          translate: 0 var(--ep-motion-distance-sm);
        }
      }

      @media (forced-colors: active) {
        .panel {
          border-color: CanvasText;
        }
      }
    `];#e=!1;constructor(){super(),this.open=!1,this.placement=`bottom`,this.label=``,this.addEventListener(`focusout`,this.#c)}get#t(){return this.querySelector(`:scope > [slot="trigger"]`)??void 0}get#n(){return this.renderRoot.querySelector(`.panel`)}show(){this.open=!0}hide(){this.open=!1}connectedCallback(){super.connectedCallback(),addEventListener(`resize`,this.#r),addEventListener(`scroll`,this.#r,!0)}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(`resize`,this.#r),removeEventListener(`scroll`,this.#r,!0)}#r=()=>{this.open&&this.#t&&pn(this.#t,this.#n,this.placement,`start`)};#i=()=>{this.#e=this.open};#a=()=>{if(this.#e){this.#e=!1;return}this.open=!this.open};#o=e=>{e.newState===`closed`&&this.open&&(this.open=!1)};#s=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.open=!1,this.#t?.focus())};#c=e=>{let t=e.relatedTarget;this.open&&t&&!this.contains(t)&&!this.renderRoot.contains(t)&&(this.open=!1)};async#l(){let e=this.#t;e&&(await e.updateComplete,G(e,`aria-haspopup`,`dialog`),G(e,`aria-expanded`,String(this.open)))}updated(e){if(!e.has(`open`))return;this.#l();let t=this.#n;this.open?(t.matches(`:popover-open`)||t.showPopover(),this.#r(),([...this.querySelectorAll(mn)].find(e=>!e.closest(`[slot="trigger"]`)&&!e.hasAttribute(`disabled`))??t).focus(),this.dispatchEvent(new Event(`ep-open`,{bubbles:!0,composed:!0}))):e.get(`open`)===!0&&(t.matches(`:popover-open`)&&t.hidePopover(),this.dispatchEvent(new Event(`ep-close`,{bubbles:!0,composed:!0})))}render(){let e=this.label||this.#t?.textContent?.trim()||``;return T`<slot
        name="trigger"
        @pointerdown=${this.#i}
        @click=${this.#a}
        @slotchange=${()=>this.#l()}
      ></slot>
      <div
        part="panel"
        class="panel"
        role="dialog"
        aria-label=${e}
        tabindex="-1"
        popover="auto"
        @toggle=${this.#o}
        @keydown=${this.#s}
      >
        <slot></slot>
      </div>`}});var hn=class extends j{static properties={open:{type:Boolean,reflect:!0},placement:{reflect:!0},label:{}};static styles=[N,g`
      :host {
        display: inline-block;
      }

      .panel {
        position: fixed;
        inset: auto;
        margin: 0;
        box-sizing: border-box;
        min-width: 180px;
        max-width: min(320px, calc(100vw - 16px));
        max-height: calc(100vh - 16px);
        overflow: auto;
        padding: var(--ep-space-50);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        box-shadow: var(--ep-shadow-overlay);
      }

      .panel:not(:popover-open) {
        display: none;
      }

      /* Fade and a small offset from the trigger on open; the tokens drop the offset under reduced motion. */
      .panel:popover-open {
        opacity: 1;
        translate: 0 0;
        transition:
          opacity var(--ep-motion-duration-fast) var(--ep-motion-easing-enter),
          translate var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
      }

      @starting-style {
        .panel:popover-open {
          opacity: 0;
          translate: 0 calc(-1 * var(--ep-motion-distance-sm));
        }

        .panel:popover-open[data-side='top'] {
          translate: 0 var(--ep-motion-distance-sm);
        }
      }

      @media (forced-colors: active) {
        .panel {
          border-color: CanvasText;
        }
      }
    `];#e=!1;#t=`first`;#n=``;#r;constructor(){super(),this.open=!1,this.placement=`bottom`,this.label=``,this.addEventListener(`focusout`,this.#v)}connectedCallback(){super.connectedCallback(),addEventListener(`resize`,this.#s),addEventListener(`scroll`,this.#s,!0)}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(`resize`,this.#s),removeEventListener(`scroll`,this.#s,!0)}get#i(){return this.querySelector(`:scope > [slot="trigger"]`)??void 0}get#a(){return this.renderRoot.querySelector(`.panel`)}get#o(){return[...this.querySelectorAll(`:scope > ep-menu-item`)].filter(e=>!e.disabled)}show(){this.#t=`first`,this.open=!0}hide(){this.open=!1}#s=()=>{this.open&&this.#i&&pn(this.#i,this.#a,this.placement,`start`)};#c(e){this.open=!1,e&&this.#i?.focus()}#l=()=>{this.#e=this.open};#u=()=>{if(this.#e){this.#e=!1;return}this.#t=`first`,this.open=!this.open};#d=e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),this.#t=e.key===`ArrowUp`?`last`:`first`,this.open?this.#p(this.#t===`last`?this.#o.length-1:0):this.open=!0)};#f=e=>{e.newState===`closed`&&this.open&&(this.open=!1)};#p(e){let t=this.#o;t.length&&t[(e+t.length)%t.length].focus()}#m=e=>{let t=this.#o,n=t.indexOf(e.target.closest(`ep-menu-item`));switch(e.key){case`ArrowDown`:this.#p(n+1);break;case`ArrowUp`:this.#p(n-1);break;case`Home`:this.#p(0);break;case`End`:this.#p(t.length-1);break;case`Enter`:case` `:n>=0&&this.#_(t[n]);break;case`Escape`:e.stopPropagation(),this.#c(!0);break;case`Tab`:this.open=!1;return;default:if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey){this.#h(e.key,n);break}return}e.preventDefault()};#h(e,t){clearTimeout(this.#r),this.#r=setTimeout(()=>this.#n=``,500),this.#n+=e.toLowerCase();let n=this.#o,r=this.#n.length===1?t+1:t;for(let e=0;e<n.length;e++){let t=n[(r+e+n.length)%n.length];if(t.text.toLowerCase().startsWith(this.#n)){t.focus();return}}}#g=e=>{let t=e.target.closest(`ep-menu-item`);t&&!t.disabled&&this.#_(t)};#_(e){if(e.disabled)return;let t=new CustomEvent(`ep-select`,{bubbles:!0,composed:!0,cancelable:!0,detail:{value:e.value||e.text,item:e}});this.dispatchEvent(t)&&this.#c(!0)}#v=e=>{let t=e.relatedTarget;this.open&&t&&!this.contains(t)&&!this.renderRoot.contains(t)&&(this.open=!1)};async#y(){let e=this.#i;e&&(await e.updateComplete,G(e,`aria-haspopup`,`menu`),G(e,`aria-expanded`,String(this.open)))}updated(e){if(!e.has(`open`))return;this.#y();let t=this.#a;this.open?(t.matches(`:popover-open`)||t.showPopover(),this.#s(),this.#p(this.#t===`last`?-1:0),this.#t=`first`,this.dispatchEvent(new Event(`ep-open`,{bubbles:!0,composed:!0}))):e.get(`open`)===!0&&(t.matches(`:popover-open`)&&t.hidePopover(),this.dispatchEvent(new Event(`ep-close`,{bubbles:!0,composed:!0})))}render(){let e=this.label||this.#i?.textContent?.trim()||this.#i?.getAttribute(`label`)||``;return T`<slot
        name="trigger"
        @pointerdown=${this.#l}
        @click=${this.#u}
        @keydown=${this.#d}
        @slotchange=${()=>this.#y()}
      ></slot>
      <div
        part="panel"
        class="panel"
        role="menu"
        aria-label=${e}
        popover="auto"
        @toggle=${this.#f}
        @keydown=${this.#m}
        @click=${this.#g}
      >
        <slot></slot>
      </div>`}},gn=class extends j{static properties={value:{reflect:!0},variant:{reflect:!0},disabled:{type:Boolean,reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        outline: none;
      }

      .base {
        display: flex;
        align-items: center;
        gap: var(--ep-space-100);
        min-height: var(--ep-size-control-md);
        padding: 0 var(--ep-space-150);
        border-radius: var(--ep-radius-control);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-snug);
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
      }

      .label {
        flex: 1;
      }

      :host(:hover) .base,
      :host(:focus-visible) .base {
        background: var(--ep-color-interactive-ghost-hover);
      }

      :host(:active) .base {
        background: var(--ep-color-interactive-ghost-active);
      }

      :host(:focus-visible) .base {
        ${P}
        outline-offset: -2px;
      }

      :host([variant='danger']) .base {
        color: var(--ep-color-text-danger);
      }

      :host([disabled]) .base {
        background: none;
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      ::slotted([slot='prefix']) {
        font-size: var(--ep-size-icon-md);
      }

      ::slotted([slot='suffix']) {
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-100);
      }

      @media (forced-colors: active) {
        :host(:focus-visible) .base,
        :host(:hover) .base {
          outline: 2px solid Highlight;
        }

        :host([disabled]) .base {
          color: GrayText;
        }
      }
    `];constructor(){super(),this.value=``,this.variant=`default`,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menuitem`),this.tabIndex=-1}updated(){this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`)}get text(){return this.textContent?.trim()??``}render(){return T`<div part="base" class="base">
      <slot name="prefix"></slot><span class="label"><slot></slot></span><slot name="suffix"></slot>
    </div>`}},_n=class extends j{static styles=g`
    :host {
      display: block;
      height: var(--ep-border-width-thin);
      margin: var(--ep-space-50) 0;
      background: var(--ep-color-border-default);
    }

    @media (forced-colors: active) {
      :host {
        background: CanvasText;
      }
    }
  `;connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}};h(`ep-menu`,hn),h(`ep-menu-item`,gn),h(`ep-menu-divider`,_n);var vn=e=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>${e}</svg>`)}")`,K={none:vn(`<path d='M8 9l4-4 4 4'/><path d='M16 15l-4 4-4-4'/>`),ascending:vn(`<path d='M12 5v14'/><path d='M18 11l-6-6-6 6'/>`),descending:vn(`<path d='M12 5v14'/><path d='M18 13l-6 6-6-6'/>`)},yn=`
:where(ep-table) > table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--ep-color-text-primary);
  font-size: var(--ep-font-size-200);
  line-height: var(--ep-font-line-height-snug);
  font-variant-numeric: tabular-nums;
}
:where(ep-table > table) caption {
  padding: var(--ep-space-150) var(--ep-space-200);
  font-size: var(--ep-font-size-300);
  font-weight: var(--ep-font-weight-semibold);
  text-align: start;
}
:where(ep-table > table) :is(th, td) {
  height: var(--_ep-row-height, var(--ep-size-control-lg));
  padding: var(--ep-space-100) var(--ep-space-200);
  border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
  text-align: start;
  vertical-align: middle;
}
:where(ep-table[size='sm'] > table) :is(th, td) {
  --_ep-row-height: var(--ep-size-control-md);
  padding: var(--ep-space-50) var(--ep-space-150);
}
:where(ep-table > table) thead th {
  background: var(--ep-color-surface-sunken);
  border-bottom-color: var(--ep-color-border-strong);
  color: var(--ep-color-text-secondary);
  font-weight: var(--ep-font-weight-semibold);
  white-space: nowrap;
}
:where(ep-table > table) tbody th {
  font-weight: var(--ep-font-weight-medium);
}
:where(ep-table[sticky-header] > table) thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}
:where(ep-table[striped] > table) tbody tr:nth-child(even) > * {
  background: var(--ep-color-background-subtle);
}
:where(ep-table > table) tbody tr[aria-selected='true'] > * {
  background: var(--ep-color-accent-subtle);
}
:where(ep-table > table) tbody tr:last-child > * {
  border-bottom: 0;
}
:where(ep-table > table) th > button {
  display: inline-flex;
  align-items: center;
  gap: var(--ep-space-50);
  margin: calc(-1 * var(--ep-space-50)) calc(-1 * var(--ep-space-100));
  padding: var(--ep-space-50) var(--ep-space-100);
  border: 0;
  border-radius: var(--ep-radius-control);
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
:where(ep-table > table) th > button:hover {
  background: var(--ep-color-interactive-ghost-hover);
  color: var(--ep-color-text-primary);
}
:where(ep-table > table) th > button:focus-visible {
  ${P.cssText}
}
:where(ep-table > table) th > button::after {
  content: '';
  width: var(--ep-size-icon-sm);
  height: var(--ep-size-icon-sm);
  background: currentColor;
  -webkit-mask: ${K.none} center / contain no-repeat;
  mask: ${K.none} center / contain no-repeat;
  opacity: 0.6;
}
:where(ep-table > table) th[aria-sort='ascending'] > button::after {
  -webkit-mask-image: ${K.ascending};
  mask-image: ${K.ascending};
  opacity: 1;
}
:where(ep-table > table) th[aria-sort='descending'] > button::after {
  -webkit-mask-image: ${K.descending};
  mask-image: ${K.descending};
  opacity: 1;
}
:where(ep-table > table) th:is([aria-sort='ascending'], [aria-sort='descending']) {
  color: var(--ep-color-text-primary);
}
@media (forced-colors: active) {
  :where(ep-table > table) :is(th, td) {
    border-bottom-color: CanvasText;
  }
  :where(ep-table > table) tbody tr[aria-selected='true'] > * {
    forced-color-adjust: none;
    background: Highlight;
    color: HighlightText;
  }
  :where(ep-table > table) th > button::after {
    forced-color-adjust: none;
    background: ButtonText;
  }
}
`,bn,xn=new WeakSet;function Sn(e){xn.has(e)||(bn??=new CSSStyleSheet,bn.cssRules.length||bn.replaceSync(yn),e.adoptedStyleSheets=[...e.adoptedStyleSheets,bn],xn.add(e))}h(`ep-table`,class extends j{static properties={label:{},size:{reflect:!0},striped:{type:Boolean,reflect:!0},stickyHeader:{type:Boolean,reflect:!0,attribute:`sticky-header`},_scrollable:{state:!0}};static styles=[N,g`
      :host {
        display: block;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-default);
        overflow: hidden;
      }

      .scroller {
        max-height: inherit;
        overflow: auto;
        border-radius: inherit;
        outline: none;
      }

      .scroller:focus-visible {
        ${P}
        outline-offset: -2px;
      }

      @media (forced-colors: active) {
        :host {
          border-color: CanvasText;
        }
      }
    `];#e;constructor(){super(),this.label=``,this.size=`md`,this.striped=!1,this.stickyHeader=!1,this._scrollable=!1}connectedCallback(){super.connectedCallback();let e=this.getRootNode();(e instanceof Document||e instanceof ShadowRoot)&&Sn(e)}disconnectedCallback(){super.disconnectedCallback(),this.#e?.disconnect()}firstUpdated(){let e=this.renderRoot.querySelector(`.scroller`);this.#e=new ResizeObserver(()=>{this._scrollable=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight}),this.#e.observe(e);let t=this.querySelector(`table`);t&&this.#e.observe(t)}render(){let e=this.label||this.querySelector(`caption`)?.textContent?.trim()||`Table`,t=this._scrollable;return T`<div
      part="scroller"
      class="scroller"
      role=${t?`region`:D}
      aria-label=${t?e:D}
      tabindex=${t?0:D}
    >
      <slot></slot>
    </div>`}});function q(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e??``);if(!t)return null;let n=new Date(+t[1],t[2]-1,+t[3],12);return n.getMonth()===t[2]-1?n:null}function J(e){let t=e=>String(e).padStart(2,`0`);return`${String(e.getFullYear()).padStart(4,`0`)}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function Y(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t,12)}function Cn(e,t){let n=new Date(e.getFullYear(),e.getMonth()+t,1,12),r=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(e.getDate(),r)),n}var wn=(e,t)=>!!e&&!!t&&J(e)===J(t),Tn=()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate(),12)};function En(e,t){return t||e.closest(`[lang]`)?.getAttribute(`lang`)||navigator.language||`en-IN`}function Dn(e){try{let t=new Intl.Locale(e),n=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;if(n)return n%7}catch{}return 1}function On(e){return new Intl.DateTimeFormat(e,{day:`2-digit`,month:`2-digit`,year:`numeric`}).formatToParts(new Date(2026,10,22,12)).map(e=>e.type).filter(e=>e===`day`||e===`month`||e===`year`)}function kn(e,t){let n=e=>String(e).padStart(2,`0`),r={day:n(e.getDate()),month:n(e.getMonth()+1),year:String(e.getFullYear())};return On(t).map(e=>r[e]).join(`/`)}function An(e){let t={day:`DD`,month:`MM`,year:`YYYY`};return On(e).map(e=>t[e]).join(`/`)}function jn(e,t){let n=e.trim();if(!n)return null;let r=q(n);if(r)return r;let i=n.split(/[\s/.-]+/).filter(Boolean);if(i.length!==3||i.some(e=>!/^\d+$/.test(e)))return null;let a=On(t),o={day:0,month:0,year:0};a.forEach((e,t)=>o[e]=Number(i[t]));let s=i[a.indexOf(`year`)];if(s.length<=2)o.year+=2e3;else if(s.length!==4)return null;let c=new Date(o.year,o.month-1,o.day,12);return c.getFullYear()!==o.year||c.getMonth()!==o.month-1||c.getDate()!==o.day?null:c}h(`ep-calendar`,class extends j{static properties={value:{reflect:!0},min:{},max:{},locale:{},isDateDisabled:{attribute:!1},_focused:{state:!0}};static styles=[N,g`
      :host {
        display: inline-block;
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--ep-space-100);
        margin-bottom: var(--ep-space-100);
      }

      .month {
        margin: 0;
        font-size: var(--ep-font-size-200);
        font-weight: var(--ep-font-weight-semibold);
      }

      table {
        border-collapse: separate;
        border-spacing: 2px;
        margin: -2px;
      }

      th {
        width: var(--ep-size-control-md);
        height: var(--ep-size-control-sm);
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-100);
        font-weight: var(--ep-font-weight-medium);
      }

      td {
        padding: 0;
        text-align: center;
        vertical-align: middle;
      }

      .day {
        width: var(--ep-size-control-md);
        height: var(--ep-size-control-md);
        border: var(--ep-border-width-thin) solid transparent;
        border-radius: var(--ep-radius-control);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        user-select: none;
        outline: none;
      }

      .day:hover {
        background: var(--ep-color-interactive-ghost-hover);
      }

      .day[aria-current='date'] {
        border-color: var(--ep-color-border-strong);
        font-weight: var(--ep-font-weight-semibold);
      }

      .day[aria-selected='true'] {
        border-color: transparent;
        background: var(--ep-color-interactive-primary-default);
        color: var(--ep-color-text-on-primary);
        font-weight: var(--ep-font-weight-semibold);
      }

      .day[aria-disabled='true'] {
        background: none;
        color: var(--ep-color-text-disabled);
        text-decoration: line-through;
        cursor: not-allowed;
      }

      .day:focus-visible {
        ${P}
        outline-offset: 0;
      }

      @media (forced-colors: active) {
        .day[aria-current='date'] {
          border-color: CanvasText;
        }

        .day[aria-selected='true'] {
          forced-color-adjust: none;
          background: Highlight;
          color: HighlightText;
        }

        .day[aria-disabled='true'] {
          color: GrayText;
        }
      }
    `];constructor(){super(),this.value=``,this.min=``,this.max=``,this.locale=``,this.isDateDisabled=void 0,this._focused=Tn()}focus(e){this.renderRoot.querySelector(`.day[tabindex="0"]`)?.focus(e)}willUpdate(e){if(e.has(`value`)){let e=q(this.value);e&&(this._focused=e)}}#e(e){let t=J(e);return this.min&&q(this.min)&&t<this.min||this.max&&q(this.max)&&t>this.max?!0:this.isDateDisabled?.(e)??!1}async#t(e){this._focused=e,await this.updateComplete,this.focus()}#n(e){if(this.#e(e))return;this._focused=e;let t=J(e);t!==this.value&&(this.value=t,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})))}#r(e){let t=this._focused,n=Dn(En(this,this.locale)),r=(t.getDay()-n+7)%7,i={ArrowLeft:()=>Y(t,this.#i?1:-1),ArrowRight:()=>Y(t,this.#i?-1:1),ArrowUp:()=>Y(t,-7),ArrowDown:()=>Y(t,7),Home:()=>Y(t,-r),End:()=>Y(t,6-r),PageUp:()=>Cn(t,e.shiftKey?-12:-1),PageDown:()=>Cn(t,e.shiftKey?12:1)};i[e.key]?(e.preventDefault(),this.#t(i[e.key]())):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.#n(t))}get#i(){return getComputedStyle(this).direction===`rtl`}render(){let e=En(this,this.locale),t=this._focused,n=q(this.value),r=Tn(),i=Dn(e),a=new Date(t.getFullYear(),t.getMonth(),1,12),o=(a.getDay()-i+7)%7,s=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),c=[...Array.from({length:o},()=>null),...Array.from({length:s},(e,t)=>Y(a,t))];for(;c.length%7;)c.push(null);let l=Array.from({length:c.length/7},(e,t)=>c.slice(t*7,t*7+7)),u=Array.from({length:7},(e,t)=>Y(a,t-o)),d=new Intl.DateTimeFormat(e,{month:`long`,year:`numeric`}).format(t),f=new Intl.DateTimeFormat(e,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),p=Cn(t,-1),m=Cn(t,1);return T`<div part="header" class="header">
        <ep-icon-button
          icon="chevron-left"
          label="Previous month"
          size="sm"
          @click=${()=>this._focused=p}
        ></ep-icon-button>
        <p class="month" id="month" aria-live="polite">${d}</p>
        <ep-icon-button
          icon="chevron-right"
          label="Next month"
          size="sm"
          @click=${()=>this._focused=m}
        ></ep-icon-button>
      </div>
      <table part="grid" role="grid" aria-labelledby="month" @keydown=${this.#r}>
        <thead>
          <tr>
            ${u.map(t=>T`<th scope="col" abbr=${new Intl.DateTimeFormat(e,{weekday:`long`}).format(t)}>
                  ${new Intl.DateTimeFormat(e,{weekday:`narrow`}).format(t)}
                </th>`)}
          </tr>
        </thead>
        <tbody>
          ${l.map(e=>T`<tr>
                ${e.map(e=>e?T`<td
                        class="day"
                        tabindex=${wn(e,t)?0:-1}
                        aria-label=${f.format(e)}
                        aria-selected=${wn(e,n)?`true`:`false`}
                        aria-current=${wn(e,r)?`date`:D}
                        aria-disabled=${this.#e(e)?`true`:D}
                        @click=${()=>this.#n(e)}
                      >
                        ${e.getDate()}
                      </td>`:T`<td></td>`)}
              </tr>`)}
        </tbody>
      </table>`}}),h(`ep-date-picker`,class extends j{static formAssociated=!0;static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={label:{},value:{},name:{reflect:!0},min:{},max:{},locale:{},helperText:{attribute:`helper-text`},errorText:{attribute:`error-text`},size:{reflect:!0},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},isDateDisabled:{attribute:!1},_text:{state:!0},_problem:{state:!0},_open:{state:!0}};static styles=[N,F,At,_t,g`
      .box {
        padding-inline-end: var(--ep-space-50);
      }

      .panel {
        position: fixed;
        inset: auto;
        margin: 0;
        padding: var(--ep-space-150);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        box-shadow: var(--ep-shadow-overlay);
      }

      .panel:not(:popover-open) {
        display: none;
      }

      .panel:popover-open {
        opacity: 1;
        translate: 0 0;
        transition:
          opacity var(--ep-motion-duration-fast) var(--ep-motion-easing-enter),
          translate var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
      }

      @starting-style {
        .panel:popover-open {
          opacity: 0;
          translate: 0 calc(-1 * var(--ep-motion-distance-sm));
        }
      }

      @media (forced-colors: active) {
        .panel {
          border-color: CanvasText;
        }
      }
    `];#e=this.attachInternals();#t=``;#n=!1;#r=!1;constructor(){super(),this.label=``,this.value=``,this.name=``,this.min=``,this.max=``,this.locale=``,this.helperText=``,this.errorText=``,this.size=`md`,this.disabled=!1,this.readonly=!1,this.required=!1,this.isDateDisabled=void 0,this._text=``,this._problem=``,this._open=!1}connectedCallback(){super.connectedCallback(),this.#t=this.getAttribute(`value`)??``,addEventListener(`resize`,this.#p),addEventListener(`scroll`,this.#p,!0)}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(`resize`,this.#p),removeEventListener(`scroll`,this.#p,!0)}get form(){return this.#e.form}get validity(){return this.#e.validity}checkValidity(){return this.#e.checkValidity()}formResetCallback(){this.value=this.#t,this._problem=``}formDisabledCallback(e){this.#n=e,this.requestUpdate()}get#i(){return this.disabled||this.#n}get#a(){return En(this,this.locale)}get#o(){return this.renderRoot.querySelector(`.panel`)}get#s(){let e=e=>{let t=q(e);return t?kn(t,this.#a):e};return this.errorText?this.errorText:this._problem===`bad`?`Enter a date like ${An(this.#a)}.`:this._problem===`early`?`Enter a date on or after ${e(this.min)}.`:this._problem===`late`?`Enter a date on or before ${e(this.max)}.`:``}willUpdate(e){if(e.has(`value`)||e.has(`locale`)){let e=q(this.value);e?this._text=kn(e,this.#a):!this.value&&this._problem!==`bad`&&(this._text=``),(e||!this.value)&&(this._problem=this.#c(this.value))}}#c(e){return e?this.min&&e<this.min?`early`:this.max&&e>this.max?`late`:``:``}updated(e){this.#e.setFormValue(this.value);let t=this.renderRoot.querySelector(`input`),n=this.#s;if(this.errorText?this.#e.setValidity({customError:!0},n,t):this._problem===`bad`?this.#e.setValidity({badInput:!0},n,t):this._problem===`early`?this.#e.setValidity({rangeUnderflow:!0},n,t):this._problem===`late`?this.#e.setValidity({rangeOverflow:!0},n,t):this.required&&!this.value?this.#e.setValidity({valueMissing:!0},`Enter a date.`,t):this.#e.setValidity({}),e.has(`_open`)){let e=this.#o;this._open?(e.matches(`:popover-open`)||e.showPopover(),this.#p(),this.renderRoot.querySelector(`ep-calendar`).focus()):e.matches(`:popover-open`)&&e.hidePopover()}}#l(e){e!==this.value&&(this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})))}#u(e){this._text=e.target.value,this._problem&&this.#f(!1)}#d(){this.#f(!0)}#f(e){let t=this._text.trim();if(!t){this._problem=``,e&&this.#l(``);return}let n=jn(t,this.#a);if(!n){this._problem=`bad`,e&&this.#l(``);return}let r=J(n);this._problem=this.#c(r),e&&(this.#l(r),this._text=kn(n,this.#a))}#p=()=>{this._open&&pn(this.renderRoot.querySelector(`.box`),this.#o,`bottom`,`start`)};#m=()=>{this.#r=this._open};#h=()=>{if(this.#r){this.#r=!1;return}this._open=!this._open};#g=e=>{e.newState===`closed`&&this._open&&(this._open=!1)};#_(){this._open=!1,this.renderRoot.querySelector(`ep-icon-button`)?.focus()}#v=e=>{e.key===`Escape`&&(e.stopPropagation(),this.#_())};#y(e){e.stopPropagation(),this._problem=``,this.#l(e.target.value),this.#_()}render(){let e=this.#s,t=!!e,n=An(this.#a),r=[`format`,this.helperText&&`helper`,t&&`error`].filter(Boolean).join(` `),i=this.#i;return T`<div class="field">
      ${this.label?T`<label class="label" for="input"
            >${this.label}${this.required?T`<span class="required" aria-hidden="true">*</span>`:D}</label
          >`:D}
      <div part="base" class="box ${t?`invalid`:``} ${i?`disabled`:``}">
        <input
          part="input"
          id="input"
          class="control"
          type="text"
          autocomplete="off"
          name=${this.name||D}
          .value=${kt(this._text)}
          placeholder=${n}
          ?disabled=${i}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${t?`true`:D}
          aria-describedby=${r}
          @input=${this.#u}
          @change=${this.#d}
        />
        <ep-icon-button
          icon="calendar"
          label="Choose date"
          size="sm"
          ?disabled=${i||this.readonly}
          @pointerdown=${this.#m}
          @click=${this.#h}
        ></ep-icon-button>
      </div>
      <span class="visually-hidden" id="format">Format: ${On(this.#a).join(`, `)}.</span>
      ${this.helperText?T`<p class="helper" id="helper">${this.helperText}</p>`:D}
      ${t?T`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${e}</p>`:D}
      <div
        part="panel"
        class="panel"
        role="dialog"
        aria-label="Choose date"
        popover="auto"
        @toggle=${this.#g}
        @keydown=${this.#v}
      >
        <ep-calendar
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .locale=${this.#a}
          .isDateDisabled=${this.isDateDisabled}
          @change=${this.#y}
        ></ep-calendar>
      </div>
    </div>`}});var Mn=`1024px`,Nn=class extends j{static properties={navOpen:{type:Boolean,reflect:!0,attribute:`nav-open`},fullWidth:{type:Boolean,reflect:!0,attribute:`full-width`},_wide:{state:!0}};static styles=[N,g`
      :host {
        --_top: 0px;
        display: block;
        min-height: 100dvh;
        background: var(--ep-color-surface-sheet);
        color: var(--ep-color-text-primary);
      }

      /* With the sidebar beside it, the page becomes a canvas and the content a raised sheet. */
      :host([data-has-sidebar]) {
        --_bar-bg: var(--ep-color-background-canvas);
        --_bar-border: transparent;
        background: var(--ep-color-background-canvas);
      }

      :host([data-has-top-bar]) {
        --_top: var(--ep-layout-header-height);
      }

      .skip {
        position: fixed;
        z-index: 2;
        inset-block-start: var(--ep-space-100);
        inset-inline-start: var(--ep-space-100);
        padding: var(--ep-space-100) var(--ep-space-200);
        border-radius: var(--ep-radius-control);
        background: var(--ep-color-surface-overlay);
        border: 0;
        color: var(--ep-color-text-link);
        font: var(--ep-font-label-md);
        cursor: pointer;
        transform: translateY(calc(-100% - var(--ep-space-200)));
      }

      .skip:focus-visible {
        ${P}
        box-shadow: var(--ep-shadow-overlay);
        transform: none;
      }

      .top {
        position: sticky;
        z-index: 1;
        inset-block-start: 0;
      }

      .body {
        display: flex;
      }

      /* A dark rail runs the full height, with the top bar and content beside it. */
      :host([data-rail]) {
        display: grid;
        grid-template-columns: var(--ep-layout-sidebar-width) minmax(0, 1fr);
        grid-template-rows: auto 1fr;
      }

      :host([data-rail]) .body {
        display: contents;
      }

      :host([data-rail]) .top {
        grid-column: 2;
        grid-row: 1;
      }

      :host([data-rail]) .sidebar {
        grid-column: 1;
        grid-row: 1 / span 2;
        inset-block-start: 0;
        height: 100dvh;
        background: var(--ep-color-rail-background);
      }

      :host([data-rail]) main {
        grid-column: 2;
        grid-row: 2;
        min-height: 0;
        margin-inline-start: var(--ep-space-150);
      }

      .sidebar {
        position: sticky;
        flex: none;
        inset-block-start: var(--_top);
        width: var(--ep-layout-sidebar-width);
        height: calc(100dvh - var(--_top));
        overflow-y: auto;
        overscroll-behavior: contain;
        background: var(--ep-color-background-canvas);
      }

      .sidebar[hidden] {
        display: none;
      }

      main {
        flex: 1;
        min-width: 0;
      }

      :host([data-has-sidebar]) main {
        min-height: calc(100dvh - var(--_top) - var(--ep-space-150));
        margin-inline-end: var(--ep-space-150);
        margin-block-end: var(--ep-space-150);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-sheet);
        box-shadow: var(--ep-shadow-raised);
      }

      @media (forced-colors: active) {
        :host([data-has-sidebar]) main {
          border: 1px solid CanvasText;
        }
      }

      main:focus {
        outline: none;
      }

      .content {
        max-width: calc(var(--ep-layout-width-page) + 2 * var(--ep-layout-margin));
        margin-inline: auto;
        padding-block: var(--ep-layout-margin) var(--ep-space-800);
        padding-inline: max(var(--ep-layout-margin), env(safe-area-inset-left))
          max(var(--ep-layout-margin), env(safe-area-inset-right));
      }

      :host([full-width]) .content {
        max-width: none;
      }

      .drawer {
        width: min(calc(var(--ep-layout-sidebar-width) + var(--ep-space-400)), calc(100vw - var(--ep-space-800)));
        height: 100dvh;
        max-width: none;
        max-height: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-start-end-radius: var(--ep-radius-container);
        border-end-end-radius: var(--ep-radius-container);
        inset-block: 0;
        inset-inline: 0 auto;
        overflow-y: auto;
        overscroll-behavior: contain;
        background: var(--ep-color-surface-overlay);
        box-shadow: var(--ep-shadow-overlay);
        color: var(--ep-color-text-primary);
      }

      .drawer[open] {
        display: flex;
        flex-direction: column;
        animation: slide-in var(--ep-motion-duration-slow) var(--ep-motion-easing-enter);
      }

      .drawer[data-closing] {
        animation: slide-out var(--ep-motion-duration-normal) var(--ep-motion-easing-exit) forwards;
      }

      /* Reduced motion: fade only, no slide. */
      .drawer.fade[open] {
        animation-name: fade-in;
      }

      .drawer.fade[data-closing] {
        animation-name: fade-out;
      }

      .drawer::backdrop {
        background: var(--ep-color-background-scrim, rgb(0 0 0 / 0.6));
        animation: fade-in var(--ep-motion-duration-slow) var(--ep-motion-easing-standard);
      }

      .drawer[data-closing]::backdrop {
        animation: fade-out var(--ep-motion-duration-normal) var(--ep-motion-easing-exit) forwards;
      }

      :host(:dir(rtl)) .drawer {
        --_from: 100%;
      }

      @keyframes slide-in {
        from {
          transform: translateX(var(--_from, -100%));
        }
      }

      @keyframes slide-out {
        to {
          transform: translateX(var(--_from, -100%));
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
      }

      @keyframes fade-out {
        to {
          opacity: 0;
        }
      }

      .drawer-head {
        display: flex;
        flex: none;
        justify-content: flex-end;
        padding: var(--ep-space-100) var(--ep-space-100) 0;
      }

      .drawer-nav {
        flex: 1;
      }

      @media (forced-colors: active) {
        .sidebar {
          border-inline-end-color: CanvasText;
        }

        .drawer {
          border-inline-end: 1px solid CanvasText;
        }
      }
    `];#e=new z(this,`top-bar`,`nav`);#t;#n;constructor(){super(),this.navOpen=!1,this.fullWidth=!1,this._wide=!0,this.addEventListener(`ep-nav-toggle`,this.#i),this.addEventListener(`click`,this.#a)}connectedCallback(){super.connectedCallback();let e=getComputedStyle(this).getPropertyValue(`--ep-breakpoint-lg`).trim()||Mn;this.#t=matchMedia(`(min-width: ${e})`),this.#t.addEventListener(`change`,this.#r),this._wide=this.#t.matches}disconnectedCallback(){super.disconnectedCallback(),this.#t?.removeEventListener(`change`,this.#r),clearTimeout(this.#n),H(this)}#r=()=>{this._wide=this.#t.matches};#i=()=>{this.navOpen=!this.navOpen};#a=e=>{!this._wide&&this.navOpen&&e.composedPath().some(e=>e.localName===`ep-side-nav-item`)&&(this.navOpen=!1)};get#o(){return this.renderRoot.querySelector(`.drawer`)}willUpdate(e){e.has(`_wide`)&&this._wide&&(this.navOpen=!1),this.toggleAttribute(`data-has-top-bar`,this.#e.test(`top-bar`)),this.toggleAttribute(`data-has-sidebar`,this._wide&&this.#e.test(`nav`)),this.toggleAttribute(`data-rail`,this._wide&&this.querySelector(`:scope > [slot="nav"]`)?.getAttribute(`appearance`)===`inverse`)}updated(e){let t=this.#e.test(`nav`),n=this.querySelector(`:scope > [slot="top-bar"]`);n&&`menuButton`in n&&(n.menuButton=t&&!this._wide,n.menuExpanded=this.navOpen),(e.has(`navOpen`)||e.has(`_wide`))&&this.#s()}#s(){let e=this.#o;if(clearTimeout(this.#n),!e){H(this);return}e.classList.toggle(`fade`,Qt(this,`move`)===0),this.navOpen&&!e.open?(e.removeAttribute(`data-closing`),e.showModal(),Xt(this)):!this.navOpen&&e.open&&(e.setAttribute(`data-closing`,``),this.#n=setTimeout(()=>{e.removeAttribute(`data-closing`),e.close(),H(this)},Qt(this,`normal`)))}#c(){this.renderRoot.querySelector(`main`).focus()}#l(e){e.preventDefault(),this.navOpen=!1}#u(e){e.target===e.currentTarget&&(this.navOpen=!1)}render(){let e=this.#e.test(`nav`),t=T`<slot name="nav"></slot>`;return T`<button class="skip" type="button" @click=${this.#c}>Skip to content</button>
      <div class="top"><slot name="top-bar"></slot></div>
      <div class="body">
        ${this._wide?T`<div class="sidebar" ?hidden=${!e}>${t}</div>`:D}
        <main part="main" id="main" tabindex="-1">
          <div part="content" class="content"><slot></slot></div>
        </main>
      </div>
      ${this._wide?D:T`<dialog
            part="drawer"
            class="drawer"
            aria-label="Navigation"
            @cancel=${this.#l}
            @click=${this.#u}
          >
            <div class="drawer-head">
              <ep-icon-button icon="x" label="Close navigation" @click=${()=>this.navOpen=!1}></ep-icon-button>
            </div>
            <div class="drawer-nav">${t}</div>
            <slot name="toaster"></slot>
          </dialog>`}`}};h(`ep-top-bar`,class extends j{static properties={menuButton:{type:Boolean,reflect:!0,attribute:`menu-button`},menuExpanded:{type:Boolean,reflect:!0,attribute:`menu-expanded`}};static styles=[N,g`
      :host {
        display: block;
        container-type: inline-size;
      }

      header {
        display: flex;
        align-items: center;
        gap: var(--ep-space-150);
        height: var(--ep-layout-header-height);
        padding-inline: max(var(--ep-layout-margin), env(safe-area-inset-left))
          max(var(--ep-layout-margin), env(safe-area-inset-right));
        border-block-end: var(--ep-border-width-thin) solid var(--_bar-border, var(--ep-color-border-default));
        background: var(--_bar-bg, var(--ep-color-surface-default));
        color: var(--ep-color-text-primary);
      }

      .menu {
        margin-inline-start: calc(-1 * var(--ep-space-100));
      }

      .brand {
        display: flex;
        flex: none;
        align-items: center;
        gap: var(--ep-space-100);
        min-width: 0;
        font: var(--ep-font-heading-xs);
      }

      .middle {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        min-width: 0;
      }

      .actions {
        display: flex;
        flex: none;
        align-items: center;
        gap: var(--ep-space-100);
        margin-inline-start: auto;
      }

      .middle[hidden],
      .actions[hidden] {
        display: none;
      }

      /* Phones: the middle slot gives way to the brand and actions. Put search behind an icon button there. */
      @container (max-width: 599px) {
        .middle {
          display: none;
        }
      }

      @media (forced-colors: active) {
        header {
          border-block-end-color: CanvasText;
        }
      }
    `];#e=new z(this,`[default]`,`actions`);constructor(){super(),this.menuButton=!1,this.menuExpanded=!1}async updated(){let e=this.renderRoot.querySelector(`.menu`);e&&(await e.updateComplete,G(e,`aria-expanded`,String(this.menuExpanded)))}#t(){this.dispatchEvent(new CustomEvent(`ep-nav-toggle`,{bubbles:!0,composed:!0}))}render(){return T`<header part="base">
      ${this.menuButton?T`<ep-icon-button
            class="menu"
            icon="menu-2"
            label="Open navigation"
            variant="ghost"
            @click=${this.#t}
          ></ep-icon-button>`:null}
      <div class="brand"><slot name="brand"></slot></div>
      <div class="middle" ?hidden=${!this.#e.test(`[default]`)}><slot></slot></div>
      <div class="actions" ?hidden=${!this.#e.test(`actions`)}><slot name="actions"></slot></div>
    </header>`}});var Pn=class extends j{static properties={label:{},appearance:{reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        height: 100%;
      }

      /* The dark rail. Items and groups read these private properties, which inherit through the shadow boundary. */
      :host([appearance='inverse']) {
        --_nav-text: var(--ep-color-rail-text-secondary);
        --_nav-text-active: var(--ep-color-rail-text);
        --_nav-hover: var(--ep-color-rail-hover);
        --_nav-current: var(--ep-color-rail-current);
        --_nav-accent: var(--ep-color-rail-accent);
        --_nav-border: var(--ep-color-rail-border);
        --_nav-shadow: none;
        --_nav-glow: 0 0 12px 1px color-mix(in srgb, var(--ep-color-rail-accent) 60%, transparent);
        background: var(--ep-color-rail-background);
        color: var(--ep-color-rail-text);
      }

      .header {
        padding: var(--ep-space-100) var(--ep-space-150) 0;
      }

      .header[hidden] {
        display: none;
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-300);
        min-height: 100%;
        padding: var(--ep-space-200) var(--ep-space-150);
      }

      .list,
      .footer {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-25);
      }

      /* Groups need more room around them than items do. */
      .list ::slotted(ep-side-nav-group:not(:first-child)) {
        margin-block-start: var(--ep-space-200);
      }

      .footer {
        margin-block-start: auto;
        padding-block-start: var(--ep-space-200);
        border-block-start: var(--ep-border-width-thin) solid var(--_nav-border, var(--ep-color-border-default));
      }

      .footer[hidden] {
        display: none;
      }
    `];#e=new z(this,`header`,`footer`);constructor(){super(),this.label=`Main`,this.appearance=`default`}render(){return T`<nav part="base" aria-label=${this.label}>
      <div class="header" ?hidden=${!this.#e.test(`header`)}><slot name="header"></slot></div>
      <div class="list" role="list"><slot></slot></div>
      <div class="footer" role="list" ?hidden=${!this.#e.test(`footer`)}><slot name="footer"></slot></div>
    </nav>`}},Fn=class extends j{static shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0};static properties={href:{},icon:{reflect:!0},current:{type:Boolean,reflect:!0}};static styles=[N,g`
      :host {
        display: block;
      }

      a {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--ep-space-150);
        min-height: var(--ep-size-control-md);
        padding: var(--ep-space-100) var(--ep-space-150);
        border-radius: var(--ep-radius-control);
        color: var(--_nav-text, var(--ep-color-text-secondary));
        font: var(--ep-font-label-md);
        text-decoration: none;
        transition: background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      a:hover {
        background: var(--_nav-hover, var(--ep-color-interactive-ghost-hover));
        color: var(--_nav-text-active, var(--ep-color-text-primary));
      }

      a:active {
        background: var(--_nav-current, var(--ep-color-interactive-ghost-active));
      }

      a:focus-visible {
        ${P}
        outline-color: var(--_nav-accent, var(--ep-color-border-focus));
        outline-offset: -2px;
      }

      :host([current]) a {
        background: var(--_nav-current, var(--ep-color-surface-sheet));
        box-shadow: var(--_nav-shadow, var(--ep-shadow-raised));
        color: var(--_nav-text-active, var(--ep-color-text-primary));
        font-weight: var(--ep-font-weight-semibold);
      }

      /* A bar at the inline start, so the current page doesn't rely on the tint alone. */
      :host([current]) a::before {
        content: '';
        position: absolute;
        inset-block: var(--ep-space-100);
        inset-inline-start: 0;
        width: 3px;
        border-radius: var(--ep-radius-round);
        background: var(--_nav-accent, var(--ep-color-accent-default));
        box-shadow: var(--_nav-glow, none);
      }

      :host([current]) a ep-icon {
        color: var(--_nav-accent, inherit);
      }

      ep-icon {
        flex: none;
        font-size: var(--ep-size-icon-md);
      }

      .label {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      @media (forced-colors: active) {
        a {
          color: LinkText;
        }

        :host([current]) a {
          outline: 1px solid Highlight;
        }

        :host([current]) a::before {
          background: Highlight;
        }
      }
    `];constructor(){super(),this.href=``,this.icon=``,this.current=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return T`<a part="link" href=${this.href||D} aria-current=${this.current?`page`:D}>
      ${this.icon?T`<ep-icon name=${this.icon}></ep-icon>`:D}
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    </a>`}},In=class extends j{static properties={heading:{}};static styles=[N,g`
      :host {
        display: block;
      }

      .heading {
        padding: var(--ep-space-100) var(--ep-space-150) var(--ep-space-50);
        color: var(--_nav-text, var(--ep-color-text-secondary));
        font: var(--ep-font-label-sm);
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-25);
      }
    `];constructor(){super(),this.heading=``}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return T`<div role="group" aria-labelledby="heading">
      <div part="heading" class="heading" id="heading">${this.heading}</div>
      <div class="list" role="list"><slot></slot></div>
    </div>`}};h(`ep-side-nav`,Pn),h(`ep-side-nav-item`,Fn),h(`ep-side-nav-group`,In),h(`ep-page-header`,class extends j{static properties={heading:{},headingLevel:{type:Number,attribute:`heading-level`},variant:{reflect:!0}};static styles=[N,g`
      :host {
        display: block;
        container-type: inline-size;
      }

      .base {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--ep-space-100);
        padding-block-end: var(--ep-space-300);
        color: var(--ep-color-text-primary);
      }

      .heading {
        margin: 0;
        font: var(--ep-font-heading-lg);
        letter-spacing: -0.02em;
        text-wrap: balance;
      }

      .description {
        color: var(--ep-color-text-secondary);
        font: var(--ep-font-body-md);
        max-width: var(--ep-layout-width-prose);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ep-space-100);
        margin-block-start: var(--ep-space-100);
      }

      .breadcrumbs[hidden],
      .description[hidden],
      .actions[hidden],
      .eyebrow[hidden],
      .aside[hidden],
      .art[hidden] {
        display: none;
      }

      /* Hero: the title on the brand gradient, with the actions below it on the page. */
      .hero {
        display: contents;
      }

      :host([variant='hero']) .hero {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--ep-space-100) var(--ep-space-300);
        align-items: end;
        padding: var(--ep-space-300);
        overflow: hidden;
        border-radius: var(--ep-radius-container);
        background:
          radial-gradient(120% 140% at 100% 0%, var(--ep-color-hero-glow) 0%, transparent 55%),
          linear-gradient(135deg, var(--ep-color-hero-start), var(--ep-color-hero-end));
        color: var(--ep-color-hero-text);
      }

      :host([variant='hero']) .heading {
        font: var(--ep-font-heading-xl);
        font-size: var(--ep-font-size-900);
        letter-spacing: -0.035em;
      }

      :host([variant='hero']) .description {
        color: inherit;
      }

      .eyebrow {
        font: var(--ep-font-label-sm);
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .aside {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ep-space-100);
        z-index: 1;
      }

      .art {
        position: absolute;
        inset-block-start: calc(-1 * var(--ep-space-600));
        inset-inline-end: calc(-1 * var(--ep-space-500));
        width: 16rem;
        opacity: 0.12;
        transform: rotate(-8deg);
        pointer-events: none;
      }

      .art ::slotted(*) {
        display: block;
        width: 100%;
        height: auto;
      }

      :host([variant='hero']) .text {
        position: relative;
        display: grid;
        gap: var(--ep-space-100);
      }

      .text {
        display: contents;
      }

      :host(:not([variant='hero'])) :is(.eyebrow, .aside, .art) {
        display: none;
      }

      @container (min-width: 600px) {
        :host([variant='hero']) .hero {
          grid-template-columns: minmax(0, 1fr) auto;
        }

        :host([variant='hero']) :is(.heading, .description, .breadcrumbs) {
          grid-column: auto;
          grid-row: auto;
        }

        :host([variant='hero']) .base {
          grid-template-columns: minmax(0, 1fr);
        }

        :host([variant='hero']) .actions {
          grid-column: 1;
          grid-row: auto;
          justify-content: flex-start;
          margin-block-start: var(--ep-space-100);
        }
      }

      @media (forced-colors: active) {
        :host([variant='hero']) .hero {
          border: 1px solid CanvasText;
          background: Canvas;
          color: CanvasText;
        }
      }

      @container (min-width: 600px) {
        .base {
          grid-template-columns: minmax(0, 1fr) auto;
          column-gap: var(--ep-space-300);
          padding-block-end: var(--ep-space-400);
        }

        .breadcrumbs {
          grid-column: 1 / -1;
          grid-row: 1;
        }

        .description {
          grid-column: 1 / -1;
          grid-row: 3;
        }

        .heading {
          grid-column: 1;
          grid-row: 2;
          font: var(--ep-font-heading-xl);
          letter-spacing: -0.02em;
        }

        .actions {
          grid-column: 2;
          grid-row: 2;
          align-self: center;
          justify-content: flex-end;
          margin-block-start: 0;
        }

        :host(:not([variant='hero'])) .base:has(.breadcrumbs[hidden]) .heading,
        :host(:not([variant='hero'])) .base:has(.breadcrumbs[hidden]) .actions {
          grid-row: 1;
        }

        :host(:not([variant='hero'])) .base:has(.breadcrumbs[hidden]) .description {
          grid-row: 2;
        }
      }
    `];#e=new z(this,`breadcrumbs`,`[default]`,`actions`,`eyebrow`,`aside`,`art`);constructor(){super(),this.heading=``,this.headingLevel=1,this.variant=`default`}render(){let e=Math.min(6,Math.max(1,Math.floor(this.headingLevel)||1));return T`<div class="base">
      <div class="breadcrumbs" ?hidden=${!this.#e.test(`breadcrumbs`)}><slot name="breadcrumbs"></slot></div>
      <div class="hero">
        <div class="art" aria-hidden="true" ?hidden=${!this.#e.test(`art`)}><slot name="art"></slot></div>
        <div class="text">
          <div class="eyebrow" ?hidden=${!this.#e.test(`eyebrow`)}><slot name="eyebrow"></slot></div>
          <div part="heading" class="heading" role="heading" aria-level=${e}>${this.heading}</div>
          <div class="description" ?hidden=${!this.#e.test(`[default]`)}><slot></slot></div>
        </div>
        <div class="aside" ?hidden=${!this.#e.test(`aside`)}><slot name="aside"></slot></div>
      </div>
      <div class="actions" ?hidden=${!this.#e.test(`actions`)}><slot name="actions"></slot></div>
    </div>`}}),h(`ep-app-shell`,Nn);var Ln={$comment:"Every Eduport logo file in svg/. `use` says where each one belongs; the gallery and docs are generated from this list.",color:`#ff6518`,logos:[{name:`wordmark-orange`,group:`core`,mark:`wordmark`,title:`Wordmark, orange`,preview:`light`,use:`The primary logo. Use it whenever the background is white or a light neutral: app and website headers, sign-in screens, emails, documents and slides.`},{name:`wordmark-white`,group:`core`,mark:`wordmark`,title:`Wordmark, white`,preview:`brand`,use:`On brand orange, dark surfaces (dark theme headers) and dark photos or video. Check the background behind it is dark enough to read the cap and tassel.`},{name:`wordmark-black`,group:`core`,mark:`wordmark`,title:`Wordmark, black`,preview:`light`,use:`One-color reproduction only: black-and-white print, stamps, engraving and embossing, fax, and partner lockups that require a mono logo.`},{name:`symbol-orange`,group:`core`,mark:`symbol`,title:`Symbol, orange`,preview:`light`,derived:!0,use:`The cap-and-e mark alone, for tight spaces where Eduport is already named nearby: a collapsed sidebar, a loading screen, a watermark.`},{name:`symbol-white`,group:`core`,mark:`symbol`,title:`Symbol, white`,preview:`brand`,derived:!0,use:`The symbol on brand orange or dark surfaces, for the same tight spaces as the orange symbol.`},{name:`symbol-tile-brand`,group:`icon`,mark:`symbol`,title:`App icon, orange`,use:`The default app icon: iOS and Android launcher icons, PWA manifest icons, favicons, and app store listings.`},{name:`symbol-tile-light`,group:`icon`,mark:`symbol`,title:`App icon, white`,use:`Alternate app icon for orange or dark backgrounds where the orange tile would disappear, such as a tile on a brand-colored page or a dark-mode home screen preview.`},{name:`symbol-circle-brand`,group:`icon`,mark:`symbol`,title:`Round icon, orange`,use:`Eduport as the sender inside a product: the avatar on system messages, notifications, comments and chat, and map pins.`},{name:`symbol-circle-light`,group:`icon`,mark:`symbol`,title:`Round icon, white`,use:`The round icon on orange or dark backgrounds, for example a system avatar inside an orange banner.`},{name:`wordmark-tile-brand`,group:`icon`,mark:`wordmark`,title:`Wordmark tile, orange`,use:`Square spaces big enough to read the name: default cover images for courses and videos, square ads, social post templates and end cards.`},{name:`wordmark-tile-light`,group:`icon`,mark:`wordmark`,title:`Wordmark tile, white`,use:`The wordmark tile on orange or dark backgrounds, or where a lighter placeholder image reads better.`},{name:`symbol-avatar-brand`,group:`social`,mark:`symbol`,title:`Social avatar, symbol`,use:`Profile pictures on platforms that crop to a circle and show them small: WhatsApp, YouTube, Instagram, X. The extra padding keeps the mark inside the circle.`},{name:`wordmark-avatar-brand`,group:`social`,mark:`wordmark`,title:`Social avatar, wordmark`,use:`Profile pictures shown large enough to read the name, such as a LinkedIn or Facebook page. Safe for circular crops.`},{name:`wordmark-card-light-lg`,group:`card`,mark:`wordmark`,title:`White card, large mark`,use:`Places the logo on photos, colored or busy backgrounds where it needs its own plate. Use the large mark when the card is shown small, such as a partner logo strip or a sponsor row.`},{name:`wordmark-card-light-md`,group:`card`,mark:`wordmark`,title:`White card, medium mark`,use:`The same white card at mid size, such as a logo on an event banner or certificate.`},{name:`wordmark-card-light-sm`,group:`card`,mark:`wordmark`,title:`White card, small mark`,use:`The white card shown large, where the generous padding reads as breathing room: a hero banner or a printed backdrop.`},{name:`wordmark-card-brand-lg`,group:`card`,mark:`wordmark`,title:`Orange card, large mark`,use:`A solid brand block on white, neutral or dark backgrounds. Use the large mark when the card is shown small, such as an email header or a footer.`},{name:`wordmark-card-brand-md`,group:`card`,mark:`wordmark`,title:`Orange card, medium mark`,use:`The orange card at mid size, such as a presentation title slide or a web banner.`},{name:`wordmark-card-brand-sm`,group:`card`,mark:`wordmark`,title:`Orange card, small mark`,use:`The orange card shown large, where the padding reads as breathing room: a hero, a stage screen or a printed backdrop.`},{name:`wordmark-pill-light`,group:`badge`,mark:`wordmark`,title:`White pill`,use:`A floating badge over photos and video, a 'powered by Eduport' mark on partner pages, and stickers or merchandise.`},{name:`wordmark-pill-brand`,group:`badge`,mark:`wordmark`,title:`Orange pill`,use:`The pill on white or neutral backgrounds, for the same badge, sticker and co-branding uses.`},{name:`wordmark-tab-brand`,group:`tab`,mark:`wordmark`,title:`Orange tab`,use:`Hangs from the top edge of a page: landing page headers, letterheads, certificates and slide masters. Align its flat top edge with the edge of the page.`},{name:`wordmark-tab-light`,group:`tab`,mark:`wordmark`,title:`White tab`,use:`The hanging tab on orange, dark or photo backgrounds.`},{name:`wordmark-tab-angled-brand`,group:`tab`,mark:`wordmark`,title:`Orange angled tab`,use:`A more expressive hanging tab for marketing: posters, social graphics, event banners and campaign pages. Keep it out of product UI.`},{name:`wordmark-tab-angled-light`,group:`tab`,mark:`wordmark`,title:`White angled tab`,use:`The angled tab on orange, dark or photo backgrounds, for the same marketing uses.`}]},X=document.documentElement,Z={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}};function Rn(e,t){X.setAttribute(`data-${e}`,t);for(let n of document.querySelectorAll(`[data-set-${e}]`))n.setAttribute(`aria-pressed`,String(n.getAttribute(`data-set-${e}`)===t));Z.set(`ep-gallery-${e}`,t)}var zn=matchMedia(`(prefers-color-scheme: dark)`).matches;Rn(`theme`,Z.get(`ep-gallery-theme`)??X.dataset.theme??(zn?`dark`:`light`)),Rn(`corners`,Z.get(`ep-gallery-corners`)??`soft`);var Bn=document.getElementById(`reduce-motion`);function Vn(e){e?X.dataset.motion=`reduced`:delete X.dataset.motion,Bn.checked=e,Z.set(`ep-gallery-motion`,e?`reduced`:`full`)}Vn(Z.get(`ep-gallery-motion`)===`reduced`),Bn.addEventListener(`change`,()=>Vn(Bn.checked)),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-set-theme], [data-set-corners], [data-open], [data-close], [data-toast], [data-toast-undo], [data-fake-save]`);t&&(t.dataset.setTheme&&Rn(`theme`,t.dataset.setTheme),t.dataset.fakeSave&&Un(t,Number(t.dataset.fakeSave)),t.hasAttribute(`data-toast-undo`)&&Wn(),t.dataset.setCorners&&Rn(`corners`,t.dataset.setCorners),t.dataset.open&&document.getElementById(t.dataset.open).show(),t.hasAttribute(`data-close`)&&t.closest(`ep-modal`).close(),t.dataset.toast&&Gn(t.dataset.toast))});var Hn={success:{variant:`success`,heading:`Assignment submitted`,message:`Your teacher will review it by Thursday.`},info:{variant:`info`,message:`A new lesson was added to Physics for Class 11.`},warning:{variant:`warning`,heading:`Storage almost full`,message:`You have used 90% of your 5 GB.`},danger:{variant:`danger`,heading:`Couldn't save`,message:`Check your connection and try again.`,duration:0},"danger-deleted":{variant:`success`,message:`Course deleted.`},invite:{variant:`success`,heading:`Invite sent`,message:`They will get an email with a join link.`},long:{variant:`info`,heading:`Timetable updated`,message:`Physics for Class 11 moves from Monday to Wednesday at 10 AM starting next week. Students and parents have been told by email, and the change shows in everyone's calendar. Lab sessions stay on Friday as before.`}};function Un(e,t){e.loading=!0,setTimeout(()=>{e.loading=!1,U({variant:`success`,message:`Saved.`})},t)}function Wn(){let e=U({variant:`success`,message:`Lesson deleted.`}),t=document.createElement(`ep-button`);t.slot=`action`,t.size=`sm`,t.variant=`ghost`,t.textContent=`Undo`,t.addEventListener(`click`,()=>{e.close(),U({variant:`info`,message:`Lesson restored.`})}),e.append(t)}function Gn(e){Hn[e]&&U(Hn[e])}document.getElementById(`menu-demo`).addEventListener(`ep-select`,e=>{U({variant:`info`,message:`You chose ${e.detail.value}.`})}),document.addEventListener(`click`,e=>{e.target.closest(`[data-close-popover]`)?.closest(`ep-popover`).hide()});var Kn=[{name:`Ananya Menon`,section:`11 A`,score:92,fee:`Paid`},{name:`Rahul Nair`,section:`11 A`,score:78,fee:`Due`},{name:`Fatima Rasheed`,section:`11 B`,score:85,fee:`Paid`},{name:`Arjun Pillai`,section:`11 B`,score:64,fee:`Overdue`},{name:`Diya Krishnan`,section:`11 C`,score:88,fee:`Paid`}],qn={Paid:`success`,Due:`warning`,Overdue:`danger`},Jn=document.getElementById(`table-demo`),Q={key:`name`,direction:`ascending`};function Yn(){let e=[...Kn].sort((e,t)=>{let n=e[Q.key]<t[Q.key]?-1:+(e[Q.key]>t[Q.key]);return Q.direction===`ascending`?n:-n});Jn.querySelector(`tbody`).innerHTML=e.map(e=>`<tr>
        <td>${e.name}</td><td>${e.section}</td><td style="text-align: end">${e.score}</td>
        <td><ep-badge variant="${qn[e.fee]}">${e.fee}</ep-badge></td>
        <td style="text-align: end"><ep-icon-button icon="dots-vertical" label="Actions for ${e.name}" size="sm"></ep-icon-button></td>
      </tr>`).join(``);for(let e of Jn.querySelectorAll(`th button`)){let t=e.parentElement;e.dataset.sort===Q.key?t.setAttribute(`aria-sort`,Q.direction):t.removeAttribute(`aria-sort`)}}Jn.addEventListener(`click`,e=>{let t=e.target.closest(`th button`);if(!t)return;let n=t.dataset.sort;Q={key:n,direction:Q.key===n&&Q.direction===`ascending`?`descending`:`ascending`},Yn()}),Yn(),document.getElementById(`exam-date`).isDateDisabled=e=>e.getDay()===0||e.getDay()===6;var Xn=document.getElementById(`doubt-form`);Xn.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(Xn);U({variant:`success`,heading:`Question sent`,message:`Your ${t.get(`subject`)??``} question on "${t.get(`topic`)}" is in the queue.`}),Xn.reset()});var Zn=document.querySelector(`#select-all-demo [data-all]`),$=[...document.querySelectorAll(`#select-all-demo [data-item]`)];function Qn(){let e=$.filter(e=>e.checked).length;Zn.checked=e===$.length,Zn.indeterminate=e>0&&e<$.length}Zn.addEventListener(`change`,()=>{for(let e of $)e.checked=Zn.checked});for(let e of $)e.addEventListener(`change`,Qn);document.getElementById(`filter-tags`).addEventListener(`ep-remove`,e=>{let t=e.target,n=t.nextElementSibling??t.previousElementSibling;t.remove(),n?.focus()});var $n=document.getElementById(`icon-grid`);for(let e of gt()){let t=document.createElement(`figure`);t.innerHTML=`<ep-icon name="${e}"></ep-icon><figcaption>${e}</figcaption>`,$n.append(t)}var er=[[`core`,`Core marks`,`The logo on a transparent background. Use these in most places.`],[`icon`,`App icons and tiles`,`For app launchers, favicons, system avatars and square placeholders.`],[`social`,`Social avatars`,`Extra padding so the mark survives a circular crop.`],[`card`,`Cards`,`A plate for photos and busy backgrounds. The sizes differ only in how much of the card the wordmark fills.`],[`badge`,`Pills`,`Badges, stickers and 'powered by Eduport' marks.`],[`tab`,`Hanging tabs`,`Hang from the top edge of a page, letterhead or slide.`]],tr=Object.assign({"../../../packages/logos/svg/symbol-avatar-brand.svg":e,"../../../packages/logos/svg/symbol-circle-brand.svg":t,"../../../packages/logos/svg/symbol-circle-light.svg":n,"../../../packages/logos/svg/symbol-orange.svg":r,"../../../packages/logos/svg/symbol-tile-brand.svg":i,"../../../packages/logos/svg/symbol-tile-light.svg":a,"../../../packages/logos/svg/symbol-white.svg":o,"../../../packages/logos/svg/wordmark-avatar-brand.svg":s,"../../../packages/logos/svg/wordmark-black.svg":c,"../../../packages/logos/svg/wordmark-card-brand-lg.svg":l,"../../../packages/logos/svg/wordmark-card-brand-md.svg":u,"../../../packages/logos/svg/wordmark-card-brand-sm.svg":d,"../../../packages/logos/svg/wordmark-card-light-lg.svg":f,"../../../packages/logos/svg/wordmark-card-light-md.svg":p,"../../../packages/logos/svg/wordmark-card-light-sm.svg":m,"../../../packages/logos/svg/wordmark-orange.svg":ee,"../../../packages/logos/svg/wordmark-pill-brand.svg":te,"../../../packages/logos/svg/wordmark-pill-light.svg":ne,"../../../packages/logos/svg/wordmark-tab-angled-brand.svg":re,"../../../packages/logos/svg/wordmark-tab-angled-light.svg":ie,"../../../packages/logos/svg/wordmark-tab-brand.svg":ae,"../../../packages/logos/svg/wordmark-tab-light.svg":oe,"../../../packages/logos/svg/wordmark-tile-brand.svg":se,"../../../packages/logos/svg/wordmark-tile-light.svg":ce,"../../../packages/logos/svg/wordmark-white.svg":le}),nr=e=>tr[`../../../packages/logos/svg/${e}.svg`],rr=document.getElementById(`logo-groups`);for(let[e,t,n]of er){let r=document.createElement(`div`);r.className=`demo logo-group`,r.innerHTML=`<h3>${t}</h3><p>${n}</p><div class="logo-grid"></div>`;for(let t of Ln.logos.filter(t=>t.group===e)){let e=document.createElement(`figure`);e.className=`logo-card`,e.innerHTML=`
      <div class="logo-preview" data-preview="${t.preview??`neutral`}" data-mark="${t.mark}">
        <img src="${nr(t.name)}" alt="" />
      </div>
      <figcaption>
        <strong>${t.title}</strong>
        <span>${t.use}</span>
        <a href="${nr(t.name)}" download="eduport-${t.name}.svg"><ep-icon name="download"></ep-icon>${t.name}.svg</a>
      </figcaption>`,r.querySelector(`.logo-grid`).append(e)}rr.append(r)}var ir=[[`0`,`0`,`Resetting; flush edges`],[`25`,`2px`,`Optical nudges, badge and tag padding`],[`50`,`4px`,`Icon to text in small items; label to helper text`],[`100`,`8px`,`Icon to text in buttons; between buttons in a group; label to field`],[`150`,`12px`,`Padding in menus, tooltips and list rows`],[`200`,`16px`,`Card padding; related controls in a row; phone margin and gutter`],[`300`,`24px`,`Between form fields; heading to its content`],[`400`,`32px`,`Between groups inside a section; phone section gap`],[`500`,`40px`,`Page header to content on large screens; tablet section gap`],[`600`,`48px`,`Between major page sections on desktop; between form sections`],[`800`,`64px`,`Empty states; generous page padding`]],ar=document.getElementById(`space-scale`);for(let[e,t,n]of ir){let r=ar.insertRow();r.innerHTML=`<td><code>--ep-space-${e}</code></td><td>${t}</td><td><span class="space-bar" style="width: var(--ep-space-${e})"></span></td><td>${n}</td>`}var or=[[`xl`,matchMedia(`(min-width: 1440px)`)],[`lg`,matchMedia(`(min-width: 1024px)`)],[`md`,matchMedia(`(min-width: 600px)`)]],sr=document.getElementById(`grid-overlay`),cr=document.getElementById(`grid-readout`);function lr(){let e=or.find(([,e])=>e.matches)?.[0]??`base`,t=getComputedStyle(X),n=Number((e=>t.getPropertyValue(`--ep-layout-${e}`).trim())(`columns`));sr.replaceChildren(...Array.from({length:n},(e,t)=>Object.assign(document.createElement(`span`),{textContent:t+1})));let r=Object.assign(document.createElement(`div`),{style:`position:absolute;visibility:hidden`});document.body.append(r);let i=e=>(r.style.width=`var(--ep-layout-${e})`,`${Math.round(r.getBoundingClientRect().width)}px`);cr.textContent=`Breakpoint ${e}: ${n} columns, ${i(`margin`)} margin, ${i(`gutter`)} gutter, ${i(`section-gap`)} section gap.`,r.remove();for(let t of document.querySelectorAll(`.token-table tr[data-bp]`))t.toggleAttribute(`data-active`,t.dataset.bp===e)}for(let[,e]of or)e.addEventListener(`change`,lr);lr();var ur=new Map([...document.querySelectorAll(`.toc a`)].map(e=>[e.hash.slice(1),e])),dr=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){for(let e of ur.values())e.removeAttribute(`aria-current`);ur.get(t.target.id)?.setAttribute(`aria-current`,`true`)}},{rootMargin:`-80px 0px -70% 0px`});for(let e of ur.keys()){let t=document.getElementById(e);t&&dr.observe(t)}