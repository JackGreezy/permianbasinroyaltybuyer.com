import { x } from './custom-element-ClSinbnR.js';
import { i } from './keyed-B2UhaAyp.js';
import { o } from './map-D-loUq-y.js';
import './atomic-result-placeholder-CVQnE7Hk.js';
import './atomic-result-table-placeholder-CpBcgHu9.js';
const renderItemPlaceholders = ({ props }) => {
    const { display } = props;
    if (display === 'table') {
        return renderTableItemPlaceholders({ props });
    }
    return renderGridOrListItemPlaceholders({ props });
};
const renderGridOrListItemPlaceholders = ({ props }) => {
    const placeholders = Array.from({ length: props.numberOfPlaceholders });
    return x `${o(placeholders, (i$1) => x `${i(`placeholder-${i$1}`, x `<atomic-result-placeholder
          .density=${props.density}
          .display=${props.display}
          .imageSize=${props.imageSize}
        ></atomic-result-placeholder>`)}`)}`;
};
const renderTableItemPlaceholders = ({ props }) => {
    return x `<atomic-result-table-placeholder
    .density=${props.density}
    .imageSize=${props.imageSize}
    .rows=${props.numberOfPlaceholders}
  ></atomic-result-table-placeholder>`;
};
export { renderItemPlaceholders as r };
//# sourceMappingURL=item-placeholders-DxoTLMuy.js.map
