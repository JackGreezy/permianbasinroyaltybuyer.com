import { E, x } from './custom-element-ClSinbnR.js';
import { e, i } from './directive-C5w180XZ.js';
import { l as localizedString } from './localized-string-CQCD-kWJ.js';
class NoItemsGuardDirective extends i {
    render({ firstSearchExecuted, isLoading, hasResults }, content) {
        if (!firstSearchExecuted || isLoading || hasResults) {
            return E;
        }
        return x `${content()}`;
    }
}
const noItemsGuard = e(NoItemsGuardDirective);
const renderNoItems = ({ props }) => {
    const content = props.query
        ? localizedString({
            i18n: props.i18n,
            key: `${props.i18nKey}-for`,
            params: {
                query: x `<span
            class="inline-block max-w-full overflow-hidden align-bottom font-bold text-ellipsis whitespace-normal"
            part="highlight"
          >
            ${localizedString({
                    i18n: props.i18n,
                    key: 'between-quotations',
                    params: { text: props.query },
                })}
          </span>`,
            },
        })
        : props.i18n.t(props.i18nKey);
    return x `
    <div
      class="my-2 max-w-full text-center text-2xl font-medium"
      part="no-results"
    >
      ${content}
    </div>
  `;
};
const renderSearchTips = ({ props, }) => {
    return x `
    <div class="text-neutral-dark my-2 text-center text-lg" part="search-tips">
      ${props.i18n.t('search-tips')}
    </div>
  `;
};
const getSummary = (i18n, query, hasResults, i18nKey) => {
    if (hasResults) {
        return '';
    }
    const labelFor = `${i18nKey}-for`;
    return query
        ? i18n.t(labelFor, {
            interpolation: { escapeValue: false },
            query,
        })
        : i18n.t(i18nKey);
};
export { renderSearchTips as a, getSummary as g, noItemsGuard as n, renderNoItems as r };
//# sourceMappingURL=utils-j0VD_aJ1.js.map
