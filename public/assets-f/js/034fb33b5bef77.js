import { buildRecentQueriesList } from '/headless/v3.45.1/headless.esm.js';
import { i, E, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { S as SafeStorage, a as StorageItems } from './local-storage-utils-D2gY2DIg.js';
import { o as once } from './utils-tjiSYtV8.js';
import { g as getPartialRecentQueryClearElement, r as renderRecentQueryClear, a as getPartialRecentQueryElement, b as renderRecentQuery } from './recent-queries-CkDnNcgm.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-events-CDJMFGDZ.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
import './purify.es-BkIzpzFh.js';
import './atomic-icon-D7DRsDUP.js';
import './directive-C5w180XZ.js';
import './unsafe-html-Deeupm6Y.js';
import './binding-guard-BU6auXaS.js';
import './watch-CV_JtHFl.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './event-utils-Xyk7tlQy.js';
import './init-queue-BrIDKWA1.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './when-BzW5QVN4.js';
import './string-utils-wMMP9nsD.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Clock = "<svg fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-linecap=\"round\"  viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"7.5\"/><path d=\"m8.5 4.5v4\"/><path d=\"m10.3066 10.1387-1.80932-1.5768\"/></svg>";
/**
 * The `atomic-search-box-recent-queries` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of recent query suggestions.
 */
let AtomicSearchBoxRecentQueries = class AtomicSearchBoxRecentQueries extends i {
    constructor() {
        super(...arguments);
        /**
         * The maximum number of suggestions to display when the user types in the input field.
         */
        this.maxWithQuery = 3;
        this.warnUser = once(() => this.bindings.engine.logger.warn('The recent queries feature is deactivated because analytics are disabled.'));
    }
    connectedCallback() {
        super.connectedCallback();
        try {
            dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this, ['atomic-search-box']);
        }
        catch (error) {
            this.error = error;
        }
    }
    initialize() {
        this.storage = new SafeStorage();
        this.recentQueriesList = buildRecentQueriesList(this.bindings.engine, {
            initialState: { queries: this.retrieveLocalStorage() },
            options: {
                maxLength: 1000,
                clearFilters: this.bindings.clearFilters,
            },
        });
        this.recentQueriesList.subscribe(() => this.updateLocalStorage());
        return {
            position: Array.from(this.parentNode.children).indexOf(this),
            renderItems: () => this.renderItems(),
        };
    }
    retrieveLocalStorage() {
        return this.storage.getParsedJSON(StorageItems.RECENT_QUERIES, []);
    }
    updateLocalStorage() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return this.disableFeature();
        }
        return this.storage.setJSON(StorageItems.RECENT_QUERIES, this.recentQueriesList.state.queries);
    }
    disableFeature() {
        this.warnUser();
        this.storage.removeItem(StorageItems.RECENT_QUERIES);
    }
    renderItems() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return [];
        }
        const query = this.bindings.searchBoxController.state.value;
        const hasQuery = query !== '';
        const max = hasQuery ? this.maxWithQuery : this.maxWithoutQuery;
        const filteredQueries = this.recentQueriesList.state.queries
            .filter((recentQuery) => recentQuery.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, max);
        const suggestionElements = filteredQueries.map((value) => this.renderItem(value));
        if (suggestionElements.length) {
            suggestionElements.unshift(this.renderClear());
        }
        return suggestionElements;
    }
    renderClear() {
        const partialItem = getPartialRecentQueryClearElement(this.bindings.i18n);
        return {
            ...partialItem,
            content: renderRecentQueryClear({ i18n: this.bindings.i18n }),
            onSelect: () => {
                this.recentQueriesList.clear();
                this.bindings.triggerSuggestions();
            },
        };
    }
    renderItem(value) {
        const query = this.bindings.searchBoxController.state.value;
        const partialItem = getPartialRecentQueryElement(value, this.bindings.i18n);
        return {
            ...partialItem,
            content: renderRecentQuery({
                icon: this.icon || Clock,
                query,
                value,
            }),
            onSelect: () => {
                if (this.bindings.isStandalone) {
                    this.bindings.searchBoxController.updateText(value);
                    this.bindings.searchBoxController.submit();
                    return;
                }
                this.recentQueriesList.executeRecentQuery(this.recentQueriesList.state.queries.indexOf(value));
            },
        };
    }
    render() {
        return E;
    }
};
__decorate([
    r()
], AtomicSearchBoxRecentQueries.prototype, "error", void 0);
__decorate([
    n()
], AtomicSearchBoxRecentQueries.prototype, "icon", void 0);
__decorate([
    n({ type: Number, attribute: 'max-with-query', reflect: true })
], AtomicSearchBoxRecentQueries.prototype, "maxWithQuery", void 0);
__decorate([
    n({ type: Number, attribute: 'max-without-query', reflect: true })
], AtomicSearchBoxRecentQueries.prototype, "maxWithoutQuery", void 0);
__decorate([
    errorGuard()
], AtomicSearchBoxRecentQueries.prototype, "render", null);
AtomicSearchBoxRecentQueries = __decorate([
    t('atomic-search-box-recent-queries')
], AtomicSearchBoxRecentQueries);
export { AtomicSearchBoxRecentQueries };
//# sourceMappingURL=atomic-search-box-recent-queries-C1dxKWrr.js.map
