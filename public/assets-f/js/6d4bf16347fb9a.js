import { i, x, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { o } from './map-D-loUq-y.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *
 * @internal
 */
let AtomicFacetPlaceholder = class AtomicFacetPlaceholder extends i {
    constructor() {
        super(...arguments);
        /**
         * The number of placeholder value items to display.
         */
        this.valueCount = 8;
    }
    render() {
        return x `
      <div
        part="placeholder"
        class="bg-background border-neutral mb-4 animate-pulse rounded-lg border p-7"
        aria-hidden="true"
      >
        <div
          part="title-skeleton"
          class="bg-neutral h-8 rounded"
          style="width: 75%;"
        ></div>
        <div part="values-container" class="mt-7">
          ${o(Array.from({ length: this.valueCount }), () => x `
              <div
                part="value-skeleton"
                class="bg-neutral mt-4 flex h-5"
                style="width: 100%; opacity: 0.5;"
              ></div>
            `)}
        </div>
      </div>
    `;
    }
};
__decorate([
    n({ type: Number, attribute: 'value-count' })
], AtomicFacetPlaceholder.prototype, "valueCount", void 0);
AtomicFacetPlaceholder = __decorate([
    t('atomic-facet-placeholder'),
    withTailwindStyles
], AtomicFacetPlaceholder);
export { AtomicFacetPlaceholder };
//# sourceMappingURL=atomic-facet-placeholder-DFTEv-y4.js.map
