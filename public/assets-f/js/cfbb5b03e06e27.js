import { isNullOrUndefined } from '/bueno/v1.1.7/bueno.esm.js';
import { buildStandaloneSearchBox, buildSearchBox } from '/headless/v3.45.1/headless.esm.js';
import { i, x, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { e as e$1 } from './class-map-Bnlx5e07.js';
import { e, n } from './ref-Ci0gDEiU.js';
import { S as SuggestionManager, i as isMacOS, h as hasKeyboard, e as elementHasQuery, r as renderSearchBoxTextArea, a as renderSearchBoxWrapper } from './atomic-suggestion-renderer-_RUnSAfi.js';
import { r as renderSubmitButton } from './submit-button-Bovdh-gf.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as watch } from './watch-CV_JtHFl.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { A as AriaLiveRegionController } from './accessibility-utils-BHnCpu87.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
import { S as SafeStorage, a as StorageItems } from './local-storage-utils-D2gY2DIg.js';
import { u as updateBreakpoints } from './replace-breakpoint-utils--qEQDWxF.js';
import { g as getDefaultSlotContent } from './slot-utils-DwFSOZ_l.js';
import { o as once, r as randomID, s as spreadProperties, i as isFocusingOut } from './utils-tjiSYtV8.js';
import './atomic-search-box-query-suggestions-CJiQ-6Q2.js';
import './atomic-search-box-recent-queries-C1dxKWrr.js';
import './directive-C5w180XZ.js';
import './directive-helpers-Dh62B6an.js';
import './multi-class-map-BELXGnQY.js';
import './if-defined-CwDhfVxy.js';
import './when-BzW5QVN4.js';
import './atomic-icon-D7DRsDUP.js';
import './purify.es-BkIzpzFh.js';
import './unsafe-html-Deeupm6Y.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './button-DE0Kx0NV.js';
import './ripple-utils-DMduLOet.js';
import './button-style-DV1FJlx9.js';
import './debounce-utils-D96OSgvX.js';
import './index-DRai3PWs.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './query-suggestions-aUelYD-9.js';
import './string-utils-wMMP9nsD.js';
import './suggestions-events-CDJMFGDZ.js';
import './recent-queries-CkDnNcgm.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-search-box` component creates a search box with built-in support for suggestions.
 *
 * @slot default - The default slot where you can add child components to the search box.
 *
 * @part wrapper - The search box wrapper.
 * @part input - The search box input.
 * @part loading - The search box loading animation.
 * @part clear-button - The button to clear the search box of input.
 * @part clear-icon - The clear button's icon.
 * @part submit-button - The search box submit button.
 * @part submit-icon - The search box submit button's icon.
 * @part suggestions - A list of suggested query corrections on each panel.
 * @part suggestions-left - A list of suggested query corrections on the left panel.
 * @part suggestions-right - A list of suggested query corrections on the right panel.
 * @part suggestions-wrapper - The wrapper that contains suggestion panels.
 * @part suggestions-single-list - The wrapper that contains 1 suggestion list.
 * @part suggestions-double-list - The wrapper that contains 2 suggestion lists.
 * @part suggestion - A suggested query correction.
 * @part active-suggestion - The currently active suggestion.
 * @part suggestion-divider - An item in the list that separates groups of suggestions.
 * @part suggestion-with-query - An item in the list that will update the search box query.
 *
 * @part query-suggestion-item - A suggestion from the `atomic-search-box-query-suggestions` component.
 * @part query-suggestion-content - The contents of a suggestion from the `atomic-search-box-query-suggestions` component.
 * @part query-suggestion-icon - The icon of a suggestion from the `atomic-search-box-query-suggestions` component.
 * @part query-suggestion-text - The text of a suggestion from the `atomic-search-box-query-suggestions` component.
 *
 * @part recent-query-item - A suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-content - The contents of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-icon - The icon of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-text - The text of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-text-highlight - The highlighted portion of the text of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-title-item - The clear button above suggestions from the `atomic-search-box-recent-queries` component.
 * @part recent-query-title-content - The contents of the clear button above suggestions from the `atomic-search-box-recent-queries` component.
 * @part recent-query-title - The "recent searches" text of the clear button above suggestions from the `atomic-search-box-recent-queries` component.
 * @part recent-query-clear - The "clear" text of the clear button above suggestions from the `atomic-search-box-recent-queries` component.
 *
 * @part instant-results-item - An instant result rendered by an `atomic-search-box-instant-results` component.
 * @part instant-results-show-all - The clickable suggestion to show all items for the current instant results search rendered by an `atomic-search-box-instant-results` component.
 * @part instant-results-show-all-button - The button inside the clickable suggestion from the `atomic-search-box-instant-results` component.
 *
 * @event redirect - Event that is emitted when a standalone search box redirection is triggered. By default, the search box will directly change the URL and redirect accordingly, so if you want to handle the redirection differently, use this event.
 */
let AtomicSearchBox = class AtomicSearchBox extends i {
    constructor() {
        super(...arguments);
        this.isExpanded = false;
        this.textAreaRef = e();
        this.searchBoxSuggestionEventsQueue = [];
        this.searchBoxAriaMessage = new AriaLiveRegionController(this, 'search-box');
        this.suggestionsAriaMessage = new AriaLiveRegionController(this, 'search-suggestions', true);
        /**
         * The amount of queries displayed when the user interacts with the search box.
         * By default, a mix of query suggestions and recent queries will be shown.
         * You can configure those settings using the following components as children:
         *  - atomic-search-box-query-suggestions
         *  - atomic-search-box-recent-queries
         */
        this.numberOfQueries = 8;
        /**
         * The timeout for suggestion queries, in milliseconds.
         * If a suggestion query times out, the suggestions from that particular query won't be shown.
         */
        this.suggestionTimeout = 400;
        /**
         * The delay for suggestion queries on input, in milliseconds.
         *
         * The suggestion request will be delayed until the end user stops typing for at least the specified amount of time.
         *
         * This delay is used to avoid sending too many requests to the Coveo Platform when the user is typing, as well as reducing potential input lag on low end devices.
         * A higher delay will reduce input lag, at the cost of suggestions freshness.
         */
        this.suggestionDelay = 0;
        /**
         * Whether to prevent the user from triggering searches and query suggestions from the component.
         * Perfect for use cases where you need to disable the search conditionally.
         * For the specific case when you need to disable the search based on the length of the query, refer to {@link minimumQueryLength}.
         */
        this.disableSearch = false;
        /**
         * The minimum query length required to enable search.
         * For example, to disable the search for empty queries, set this to `1`.
         */
        this.minimumQueryLength = 0;
        /**
         * Whether to clear all active query filters when the end user submits a new query from the search box.
         * Setting this option to "false" is not recommended and can lead to an increasing number of queries returning no results.
         */
        this.clearFilters = true;
        /**
         * Whether to interpret advanced [Coveo query syntax](https://docs.coveo.com/en/1552/) in the query.
         * You should only enable query syntax in the search box if you have good reasons to do so, as it
         * requires end users to be familiar with Coveo query syntax, otherwise they will likely be surprised
         * by the search box behaviour.
         *
         * When the `redirection-url` property is set and redirects to a page with more `atomic-search-box` components, all `atomic-search-box` components need to have the same `enable-query-syntax` value.
         */
        this.enableQuerySyntax = false;
        this.updateBreakpoints = once(() => updateBreakpoints(this));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('atomic/searchBoxSuggestion/register', (event) => {
            const customEvent = event;
            if (!this.bindings) {
                this.searchBoxSuggestionEventsQueue.push(customEvent);
            }
            else {
                this.suggestionManager.registerSuggestionsFromEvent(customEvent, this.suggestionBindings);
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    willUpdate() {
        if (!this.searchBoxState || !this.searchBox) {
            return;
        }
        if (!('redirectTo' in this.searchBoxState) ||
            !('afterRedirection' in this.searchBox)) {
            return;
        }
        const { redirectTo, value, analytics } = this.searchBoxState;
        if (redirectTo === '') {
            return;
        }
        const data = {
            value,
            enableQuerySyntax: this.enableQuerySyntax,
            analytics,
        };
        const storage = new SafeStorage();
        storage.setJSON(StorageItems.STANDALONE_SEARCH_BOX_DATA, data);
        this.searchBox.afterRedirection();
        const event = buildCustomEvent('redirect', {
            redirectTo,
            value,
        });
        this.dispatchEvent(event);
        if (!event.defaultPrevented) {
            window.location.href = redirectTo;
        }
    }
    initialize() {
        this.id = randomID('atomic-search-box-');
        this.initializeSearchboxController();
        this.initializeSuggestionManager();
    }
    initializeSearchboxController() {
        this.searchBox = this.redirectionUrl
            ? buildStandaloneSearchBox(this.bindings.engine, {
                options: {
                    ...this.searchBoxOptions,
                    redirectionUrl: this.redirectionUrl,
                    overwrite: true,
                },
            })
            : buildSearchBox(this.bindings.engine, {
                options: this.searchBoxOptions,
            });
    }
    initializeSuggestionManager() {
        if (this.suggestionManager) {
            return;
        }
        this.suggestionManager = new SuggestionManager({
            getNumberOfSuggestionsToDisplay: () => this.numberOfQueries,
            updateQuery: (query) => this.searchBox.updateText(query),
            getSearchBoxValue: () => this.searchBoxState.value,
            getSuggestionTimeout: () => this.suggestionTimeout,
            getSuggestionDelay: () => this.suggestionDelay,
            getHost: () => this,
            getLogger: () => this.bindings.engine.logger,
        });
        this.suggestionManager.initializeSuggestions(this.suggestionBindings);
    }
    watchRedirectionUrl() {
        if (!this.searchBox) {
            return;
        }
        if (this.isStandaloneSearchBox(this.searchBox) && this.redirectionUrl) {
            this.searchBox.updateRedirectUrl(this.redirectionUrl);
        }
        else {
            this.registerNewSearchBoxController();
        }
    }
    isStandaloneSearchBox(searchBox) {
        return 'redirectTo' in searchBox;
    }
    get isSearchDisabledForEndUser() {
        const queryValue = this.searchBoxState?.value;
        if (isNullOrUndefined(queryValue)) {
            return this.disableSearch;
        }
        if (queryValue.trim().length < this.minimumQueryLength) {
            return true;
        }
        return this.disableSearch;
    }
    get textAreaLabel() {
        if (this.isSearchDisabledForEndUser) {
            return this.bindings.i18n.t('search-disabled', {
                length: this.minimumQueryLength,
            });
        }
        if (isMacOS()) {
            return this.bindings.i18n.t('search-box-with-suggestions-macos');
        }
        if (!hasKeyboard()) {
            return this.bindings.i18n.t('search-box-with-suggestions-keyboardless');
        }
        return this.bindings.i18n.t('search-box-with-suggestions');
    }
    get suggestionBindings() {
        return spreadProperties(this.bindings, this.suggestionManager.partialSuggestionBindings, this.partialSuggestionBindings);
    }
    get partialSuggestionBindings() {
        return Object.defineProperties({ ...this.bindings }, {
            id: {
                get: () => this.id,
                enumerable: true,
            },
            searchBoxController: {
                get: () => this.searchBox,
                enumerable: true,
            },
            isStandalone: {
                get: () => !!this.redirectionUrl,
                enumerable: true,
            },
            numberOfQueries: {
                get: () => this.numberOfQueries,
                enumerable: true,
            },
            clearFilters: {
                get: () => this.clearFilters,
                enumerable: true,
            },
        });
    }
    get searchBoxOptions() {
        return {
            id: this.id,
            numberOfSuggestions: 0,
            highlightOptions: {
                notMatchDelimiters: {
                    open: '<span class="font-bold">',
                    close: '</span>',
                },
                correctionDelimiters: {
                    open: '<span class="font-normal">',
                    close: '</span>',
                },
            },
            clearFilters: this.clearFilters,
            enableQuerySyntax: this.enableQuerySyntax,
        };
    }
    registerNewSearchBoxController() {
        this.disconnectedCallback();
        this.initialize();
    }
    registerSearchboxSuggestionEvents() {
        this.searchBoxSuggestionEventsQueue.forEach((evt) => {
            this.suggestionManager.registerSuggestionsFromEvent(evt, this.suggestionBindings);
        });
        this.searchBoxSuggestionEventsQueue = [];
    }
    async onInput(value) {
        this.searchBox.updateText(value);
        if (this.isSearchDisabledForEndUser) {
            this.suggestionManager.clearSuggestions();
            return;
        }
        this.isExpanded = true;
        await this.suggestionManager.triggerSuggestions();
        this.announceNewSuggestionsToScreenReader();
    }
    async onFocus() {
        if (this.isExpanded) {
            return;
        }
        if (this.isSearchDisabledForEndUser) {
            return;
        }
        this.isExpanded = true;
        await this.suggestionManager.triggerSuggestions();
        this.announceNewSuggestionsToScreenReader();
    }
    onSubmit() {
        this.isExpanded = false;
        if (this.suggestionManager.keyboardActiveDescendant) {
            this.suggestionManager.onSubmit();
            return;
        }
        this.searchBox.submit();
    }
    async onKeyDown(e) {
        if (this.isSearchDisabledForEndUser) {
            return;
        }
        switch (e.key) {
            case 'Enter':
                this.onSubmit();
                break;
            case 'Escape':
                this.suggestionManager.clearSuggestions();
                break;
            case 'ArrowDown':
                e.preventDefault();
                await this.suggestionManager.focusNextValue();
                this.announceNewActiveSuggestionToScreenReader();
                break;
            case 'ArrowUp':
                e.preventDefault();
                await this.suggestionManager.focusPreviousValue();
                this.announceNewActiveSuggestionToScreenReader();
                break;
            case 'ArrowRight':
                if (this.suggestionManager.hasActiveDescendant ||
                    !this.searchBox.state.value) {
                    e.preventDefault();
                    this.suggestionManager.focusPanel('right');
                    this.announceNewActiveSuggestionToScreenReader();
                }
                break;
            case 'ArrowLeft':
                if (this.suggestionManager.hasActiveDescendant ||
                    !this.searchBox.state.value) {
                    e.preventDefault();
                    this.suggestionManager.focusPanel('left');
                    this.announceNewActiveSuggestionToScreenReader();
                }
                break;
            case 'Tab':
                this.suggestionManager.clearSuggestions();
                break;
            default:
                if (this.suggestionManager.keyboardActiveDescendant) {
                    this.suggestionManager.updateKeyboardActiveDescendant();
                }
                break;
        }
    }
    triggerTextAreaChange(value) {
        this.textAreaRef.value.value = value;
        this.textAreaRef.value.dispatchEvent(new window.Event('change'));
    }
    announceNewActiveSuggestionToScreenReader() {
        const ariaLabel = this.suggestionManager.activeDescendantElement?.ariaLabel;
        if (isMacOS() && ariaLabel) {
            this.suggestionsAriaMessage.message = ariaLabel;
        }
    }
    announceNewSuggestionsToScreenReader() {
        const elsLength = this.suggestionManager.allSuggestionElements.filter(elementHasQuery).length;
        this.searchBoxAriaMessage.message = elsLength
            ? this.bindings.i18n.t(this.searchBoxState.value
                ? 'query-suggestions-available'
                : 'query-suggestions-available-no-query', {
                count: elsLength,
                query: this.searchBoxState.value,
            })
            : this.bindings.i18n.t('query-suggestions-unavailable');
    }
    announceClearSearchBoxToScreenReader() {
        this.searchBoxAriaMessage.message =
            this.bindings.i18n.t('search-box-cleared');
    }
    renderAbsolutePositionSpacer() {
        return x `<textarea
      aria-hidden="true"
      part="textarea-spacer"
      class="invisible w-full px-4 py-3.5 text-lg"
      rows="1"
    ></textarea>`;
    }
    renderTextBox() {
        return x `${renderSearchBoxTextArea({
            props: {
                textAreaRef: this.textAreaRef,
                loading: this.searchBoxState.isLoading,
                i18n: this.bindings.i18n,
                value: this.searchBoxState.value,
                title: this.textAreaLabel,
                ariaLabel: this.textAreaLabel,
                onFocus: () => this.onFocus(),
                onInput: (e) => this.onInput(e.target.value),
                onKeyDown: (e) => this.onKeyDown(e),
                onClear: () => {
                    this.searchBox.clear();
                    this.suggestionManager.clearSuggestions();
                    this.triggerTextAreaChange('');
                    this.announceClearSearchBoxToScreenReader();
                },
                popup: {
                    id: `${this.id}-popup`,
                    activeDescendant: this.suggestionManager.activeDescendant,
                    expanded: this.isExpanded,
                    hasSuggestions: this.suggestionManager.hasSuggestions,
                },
            },
        })}`;
    }
    renderSuggestions() {
        const part = `suggestions-wrapper ${this.suggestionManager.isDoubleList
            ? 'suggestions-double-list'
            : 'suggestions-single-list'}`;
        const isVisible = this.suggestionManager.hasSuggestions &&
            this.isExpanded &&
            !this.isSearchDisabledForEndUser;
        const classes = {
            'bg-background border-neutral absolute top-full left-0 z-10 flex w-full rounded-md border': true,
            hidden: !isVisible,
        };
        return x `<div
      id="${this.id}-popup"
      part=${part}
      class=${e$1(classes)}
      role="application"
      aria-label=${this.bindings.i18n.t(this.suggestionManager.isDoubleList
            ? 'search-suggestions-double-list'
            : 'search-suggestions-single-list')}
      aria-activedescendant=${this.suggestionManager.activeDescendant}
    >
      ${this.renderPanel('left', this.suggestionManager.leftSuggestionElements, (el) => {
            this.suggestionManager.leftPanel = el;
        }, () => this.suggestionManager.leftPanel)}
      ${this.renderPanel('right', this.suggestionManager.rightSuggestionElements, (el) => {
            this.suggestionManager.rightPanel = el;
        }, () => this.suggestionManager.rightPanel)}
    </div>`;
    }
    renderPanel(side, elements, setRef, getRef) {
        if (!elements.length) {
            return null;
        }
        return x `<div
      part="suggestions suggestions-${side}"
      ${n(setRef)}
      class="flex grow basis-1/2 flex-col"
      @mousedown=${(e) => {
            if (e.target === getRef()) {
                e.preventDefault();
            }
        }}
    >
      ${elements.map((suggestion, index) => this.renderSuggestion(suggestion, index, elements.length - 1, side))}
    </div>`;
    }
    renderSuggestion(item, index, lastIndex, side) {
        const id = `${this.id}-${side}-suggestion-${item.key}`;
        const isSelected = id === this.suggestionManager.activeDescendant;
        if (index === lastIndex && item.hideIfLast) {
            return null;
        }
        return x `
      <atomic-suggestion-renderer
        .i18n=${this.bindings.i18n}
        .id=${id}
        .suggestion=${item}
        .isSelected=${isSelected}
        .side=${side}
        .index=${index}
        .lastIndex=${lastIndex}
        .isDoubleList=${this.suggestionManager.isDoubleList}
        .onClick=${async (e) => {
            await this.suggestionManager.onSuggestionClick(item, e);
            if (item.key === 'recent-query-clear') {
                return;
            }
            this.isExpanded = false;
        }}
        .onMouseEnter=${async () => {
            await this.suggestionManager.onSuggestionMouseOver(item, side, id);
        }}
      ></atomic-suggestion-renderer>
    `;
    }
    renderSlotContent() {
        const hasDefaultSlot = getDefaultSlotContent(this).length > 0;
        if (hasDefaultSlot) {
            return x `<slot></slot>`;
        }
        return x `<atomic-search-box-recent-queries></atomic-search-box-recent-queries>
      <atomic-search-box-query-suggestions></atomic-search-box-query-suggestions>`;
    }
    render() {
        this.updateBreakpoints();
        if (!this.suggestionManager.suggestions.length) {
            this.registerSearchboxSuggestionEvents();
        }
        return x `
      ${this.renderAbsolutePositionSpacer()}
      ${renderSearchBoxWrapper({
            props: {
                disabled: this.isSearchDisabledForEndUser,
                onFocusout: (event) => {
                    if (!isFocusingOut(event)) {
                        return;
                    }
                    this.suggestionManager.clearSuggestions();
                    this.isExpanded = false;
                },
            },
        })(x `${this.renderTextBox()}
      ${renderSubmitButton({
            props: {
                i18n: this.bindings.i18n,
                disabled: this.isSearchDisabledForEndUser,
                onClick: () => {
                    this.searchBox.submit();
                    this.suggestionManager.clearSuggestions();
                },
            },
        })}
      ${this.renderSuggestions()}`)}
      ${this.renderSlotContent()}
    `;
    }
};
AtomicSearchBox.styles = i$1`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties;@layer properties{*,::backdrop,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:""}}@layer theme, base, components, utilities;@layer theme;@layer base{*,::backdrop,::file-selector-button,:after,:before{border:0 solid;box-sizing:border-box;margin:0;padding:0}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:var(--default-font-family,var(--atomic-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"));font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);tab-size:4;-webkit-tap-highlight-color:transparent}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-size:1em;font-variation-settings:var(--default-mono-font-variation-settings,normal)}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}menu,ol,ul{list-style:none}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}::file-selector-button,button,input,optgroup,select,textarea{background-color:transparent;border-radius:0;color:inherit;font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}::file-selector-button,button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.\\@container{container-type:inline-size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{border-width:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:0}.-top-2{top:-.5rem}.-top-4{top:-1rem}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-6{top:1.5rem}.top-\\[4px\\]{top:4px}.top-full{top:100%}.top-px{top:1px}.-right-2{right:-.5rem}.right-0{right:0}.right-1{right:.25rem}.right-2{right:.5rem}.right-6{right:1.5rem}.right-12{right:3rem}.right-20{right:5rem}.right-px{right:1px}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-2{bottom:.5rem}.bottom-px{bottom:1px}.left-0{left:0}.left-1{left:.25rem}.left-2{left:.5rem}.left-\\[15px\\]{left:15px}.isolate{isolation:isolate}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-9998{z-index:9998}.z-9999{z-index:9999}.order-last{order:9999}.col-span-2{grid-column:span 2/span 2}.container{width:100%;@media (width >= 1024px){max-width:1024px}@media (width >= 40rem){max-width:40rem}@media (width >= 48rem){max-width:48rem}@media (width >= 64rem){max-width:64rem}@media (width >= 80rem){max-width:80rem}@media (width >= 96rem){max-width:96rem}}.container\\!{width:100%!important;@media (width >= 1024px){max-width:1024px!important}@media (width >= 40rem){max-width:40rem!important}@media (width >= 48rem){max-width:48rem!important}@media (width >= 64rem){max-width:64rem!important}@media (width >= 80rem){max-width:80rem!important}@media (width >= 96rem){max-width:96rem!important}}.m-0{margin:0}.m-2{margin:.5rem}.mx-0{margin-inline:0}.mx-0\\.5{margin-inline:.125rem}.mx-1{margin-inline:.25rem}.mx-6{margin-inline:1.5rem}.mx-16{margin-inline:4rem}.mx-auto{margin-inline:auto}.my-2{margin-block:.5rem}.my-3{margin-block:.75rem}.my-4{margin-block:1rem}.my-6{margin-block:1.5rem}.my-auto{margin-block:auto}.mt-0{margin-top:0}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-10{margin-top:2.5rem}.mt-px{margin-top:1px}.mr-0{margin-right:0}.mr-0\\.5{margin-right:.125rem}.mr-1{margin-right:.25rem}.mr-1\\.5{margin-right:.375rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-6{margin-right:1.5rem}.mr-auto{margin-right:auto}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-0\\.5{margin-left:.125rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-6{margin-left:1.5rem}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.line-clamp-1{-webkit-line-clamp:1}.line-clamp-1,.line-clamp-2{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}.line-clamp-2{-webkit-line-clamp:2}.line-clamp-3{-webkit-line-clamp:3}.line-clamp-3,.line-clamp-4{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}.line-clamp-4{-webkit-line-clamp:4}.line-clamp-none{display:block;overflow:visible;-webkit-box-orient:horizontal;-webkit-line-clamp:unset}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.table-column{display:table-column}.aspect-square-\\[auto\\]{@supports not (aspect-ratio:1/1){height:auto}}.aspect-square-\\[auto\\]{aspect-ratio:1/1;height:auto;@supports not (aspect-ratio:1/1){height:auto}}.aspect-square{aspect-ratio:1/1}.size-\\[27px\\]{height:27px;width:27px}.h-1{height:.25rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-5\\/6{height:83.33333%}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-\\[9px\\]{height:9px}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-96{max-height:24rem}.min-h-3{min-height:.75rem}.min-h-10{min-height:2.5rem}.min-lines-2{min-height:calc(var(--line-height)*2)}.min-lines-3{min-height:calc(var(--line-height)*3)}.w-0\\.5{width:.125rem}.w-1{width:.25rem}.w-1\\/2{width:50%}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-3\\/5{width:60%}.w-4{width:1rem}.w-5{width:1.25rem}.w-5\\/6{width:83.33333%}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-20{width:5rem}.w-26{width:6.5rem}.w-28{width:7rem}.w-32{width:8rem}.w-36{width:9rem}.w-48{width:12rem}.w-60{width:15rem}.w-64{width:16rem}.w-72{width:18rem}.w-100{width:25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-\\[10px\\]{width:10px}.w-auto{width:auto}.w-fit{width:fit-content}.w-full{width:100%}.w-max{width:max-content}.w-px{width:1px}.max-w-4\\/5{max-width:80%}.max-w-60{max-width:15rem}.max-w-\\[30ch\\]{max-width:30ch}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:max-content}.min-w-0{min-width:0}.min-w-10{min-width:2.5rem}.min-w-20{min-width:5rem}.min-w-24{min-width:6rem}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-none{flex:none}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.translate-x-1\\/2{translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x:50%}.-translate-y-1\\/2{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-75{--tw-scale-x:75%;--tw-scale-y:75%;--tw-scale-z:75%}.scale-100,.scale-75{scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-spin{animation:spin 1s linear infinite}.cursor-\\[inherit\\]{cursor:inherit}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.list-outside{list-style-position:outside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.appearance-none{appearance:none}.grid-cols-\\[min-content_1fr\\]{grid-template-columns:min-content 1fr}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.content-center{align-content:center}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.space-y-1{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(.25rem*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(.25rem*var(--tw-space-y-reverse))}}.gap-x-1\\.5{column-gap:.375rem}.gap-x-2{column-gap:.5rem}.gap-x-4{column-gap:1rem}.space-x-1\\.5{:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(.375rem*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(.375rem*var(--tw-space-x-reverse))}}.gap-y-0\\.5{row-gap:.125rem}.divide-y{:where(&>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-bottom-width:calc(1px*(1 - var(--tw-divide-y-reverse)));border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse))}}.divide-neutral{:where(&>:not(:last-child)){border-color:var(--atomic-neutral)}}.self-center{align-self:center}.self-start{align-self:flex-start}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-x-scroll{overflow-x:scroll}.overflow-y-auto{overflow-y:auto}.scroll-smooth{scroll-behavior:smooth}.rounded{border-radius:var(--atomic-border-radius)}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:calc(infinity*1px)}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--atomic-border-radius)}.rounded-xl{border-radius:var(--atomic-border-radius-xl)}.rounded-tl-none{border-top-left-radius:0}.rounded-r-none{border-bottom-right-radius:0;border-top-right-radius:0}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b,.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-solid{--tw-border-style:solid;border-style:solid}.border-gray-200{border-color:oklch(.928 .006 264.531)}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-neutral-dim{border-color:var(--atomic-neutral-dim)}.border-primary{border-color:var(--atomic-primary)}.border-primary-light{border-color:var(--atomic-primary-light)}.border-t-neutral{border-top-color:var(--atomic-neutral)}.border-b-neutral{border-bottom-color:var(--atomic-neutral)}.border-b-neutral-dim{border-bottom-color:var(--atomic-neutral-dim)}.border-l-neutral{border-left-color:var(--atomic-neutral)}.border-l-neutral-dim{border-left-color:var(--atomic-neutral-dim)}.bg-\\[\\#F1F2FF\\]{background-color:#f1f2ff}.bg-\\[rgba\\(40\\,40\\,40\\,0\\.8\\)\\]{background-color:rgba(40,40,40,.8)}.bg-background{background-color:var(--atomic-background)}.bg-error{background-color:var(--atomic-error)}.bg-gray-50{background-color:oklch(.985 .002 247.839)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-dim{background-color:var(--atomic-neutral-dim)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-primary-background{background-color:var(--atomic-primary-background)}.bg-transparent{background-color:transparent}.bg-white{background-color:#fff}.bg-linear-to-l{--tw-gradient-position:to left;@supports (background-image:linear-gradient(in lab,red,red)){--tw-gradient-position:to left in oklab}background-image:linear-gradient(var(--tw-gradient-stops))}.bg-linear-to-r{--tw-gradient-position:to right;@supports (background-image:linear-gradient(in lab,red,red)){--tw-gradient-position:to right in oklab}background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-background\\/60{--tw-gradient-from:color-mix(in srgb,#fff 60%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-from:color-mix(in oklab,var(--atomic-background) 60%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-more-results-progress-bar-color-from{--tw-gradient-from:var(
    --atomic-more-results-progress-bar-color-from,var(--atomic-primary-dark)
  );--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-neutral{--tw-gradient-via:var(--atomic-neutral);--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-via) var(--tw-gradient-via-position),var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-more-results-progress-bar-color-to{--tw-gradient-to:var(
    --atomic-more-results-progress-bar-color-to,var(--atomic-primary-light)
  );--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.fill-current{fill:currentcolor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.object-contain{object-fit:contain}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-3\\.5{padding:.875rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.px-1{padding-inline:.25rem}.px-2{padding-inline:.5rem}.px-2\\.5{padding-inline:.625rem}.px-3{padding-inline:.75rem}.px-4{padding-inline:1rem}.px-6{padding-inline:1.5rem}.px-7{padding-inline:1.75rem}.px-9{padding-inline:2.25rem}.py-0\\.5{padding-block:.125rem}.py-1{padding-block:.25rem}.py-1\\.5{padding-block:.375rem}.py-2{padding-block:.5rem}.py-2\\.5{padding-block:.625rem}.py-3{padding-block:.75rem}.py-3\\.5{padding-block:.875rem}.py-4{padding-block:1rem}.py-4\\.5{padding-block:1.125rem}.py-5{padding-block:1.25rem}.py-6{padding-block:1.5rem}.pt-0\\.5{padding-top:.125rem}.pt-6{padding-top:1.5rem}.pt-8{padding-top:2rem}.pr-2{padding-right:.5rem}.pr-4{padding-right:1rem}.pr-6{padding-right:1.5rem}.pr-8{padding-right:2rem}.pr-24{padding-right:6rem}.pb-1{padding-bottom:.25rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pb-5{padding-bottom:1.25rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0}.pl-1{padding-left:.25rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-7{padding-left:1.75rem}.pl-9{padding-left:2.25rem}.pl-10{padding-left:2.5rem}.text-center{text-align:center}.text-left{text-align:left}.align-baseline{vertical-align:baseline}.align-bottom{vertical-align:bottom}.align-middle{vertical-align:middle}.font-sans{font-family:var(--atomic-font-family)}.set-font-size-sm{--font-size:var(--atomic-text-sm);font-size:var(--font-size);--line-height:calc(var(--font-size)*var(--atomic-line-height-ratio));line-height:var(--line-height)}.text-2xl{font-size:var(--atomic-text-2xl);line-height:var(--tw-leading,1.33333)}.text-base{font-size:var(--atomic-text-base);line-height:var(--tw-leading,1.5)}.text-lg{font-size:var(--atomic-text-lg);line-height:var(--tw-leading,1.55556)}.text-sm{font-size:var(--atomic-text-sm);line-height:var(--tw-leading,1.42857)}.text-xl{font-size:var(--atomic-text-xl);line-height:var(--tw-leading,1.4)}.text-xs{font-size:.75rem;line-height:var(--tw-leading,1.33333)}.text-xs\\/\\[1rem\\]{font-size:.75rem;line-height:1rem}.leading-4{--tw-leading:1rem;line-height:1rem}.leading-5{--tw-leading:1.25rem;line-height:1.25rem}.leading-6{--tw-leading:1.5rem;line-height:1.5rem}.leading-8{--tw-leading:2rem;line-height:2rem}.leading-10{--tw-leading:2.5rem;line-height:2.5rem}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[calc\\(1\\/\\.75\\)\\]{--tw-leading:1.33333;line-height:1.33333}.leading-\\[var\\(--line-height\\)\\]{--tw-leading:var(--line-height);line-height:var(--line-height)}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--atomic-font-bold);font-weight:var(--atomic-font-bold)}.font-light{--tw-font-weight:300;font-weight:300}.font-medium{--tw-font-weight:500;font-weight:500}.font-normal{--tw-font-weight:var(--atomic-font-normal);font-weight:var(--atomic-font-normal)}.font-semibold{--tw-font-weight:600;font-weight:600}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.break-keep{word-break:keep-all}.text-ellipsis{text-overflow:ellipsis}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-\\[\\#54698D\\]{color:#54698d}.text-\\[inherit\\]{color:inherit}.text-black{color:#000}.text-error{color:var(--atomic-error)}.text-gray-500{color:oklch(.551 .027 264.364)}.text-gray-600{color:oklch(.446 .03 256.802)}.text-gray-700{color:oklch(.373 .034 259.733)}.text-gray-900{color:oklch(.21 .034 264.665)}.text-green-600{color:oklch(.627 .194 149.214)}.text-inline-code{color:var(--atomic-inline-code)}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-primary-light{color:var(--atomic-primary-light)}.text-rating-icon-active{color:var(--atomic-rating-icon-active-color,#f6ce3c)}.text-rating-icon-inactive{color:var(
    --atomic-rating-icon-inactive-color,var(--atomic-neutral)
  )}.text-red-600{color:oklch(.577 .245 27.325)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.italic{font-style:italic}.line-through{text-decoration-line:line-through}.placeholder-neutral-dark{&::placeholder{color:var(--atomic-neutral-dark)}}.opacity-0{opacity:0}.opacity-50{opacity:50%}.opacity-60{opacity:60%}.opacity-80{opacity:80%}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow,.shadow-inner-primary{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--tw-shadow-color,var(--atomic-primary))}.shadow-lg{--tw-shadow:0px 2px 8px var(--tw-shadow-color,hsla(180,6%,90%,.75))}.shadow-lg,.shadow-t-lg{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-t-lg{--tw-shadow:0px -2px 8px var(--tw-shadow-color,hsla(180,6%,90%,.75))}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.ring,.ring-3{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-3{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-error{outline-color:var(--atomic-error)}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.blur{--tw-blur:blur(8px)}.blur,.grayscale{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%)}.invert{--tw-invert:invert(100%)}.filter,.invert{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))}.transition-\\[visibility\\]{transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));transition-property:visibility;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))}.transition-all{transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))}.transition-colors{transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))}.transition-opacity{transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)))}.duration-200{--tw-duration:200ms;transition-duration:.2s}.duration-300{--tw-duration:300ms;transition-duration:.3s}.duration-500{--tw-duration:500ms;transition-duration:.5s}.ease-in-out{--tw-ease:cubic-bezier(0.4,0,0.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.\\[grid-area\\:modal\\]{grid-area:modal}.\\[scrollbar-gutter\\:stable_both-edges\\]{scrollbar-gutter:stable both-edges}.group-hover\\:visible{&:is(:where(.group):hover *){@media (hover:hover){visibility:visible}}}.group-hover\\:text-error{&:is(:where(.group):hover *){@media (hover:hover){color:var(--atomic-error)}}}.group-hover\\:text-primary{&:is(:where(.group):hover *){@media (hover:hover){color:var(--atomic-primary)}}}.group-hover\\:text-primary-light{&:is(:where(.group):hover *){@media (hover:hover){color:var(--atomic-primary-light)}}}.group-focus\\:text-primary{&:is(:where(.group):focus *){color:var(--atomic-primary)}}.group-focus\\:text-primary-light{&:is(:where(.group):focus *){color:var(--atomic-primary-light)}}.group-focus-visible\\:text-error{&:is(:where(.group):focus-visible *){color:var(--atomic-error)}}.group-focus-visible\\:text-primary{&:is(:where(.group):focus-visible *){color:var(--atomic-primary)}}.peer-focus-within\\:border-primary-light{&:is(:where(.peer):focus-within~*){border-color:var(--atomic-primary-light)}}.peer-focus-within\\:text-primary-light{&:is(:where(.peer):focus-within~*){color:var(--atomic-primary-light)}}.peer-hover\\:border-primary-light{&:is(:where(.peer):hover~*){@media (hover:hover){border-color:var(--atomic-primary-light)}}}.peer-hover\\:text-error{&:is(:where(.peer):hover~*){@media (hover:hover){color:var(--atomic-error)}}}.peer-hover\\:text-primary-light{&:is(:where(.peer):hover~*){@media (hover:hover){color:var(--atomic-primary-light)}}}.before\\:absolute{&:before{content:var(--tw-content);position:absolute}}.before\\:top-\\[-8px\\]{&:before{content:var(--tw-content);top:-8px}}.before\\:left-0{&:before{content:var(--tw-content);left:0}}.before\\:inline{&:before{content:var(--tw-content);display:inline}}.before\\:h-\\[8px\\]{&:before{content:var(--tw-content);height:8px}}.before\\:w-px{&:before{content:var(--tw-content);width:1px}}.before\\:bg-neutral{&:before{background-color:var(--atomic-neutral);content:var(--tw-content)}}.before\\:content-\\[\\'\\'\\]{&:before{--tw-content:"";content:var(--tw-content)}}.before\\:content-\\[\\'\\,\\\\00a0\\'\\]{&:before{--tw-content:",\\00a0";content:var(--tw-content)}}.after\\:absolute{&:after{content:var(--tw-content);position:absolute}}.after\\:-bottom-0\\.5{&:after{bottom:-.125rem;content:var(--tw-content)}}.after\\:bottom-\\[-8px\\]{&:after{bottom:-8px;content:var(--tw-content)}}.after\\:left-0{&:after{content:var(--tw-content);left:0}}.after\\:block{&:after{content:var(--tw-content);display:block}}.after\\:h-1{&:after{content:var(--tw-content);height:.25rem}}.after\\:h-\\[8px\\]{&:after{content:var(--tw-content);height:8px}}.after\\:w-full{&:after{content:var(--tw-content);width:100%}}.after\\:w-px{&:after{content:var(--tw-content);width:1px}}.after\\:rounded{&:after{border-radius:var(--atomic-border-radius);content:var(--tw-content)}}.after\\:bg-neutral{&:after{background-color:var(--atomic-neutral);content:var(--tw-content)}}.after\\:bg-primary{&:after{background-color:var(--atomic-primary);content:var(--tw-content)}}.after\\:content-\\[\\'\\'\\]{&:after{--tw-content:"";content:var(--tw-content)}}.focus-within\\:border-disabled{&:focus-within{border-color:var(--atomic-disabled)}}.focus-within\\:border-primary{&:focus-within{border-color:var(--atomic-primary)}}.focus-within\\:ring-3{&:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-within\\:ring-neutral{&:focus-within{--tw-ring-color:var(--atomic-neutral)}}.focus-within\\:ring-ring-primary{&:focus-within{--tw-ring-color:var(--atomic-ring-primary)}}.hover\\:border{&:hover{@media (hover:hover){border-bottom-width:1px;border-left-width:1px;border-right-width:1px;border-style:var(--tw-border-style);border-top-width:1px}}}.hover\\:border-error{&:hover{@media (hover:hover){border-color:var(--atomic-error)}}}.hover\\:border-primary-light{&:hover{@media (hover:hover){border-color:var(--atomic-primary-light)}}}.hover\\:bg-error{&:hover{@media (hover:hover){background-color:var(--atomic-error)}}}.hover\\:bg-neutral-light{&:hover{@media (hover:hover){background-color:var(--atomic-neutral-light)}}}.hover\\:bg-primary-light{&:hover{@media (hover:hover){background-color:var(--atomic-primary-light)}}}.hover\\:bg-transparent{&:hover{@media (hover:hover){background-color:transparent}}}.hover\\:fill-white{&:hover{@media (hover:hover){fill:#fff}}}.hover\\:text-error{&:hover{@media (hover:hover){color:var(--atomic-error)}}}.hover\\:text-primary{&:hover{@media (hover:hover){color:var(--atomic-primary)}}}.hover\\:text-primary-light{&:hover{@media (hover:hover){color:var(--atomic-primary-light)}}}.hover\\:text-success{&:hover{@media (hover:hover){color:var(--atomic-success)}}}.hover\\:underline{&:hover{@media (hover:hover){text-decoration-line:underline}}}.hover\\:opacity-100{&:hover{@media (hover:hover){opacity:100%}}}.hover\\:shadow-sm{&:hover{@media (hover:hover){--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}}.focus\\:border-primary{&:focus{border-color:var(--atomic-primary)}}.focus\\:opacity-100{&:focus{opacity:100%}}.focus\\:ring-1{&:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:ring-primary{&:focus{--tw-ring-color:var(--atomic-primary)}}.focus\\:outline-hidden{&:focus{--tw-outline-style:none;outline-style:none;@media (forced-colors:active){outline:2px solid transparent;outline-offset:2px}}}.focus\\:outline-none{&:focus{--tw-outline-style:none;outline-style:none}}.focus-visible\\:border{&:focus-visible{border-style:var(--tw-border-style);border-width:1px}}.focus-visible\\:border-error{&:focus-visible{border-color:var(--atomic-error)}}.focus-visible\\:border-primary{&:focus-visible{border-color:var(--atomic-primary)}}.focus-visible\\:border-primary-light{&:focus-visible{border-color:var(--atomic-primary-light)}}.focus-visible\\:bg-error{&:focus-visible{background-color:var(--atomic-error)}}.focus-visible\\:bg-neutral-light{&:focus-visible{background-color:var(--atomic-neutral-light)}}.focus-visible\\:bg-primary-light{&:focus-visible{background-color:var(--atomic-primary-light)}}.focus-visible\\:text-primary-light{&:focus-visible{color:var(--atomic-primary-light)}}.focus-visible\\:underline{&:focus-visible{text-decoration-line:underline}}.focus-visible\\:ring-2{&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-visible\\:ring-primary{&:focus-visible{--tw-ring-color:var(--atomic-primary)}}.focus-visible\\:ring-offset-2{&:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}}.focus-visible\\:outline-none{&:focus-visible{--tw-outline-style:none;outline-style:none}}.disabled\\:cursor-not-allowed{&:disabled{cursor:not-allowed}}.disabled\\:bg-neutral-light{&:disabled{background-color:var(--atomic-neutral-light)}}.disabled\\:bg-primary\\/60{&:disabled{background-color:color-mix(in srgb,#126ce0 60%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--atomic-primary) 60%,transparent)}}}.disabled\\:text-neutral-dark{&:disabled{color:var(--atomic-neutral-dark)}}.disabled\\:opacity-100{&:disabled{opacity:100%}}.desktop\\:mt-2{@media (width >= 1024px){margin-top:.5rem}}.sm\\:px-6{@media (width >= 40rem){padding-inline:1.5rem}}.\\[part\\=\\"breadcrumb-button\\"\\]\\:visible{&:is(part="breadcrumb-button"){visibility:visible}}}@layer theme, base, components, utilities;@layer components{.input-primary{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius);border-style:var(--tw-border-style);border-width:1px;&:hover{@media (hover:hover){border-color:var(--atomic-primary-light)}}&:focus-visible{border-color:var(--atomic-primary)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;&:before{--tw-content:attr(value);content:var(--tw-content)}}.btn-primary{background-color:var(--atomic-primary);border-radius:var(--atomic-border-radius);color:var(--atomic-on-primary);&:hover{@media (hover:hover){background-color:var(--atomic-primary-light)}}&:focus-visible{background-color:var(--atomic-primary-light)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}&:disabled{background-color:var(--atomic-disabled);cursor:not-allowed}}.btn-outline-primary{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius);border-style:var(--tw-border-style);border-width:1px;color:var(--atomic-primary);&:hover{@media (hover:hover){border-color:var(--atomic-primary-light)}}&:hover{@media (hover:hover){color:var(--atomic-primary-light)}}&:focus-visible{border-color:var(--atomic-primary)}&:focus-visible{color:var(--atomic-primary)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}&:disabled{border-color:var(--atomic-neutral);color:var(--atomic-neutral);cursor:not-allowed}}.btn-text-primary{background-color:var(--atomic-background);border-radius:var(--atomic-border-radius);color:var(--atomic-primary);&:hover{@media (hover:hover){background-color:var(--atomic-neutral-light)}}&:focus-visible{background-color:var(--atomic-neutral-light)}&:focus-visible{--tw-outline-style:none;outline-style:none}}.btn-outline-neutral{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius);border-style:var(--tw-border-style);border-width:1px;color:var(--atomic-on-background);&:hover{@media (hover:hover){border-color:var(--atomic-primary)}}&:hover{@media (hover:hover){color:var(--atomic-primary)}}&:focus-visible{border-color:var(--atomic-primary)}&:focus-visible{color:var(--atomic-primary)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}&:disabled{border-color:var(--atomic-neutral);color:var(--atomic-on-background);cursor:not-allowed;opacity:50%}}.btn-outline-bg-neutral{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius);border-style:var(--tw-border-style);border-width:1px;color:var(--atomic-on-background);&:hover{@media (hover:hover){border-color:var(--atomic-primary)}}&:hover{@media (hover:hover){background-color:var(--atomic-neutral-light)}}&:hover{@media (hover:hover){color:var(--atomic-primary)}}&:focus-visible{border-color:var(--atomic-primary)}&:focus-visible{background-color:var(--atomic-neutral-light)}&:focus-visible{color:var(--atomic-primary)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}&:disabled{border-color:var(--atomic-neutral);color:var(--atomic-on-background);cursor:not-allowed;opacity:50%}}.btn-outline-bg-error{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius);border-style:var(--tw-border-style);border-width:1px;color:var(--atomic-on-background);&:hover{@media (hover:hover){border-color:var(--atomic-primary)}}&:hover{@media (hover:hover){background-color:var(--atomic-neutral-light)}}&:hover{@media (hover:hover){color:var(--atomic-primary)}}&:focus-visible{border-color:var(--atomic-primary)}&:focus-visible{background-color:var(--atomic-neutral-light)}&:focus-visible{color:var(--atomic-primary)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}&:disabled{border-color:var(--atomic-neutral);color:var(--atomic-on-background);cursor:not-allowed;opacity:50%}}.btn-outline-error{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius);border-style:var(--tw-border-style);border-width:1px;color:var(--atomic-on-background);&:hover{@media (hover:hover){border-color:var(--atomic-error)}}&:hover{@media (hover:hover){color:var(--atomic-error)}}&:focus-visible{border-color:var(--atomic-error)}&:focus-visible{color:var(--atomic-error)}&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:focus-visible{--tw-ring-color:var(--atomic-ring-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}&:disabled{border-color:var(--atomic-neutral);color:var(--atomic-on-background);cursor:not-allowed;opacity:50%}}.btn-text-neutral{background-color:var(--atomic-background);border-radius:var(--atomic-border-radius);color:var(--atomic-on-background);&:hover{@media (hover:hover){background-color:var(--atomic-neutral-light)}}&:hover{@media (hover:hover){color:var(--atomic-primary)}}&:focus-visible{background-color:var(--atomic-neutral-light)}&:focus-visible{color:var(--atomic-primary)}&:focus-visible{--tw-outline-style:none;outline-style:none}}.btn-text-transparent{color:var(--atomic-on-background);&:hover{@media (hover:hover){color:var(--atomic-primary-light)}}&:focus-visible{color:var(--atomic-primary-light)}}.btn-square-neutral{background-color:var(--atomic-background);border-color:var(--atomic-neutral);border-style:var(--tw-border-style);border-width:1px;color:var(--atomic-on-background);&:hover{@media (hover:hover){background-color:var(--atomic-neutral-light)}}&:focus-visible{background-color:var(--atomic-neutral-light)}&:focus-visible{--tw-outline-style:none;outline-style:none}}.btn-page{border-style:var(--tw-border-style);border-width:0;display:grid;font-size:var(--atomic-text-lg);height:2.5rem;line-height:var(--tw-leading,1.55556);place-items:center;width:2.5rem;&:hover{@media (hover:hover){border-bottom-width:1px;border-left-width:1px;border-right-width:1px;border-style:var(--tw-border-style);border-top-width:1px}}&:focus-visible{border-style:var(--tw-border-style);border-width:1px}&.selected{border-color:var(--atomic-primary);border-style:var(--tw-border-style);border-width:2px;--tw-font-weight:var(--atomic-font-bold);font-weight:var(--atomic-font-bold)}}}@layer base{:host{display:block}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);line-height:var(--tw-leading,1.5);--tw-font-weight:var(--atomic-font-normal);font-weight:var(--atomic-font-normal)}button{cursor:pointer}:host(.atomic-hidden){display:none}.ripple{animation:ripple var(--animation-duration) linear;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{opacity:0;transform:scale(4)}}}.loading{--tw-gradient-from:var(--atomic-primary-dark);--tw-gradient-to:var(--atomic-primary-light);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.loading:after{background-color:var(--atomic-background);border-radius:calc(infinity*1px);content:"";height:83.33333%;position:absolute;width:83.33333%}[part=textarea-expander]{&:after{content:attr(data-replicated-value) " ";visibility:hidden}>[part=textarea]{-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none}}&:after,>[part=textarea]{background-color:transparent;color:var(--atomic-neutral-dark);flex-grow:1;font-size:var(--atomic-text-lg);height:100%;line-height:var(--tw-leading,1.55556);overflow:hidden;padding-block:.875rem;padding-inline:1rem;resize:none;white-space:nowrap;z-index:10;--tw-outline-style:none;grid-area:1/1/2/2;outline-style:none}&.expanded{&:after,>[part=textarea]{max-height:8em;overflow-y:auto;white-space:pre-wrap}}}[part~=instant-results-item]{padding:.75rem}[part~=instant-results-show-all]{border-top:1px var(--tw-border-style) var(--atomic-neutral);box-sizing:content-box;justify-content:center;margin-top:auto;padding-block:.25rem;button{background-color:transparent}}[part~=suggestions-left]+[part~=suggestions-right]{border-left:1px var(--tw-border-style) var(--atomic-neutral)}[part~=suggestions-wrapper]{flex-direction:column;@media (width >= 1024px){flex-direction:row}}:host{position:relative;z-index:10}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";initial-value:"";inherits:false}@keyframes spin{to{transform:rotate(1turn)}}@keyframes pulse{50%{opacity:.5}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:""}}}`;
__decorate([
    r()
], AtomicSearchBox.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicSearchBox.prototype, "error", void 0);
__decorate([
    r()
], AtomicSearchBox.prototype, "isExpanded", void 0);
__decorate([
    bindStateToController('searchBox'),
    r()
], AtomicSearchBox.prototype, "searchBoxState", void 0);
__decorate([
    n$1({ type: Number, attribute: 'number-of-queries', reflect: true })
], AtomicSearchBox.prototype, "numberOfQueries", void 0);
__decorate([
    n$1({ type: String, attribute: 'redirection-url', reflect: true })
], AtomicSearchBox.prototype, "redirectionUrl", void 0);
__decorate([
    n$1({ type: Number, attribute: 'suggestion-timeout' })
], AtomicSearchBox.prototype, "suggestionTimeout", void 0);
__decorate([
    n$1({ type: Number, attribute: 'suggestion-delay' })
], AtomicSearchBox.prototype, "suggestionDelay", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'disable-search',
        reflect: true,
        converter: booleanConverter,
    })
], AtomicSearchBox.prototype, "disableSearch", void 0);
__decorate([
    n$1({ type: Number, attribute: 'minimum-query-length', reflect: true })
], AtomicSearchBox.prototype, "minimumQueryLength", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'clear-filters',
        reflect: true,
        converter: booleanConverter,
    })
], AtomicSearchBox.prototype, "clearFilters", void 0);
__decorate([
    n$1({
        type: Boolean,
        attribute: 'enable-query-syntax',
        reflect: true,
        converter: booleanConverter,
    })
], AtomicSearchBox.prototype, "enableQuerySyntax", void 0);
__decorate([
    watch('redirectionUrl')
], AtomicSearchBox.prototype, "watchRedirectionUrl", null);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicSearchBox.prototype, "render", null);
AtomicSearchBox = __decorate([
    t('atomic-search-box'),
    bindings(),
    withTailwindStyles
], AtomicSearchBox);
export { AtomicSearchBox };
//# sourceMappingURL=atomic-search-box-PPq9ZqkV.js.map
