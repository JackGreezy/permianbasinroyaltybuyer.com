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
 * This section is intended to display components that allow the user to perform an action on a result without having to view its details.
 * In commerce interface, the user can usually add the product to their cart or wish list.
 *
 * Behavior:
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * ** You should ensure that elements inside of it have `height: var(--line-height)`.
 * * Is a wrapping flexbox with a gap.
 * * May appear over, next to, or beneath the visual section.
 */
let AtomicResultSectionActions = class AtomicResultSectionActions extends ItemSectionMixin(i$1, i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */atomic-result-section-actions{text-align:left;&.with-sections{overflow:hidden;text-overflow:ellipsis}&.with-sections{display:flex;flex-wrap:wrap;gap:.5rem;grid-area:actions;max-height:calc(var(--row-height, 2rem)*2 + .5rem);--row-height:2rem;atomic-result-quickview{display:inline-block}@media (width >= 1024px){&.display-list{&.density-comfortable{margin-bottom:1.5rem}&.density-compact,&.density-normal{margin-bottom:1rem}}&.display-grid{&.density-comfortable{margin-top:2.25rem;--row-height:2.5rem}&.density-normal{margin-top:1.75rem}&.density-compact,&.density-normal{--font-size:var(--atomic-text-sm);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height)}&.density-compact{margin-top:1.25rem}}}@media not all and (width >= 1024px){&.display-list{--row-height:2.5rem;&.density-comfortable{margin-top:1rem}&.density-normal{margin-top:.75rem}&.density-compact{margin-top:.5em}}&.display-grid{&.image-large{--row-height:2.5rem;&.density-comfortable{margin-top:1rem}&.density-normal{margin-top:.75rem}&.density-compact{margin-top:.5em}}&.image-icon,&.image-none,&.image-small{&.density-comfortable{margin-top:1.25rem}&.density-normal{margin-top:1rem}&.density-compact{margin-top:.75rem}}}}&.display-table{&.density-comfortable{margin-bottom:1.5rem}&.density-compact,&.density-normal{margin-bottom:1rem}}}}`) {
};
AtomicResultSectionActions = __decorate([
    t('atomic-result-section-actions')
], AtomicResultSectionActions);
export { AtomicResultSectionActions };
//# sourceMappingURL=atomic-result-section-actions-B31MXOtu.js.map
