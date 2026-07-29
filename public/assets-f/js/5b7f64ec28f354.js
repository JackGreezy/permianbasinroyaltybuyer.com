import { Schema, NumberValue } from '/bueno/v1.1.7/bueno.esm.js';
import { buildFacetManager } from '/headless/v3.45.1/headless.esm.js';
import { x, i, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { g as getFacetsInChildren, a as sortFacetVisibility, b as getAutomaticFacetGenerator, c as collapseFacetsAfter } from './facet-common-BSRShPM_.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { C as ChildrenUpdateCompleteMixin } from './children-update-complete-mixin-BsCPHIEs.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicFacetManager_1;
/**
 * The `atomic-facet-manager` is a component that manages facets by performing three key functions:
 *
 * 1. **Sorting facets** - Reorders facets based on the search response to show the most relevant facets first.
 * 2. **Managing visibility** - Controls which facets should be visible or hidden based on available values and dependencies.
 * 3. **Managing collapse state** - Automatically expands or collapses facets based on the `collapse-facets-after` property.
 *
 * @slot default - Facet components are slotted within to leverage this functionality.
 */
let AtomicFacetManager = AtomicFacetManager_1 = class AtomicFacetManager extends ChildrenUpdateCompleteMixin(LightDomMixin(i)) {
    constructor() {
        super();
        /**
         * The number of expanded facets inside the manager.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         * Using the value `-1` disables the feature and keeps all facets expanded. Useful when you want to set the collapse state for each facet individually.
         */
        this.collapseFacetsAfter = 4;
        this.sortFacets = async () => {
            await this.getUpdateComplete();
            const facets = getFacetsInChildren(this);
            const sortedFacets = this.sortFacetsUsingManager(facets, this.facetManager);
            const { visibleFacets, invisibleFacets } = sortFacetVisibility(sortedFacets, this.bindings.store.getAllFacets());
            const generator = getAutomaticFacetGenerator(this);
            collapseFacetsAfter(visibleFacets, this.collapseFacetsAfter);
            generator?.updateCollapseFacetsDependingOnFacetsVisibility?.(this.collapseFacetsAfter, visibleFacets.length);
            this.append(...[
                ...visibleFacets,
                ...invisibleFacets,
                ...(generator ? [generator] : []),
            ]);
        };
        new ValidatePropsController(this, () => ({ collapseFacetsAfter: this.collapseFacetsAfter }), AtomicFacetManager_1.propsSchema);
    }
    initialize() {
        this.facetManager = buildFacetManager(this.bindings.engine);
        // An update has to be forced for the facets to be visually updated, without being interacted with.
        this.bindings.i18n.on('languageChanged', this.sortFacets);
    }
    sortFacetsUsingManager(facets, facetManager) {
        const payload = facets.map((f) => ({
            facetId: f.facetId,
            payload: f,
        }));
        return facetManager.sort(payload).map((f) => f.payload);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.bindings?.i18n.off('languageChanged', this.sortFacets);
    }
    render() {
        return x `<slot></slot>`;
    }
};
AtomicFacetManager.propsSchema = new Schema({
    collapseFacetsAfter: new NumberValue({ min: -1, required: true }),
});
__decorate([
    r()
], AtomicFacetManager.prototype, "bindings", void 0);
__decorate([
    bindStateToController('facetManager', { onUpdateCallbackMethod: 'sortFacets' }),
    r()
], AtomicFacetManager.prototype, "facetManagerState", void 0);
__decorate([
    r()
], AtomicFacetManager.prototype, "error", void 0);
__decorate([
    n({ type: Number, reflect: true, attribute: 'collapse-facets-after' })
], AtomicFacetManager.prototype, "collapseFacetsAfter", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicFacetManager.prototype, "render", null);
AtomicFacetManager = AtomicFacetManager_1 = __decorate([
    t('atomic-facet-manager'),
    bindings()
], AtomicFacetManager);
export { AtomicFacetManager };
//# sourceMappingURL=atomic-facet-manager-DLrQCB7e.js.map
