import { E, x } from './custom-element-ClSinbnR.js';
import { o } from './if-defined-CwDhfVxy.js';
import { n } from './ref-Ci0gDEiU.js';
import { m as multiClassMap } from './multi-class-map-BELXGnQY.js';
import { c as createRipple } from './ripple-utils-DMduLOet.js';
import { g as getRippleColorForButtonStyle, a as getClassNameForButtonStyle } from './button-style-DV1FJlx9.js';
const renderRadioButton = ({ props, }) => {
    const classNames = {
        'btn-radio': true,
        selected: Boolean(props.checked),
        ...(props.class && { [props.class]: true }),
        ...(props.style && { [getClassNameForButtonStyle(props.style)]: true }),
    };
    const onMouseDown = async (e) => {
        if (props.style) {
            const rippleColor = getRippleColorForButtonStyle(props.style);
            await createRipple(e, { color: rippleColor });
        }
    };
    const handleKeyDown = async (event) => {
        if (props.selectWhenFocused !== false) {
            return;
        }
        const { key } = event;
        const radioGroup = event.currentTarget.parentNode;
        if (!radioGroup || !isArrowKey(key)) {
            return;
        }
        event.preventDefault();
        const buttons = getRadioButtons(radioGroup);
        const currentIndex = getCurrentIndex(buttons, event.currentTarget);
        const newIndex = getNewIndex(key, currentIndex, buttons.length);
        if (buttons[newIndex]) {
            if (props.onFocusCallback) {
                await props.onFocusCallback(buttons, buttons[currentIndex], buttons[newIndex]);
            }
            else {
                buttons[newIndex].focus();
            }
        }
    };
    const isArrowKey = (key) => {
        return ['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'].includes(key);
    };
    const getRadioButtons = (radioGroup) => {
        return Array.from(radioGroup.querySelectorAll('[type="radio"]'));
    };
    const getCurrentIndex = (buttons, currentButton) => {
        return buttons.findIndex((button) => button === currentButton);
    };
    const getNewIndex = (key, currentIndex, length) => {
        switch (key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                return (currentIndex - 1 + length) % length;
            case 'ArrowRight':
            case 'ArrowDown':
                return (currentIndex + 1) % length;
            default:
                return currentIndex;
        }
    };
    const onChange = (e) => {
        const input = e.currentTarget;
        if (input.checked && props.onChecked) {
            props.onChecked();
        }
    };
    const radioButtonRef = props.ref ? n(props.ref) : E;
    return x `
    <input
      type="radio"
      name=${props.groupName}
      class=${multiClassMap(classNames)}
      value=${o(props.text)}
      part=${o(props.part)}
      aria-label=${o(props.ariaLabel ?? props.text)}
      aria-current=${o(props.ariaCurrent)}
      aria-roledescription=${o(props.ariaRoleDescription)}
      .checked=${Boolean(props.checked)}
      ?checked=${Boolean(props.checked)}
      .key=${props.key}
      @focus=${props.onFocus}
      @change=${onChange}
      @keydown=${handleKeyDown}
      @mousedown=${onMouseDown}
      ${radioButtonRef}
    />
  `;
};
export { renderRadioButton as r };
//# sourceMappingURL=radio-button-B_orPDne.js.map
