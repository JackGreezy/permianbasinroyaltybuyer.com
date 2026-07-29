import { x } from './custom-element-ClSinbnR.js';
const renderDisplayWrapper = ({ props }) => {
    const { display, listClasses } = props;
    if (display === 'table') {
        return (children) => renderListWrapper({ props })(children);
    }
    return (children) => renderListWrapper({ props: { listClasses } })(renderListRoot({ props: { listClasses } })(children));
};
const renderListWrapper = ({ props }) => {
    const { listClasses } = props;
    return (children) => x `<div class="list-wrapper ${listClasses}">${children}</div>`;
};
const renderListRoot = ({ props }) => {
    const { listClasses } = props;
    return (children) => x `<div class="list-root ${listClasses}" part="result-list">
      ${children}
    </div>`;
};
export { renderDisplayWrapper as r };
//# sourceMappingURL=display-wrapper-CBxoiJpc.js.map
