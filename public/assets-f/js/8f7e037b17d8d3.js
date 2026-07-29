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
 * This section is intended to display the result's name, and its main use is to make the result list scannable.
 * This is usually the page title.
 *
 * Behavior:
 * * Has a fixed height of two lines on grid layouts.
 * * Exposes the `--line-height` CSS variable so child elements can adjust to the current line height.
 * * Has a defined CSS `color` property for text.
 */
let AtomicResultSectionTitle = class AtomicResultSectionTitle extends ItemSectionMixin(i$1, i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */atomic-result-section-title{&.with-sections{overflow:hidden;text-overflow:ellipsis}&.with-sections{color:var(--atomic-on-background);grid-area:title;--font-size:var(--atomic-text-xl);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height);&.density-comfortable{--font-size:var(--atomic-text-2xl);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height)}@media (width >= 1024px){&.display-grid{display:-webkit-box;overflow:hidden;word-break:break-word;-webkit-box-orient:vertical;-webkit-line-clamp:2}}@media not all and (width >= 1024px){&.display-list{--font-size:var(--atomic-text-xl);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height)}&.display-grid{&.image-large{--font-size:var(--atomic-text-xl);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio))}&.image-icon,&.image-large,&.image-none,&.image-small{font-size:var(--font-size);line-height:var(--line-height)}&.image-icon,&.image-none,&.image-small{--font-size:var(--atomic-text-lg);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));display:-webkit-box;max-height:3rem;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}}}}}`) {
};
AtomicResultSectionTitle = __decorate([
    t('atomic-result-section-title')
], AtomicResultSectionTitle);
export { AtomicResultSectionTitle };
//# sourceMappingURL=atomic-result-section-title-B9QYlxNb.js.map
