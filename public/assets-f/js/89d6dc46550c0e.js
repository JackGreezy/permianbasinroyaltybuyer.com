import './atomic-icon-D7DRsDUP.js';
import { HighlightUtils } from '/headless/v3.45.1/headless.esm.js';
import { x, B } from './custom-element-ClSinbnR.js';
import { n } from './when-BzW5QVN4.js';
import { e as encodeForDomAttribute } from './string-utils-wMMP9nsD.js';
const getPartialRecentQueryElement = (value, i18n) => {
    return {
        part: 'recent-query-item',
        query: value,
        key: `recent-${encodeForDomAttribute(value)}`,
        ariaLabel: i18n.t('recent-query-suggestion-label', {
            query: value,
            interpolation: { escapeValue: false },
        }),
    };
};
const getPartialRecentQueryClearElement = (i18n) => {
    return {
        key: 'recent-query-clear',
        ariaLabel: i18n.t('clear-recent-searches', {
            interpolation: { escapeValue: false },
        }),
        part: 'recent-query-title-item suggestion-divider',
        hideIfLast: true,
    };
};
const renderRecentQuery = ({ icon, query, value, }) => {
    const hasQuery = query !== '';
    const template = x `<div
    part="recent-query-content"
    class="pointer-events-none flex items-center text-left break-all"
  >
    <atomic-icon
      part="recent-query-icon"
      icon=${icon}
      class="mr-2 h-4 w-4 shrink-0"
    ></atomic-icon>
    ${n(hasQuery, () => x `<span
          part="recent-query-text"
          class="line-clamp-2 break-words"
          .innerHTML=${HighlightUtils.highlightString({
        content: value,
        openingDelimiter: '<span part="recent-query-text-highlight" class="font-bold">',
        closingDelimiter: '</span>',
        highlights: [
            {
                offset: query.length,
                length: value.length - query.length,
            },
        ],
    })}
        ></span>`, () => x `<span part="recent-query-text" class="line-clamp-2 break-all">
          ${value}
        </span>`)}
  </div>`;
    const container = document.createElement('div');
    B(template, container);
    return container.firstElementChild;
};
const renderRecentQueryClear = ({ i18n }) => {
    const template = x ` <div
    part="recent-query-title-content"
    class="pointer-events-none flex w-full justify-between"
  >
    <span class="font-bold" part="recent-query-title">
      ${i18n.t('recent-searches')}
    </span>
    <span part="recent-query-clear">${i18n.t('clear')}</span>
  </div>`;
    const container = document.createElement('div');
    B(template, container);
    return container.firstElementChild;
};
export { getPartialRecentQueryElement as a, renderRecentQuery as b, getPartialRecentQueryClearElement as g, renderRecentQueryClear as r };
//# sourceMappingURL=recent-queries-CkDnNcgm.js.map
