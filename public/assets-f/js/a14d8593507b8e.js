import { buildSearchStatus } from '/headless/v3.45.1/headless.esm.js';
import { i, x, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { r as renderRefineToggleButton } from './button-B_-bWJOf.js';
import { r as refineToggleGuard } from './guard-D0aGvvZ_.js';
import './atomic-refine-modal-BV6Wkd1U.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './button-DE0Kx0NV.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './when-BzW5QVN4.js';
import './ripple-utils-DMduLOet.js';
import './event-utils-Xyk7tlQy.js';
import './button-style-DV1FJlx9.js';
import './atomic-layout-section-utils-BMee00eY.js';
import './popover-type-CJpze2N9.js';
import './store-BUiRYglL.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './filters-CBcgPtZ_.js';
import './modal-DlufZs53.js';
import './localized-string-CQCD-kWJ.js';
import './export-parts-BxOQYfpS.js';
import './atomic-modal-BGpWxOBn.js';
import './boolean-converter-DIV6NtGl.js';
import './watch-CV_JtHFl.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
import './replace-breakpoint-utils--qEQDWxF.js';
import './atomic-icon-D7DRsDUP.js';
import './unsafe-html-Deeupm6Y.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './sort-BF4MeBo-.js';
import './tab-utils-CrE-aPug.js';
import './facet-common-BSRShPM_.js';
import './atomic-automatic-facet-generator-DlM0m_6g.js';
import './keyed-B2UhaAyp.js';
import './facet-placeholder-DfP-Mkam.js';
import './validate-props-controller-R9C-T-Ya.js';
import './atomic-automatic-facet-DlB18n_j.js';
import './facet-common.tw.css-7g2iX12Z.js';
import './facet-header-Bzdj0Qi_.js';
import './heading-Sj_Y7ObA.js';
import './facet-value-checkbox-BUWKh-FZ.js';
import './checkbox-BtsHT-20.js';
import './facet-value-checkbox.tw.css-C86BweJG.js';
import './facet-value-label-highlight-P4jF_zNt.js';
import './_commonjsHelpers-C44kNtub.js';
import './string-utils-wMMP9nsD.js';
import './facet-values-group-x9cZUKcj.js';
import './fieldset-group-BMVKrfC8.js';
import './accessibility-utils-BHnCpu87.js';
import './field-utils-8CvHFjSG.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-refine-toggle` component displays a button that opens a modal containing the facets and the sort components.
 *
 * When this component is added to the `atomic-search-interface`, an `atomic-refine-modal` component is automatically created.
 *
 * @part button - The refine toggle button.
 * @part placeholder - The placeholder shown while the first request is being executed.
 */
let AtomicRefineToggle = class AtomicRefineToggle extends i {
    constructor() {
        super(...arguments);
        /**
         * The number of expanded facets inside the refine modal.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         */
        this.collapseFacetsAfter = 0;
    }
    initialize() {
        this.searchStatus = buildSearchStatus(this.bindings.engine);
    }
    loadModal() {
        if (this.modalRef) {
            return;
        }
        this.modalRef = document.createElement('atomic-refine-modal');
        this.insertAdjacentElement('beforebegin', this.modalRef);
        this.modalRef.openButton = this.buttonRef;
        this.modalRef.collapseFacetsAfter = this.collapseFacetsAfter;
    }
    enableModal() {
        if (this.modalRef) {
            this.modalRef.isOpen = true;
        }
    }
    render() {
        return x `${refineToggleGuard({
            firstRequestExecuted: this.searchStatusState.firstSearchExecuted,
            hasError: this.searchStatusState.hasError,
            hasItems: this.searchStatusState.hasResults,
        }, () => x `${renderRefineToggleButton({
            props: {
                i18n: this.bindings.i18n,
                onClick: () => this.enableModal(),
                refCallback: (button) => {
                    if (!button) {
                        return;
                    }
                    this.buttonRef = button;
                    this.loadModal();
                },
            },
        })}`)}`;
    }
};
__decorate([
    r()
], AtomicRefineToggle.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicRefineToggle.prototype, "error", void 0);
__decorate([
    bindStateToController('searchStatus'),
    r()
], AtomicRefineToggle.prototype, "searchStatusState", void 0);
__decorate([
    n({ type: Number, reflect: true, attribute: 'collapse-facets-after' })
], AtomicRefineToggle.prototype, "collapseFacetsAfter", void 0);
__decorate([
    errorGuard(),
    bindingGuard()
], AtomicRefineToggle.prototype, "render", null);
AtomicRefineToggle = __decorate([
    t('atomic-refine-toggle'),
    bindings(),
    withTailwindStyles
], AtomicRefineToggle);
export { AtomicRefineToggle };
//# sourceMappingURL=atomic-refine-toggle-BCP_W8Yd.js.map
