import { Schema, ArrayValue, StringValue, NumberValue } from '/bueno/v1.1.7/bueno.esm.js';
import { buildFacet, buildSearchStatus, buildTabManager, buildFacetConditionsManager } from '/headless/v3.45.1/headless.esm.js';
import { x, E, i, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { A as AriaLiveRegionController, F as FocusTargetController } from './accessibility-utils-BHnCpu87.js';
import { m as mapProperty } from './props-utils-CtIuQum3.js';
import { a as getFieldCaptions } from './field-utils-8CvHFjSG.js';
import { p as parseDependsOn } from './depends-on-Bf-6_cVZ.js';
import { r as renderFacetHeader, a as renderFacetContainer } from './facet-header-Bzdj0Qi_.js';
import { r as renderFacetShowMoreLess, a as announceFacetSearchResultsWithAriaLive } from './facet-show-more-less-DgeBEvJZ.js';
import { r as renderFacetSearchInput, a as renderFacetSearchMatches, s as styles$1 } from './facet-search.tw.css-BXLTJDf8.js';
import { f as facetSearchInputGuard } from './facet-search-input-guard-qro0kaoo.js';
import { s as shouldUpdateFacetSearchComponent, a as shouldDisplaySearchResults } from './facet-value-label-highlight-P4jF_zNt.js';
import { r as renderFacetValue } from './facet-value-CQByag-m.js';
import { r as renderFacetValuesGroup } from './facet-values-group-x9cZUKcj.js';
import { i as initializePopover } from './popover-type-CJpze2N9.js';
import './atomic-facet-placeholder-DFTEv-y4.js';
import { a as arrayConverter } from './array-converter-BxDz2tBl.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { I as InitializeBindingsMixin } from './bindings-mixin-BbXNSbAr.js';
import { s as styles } from './facet-common.tw.css-7g2iX12Z.js';
import { s as styles$4 } from './facet-value-box.tw.css-CkjHPV1k.js';
import { s as styles$2 } from './facet-value-checkbox.tw.css-C86BweJG.js';
import { s as styles$3 } from './facet-value-exclude.tw.css-DpgqbLPU.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import './atomic-component-error-CzI0_SHn.js';
import './event-utils-Xyk7tlQy.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './index-DRai3PWs.js';
import './atomic-icon-D7DRsDUP.js';
import './directive-C5w180XZ.js';
import './unsafe-html-Deeupm6Y.js';
import './watch-CV_JtHFl.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './button-DE0Kx0NV.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './ripple-utils-DMduLOet.js';
import './button-style-DV1FJlx9.js';
import './heading-Sj_Y7ObA.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './_commonjsHelpers-C44kNtub.js';
import './string-utils-wMMP9nsD.js';
import './facet-value-checkbox-BUWKh-FZ.js';
import './keyed-B2UhaAyp.js';
import './checkbox-BtsHT-20.js';
import './facet-value-link-Cy-zhnFE.js';
import './fieldset-group-BMVKrfC8.js';
import './map-D-loUq-y.js';
import './bindings-context-DAKrxtTy.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicFacet_1;
/**
 * A facet is a list of values for a certain field occurring in the results, ordered using a configurable criteria (for example, number of occurrences).
 * An `atomic-facet` displays a facet of the results for the current query.
 *
 * @part facet - The wrapper for the entire facet.
 * @part placeholder - The placeholder shown before the first search is executed.
 *
 * @part label-button - The button that displays the label and allows to expand/collapse the facet.
 * @part label-button-icon - The label button icon.
 * @part clear-button - The button that resets the actively selected facet values.
 * @part clear-button-icon - The clear button icon.
 *
 * @part search-wrapper - The search box wrapper.
 * @part search-input - The search box input.
 * @part search-icon - The search box submit button.
 * @part search-clear-button - The button to clear the search box of input.
 * @part more-matches - The label indicating there are more matches for the current facet search query.
 * @part no-matches - The label indicating there are no matches for the current facet search query.
 * @part matches-query - The highlighted query inside the matches labels.
 * @part search-highlight - The highlighted query inside the facet values.
 *
 * @part values - The facet values container.
 * @part value-label - The facet value label, common for all displays.
 * @part value-count - The facet value count, common for all displays.
 *
 * @part value-checkbox - The facet value checkbox, available when display is 'checkbox'.
 * @part value-checkbox-checked - The checked facet value checkbox, available when display is 'checkbox'.
 * @part value-checkbox-label - The facet value checkbox clickable label, available when display is 'checkbox'.
 * @part value-checkbox-icon - The facet value checkbox icon, available when display is 'checkbox'.
 * @part value-link - The facet value when display is 'link'.
 * @part value-link-selected - The selected facet value when display is 'link'.
 * @part value-box - The facet value when display is 'box'.
 * @part value-box-selected - The selected facet value when display is 'box'.
 * @part value-exclude-button - The button to exclude a facet value, available when display is 'checkbox'.
 *
 * @part show-more - The show more results button.
 * @part show-less - The show less results button.
 * @part show-more-less-icon - The icons of the show more and show less buttons.
 */
let AtomicFacet = AtomicFacet_1 = class AtomicFacet extends InitializeBindingsMixin(i) {
    constructor() {
        super();
        /**
         * The non-localized label for the facet.
         * Used in the `atomic-breadbox` component through the bindings store.
         */
        this.label = 'no-label';
        /**
         * The tabs on which the facet can be displayed. This property should not be used at the same time as `tabs-excluded`.
         *
         * Set this property as a stringified JSON array, for example:
         * ```html
         *  <atomic-facet tabs-included='["tabIDA", "tabIDB"]'></atomic-facet>
         * ```
         * If you don't set this property, the facet can be displayed on any tab. Otherwise, the facet can only be displayed on the specified tabs.
         */
        this.tabsIncluded = [];
        /**
         * The tabs on which this facet must not be displayed. This property should not be used at the same time as `tabs-included`.
         *
         * Set this property as a stringified JSON array, for example:
         * ```html
         *  <atomic-facet tabs-excluded='["tabIDA", "tabIDB"]'></atomic-facet>
         * ```
         * If you don't set this property, the facet can be displayed on any tab. Otherwise, the facet won't be displayed on any of the specified tabs.
         */
        this.tabsExcluded = [];
        /**
         * The number of values to request for this facet.
         * Also determines the number of additional values to request each time more values are shown.
         */
        this.numberOfValues = 8;
        /**
         * Whether this facet should contain a search box.
         *
         */
        this.withSearch = true;
        /**
         * The sort criterion to apply to the returned facet values.
         * Possible values are 'score', 'alphanumeric', 'alphanumericDescending', 'occurrences', alphanumericNatural', 'alphanumericNaturalDescending' and 'automatic'.
         */
        this.sortCriteria = 'automatic';
        /**
         * Specifies how a result must match the selected facet values.
         * Allowed values:
         * - `atLeastOneValue`: A result will match if at least one of the corresponding facet values is selected.
         * - `allValues`: A result will match if all corresponding facet values are selected.
         */
        this.resultsMustMatch = 'atLeastOneValue';
        /**
         * Whether to display the facet values as checkboxes (multiple selection), links (single selection) or boxes (multiple selection).
         * Possible values are 'checkbox', 'link', and 'box'.
         */
        this.displayValuesAs = 'checkbox';
        /**
         * Whether the facet is collapsed. When the facet is the child of an `atomic-facet-manager` component, the facet manager controls this property.
         */
        this.isCollapsed = false;
        /**
         * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading over the facet, from 1 to 6.
         */
        this.headingLevel = 0;
        /**
         * Whether to exclude the parents of folded results when estimating the result count for each facet value.
         *
         *
         *
         * Note: Resulting count is only an estimation, in some cases this value could be incorrect.
         * The target folding field must be a facet field with the **Use cache for nested queries** options enabled (see [Manage fields](https://docs.coveo.com/en/1833/)).
         */
        this.filterFacetCount = true;
        /**
         * Whether to allow excluding values from the facet.
         */
        this.enableExclusion = false;
        /**
         * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
         * Note: A high injectionDepth may negatively impact the facet request performance.
         * Minimum: `0`
         * Default: `1000`
         */
        this.injectionDepth = 1000;
        /**
         * An explicit list of `allowedValues` in the Search API request, as a JSON string representation.
         *
         * If you specify a list of values for this option, the facet uses only these values (if they are available in
         * the current result set).
         *
         * Example:
         *
         * The following facet only uses the `Contact`, `Account`, and `File` values of the `objecttype` field. Even if the
         * current result set contains other `objecttype` values, such as `Message`, or `Product`, the facet does not use
         * those other values.
         *
         * ```html
         * <atomic-facet field="objecttype" allowed-values='["Contact","Account","File"]'></atomic-facet>
         * ```
         *
         * The maximum amount of allowed values is 25.
         *
         * Default value is `undefined`, and the facet uses all available values for its `field` in the current result set.
         */
        this.allowedValues = [];
        /**
         * The facet values that must appear at the top, in the specified.
         * This parameter can be used in conjunction with the `sortCriteria` parameter.
         *
         * Facet values not part of the `customSort` list will be sorted according to the `sortCriteria`.
         *
         * Example:
         *
         * The following facet will sort the `Contact`, `Account`, and `File` values at the top of the list for the `objecttype` field.
         *
         * If there are more than these 3 values available, the rest of the list will be sorted using `occurrences`.
         *
         * ```html
         * <atomic-facet field="objecttype" custom-sort='["Contact","Account","File"]' sort-criteria='occurrences'></atomic-facet>
         * ```
         * The maximum amount of custom sort values is 25.
         *
         * The default value is `undefined`, and the facet values will be sorted using only the `sortCriteria`.
         */
        this.customSort = [];
        new ValidatePropsController(this, () => ({
            field: this.field,
            numberOfValues: this.numberOfValues,
            headingLevel: this.headingLevel,
            injectionDepth: this.injectionDepth,
            sortCriteria: this.sortCriteria,
            resultsMustMatch: this.resultsMustMatch,
            displayValuesAs: this.displayValuesAs,
            allowedValues: Array.isArray(this.allowedValues)
                ? this.allowedValues
                : [],
            customSort: Array.isArray(this.customSort) ? this.customSort : [],
            tabsExcluded: this.tabsExcluded,
            tabsIncluded: this.tabsIncluded,
        }), AtomicFacet_1.propsSchema);
    }
    initialize() {
        if ([...this.tabsIncluded].length > 0 &&
            [...this.tabsExcluded].length > 0) {
            console.warn('Values for both "tabs-included" and "tabs-excluded" have been provided. This is could lead to unexpected behaviors.');
        }
        if (this.displayValuesAs !== 'checkbox' && this.enableExclusion) {
            console.warn('The "enableExclusion" property is only available when "displayValuesAs" is set to "checkbox".');
        }
        this.facet = buildFacet(this.bindings.engine, { options: this.facetOptions });
        this.facetId = this.facet.state.facetId;
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.tabManager = buildTabManager(this.bindings.engine);
        this.initAriaLive();
        this.initConditionManager();
        this.initPopover();
        this.registerFacet();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.facetConditionsManager?.stopWatching();
    }
    shouldUpdate(changedProperties) {
        if (changedProperties.has('facetState')) {
            const currentFacetState = this.facetState;
            const previousFacetState = changedProperties.get('facetState');
            if (previousFacetState && currentFacetState) {
                return shouldUpdateFacetSearchComponent(currentFacetState.facetSearch, previousFacetState.facetSearch);
            }
        }
        return super.shouldUpdate(changedProperties);
    }
    shouldRenderFacet() {
        return (!this.searchStatusState.hasError &&
            this.facetState.enabled &&
            (!this.searchStatusState.firstSearchExecuted ||
                this.facetState.values.length > 0));
    }
    render() {
        return x `${n(this.shouldRenderFacet(), () => this.searchStatusState.firstSearchExecuted
            ? renderFacetContainer()(x `
            ${this.renderFacetHeader()}
            ${this.renderBody()}
          `)
            : x `<atomic-facet-placeholder
          value-count="${this.numberOfValues}"
        ></atomic-facet-placeholder>`)}`;
    }
    renderFacetHeader() {
        return x `${renderFacetHeader({
            props: {
                i18n: this.bindings.i18n,
                label: this.definedLabel,
                onClearFilters: () => {
                    this.focusTargets.header.focusAfterSearch();
                    this.facet.deselectAll();
                },
                numberOfActiveValues: this.activeValues.length,
                isCollapsed: this.isCollapsed,
                headingLevel: this.headingLevel,
                onToggleCollapse: () => {
                    this.isCollapsed = !this.isCollapsed;
                },
                headerRef: (el) => this.focusTargets.header.setTarget(el),
            },
        })}`;
    }
    renderBody() {
        if (this.isCollapsed) {
            return E;
        }
        return x `
      ${facetSearchInputGuard({
            canShowMoreValues: this.facetState.canShowMoreValues,
            numberOfDisplayedValues: this.facetState.values.length,
            withSearch: this.withSearch,
        }, () => renderFacetSearchInput({
            props: {
                i18n: this.bindings.i18n,
                label: this.definedLabel,
                onChange: (value) => {
                    if (value === '') {
                        this.facet.facetSearch.clear();
                        return;
                    }
                    this.facet.facetSearch.updateCaptions(getFieldCaptions(this.field, this.bindings.i18n));
                    this.facet.facetSearch.updateText(value);
                    this.facet.facetSearch.search();
                },
                onClear: () => this.facet.facetSearch.clear(),
                query: this.facetState.facetSearch.query,
            },
        }))}
      ${shouldDisplaySearchResults(this.facetState.facetSearch)
            ? x `${this.renderSearchResults()}${this.renderMatches()}`
            : x `${this.renderValues()}${this.renderShowMoreLess()}`}
    `;
    }
    renderValuesContainer(children, query) {
        const classes = `mt-3 ${this.displayValuesAs === 'box' ? 'box-container' : ''}`;
        return renderFacetValuesGroup({
            props: {
                i18n: this.bindings.i18n,
                label: this.label,
                query,
            },
        })(x `<ul class="${classes}" part="values">
        ${children}
      </ul>`);
    }
    renderSearchResults() {
        return this.renderValuesContainer(this.facet.state.facetSearch.values.map((value) => renderFacetValue({
            props: {
                ...this.facetValueProps,
                facetState: 'idle',
                facetCount: value.count,
                onExclude: () => this.facet.facetSearch.exclude(value),
                onSelect: () => this.displayValuesAs === 'link'
                    ? this.facet.facetSearch.singleSelect(value)
                    : this.facet.facetSearch.select(value),
                facetValue: value.rawValue,
            },
        })));
    }
    renderValues() {
        return this.renderValuesContainer(this.facet.state.values.map((value, i) => {
            const shouldFocusOnShowLessAfterInteraction = i === 0;
            const shouldFocusOnShowMoreAfterInteraction = i ===
                (this.sortCriteria === 'automatic'
                    ? 0
                    : this.facet.state.values.length - this.numberOfValues);
            return renderFacetValue({
                props: {
                    ...this.facetValueProps,
                    facetCount: value.numberOfResults,
                    onExclude: () => this.facet.toggleExclude(value),
                    onSelect: () => this.displayValuesAs === 'link'
                        ? this.facet.toggleSingleSelect(value)
                        : this.facet.toggleSelect(value),
                    facetValue: value.value,
                    facetState: value.state,
                    setRef: (btn) => {
                        if (shouldFocusOnShowLessAfterInteraction) {
                            this.showLessFocus?.setTarget(btn);
                        }
                        if (shouldFocusOnShowMoreAfterInteraction) {
                            this.showMoreFocus?.setTarget(btn);
                        }
                    },
                },
            });
        }));
    }
    renderShowMoreLess() {
        return renderFacetShowMoreLess({
            props: {
                label: this.label,
                i18n: this.bindings.i18n,
                onShowMore: () => {
                    this.focusTargets.showMore.focusAfterSearch();
                    this.facet.showMoreValues();
                },
                onShowLess: () => {
                    this.focusTargets.showLess.focusAfterSearch();
                    this.facet.showLessValues();
                },
                canShowMoreValues: this.facet.state.canShowMoreValues,
                canShowLessValues: this.facet.state.canShowLessValues,
            },
        });
    }
    renderMatches() {
        return renderFacetSearchMatches({
            props: {
                i18n: this.bindings.i18n,
                query: this.facet.state.facetSearch.query,
                numberOfMatches: this.facet.state.facetSearch.values.length,
                hasMoreMatches: this.facet.state.facetSearch.moreValuesAvailable,
                showMoreMatches: () => this.facet.facetSearch.showMoreResults(),
            },
        });
    }
    get activeValues() {
        return this.facet.state.values.filter(({ state }) => state !== 'idle');
    }
    get facetOptions() {
        return {
            facetId: this.facetId,
            field: this.field,
            numberOfValues: this.numberOfValues,
            sortCriteria: this.sortCriteria,
            resultsMustMatch: this.resultsMustMatch,
            facetSearch: { numberOfValues: this.numberOfValues },
            filterFacetCount: this.filterFacetCount,
            injectionDepth: this.injectionDepth,
            allowedValues: this.allowedValues.length
                ? [...this.allowedValues]
                : undefined,
            customSort: this.customSort.length ? [...this.customSort] : undefined,
            tabs: {
                included: [...this.tabsIncluded],
                excluded: [...this.tabsExcluded],
            },
        };
    }
    get facetValueProps() {
        return {
            facetSearchQuery: this.facetState.facetSearch.query,
            displayValuesAs: this.displayValuesAs,
            enableExclusion: this.enableExclusion,
            field: this.field,
            i18n: this.bindings.i18n,
        };
    }
    get isHidden() {
        return !this.facet.state.enabled || !this.facet.state.values.length;
    }
    get host() {
        return this;
    }
    initConditionManager() {
        this.facetConditionsManager = buildFacetConditionsManager(this.bindings.engine, {
            facetId: this.facetId,
            conditions: parseDependsOn(this.dependsOn || {}),
        });
    }
    registerFacet() {
        this.bindings.store.registerFacet('facets', this.facetInfo);
    }
    initPopover() {
        initializePopover(this.host, {
            ...this.facetInfo,
            hasValues: () => !!this.facet.state.values.length,
            numberOfActiveValues: () => this.activeValues.length,
        });
    }
    initAriaLive() {
        this.facetSearchAriaLive = new AriaLiveRegionController(this, 'facet-search');
        announceFacetSearchResultsWithAriaLive(this.facet, this.label, (msg) => {
            this.facetSearchAriaLive.message = msg;
        }, this.bindings.i18n);
    }
    get facetInfo() {
        return {
            label: () => this.bindings.i18n.t(this.label),
            facetId: this.facetId,
            element: this.host,
            isHidden: () => this.isHidden,
        };
    }
    get definedLabel() {
        return this.label === 'no-label' && this.facetState?.label
            ? this.facetState.label
            : this.label;
    }
    get focusTargets() {
        if (!this.showLessFocus) {
            this.showLessFocus = new FocusTargetController(this, this.bindings);
        }
        if (!this.showMoreFocus) {
            this.showMoreFocus = new FocusTargetController(this, this.bindings);
        }
        if (!this.headerFocus) {
            this.headerFocus = new FocusTargetController(this, this.bindings);
        }
        return {
            showLess: this.showLessFocus,
            showMore: this.showMoreFocus,
            header: this.headerFocus,
        };
    }
};
AtomicFacet.styles = [
    styles,
    styles$1,
    styles$2,
    styles$3,
    styles$4,
];
AtomicFacet.propsSchema = new Schema({
    field: new StringValue({ required: true, emptyAllowed: false }),
    numberOfValues: new NumberValue({ min: 1, required: false }),
    headingLevel: new NumberValue({ min: 0, max: 6, required: false }),
    injectionDepth: new NumberValue({ min: 0, required: false }),
    sortCriteria: new StringValue({
        constrainTo: [
            'score',
            'alphanumeric',
            'alphanumericDescending',
            'occurrences',
            'alphanumericNatural',
            'alphanumericNaturalDescending',
            'automatic',
        ],
        required: false,
    }),
    resultsMustMatch: new StringValue({
        constrainTo: ['atLeastOneValue', 'allValues'],
        required: false,
    }),
    displayValuesAs: new StringValue({
        constrainTo: ['checkbox', 'link', 'box'],
        required: false,
    }),
    allowedValues: new ArrayValue({
        each: new StringValue({ emptyAllowed: false }),
        max: 25,
        required: false,
    }),
    customSort: new ArrayValue({
        each: new StringValue({ emptyAllowed: false }),
        max: 25,
        required: false,
    }),
    tabsExcluded: new ArrayValue({
        each: new StringValue({ emptyAllowed: false }),
        required: false,
    }),
    tabsIncluded: new ArrayValue({
        each: new StringValue({ emptyAllowed: false }),
        required: false,
    }),
});
__decorate([
    r()
], AtomicFacet.prototype, "bindings", void 0);
__decorate([
    bindStateToController('facet'),
    r()
], AtomicFacet.prototype, "facetState", void 0);
__decorate([
    bindStateToController('searchStatus'),
    r()
], AtomicFacet.prototype, "searchStatusState", void 0);
__decorate([
    bindStateToController('tabManager'),
    r()
], AtomicFacet.prototype, "tabManagerState", void 0);
__decorate([
    r()
], AtomicFacet.prototype, "error", void 0);
__decorate([
    n$1({ type: String, attribute: 'facet-id', reflect: true })
], AtomicFacet.prototype, "facetId", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicFacet.prototype, "label", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicFacet.prototype, "field", void 0);
__decorate([
    n$1({
        type: Array,
        attribute: 'tabs-included',
        converter: arrayConverter,
        reflect: true,
    })
], AtomicFacet.prototype, "tabsIncluded", void 0);
__decorate([
    n$1({
        type: Array,
        attribute: 'tabs-excluded',
        converter: arrayConverter,
        reflect: true,
    })
], AtomicFacet.prototype, "tabsExcluded", void 0);
__decorate([
    n$1({ type: Number, attribute: 'number-of-values', reflect: true })
], AtomicFacet.prototype, "numberOfValues", void 0);
__decorate([
    n$1({
        type: Boolean,
        converter: booleanConverter,
        attribute: 'with-search',
        reflect: true,
    })
], AtomicFacet.prototype, "withSearch", void 0);
__decorate([
    n$1({ type: String, attribute: 'sort-criteria', reflect: true })
], AtomicFacet.prototype, "sortCriteria", void 0);
__decorate([
    n$1({ type: String, attribute: 'results-must-match', reflect: true })
], AtomicFacet.prototype, "resultsMustMatch", void 0);
__decorate([
    n$1({ type: String, attribute: 'display-values-as', reflect: true })
], AtomicFacet.prototype, "displayValuesAs", void 0);
__decorate([
    n$1({
        type: Boolean,
        converter: booleanConverter,
        attribute: 'is-collapsed',
        reflect: true,
    })
], AtomicFacet.prototype, "isCollapsed", void 0);
__decorate([
    n$1({ type: Number, attribute: 'heading-level' })
], AtomicFacet.prototype, "headingLevel", void 0);
__decorate([
    n$1({
        type: Boolean,
        converter: booleanConverter,
        attribute: 'filter-facet-count',
        reflect: true,
    })
], AtomicFacet.prototype, "filterFacetCount", void 0);
__decorate([
    n$1({
        type: Boolean,
        converter: booleanConverter,
        attribute: 'enable-exclusion',
        reflect: true,
    })
], AtomicFacet.prototype, "enableExclusion", void 0);
__decorate([
    n$1({ type: Number, attribute: 'injection-depth' })
], AtomicFacet.prototype, "injectionDepth", void 0);
__decorate([
    mapProperty({ attributePrefix: 'depends-on' })
], AtomicFacet.prototype, "dependsOn", void 0);
__decorate([
    n$1({
        type: Array,
        attribute: 'allowed-values',
    })
], AtomicFacet.prototype, "allowedValues", void 0);
__decorate([
    n$1({
        type: Array,
        attribute: 'custom-sort',
    })
], AtomicFacet.prototype, "customSort", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicFacet.prototype, "render", null);
AtomicFacet = AtomicFacet_1 = __decorate([
    t('atomic-facet'),
    bindings(),
    withTailwindStyles
], AtomicFacet);
export { AtomicFacet };
//# sourceMappingURL=atomic-facet-BuAuXLtK.js.map
