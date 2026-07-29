import { loadQuerySuggestActions } from '/headless/v3.45.1/headless.esm.js';
import { i, E, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { g as getPartialSearchBoxSuggestionElement, r as renderQuerySuggestion } from './query-suggestions-aUelYD-9.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-events-CDJMFGDZ.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import './atomic-icon-D7DRsDUP.js';
import './purify.es-BkIzpzFh.js';
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
import './string-utils-wMMP9nsD.js';
import './atomic-component-error-CzI0_SHn.js';
import './with-tailwind-styles-Bq60NaNW.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const SearchIcon = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z\"/></svg>";
/**
 * The `atomic-search-box-query-suggestions` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of query suggestion behavior.
 */
let AtomicSearchBoxQuerySuggestions = class AtomicSearchBoxQuerySuggestions extends i {
    connectedCallback() {
        try {
            super.connectedCallback();
        }
        catch (error) {
            this.error = error;
            return;
        }
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
        const engine = this.bindings.engine;
        const { registerQuerySuggest, fetchQuerySuggestions } = loadQuerySuggestActions(engine);
        const numberOfQueries = this.bindings.numberOfQueries;
        const maxWithQuery = this.maxWithQuery;
        if (maxWithQuery !== undefined && numberOfQueries < maxWithQuery) {
            const logger = this.bindings.engine.logger;
            logger.warn(`Query suggestions config mismatch: number-of-queries (${numberOfQueries}) < max-with-query (${maxWithQuery}). Update one to match the other.`);
        }
        engine.dispatch(registerQuerySuggest({
            id: this.bindings.id,
            count: this.bindings.numberOfQueries,
        }));
        return {
            position: Array.from(this.parentNode.children).indexOf(this),
            onInput: () => engine.dispatch(fetchQuerySuggestions({
                id: this.bindings.id,
            })),
            renderItems: () => this.renderItems(),
        };
    }
    renderItems() {
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const max = hasQuery ? this.maxWithQuery : this.maxWithoutQuery;
        return this.bindings.searchBoxController.state.suggestions
            .slice(0, max)
            .map((suggestion) => this.renderItem(suggestion));
    }
    renderItem(suggestion) {
        const partialItem = getPartialSearchBoxSuggestionElement(suggestion, this.bindings.i18n);
        const icon = this.icon ? this.icon : SearchIcon;
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const hasMultipleKindOfSuggestions = this.bindings.getSuggestions().length > 1;
        return {
            ...partialItem,
            content: renderQuerySuggestion({
                icon,
                hasQuery,
                suggestion,
                hasMultipleKindOfSuggestions,
            }),
            onSelect: () => {
                this.bindings.searchBoxController.selectSuggestion(suggestion.rawValue);
            },
        };
    }
    render() {
        return E;
    }
};
__decorate([
    r()
], AtomicSearchBoxQuerySuggestions.prototype, "error", void 0);
__decorate([
    n()
], AtomicSearchBoxQuerySuggestions.prototype, "icon", void 0);
__decorate([
    n({ type: Number, attribute: 'max-with-query', reflect: true })
], AtomicSearchBoxQuerySuggestions.prototype, "maxWithQuery", void 0);
__decorate([
    n({ type: Number, attribute: 'max-without-query', reflect: true })
], AtomicSearchBoxQuerySuggestions.prototype, "maxWithoutQuery", void 0);
__decorate([
    errorGuard()
], AtomicSearchBoxQuerySuggestions.prototype, "render", null);
AtomicSearchBoxQuerySuggestions = __decorate([
    t('atomic-search-box-query-suggestions')
], AtomicSearchBoxQuerySuggestions);
export { AtomicSearchBoxQuerySuggestions };
//# sourceMappingURL=atomic-search-box-query-suggestions-CJiQ-6Q2.js.map
