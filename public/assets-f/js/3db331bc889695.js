import './atomic-icon-D7DRsDUP.js';
import { E, x, B } from './custom-element-ClSinbnR.js';
import { e as encodeForDomAttribute } from './string-utils-wMMP9nsD.js';
const getPartialSearchBoxSuggestionElement = (suggestion, i18n) => {
    return {
        part: 'query-suggestion-item',
        key: `qs-${encodeForDomAttribute(suggestion.rawValue)}`,
        query: suggestion.rawValue,
        ariaLabel: i18n.t('query-suggestion-label', {
            query: suggestion.rawValue,
            interpolation: { escapeValue: false },
        }),
    };
};
const renderQuerySuggestion = ({ icon, hasQuery, suggestion, hasMultipleKindOfSuggestions, alwaysShowIcon = false, }) => {
    const shouldShowIcon = alwaysShowIcon || hasMultipleKindOfSuggestions;
    const template = x `
    <div part="query-suggestion-content" class="pointer-events-none flex items-center">${shouldShowIcon
        ? x `<atomic-icon
          part="query-suggestion-icon"
          icon=${icon}
          class="mr-2 h-4 w-4 shrink-0"
        ></atomic-icon>`
        : E}${hasQuery
        ? x `<span
          part="query-suggestion-text"
          class="line-clamp-2 break-all"
          .innerHTML=${suggestion.highlightedValue}
        ></span>`
        : x `<span part="query-suggestion-text" class="line-clamp-2 break-all">${suggestion.rawValue}</span>`}</div>
  `;
    const container = document.createElement('div');
    B(template, container);
    return container.firstElementChild;
};
export { getPartialSearchBoxSuggestionElement as g, renderQuerySuggestion as r };
//# sourceMappingURL=query-suggestions-aUelYD-9.js.map
