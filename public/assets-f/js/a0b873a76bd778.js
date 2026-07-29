import { x } from './custom-element-ClSinbnR.js';
import { t as tw, m as multiClassMap } from './multi-class-map-BELXGnQY.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-C44kNtub.js';
import { r as regexEncode } from './string-utils-wMMP9nsD.js';
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var escapeHtml_1;
var hasRequiredEscapeHtml;
function requireEscapeHtml () {
	if (hasRequiredEscapeHtml) return escapeHtml_1;
	hasRequiredEscapeHtml = 1;
	/**
	 * Module variables.
	 * @private
	 */
	var matchHtmlRegExp = /["'&<>]/;
	/**
	 * Module exports.
	 * @public
	 */
	escapeHtml_1 = escapeHtml;
	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */
	function escapeHtml(string) {
	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);
	  if (!match) {
	    return str;
	  }
	  var escape;
	  var html = '';
	  var index = 0;
	  var lastIndex = 0;
	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34: // "
	        escape = '&quot;';
	        break;
	      case 38: // &
	        escape = '&amp;';
	        break;
	      case 39: // '
	        escape = '&#39;';
	        break;
	      case 60: // <
	        escape = '&lt;';
	        break;
	      case 62: // >
	        escape = '&gt;';
	        break;
	      default:
	        continue;
	    }
	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }
	    lastIndex = index + 1;
	    html += escape;
	  }
	  return lastIndex !== index
	    ? html + str.substring(lastIndex, index)
	    : html;
	}
	return escapeHtml_1;
}
var escapeHtmlExports = requireEscapeHtml();
var escapeHtml = /*@__PURE__*/getDefaultExportFromCjs(escapeHtmlExports);
/**
 * Meant to be used inside the `shouldUpdate` lifecycle method.
 * It prevents updating the facet between two matchless facet searches.
 * It also prevents updating the facet until the first search has loaded.
 */
function shouldUpdateFacetSearchComponent(nextFacetSearchState, prevFacetSearchState) {
    const hasQuery = nextFacetSearchState.query !== '';
    const stillNoValues = !nextFacetSearchState.values.length && !prevFacetSearchState.values.length;
    const hasFinishedLoading = !nextFacetSearchState.isLoading && prevFacetSearchState.isLoading;
    if (hasQuery && stillNoValues) {
        return hasFinishedLoading;
    }
    return true;
}
function shouldDisplaySearchResults(facetSearchState) {
    const hasQuery = facetSearchState.query !== '';
    const isLoading = facetSearchState.isLoading;
    const hasValues = !!facetSearchState.values.length;
    if (!hasQuery) {
        return false;
    }
    if (hasValues) {
        return true;
    }
    return !isLoading;
}
function highlightSearchResult(resultValue, searchQuery = '') {
    const sanitizedResult = escapeHtml(resultValue);
    if (searchQuery.trim() === '') {
        return sanitizedResult;
    }
    const regex = new RegExp(`(${regexEncode(escapeHtml(searchQuery))})`, 'i');
    return escapeHtml(resultValue).replace(regex, '<span part="search-highlight" class="font-bold">$1</span>');
}
const renderFacetValueLabelHighlight = ({ props }) => {
    const classNames = tw({
        'value-label peer-hover:text-error truncate': true,
        'font-bold': props.isSelected || !!props.isExcluded,
    });
    return x `<span
    title=${props.displayValue}
    part="value-label"
    class=${multiClassMap(classNames)}
    .innerHTML=${highlightSearchResult(props.displayValue, props.searchQuery)}
  ></span>`;
};
export { shouldDisplaySearchResults as a, escapeHtml as e, renderFacetValueLabelHighlight as r, shouldUpdateFacetSearchComponent as s };
//# sourceMappingURL=facet-value-label-highlight-P4jF_zNt.js.map
