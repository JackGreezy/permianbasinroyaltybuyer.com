import { x } from './custom-element-ClSinbnR.js';
import { i } from './keyed-B2UhaAyp.js';
import { n } from './ref-Ci0gDEiU.js';
import { c as createRipple } from './ripple-utils-DMduLOet.js';
import { r as randomID } from './utils-tjiSYtV8.js';
import { r as renderCheckbox } from './checkbox-BtsHT-20.js';
import { e } from './class-map-Bnlx5e07.js';
import { o } from './if-defined-CwDhfVxy.js';
import { m as multiClassMap, t as tw } from './multi-class-map-BELXGnQY.js';
import './atomic-icon-D7DRsDUP.js';
const Tick$1 = "<svg viewBox=\"0 0 12 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M1.5 5L4.6 7.99999L11 1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>";
const Close = "<svg viewBox=\"0 0 22 22\"><g transform=\"matrix(.7071 -.7071 .7071 .7071 -3.142 11)\"><path d=\"m9-3.4h2v26.9h-2z\"/><path d=\"m-3.4 9h26.9v2h-26.9z\"/></g></svg>";
const renderTriStateCheckbox = ({ props }) => {
    const isSelected = props.state === 'selected';
    const isExcluded = props.state === 'excluded';
    const partName = props.part ?? 'checkbox';
    const classNames = tw({
        'hover:border-primary-light focus-visible:border-primary-light grid h-4 w-4 place-items-center rounded focus-visible:outline-none': true,
        'selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light': isSelected,
        'border-neutral-dark border': !isSelected,
        'excluded bg-error hover:bg-error focus-visible:bg-error hover:border-error focus-visible:border-error': isExcluded,
        [props.class ?? '']: Boolean(props.class),
    });
    const parts = [partName];
    if (isExcluded || isExcluded) {
        parts.push(`${partName}-checked`);
    }
    const iconClassNames = {
        'w-3/5': true,
        block: isSelected || isExcluded,
        hidden: !isSelected && !isExcluded,
    };
    return x `<button
    ${n(props.ref)}
    .key=${props.key}
    id=${o(props.id)}
    class=${multiClassMap(classNames)}
    part=${parts.join(' ')}
    aria-pressed=${isSelected ? 'true' : isExcluded ? 'mixed' : 'false'}
    aria-label=${o(props.ariaLabel ?? props.text)}
    value=${o(props.text)}
    role="button"
    @click=${() => props.onToggle?.(!isSelected)}
    @mousedown=${(e) => props.onMouseDown?.(e)}
  >
    <atomic-icon
      style="stroke: 'white', fill: 'white'"
      class=${e(iconClassNames)}
      icon=${isSelected ? Tick$1 : Close}
      part=${o(props.iconPart)}
    ></atomic-icon>
  </button>`;
};
const Tick = "<svg viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m18 2-1.8-2-7.1 7.1-7.1-7.1-2 2 7.1 7.1-7.1 7.1 2 1.8 7.1-6.9 7.1 6.9 1.8-1.8-6.9-7.1z\"/></svg>";
const renderFacetValueExclude = ({ props, }) => {
    return x `<button
    class="value-exclude-button peer invisible absolute right-2 z-1 order-last ml-auto flex group-hover:visible"
    part="value-exclude-button"
    aria-label=${o(props.ariaLabel)}
    @click=${() => props.onClick?.()}
  >
    <atomic-icon
      class="bg-neutral hover:bg-error order-last w-4 rounded p-1 hover:fill-white"
      icon=${Tick}
    ></atomic-icon>
  </button> `;
};
const renderFacetValueCheckbox = ({ props }) => (children) => {
    const id = randomID('facet-value-');
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabelAttributes = {
        value: props.displayValue,
        count: props.numberOfResults,
        formattedCount: count,
        interpolation: { escapeValue: false },
    };
    const selectedAriaLabel = props.i18n.t('facet-value', ariaLabelAttributes);
    const excludedAriaLabel = props.i18n.t('facet-value-exclude', ariaLabelAttributes);
    let labelRef;
    const isTriStateCheckbox = (props) => {
        return 'state' in props && 'isSelected' in props;
    };
    const renderCheckbox$1 = () => {
        const attributes = {
            id,
            onToggle: () => props.onClick(),
            part: 'value-checkbox',
            class: 'value-checkbox',
            ariaLabel: selectedAriaLabel,
            ref: props.buttonRef,
            onMouseDown: (e) => createRipple(e, { color: 'neutral', parent: labelRef }),
            iconPart: 'value-checkbox-icon',
        };
        if (isTriStateCheckbox(props)) {
            return renderTriStateCheckbox({
                props: {
                    ...attributes,
                    state: props.state,
                },
            });
        }
        return renderCheckbox({
            props: {
                ...attributes,
                checked: props.isSelected,
            },
        });
    };
    const renderExclusion = () => {
        if (isTriStateCheckbox(props)) {
            return renderFacetValueExclude({
                props: {
                    onClick: () => props.onExclude?.(),
                    ariaLabel: excludedAriaLabel,
                },
            });
        }
    };
    return x `
      ${i(props.displayValue, x `<li class="group relative flex items-center">
          ${renderCheckbox$1()}
          <label
            ${n((ref) => {
        labelRef = ref;
    })}
            .htmlFor=${id}
            part="value-checkbox-label"
            class="items-center"
            @mousedown=${(e) => createRipple(e, { color: 'neutral' })}
            aria-hidden="true"
          >
            ${children}
            <span part="value-count" class="value-count">
              ${props.i18n.t('between-parentheses', {
        text: count,
    })}
            </span>
          </label>
          ${renderExclusion()}
        </li>`)}
    `;
};
export { renderFacetValueCheckbox as r };
//# sourceMappingURL=facet-value-checkbox-BUWKh-FZ.js.map
