import { x } from './custom-element-ClSinbnR.js';
import { n } from './when-BzW5QVN4.js';
import { r as renderFieldsetGroup } from './fieldset-group-BMVKrfC8.js';
const renderFacetValuesGroup = ({ props }) => (children) => {
    const label = props.label
        ? props.query === undefined
            ? props.i18n.t('facet-values', { label: props.i18n.t(props.label) })
            : props.i18n.t('facet-search-results', {
                query: props.query,
                label: props.i18n.t(props.label),
            })
        : null;
    return n(label, () => renderFieldsetGroup({ props: { label: label } })(x `${children}`), () => x `${children}`);
};
export { renderFacetValuesGroup as r };
//# sourceMappingURL=facet-values-group-x9cZUKcj.js.map
