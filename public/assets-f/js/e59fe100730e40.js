import { a as i, i as i$1, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { I as ItemSectionMixin } from './item-section-mixin-wEKfrHvV.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './light-dom-DMtqoULx.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This section is intended to provide visual information about the result.
 * In commerce, an image is a great shorthand for a product category.
 * An icon can quickly show the result type, or an avatar can help identify to whom it is related.
 *
 * Behavior:
 * * Has a fixed size that depends on the specified image size, the layout, the density, and the screen size.
 * ** You should ensure that elements inside of it take the available space.
 * * Always has a 1:1 aspect ratio.
 */
let AtomicResultSectionVisual = class AtomicResultSectionVisual extends ItemSectionMixin(i$1, i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */atomic-result-section-visual{&.with-sections{overflow:hidden;text-overflow:ellipsis}&.with-sections{grid-area:visual;&.image-icon{border-radius:var(--atomic-border-radius);height:2rem;width:2rem}&.image-none{display:none}@media (width >= 1024px){&.display-list{margin-right:1rem;&.density-comfortable{margin-right:1.5rem}&.image-large{&.density-compact{height:10rem;width:10rem}&.density-comfortable,&.density-normal{height:20.375rem;width:20.375rem}}&.image-small{height:10rem;width:10rem}}&.display-grid{margin-bottom:.5rem;&.image-large,&.image-small{width:100%;&.density-comfortable{margin:0 auto 2rem}&.density-normal{margin:0 auto 1.5rem}&.density-compact{margin:0 auto 1rem}}&.image-large{aspect-ratio:1/1;height:auto;@supports not (aspect-ratio:1/1){height:19.75rem}}&.image-small{aspect-ratio:1/1;height:auto;@supports not (aspect-ratio:1/1){height:14rem}}}}@media not all and (width >= 1024px){&.display-list{margin-right:1rem;&.image-large{aspect-ratio:1/1;height:auto;@supports not (aspect-ratio:1/1){height:7.25rem}margin-bottom:1rem;margin-right:0;width:100%}&.image-small{height:24vw;margin-bottom:1rem;width:24vw}&.image-icon{margin-bottom:0}}&.display-grid{&.image-large{margin-right:1rem;&.image-large{aspect-ratio:1/1;height:auto;@supports not (aspect-ratio:1/1){height:7.25rem}margin-bottom:1rem;margin-right:0;width:100%}&.image-small{height:24vw;margin-bottom:1rem;width:24vw}&.image-icon{margin-bottom:0}}&.image-icon,&.image-none,&.image-small{&.image-large,&.image-small{width:100%;&.density-comfortable{margin-bottom:1rem}&.density-normal{margin-bottom:.75rem}&.density-compact{margin-bottom:.5rem}}&.image-small{aspect-ratio:1/1;height:auto;@supports not (aspect-ratio:1/1){height:9rem}height:10.25rem;width:10.25rem}}}}&.display-table{margin-right:1rem;&.density-comfortable{margin-right:1.5rem}&.image-large{&.density-compact{height:10rem;width:10rem}&.density-comfortable,&.density-normal{height:20.375rem;width:20.375rem}}&.image-small{height:10rem;width:10rem}}}}`) {
};
__decorate([
    n({ reflect: true, attribute: 'image-size', type: Object })
], AtomicResultSectionVisual.prototype, "imageSize", void 0);
AtomicResultSectionVisual = __decorate([
    t('atomic-result-section-visual')
], AtomicResultSectionVisual);
export { AtomicResultSectionVisual };
//# sourceMappingURL=atomic-result-section-visual-BuTLhBt0.js.map
