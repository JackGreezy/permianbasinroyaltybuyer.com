import { x, E } from './custom-element-ClSinbnR.js';
import { n } from './when-BzW5QVN4.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
const renderRefineModalBody = (i18n) => (children) => x `
      <aside
        part="content"
        slot="body"
        class="flex w-full flex-col"
        aria-label=${i18n.t('refine-modal-content')}
      >
        ${children}
      </aside>
    `;
const renderRefineModalFiltersSection = ({ props }) => (children) => {
    return x `
      <div part="filter-section" class="mt-8 mb-3 flex w-full justify-between">
        <h2
          part="section-title section-filters-title"
          class="truncate text-2xl font-bold"
        >
          ${props.i18n.t('filters')}
        </h2>
        ${children}
      </div>
      ${n(props.withFacets, () => x `<slot name="facets"></slot>`)}
      ${n(props.withAutomaticFacets, () => x `<slot name="automatic-facets"></slot>`)}
    `;
};
const renderRefineModalFiltersClearButton = ({ props }) => {
    return x `${renderButton({
        props: {
            onClick: props.onClick,
            style: 'text-primary',
            text: props.i18n.t('clear'),
            class: 'px-2 py-1',
            part: 'filter-clear-all',
        },
    })(E)}`;
};
export { renderRefineModalFiltersClearButton as a, renderRefineModalBody as b, renderRefineModalFiltersSection as r };
//# sourceMappingURL=filters-CBcgPtZ_.js.map
