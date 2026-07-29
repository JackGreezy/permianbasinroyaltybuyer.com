import { E } from './custom-element-ClSinbnR.js';
const renderItemList = ({ props }) => (children) => {
    const { hasError, hasItems, firstRequestExecuted, hasTemplate } = props;
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return E;
    }
    return children;
};
export { renderItemList as r };
//# sourceMappingURL=item-list-CPLK2F2Y.js.map
