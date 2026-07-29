import { E } from './custom-element-ClSinbnR.js';
import { s as shouldDisplayOnCurrentTab } from './tab-utils-CrE-aPug.js';
const renderTabWrapper = ({ props }) => (children) => {
    const { tabsIncluded, tabsExcluded, activeTab } = props;
    if (!shouldDisplayOnCurrentTab([...tabsIncluded], [...tabsExcluded], activeTab)) {
        return E;
    }
    return children;
};
export { renderTabWrapper as r };
//# sourceMappingURL=tab-wrapper-CgvDxnep.js.map
