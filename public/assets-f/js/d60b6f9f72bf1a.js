import { i, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-layout-section` lets you identify various sections for the related `atomic-search-layout` or `atomic-commerce-layout` component.
 *
 * @slot default - The default slot where you can add child components to the section.
 */
let AtomicLayoutSection = class AtomicLayoutSection extends LightDomMixin(i) {
};
__decorate([
    n({ type: String, reflect: true })
], AtomicLayoutSection.prototype, "section", void 0);
__decorate([
    n({ type: String, reflect: true, attribute: 'min-width' })
], AtomicLayoutSection.prototype, "minWidth", void 0);
__decorate([
    n({ type: String, reflect: true, attribute: 'max-width' })
], AtomicLayoutSection.prototype, "maxWidth", void 0);
AtomicLayoutSection = __decorate([
    t('atomic-layout-section')
], AtomicLayoutSection);
export { AtomicLayoutSection };
//# sourceMappingURL=atomic-layout-section-CDdzLjr_.js.map
