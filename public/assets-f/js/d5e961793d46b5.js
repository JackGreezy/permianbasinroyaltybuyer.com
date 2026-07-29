import { x } from './custom-element-ClSinbnR.js';
const SortIcon = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M7.5 6L7.5 17\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M11 14L7.5 18L4 14\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M16.5 18L16.5 6\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M13 10L16.5 6L20 10\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>";
const renderRefineModalSortSection = ({ props }) => (children) => {
    return x `
      <h2
        part="section-title section-sort-title"
        class="mb-3 truncate text-2xl font-bold"
      >
        ${props.i18n.t('sort')}
      </h2>
      <div part="select-wrapper" class="relative">
        <select
          class="btn-outline-neutral peer w-full grow cursor-pointer appearance-none rounded-lg px-6 py-5 text-lg font-bold"
          part="select"
          aria-label=${props.i18n.t('sort-by')}
          @change=${props.onSelect}
        >
          ${children}
        </select>
        <div
          part="select-icon-wrapper"
          class="peer-hover:text-primary-light peer-focus-within:text-primary-light pointer-events-none absolute top-0 right-0 bottom-0 flex items-center justify-center pr-6"
        >
          <atomic-icon
            part="select-icon"
            icon=${SortIcon}
            class="h-6 w-6"
          ></atomic-icon>
        </div>
      </div>
    `;
};
export { renderRefineModalSortSection as r };
//# sourceMappingURL=sort-BF4MeBo-.js.map
