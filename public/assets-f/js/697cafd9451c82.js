import { a as i, i as i$1, t } from './custom-element-ClSinbnR.js';
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
 *  This section is intended to render an informative summary of the result's content
 *
 * Behavior:
 * * Has a fixed height of one to three lines, depending on the layout and density.
 * * Ellipses overflowing text.
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * * Has a defined CSS `color` property for text.
 */
let AtomicResultSectionExcerpt = class AtomicResultSectionExcerpt extends ItemSectionMixin(i$1, i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */atomic-result-section-excerpt{&.with-sections{text-overflow:ellipsis}&.with-sections{color:var(--atomic-neutral-dark);display:-webkit-box;grid-area:excerpt;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;@media (width >= 1024px){&.density-comfortable{--font-size:var(--atomic-text-lg);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));-webkit-line-clamp:3;line-height:var(--line-height)}&.density-comfortable,&.density-compact{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}&.density-compact{-webkit-line-clamp:1}&.display-list{&.density-comfortable{margin-top:1.75rem;max-height:4.5rem}&.density-normal{margin-top:1.25rem;max-height:2.5rem}&.density-compact{margin-top:1rem;max-height:1.25rem}}&.display-grid{&.density-comfortable{margin-top:2.25rem}&.density-normal{margin-top:1.75rem}&.density-compact{margin-top:1.25rem}}}@media not all and (width >= 1024px){&.display-list{&.density-comfortable,&.density-normal{max-height:2.5rem}&.density-comfortable{margin-top:1.25rem}&.density-normal{margin-top:1rem}}&.display-grid{&.image-large{&.density-comfortable,&.density-normal{max-height:2.5rem}&.density-comfortable{margin-top:1.25rem}&.density-normal{margin-top:1rem}}&.image-icon,&.image-none,&.image-small{&.density-comfortable{margin-top:1.25rem}&.density-normal{margin-top:1rem}&.density-compact{display:-webkit-box;margin-top:.75rem;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1}}}}&.display-table{&.density-comfortable{margin-top:1.75rem;max-height:4.5rem}&.density-normal{margin-top:1.25rem;max-height:2.5rem}&.density-compact{margin-top:1rem;max-height:1.25rem}}}}`) {
};
AtomicResultSectionExcerpt = __decorate([
    t('atomic-result-section-excerpt')
], AtomicResultSectionExcerpt);
export { AtomicResultSectionExcerpt };
//# sourceMappingURL=atomic-result-section-excerpt-9p6Kkaa0.js.map
