import { Schema, BooleanValue, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { ResultTemplatesHelpers, HighlightUtils } from '/headless/v3.45.1/headless.esm.js';
import { x, E, i, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { r as renderItemTextFallback, a as renderItemTextHighlighted } from './item-text-highlighted-Cual1rid.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { c as createResultContextController } from './result-context-controller-C72BQJg7.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import { g as getFieldValueCaption } from './field-utils-8CvHFjSG.js';
import { g as getStringValueFromResultOrNull } from './result-utils-BzZ-ZscV.js';
import './atomic-text-L-S67inR.js';
import './unsafe-html-Deeupm6Y.js';
import './directive-C5w180XZ.js';
import './item-context-controller-BgvMNQCs.js';
import './event-utils-Xyk7tlQy.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
import './object-utils-DOvHQ3be.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicResultText_1;
/**
 * The `atomic-result-text` component renders the value of a string field for a given result.
 */
let AtomicResultText = AtomicResultText_1 = class AtomicResultText extends LightDomMixin(i) {
    constructor() {
        super();
        /**
         * Whether to highlight the string field value.
         * @deprecated - replaced by `no-highlight` (this defaults to `true`, while the replacement is the inverse and defaults to `false`).
         * Only works if the `field` property is set to `title`, `excerpt`, `firstSentences`, `printableUri`, or `summary`.
         */
        this.shouldHighlight = true;
        /**
         * Disable highlighting of the string field value.
         * Only works if the `field` property is set to `title`, `excerpt`, `firstSentences`, `printableUri`, or `summary`.
         */
        this.disableHighlight = false;
        this.resultController = createResultContextController(this);
        new ValidatePropsController(this, () => ({
            field: this.field,
            shouldHighlight: this.shouldHighlight,
            disableHighlight: this.disableHighlight,
        }), AtomicResultText_1.propsSchema);
    }
    initialize() {
        if (!this.result && this.resultController.item) {
            const item = this.resultController.item;
            if ('result' in item) {
                this.result = item.result;
            }
            else {
                this.result = item;
            }
        }
    }
    render() {
        return x `
      ${n(this.result && this.field, () => this.renderResultTextValue(), () => E)}
    `;
    }
    get shouldRenderHighlights() {
        return (!this.disableHighlight &&
            this.shouldHighlight &&
            this.isFieldSupportedForHighlighting());
    }
    isFieldSupportedForHighlighting() {
        return [
            'title',
            'excerpt',
            'firstSentences',
            'printableUri',
            'summary',
        ].includes(this.field);
    }
    highlightKeywords() {
        if (!this.shouldRenderHighlights) {
            return null;
        }
        const highlightMap = {
            title: 'titleHighlights',
            excerpt: 'excerptHighlights',
            firstSentences: 'firstSentencesHighlights',
            printableUri: 'printableUriHighlights',
            summary: 'summaryHighlights',
        };
        const highlightPropertyName = highlightMap[this.field];
        if (!highlightPropertyName) {
            return null;
        }
        return ResultTemplatesHelpers.getResultProperty(this.result, highlightPropertyName);
    }
    renderFallback() {
        if (!this.default) {
            return E;
        }
        return renderItemTextFallback({
            props: {
                field: this.field,
                host: this,
                logger: this.bindings.engine.logger,
                defaultValue: this.default,
                item: this.result,
                getProperty: (result, property) => ResultTemplatesHelpers.getResultProperty(result, property),
            },
        })(x `
      <atomic-text
        .value=${getFieldValueCaption(this.field, this.default, this.bindings.i18n)}
      ></atomic-text>
    `);
    }
    renderResultText(textValue) {
        const highlightKeywords = this.highlightKeywords();
        return this.shouldRenderHighlights &&
            highlightKeywords &&
            highlightKeywords.length > 0
            ? renderItemTextHighlighted({
                props: {
                    textValue,
                    highlightKeywords,
                    highlightString: HighlightUtils.highlightString,
                    onError: (error) => {
                        this.error = error;
                    },
                },
            })
            : x `
          <atomic-text
            .value=${getFieldValueCaption(this.field, textValue, this.bindings.i18n)}
          ></atomic-text>
        `;
    }
    renderResultTextValue() {
        const resultValueAsString = getStringValueFromResultOrNull(this.result, this.field);
        if (resultValueAsString === null) {
            return this.renderFallback();
        }
        return this.renderResultText(`${resultValueAsString}`);
    }
};
AtomicResultText.propsSchema = new Schema({
    field: new StringValue({ required: true, emptyAllowed: false }),
    shouldHighlight: new BooleanValue(),
    disableHighlight: new BooleanValue(),
});
__decorate([
    n$1({ type: String, reflect: true })
], AtomicResultText.prototype, "field", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'should-highlight',
        reflect: true,
        converter: booleanConverter,
    })
], AtomicResultText.prototype, "shouldHighlight", void 0);
__decorate([
    n$1({
        type: Boolean,
        reflect: true,
        useDefault: true,
        attribute: 'no-highlight',
    })
], AtomicResultText.prototype, "disableHighlight", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicResultText.prototype, "default", void 0);
__decorate([
    r()
], AtomicResultText.prototype, "result", void 0);
__decorate([
    r()
], AtomicResultText.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicResultText.prototype, "error", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicResultText.prototype, "render", null);
AtomicResultText = AtomicResultText_1 = __decorate([
    t('atomic-result-text'),
    bindings()
], AtomicResultText);
export { AtomicResultText };
//# sourceMappingURL=atomic-result-text-C2oUsW-E.js.map
