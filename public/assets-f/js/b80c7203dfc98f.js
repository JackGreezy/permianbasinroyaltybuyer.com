import { E, x } from './custom-element-ClSinbnR.js';
import { o } from './if-defined-CwDhfVxy.js';
import { n } from './ref-Ci0gDEiU.js';
import { f as filterProtocol } from './xss-utils-DleHB5ul.js';
import { b as bindAnalyticsToLink } from './bind-analytics-to-link-Y79wjwFo.js';
const renderLinkWithItemAnalytics = ({ props }) => (children) => {
    const { href, className, part, title, stopPropagation = true, ref: refCallback, attributes, tabIndex, target = '_self', rel, onMouseOver, onMouseLeave, onFocus, onBlur, onSelect, onBeginDelayedSelect, onCancelPendingSelect, onInitializeLink, } = props;
    return x `
      <a
        class=${o(className)}
        part=${o(part)}
        href=${filterProtocol(href)}
        target=${target}
        title=${o(title)}
        rel=${o(rel)}
        ${n((el) => {
        if (!el) {
            return;
        }
        const cleanup = bindAnalyticsToLink(el, {
            onSelect,
            onBeginDelayedSelect,
            onCancelPendingSelect,
            stopPropagation,
        });
        if (onInitializeLink) {
            onInitializeLink(cleanup);
        }
        if (attributes?.length) {
            [...attributes].forEach(({ nodeName, nodeValue }) => {
                el.setAttribute(nodeName, nodeValue);
            });
        }
    })}
        ${refCallback ? n(refCallback) : E}
        tabindex=${o(tabIndex)}
        @mouseover=${onMouseOver}
        @mouseleave=${onMouseLeave}
        @focus=${onFocus}
        @blur=${onBlur}
      >
        ${children}
      </a>
    `;
};
export { renderLinkWithItemAnalytics as r };
//# sourceMappingURL=item-link-BeZg03Mv.js.map
