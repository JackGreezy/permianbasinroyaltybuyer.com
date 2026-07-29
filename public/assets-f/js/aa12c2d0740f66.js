import { Schema, ArrayValue, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { buildResultList, buildResultsPerPage, buildTabManager, buildInteractiveResult } from '/headless/v3.45.1/headless.esm.js';
import { x, E, i as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$2 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { i } from './keyed-B2UhaAyp.js';
import { o } from './map-D-loUq-y.js';
import { n as n$1 } from './ref-Ci0gDEiU.js';
import { n } from './when-BzW5QVN4.js';
import { r as renderItemPlaceholders } from './item-placeholders-DxoTLMuy.js';
import { a as createAppLoadedListener } from './store-BUiRYglL.js';
import { r as renderDisplayWrapper } from './display-wrapper-CBxoiJpc.js';
import { r as renderGridLayout } from './grid-layout-DBuRsaw6.js';
import { r as renderItemList } from './item-list-CPLK2F2Y.js';
import { I as ItemListCommon } from './item-list-common-DSQwU3VE.js';
import { R as ResultTemplateProvider } from './result-template-provider-BF0RDcnz.js';
import { r as renderTableLayout, a as renderTableRow, b as renderTableData, s as styles$1, c as styles$3 } from './table-layout-GUf0-R0R.js';
import { s as styles$2 } from './list-display.tw.css-B23ojfxw.js';
import { s as styles } from './placeholders.tw.css-BblpF-sO.js';
import { r as renderTabWrapper } from './tab-wrapper-CgvDxnep.js';
import { a as arrayConverter } from './array-converter-BxDz2tBl.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { C as ChildrenUpdateCompleteMixin } from './children-update-complete-mixin-BsCPHIEs.js';
import { F as FocusTargetController } from './accessibility-utils-BHnCpu87.js';
import { r as randomID } from './utils-tjiSYtV8.js';
import './atomic-result-BFbOaZBv.js';
import { g as getItemListDisplayClasses } from './item-layout-utils-Di0gijk4.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import './atomic-result-template-C0XIwCrp.js';
import './directive-C5w180XZ.js';
import './directive-helpers-Dh62B6an.js';
import './atomic-result-placeholder-CVQnE7Hk.js';
import './atomic-result-section-actions-B31MXOtu.js';
import './item-section-mixin-wEKfrHvV.js';
import './light-dom-DMtqoULx.js';
import './purify.es-BkIzpzFh.js';
import './atomic-result-section-badges-DDN_heYa.js';
import './atomic-result-section-bottom-metadata-Br_cMCoZ.js';
import './atomic-result-section-excerpt-9p6Kkaa0.js';
import './atomic-result-section-title-B9QYlxNb.js';
import './atomic-result-section-visual-BuTLhBt0.js';
import './item-layout-sections-By3xRnK_.js';
import './atomic-result-table-placeholder-CpBcgHu9.js';
import './replace-breakpoint-utils--qEQDWxF.js';
import './dom-utils-0VKCjoID.js';
import './template-provider-yD9e1k6K.js';
import './atomic-text-L-S67inR.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './base-template-controller-CyoYTbNr.js';
import './tab-utils-CrE-aPug.js';
import './event-utils-Xyk7tlQy.js';
import './unsafe-html-Deeupm6Y.js';
import './item-layout-controller-CAYxZqlT.js';
import './boolean-converter-DIV6NtGl.js';
import './atomic-result-text-C2oUsW-E.js';
import './item-text-highlighted-Cual1rid.js';
import './result-context-controller-C72BQJg7.js';
import './item-context-controller-BgvMNQCs.js';
import './field-utils-8CvHFjSG.js';
import './result-utils-BzZ-ZscV.js';
import './object-utils-DOvHQ3be.js';
import './result-template-controller-C95XtbpL.js';
import './template-utils-w8NxKX-R.js';
import './props-utils-CtIuQum3.js';
import './index-DRai3PWs.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicResultList_1;
/**
 * The `atomic-result-list` component is responsible for displaying query results by applying one or more result templates.
 *
 * @slot default - The default slot where the result templates are inserted.
 * @part result-list - The element containing every result of a result list
 * @part outline - The element displaying an outline or a divider around a result
 * @part result-list-grid-clickable-container - The parent of the result and the clickable link encompassing it, when results are displayed as a grid
 * @part result-list-grid-clickable - The clickable link encompassing the result when results are displayed as a grid
 * @part result-table - The element of the result table containing a heading and a body
 * @part result-table-heading - The element containing the row of cells in the result table's heading
 * @part result-table-heading-row - The element containing cells of the result table's heading
 * @part result-table-heading-cell - The element representing a cell of the result table's heading
 * @part result-table-body - The element containing the rows of the result table's body
 * @part result-table-row - The element containing the cells of a row in the result table's body
 * @part result-table-row-odd - The element containing the cells of an odd row in the result table's body
 * @part result-table-row-even - The element containing the cells of an even row in the result table's body
 * @part result-table-cell - The element representing a cell of the result table's body
 */
let AtomicResultList = AtomicResultList_1 = class AtomicResultList extends ChildrenUpdateCompleteMixin(i$1) {
    constructor() {
        super();
        this.loadingFlag = randomID('firstResultLoaded-');
        this.isAppLoaded = false;
        this.isEveryResultReady = false;
        this.resultTemplateRegistered = false;
        this.templateHasError = false;
        /**
         * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
         */
        this.density = 'normal';
        /**
         * The desired layout to use when displaying results. Layouts affect how many results to display per row and how visually distinct they are from each other.
         */
        this.display = 'list';
        /**
         * The expected size of the image displayed in the results.
         */
        this.imageSize = 'icon';
        /**
         * The tabs on which the result list can be displayed. This property should not be used at the same time as `tabs-excluded`.
         *
         * Set this property as a stringified JSON array, for example:
         * ```html
         *  <atomic-result-list tabs-included='["tabIDA", "tabIDB"]'></atomic-result-list snippet>
         * ```
         * If you don't set this property, the result list can be displayed on any tab. Otherwise, the result list can only be displayed on the specified tabs.
         */
        this.tabsIncluded = [];
        /**
         * The tabs on which this result list must not be displayed. This property should not be used at the same time as `tabs-included`.
         *
         * Set this property as a stringified JSON array, for example:
         * ```html
         *  <atomic-result-list tabs-excluded='["tabIDA", "tabIDB"]'></atomic-result-list>
         * ```
         * If you don't set this property, the result list can be displayed on any tab. Otherwise, the result list won't be displayed on any of the specified tabs.
         */
        this.tabsExcluded = [];
        new ValidatePropsController(this, () => ({
            density: this.density,
            display: this.display,
            imageSize: this.imageSize,
            tabsIncluded: this.tabsIncluded,
            tabsExcluded: this.tabsExcluded,
        }), AtomicResultList_1.propsSchema,
        // TODO V4: KIT-5197 - Remove false
        false);
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax such as React, Angular, or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    async setRenderFunction(resultRenderingFunction) {
        this.itemRenderingFunction = resultRenderingFunction;
    }
    initialize() {
        if (this.innerHTML.includes('<atomic-result-children')) {
            console.warn('Folded results will not render any children for the "atomic-result-list". Please use "atomic-folded-result-list" instead.');
        }
        this.resultList = buildResultList(this.bindings.engine);
        this.resultsPerPage = buildResultsPerPage(this.bindings.engine);
        this.tabManager = buildTabManager(this.bindings.engine);
        this.initResultTemplateProvider();
        this.initResultListCommon();
        createAppLoadedListener(this.bindings.store, (isAppLoaded) => {
            this.isAppLoaded = isAppLoaded;
        });
    }
    async willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('tabManagerState')) {
            const oldValue = changedProperties.get('tabManagerState');
            if (this.tabManagerState?.activeTab !== oldValue?.activeTab &&
                oldValue !== undefined) {
                this.bindings.store.unsetLoadingFlag(this.loadingFlag);
            }
        }
        if (changedProperties.has('resultListState')) {
            const oldState = changedProperties.get('resultListState');
            if (this.resultListState.firstSearchExecuted) {
                this.bindings.store.unsetLoadingFlag(this.loadingFlag);
            }
            if (!oldState?.isLoading && this.resultListState.isLoading) {
                this.isEveryResultReady = false;
            }
        }
        await this.updateResultReadyState();
    }
    async updateResultReadyState() {
        if (this.isAppLoaded &&
            !this.isEveryResultReady &&
            this.resultListState?.firstSearchExecuted &&
            this.resultListState?.results?.length > 0) {
            await this.getUpdateComplete();
            this.isEveryResultReady = true;
        }
    }
    render() {
        return x `${renderTabWrapper({
            props: {
                tabsIncluded: this.tabsIncluded,
                tabsExcluded: this.tabsExcluded,
                activeTab: this.tabManagerState?.activeTab,
            },
        })(renderItemList({
            props: {
                hasError: this.resultListState.hasError,
                hasItems: this.resultListState.hasResults,
                hasTemplate: this.resultTemplateRegistered,
                firstRequestExecuted: this.resultListState.firstSearchExecuted,
                templateHasError: this.templateHasError,
            },
        })(x `${n(this.templateHasError, () => x `<slot></slot>`, () => {
            const listClasses = this.computeListDisplayClasses();
            const resultClasses = `${listClasses} ${!this.isEveryResultReady && 'hidden'}`;
            // Results must be rendered immediately (though hidden) to start their initialization and loading processes.
            // If we wait to render results until placeholders are removed, the components won't begin loading until then,
            // causing a longer delay. The `isEveryResultReady` flag hides results while preserving placeholders,
            // then removes placeholders once results are fully loaded to prevent content flash.
            return x `
              ${n(this.isAppLoaded, () => renderDisplayWrapper({
                props: {
                    listClasses: resultClasses,
                    display: this.display,
                },
            })(x `${n(this.display === 'grid', () => this.renderGrid(), () => x `${n(this.display === 'table', () => this.renderTable(), () => this.renderList())}`)}`))}
              ${n(!this.isEveryResultReady, () => renderDisplayWrapper({
                props: { listClasses, display: this.display },
            })(renderItemPlaceholders({
                props: {
                    density: this.density,
                    display: this.display,
                    imageSize: this.imageSize,
                    numberOfPlaceholders: this.resultsPerPageState.numberOfResults || 10,
                },
            })))}
            `;
        })}`))}`;
    }
    initResultTemplateProvider() {
        this.resultTemplateProvider = new ResultTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.querySelectorAll('atomic-result-template')),
            getResultTemplateRegistered: () => this.resultTemplateRegistered,
            getTemplateHasError: () => this.templateHasError,
            setResultTemplateRegistered: (value) => {
                this.resultTemplateRegistered = value;
            },
            setTemplateHasError: (value) => {
                this.templateHasError = value;
            },
            bindings: this.bindings,
        });
    }
    initResultListCommon() {
        this.resultListCommon = new ItemListCommon({
            engineSubscribe: this.bindings.engine.subscribe,
            getCurrentNumberOfItems: () => this.resultListState.results.length,
            getIsLoading: () => this.resultListState.isLoading,
            host: this,
            loadingFlag: this.loadingFlag,
            nextNewItemTarget: this.focusTarget,
            store: this.bindings.store,
        });
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !(this.isAppLoaded && this.isEveryResultReady);
        return getItemListDisplayClasses(this.display, this.density, this.imageSize, this.resultListState?.isLoading, displayPlaceholders);
    }
    renderGrid() {
        return x `${o(this.resultListState.results, (result, index) => {
            return renderGridLayout({
                props: {
                    item: {
                        ...result,
                        title: result.title ?? '',
                    },
                    selectorForItem: 'atomic-result',
                    setRef: (element) => {
                        element instanceof HTMLElement &&
                            this.resultListCommon.setNewResultRef(element, index);
                    },
                },
            })(x `${i(this.getResultId(result), x `<atomic-result
            .content=${this.getContent(result)}
            .density=${this.density}
            .display=${this.display}
            .imageSize=${this.imageSize}
            .interactiveResult=${this.getInteractiveResult(result)}
            .linkContent=${this.getLinkContent(result)}
            .loadingFlag=${this.loadingFlag}
            .result=${result}
            .renderingFunction=${this.itemRenderingFunction}
            .store=${this.bindings.store}
          ></atomic-result>`)}`);
        })}`;
    }
    renderList() {
        return x `${o(this.resultListState.results, (result, index) => {
            return x `${i(this.getResultId(result), x `<atomic-result
        part="outline"
         ${n$1((element) => element instanceof HTMLElement &&
                this.resultListCommon.setNewResultRef(element, index))}
            .content=${this.getContent(result)}
            .density=${this.density}
            .display=${this.display}
            .imageSize=${this.imageSize}
            .interactiveResult=${this.getInteractiveResult(result)}
            .linkContent=${this.getLinkContent(result)}
            .loadingFlag=${this.loadingFlag}
            .result=${result}
            .renderingFunction=${this.itemRenderingFunction}
            .store=${this.bindings.store}
          ></atomic-result>`)}`;
        })}`;
    }
    renderTable() {
        return x `${n(this.resultListState.hasResults, () => {
            const firstItem = this.resultListState.results[0];
            const listClasses = this.computeListDisplayClasses();
            const templateContentForFirstItem = this.resultTemplateProvider.getTemplateContent(firstItem);
            return renderTableLayout({
                props: {
                    firstItem,
                    host: this,
                    itemRenderingFunction: this.itemRenderingFunction,
                    listClasses,
                    logger: this.bindings.engine.logger,
                    templateContentForFirstItem,
                },
            })(x `${o(this.resultListState.results, (result, index) => {
                return renderTableRow({
                    props: {
                        key: this.getResultId(result),
                        rowIndex: index,
                        setRef: (element) => {
                            element instanceof HTMLElement &&
                                this.resultListCommon.setNewResultRef(element, index);
                        },
                    },
                })(renderTableData({
                    props: {
                        firstItem,
                        templateContentForFirstItem,
                        itemRenderingFunction: this.itemRenderingFunction,
                        key: this.getResultId(result),
                        renderItem: (content) => {
                            return x `<atomic-result
                      .content=${content}
                      .density=${this.density}
                      .display=${this.display}
                      .imageSize=${this.imageSize}
                      .interactiveResult=${this.getInteractiveResult(result)}
                       .linkContent=${this.getLinkContent(result)}
                      .loadingFlag=${this.loadingFlag}
                      .result=${result}
                      .renderingFunction=${this.itemRenderingFunction}
                      .store=${this.bindings.store}
                    ></atomic-result>`;
                        },
                    },
                }));
            })}`);
        }, () => E)}`;
    }
    get focusTarget() {
        if (!this.nextNewResultTarget) {
            this.nextNewResultTarget = new FocusTargetController(this, this.bindings);
        }
        return this.nextNewResultTarget;
    }
    getLinkContent(result) {
        return this.display === 'grid'
            ? this.resultTemplateProvider.getLinkTemplateContent(result)
            : this.resultTemplateProvider.getEmptyLinkTemplateContent();
    }
    getContent(result) {
        return this.resultTemplateProvider.getTemplateContent(result);
    }
    getInteractiveResult(result) {
        return buildInteractiveResult(this.bindings.engine, {
            options: { result },
        });
    }
    getResultId(result) {
        return this.resultListCommon.getResultId(result.uniqueId, this.resultListState.searchResponseId, this.density, this.imageSize);
    }
};
AtomicResultList.styles = [
    styles,
    styles$1,
    styles$2,
    styles$3,
];
AtomicResultList.propsSchema = new Schema({
    density: new StringValue({
        constrainTo: ['normal', 'comfortable', 'compact'],
    }),
    display: new StringValue({ constrainTo: ['grid', 'list', 'table'] }),
    imageSize: new StringValue({
        constrainTo: ['small', 'large', 'icon', 'none'],
    }),
    tabsIncluded: new ArrayValue({
        each: new StringValue({}),
        required: false,
    }),
    tabsExcluded: new ArrayValue({
        each: new StringValue({}),
        required: false,
    }),
});
__decorate([
    r()
], AtomicResultList.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicResultList.prototype, "error", void 0);
__decorate([
    r()
], AtomicResultList.prototype, "isAppLoaded", void 0);
__decorate([
    r()
], AtomicResultList.prototype, "isEveryResultReady", void 0);
__decorate([
    r()
], AtomicResultList.prototype, "resultTemplateRegistered", void 0);
__decorate([
    r()
], AtomicResultList.prototype, "templateHasError", void 0);
__decorate([
    bindStateToController('resultList'),
    r()
], AtomicResultList.prototype, "resultListState", void 0);
__decorate([
    bindStateToController('resultsPerPage'),
    r()
], AtomicResultList.prototype, "resultsPerPageState", void 0);
__decorate([
    bindStateToController('tabManager'),
    r()
], AtomicResultList.prototype, "tabManagerState", void 0);
__decorate([
    n$2({ reflect: true, type: String })
], AtomicResultList.prototype, "density", void 0);
__decorate([
    n$2({ reflect: true, type: String })
], AtomicResultList.prototype, "display", void 0);
__decorate([
    n$2({ reflect: true, attribute: 'image-size', type: String })
], AtomicResultList.prototype, "imageSize", void 0);
__decorate([
    n$2({
        attribute: 'tabs-included',
        converter: arrayConverter,
        type: Array,
    })
], AtomicResultList.prototype, "tabsIncluded", void 0);
__decorate([
    n$2({
        attribute: 'tabs-excluded',
        converter: arrayConverter,
        type: Array,
    })
], AtomicResultList.prototype, "tabsExcluded", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicResultList.prototype, "render", null);
AtomicResultList = AtomicResultList_1 = __decorate([
    t('atomic-result-list'),
    bindings(),
    withTailwindStyles
], AtomicResultList);
export { AtomicResultList };
//# sourceMappingURL=atomic-result-list-BjZy7jJQ.js.map
