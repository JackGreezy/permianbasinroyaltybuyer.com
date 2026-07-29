import { isUndefined } from '/bueno/v1.1.7/bueno.esm.js';
import { a as i, x, i as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { g as getAttributesFromLinkSlotContent } from './attributes-slot-C3zYowUF.js';
import { r as renderLinkWithItemAnalytics } from './item-link-BeZg03Mv.js';
import { c as createInteractiveResultContextController } from './interactive-result-context-controller-BkvCLDrf.js';
import { c as createResultContextController } from './result-context-controller-C72BQJg7.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import { S as SlotsForNoShadowDOMMixin } from './slots-for-no-shadow-dom-mixin-q5D7A0A_.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
import { b as buildStringTemplateFromResult } from './result-utils-BzZ-ZscV.js';
import './atomic-result-text-C2oUsW-E.js';
import './slot-utils-DwFSOZ_l.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './xss-utils-DleHB5ul.js';
import './bind-analytics-to-link-Y79wjwFo.js';
import './interactive-item-context-controller-DMdMdxNz.js';
import './item-context-controller-BgvMNQCs.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
import './object-utils-DOvHQ3be.js';
import './item-text-highlighted-Cual1rid.js';
import './unsafe-html-Deeupm6Y.js';
import './validate-props-controller-R9C-T-Ya.js';
import './boolean-converter-DIV6NtGl.js';
import './field-utils-8CvHFjSG.js';
import './atomic-text-L-S67inR.js';
const styles = i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */atomic-result-link a{color:var(--atomic-on-background);text-decoration:none;&:focus-visible,&:hover{color:var(--atomic-primary);text-decoration:underline}&:focus{outline:none}&:visited{color:var(--atomic-visited)}}`;
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-result-link` component automatically transforms a search result title into a clickable link that points to the original item.
 * @slot default - Lets you display alternative content inside the link
 * @slot attributes - Lets you pass [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) down to the link element, overriding other attributes, to be used exclusively with an "a" tag such as `<a slot="attributes" target="_blank" download></a>`.
 */
let AtomicResultLink = class AtomicResultLink extends LightDomMixin(SlotsForNoShadowDOMMixin(i$1)) {
    constructor() {
        super(...arguments);
        this.resultContext = createResultContextController(this);
        this.interactiveResultContext = createInteractiveResultContextController(this);
    }
    initialize() {
        if (!this.result && this.resultContext.item) {
            const item = this.resultContext.item;
            if ('result' in item) {
                this.result = item.result;
            }
            else {
                this.result = item;
            }
        }
        if (!this.interactiveResult &&
            this.interactiveResultContext.interactiveItem) {
            this.interactiveResult = this.interactiveResultContext.interactiveItem;
        }
        this.dispatchEvent(buildCustomEvent('atomic/resolveStopPropagation', (stopPropagation) => {
            this.stopPropagation = stopPropagation;
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.removeLinkEventHandlers) {
            this.removeLinkEventHandlers();
            this.removeLinkEventHandlers = undefined;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        this.linkAttributes = getAttributesFromLinkSlotContent(this, 'attributes');
    }
    render() {
        return x `${n(this.result && this.interactiveResult, () => {
            const result = this.result;
            const interactiveResult = this.interactiveResult;
            const href = isUndefined(this.hrefTemplate)
                ? result.clickUri
                : buildStringTemplateFromResult(this.hrefTemplate, result, this.bindings);
            return renderLinkWithItemAnalytics({
                props: {
                    href,
                    onSelect: () => interactiveResult.select(),
                    onBeginDelayedSelect: () => interactiveResult.beginDelayedSelect(),
                    onCancelPendingSelect: () => interactiveResult.cancelPendingSelect(),
                    attributes: this.linkAttributes,
                    stopPropagation: this.stopPropagation,
                    onInitializeLink: (cleanupCallback) => {
                        if (this.removeLinkEventHandlers) {
                            this.removeLinkEventHandlers();
                        }
                        this.removeLinkEventHandlers = cleanupCallback;
                    },
                },
            })(x `
        ${this.renderDefaultSlotContent(x `<atomic-result-text
            field="title"
            default="no-title"
          ></atomic-result-text>`)}
      `);
        })}`;
    }
};
AtomicResultLink.styles = styles;
__decorate([
    n$1({ reflect: true, attribute: 'href-template' })
], AtomicResultLink.prototype, "hrefTemplate", void 0);
__decorate([
    r()
], AtomicResultLink.prototype, "linkAttributes", void 0);
__decorate([
    r()
], AtomicResultLink.prototype, "stopPropagation", void 0);
__decorate([
    r()
], AtomicResultLink.prototype, "result", void 0);
__decorate([
    r()
], AtomicResultLink.prototype, "interactiveResult", void 0);
__decorate([
    r()
], AtomicResultLink.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicResultLink.prototype, "error", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicResultLink.prototype, "render", null);
AtomicResultLink = __decorate([
    t('atomic-result-link'),
    bindings()
], AtomicResultLink);
export { AtomicResultLink };
//# sourceMappingURL=atomic-result-link-CszPtzUa.js.map
