import { x, a as i$1 } from './custom-element-ClSinbnR.js';
import { o } from './if-defined-CwDhfVxy.js';
import { i } from './keyed-B2UhaAyp.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
const renderFacetValueBox = ({ props }) => (children) => {
    const compactCount = new Intl.NumberFormat(props.i18n.language, {
        notation: 'compact',
    }).format(props.numberOfResults);
    const ariaLabel = props.i18n.t('facet-value', {
        value: props.displayValue,
        count: props.numberOfResults,
        formattedCount: compactCount,
    });
    return x `
      ${i(props.displayValue, x `<li .key=${props.displayValue} class=${o(props.class)}>
          ${renderButton({
        props: {
            style: 'outline-bg-neutral',
            part: `value-box${props.isSelected ? ' value-box-selected' : ''}`,
            onClick: () => props.onClick(),
            class: `value-box group box-border h-full w-full items-center p-2 ${props.isSelected ? 'selected' : ''}`,
            ariaPressed: props.isSelected ? 'true' : 'false',
            ariaLabel,
            ref: props.buttonRef,
        },
    })(x `${children}<span
                part="value-count"
                class="value-box-count text-neutral-dark mt-1 w-full truncate text-sm"
              >
                ${props.i18n.t('between-parentheses', {
        text: compactCount,
    })}
              </span>`)}
        </li>`)}
    `;
};
const styles = i$1`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */.box-container{display:grid;gap:var(--atomic-facet-boxes-gap,.5rem);grid-template-columns:repeat(var(--atomic-facet-boxes-per-row,4),minmax(0,1fr));padding-inline:calc(var(--spacing, .25rem)*2)}.value-box{overflow:hidden;position:relative}.value-box .value-label,.value-box-count{display:block;width:100%}.value-box.selected{box-shadow:0 0 0 1px var(--atomic-primary)}`;
export { renderFacetValueBox as r, styles as s };
//# sourceMappingURL=facet-value-box.tw.css-CkjHPV1k.js.map
