import { x } from './custom-element-ClSinbnR.js';
import { l as localizedString } from './localized-string-CQCD-kWJ.js';
const renderAutoCorrection = ({ props, }) => {
    return x `
    <p class="text-on-background mb-1" part="no-results">
      ${localizedString({
        i18n: props.i18n,
        key: 'no-results-for-did-you-mean',
        params: {
            query: x `<b part="highlight">${props.originalQuery}</b>`,
        },
    })}
    </p>
    <p class="text-on-background" part="auto-corrected">
      ${localizedString({
        i18n: props.i18n,
        key: 'query-auto-corrected-to',
        params: {
            query: x `<b part="highlight">${props.correctedTo}</b>`,
        },
    })}
    </p>
  `;
};
const renderCorrection = ({ props, }) => {
    return x `
    <p class="text-on-background" part="did-you-mean">
      ${localizedString({
        i18n: props.i18n,
        key: 'did-you-mean',
        params: {
            query: x `<button
            class="text-primary hover:text-primary-light focus-visible:text-primary-light py-1 hover:underline focus-visible:underline"
            part="correction-btn"
            @click=${props.onClick}
          >
            ${props.correctedQuery}
          </button>`,
        },
    })}
    </p>
  `;
};
const renderTriggerCorrection = ({ props, }) => {
    return x `
    <p class="text-on-background text-lg leading-6" part="showing-results-for">
      ${localizedString({
        i18n: props.i18n,
        key: props.i18nKeyShowingItemsFor,
        params: { query: x `<b part="highlight">${props.correctedQuery}</b>` },
    })}
    </p>
    <p class="text-on-background text-base leading-5" part="search-instead-for">
      ${localizedString({
        i18n: props.i18n,
        key: 'search-instead-for',
        params: {
            query: x `<button
            class="text-primary hover:text-primary-light focus-visible:text-primary-light py-1 hover:underline focus-visible:underline"
            part="undo-btn"
            @click=${props.onClick}
          >
            ${props.originalQuery}
          </button>`,
        },
    })}
    </p>
  `;
};
export { renderCorrection as a, renderTriggerCorrection as b, renderAutoCorrection as r };
//# sourceMappingURL=trigger-correction-BfbZjIF6.js.map
