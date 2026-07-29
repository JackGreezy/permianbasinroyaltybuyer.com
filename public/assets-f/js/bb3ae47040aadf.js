import { x, E } from './custom-element-ClSinbnR.js';
import { n } from './when-BzW5QVN4.js';
import './atomic-icon-D7DRsDUP.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import { r as renderHeading } from './heading-Sj_Y7ObA.js';
const renderFacetContainer = () => (children) => x `
    <div
      class="bg-background border-neutral rounded-lg border p-4"
      part="facet"
    >
      ${children}
    </div>
  `;
const ArrowBottomIcon = "<svg viewBox=\"0 0 12.6 7.2\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.421 7.04c-.3 0-.5-.1-.7-.3l-4.6-4.6-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l5.2-5.2c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3\" transform=\"matrix(-1 0 0 -1 12.366 7.086)\"/></svg>";
const ArrowTopIcon = "<svg viewBox=\"0 0 12.6 7.2\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.3 7.04c-.3 0-.5-.1-.7-.3l-4.6-4.6-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l5.2-5.2c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3\"/></svg>";
const CloseIcon = "<svg viewBox=\"0 0 22 22\"><g transform=\"matrix(.7071 -.7071 .7071 .7071 -3.142 11)\"><path d=\"m9-3.4h2v26.9h-2z\"/><path d=\"m-3.4 9h26.9v2h-26.9z\"/></g></svg>";
const renderFacetHeader = ({ props, }) => {
    const label = props.i18n.t(props.label);
    const expandFacet = props.i18n.t('expand-facet', { label });
    const collapseFacet = props.i18n.t('collapse-facet', { label });
    const clearFilters = props.i18n.t('clear-filters', {
        count: props.numberOfActiveValues,
    });
    const clearFiltersForFacet = props.i18n.t('clear-filters-for-facet', {
        count: props.numberOfActiveValues,
        label,
    });
    return x `
    ${renderButton({
        props: {
            part: 'label-button',
            style: 'text-transparent',
            class: 'flex w-full justify-between rounded-none px-2 py-1 text-lg font-bold',
            ariaLabel: props.isCollapsed ? expandFacet : collapseFacet,
            onClick: props.onToggleCollapse,
            ariaExpanded: props.isCollapsed ? 'false' : 'true',
            ref: (el) => props.headerRef?.(el),
        },
    })(x `${renderHeading({
        props: { level: props.headingLevel, class: 'truncate' },
    })(x `${label}`)}
        <atomic-icon
          part="label-button-icon"
          class="ml-4 w-3 shrink-0 self-center"
          .icon=${props.isCollapsed ? ArrowBottomIcon : ArrowTopIcon}
        ></atomic-icon>`)}
    ${n(props.onClearFilters && props.numberOfActiveValues > 0, () => x `${renderButton({
        props: {
            part: 'clear-button',
            style: 'text-primary',
            class: 'flex max-w-full items-baseline p-2 text-sm',
            ariaLabel: clearFiltersForFacet,
            onClick: props.onClearFilters,
        },
    })(x `<atomic-icon
              part="clear-button-icon"
              class="mr-1 h-2 w-2"
              .icon=${CloseIcon}
            ></atomic-icon>
            <span>${clearFilters}</span>`)}`, () => E)}
  `;
};
export { renderFacetContainer as a, renderFacetHeader as r };
//# sourceMappingURL=facet-header-Bzdj0Qi_.js.map
