import { isArray, isUndefined } from '/bueno/v1.1.7/bueno.esm.js';
import { E, x } from './custom-element-ClSinbnR.js';
import { o } from './unsafe-html-Deeupm6Y.js';
function possiblyWarnOnBadFieldType(field, itemValueRaw, host, logger) {
    if (isArray(itemValueRaw)) {
        logger.error(`${host.nodeName.toLowerCase()} cannot be used with multi value field "${field}" with values "${itemValueRaw}".`, host);
    }
}
const renderItemTextFallback = ({ props }) => (children) => {
    const { getProperty, item, field, host, logger, defaultValue } = props;
    const raw = getProperty(item, field);
    possiblyWarnOnBadFieldType(field, raw, host, logger);
    if (isUndefined(defaultValue)) {
        host.remove();
        return E;
    }
    else {
        return x `${children}`;
    }
};
function renderWithHighlights(value, highlights, highlightString) {
    const openingDelimiter = '_openingDelimiter_';
    const closingDelimiter = '_closingDelimiter_';
    const highlightedValue = highlightString({
        content: value,
        openingDelimiter,
        closingDelimiter,
        highlights,
    });
    return highlightedValue
        .replace(new RegExp(openingDelimiter, 'g'), '<b>')
        .replace(new RegExp(closingDelimiter, 'g'), '</b>');
}
/**
 * The renderItemTextHighlighted functional component renders text with highlighted keywords.
 */
const renderItemTextHighlighted = ({ props }) => {
    const { textValue, highlightKeywords, highlightString, onError = (error) => console.error(error), } = props;
    try {
        const highlightedValue = renderWithHighlights(textValue, highlightKeywords, highlightString);
        return x `${o(highlightedValue)}`;
    }
    catch (error) {
        onError(error);
        return E;
    }
};
export { renderItemTextHighlighted as a, renderItemTextFallback as r };
//# sourceMappingURL=item-text-highlighted-Cual1rid.js.map
