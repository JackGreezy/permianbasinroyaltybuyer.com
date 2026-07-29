import { Schema, NumberValue } from '/bueno/v1.1.7/bueno.esm.js';
import { buildSearchStatus, buildPager } from '/headless/v3.45.1/headless.esm.js';
import { x, i as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { i } from './keyed-B2UhaAyp.js';
import { n } from './when-BzW5QVN4.js';
import { a as createAppLoadedListener } from './store-BUiRYglL.js';
import { g as getCurrentPagesRange, r as renderPagerNavigation, a as renderPagerPreviousButton, b as renderPageButtons, c as renderPagerNextButton, d as renderPagerPageButton } from './pager-utils-DVUs0h8h.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { I as InitializeBindingsMixin } from './bindings-mixin-BbXNSbAr.js';
import { A as AriaLiveRegionController, F as FocusTargetController } from './accessibility-utils-BHnCpu87.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
import { r as randomID } from './utils-tjiSYtV8.js';
import './directive-C5w180XZ.js';
import './directive-helpers-Dh62B6an.js';
import './atomic-icon-D7DRsDUP.js';
import './purify.es-BkIzpzFh.js';
import './unsafe-html-Deeupm6Y.js';
import './watch-CV_JtHFl.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './button-DE0Kx0NV.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './ripple-utils-DMduLOet.js';
import './button-style-DV1FJlx9.js';
import './radio-button-B_orPDne.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicPager_1;
const ArrowLeftIcon = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.5 4.8-4.3 4.5c-.3.4-.3.9 0 1.3l4.3 4.6c.3.4.9.4 1.2 0s.3-.9 0-1.3l-3.7-4 3.7-3.9c.3-.4.3-.9 0-1.3-.3-.3-.9-.3-1.2.1z\"/></svg>";
const ArrowRightIcon = "<svg viewBox=\"0 0 20 20\"><path d=\"m8.5 15.2 4.3-4.6c.3-.4.3-.9 0-1.3l-4.4-4.5c-.3-.4-.9-.4-1.2 0s-.3.9 0 1.3l3.7 4-3.7 3.9c-.3.4-.3.9 0 1.3.4.3 1 .3 1.3-.1z\"/></svg>";
/**
 * The `atomic-pager` provides buttons that allow the end user to navigate through the different result pages.
 *
 * @part buttons - The list of the next/previous buttons and page-buttons.
 * @part page-buttons - The list of page buttons.
 * @part page-button - The individual page buttons.
 * @part active-page-button - The active page button.
 * @part previous-button - The previous page button.
 * @part next-button - The next page button.
 * @part previous-button-icon - The icon displayed on the "previous page" button.
 * @part next-button-icon - The icon displayed on the "next page" button.
 *
 * @event atomic/scrollToTop - Emitted when the user clicks any of the buttons rendered by the component.
 */
let AtomicPager = AtomicPager_1 = class AtomicPager extends InitializeBindingsMixin(i$1) {
    constructor() {
        super();
        this.isAppLoaded = false;
        /**
         * The maximum number of page buttons to display in the pager.
         */
        this.numberOfPages = 5;
        /**
         * The SVG icon to render on the "previous page" button.
         *
         * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
         * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
         * - Use a stringified SVG to display it directly.
         */
        this.previousButtonIcon = ArrowLeftIcon;
        /**
         * The SVG icon to render on the "next page" button.
         *
         * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
         * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
         * - Use a stringified SVG to display it directly.
         */
        this.nextButtonIcon = ArrowRightIcon;
        this.ariaMessage = new AriaLiveRegionController(this, 'atomic-pager');
        this.radioGroupName = randomID('atomic-pager-');
        this.handleFocus = async (elements, currentFocus, newFocus) => {
            const currentIndex = elements.indexOf(currentFocus);
            const newIndex = elements.indexOf(newFocus);
            if (currentIndex === elements.length - 1 && newIndex === 0) {
                await this.nextButton.focus();
            }
            else if (currentIndex === 0 && newIndex === elements.length - 1) {
                await this.previousButton.focus();
            }
            else {
                newFocus.focus();
            }
        };
        new ValidatePropsController(this, () => ({
            numberOfPages: this.numberOfPages,
        }), AtomicPager_1.propsSchema);
    }
    initialize() {
        this.initFocusTargets();
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.pager = buildPager(this.bindings.engine, {
            options: { numberOfPages: this.numberOfPages },
        });
        createAppLoadedListener(this.bindings.store, (isAppLoaded) => {
            this.isAppLoaded = isAppLoaded;
        });
    }
    render() {
        const currentGroupName = `${this.radioGroupName}-${this.pagerState.currentPages.join('-')}`;
        const pagesRange = getCurrentPagesRange(this.pagerState.currentPage - 1, this.numberOfPages, this.pagerState.maxPage - 1);
        return x `${n(this.pagerState.maxPage > 1 && this.isAppLoaded, () => x `
      ${renderPagerNavigation({
            props: {
                i18n: this.bindings.i18n,
            },
        })(x `
          ${renderPagerPreviousButton({
            props: {
                icon: this.previousButtonIcon,
                disabled: !this.pagerState.hasPreviousPage,
                i18n: this.bindings.i18n,
                onClick: async () => {
                    this.pager.previousPage();
                    await this.focusOnFirstResultAndScrollToTop();
                },
                ref: (el) => this.previousButton.setTarget(el),
            },
        })}
          ${renderPageButtons({
            props: {
                i18n: this.bindings.i18n,
            },
        })(x `
            ${pagesRange.map((pageNumber, index) => i(`page-${pageNumber}-${index}`, renderPagerPageButton({
            props: {
                isSelected: pageNumber === this.pager.state.currentPage - 1,
                ariaLabel: this.bindings.i18n.t('page-number', {
                    pageNumber: pageNumber + 1,
                }),
                onChecked: async () => {
                    this.pager.selectPage(pageNumber + 1);
                    await this.focusOnFirstResultAndScrollToTop();
                },
                page: pageNumber,
                groupName: currentGroupName,
                text: (pageNumber + 1).toLocaleString(this.bindings.i18n.language),
                onFocusCallback: this.handleFocus,
            },
        })))}`)}
          ${renderPagerNextButton({
            props: {
                icon: this.nextButtonIcon,
                disabled: !this.pagerState.hasNextPage,
                i18n: this.bindings.i18n,
                onClick: async () => {
                    this.pager.nextPage();
                    await this.focusOnFirstResultAndScrollToTop();
                },
                ref: (el) => this.nextButton.setTarget(el),
            },
        })}
        `)}`)}`;
    }
    initFocusTargets() {
        if (!this.previousButton) {
            this.previousButton = new FocusTargetController(this, this.bindings);
        }
        if (!this.nextButton) {
            this.nextButton = new FocusTargetController(this, this.bindings);
        }
    }
    async focusOnFirstResultAndScrollToTop() {
        await this.bindings.store.state.resultList?.focusOnFirstResultAfterNextSearch();
        this.dispatchEvent(buildCustomEvent('atomic/scrollToTop'));
        this.announcePageLoaded();
    }
    announcePageLoaded() {
        this.ariaMessage.message = this.bindings.i18n.t('pager-page-loaded', {
            pageNumber: this.pagerState.currentPage,
        });
    }
};
AtomicPager.propsSchema = new Schema({
    numberOfPages: new NumberValue({ min: 0 }),
});
__decorate([
    r()
], AtomicPager.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicPager.prototype, "error", void 0);
__decorate([
    r()
], AtomicPager.prototype, "isAppLoaded", void 0);
__decorate([
    bindStateToController('pager'),
    r()
], AtomicPager.prototype, "pagerState", void 0);
__decorate([
    bindStateToController('searchStatus'),
    r()
], AtomicPager.prototype, "searchStatusState", void 0);
__decorate([
    n$1({
        reflect: true,
        useDefault: true,
        attribute: 'number-of-pages',
        type: Number,
    })
], AtomicPager.prototype, "numberOfPages", void 0);
__decorate([
    n$1({ reflect: true, attribute: 'previous-button-icon', type: String })
], AtomicPager.prototype, "previousButtonIcon", void 0);
__decorate([
    n$1({ reflect: true, attribute: 'next-button-icon', type: String })
], AtomicPager.prototype, "nextButtonIcon", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicPager.prototype, "render", null);
AtomicPager = AtomicPager_1 = __decorate([
    t('atomic-pager'),
    bindings(),
    withTailwindStyles
], AtomicPager);
export { AtomicPager };
//# sourceMappingURL=atomic-pager-DtKGJ7d-.js.map
