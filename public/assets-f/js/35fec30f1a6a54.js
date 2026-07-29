import { Schema, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { buildDidYouMean, buildQueryTrigger } from '/headless/v3.45.1/headless.esm.js';
import { i, E, x, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { r as renderAutoCorrection, a as renderCorrection, b as renderTriggerCorrection } from './trigger-correction-BfbZjIF6.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './localized-string-CQCD-kWJ.js';
import './directive-C5w180XZ.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicDidYouMean_1;
/**
 * The `atomic-did-you-mean` component is responsible for handling query corrections. When a query returns no result but finds a possible query correction, the component either suggests the correction or automatically triggers a new query with the suggested term.
 *
 * @part no-results - The text displayed when there are no results.
 * @part auto-corrected - The text displayed for the automatically corrected query.
 * @part showing-results-for - The first paragraph of the text displayed when a query trigger changes a query.
 * @part search-instead-for - The second paragraph of the text displayed when a query trigger changes a query.
 * @part did-you-mean - The text displayed around the button to manually correct a query.
 * @part correction-btn - The button used to manually correct a query.
 * @part undo-btn - The button used to undo a query changed by a query trigger.
 * @part highlight - The query highlights.
 */
let AtomicDidYouMean = AtomicDidYouMean_1 = class AtomicDidYouMean extends i {
    constructor() {
        super();
        /**
         * Whether to automatically apply corrections for queries that would otherwise return no results.
         * When `automaticallyCorrectQuery` is `true`, the component automatically triggers a new query using the suggested term.
         * When `automaticallyCorrectQuery` is `false`, the component returns the suggested term without triggering a new query.
         *
         * The default value is `true`.
         */
        this.automaticallyCorrectQuery = true;
        /**
         * Define which query correction system to use
         *
         * `legacy`: Query correction is powered by the legacy index system. This system relies on an algorithm using solely the index content to compute the suggested terms.
         * `next`: Query correction is powered by a machine learning system, requiring a valid query suggestion model configured in your Coveo environment to function properly. This system relies on machine learning algorithms to compute the suggested terms.
         *
         * Default value is `next`.
         */
        this.queryCorrectionMode = 'next';
        new ValidatePropsController(this, () => ({
            queryCorrectionMode: this.queryCorrectionMode,
        }), AtomicDidYouMean_1.propsSchema, false);
    }
    initialize() {
        this.didYouMean = buildDidYouMean(this.bindings.engine, {
            options: {
                automaticallyCorrectQuery: this.automaticallyCorrectQuery,
                queryCorrectionMode: this.queryCorrectionMode,
            },
        });
        this.queryTrigger = buildQueryTrigger(this.bindings.engine);
    }
    updated(changedProperties) {
        if (changedProperties.has('queryCorrectionMode')) {
            this.didYouMean?.updateQueryCorrectionMode(this.queryCorrectionMode);
        }
    }
    get content() {
        const { hasQueryCorrection, wasAutomaticallyCorrected } = this.didYouMeanState;
        const hasTrigger = this.queryTriggerState.wasQueryModified;
        if (hasQueryCorrection && wasAutomaticallyCorrected) {
            return renderAutoCorrection({
                props: {
                    correctedTo: this.didYouMeanState.wasCorrectedTo,
                    originalQuery: this.didYouMeanState.originalQuery,
                    i18n: this.bindings.i18n,
                },
            });
        }
        if (hasQueryCorrection) {
            return renderCorrection({
                props: {
                    correctedQuery: this.didYouMeanState.queryCorrection.correctedQuery,
                    i18n: this.bindings.i18n,
                    onClick: () => this.didYouMean.applyCorrection(),
                },
            });
        }
        if (hasTrigger) {
            return renderTriggerCorrection({
                props: {
                    i18n: this.bindings.i18n,
                    i18nKeyShowingItemsFor: 'showing-results-for',
                    correctedQuery: this.queryTriggerState.newQuery,
                    originalQuery: this.queryTriggerState.originalQuery,
                    onClick: () => this.queryTrigger.undo(),
                },
            });
        }
        return E;
    }
    render() {
        const hasCorrection = this.didYouMeanState.hasQueryCorrection ||
            this.queryTriggerState.wasQueryModified;
        return x `${n(hasCorrection, () => this.content)}`;
    }
};
AtomicDidYouMean.propsSchema = new Schema({
    queryCorrectionMode: new StringValue({
        constrainTo: ['legacy', 'next'],
    }),
});
__decorate([
    bindStateToController('didYouMean'),
    r()
], AtomicDidYouMean.prototype, "didYouMeanState", void 0);
__decorate([
    bindStateToController('queryTrigger'),
    r()
], AtomicDidYouMean.prototype, "queryTriggerState", void 0);
__decorate([
    r()
], AtomicDidYouMean.prototype, "error", void 0);
__decorate([
    n$1({
        reflect: true,
        type: Boolean,
        converter: booleanConverter,
        attribute: 'automatically-correct-query',
    })
], AtomicDidYouMean.prototype, "automaticallyCorrectQuery", void 0);
__decorate([
    n$1({ reflect: true, type: String, attribute: 'query-correction-mode' })
], AtomicDidYouMean.prototype, "queryCorrectionMode", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicDidYouMean.prototype, "render", null);
AtomicDidYouMean = AtomicDidYouMean_1 = __decorate([
    t('atomic-did-you-mean'),
    withTailwindStyles,
    bindings()
], AtomicDidYouMean);
export { AtomicDidYouMean };
//# sourceMappingURL=atomic-did-you-mean-BCmRFHiQ.js.map
