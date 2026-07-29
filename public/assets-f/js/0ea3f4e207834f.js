import { buildBreadcrumbManager, buildSort, buildQuerySummary, buildSearchStatus, buildFacetManager, buildTabManager } from '/headless/v3.45.1/headless.esm.js';
import { i, E, x, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { f as findSection } from './atomic-layout-section-utils-BMee00eY.js';
import { p as popoverClass } from './popover-type-CJpze2N9.js';
import { i as isRefineModalFacet } from './store-BUiRYglL.js';
import { r as renderRefineModalFiltersSection, a as renderRefineModalFiltersClearButton, b as renderRefineModalBody } from './filters-CBcgPtZ_.js';
import { r as renderRefineModal } from './modal-DlufZs53.js';
import { r as renderRefineModalSortSection } from './sort-BF4MeBo-.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as watch } from './watch-CV_JtHFl.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { s as shouldDisplayOnCurrentTab } from './tab-utils-CrE-aPug.js';
import { p as sortByDocumentPosition } from './utils-tjiSYtV8.js';
import { t as triageFacetsByParents, a as sortFacetVisibility, c as collapseFacetsAfter } from './facet-common-BSRShPM_.js';
import './atomic-automatic-facet-generator-DlM0m_6g.js';
import './event-utils-Xyk7tlQy.js';
import './when-BzW5QVN4.js';
import './button-DE0Kx0NV.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './ripple-utils-DMduLOet.js';
import './button-style-DV1FJlx9.js';
import './localized-string-CQCD-kWJ.js';
import './export-parts-BxOQYfpS.js';
import './atomic-modal-BGpWxOBn.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
import './replace-breakpoint-utils--qEQDWxF.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './purify.es-BkIzpzFh.js';
import './atomic-icon-D7DRsDUP.js';
import './unsafe-html-Deeupm6Y.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
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
 * The `atomic-refine-modal` component is automatically created as a child of the `atomic-search-interface` when the `atomic-refine-toggle` is initialized.
 *
 * When the modal is opened, the class `atomic-modal-opened` is added to the interface element and the body.
 *
 * @part title - The title of the modal.
 * @part close-button - The button in the header that closes the modal.
 * @part close-icon - The icon of the close button.
 * @part content - The wrapper around the content inside the body of the modal.
 * @part section-title - The title for each section.
 * @part section-sort-title - The title for the sort section.
 * @part section-filters-title - The title for the filters section.
 * @part select-wrapper - The wrapper around the select element, used to position the icon.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-icon-wrapper - The wrapper around the sort icon that's used to align it.
 * @part select-icon - The select dropdown's sort icon.
 * @part filter-section - The section containing facets and the "filters" title.
 * @part filter-clear-all - The button that resets all actively selected facet values.
 * @part footer-content - The wrapper around the content inside the footer of the modal, containing the button to view results.
 * @part footer-button - The button in the footer that closes the modal.
 * @part footer-button-text - The text inside the button in the footer that closes the modal.
 * @part footer-button-count - The count inside the button in the footer that closes the modal.
 * @part footer-wrapper - The wrapper with a shadow or background color around the footer.
 * @part footer - The footer of the modal.
 * @part header-ruler - The horizontal ruler underneath the header.
 * @part body-wrapper - The wrapper around the body.
 * @part body - The body of the modal, between the header and the footer.
 * @part header-wrapper - The wrapper around the header.
 * @part header - The header of the modal, containing the title.
 * @part container - The modal's outermost container.
 * @part backdrop - The transparent backdrop hiding the content behind the modal.
 *
 * @cssprop --atomic-refine-modal-facet-margin - The margin between facets in the refine modal. Default is `20px`.
 */
let AtomicRefineModal = class AtomicRefineModal extends i {
    constructor() {
        super(...arguments);
        /**
         * Whether the modal is open.
         */
        this.isOpen = false;
        /**
         * The number of expanded facets inside the refine modal.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         */
        this.collapseFacetsAfter = 0;
        this.onSelectSortOption = (e) => {
            const select = e.composedPath()[0];
            const option = this.options.find((option) => option.expression === select.value);
            option && this.sort.sortBy(option.criteria);
        };
    }
    initialize() {
        this.breadcrumbManager = buildBreadcrumbManager(this.bindings.engine);
        this.sort = buildSort(this.bindings.engine);
        this.querySummary = buildQuerySummary(this.bindings.engine);
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.facetManager = buildFacetManager(this.bindings.engine);
        this.tabManager = buildTabManager(this.bindings.engine);
        this.watchEnabled();
    }
    watchEnabled() {
        if (this.isOpen) {
            if (this.querySelector('div[slot="facets"]')) {
                return;
            }
            this.appendChild(this.createFacetSlot());
        }
    }
    /**
     * This method is necessary to ensure that the facets slot is rendered outside of the component's shadow DOM, preserving
     * correct CSS inheritance and slot behavior. If this logic were placed in the render
     * function, the slot would be rendered inside the shadow DOM, which would break
     * expected CSS styling and slot distribution.
     */
    createFacetSlot() {
        const divSlot = document.createElement('div');
        divSlot.setAttribute('slot', 'facets');
        this.addFacetColumnStyling(divSlot);
        const facets = this.bindings.store.getFacetElements();
        const boundInterfaces = this.getBoundInterfaces().sort(sortByDocumentPosition);
        const facetsSection = [];
        const horizontalFacetsSection = [];
        for (const boundInterface of boundInterfaces) {
            const facetSection = findSection(boundInterface, 'facets');
            if (facetSection) {
                facetsSection.push(facetSection);
            }
            const horizontalFacetSection = findSection(boundInterface, 'horizontal-facets');
            if (horizontalFacetSection) {
                horizontalFacetsSection.push(horizontalFacetSection);
            }
        }
        const triagedFacets = triageFacetsByParents(facets, ...horizontalFacetsSection, ...facetsSection);
        for (const triagedFacet of triagedFacets.values()) {
            triagedFacet.sort(sortByDocumentPosition);
        }
        const sortedFacets = [];
        for (let i = 0; i < boundInterfaces.length; i++) {
            sortedFacets.push(...(triagedFacets.get(facetsSection[i]) || []));
            sortedFacets.push(...(triagedFacets.get(horizontalFacetsSection[i]) || []));
        }
        sortedFacets.push(...(triagedFacets.get(null) || []));
        const { visibleFacets, invisibleFacets } = sortFacetVisibility(sortedFacets, this.bindings.store.getAllFacets());
        const visibleFacetsClone = this.cloneFacets(visibleFacets);
        const invisibleFacetsClone = this.cloneFacets(invisibleFacets);
        collapseFacetsAfter(visibleFacetsClone, this.collapseFacetsAfter);
        divSlot.append(...visibleFacetsClone);
        divSlot.append(...invisibleFacetsClone);
        const generator = this.makeAutomaticFacetGenerator();
        if (generator) {
            generator.updateCollapseFacetsDependingOnFacetsVisibility(this.collapseFacetsAfter, visibleFacets.length);
            divSlot.append(generator);
        }
        return divSlot;
    }
    getBoundInterfaces() {
        const mainInterface = this.closest('atomic-search-interface') ??
            this.closest('atomic-external')?.boundInterface ??
            null;
        if (!mainInterface) {
            throw new Error('Cannot find bound interface');
        }
        const boundExternalInterfaces = Array.from(document.querySelectorAll('atomic-external')).filter((atomicExternal) => atomicExternal.boundInterface === mainInterface);
        return [...boundExternalInterfaces, mainInterface];
    }
    cloneFacets(facets) {
        return facets.map((facet, i) => {
            facet.classList.remove(popoverClass);
            facet.setAttribute(isRefineModalFacet, '');
            const clone = facet.cloneNode(true);
            clone.isCollapsed =
                this.collapseFacetsAfter === -1
                    ? false
                    : i + 1 > this.collapseFacetsAfter;
            return clone;
        });
    }
    makeAutomaticFacetGenerator() {
        if (!this.bindings.engine.state.automaticFacetSet?.desiredCount) {
            return;
        }
        const generator = document.createElement('atomic-automatic-facet-generator');
        generator.setAttribute('desired-count', `${this.bindings.engine.state.automaticFacetSet?.desiredCount}`);
        this.addFacetColumnStyling(generator);
        return generator;
    }
    addFacetColumnStyling(el) {
        el.style.display = 'flex';
        el.style.flexDirection = 'column';
        el.style.gap = 'var(--atomic-refine-modal-facet-margin, 20px)';
    }
    get options() {
        return this.bindings.store.state.sortOptions;
    }
    renderSortOption({ expression, criteria, label, tabs, }) {
        if (!shouldDisplayOnCurrentTab([...tabs.included], [...tabs.excluded], this.tabManagerState?.activeTab)) {
            return E;
        }
        return x `
      <option value=${expression} ?selected=${this.sort.isSortedBy(criteria)}>
        ${this.bindings.i18n.t(label)}
      </option>
    `;
    }
    renderSort() {
        if (!this.options.length) {
            return E;
        }
        return renderRefineModalSortSection({
            props: {
                i18n: this.bindings.i18n,
                onSelect: this.onSelectSortOption,
            },
        })(x `${this.options.map((option) => this.renderSortOption(option))}`);
    }
    renderFilters() {
        const hasFacetElements = this.bindings.store.getFacetElements().length > 0;
        const hasAutomaticFacets = this.bindings.engine.state.automaticFacetSet?.set !== undefined;
        if (!hasFacetElements && !hasAutomaticFacets) {
            return E;
        }
        const { i18n } = this.bindings;
        return renderRefineModalFiltersSection({
            props: {
                i18n,
                withFacets: hasFacetElements,
                withAutomaticFacets: hasAutomaticFacets,
            },
        })(this.breadcrumbManagerState.hasBreadcrumbs
            ? renderRefineModalFiltersClearButton({
                props: {
                    i18n,
                    onClick: () => this.breadcrumbManager.deselectAll(),
                },
            })
            : E);
    }
    render() {
        return x `${renderRefineModal({
            props: {
                i18n: this.bindings.i18n,
                i18nFooterButtonTextKey: 'view-results',
                host: this,
                isOpen: this.isOpen,
                onClose: () => {
                    this.isOpen = false;
                },
                title: this.bindings.i18n.t('sort-and-filter'),
                numberOfItems: this.querySummaryState.total,
                openButton: this.openButton,
            },
        })(renderRefineModalBody(this.bindings.i18n)(x `
        ${this.renderSort()} ${this.renderFilters()}
      `))}`;
    }
};
AtomicRefineModal.styles = [
    i$1`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */select:focus-visible+div,select:hover+div{color:var(--atomic-primary-light)}`,
];
__decorate([
    r()
], AtomicRefineModal.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicRefineModal.prototype, "error", void 0);
__decorate([
    n({ attribute: 'open-button', type: Object })
], AtomicRefineModal.prototype, "openButton", void 0);
__decorate([
    n({
        type: Boolean,
        converter: booleanConverter,
        reflect: true,
        attribute: 'is-open',
    })
], AtomicRefineModal.prototype, "isOpen", void 0);
__decorate([
    n({ type: Number, reflect: true, attribute: 'collapse-facets-after' })
], AtomicRefineModal.prototype, "collapseFacetsAfter", void 0);
__decorate([
    bindStateToController('sort'),
    r()
], AtomicRefineModal.prototype, "sortState", void 0);
__decorate([
    bindStateToController('breadcrumbManager'),
    r()
], AtomicRefineModal.prototype, "breadcrumbManagerState", void 0);
__decorate([
    bindStateToController('querySummary'),
    r()
], AtomicRefineModal.prototype, "querySummaryState", void 0);
__decorate([
    bindStateToController('facetManager'),
    r()
], AtomicRefineModal.prototype, "facetManagerState", void 0);
__decorate([
    bindStateToController('tabManager'),
    r()
], AtomicRefineModal.prototype, "tabManagerState", void 0);
__decorate([
    watch('isOpen')
], AtomicRefineModal.prototype, "watchEnabled", null);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicRefineModal.prototype, "render", null);
AtomicRefineModal = __decorate([
    t('atomic-refine-modal'),
    bindings(),
    withTailwindStyles
], AtomicRefineModal);
export { AtomicRefineModal };
//# sourceMappingURL=atomic-refine-modal-BV6Wkd1U.js.map
