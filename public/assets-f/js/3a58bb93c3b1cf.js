import './atomic-icon-D7DRsDUP.js';
import { x } from './custom-element-ClSinbnR.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
const SearchSlimIcon = "<svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"7\" cy=\"7\" r=\"6.5\" stroke=\"currentColor\"/>\n<path d=\"M16 16L12 12\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";
const renderSubmitButton = ({ props }) => {
    const { i18n, disabled, onClick } = props;
    return x `<div
    part="submit-button-wrapper"
    class="mr-2 flex items-center justify-center py-2"
  >
    ${renderButton({
        props: {
            style: 'text-primary',
            class: 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
            part: 'submit-button',
            ariaLabel: i18n.t('search'),
            onClick: () => {
                onClick?.();
            },
            disabled,
        },
    })(x `<atomic-icon
        part="submit-icon"
        icon=${SearchSlimIcon}
        class="h-4 w-4"
      ></atomic-icon>`)}
  </div>`;
};
export { renderSubmitButton as r };
//# sourceMappingURL=submit-button-Bovdh-gf.js.map
