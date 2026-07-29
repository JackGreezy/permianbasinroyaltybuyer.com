import { x } from './custom-element-ClSinbnR.js';
import { t as tw, m as multiClassMap } from './multi-class-map-BELXGnQY.js';
import { o } from './if-defined-CwDhfVxy.js';
import { n } from './ref-Ci0gDEiU.js';
import { n as n$1 } from './when-BzW5QVN4.js';
import './atomic-icon-D7DRsDUP.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import { isNullOrUndefined } from '/bueno/v1.1.7/bueno.esm.js';
import { p as purify } from './purify.es-BkIzpzFh.js';
import { d as debounce } from './debounce-utils-D96OSgvX.js';
import { p as promiseTimeout } from './event-utils-Xyk7tlQy.js';
import { p as proxyCustomElement, H, h, F as Fragment, a as Host } from './index-DRai3PWs.js';
function isMacOS$1() {
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform#examples
    return navigator.platform.startsWith('Mac');
}
function hasKeyboard() {
    return window.matchMedia('(any-hover: hover)').matches;
}
const renderSearchBoxWrapper = ({ props }) => (children) => {
    const classes = tw({
        'bg-background border-neutral absolute top-0 left-0 flex w-full rounded-md border focus-within:ring-3': true,
        'focus-within:border-disabled focus-within:ring-neutral': props.disabled,
        'focus-within:border-primary focus-within:ring-ring-primary': !props.disabled,
    });
    return x `<div
      part="wrapper"
      class=${multiClassMap(classes)}
      @focusout=${props.onFocusout}
    >
      ${children}
    </div>`;
};
const ClearSlim = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 1.00012L1.00012 14.9999\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M0.999878 1L14.9999 15\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";
const renderTextAreaClearButton = ({ props: { textAreaRef, i18n, onClick }, }) => {
    return x `<div
    part="clear-button-wrapper"
    class="ml-2 flex items-center justify-center py-2"
  >
    ${renderButton({
        props: {
            style: 'text-transparent',
            part: 'clear-button',
            class: 'text-neutral-dark flex h-8 w-8 shrink-0 items-center justify-center',
            onClick: () => {
                onClick?.();
                textAreaRef?.value?.focus();
            },
            ariaLabel: i18n.t('clear-searchbox'),
        },
    })(x `<atomic-icon
        part="clear-icon"
        icon=${ClearSlim}
        class="h-4 w-4"
      ></atomic-icon>`)}
  </div>`;
};
function syncTextWithReplica(ref, value) {
    const elem = ref.value;
    const parent = elem?.parentNode;
    if (!parent || elem?.value === '\n') {
        return;
    }
    parent.dataset.replicatedValue = elem?.value;
}
function resetReplicaText(ref) {
    const elem = ref.value;
    const parent = elem?.parentNode;
    if (parent) {
        delete parent.dataset.replicatedValue;
    }
}
function collapseTextArea(ref) {
    const elem = ref.value;
    const parent = elem?.parentNode;
    if (parent) {
        parent.classList.remove('expanded');
    }
}
function expandTextArea(ref) {
    const elem = ref.value;
    const parent = elem?.parentNode;
    if (parent) {
        parent.classList.add('expanded');
    }
}
const renderSearchBoxTextArea = ({ props: { textAreaRef, loading, i18n, onInput, onFocus, onBlur, onChange, onKeyDown, onKeyUp, value, ariaLabel, title, onClear, popup, }, }) => {
    return x `<div class="flex grow overflow-hidden">
    <div part="textarea-expander" class="grid grow overflow-hidden">
      <textarea
        title=${title}
        part="textarea"
        aria-label=${ariaLabel}
        placeholder=${i18n.t('search')}
        class="placeholder-neutral-dark"
        rows="1"
        @input=${(e) => {
        onInput?.(e);
        syncTextWithReplica(textAreaRef);
    }}
        @keydown=${(e) => {
        syncTextWithReplica(textAreaRef);
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
        }
        onKeyDown?.(e);
    }}
        @keyup=${(e) => {
        onKeyUp?.(e);
        if (e.key === 'Enter') {
            e.preventDefault();
            return;
        }
        syncTextWithReplica(textAreaRef);
    }}
        @blur=${(e) => {
        onBlur?.(e);
        collapseTextArea(textAreaRef);
        syncTextWithReplica(textAreaRef);
    }}
        @change=${(e) => {
        onChange?.(e);
        syncTextWithReplica(textAreaRef);
    }}
        @focus=${(e) => {
        onFocus?.(e);
        const target = e.target;
        syncTextWithReplica(textAreaRef ?? target);
        expandTextArea(textAreaRef ?? target);
    }}
        autocomplete="off"
        autocapitalize="off"
        aria-activedescendant=${o(popup.activeDescendant)}
        aria-autocomplete="both"
        aria-haspopup="true"
        aria-controls=${popup?.id}
        .value=${value}
        ${n(textAreaRef)}
      ></textarea>
    </div>
    ${n$1(loading, () => x `<div class="ml-2 flex items-center justify-center">
          <span
            part="loading"
            class="loading mr-2 grid h-5 w-5 animate-spin place-items-center rounded-full bg-linear-to-r"
          ></span>
        </div>`)}
    ${n$1(!loading && value.length !== 0, () => x `${renderTextAreaClearButton({
        props: {
            textAreaRef,
            i18n,
            onClick: () => {
                onClear();
                resetReplicaText(textAreaRef);
            },
        },
    })}`)}
  </div>`;
};
/**
 * Checks if a search box suggestion element has no query.
 *
 * @param el - The search box suggestion element to check
 * @returns True if the element has no query or the query is whitespace-only
 */
function elementHasNoQuery(el) {
    return !el.query || el.query.trim() === '';
}
/**
 * Checks if a search box suggestion element has a query.
 *
 * @param el - The search box suggestion element to check
 * @returns True if the element has a non-empty, non-whitespace query
 */
function elementHasQuery(el) {
    return !!el.query && el.query.trim() !== '';
}
class SuggestionManager {
    constructor(ownerSearchBoxProps) {
        this.ownerSearchBoxProps = ownerSearchBoxProps;
        this.suggestions = [];
        this.leftSuggestionElements = [];
        this.rightSuggestionElements = [];
        this.leftPanel = undefined;
        this.rightPanel = undefined;
        this.activeDescendant = '';
        this.suggestedQuery = '';
        this.keyboardActiveDescendant = '';
        this.queryDataAttribute = 'data-query';
        this.suggestionEvents = [];
        this.previousActiveDescendantElement = null;
        this.leftSuggestions = [];
        this.rightSuggestions = [];
        this.triggerSuggestions = debounce(() => this.executeQuerySuggestion(), this.ownerSearchBoxProps.getSuggestionDelay());
    }
    get partialSuggestionBindings() {
        return {
            suggestedQuery: () => this.suggestedQuery,
            clearSuggestions: () => this.clearSuggestions(),
            triggerSuggestions: () => this.triggerSuggestions(),
            getSuggestions: () => this.suggestions,
            getSuggestionElements: () => this.allSuggestionElements,
        };
    }
    get activeDescendantElement() {
        if (!this.hasActiveDescendant) {
            return null;
        }
        return (this.leftPanel?.querySelector(`#${this.activeDescendant}`) ||
            this.rightPanel?.querySelector(`#${this.activeDescendant}`) ||
            null);
    }
    onSubmit() {
        this.clickOnActiveElement();
        this.clearSuggestions();
    }
    updateActiveDescendant(id = '') {
        this.activeDescendant = id;
        this.ownerSearchBoxProps.getHost().requestUpdate();
    }
    updateKeyboardActiveDescendant(id = '') {
        this.keyboardActiveDescendant = id;
    }
    clickOnActiveElement() {
        this.activeDescendantElement?.click();
        this.updateActiveDescendant();
    }
    isRightPanelInFocus() {
        if (isNullOrUndefined(this.panelInFocus) ||
            isNullOrUndefined(this.rightPanel)) {
            return false;
        }
        return this.panelInFocus === this.rightPanel;
    }
    initializeSuggestions(bindings) {
        this.suggestions = this.suggestionEvents.map((event) => event(bindings));
    }
    registerSuggestionsFromEvent(event, bindings) {
        event.preventDefault();
        event.stopPropagation();
        this.suggestionEvents.push(event.detail);
        this.suggestions.push(event.detail(bindings));
    }
    registerSuggestions(suggestions) {
        this.suggestions.push(suggestions);
    }
    get isDoubleList() {
        return Boolean(this.leftSuggestionElements.length && this.rightSuggestionElements.length);
    }
    focusPanel(side) {
        const panel = side === 'left' ? this.leftPanel : this.rightPanel;
        if (this.panelInFocus === panel) {
            return;
        }
        if (panel?.firstElementChild) {
            const panelHasActiveDescendant = this.previousActiveDescendantElement &&
                panel.contains(this.previousActiveDescendantElement);
            const newValue = panelHasActiveDescendant
                ? this.previousActiveDescendantElement
                : panel.firstElementChild;
            this.updateDescendants(newValue.id);
        }
    }
    clearSuggestions() {
        this.clearSuggestionElements();
        this.updateActiveDescendant();
    }
    async focusNextValue() {
        if (!this.hasSuggestions || !this.nextOrFirstValue) {
            return;
        }
        await this.focusValue(this.nextOrFirstValue);
    }
    async focusValue(value) {
        this.updateKeyboardActiveDescendant(value.id);
        this.updateActiveDescendant(value.id);
        this.scrollActiveDescendantIntoView();
        await this.updateQueryFromSuggestion();
    }
    async onSuggestionMouseOver(item, side, id) {
        const thisPanel = side === 'left' ? this.leftPanel : this.rightPanel;
        // When hovering, always reset the keyboard active descendant
        this.updateKeyboardActiveDescendant();
        if (this.panelInFocus === thisPanel) {
            this.updateActiveDescendant(id);
        }
        else {
            this.updateDescendants(id);
        }
        if (item.query) {
            await this.updateSuggestedQuery(item.query);
        }
    }
    async onSuggestionClick(item, e) {
        if (item.query) {
            this.clearSuggestions();
            await this.updateOwnerSearchboxQuery(item.query);
        }
        item.onSelect?.(e);
    }
    get hasSuggestions() {
        return !!this.allSuggestionElements.length;
    }
    get allSuggestionElements() {
        return [...this.leftSuggestionElements, ...this.rightSuggestionElements];
    }
    async focusPreviousValue() {
        if (this.firstValue === this.activeDescendantElement) {
            this.updateKeyboardActiveDescendant();
            this.updateActiveDescendant();
            return;
        }
        if (!this.hasSuggestions || !this.previousOrLastValue) {
            return;
        }
        await this.focusValue(this.previousOrLastValue);
    }
    get hasActiveDescendant() {
        return this.activeDescendant !== '';
    }
    async executeQuerySuggestion() {
        this.updateActiveDescendant();
        const settled = await Promise.allSettled(this.suggestions.map((suggestion) => promiseTimeout(suggestion.onInput ? suggestion.onInput() : Promise.resolve(), this.ownerSearchBoxProps.getSuggestionTimeout())));
        const fulfilledSuggestions = [];
        settled.forEach((prom, j) => {
            if (prom.status === 'fulfilled') {
                fulfilledSuggestions.push(this.suggestions[j]);
            }
            else {
                this.ownerSearchBoxProps
                    .getLogger()
                    .warn('Some query suggestions are not being shown because the promise timed out.');
            }
        });
        const splitSuggestions = (side, isDefault = false) => fulfilledSuggestions
            .filter((suggestion) => suggestion.panel === side || (!suggestion.panel && isDefault))
            .sort(this.sortSuggestions);
        this.leftSuggestions = splitSuggestions('left', true);
        this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements();
        this.rightSuggestions = splitSuggestions('right');
        this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions);
        const defaultSuggestedQuery = this.allSuggestionElements.find(elementHasQuery)?.query || '';
        await this.updateSuggestedQuery(defaultSuggestedQuery);
    }
    get lastValue() {
        return this.panelInFocus?.lastElementChild;
    }
    get previousOrLastValue() {
        if (!this.hasActiveDescendant) {
            return this.lastValue?.firstChild;
        }
        const parentOfActiveDescendant = this.activeDescendantElement?.parentElement;
        return (parentOfActiveDescendant?.previousElementSibling?.firstChild ||
            this.firstValue?.firstChild);
    }
    sortSuggestions(a, b) {
        return a.position - b.position;
    }
    get nextOrFirstValue() {
        if (!this.hasActiveDescendant) {
            return this.firstValue?.firstChild;
        }
        const parentOfActiveDescendant = this.activeDescendantElement?.parentElement;
        return (parentOfActiveDescendant?.nextElementSibling?.firstChild ||
            this.firstValue?.firstChild);
    }
    get firstValue() {
        return this.panelInFocus?.firstElementChild;
    }
    get panelInFocus() {
        if (this.leftPanel?.contains(this.activeDescendantElement)) {
            return this.leftPanel;
        }
        if (this.rightPanel?.contains(this.activeDescendantElement)) {
            return this.rightPanel;
        }
        return this.leftPanel || this.rightPanel;
    }
    scrollActiveDescendantIntoView() {
        this.activeDescendantElement?.scrollIntoView({
            block: 'nearest',
        });
    }
    async updateQueryFromSuggestion() {
        const suggestedQuery = this.activeDescendantElement?.getAttribute(this.queryDataAttribute);
        await this.updateOwnerSearchboxQuery(suggestedQuery || '');
    }
    async updateOwnerSearchboxQuery(query) {
        if (query && this.ownerSearchBoxProps.getSearchBoxValue() !== query) {
            this.ownerSearchBoxProps.updateQuery(query);
            await this.updateSuggestedQuery(query);
        }
    }
    async updateSuggestedQuery(suggestedQuery) {
        await Promise.allSettled(this.suggestions.map((suggestion) => promiseTimeout(suggestion.onSuggestedQueryChange
            ? suggestion.onSuggestedQueryChange(suggestedQuery)
            : Promise.resolve(), this.ownerSearchBoxProps.getSuggestionTimeout())));
        this.suggestedQuery = suggestedQuery;
        this.updateSuggestionElements(suggestedQuery);
        this.ownerSearchBoxProps.getHost().requestUpdate();
    }
    updateSuggestionElements(query) {
        if (!this.isPanelInFocus(this.leftPanel, query)) {
            this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements();
        }
        if (!this.isPanelInFocus(this.rightPanel, query)) {
            this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions);
        }
    }
    forceUpdate() {
        this.updateSuggestionElements(this.suggestedQuery);
        this.ownerSearchBoxProps.getHost().requestUpdate();
    }
    isPanelInFocus(panel, query) {
        if (!this.activeDescendantElement) {
            return false;
        }
        if (query) {
            const escaped = purify.sanitize(query);
            return !!panel?.querySelector(`[${this.queryDataAttribute}="${CSS.escape(escaped)}"]`);
        }
        return this.activeDescendantElement?.closest('ul') === panel;
    }
    getAndFilterLeftSuggestionElements() {
        const suggestionElements = this.getSuggestionElements(this.leftSuggestions);
        const filterOnDuplicate = new Set();
        const out = suggestionElements.filter((suggestionElement) => {
            if (isNullOrUndefined(suggestionElement.query)) {
                return true;
            }
            if (filterOnDuplicate.has(suggestionElement.query)) {
                return false;
            }
            else {
                filterOnDuplicate.add(suggestionElement.query);
                return true;
            }
        });
        return out;
    }
    getSuggestionElements(suggestions) {
        const elements = suggestions.flatMap((suggestion) => suggestion.renderItems());
        const max = this.ownerSearchBoxProps.getNumberOfSuggestionsToDisplay() +
            elements.filter(elementHasNoQuery).length;
        return elements.slice(0, max);
    }
    updateDescendants(activeDescendant = '') {
        const newPrevDescendantElement = this.activeDescendantElement;
        this.previousActiveDescendantElement = newPrevDescendantElement;
        this.updateActiveDescendant(activeDescendant);
    }
    clearSuggestionElements() {
        this.leftSuggestionElements = [];
        this.rightSuggestionElements = [];
    }
}
const isMacOS = () => navigator.platform.startsWith('Mac');
const AtomicSuggestionRenderer$1 = /*@__PURE__*/ proxyCustomElement(class AtomicSuggestionRenderer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.i18n = undefined;
        this.id = undefined;
        this.suggestion = undefined;
        this.isSelected = undefined;
        this.side = undefined;
        this.index = undefined;
        this.lastIndex = undefined;
        this.isDoubleList = undefined;
        this.onClick = undefined;
        this.onMouseEnter = undefined;
    }
    get parts() {
        let part = 'suggestion';
        if (this.isSelected) {
            part += ' active-suggestion';
        }
        if (this.suggestion.query) {
            part += ' suggestion-with-query';
        }
        if (this.suggestion.part) {
            part += ` ${this.suggestion.part}`;
        }
        return part;
    }
    get classes() {
        return `flex px-4 min-h-10 items-center text-left text-neutral-dark cursor-pointer ${this.isSelected ? 'bg-neutral-light' : ''}`;
    }
    get content() {
        return this.isHTMLElement(this.suggestion.content) ? (h(Fragment, null)) : (this.suggestion.content);
    }
    ariaLabel(isButton) {
        const contentLabel = this.suggestion.ariaLabel ??
            this.suggestion.query ??
            this.i18n.t('no-title');
        const labelWithType = isMacOS() && isButton
            ? this.i18n.t('search-suggestion-button', {
                label: contentLabel,
                interpolation: { escapeValue: false },
            })
            : contentLabel;
        const position = this.index + 1;
        const count = this.lastIndex + 1;
        if (!this.isDoubleList) {
            return this.i18n.t('search-suggestion-single-list', {
                label: labelWithType,
                position,
                count,
                interpolation: { escapeValue: false },
            });
        }
        return this.i18n.t('search-suggestion-double-list', {
            label: labelWithType,
            position,
            count,
            side: this.i18n.t(this.side === 'left' ? 'left' : 'right'),
            interpolation: { escapeValue: false },
        });
    }
    ensureContentForRenderedSuggestion(element) {
        if (this.isHTMLElement(this.suggestion.content)) {
            element.replaceChildren(this.suggestion.content);
        }
    }
    isHTMLElement(el) {
        return el instanceof H;
    }
    render() {
        const isButton = !!(this.suggestion.onSelect || this.suggestion.query);
        return (h(Host, { key: 'b9e2c8dcbae4d2d00fa85a689c651b4384aafb87', class: "contents" }, isButton ? (h("div", { id: this.id, key: this.suggestion.key, part: this.parts, class: this.classes, onMouseDown: (e) => e.preventDefault(), onClick: (e) => this.onClick?.(e), onMouseEnter: (e) => this.onMouseEnter?.(e), "data-query": this.suggestion.query, "aria-label": this.ariaLabel(isButton), ref: (el) => {
                if (!el) {
                    return;
                }
                this.ensureContentForRenderedSuggestion(el);
            } }, this.content)) : (h("span", { id: this.id, key: this.suggestion.key, part: this.parts, class: this.classes, "aria-label": this.ariaLabel(isButton), ref: (el) => {
                if (!el) {
                    return;
                }
                this.ensureContentForRenderedSuggestion(el);
            } }, this.content))));
    }
}, [0, "atomic-suggestion-renderer", {
        "i18n": [16],
        "id": [1],
        "suggestion": [16],
        "isSelected": [4, "is-selected"],
        "side": [1],
        "index": [2],
        "lastIndex": [2, "last-index"],
        "isDoubleList": [4, "is-double-list"],
        "onClick": [16],
        "onMouseEnter": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-suggestion-renderer"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-suggestion-renderer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSuggestionRenderer$1);
            }
            break;
    } });
}
defineCustomElement$1();
export { SuggestionManager as S, renderSearchBoxWrapper as a, elementHasQuery as e, hasKeyboard as h, isMacOS$1 as i, renderSearchBoxTextArea as r };
//# sourceMappingURL=atomic-suggestion-renderer-_RUnSAfi.js.map
