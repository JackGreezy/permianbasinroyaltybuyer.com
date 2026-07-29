import { s as shouldUpdateFacetSearchComponent } from './facet-value-label-highlight-P4jF_zNt.js';
import { E, x } from './custom-element-ClSinbnR.js';
import { n } from './when-BzW5QVN4.js';
import './atomic-icon-D7DRsDUP.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
function announceFacetSearchResultsWithAriaLive(facet, label, setAriaLive, i18n) {
    let prevState = facet.state.facetSearch;
    facet.subscribe(() => {
        if (shouldUpdateFacetSearchComponent(facet.state.facetSearch, prevState) &&
            facet.state.facetSearch.query) {
            prevState = facet.state.facetSearch;
            setAriaLive(i18n.t('facet-search-results-count', {
                count: facet.state.facetSearch.values.length,
                label,
            }));
        }
    });
}
const MinusIcon = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m64 208h384v96h-384z\"/></svg>";
const PlusIcon = "<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M496 208H304V16h-96v192H16v96h192v192h96V304h192\"/>\n</svg>\n";
const renderFacetShowMoreLess = ({ props }) => {
    const label = props.i18n.t(props.label);
    const showMore = props.i18n.t('show-more');
    const showMoreFacetValues = props.i18n.t('show-more-facet-values', {
        label,
    });
    const showLess = props.i18n.t('show-less');
    const showLessFacetValues = props.i18n.t('show-less-facet-values', {
        label,
    });
    const btnClasses = 'flex items-baseline text-left p-2 text-sm max-w-full';
    const iconClasses = 'w-2 h-2 mr-1';
    if (!props.canShowLessValues && !props.canShowMoreValues) {
        return E;
    }
    return x `<div class="mt-2">
    ${n(props.canShowLessValues, () => renderButton({
        props: {
            style: 'text-primary',
            part: 'show-less',
            class: btnClasses,
            ariaLabel: showLessFacetValues,
            onClick: () => props.onShowLess(),
            ref: (el) => props.showLessRef?.(el),
        },
    })(x `<atomic-icon
            part="show-more-less-icon"
            class=${iconClasses}
            icon=${MinusIcon}
          ></atomic-icon>
          <span class="truncate">${showLess}</span>`))}
    ${n(props.canShowMoreValues, () => renderButton({
        props: {
            style: 'text-primary',
            part: 'show-more',
            class: btnClasses,
            ariaLabel: showMoreFacetValues,
            onClick: () => props.onShowMore(),
            ref: (el) => props.showMoreRef?.(el),
        },
    })(x `<atomic-icon
            part="show-more-less-icon"
            class=${iconClasses}
            icon=${PlusIcon}
          ></atomic-icon>
          <span class="truncate">${showMore}</span>`))}
  </div>`;
};
export { announceFacetSearchResultsWithAriaLive as a, renderFacetShowMoreLess as r };
//# sourceMappingURL=facet-show-more-less-DgeBEvJZ.js.map
