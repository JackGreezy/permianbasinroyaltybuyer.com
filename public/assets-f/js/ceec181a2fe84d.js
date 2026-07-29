import { Schema, NumberValue, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { i, x, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicText_1;
/**
 * The `atomic-text` component leverages the I18n translation module through the atomic-search-interface.
 */
let AtomicText = AtomicText_1 = class AtomicText extends i {
    constructor() {
        super();
        new ValidatePropsController(this, () => ({
            value: this.value,
            count: this.count,
        }), AtomicText_1.propsSchema);
    }
    get strings() {
        return {
            value: () => this.bindings.i18n.t(this.value, {
                count: this.count,
            }),
        };
    }
    initialize() { }
    render() {
        return x `${this.strings.value()}`;
    }
};
AtomicText.propsSchema = new Schema({
    value: new StringValue({ required: true, emptyAllowed: false }),
    count: new NumberValue({ required: false }),
});
__decorate([
    r()
], AtomicText.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicText.prototype, "error", void 0);
__decorate([
    n({ type: String, reflect: true })
], AtomicText.prototype, "value", void 0);
__decorate([
    n({ type: Number, reflect: true })
], AtomicText.prototype, "count", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicText.prototype, "render", null);
AtomicText = AtomicText_1 = __decorate([
    t('atomic-text'),
    bindings()
], AtomicText);
export { AtomicText };
//# sourceMappingURL=atomic-text-L-S67inR.js.map
