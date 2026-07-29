import { i, x, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-component-error` component is used by other components to render and log errors.
 */
let AtomicComponentError = class AtomicComponentError extends i {
    firstUpdated() {
        console.error(this.error, this.element);
    }
    render() {
        return x `
      <div class="text-error">
        <p>
          <b>${this.element.nodeName.toLowerCase()} component error</b>
        </p>
        <p>Look at the developer console for more information.</p>
      </div>
    `;
    }
};
__decorate([
    n({ type: Object })
], AtomicComponentError.prototype, "element", void 0);
__decorate([
    n({ type: Object })
], AtomicComponentError.prototype, "error", void 0);
AtomicComponentError = __decorate([
    t('atomic-component-error'),
    withTailwindStyles
], AtomicComponentError);
export { AtomicComponentError };
//# sourceMappingURL=atomic-component-error-CzI0_SHn.js.map
