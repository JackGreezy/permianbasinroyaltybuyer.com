import { x, E, a as i } from './custom-element-ClSinbnR.js';
import { n, e } from './ref-Ci0gDEiU.js';
import { n as n$1 } from './when-BzW5QVN4.js';
import './atomic-icon-D7DRsDUP.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import { e as escapeHtml } from './facet-value-label-highlight-P4jF_zNt.js';
const CloseIcon = "<svg viewBox=\"0 0 22 22\"><g transform=\"matrix(.7071 -.7071 .7071 .7071 -3.142 11)\"><path d=\"m9-3.4h2v26.9h-2z\"/><path d=\"m-3.4 9h26.9v2h-26.9z\"/></g></svg>";
const SearchIcon = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z\"/></svg>";
const inputRef = e();
const renderFacetSearchInput = ({ props }) => {
    const label = props.i18n.t(props.label);
    const search = props.i18n.t('facet-search-input');
    const facetSearch = props.i18n.t('facet-search', { label });
    const clear = props.i18n.t('clear');
    return x `
    <div class="mt-3 px-2" part="search-wrapper">
      <div class="relative h-10">
        <input
          ${n(inputRef)}
          part="search-input"
          class="input-primary placeholder-neutral-dark group h-full w-full px-9 text-sm"
          type="text"
          placeholder=${search}
          aria-label=${facetSearch}
          .value=${props.query}
          @input=${(e) => props.onChange(e.target.value)}
        />
        <div
          class="search-icon text-on-background pointer-events-none absolute left-0 inline-flex h-full w-9 items-center justify-center"
        >
          <atomic-icon part="search-icon" .icon=${SearchIcon}></atomic-icon>
        </div>
        ${n$1(props.query !== '', () => renderButton({
        props: {
            style: 'text-transparent',
            title: clear,
            class: 'search-clear-button absolute top-px right-px bottom-px inline-flex w-9 items-center justify-center',
            onClick: () => {
                props.onClear();
                inputRef.value?.focus();
            },
        },
    })(x `<atomic-icon
              part="search-clear-button"
              .icon=${CloseIcon}
            ></atomic-icon>`))}
      </div>
    </div>
  `;
};
//TODO: change to noMatchesFound & remove the key in https://coveord.atlassian.net/browse/KIT-3368
function matchesFound(key, query, i18n) {
    return i18n.t(key, {
        query: `<span class="font-bold italic text-on-background" part="matches-query">${escapeHtml(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
function clickableMoreMatchesFound(query, i18n) {
    return i18n.t('more-matches-for', {
        query: `<span class="font-bold italic" part="matches-query">${escapeHtml(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
const renderFacetSearchMatches = ({ props }) => {
    if (!props.numberOfMatches) {
        return x `
      <div class="px-2">
        <div
          part="no-matches"
          class="bg-neutral-light text-neutral-dark truncate rounded p-3 text-sm"
          .innerHTML=${matchesFound('no-matches-found-for', props.query, props.i18n)}
        ></div>
      </div>
    `;
    }
    if (props.hasMoreMatches) {
        if (props.showMoreMatches) {
            return x `
        <div class="px-2">
          ${renderButton({
                props: {
                    style: 'text-primary',
                    class: 'mt-3 p-2',
                    onClick: props.showMoreMatches,
                },
            })(x `<div
              part="more-matches"
              class="truncate text-sm"
              .innerHTML=${clickableMoreMatchesFound(props.query, props.i18n)}
            ></div>`)}
        </div>
      `;
        }
        return x `
      <div class="px-2">
        <div
          part="more-matches"
          class="text-neutral-dark mt-3 truncate text-sm"
          .innerHTML=${matchesFound('more-matches-for', props.query, props.i18n)}
        ></div>
      </div>
    `;
    }
    return E;
};
const styles = i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */input[type=text]:focus-visible~.search-icon{color:var(--atomic-primary)}input[type=text]:hover~.search-icon{color:var(--atomic-primary-light)}.search-icon atomic-icon{height:var(--atomic-facet-search-icon-size,.75rem);width:var(--atomic-facet-search-icon-size,.75rem)}.search-clear-button atomic-icon{height:var(--atomic-facet-search-clear-icon-size,.625rem);width:var(--atomic-facet-search-clear-icon-size,.625rem)}`;
export { renderFacetSearchMatches as a, renderFacetSearchInput as r, styles as s };
//# sourceMappingURL=facet-search.tw.css-BXLTJDf8.js.map
