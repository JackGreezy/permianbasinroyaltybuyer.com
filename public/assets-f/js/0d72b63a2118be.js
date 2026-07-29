import { Schema, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { ResultTemplatesHelpers } from '/headless/v3.45.1/headless.esm.js';
import { E, x, i, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { c as createResultContextController } from './result-context-controller-C72BQJg7.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import { f as filterProtocol } from './xss-utils-DleHB5ul.js';
import './item-context-controller-BgvMNQCs.js';
import './event-utils-Xyk7tlQy.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicResultImage_1;
/**
 * The `atomic-result-image` component renders an image from a result field.
 */
let AtomicResultImage = AtomicResultImage_1 = class AtomicResultImage extends LightDomMixin(i) {
    constructor() {
        super();
        this.useFallback = false;
        this.resultController = createResultContextController(this);
        new ValidatePropsController(this, () => ({ field: this.field }), AtomicResultImage_1.propsSchema,
        // TODO V4: KIT-5197 - Remove false
        false);
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
    get url() {
        const value = ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        return Array.isArray(value) ? value[0] : value;
    }
    get altText() {
        if (this.imageAltField) {
            const value = ResultTemplatesHelpers.getResultProperty(this.result, this.imageAltField);
            if (Array.isArray(value) && typeof value[0] === 'string') {
                return value[0];
            }
            if (typeof value === 'string') {
                return value;
            }
        }
        return this.bindings.i18n.t('image-alt-fallback', {
            itemName: this.result.title,
        });
    }
    logWarning(message) {
        this.bindings.engine.logger.warn(message);
    }
    handleImageError() {
        const message = `The image url "${this.url}" is not valid or could not be loaded. You might want to add a "fallback" property.`;
        if (this.fallback) {
            this.useFallback = true;
        }
        else {
            this.logWarning(message);
        }
    }
    handleMissingFallback(message) {
        if (!this.fallback) {
            this.logWarning(message);
            this.remove();
            return null;
        }
        return this.fallback;
    }
    validateUrl(url) {
        if (!url) {
            const message = `"${this.field}" is missing. Please review your indexation. You might want to add a "fallback" property.`;
            return this.handleMissingFallback(message);
        }
        if (typeof url !== 'string') {
            const message = `Expected "${this.field}" to be a text field. Please review your indexation. You might want to add a "fallback" property.`;
            return this.handleMissingFallback(message);
        }
        return url;
    }
    renderImage() {
        let url = this.useFallback ? this.fallback : this.url;
        if (!this.useFallback) {
            url = this.validateUrl(url);
            if (!url) {
                return E;
            }
        }
        return x `      <img
        alt=${this.altText}
        src=${filterProtocol(url)}
        @error=${() => this.handleImageError()}
        loading="lazy"
      />
    `;
    }
    render() {
        return x `${n(this.result, () => this.renderImage())}`;
    }
};
AtomicResultImage.styles = i$1`atomic-result-image{display:grid;grid-template-rows:100%;height:100%;place-items:center;width:100%;img{height:100%;object-fit:contain;width:100%}}`;
AtomicResultImage.propsSchema = new Schema({
    field: new StringValue({ required: true, emptyAllowed: false }),
});
__decorate([
    n$1({ type: String, reflect: true })
], AtomicResultImage.prototype, "field", void 0);
__decorate([
    n$1({ type: String, reflect: true, attribute: 'image-alt-field' })
], AtomicResultImage.prototype, "imageAltField", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicResultImage.prototype, "fallback", void 0);
__decorate([
    r()
], AtomicResultImage.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicResultImage.prototype, "error", void 0);
__decorate([
    r()
], AtomicResultImage.prototype, "result", void 0);
__decorate([
    r()
], AtomicResultImage.prototype, "useFallback", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicResultImage.prototype, "render", null);
AtomicResultImage = AtomicResultImage_1 = __decorate([
    t('atomic-result-image'),
    bindings()
], AtomicResultImage);
export { AtomicResultImage };
//# sourceMappingURL=atomic-result-image-CZVXvX7m.js.map
