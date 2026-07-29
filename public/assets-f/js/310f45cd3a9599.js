import { E, x } from './custom-element-ClSinbnR.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
const renderRefineToggleButton = ({ props }) => {
    return x `${renderButton({
        props: {
            style: 'outline-primary',
            class: 'w-full p-3',
            onClick: props.onClick,
            text: props.i18n.t('sort-and-filter'),
            ref: props.refCallback,
            part: 'button',
        },
    })(E)}`;
};
export { renderRefineToggleButton as r };
//# sourceMappingURL=button-B_-bWJOf.js.map
