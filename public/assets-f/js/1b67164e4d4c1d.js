// Provided by Coveo Professional Services for custom facets and view toggle.
var St=`:root {
  --atomic-primary: #007cc2;
  --atomic-primary-light: #399ffe;
  --atomic-primary-dark: #1a50ad;
  --atomic-on-primary: #ffffff;
  --atomic-ring-primary: rgba(19, 114, 236, 0.5);
  --atomic-neutral-dark: #626971;
  --atomic-neutral-dim: #bfc4c8;
  --atomic-neutral: #bcc3ca;
  --atomic-neutral-light: #f6f7f9;
  --atomic-neutral-lighter: #f2f2f2;
  --atomic-background: #ffffff;
  --atomic-on-background: #282829;
  --atomic-success: #12a244;
  --atomic-error: #ce3f00;
  --atomic-visited: #333;
  --atomic-disabled: #c5cacf;
  --atomic-success-background: #d4fcf0;
  --atomic-error-background: #fcbdc0;
  --atomic-inline-code: #cd2113;
  --atomic-primary-background: #edf6ff;
  --atomic-facet-checkbox-size: 1rem;
  --atomic-font-family: "urw-din", sans-serif;
  --atomic-condensed-font-family: "urw-din-condensed", sans-serif;
  --atomic-border-radius: 0;
  --atomic-border-radius-md: 0;
  --atomic-border-radius-lg: 0;
  --atomic-border-radius-xl: 0;
  --atomic-font-normal: 400;
  --atomic-font-bold: 700;
  --atomic-text-base: 0.975rem;
  --atomic-text-sm: 0.65rem;
  --atomic-text-lg: 0.9rem;
  --atomic-text-xl: 1.025rem;
  --atomic-text-2xl: 1.4rem;
  --atomic-line-height-ratio: 1.5;
  --atomic-layout-spacing-x: 1.5rem;
  --atomic-layout-spacing-y: 1rem;
  --atomic-rating-icon-active-color: #f6ce3c;
  --atomic-rating-icon-outline: none;
  --spacing: 0.25rem;
  --container-lg: 32rem;
  --container-max-size: 1248px;
}

body {
  margin: 0;
}

atomic-search-layout {
  max-width: 1248px;
  margin: 0 auto;
  height: auto;
}

atomic-layout-section[section="search"] {
  width: 100% !important;
  max-width: none !important;
}

atomic-result-template{
  height: 100%;
}

/* Results list */
atomic-result-list::part(result-list) {
  gap: 1.5rem;

  @media (width >= 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
}

atomic-result-list::part(outline) {
  border: none;
  border-radius: 0;
  padding: 0;
}

atomic-result-list::part(outline)::before {
  background-color: var(--atomic-neutral);
  content: " ";
  display: block;
  height: 1px;
  margin: 0 0 1.5rem 0;
}

atomic-result-list::part(result-list-grid-clickable-container) {
  border: 1px solid var(--atomic-neutral);
  padding: 20px;
  margin: 10px 0;
  display: block;
  height: 100%;
  width: 100%;
}

atomic-result-list::part(result-list-grid-clickable-container):hover {
  box-shadow: none;
}

atomic-result-list::part(result-list-grid-clickable-container)::before {
  display: none;
}

/* Facets styling */
atomic-facet::part(facet) {
  border-radius: 0;
  padding: 0;
}

atomic-facet::part(label-button) {
  background-color: #f7f7f7;
  font-weight: normal;
}

atomic-facet::part(label-button),
atomic-facet::part(search-wrapper),
atomic-facet::part(show-more),
atomic-facet::part(show-less),
atomic-facet::part(values) {
  margin-top: 0;
  padding: calc(var(--spacing, 0.25rem) * 4);
}

atomic-facet::part(value-checkbox) {
  border-color: var(--atomic-primary);
  border-width: 2px;
}

atomic-facet::part(value-checkbox-label) {
  font-weight: 400;
}

atomic-search-box::part(submit-button-wrapper),
atomic-search-box::part(submit-button) {
  margin: 0;
  padding: 0 10px;
  background-color: var(--atomic-primary);
  color: var(--atomic-background);
}

atomic-search-box::part(textarea),
atomic-search-box::part(textarea-expander):after {
  padding-block: calc(0.25rem * 3.2);
  white-space: nowrap !important;
}

atomic-search-box::part(wrapper) {
  box-shadow: none;
}

/* Card Layout Overrides (small cards with pictures) */
atomic-result-list.card-layout::part(result-list-grid-clickable-container) {
  width: 100%;
  padding: 0;
}

atomic-result-list.card-layout::part(result-list) {
  gap: 1.5rem;
  justify-content: stretch;

  @media (width >= 480px) {
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
    grid-column-gap: 1.5rem;
  }

  @media (width >= 1024px) {
    grid-template-columns: repeat(4, minmax(10rem, 1fr));
    grid-column-gap: 1.5rem;
  }
}


atomic-result-list.card-layout.three_wide::part(result-list) {
  @media (width >= 1024px) {
    grid-template-columns: repeat(3, minmax(24rem, 1fr));
  }

  @media (width >= 768px) {
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
  }

  @media (width < 768px) {
    grid-template-columns: 1fr;

  }
}

/* Vertical Layout Overrides (1 column layout) */
.atomic-vertical-layout {
  display: flex !important;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;

  @media (width >= 1280px) {
    padding: 0;
  }
}

.atomic-vertical-layout atomic-did-you-mean {
  margin-bottom: 0 !important;
}

.atomic-vertical-layout .search-box-container {
  width: 100%;
  margin-bottom: 0;

  @media (width >= 1024px) {
    max-width: 400px;
  }
}

.atomic-vertical-layout .search-box-title {
  font-size: var(--atomic-text-2xl);
  font-family: var(--atomic-condensed-font-family);
  font-weight: var(--atomic-font-normal);
  margin: .25rem 0 .3rem;
  padding-bottom: var(--spacing);
}

.atomic-vertical-layout atomic-layout-section[section="facets"],
.atomic-vertical-layout atomic-facet-manager {
  width: 100%;
  display: flex !important;
  flex-direction: column;
  margin-bottom: 0 !important;

  @media (width >= 1024px) {
    flex-direction: row;
    gap: 20px;
  }
}

.atomic-vertical-layout atomic-facet-manager dropdown-facet {
  width: 100%;
  flex: 1;

  @media (width >= 1024px) {
    max-width: 400px;
  }
}

/* No result styles */
atomic-no-results::part(icon) {
  display: none;
}

atomic-no-results::part(no-results) {
  font-size: 16px;
}

atomic-layout-section[section="pagination"] {
  margin-top: 1rem;
}
`,kt="ps_mortenson",R={hydratedSelectorName:"hydrated",lazyLoad:!1,propChangeCallback:!1,state:!0,updatable:!0},yt=Object.defineProperty,xt=(t,e)=>{for(var n in e)yt(t,n,{get:e[n],enumerable:!0})},bt="http://www.w3.org/2000/svg",vt="http://www.w3.org/1999/xhtml",wt=(t,e)=>{var n;let i=e.$cmpMeta$;Object.entries((n=i.$members$)!=null?n:{}).map(([o,[s]])=>{if(s&31||s&32){let r=t[o],c=Jt(Object.getPrototypeOf(t),o)||Object.getOwnPropertyDescriptor(t,o);c&&Object.defineProperty(t,o,{get(){return c.get.call(this)},set(l){c.set.call(this,l)},configurable:!0,enumerable:!0}),t[o]=e.$instanceValues$.has(o)?e.$instanceValues$.get(o):r}})};function Jt(t,e){for(;t;){let n=Object.getOwnPropertyDescriptor(t,e);if(n?.get)return n;t=Object.getPrototypeOf(t)}}var v=t=>{if(t.__stencil__getHostRef)return t.__stencil__getHostRef()},jt=(t,e)=>{let n={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map,$serializerValues$:new Map};n.$onReadyPromise$=new Promise(a=>n.$onReadyResolve$=a),t["s-p"]=[],t["s-rc"]=[];let i=n;return t.__stencil__getHostRef=()=>i,e.$flags$&512&&R.state&&wt(t,n),i},B=(t,e)=>e in t,I=(t,e)=>(0,console.error)(t,e),W=new Map,qt="slot-fb{display:contents}slot-fb[hidden]{display:none}",m=typeof window<"u"?window:{},M=m.HTMLElement||class{},k={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,i)=>t.addEventListener(e,n,i),rel:(t,e,n,i)=>t.removeEventListener(e,n,i),ce:(t,e)=>new CustomEvent(t,e)},gt=(()=>{var t;let e=!1;try{(t=m.document)==null||t.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch{}return e})(),Rt=t=>Promise.resolve(t),T=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),P=T?(()=>!!m.document&&Object.getOwnPropertyDescriptor(m.document.adoptedStyleSheets,"length").writable)():!1,z=!1,L=[],at=[],Et=(t,e)=>n=>{t.push(n),z||(z=!0,e&&k.$flags$&4?K(G):k.raf(G))},$=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(n){I(n)}t.length=0},G=()=>{$(L),$(at),(z=L.length>0)&&k.raf(G)},K=t=>Rt().then(t),Vt=Et(at,!0);var D=t=>(t=typeof t,t==="object"||t==="function");function Wt(t){var e,n,i;return(i=(n=(e=t.head)==null?void 0:e.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?i:void 0}var Yt=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),It={};xt(It,{err:()=>ot,map:()=>Mt,ok:()=>X,unwrap:()=>Tt,unwrapErr:()=>Zt});var X=t=>({isOk:!0,isErr:!1,value:t}),ot=t=>({isOk:!1,isErr:!0,value:t});function Mt(t,e){if(t.isOk){let n=e(t.value);return n instanceof Promise?n.then(i=>X(i)):X(n)}if(t.isErr){let n=t.value;return ot(n)}throw"should never get here"}var Tt=t=>{if(t.isOk)return t.value;throw t.value},Zt=t=>{if(t.isErr)return t.value;throw t.value};function Ot(t){if(!T)return;let e=new CSSStyleSheet;return e.replaceSync(t),e}var g;function Pt(t){var e;let n=this.attachShadow({mode:"open"});g===void 0&&(g=(e=Ot(St))!=null?e:null),g&&(P?n.adoptedStyleSheets.push(g):n.adoptedStyleSheets=[...n.adoptedStyleSheets,g])}var w=(t,e="")=>()=>{},j=new WeakMap,zt=(t,e,n)=>{let i=W.get(t);T&&n?(i=i||new CSSStyleSheet,typeof i=="string"?i=e:i.replaceSync(e)):i=e,W.set(t,i)},Gt=(t,e,n)=>{var i;let a=rt(e),o=W.get(a);if(!m.document)return a;if(t=t.nodeType===11?t:m.document,o)if(typeof o=="string"){t=t.head||t;let s=j.get(t),r;if(s||j.set(t,s=new Set),!s.has(a)){{r=m.document.createElement("style"),r.innerHTML=o;let c=(i=k.$nonce$)!=null?i:Wt(m.document);if(c!=null&&r.setAttribute("nonce",c),!(e.$flags$&1))if(t.nodeName==="HEAD"){let l=t.querySelectorAll("link[rel=preconnect]"),d=l.length>0?l[l.length-1].nextSibling:t.querySelector("style");t.insertBefore(r,d?.parentNode===t?d:null)}else if("host"in t)if(T){let l=new CSSStyleSheet;l.replaceSync(o),P?t.adoptedStyleSheets.unshift(l):t.adoptedStyleSheets=[l,...t.adoptedStyleSheets]}else{let l=t.querySelector("style");l?l.innerHTML=o+l.innerHTML:t.prepend(r)}else t.append(r);e.$flags$&1&&t.insertBefore(r,null)}e.$flags$&4&&(r.innerHTML+=qt),s&&s.add(a)}}else t.adoptedStyleSheets.includes(o)||(P?t.adoptedStyleSheets.push(o):t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]);return a},Xt=t=>{let e=t.$cmpMeta$,n=t.$hostElement$,i=e.$flags$,a=w("attachStyles",e.$tagName$),o=Gt(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);i&10&&(n["s-sc"]=o,n.classList.add(o+"-h")),a()},rt=(t,e)=>"sc-"+t.$tagName$,u=(t,e,...n)=>{let i=null,a=null,o=!1,s=!1,r=[],c=d=>{for(let f=0;f<d.length;f++)i=d[f],Array.isArray(i)?c(i):i!=null&&typeof i!="boolean"&&((o=typeof t!="function"&&!D(i))&&(i=String(i)),o&&s?r[r.length-1].$text$+=i:r.push(o?U(null,i):i),s=o)};if(c(n),e){e.key&&(a=e.key);{let d=e.className||e.class;d&&(e.class=typeof d!="object"?d:Object.keys(d).filter(f=>d[f]).join(" "))}}let l=U(t,null);return l.$attrs$=e,r.length>0&&(l.$children$=r),l.$key$=a,l},U=(t,e)=>{let n={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return n.$attrs$=null,n.$key$=null,n},H={},Ut=t=>t&&t.$tag$===H,C=t=>{let e=Yt(t);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`,"g")};C("::slotted");C(":host");C(":host-context");var st=(t,e,n)=>t!=null&&!D(t)&&e&1?String(t):t,Kt=(t,e,n)=>{let i=k.ce(e,n);return t.dispatchEvent(i),i},_=(t,e,n,i,a,o,s)=>{if(n===i)return;let r=B(t,e),c=e.toLowerCase();if(e==="class"){let l=t.classList,d=tt(n),f=tt(i);l.remove(...d.filter(p=>p&&!f.includes(p))),l.add(...f.filter(p=>p&&!d.includes(p)))}else if(e==="style"){for(let l in n)(!i||i[l]==null)&&(l.includes("-")?t.style.removeProperty(l):t.style[l]="");for(let l in i)(!n||i[l]!==n[l])&&(l.includes("-")?t.style.setProperty(l,i[l]):t.style[l]=i[l])}else if(e!=="key")if(!t.__lookupSetter__(e)&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"?e=e.slice(3):B(m,c)?e=c.slice(2):e=c[2]+e.slice(3),n||i){let l=e.endsWith(lt);e=e.replace(Ht,""),n&&k.rel(t,e,n,l),i&&k.ael(t,e,i,l)}}else{let l=D(i);if((r||l&&i!==null)&&!a)try{if(t.tagName.includes("-"))t[e]!==i&&(t[e]=i);else{let d=i??"";e==="list"?r=!1:(n==null||t[e]!=d)&&(typeof t.__lookupSetter__(e)=="function"?t[e]=d:t.setAttribute(e,d))}}catch{}i==null||i===!1?(i!==!1||t.getAttribute(e)==="")&&t.removeAttribute(e):(!r||o&4||a)&&!l&&t.nodeType===1&&(i=i===!0?"":i,t.setAttribute(e,i))}},Dt=/\s/,tt=t=>(typeof t=="object"&&t&&"baseVal"in t&&(t=t.baseVal),!t||typeof t!="string"?[]:t.split(Dt)),lt="Capture",Ht=new RegExp(lt+"$"),ct=(t,e,n,i)=>{let a=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,o=t&&t.$attrs$||{},s=e.$attrs$||{};for(let r of et(Object.keys(o)))r in s||_(a,r,o[r],void 0,n,e.$flags$);for(let r of et(Object.keys(s)))_(a,r,o[r],s[r],n,e.$flags$)};function et(t){return t.includes("ref")?[...t.filter(e=>e!=="ref"),"ref"]:t}var A,S=!1,Y=(t,e,n)=>{let i=e.$children$[n],a=0,o,s;if(i.$text$!==null)o=i.$elm$=m.document.createTextNode(i.$text$);else{if(S||(S=i.$tag$==="svg"),!m.document)throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");if(o=i.$elm$=m.document.createElementNS(S?bt:vt,i.$tag$),S&&i.$tag$==="foreignObject"&&(S=!1),ct(null,i,S),i.$children$)for(a=0;a<i.$children$.length;++a)s=Y(t,i,a),s&&o.appendChild(s);i.$tag$==="svg"?S=!1:o.tagName==="foreignObject"&&(S=!0)}return o["s-hn"]=A,o},dt=(t,e,n,i,a,o)=>{let s=t,r;for(s.shadowRoot&&s.tagName===A&&(s=s.shadowRoot);a<=o;++a)i[a]&&(r=Y(null,n,a),r&&(i[a].$elm$=r,V(s,r,e)))},pt=(t,e,n)=>{for(let i=e;i<=n;++i){let a=t[i];if(a){let o=a.$elm$;o&&o.remove()}}},Ct=(t,e,n,i,a=!1)=>{let o=0,s=0,r=0,c=0,l=e.length-1,d=e[0],f=e[l],p=i.length-1,h=i[0],y=i[p],b,x;for(;o<=l&&s<=p;)if(d==null)d=e[++o];else if(f==null)f=e[--l];else if(h==null)h=i[++s];else if(y==null)y=i[--p];else if(E(d,h,a))J(d,h,a),d=e[++o],h=i[++s];else if(E(f,y,a))J(f,y,a),f=e[--l],y=i[--p];else if(E(d,y,a))J(d,y,a),V(t,d.$elm$,f.$elm$.nextSibling),d=e[++o],y=i[--p];else if(E(f,h,a))J(f,h,a),V(t,f.$elm$,d.$elm$),f=e[--l],h=i[++s];else{for(r=-1,c=o;c<=l;++c)if(e[c]&&e[c].$key$!==null&&e[c].$key$===h.$key$){r=c;break}r>=0?(x=e[r],x.$tag$!==h.$tag$?b=Y(e&&e[s],n,r):(J(x,h,a),e[r]=void 0,b=x.$elm$),h=i[++s]):(b=Y(e&&e[s],n,s),h=i[++s]),b&&V(d.$elm$.parentNode,b,d.$elm$)}o>l?dt(t,i[p+1]==null?null:i[p+1].$elm$,n,i,s,p):s>p&&pt(e,o,l)},E=(t,e,n=!1)=>t.$tag$===e.$tag$?n?(n&&!t.$key$&&e.$key$&&(t.$key$=e.$key$),!0):t.$key$===e.$key$:!1,J=(t,e,n=!1)=>{let i=e.$elm$=t.$elm$,a=t.$children$,o=e.$children$,s=e.$tag$,r=e.$text$;r===null?(S=s==="svg"?!0:s==="foreignObject"?!1:S,ct(t,e,S),a!==null&&o!==null?Ct(i,a,e,o,n):o!==null?(t.$text$!==null&&(i.textContent=""),dt(i,null,e,o,0,o.length-1)):!n&&R.updatable&&a!==null&&pt(a,0,a.length-1),S&&s==="svg"&&(S=!1)):t.$text$!==r&&(i.data=r)},V=(t,e,n)=>t?.insertBefore(e,n),At=(t,e,n=!1)=>{let i=t.$hostElement$,a=t.$vnode$||U(null,null),s=Ut(e)?e:u(null,null,e);if(A=i.tagName,n&&s.$attrs$)for(let r of Object.keys(s.$attrs$))i.hasAttribute(r)&&!["key","ref","style","class"].includes(r)&&(s.$attrs$[r]=i[r]);s.$tag$=null,s.$flags$|=4,t.$vnode$=s,s.$elm$=a.$elm$=i.shadowRoot||i,J(a,s,n)},ft=(t,e)=>{if(e&&!t.$onRenderResolve$&&e["s-p"]){let n=e["s-p"].push(new Promise(i=>t.$onRenderResolve$=()=>{e["s-p"].splice(n-1,1),i()}))}},N=(t,e)=>{if(t.$flags$|=16,t.$flags$&4){t.$flags$|=512;return}ft(t,t.$ancestorComponent$);let n=()=>Nt(t,e);if(e){queueMicrotask(()=>{n()});return}return Vt(n)},Nt=(t,e)=>{let n=t.$hostElement$,i=w("scheduleUpdate",t.$cmpMeta$.$tagName$),a=n;if(!a)throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let o;return e?o=q(a,"componentWillLoad",void 0,n):o=q(a,"componentWillUpdate",void 0,n),o=nt(o,()=>q(a,"componentWillRender",void 0,n)),i(),nt(o,()=>Ft(t,a,e))},nt=(t,e)=>Qt(t)?t.then(e).catch(n=>{console.error(n),e()}):e(),Qt=t=>t instanceof Promise||t&&t.then&&typeof t.then=="function",Ft=async(t,e,n)=>{var i;let a=t.$hostElement$,o=w("update",t.$cmpMeta$.$tagName$),s=a["s-rc"];n&&Xt(t);let r=w("render",t.$cmpMeta$.$tagName$);Bt(t,e,a,n),s&&(s.map(c=>c()),a["s-rc"]=void 0),r(),o();{let c=(i=a["s-p"])!=null?i:[],l=()=>Lt(t);c.length===0?l():(Promise.all(c).then(l),t.$flags$|=4,c.length=0)}},Bt=(t,e,n,i)=>{try{e=e.render(),t.$flags$&=-17,t.$flags$|=2,At(t,e,i)}catch(a){I(a,t.$hostElement$)}return null},Lt=t=>{let e=t.$cmpMeta$.$tagName$,n=t.$hostElement$,i=w("postUpdate",e),a=n,o=t.$ancestorComponent$;q(a,"componentDidRender",void 0,n),t.$flags$&64?(q(a,"componentDidUpdate",void 0,n),i()):(t.$flags$|=64,_t(n),q(a,"componentDidLoad",void 0,n),i(),t.$onReadyResolve$(n),o||$t()),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),t.$flags$&512&&K(()=>N(t,!1)),t.$flags$&=-517},$t=t=>{K(()=>Kt(m,"appload",{detail:{namespace:kt}}))},q=(t,e,n,i)=>{if(t&&t[e])try{return t[e](n)}catch(a){I(a,i)}},_t=t=>{var e;return t.classList.add((e=R.hydratedSelectorName)!=null?e:"hydrated")},te=(t,e)=>v(t).$instanceValues$.get(e),it=(t,e,n,i)=>{let a=v(t);if(!a)return;let o=t,s=a.$instanceValues$.get(e),r=a.$flags$,c=o;n=st(n,i.$members$[e][0]);let l=Number.isNaN(s)&&Number.isNaN(n);if(n!==s&&!l&&(a.$instanceValues$.set(e,n),(r&18)===2)){if(c.componentShouldUpdate&&c.componentShouldUpdate(n,s,e)===!1)return;N(a,!1)}},ee=(t,e,n)=>{var i,a;let o=t.prototype;if(e.$members$||R.propChangeCallback){let s=Object.entries((i=e.$members$)!=null?i:{});s.map(([r,[c]])=>{if(c&31||c&32){let{get:l,set:d}=Object.getOwnPropertyDescriptor(o,r)||{};l&&(e.$members$[r][0]|=2048),d&&(e.$members$[r][0]|=4096),Object.defineProperty(o,r,{get(){return l?l.apply(this):te(this,r)},configurable:!0,enumerable:!0}),Object.defineProperty(o,r,{set(f){let p=v(this);if(p){if(d){typeof(c&32?this[r]:p.$hostElement$[r])>"u"&&p.$instanceValues$.get(r)&&(f=p.$instanceValues$.get(r)),d.apply(this,[st(f,c)]),f=c&32?this[r]:p.$hostElement$[r],it(this,r,f,e);return}{it(this,r,f,e);return}}}})}});{let r=new Map;o.attributeChangedCallback=function(c,l,d){k.jmp(()=>{var f;let p=r.get(c),h=v(this);if(this.hasOwnProperty(p)&&R.lazyLoad,o.hasOwnProperty(p)&&typeof this[p]=="number"&&this[p]==d)return;if(p==null){let x=h?.$flags$;if(h&&x&&!(x&8)&&x&128&&d!==l){let O=this,Q=(f=e.$watchers$)==null?void 0:f[c];Q?.forEach(F=>{O[F]!=null&&O[F].call(O,d,l,c)})}return}let y=s.find(([x])=>x===p);y&&y[1][0]&4&&(d=!(d===null||d==="false"));let b=Object.getOwnPropertyDescriptor(o,p);d!=this[p]&&(!b.get||b.set)&&(this[p]=d)})},t.observedAttributes=Array.from(new Set([...Object.keys((a=e.$watchers$)!=null?a:{}),...s.filter(([c,l])=>l[0]&31).map(([c,l])=>{let d=l[1]||c;return r.set(d,c),d})]))}}return t},ne=async(t,e,n,i)=>{let a;if(!(e.$flags$&32)){e.$flags$|=32;{a=t.constructor;let r=t.localName;customElements.whenDefined(r).then(()=>e.$flags$|=128)}if(a&&a.style){let r;typeof a.style=="string"&&(r=a.style);let c=rt(n);if(!W.has(c)){let l=w("registerStyles",n.$tagName$);zt(c,r,!!(n.$flags$&1)),l()}}}let o=e.$ancestorComponent$,s=()=>N(e,!0);o&&o["s-rc"]?o["s-rc"].push(s):s()},ie=(t,e)=>{},ae=t=>{if(!(k.$flags$&1)){let e=v(t);if(!e)return;let n=e.$cmpMeta$,i=w("connectedCallback",n.$tagName$);if(e.$flags$&1)ut(t,e,n.$listeners$),e?.$lazyInstance$||e?.$onReadyPromise$&&e.$onReadyPromise$.then(()=>ie());else{e.$flags$|=1;{let a=t;for(;a=a.parentNode||a.host;)if(a["s-p"]){ft(e,e.$ancestorComponent$=a);break}}n.$members$&&Object.entries(n.$members$).map(([a,[o]])=>{if(o&31&&a in t&&t[a]!==Object.prototype[a]){let s=t[a];delete t[a],t[a]=s}}),ne(t,e,n)}i()}},oe=async t=>{if(!(k.$flags$&1)){let e=v(t);e?.$rmListeners$&&(e.$rmListeners$.map(n=>n()),e.$rmListeners$=void 0)}j.has(t)&&j.delete(t),t.shadowRoot&&j.has(t.shadowRoot)&&j.delete(t.shadowRoot)},Z=(t,e)=>{let n={$flags$:e[0],$tagName$:e[1]};n.$members$=e[2],n.$listeners$=e[3];let i=t.prototype.connectedCallback,a=t.prototype.disconnectedCallback;return Object.assign(t.prototype,{__hasHostListenerAttached:!1,__registerHost(){jt(this,n)},connectedCallback(){if(!this.__hasHostListenerAttached){let o=v(this);if(!o)return;ut(this,o,n.$listeners$),this.__hasHostListenerAttached=!0}ae(this),i&&i.call(this)},disconnectedCallback(){oe(this),a&&a.call(this)},__attachShadow(){if(!this.shadowRoot)Pt.call(this,n);else if(this.shadowRoot.mode!=="open")throw new Error(`Unable to re-use existing shadow root for ${n.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}),t.is=n.$tagName$,ee(t,n)},ut=(t,e,n,i)=>{n&&m.document&&n.map(([a,o,s])=>{let r=se(m.document,t,a),c=re(e,s),l=le(a);k.ael(r,o,c,l),(e.$rmListeners$=e.$rmListeners$||[]).push(()=>k.rel(r,o,c,l))})},re=(t,e)=>n=>{try{t.$hostElement$[e](n)}catch(i){I(i,t.$hostElement$)}},se=(t,e,n)=>n&8?m:e,le=t=>gt?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0;import{initializeBindings as ce}from"https://static.cloud.coveo.com/atomic/v3.51.0/index.esm.js";import{buildFacet as de}from"https://static.cloud.coveo.com/headless/v3.45.1/headless.esm.js";var pe=':host{display:block;font-family:var(--atomic-condensed-font-family)}.dropdown-facet-container{position:relative}.facet-header{font-size:var(--atomic-text-2xl);padding-bottom:var(--spacing);color:var(--atomic-on-background)}.select-header{border:1px solid var(--atomic-neutral-dim);padding:13px 15px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-size:var(--atomic-text-lg);font-family:var(--atomic-font-family);color:var(--atomic-on-background);position:relative;z-index:10;user-select:none}.select-header.expanded{border-color:var(--atomic-primary)}.arrow-icon{border:solid var(--atomic-on-background);border-width:0 2px 2px 0;display:inline-block;padding:3px;transition:transform 0.2s ease-in-out;transform:rotate(45deg)}.select-header.expanded .arrow-icon{transform:rotate(-135deg)}.select-list{position:absolute;top:105%;width:100%;border:1px solid var(--atomic-neutral-dim);background:var(--atomic-background);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);overflow-y:auto;max-height:250px;z-index:15;box-sizing:border-box}.select-list.hidden{display:none}.list-item{display:flex;align-items:center;padding:8px 15px;font-size:var(--atomic-text-lg);font-family:var(--atomic-font-family);border-bottom:1px solid var(--atomic-neutral-lighter)}.list-item:last-child{border-bottom:none}.list-item:hover{background-color:var(--atomic-neutral-light)}.list-item input[type="checkbox"]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.list-item label{display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;position:relative;padding-left:35px}.list-item label::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);height:var(--atomic-facet-checkbox-size);width:var(--atomic-facet-checkbox-size);background-color:var(--atomic-background);border:2px solid var(--atomic-primary);border-radius:var(--atomic-border-radius)}.list-item input[type="checkbox"]:checked+label::before{background-color:var(--atomic-primary);border-color:var(--atomic-primary)}.list-item input[type="checkbox"]:checked+label::after{content:"\u2713";position:absolute;left:4px;top:50%;transform:translateY(-50%);color:var(--atomic-on-primary);font-size:calc(var(--atomic-facet-checkbox-size) * 0.75);font-weight:var(--atomic-font-bold)}.label-text{flex-grow:1}.count-text{flex-shrink:0;color:var(--atomic-neutral-dark);padding-left:10px}',fe=Z(class extends M{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.facetState=null,this.isExpanded=!1,this.onHeaderClick=()=>{this.isExpanded=!this.isExpanded}}async connectedCallback(){try{if(!this.field)throw new Error('Missing "field" attribute');this.label||(this.label=this.field),this.bindings=await ce(this.host),this.facetController=de(this.bindings.engine,{options:{field:this.field,sortCriteria:"alphanumeric",numberOfValues:1e3}}),this.facetController.subscribe(()=>{this.facetState=this.facetController.state});let e=()=>{this.facetState={...this.facetController.state}};this.bindings.i18n.on("languageChanged",e),this.facetState=this.facetController.state}catch(e){console.error(e)}}disconnectedCallback(){}handleOutsideClick(e){let n=e.composedPath();this.isExpanded&&!n.includes(this.host)&&(this.isExpanded=!1)}onToggle(e){this.facetController.toggleSelect(e)}getSelectedLabel(){if(!this.facetState)return this.bindings.i18n.t(this.label);let e=this.facetState.values.filter(n=>n.state==="selected").length;return e===0?this.bindings.i18n.t(`All ${this.label}`):this.bindings.i18n.t(`${e} Selected`)}renderValue(e){let n=this.bindings.i18n,i=n.t(e.value,{ns:`caption-${this.field}`}),a=e.state==="selected",o=`(${e.numberOfResults.toLocaleString(n.language)})`,s=`cb-${this.field}-${e.value}`;return u("div",{class:"list-item"},u("input",{type:"checkbox",id:s,checked:a,onChange:()=>this.onToggle(e)}),u("label",{htmlFor:s},u("span",{class:"label-text"},i),u("span",{class:"count-text"},o)))}render(){if(!this.facetState||!this.bindings)return null;let e=this.facetState.values.length>0||this.facetState.hasActiveValues;return u(H,{style:{display:e?"block":"none"}},e&&u("div",{class:"dropdown-facet-container"},u("div",{class:"facet-header"},this.bindings.i18n.t(this.label)),u("div",{class:{"select-header":!0,expanded:this.isExpanded},onClick:this.onHeaderClick,"aria-expanded":this.isExpanded?"true":"false",role:"button",tabindex:"0"},this.getSelectedLabel(),u("span",{class:"arrow-icon"})),u("div",{class:{"select-list":!0,hidden:!this.isExpanded}},this.facetState.values.map(n=>this.renderValue(n)))))}get host(){return this}static get style(){return pe}},[257,"dropdown-facet",{field:[1],label:[1],facetState:[32],isExpanded:[32]},[[8,"click","handleOutsideClick"]]]);var ht=fe;var ue='.view-toggle-container{display:flex;justify-content:flex-end;margin-bottom:1.5rem}.toggle-button{display:flex;align-items:center;gap:0.5rem;padding:0;background:#f7f7f7;border:none;border-bottom:3px solid transparent;cursor:pointer;font-family:"urw-din-condensed", sans-serif;font-size:1rem;font-weight:400;color:var(--atomic-on-background);transition:all 0.2s ease;position:relative;padding:0.5rem 1rem 0.5rem}.toggle-button:hover{color:#333}.toggle-button.active{border-bottom-color:var(--atomic-primary);font-weight:500}.toggle-button svg{display:flex;align-items:center;justify-content:center;stroke:currentColor}',he=Z(class extends M{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.viewMode="list",this.handleViewChange=n=>{this.viewMode=n,this.applyViewMode()}}async connectedCallback(){await customElements.whenDefined("atomic-search-interface");try{this.applyViewMode()}catch(e){console.error("Error initializing view toggle:",e)}}applyViewMode(){let e=document.querySelector("atomic-result-list");e&&e.setAttribute("display",this.viewMode)}render(){return u("div",{key:"c727a17472b1ed4d23cc516940a381880be34d87",class:"view-toggle-container"},u("button",{key:"63710835840b5ac38dfd42f60a3f6261b4926bfb",class:`toggle-button ${this.viewMode==="list"?"active":""}`,onClick:()=>this.handleViewChange("list"),"aria-label":"List view"},u("svg",{key:"901bdc21f4a7ff281586aa25a0dea731914fe488",viewBox:"0 0 24 24",width:"20",height:"20"},u("line",{key:"9d6e1f1fceb88f0996a8b303463ceed445c8a7b7",x1:"3",y1:"6",x2:"21",y2:"6",stroke:"currentColor","stroke-width":"2"}),u("line",{key:"aceeba9550de524647562f6588d1be4fa6cffe0d",x1:"3",y1:"12",x2:"21",y2:"12",stroke:"currentColor","stroke-width":"2"}),u("line",{key:"849af760a234d323d9ec9ffda3ee8ff05eb08058",x1:"3",y1:"18",x2:"21",y2:"18",stroke:"currentColor","stroke-width":"2"})),u("span",{key:"23f02fcbcdd106541244f50bbae376ee1ee27399"},"List View")),u("button",{key:"a6f4ce4fa7bf87eb761d200ed2b93cfd3eca5f8d",class:`toggle-button ${this.viewMode==="grid"?"active":""}`,onClick:()=>this.handleViewChange("grid"),"aria-label":"grid view"},u("svg",{key:"3f99801f3915fd3f899cff069a3f34af4d901ea0",viewBox:"0 0 24 24",width:"20",height:"20"},u("rect",{key:"de9ab030bee07e8ec6e3ab0b030a8b582fb73c5b",x:"3",y:"3",width:"8",height:"8",stroke:"currentColor","stroke-width":"2",fill:"none"}),u("rect",{key:"aacd8868671b74aba98b36af26ea4b1bc26e7100",x:"13",y:"3",width:"8",height:"8",stroke:"currentColor","stroke-width":"2",fill:"none"}),u("rect",{key:"0037729f44a5a9bddc255c1c9295cc05a081427a",x:"3",y:"13",width:"8",height:"8",stroke:"currentColor","stroke-width":"2",fill:"none"}),u("rect",{key:"5a77d8fb88f80a8915fa7523e491da429e982d21",x:"13",y:"13",width:"8",height:"8",stroke:"currentColor","stroke-width":"2",fill:"none"})),u("span",{key:"ce914d8240ad39fa8b5cc431c85de80d1f5056eb"},"Card View")))}static get style(){return ue}},[257,"view-toggle",{viewMode:[32]}]);var mt=he;var me=t=>{typeof customElements<"u"&&[ht,mt].forEach(e=>{customElements.get(e.is)||customElements.define(e.is,e,t)})};typeof customElements<"u"&&me();export{me as defineCustomElements};
