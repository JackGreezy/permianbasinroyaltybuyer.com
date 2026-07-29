import { E, x } from './custom-element-ClSinbnR.js';
import { e, i } from './directive-C5w180XZ.js';
const MIN_VALUES_WHERE_FACET_SEARCH_IMPROVES_UX = 9;
class FacetSearchInputGuardDirective extends i {
    render({ canShowMoreValues, numberOfDisplayedValues, withSearch, }, content) {
        if (!withSearch) {
            return E;
        }
        // Hide the input if there are no more values to load from the index and there are less than 8 values to display.
        // 8 is an arbitrary number, discussed with UX as a good compromise: A list long enough where it's worth searching.
        if (!canShowMoreValues &&
            numberOfDisplayedValues < MIN_VALUES_WHERE_FACET_SEARCH_IMPROVES_UX) {
            return E;
        }
        return x `${content()}`;
    }
}
const facetSearchInputGuard = e(FacetSearchInputGuardDirective);
export { facetSearchInputGuard as f };
//# sourceMappingURL=facet-search-input-guard-qro0kaoo.js.map
