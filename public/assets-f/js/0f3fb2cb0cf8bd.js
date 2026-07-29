import { Schema, ArrayValue, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { x, i, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { a as arrayConverter } from './array-converter-BxDz2tBl.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicSortExpression_1;
/**
 * The `atomic-sort-expression` component defines a sort expression. This component must be inside an `atomic-sort-dropdown` component.
 */
let AtomicSortExpression = AtomicSortExpression_1 = class AtomicSortExpression extends LightDomMixin(i) {
    constructor() {
        super();
        /**
         * The tabs on which the sort expression can be displayed. This property should not be used at the same time as `tabs-excluded`.
         *
         * Set this property as a stringified JSON array, for example:
         * ```html
         *  <atomic-sort-expression tabs-included='["tabIDA", "tabIDB"]'></atomic-sort-expression>
         * ```
         * If you don't set this property, the sort expression can be displayed on any tab. Otherwise, the sort expression can only be displayed on the specified tabs.
         */
        this.tabsIncluded = [];
        /**
         * The tabs on which the sort expression must not be displayed. This property should not be used at the same time as `tabs-included`.
         *
         * Set this property as a stringified JSON array, for example:
         * ```html
         *  <atomic-sort-expression tabs-excluded='["tabIDA", "tabIDB"]'></atomic-sort-expression>
         * ```
         * If you don't set this property, the sort expression can be displayed on any tab. Otherwise, the sort expression won't be displayed on any of the specified tabs.
         */
        this.tabsExcluded = [];
        new ValidatePropsController(this, () => ({
            label: this.label,
            expression: this.expression,
            tabsExcluded: this.tabsExcluded,
        }), AtomicSortExpression_1.propsSchema,
        // TODO V4: KIT-5197 - Remove false
        false);
    }
    render() {
        if (this.tabsIncluded.length > 0 && this.tabsExcluded.length > 0) {
            console.warn('Values for both "tabs-included" and "tabs-excluded" have been provided. This could lead to unexpected behaviors.');
        }
        const dropdownComponent = 'atomic-sort-dropdown';
        if (!this.closest(dropdownComponent)) {
            const error = new Error(`The "${this.nodeName.toLowerCase()}" component has to be used inside an ${dropdownComponent} element.`);
            return x `<atomic-component-error
        .element=${this}
        .error=${error}
      ></atomic-component-error>`;
        }
        return x `<slot></slot>`;
    }
};
AtomicSortExpression.propsSchema = new Schema({
    label: new StringValue({ required: true, emptyAllowed: false }),
    expression: new StringValue({ required: true, emptyAllowed: false }),
    tabsExcluded: new ArrayValue({
        each: new StringValue({}),
        required: false,
    }),
});
__decorate([
    n({ type: String, reflect: true })
], AtomicSortExpression.prototype, "label", void 0);
__decorate([
    n({ type: String, reflect: true })
], AtomicSortExpression.prototype, "expression", void 0);
__decorate([
    n({
        type: Array,
        reflect: true,
        converter: arrayConverter,
        attribute: 'tabs-included',
    })
], AtomicSortExpression.prototype, "tabsIncluded", void 0);
__decorate([
    n({
        type: Array,
        reflect: true,
        converter: arrayConverter,
        attribute: 'tabs-excluded',
    })
], AtomicSortExpression.prototype, "tabsExcluded", void 0);
__decorate([
    r()
], AtomicSortExpression.prototype, "error", void 0);
AtomicSortExpression = AtomicSortExpression_1 = __decorate([
    t('atomic-sort-expression')
], AtomicSortExpression);
export { AtomicSortExpression };
//# sourceMappingURL=atomic-sort-expression-BUeSC5i7.js.map
