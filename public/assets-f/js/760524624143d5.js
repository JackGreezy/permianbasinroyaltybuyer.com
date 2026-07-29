import { x } from './custom-element-ClSinbnR.js';
import { o } from './if-defined-CwDhfVxy.js';
import { n } from './ref-Ci0gDEiU.js';
import { t as tw, m as multiClassMap } from './multi-class-map-BELXGnQY.js';
import './atomic-icon-D7DRsDUP.js';
const Tick = "<svg viewBox=\"0 0 12 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M1.5 5L4.6 7.99999L11 1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>";
const renderCheckbox = ({ props }) => {
    const partName = props.part ?? 'checkbox';
    const classNames = tw({
        'no-outline hover:border-primary-light focus-visible:border-primary-light grid h-4 w-4 place-items-center rounded': true,
        'selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light': Boolean(props.checked),
        'border-neutral-dark border': !props.checked,
        [props.class ?? '']: Boolean(props.class),
    });
    const parts = [partName];
    if (props.checked) {
        parts.push(`${partName}-checked`);
    }
    return x `
    <button
      .key=${props.key}
      id=${o(props.id)}
      class=${multiClassMap(classNames)}
      part=${parts.join(' ')}
      aria-checked=${o(props.checked)}
      aria-current=${o(props.ariaCurrent)}
      aria-label=${o(props.ariaLabel ?? props.text)}
      value=${o(props.text)}
      role="checkbox"
      @click=${() => props.onToggle?.(!props.checked)}
      @mousedown=${(e) => props.onMouseDown?.(e)}
      ${props.ref ? n(props.ref) : ''}
    >
      <atomic-icon
        style="stroke: white"
        class="${props.checked ? 'block' : 'hidden'} w-3/5"
        .icon=${Tick}
        part=${o(props.iconPart)}
      ></atomic-icon>
    </button>
  `;
};
export { renderCheckbox as r };
//# sourceMappingURL=checkbox-BtsHT-20.js.map
