import { E, x } from './custom-element-ClSinbnR.js';
import { o } from './if-defined-CwDhfVxy.js';
import { n } from './ref-Ci0gDEiU.js';
import { n as n$1 } from './when-BzW5QVN4.js';
import { c as createRipple } from './ripple-utils-DMduLOet.js';
import { g as getRippleColorForButtonStyle, a as getClassNameForButtonStyle } from './button-style-DV1FJlx9.js';
const renderButton = ({ props }) => (children) => {
    const rippleColor = getRippleColorForButtonStyle(props.style);
    const className = getClassNameForButtonStyle(props.style);
    return x `<button
      type=${o(props.type)}
      title=${o(props.title)}
      tabindex=${o(props.tabIndex)}
      role=${o(props.role)}
      part=${o(props.part)}
      form=${o(props.form)}
      class=${props.class ? `${className} ${props.class}` : className}
      aria-pressed=${o(props.ariaPressed)}
      aria-label=${o(props.ariaLabel)}
      aria-hidden=${o(props.ariaHidden)}
      aria-expanded=${o(props.ariaExpanded)}
      aria-current=${o(props.ariaCurrent)}
      aria-controls=${o(props.ariaControls)}
      aria-checked=${o(props.ariaChecked)}
      @mousedown=${(e) => createRipple(e, { color: rippleColor })}
      @click=${props.onClick}
      ?disabled=${props.disabled}
      ${props.ref ? n(props.ref) : E}
    >
      ${n$1(props.text, () => x `<span class="truncate">${props.text}</span>`)}
      ${children}
    </button>`;
};
export { renderButton as r };
//# sourceMappingURL=button-DE0Kx0NV.js.map
