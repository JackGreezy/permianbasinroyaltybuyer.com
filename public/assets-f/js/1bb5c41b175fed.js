import { x } from './custom-element-ClSinbnR.js';
import { n } from './ref-Ci0gDEiU.js';
const renderGridLayout = ({ props }) => {
    const { selectorForItem, setRef } = props;
    let ref;
    const handleClick = (event) => {
        event.preventDefault();
        ref?.querySelector(selectorForItem)?.click();
    };
    return (children) => x ` <div
      part="result-list-grid-clickable-container outline"
      ${n((element) => {
        ref = element;
        setRef(element);
    })}
      @click=${handleClick}
    >
      ${children}
    </div>`;
};
export { renderGridLayout as r };
//# sourceMappingURL=grid-layout-DBuRsaw6.js.map
