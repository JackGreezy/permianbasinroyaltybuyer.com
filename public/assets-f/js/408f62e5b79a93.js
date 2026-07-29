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
 * This section is meant to render badges that highlight special features of the result.
 *
 * Behavior:
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * ** You should ensure that elements inside of it have `height: var(--line-height)`.
 * * Is a wrapping flexbox with a gap.
 * * May appear over, next to, or beneath the visual section.
 */
let AtomicResultSectionBadges = class AtomicResultSectionBadges extends ItemSectionMixin(i$1, i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */atomic-result-section-badges{text-align:left;&.with-sections{overflow:hidden;text-overflow:ellipsis}&.with-sections{display:flex;flex-wrap:wrap;gap:.5rem;grid-area:badges;margin-bottom:1rem;max-height:calc(var(--row-height, 2rem)*2 + .5rem);--row-height:2rem;@media (width >= 1024px){&.display-list{&.density-comfortable{margin-bottom:1.5rem}}&.display-grid{--font-size:var(--atomic-text-sm);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height);&.image-icon{&.density-comfortable{margin-bottom:2rem}&.density-normal{margin-bottom:1.5rem}}}}@media not all and (width >= 1024px){&.display-list{--font-size:var(--atomic-text-sm);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height)}&.display-grid{&.image-icon,&.image-none,&.image-small{--font-size:var(--atomic-text-sm);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height)}}}&.display-table{&.density-comfortable{margin-bottom:1.5rem}}}}`) {
};
AtomicResultSectionBadges = __decorate([
    t('atomic-result-section-badges')
], AtomicResultSectionBadges);
export { AtomicResultSectionBadges };
//# sourceMappingURL=atomic-result-section-badges-DDN_heYa.js.map
