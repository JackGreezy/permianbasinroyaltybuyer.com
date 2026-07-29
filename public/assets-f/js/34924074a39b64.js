import { p as purify } from './purify.es-BkIzpzFh.js';
import { T, b, i as i$2, a as i$3, t as t$1 } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { e as e$1, i as i$1 } from './directive-C5w180XZ.js';
import { e as e$2 } from './unsafe-html-Deeupm6Y.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as watch } from './watch-CV_JtHFl.js';
import { I as InitializeBindingsMixin } from './bindings-mixin-BbXNSbAr.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import { p as parseAssetURL } from './asset-path-utils-DR8U1hRo.js';
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e={},i=e$1(class extends i$1{constructor(){super(...arguments),this.ot=e;}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.ot)&&this.ot.length===s.length&&s.every(((r,t)=>r===this.ot[t])))return T}else if(this.ot===s)return T;return this.ot=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t extends e$2{}t.directiveName="unsafeSVG",t.resultType=2;const o=e$1(t);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class IconFetchError extends Error {
    static fromStatusCode(url, statusCode, statusText) {
        return new IconFetchError(url, `status code ${statusCode} (${statusText})`);
    }
    static fromError(url, error) {
        return new IconFetchError(url, 'an error', error);
    }
    constructor(url, errorMessage, errorObject) {
        super(`Could not fetch icon from ${url}, got ${errorMessage}.`);
        this.url = url;
        this.errorObject = errorObject;
    }
}
/**
 * The `atomic-icon` component displays an SVG icon with a 1:1 aspect ratio.
 *
 * This component can display an icon from those available in the Atomic package, from a specific location, or as an inline SVG element.
 */
let AtomicIcon = class AtomicIcon extends LightDomMixin(InitializeBindingsMixin(i$2)) {
    constructor() {
        super(...arguments);
        this.svg = null;
    }
    async fetchIcon(url) {
        try {
            const response = await fetch(url).catch((e) => {
                throw IconFetchError.fromError(url, e);
            });
            if (response.status !== 200 && response.status !== 304) {
                throw IconFetchError.fromStatusCode(url, response.status, response.statusText);
            }
            return await response.text();
        }
        catch (e) {
            this.error = e;
            this.requestUpdate();
            return null;
        }
    }
    validateSVG(svg) {
        if (!/^<svg[\s\S]+<\/svg>$/gm.test(svg)) {
            this.bindings.engine.logger.warn('The inline "icon" prop is not an svg element. You may encounter rendering issues.');
        }
    }
    async getIcon() {
        if (!this.bindings) {
            return null;
        }
        const url = parseAssetURL(this.icon, this.bindings.store.state.iconAssetsPath);
        const svg = url ? await this.fetchIcon(url) : this.icon;
        if (svg) {
            this.validateSVG(svg);
        }
        const sanitizedSvg = svg
            ? purify.sanitize(svg, {
                USE_PROFILES: { svg: true, svgFilters: true },
            })
            : null;
        return sanitizedSvg;
    }
    async updateIcon() {
        const svgPromise = this.getIcon();
        this.svg = await svgPromise;
    }
    async initialize() {
        await this.updateIcon();
    }
    render() {
        this.ariaHidden = 'true';
        return b `${i([this.svg], () => o(this.svg))}`;
    }
};
AtomicIcon.styles = i$3`@layer components{atomic-icon{aspect-ratio:1/1;display:inline-block;fill:currentColor;height:auto;@supports not (aspect-ratio:1/1){height:auto}>svg{aspect-ratio:1/1;height:auto;max-height:100%;width:100%}}}`;
__decorate([
    n({ type: String, reflect: true })
], AtomicIcon.prototype, "icon", void 0);
__decorate([
    r()
], AtomicIcon.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicIcon.prototype, "error", void 0);
__decorate([
    r()
], AtomicIcon.prototype, "svg", void 0);
__decorate([
    watch('icon')
], AtomicIcon.prototype, "updateIcon", null);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicIcon.prototype, "render", null);
AtomicIcon = __decorate([
    t$1('atomic-icon')
], AtomicIcon);
var atomicIcon = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get AtomicIcon () { return AtomicIcon; }
});
export { atomicIcon as a, i };
//# sourceMappingURL=atomic-icon-D7DRsDUP.js.map
