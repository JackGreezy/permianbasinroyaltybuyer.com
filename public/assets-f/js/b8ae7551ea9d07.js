import { x } from './custom-element-ClSinbnR.js';
import { n } from './when-BzW5QVN4.js';
const renderFacetPlaceholder = ({ props }) => {
    const facetValues = [];
    for (let i = 0; i < props.numberOfValues; i++) {
        facetValues.push(x `<div
        class="bg-neutral mt-4 flex h-5"
        style="width: 100%; opacity: 0.5"
      ></div>`);
    }
    return x `<div
    part="placeholder"
    class="bg-background border-neutral mb-4 animate-pulse rounded-lg border p-7"
    aria-hidden="true"
  >
    <div class="bg-neutral h-8 rounded" style="width: 75%"></div>
    ${n(!props.isCollapsed, () => x `<div class="mt-7">${facetValues}</div>`)}
  </div>`;
};
export { renderFacetPlaceholder as r };
//# sourceMappingURL=facet-placeholder-DfP-Mkam.js.map
