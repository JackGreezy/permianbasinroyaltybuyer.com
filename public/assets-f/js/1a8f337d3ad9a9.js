import { x } from './custom-element-ClSinbnR.js';
import { l as localizedString } from './localized-string-CQCD-kWJ.js';
import { A as ATOMIC_MODAL_EXPORT_PARTS } from './export-parts-BxOQYfpS.js';
import './atomic-modal-BGpWxOBn.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import './atomic-icon-D7DRsDUP.js';
const CloseIcon = "<svg viewBox=\"0 0 22 22\"><g transform=\"matrix(.7071 -.7071 .7071 .7071 -3.142 11)\"><path d=\"m9-3.4h2v26.9h-2z\"/><path d=\"m-3.4 9h26.9v2h-26.9z\"/></g></svg>";
const renderRefineModal = ({ props }) => (children) => {
    const flushFacetElements = () => {
        props.host.querySelector('div[slot="facets"]')?.remove();
    };
    const renderHeader = () => {
        return x `
        <div slot="header" class="contents">
          <h1 part="title" class="truncate">${props.title}</h1>
          ${renderButton({
            props: {
                style: 'text-transparent',
                class: 'grid place-items-center',
                part: 'close-button',
                onClick: props.onClose,
                ariaLabel: props.i18n.t('close'),
            },
        })(x `<atomic-icon
              part="close-icon"
              class="h-5 w-5"
              icon=${CloseIcon}
            ></atomic-icon>`)}
        </div>
      `;
    };
    const renderFooter = () => {
        return x `
        <div part="footer-content" slot="footer">
          ${renderButton({
            props: {
                style: 'primary',
                part: 'footer-button',
                class: 'flex w-full justify-center p-3 text-lg',
                onClick: props.onClose,
            },
        })(x `
            <span part="footer-button-text" class="mr-1 truncate">
              ${props.i18n.t(props.i18nFooterButtonTextKey)}
            </span>
            <span part="footer-button-count">
              ${localizedString({
            i18n: props.i18n,
            key: 'between-parentheses',
            params: {
                text: props.numberOfItems.toLocaleString(props.i18n.language),
            },
        })}
            </span>
          `)}
        </div>
      `;
    };
    return x `
      <atomic-modal
        .fullscreen=${true}
        .isOpen=${props.isOpen}
        .source=${props.openButton}
        .container=${props.host}
        .close=${props.onClose}
        .onAnimationEnded=${() => {
        if (!props.isOpen) {
            flushFacetElements();
        }
    }}
        exportparts=${ATOMIC_MODAL_EXPORT_PARTS}
        .boundary=${props.boundary ?? 'page'}
        .scope=${props.scope}
      >
        ${renderHeader()} ${children} ${renderFooter()}
      </atomic-modal>
    `;
};
export { renderRefineModal as r };
//# sourceMappingURL=modal-DlufZs53.js.map
