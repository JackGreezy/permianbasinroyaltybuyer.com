import { ResultTemplatesHelpers } from '/headless/v3.45.1/headless.esm.js';
import { i, E, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { R as ResultTemplateController } from './result-template-controller-C95XtbpL.js';
import { m as makeMatchConditions } from './template-utils-w8NxKX-R.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { m as mapProperty } from './props-utils-CtIuQum3.js';
import './atomic-component-error-CzI0_SHn.js';
import { a as arrayConverter } from './array-converter-BxDz2tBl.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import './atomic-result-BFbOaZBv.js';
import './base-template-controller-CyoYTbNr.js';
import './item-layout-sections-By3xRnK_.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './index-DRai3PWs.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './unsafe-html-Deeupm6Y.js';
import './item-list-common-DSQwU3VE.js';
import './accessibility-utils-BHnCpu87.js';
import './event-utils-Xyk7tlQy.js';
import './replace-breakpoint-utils--qEQDWxF.js';
import './dom-utils-0VKCjoID.js';
import './item-layout-controller-CAYxZqlT.js';
import './item-layout-utils-Di0gijk4.js';
import './validate-props-controller-R9C-T-Ya.js';
import './boolean-converter-DIV6NtGl.js';
import './children-update-complete-mixin-BsCPHIEs.js';
import './atomic-result-text-C2oUsW-E.js';
import './when-BzW5QVN4.js';
import './item-text-highlighted-Cual1rid.js';
import './result-context-controller-C72BQJg7.js';
import './item-context-controller-BgvMNQCs.js';
import './binding-guard-BU6auXaS.js';
import './bindings-CW6TJGy3.js';
import './bindings-context-DAKrxtTy.js';
import './light-dom-DMtqoULx.js';
import './field-utils-8CvHFjSG.js';
import './result-utils-BzZ-ZscV.js';
import './object-utils-DOvHQ3be.js';
import './atomic-text-L-S67inR.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A result template determines the format of the query results, depending on the conditions that are defined for each template.
 *
 * @slot default - The default slot where to insert the template element.
 * @slot link - A `template` element that contains a single `atomic-result-link` component.
 */
let AtomicResultTemplate = class AtomicResultTemplate extends i {
    constructor() {
        super();
        /**
         * A function that must return true on results for the result template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
         */
        this.conditions = [];
        const validParent = [
            'atomic-result-list',
            'atomic-folded-result-list',
            'atomic-search-box-instant-results',
        ];
        const allowEmpty = true;
        this.resultTemplateController = new ResultTemplateController(this, validParent, allowEmpty);
    }
    connectedCallback() {
        super.connectedCallback();
        this.resultTemplateController.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch, ResultTemplatesHelpers);
    }
    render() {
        return E;
    }
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    async getTemplate() {
        return this.resultTemplateController?.getTemplate(this.conditions) || null;
    }
};
__decorate([
    r()
], AtomicResultTemplate.prototype, "error", void 0);
__decorate([
    n({ attribute: false, type: Array, converter: arrayConverter })
], AtomicResultTemplate.prototype, "conditions", void 0);
__decorate([
    mapProperty({ splitValues: true, attributePrefix: 'must-match' })
], AtomicResultTemplate.prototype, "mustMatch", void 0);
__decorate([
    mapProperty({ splitValues: true, attributePrefix: 'must-not-match' })
], AtomicResultTemplate.prototype, "mustNotMatch", void 0);
__decorate([
    errorGuard()
], AtomicResultTemplate.prototype, "render", null);
AtomicResultTemplate = __decorate([
    t('atomic-result-template'),
    withTailwindStyles
], AtomicResultTemplate);
export { AtomicResultTemplate };
//# sourceMappingURL=atomic-result-template-C0XIwCrp.js.map
