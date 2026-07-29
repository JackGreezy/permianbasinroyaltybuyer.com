import { g as getFieldValueCaption } from './field-utils-8CvHFjSG.js';
import { r as renderFacetValueBox } from './facet-value-box.tw.css-CkjHPV1k.js';
import { r as renderFacetValueCheckbox } from './facet-value-checkbox-BUWKh-FZ.js';
import { r as renderFacetValueLabelHighlight } from './facet-value-label-highlight-P4jF_zNt.js';
import { r as renderFacetValueLink } from './facet-value-link-Cy-zhnFE.js';
const renderFacetValue = ({ props: { facetSearchQuery, displayValuesAs, enableExclusion, facetCount, facetState, facetValue, field, i18n, onExclude, onSelect, setRef, }, }) => {
    const displayValue = getFieldValueCaption(field, facetValue, i18n);
    const isSelected = facetState === 'selected';
    const isExcluded = facetState === 'excluded';
    const triStateProps = enableExclusion
        ? {
            onExclude,
            state: facetState,
        }
        : {};
    switch (displayValuesAs) {
        case 'checkbox':
            return renderFacetValueCheckbox({
                props: {
                    ...triStateProps,
                    displayValue,
                    numberOfResults: facetCount,
                    isSelected,
                    i18n,
                    onClick: onSelect,
                    searchQuery: facetSearchQuery,
                    buttonRef: (element) => {
                        setRef?.(element);
                    },
                },
            })(renderFacetValueLabelHighlight({
                props: {
                    displayValue,
                    isSelected,
                    isExcluded,
                    searchQuery: facetSearchQuery,
                },
            }));
        case 'link':
            return renderFacetValueLink({
                props: {
                    displayValue,
                    numberOfResults: facetCount,
                    isSelected,
                    i18n,
                    onClick: onSelect,
                    searchQuery: facetSearchQuery,
                    buttonRef: (element) => {
                        setRef?.(element);
                    },
                },
            })(renderFacetValueLabelHighlight({
                props: {
                    displayValue,
                    isSelected,
                    searchQuery: facetSearchQuery,
                },
            }));
        case 'box':
            return renderFacetValueBox({
                props: {
                    displayValue,
                    numberOfResults: facetCount,
                    isSelected,
                    i18n,
                    onClick: onSelect,
                    searchQuery: facetSearchQuery,
                    buttonRef: (element) => {
                        setRef?.(element);
                    },
                },
            })(renderFacetValueLabelHighlight({
                props: {
                    displayValue,
                    isSelected,
                    searchQuery: facetSearchQuery,
                },
            }));
    }
};
export { renderFacetValue as r };
//# sourceMappingURL=facet-value-CQByag-m.js.map
