import { x } from './custom-element-ClSinbnR.js';
import { o } from './if-defined-CwDhfVxy.js';
import { i } from './keyed-B2UhaAyp.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
const renderFacetValueLink = ({ props }) => (children) => {
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabel = props.i18n.t('facet-value', {
        value: props.displayValue,
        count: props.numberOfResults,
        formattedCount: count,
        interpolation: { escapeValue: false },
    });
    let part = props.part ??
        `value-link${props.isSelected ? ' value-link-selected' : ''}`;
    if (props.additionalPart) {
        part += ` ${props.additionalPart}`;
    }
    return x `
      ${i(props.displayValue, x `<li class=${o(props.class)}>
          ${renderButton({
        props: {
            style: 'text-neutral',
            part,
            onClick: () => props.onClick(),
            class: 'group flex w-full items-center truncate px-2 py-2.5 text-left focus-visible:outline-none',
            ariaPressed: props.isSelected ? 'true' : 'false',
            ariaLabel,
            ref: props.buttonRef,
        },
    })(x `${children}<span part="value-count" class="value-count">
                ${props.i18n.t('between-parentheses', {
        text: count,
    })}
              </span>`)}
          ${props.subList}
        </li>`)}
    `;
};
export { renderFacetValueLink as r };
//# sourceMappingURL=facet-value-link-Cy-zhnFE.js.map
