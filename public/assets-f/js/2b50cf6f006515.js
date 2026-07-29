import { VERSION, loadConfigurationActions, loadQueryActions, loadSearchConfigurationActions, loadFieldActions, EcommerceDefaultFieldsToInclude, buildSearchEngine, buildUrlManager, buildSearchStatus } from '/headless/v3.45.1/headless.esm.js';
import { e as e$2 } from './provide-CIMdHCG-.js';
import { g as getNextAnalyticsConfig, d as augmentAnalyticsConfigWithDocument, a as augmentAnalyticsConfigWithAtomicVersion, b as augmentWithExternalMiddleware, c as augmentAnalyticsWithAtomicVersion, I as InterfaceController, i as instance, w as waitForAtomicChildrenToBeDefined } from './custom-element-tags-Dt8Wtuzn.js';
import { x, i, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { b as bindingsContext } from './bindings-context-DAKrxtTy.js';
import { M as MobileBreakpointController } from './mobile-breakpoint-controller-b2xUcI6H.js';
import { m as makeDesktopQuery, n as noResultsSelector, e as errorSelector, f as firstSearchExecutedSelector } from './search-layout-gN1yJpjQ.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as watch } from './watch-CV_JtHFl.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { C as ChildrenUpdateCompleteMixin } from './children-update-complete-mixin-BsCPHIEs.js';
import { m as markParentAsReady } from './init-queue-BrIDKWA1.js';
import { S as SafeStorage, a as StorageItems } from './local-storage-utils-D2gY2DIg.js';
import './atomic-relevance-inspector-Bd1nMkVK.js';
import { D as DEFAULT_MOBILE_BREAKPOINT } from './replace-breakpoint-utils--qEQDWxF.js';
import { c as createBaseStore, w as waitUntilAppLoaded, g as getFacetElements, r as registerFacet, s as setLoadingFlag, u as unsetLoadingFlag } from './store-BUiRYglL.js';
import './atomic-modal-BGpWxOBn.js';
import './atomic-icon-D7DRsDUP.js';
import './atomic-result-BFbOaZBv.js';
import { a as arrayConverter } from './array-converter-BxDz2tBl.js';
import './dayjs.min-DDySWPYd.js';
import './_commonjsHelpers-C44kNtub.js';
import './purify.es-BkIzpzFh.js';
import './asset-path-utils-DR8U1hRo.js';
import './atomic-aria-live-BSHBw6eS.js';
import './style-map-BeDDoWL4.js';
import './directive-C5w180XZ.js';
import './light-dom-DMtqoULx.js';
import './debounce-utils-D96OSgvX.js';
import './utils-tjiSYtV8.js';
import './layout-BzcwF9P8.js';
import './atomic-layout-section-utils-BMee00eY.js';
import './atomic-component-error-CzI0_SHn.js';
import './button-DE0Kx0NV.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './ripple-utils-DMduLOet.js';
import './event-utils-Xyk7tlQy.js';
import './button-style-DV1FJlx9.js';
import './binding-guard-BU6auXaS.js';
import './bindings-CW6TJGy3.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './unsafe-html-Deeupm6Y.js';
import './item-list-common-DSQwU3VE.js';
import './accessibility-utils-BHnCpu87.js';
import './item-layout-controller-CAYxZqlT.js';
import './item-layout-utils-Di0gijk4.js';
import './item-layout-sections-By3xRnK_.js';
import './validate-props-controller-R9C-T-Ya.js';
import './atomic-result-text-C2oUsW-E.js';
import './item-text-highlighted-Cual1rid.js';
import './result-context-controller-C72BQJg7.js';
import './item-context-controller-BgvMNQCs.js';
import './field-utils-8CvHFjSG.js';
import './result-utils-BzZ-ZscV.js';
import './object-utils-DOvHQ3be.js';
import './atomic-text-L-S67inR.js';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=(e,t,c)=>(c.configurable=true,c.enumerable=true,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;return e$1(n,s,{get(){return o(this)}})}}
function getAnalyticsConfig(searchEngineConfig, enabled, store) {
    switch (searchEngineConfig.analytics?.analyticsMode) {
        case 'next':
            return getNextAnalyticsConfig(searchEngineConfig, enabled);
        default:
            return getLegacyAnalyticsConfig(searchEngineConfig, enabled, store);
    }
}
function getLegacyAnalyticsConfig(searchEngineConfig, enabled, store) {
    const analyticsClientMiddleware = (event, payload) => augmentAnalytics(event, payload, store, searchEngineConfig);
    const defaultConfiguration = {
        analyticsClientMiddleware,
        enabled,
        ...augmentAnalyticsConfigWithDocument(),
    };
    const immutableConfiguration = {
        ...augmentAnalyticsConfigWithAtomicVersion(),
    };
    if (searchEngineConfig.analytics) {
        return {
            ...defaultConfiguration,
            ...searchEngineConfig.analytics,
            analyticsClientMiddleware,
            ...immutableConfiguration,
        };
    }
    return {
        ...defaultConfiguration,
        ...immutableConfiguration,
    };
}
function augmentAnalytics(event, payload, store, config) {
    let result = augmentWithExternalMiddleware(event, payload, config);
    result = augmentAnalyticsWithAtomicVersion(result);
    result = augmentAnalyticsWithFacetTitles(result, store);
    return result;
}
function augmentAnalyticsWithFacetTitles(payload, store) {
    const allFacets = store.getAllFacets();
    const getAtomicFacetLabelOrOriginalTitle = (facetId, originalTitle) => (allFacets[facetId] ? allFacets[facetId].label() : originalTitle);
    if (payload.facetState) {
        payload.facetState = payload.facetState.map((analyticsFacetState) => {
            const { id, title: originalTitle } = analyticsFacetState;
            return {
                ...analyticsFacetState,
                title: getAtomicFacetLabelOrOriginalTitle(id, originalTitle),
            };
        });
    }
    if (payload.customData?.facetTitle &&
        payload.customData.facetId &&
        payload.customData.facetTitle) {
        payload.customData.facetTitle = getAtomicFacetLabelOrOriginalTitle(payload.customData.facetId, payload.customData.facetTitle);
    }
    return payload;
}
function createSearchStore() {
    const store = createBaseStore({
        loadingFlags: [],
        iconAssetsPath: '',
        resultList: undefined,
        mobileBreakpoint: DEFAULT_MOBILE_BREAKPOINT,
        facets: {},
        numericFacets: {},
        dateFacets: {},
        categoryFacets: {},
        facetElements: [],
        fieldsToInclude: [],
        sortOptions: [],
    });
    return {
        ...store,
        unsetLoadingFlag(loadingFlag) {
            unsetLoadingFlag(store, loadingFlag);
        },
        setLoadingFlag(loadingFlag) {
            setLoadingFlag(store, loadingFlag);
        },
        isMobile() {
            return !window.matchMedia(makeDesktopQuery(store.state.mobileBreakpoint))
                .matches;
        },
        registerFacet(facetType, data) {
            registerFacet(store, facetType, data);
        },
        getFacetElements() {
            return getFacetElements(store);
        },
        waitUntilAppLoaded(callback) {
            waitUntilAppLoaded(store, callback);
        },
        getUniqueIDFromEngine(engine) {
            return engine.state.search.response.searchUid;
        },
        hasLoadingFlag(loadingFlag) {
            return store.state.loadingFlags.indexOf(loadingFlag) !== -1;
        },
        getAllFacets() {
            return {
                ...store.state.facets,
                ...store.state.dateFacets,
                ...store.state.categoryFacets,
                ...store.state.numericFacets,
            };
        },
        addFieldsToInclude(fields) {
            const currentFields = store.state.fieldsToInclude;
            store.state.fieldsToInclude = [...currentFields, ...fields];
        },
    };
}
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const FirstSearchExecutedFlag = 'firstSearchExecuted';
/**
 * The `atomic-search-interface` component is the parent to all other atomic components in a search page. It handles the headless search engine and localization configurations.
 *
 * @slot default - The default slot where you can add child components to the interface.
 */
let AtomicSearchInterface = class AtomicSearchInterface extends ChildrenUpdateCompleteMixin(i) {
    constructor() {
        super();
        this.bindings = {};
        this.unsubscribeUrlManager = () => { };
        this.unsubscribeSearchStatus = () => { };
        this.initialized = false;
        this.interfaceController = new InterfaceController(this, 'CoveoAtomic', VERSION);
        /**
         * A list of non-default fields to include in the query results.
         *
         * Specify the property as an array using a JSON string representation:
         * ```html
         * <atomic-search-interface fields-to-include='["fieldA", "fieldB"]'></atomic-search-interface>
         * ```
         */
        this.fieldsToInclude = [];
        // TODO - KIT-4994: Add disableAnalytics property that defaults to false.
        // TODO - KIT-4994: Deprecate in favor of disableAnalytics property.
        // TODO - (v4) KIT-4990: Remove.
        /**
         * Whether analytics should be enabled.
         */
        this.analytics = true;
        /**
         * The search interface language.
         */
        this.language = 'en';
        // TODO - (v4) KIT-4823: Remove.
        /**
         * Whether the state should be reflected in the URL parameters.
         * @deprecated - replaced by `disable-state-reflection-in-url` (this defaults to `true`, while the replacement defaults to `false`).
         */
        this.reflectStateInUrl = true;
        /**
         * Whether to disable state reflection in the URL parameters.
         */
        this.disableStateReflectionInUrl = false;
        /**
         * The CSS selector for the container where the interface will scroll back to.
         */
        this.scrollContainer = 'atomic-search-interface';
        /**
         * The language assets path. By default, this will be a relative URL pointing to `./lang`.
         *
         * Example: "/mypublicpath/languages"
         *
         */
        this.languageAssetsPath = './lang';
        /**
         * The icon assets path. By default, this will be a relative URL pointing to `./assets`.
         *
         * Example: "/mypublicpath/icons"
         *
         */
        this.iconAssetsPath = './assets';
        // TODO - (v4) KIT-5004: Remove.
        /**
         * Whether the relevance inspector shortcut should be enabled for this interface.
         *
         * The relevance inspector can be opened by holding the Alt key (Option on Mac) while over the interface, and performing a double-click.
         *
         * The relevance inspector allows to troubleshoot and debug queries.
         * @deprecated - replaced by `disable-relevance-inspector` (this defaults to `true`, while the replacement defaults to `false`).
         */
        this.enableRelevanceInspector = true;
        /**
         * Whether to disable the relevance inspector shortcut for this interface.
         */
        this.disableRelevanceInspector = false;
        this.handleInitialization = (event) => {
            this.interfaceController.onComponentInitializing(event);
        };
        this.onHashChange = () => {
            this.urlManager.synchronize(this.fragment);
        };
        this.store = createSearchStore();
        new MobileBreakpointController(this, this.store);
        const { promise, resolve } = Promise.withResolvers();
        this.i18Initialized = promise;
        this.i18n = instance.createInstance(undefined, resolve);
    }
    connectedCallback() {
        super.connectedCallback();
        this.store.setLoadingFlag(FirstSearchExecutedFlag);
        this.initFieldsToInclude();
        this.addEventListener('atomic/initializeComponent', this.handleInitialization);
        this.addEventListener('atomic/scrollToTop', this.scrollToTop);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('fieldsToInclude')) {
            this.updateFieldsToInclude();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (typeof this.unsubscribeUrlManager === 'function') {
            this.unsubscribeUrlManager();
        }
        if (typeof this.unsubscribeSearchStatus === 'function') {
            this.unsubscribeSearchStatus();
        }
        window.removeEventListener('hashchange', this.onHashChange);
        this.removeEventListener('atomic/initializeComponent', this.handleInitialization);
        this.removeEventListener('atomic/scrollToTop', this.scrollToTop);
    }
    // TODO - (v4) KIT-4991: Make private.
    scrollToTop() {
        const scrollContainerElement = document.querySelector(this.scrollContainer);
        if (!scrollContainerElement) {
            this.bindings.engine.logger.warn(`Could not find the scroll container with the selector "${this.scrollContainer}". This will prevent UX interactions that require a scroll from working correctly. Please review the CSS selector in the scrollContainer option`);
            return;
        }
        scrollContainerElement.scrollIntoView({ behavior: 'smooth' });
    }
    /**
     * @deprecated provided for backward compatibility. set the 'open' property directly on the relevance inspector instead.
     */
    closeRelevanceInspector() {
        if (this.relevanceInspector) {
            this.relevanceInspector.open = false;
        }
    }
    /**
     * Initializes the connection with the headless search engine using options for `accessToken` (required), `organizationId` (required), `environment` (defaults to `prod`), and `renewAccessToken`.
     */
    initialize(options) {
        return this.internalInitialization(() => this.initEngine(options));
    }
    /**
     * Initializes the interface using the provided [headless search engine](https://docs.coveo.com/en/headless/latest/reference/modules/Search.html, as opposed to the `initialize` method which internally builds a search engine instance.
     * This bypasses the properties set on the component, such as analytics, searchHub, pipeline, language, timezone, and logLevel.
     */
    initializeWithSearchEngine(engine) {
        if (this.pipeline && this.pipeline !== engine.state.pipeline) {
            console.warn('Mismatch between search interface pipeline and engine pipeline. The engine pipeline will be used.');
        }
        if (this.searchHub && this.searchHub !== engine.state.searchHub) {
            console.warn('Mismatch between search interface search hub and engine search hub. The engine search hub will be used.');
        }
        engine.dispatch(loadConfigurationActions(engine).updateAnalyticsConfiguration({
            ...augmentAnalyticsConfigWithAtomicVersion(),
        }));
        return this.internalInitialization(() => {
            this.engine = engine;
        });
    }
    /**
     *
     * Executes the first search and logs the interface load event to analytics, after initializing connection to the headless search engine.
     */
    async executeFirstSearch() {
        if (!this.interfaceController.engineIsCreated(this.engine)) {
            return;
        }
        if (!this.initialized) {
            console.error('You have to wait until the "initialize" promise is fulfilled before executing a search.', this);
            return;
        }
        const safeStorage = new SafeStorage();
        const standaloneSearchBoxData = safeStorage.getParsedJSON(StorageItems.STANDALONE_SEARCH_BOX_DATA, null);
        if (!standaloneSearchBoxData) {
            this.engine.executeFirstSearch();
            return;
        }
        safeStorage.removeItem(StorageItems.STANDALONE_SEARCH_BOX_DATA);
        const { updateQuery } = loadQueryActions(this.engine);
        const { value, enableQuerySyntax, analytics } = standaloneSearchBoxData;
        this.engine.dispatch(updateQuery({ q: value, enableQuerySyntax }));
        this.engine.executeFirstSearchAfterStandaloneSearchBoxRedirect(analytics);
    }
    updateSearchConfiguration(updatedProp, newValue) {
        if (!this.interfaceController.engineIsCreated(this.engine)) {
            return;
        }
        if (this.engine.state[updatedProp] === newValue) {
            return;
        }
        const { updateSearchConfiguration } = loadSearchConfigurationActions(this.engine);
        this.engine.dispatch(updateSearchConfiguration({
            [updatedProp]: newValue,
        }));
    }
    registerFieldsToInclude() {
        this.engine?.dispatch(loadFieldActions(this.engine).registerFieldsToInclude(this.store.state.fieldsToInclude));
    }
    updateSearchHub() {
        this.updateSearchConfiguration('searchHub', this.searchHub ?? 'default');
    }
    updatePipeline() {
        this.updateSearchConfiguration('pipeline', this.pipeline);
    }
    toggleAnalytics() {
        if (!this.interfaceController.engineIsCreated(this.engine)) {
            return;
        }
        this.interfaceController.onAnalyticsChange();
    }
    updateLanguage() {
        if (!this.interfaceController.engineIsCreated(this.engine) ||
            !this.language) {
            return;
        }
        const { updateSearchConfiguration } = loadSearchConfigurationActions(this.engine);
        this.engine.dispatch(updateSearchConfiguration({
            locale: this.language,
        }));
        return this.interfaceController.onLanguageChange();
    }
    updateIconAssetsPath() {
        this.store.state.iconAssetsPath = this.iconAssetsPath;
    }
    render() {
        return x `
      ${n(this.bindings?.engine &&
            this.enableRelevanceInspector &&
            !this.disableRelevanceInspector, () => x `<atomic-relevance-inspector></atomic-relevance-inspector>`)}
      <slot></slot>
    `;
    }
    getBindings() {
        return {
            engine: this.engine,
            i18n: this.i18n,
            store: this.store,
            interfaceElement: this,
            createStyleElement: () => {
                const styleTag = document.createElement('style');
                return styleTag;
            },
            // TODO - KIT-4893: Remove once atomic-quickview-modal migration is complete.
            createScriptElement: () => {
                const scriptTag = document.createElement('script');
                return scriptTag;
            },
        };
    }
    initFieldsToInclude() {
        const fields = EcommerceDefaultFieldsToInclude.concat(this.fieldsToInclude);
        this.store.addFieldsToInclude(fields);
    }
    updateFieldsToInclude() {
        this.store.state.fieldsToInclude = [];
        this.initFieldsToInclude();
        this.registerFieldsToInclude();
    }
    initEngine(options) {
        const searchConfig = this.getSearchConfiguration(options);
        const analyticsConfig = getAnalyticsConfig(options, this.analytics, this.store);
        try {
            this.engine = buildSearchEngine({
                configuration: {
                    ...options,
                    search: searchConfig,
                    analytics: analyticsConfig,
                },
                loggerOptions: {
                    level: this.logLevel,
                },
            });
        }
        catch (error) {
            this.error = error;
            throw error;
        }
    }
    getSearchConfiguration(options) {
        const searchConfigFromProps = {
            searchHub: this.searchHub ?? 'default',
            pipeline: this.pipeline,
            locale: this.language,
            timezone: this.timezone,
        };
        if (options.search) {
            return {
                ...searchConfigFromProps,
                ...options.search,
            };
        }
        return searchConfigFromProps;
    }
    get fragment() {
        return window.location.hash.slice(1);
    }
    initUrlManager() {
        if (this.disableStateReflectionInUrl) {
            return;
        }
        if (!this.reflectStateInUrl) {
            return;
        }
        this.urlManager = buildUrlManager(this.engine, {
            initialState: { fragment: this.fragment },
        });
        this.unsubscribeUrlManager = this.urlManager.subscribe(() => this.updateHash());
        window.addEventListener('hashchange', this.onHashChange);
    }
    async internalInitialization(initEngine) {
        await Promise.all([
            this.interfaceController.onInitialization(initEngine),
            this.i18Initialized,
        ]);
        this.updateLanguage();
        this.bindings = this.getBindings();
        markParentAsReady(this);
        this.pipeline = this.engine.state.pipeline;
        this.searchHub = this.engine.state.searchHub;
        this.initSearchStatus();
        await waitForAtomicChildrenToBeDefined(this);
        await this.getUpdateComplete();
        this.initUrlManager();
        this.initialized = true;
    }
    initSearchStatus() {
        this.searchStatus = buildSearchStatus(this.engine);
        this.unsubscribeSearchStatus = this.searchStatus.subscribe(() => {
            const hasNoResultsAfterInitialSearch = !this.searchStatus.state.hasResults &&
                this.searchStatus.state.firstSearchExecuted &&
                !this.searchStatus.state.hasError;
            this.classList.toggle(noResultsSelector, hasNoResultsAfterInitialSearch);
            this.classList.toggle(errorSelector, this.searchStatus.state.hasError);
            this.classList.toggle(firstSearchExecutedSelector, this.searchStatus.state.firstSearchExecuted);
            if (this.searchStatus.state.firstSearchExecuted &&
                this.store.hasLoadingFlag(FirstSearchExecutedFlag)) {
                this.store.unsetLoadingFlag(FirstSearchExecutedFlag);
            }
        });
    }
    updateHash() {
        const newFragment = this.urlManager.state.fragment;
        if (!this.searchStatus.state.firstSearchExecuted) {
            history.replaceState(null, document.title, `#${newFragment}`);
            this.bindings.engine.logger.info(`History replaceState #${newFragment}`);
            return;
        }
        history.pushState(null, document.title, `#${newFragment}`);
        this.bindings.engine.logger.info(`History pushState #${newFragment}`);
    }
};
AtomicSearchInterface.styles = [
    i$1`:host{height:inherit;width:inherit;&>slot{height:inherit}}`,
];
__decorate([
    r(),
    e$2({ context: bindingsContext })
], AtomicSearchInterface.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicSearchInterface.prototype, "error", void 0);
__decorate([
    e('atomic-relevance-inspector')
], AtomicSearchInterface.prototype, "relevanceInspector", void 0);
__decorate([
    n$1({
        type: Array,
        attribute: 'fields-to-include',
        converter: arrayConverter,
    })
], AtomicSearchInterface.prototype, "fieldsToInclude", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicSearchInterface.prototype, "pipeline", void 0);
__decorate([
    n$1({ type: String, attribute: 'search-hub', reflect: true })
], AtomicSearchInterface.prototype, "searchHub", void 0);
__decorate([
    n$1({
        type: Boolean,
        converter: booleanConverter,
        reflect: true,
    })
], AtomicSearchInterface.prototype, "analytics", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicSearchInterface.prototype, "timezone", void 0);
__decorate([
    n$1({ type: String, attribute: 'log-level', reflect: true })
], AtomicSearchInterface.prototype, "logLevel", void 0);
__decorate([
    n$1({ type: Object, attribute: false })
], AtomicSearchInterface.prototype, "i18n", void 0);
__decorate([
    n$1({ type: String, reflect: true })
], AtomicSearchInterface.prototype, "language", void 0);
__decorate([
    n$1({ type: Object, attribute: false })
], AtomicSearchInterface.prototype, "engine", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'reflect-state-in-url',
        reflect: true,
        converter: booleanConverter,
    })
], AtomicSearchInterface.prototype, "reflectStateInUrl", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'disable-state-reflection-in-url',
        reflect: true,
    })
], AtomicSearchInterface.prototype, "disableStateReflectionInUrl", void 0);
__decorate([
    n$1({ type: String, attribute: 'scroll-container', reflect: true })
], AtomicSearchInterface.prototype, "scrollContainer", void 0);
__decorate([
    n$1({ type: String, attribute: 'language-assets-path', reflect: true })
], AtomicSearchInterface.prototype, "languageAssetsPath", void 0);
__decorate([
    n$1({ type: String, attribute: 'icon-assets-path', reflect: true })
], AtomicSearchInterface.prototype, "iconAssetsPath", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'enable-relevance-inspector',
        reflect: true,
        converter: booleanConverter,
    })
], AtomicSearchInterface.prototype, "enableRelevanceInspector", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'disable-relevance-inspector',
        reflect: true,
    })
], AtomicSearchInterface.prototype, "disableRelevanceInspector", void 0);
__decorate([
    watch('searchHub')
], AtomicSearchInterface.prototype, "updateSearchHub", null);
__decorate([
    watch('pipeline')
], AtomicSearchInterface.prototype, "updatePipeline", null);
__decorate([
    watch('analytics')
], AtomicSearchInterface.prototype, "toggleAnalytics", null);
__decorate([
    watch('language')
], AtomicSearchInterface.prototype, "updateLanguage", null);
__decorate([
    watch('iconAssetsPath')
], AtomicSearchInterface.prototype, "updateIconAssetsPath", null);
__decorate([
    errorGuard()
], AtomicSearchInterface.prototype, "render", null);
AtomicSearchInterface = __decorate([
    t('atomic-search-interface'),
    withTailwindStyles
], AtomicSearchInterface);
export { AtomicSearchInterface };
//# sourceMappingURL=atomic-search-interface-C0dqIZVA.js.map
