import { o as o$1 } from './if-defined-CwDhfVxy.js';
import { x } from './custom-element-ClSinbnR.js';
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},s=t=>({_$litStatic$:t,r:a}),i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=false;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=true;$!==a&&u.push(i),n.push(c),$++;}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l.get(t))&&(n.raw=n,l.set(t,r=n)),e=u;}return t(r,...e)},u=n(x);
const renderHeading = ({ props }) => (children) => {
    const { level, class: classname, part } = props;
    const headingTag = level > 0 && level <= 6 ? s(`h${level}`) : i `div`;
    return u `<${headingTag}
      class="${o$1(classname)}"
      part="${o$1(part)}"
    >
      ${children}
    </${headingTag}>`;
};
export { renderHeading as r };
//# sourceMappingURL=heading-Sj_Y7ObA.js.map
