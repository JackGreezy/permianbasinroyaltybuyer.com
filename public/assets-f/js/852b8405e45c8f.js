import { a as i, i as i$1, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { L as LayoutStylesController } from './layout-styles-controller--afw7c_R.js';
import { w as watch } from './watch-CV_JtHFl.js';
import { C as ChildrenUpdateCompleteMixin } from './children-update-complete-mixin-BsCPHIEs.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
import { D as DEFAULT_MOBILE_BREAKPOINT } from './replace-breakpoint-utils--qEQDWxF.js';
import { b as buildSearchLayout } from './search-layout-gN1yJpjQ.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './dom-utils-0VKCjoID.js';
import './layout-BzcwF9P8.js';
import './atomic-layout-section-utils-BMee00eY.js';
const styles = i`.atomic-modal-opened{overflow-y:hidden}atomic-layout-section[section=search]{grid-area:atomic-section-search}atomic-layout-section[section=facets]{grid-area:atomic-section-facets}atomic-layout-section[section=main]{grid-area:atomic-section-main}atomic-layout-section[section=status]{grid-area:atomic-section-status}atomic-layout-section[section=pagination]{grid-area:atomic-section-pagination}atomic-search-layout{display:none;grid-template-areas:". atomic-section-search ." ". atomic-section-main .";grid-template-columns:var(--atomic-layout-spacing-x) minmax(0,1fr) var(
      --atomic-layout-spacing-x
    );height:100%;width:100%;atomic-layout-section[section=search]{justify-self:center;margin:var(--atomic-layout-spacing-y) 0;max-width:var(--atomic-layout-max-search-box-input-width,678px);width:100%;atomic-search-box{&::part(suggestions-double-list){max-width:var(
          --atomic-layout-max-search-box-double-suggestions-width,800px
        );width:125%}&::part(suggestions-left){flex-basis:var(--atomic-layout-search-box-left-suggestions-width,30%)}&::part(suggestions-right){flex-basis:calc(100% - var(--atomic-layout-search-box-left-suggestions-width, 30%))}}}atomic-layout-section[section=facets]{display:none;& *{margin-bottom:var(--atomic-layout-spacing-y)}}atomic-layout-section[section=main]{margin-bottom:var(--atomic-layout-spacing-y)}atomic-layout-section[section=horizontal-facets]{display:flex;flex-wrap:wrap;margin-bottom:var(--atomic-layout-spacing-y);row-gap:.5rem;&>*{max-width:100%}&>atomic-popover,&>atomic-segmented-facet{margin-right:.5rem}&>atomic-popover{display:none}}atomic-layout-section[section=status]{display:grid;grid-template-areas:"atomic-breadbox       atomic-breadbox" "atomic-query-summary  atomic-sort" "atomic-did-you-mean   atomic-did-you-mean" "atomic-notifications  atomic-notifications";justify-content:space-between;&>*{margin-bottom:var(--atomic-layout-spacing-y)}atomic-breadbox{grid-area:atomic-breadbox}atomic-query-summary{align-self:center;grid-area:atomic-query-summary;overflow:hidden}atomic-sort-dropdown{justify-self:end}atomic-refine-toggle,atomic-sort-dropdown{grid-area:atomic-sort}atomic-did-you-mean{grid-area:atomic-did-you-mean}atomic-notifications{grid-area:atomic-notifications}}atomic-layout-section[section=results]{atomic-smart-snippet,atomic-smart-snippet-suggestions{margin-bottom:1.5rem}}atomic-layout-section[section=pagination]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;atomic-load-more-results{width:100%}&:has(:only-child){justify-content:center}&>*{margin-top:var(--atomic-layout-spacing-y)}@media only screen and (min-width:50rem){flex-direction:row}}}`;
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-search-layout` helps organize elements in the page.
 *
 * @cssprop --atomic-layout-max-search-box-input-width: The maximum width that the search box input will take.
 * @cssprop --atomic-layout-max-search-box-double-suggestions-width: The maximum width that the search box suggestions will take when displaying a double list.
 * @cssprop --atomic-layout-search-box-left-suggestions-width: The width of the left list when displaying a double list.
 *
 * @event atomic-layout-breakpoint-change - Emitted when the mobile breakpoint changes. The event detail contains `{ breakpoint: string }`.
 */
let AtomicSearchLayout = class AtomicSearchLayout extends LightDomMixin(ChildrenUpdateCompleteMixin(i$1)) {
    constructor() {
        super(...arguments);
        /**
         * The viewport width at which the layout goes from desktop to mobile.
         * For example: 800px, 65rem.
         */
        this.mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT;
        this.layoutStylesController = new LayoutStylesController(this, buildSearchLayout, 'atomic-search-layout-');
    }
    connectedCallback() {
        super.connectedCallback();
        this.emitBreakpointChangeEvent();
    }
    emitBreakpointChangeEvent() {
        this.dispatchEvent(buildCustomEvent('atomic-layout-breakpoint-change', {
            breakpoint: this.mobileBreakpoint,
        }));
    }
    onMobileBreakpointChange() {
        this.layoutStylesController.updateStyles();
        this.emitBreakpointChangeEvent();
    }
};
AtomicSearchLayout.styles = [styles];
__decorate([
    r()
], AtomicSearchLayout.prototype, "error", void 0);
__decorate([
    n({ type: String, reflect: true, attribute: 'mobile-breakpoint' })
], AtomicSearchLayout.prototype, "mobileBreakpoint", void 0);
__decorate([
    watch('mobileBreakpoint')
], AtomicSearchLayout.prototype, "onMobileBreakpointChange", null);
AtomicSearchLayout = __decorate([
    t('atomic-search-layout')
], AtomicSearchLayout);
export { AtomicSearchLayout };
//# sourceMappingURL=atomic-search-layout-CXTV8LRA.js.map
