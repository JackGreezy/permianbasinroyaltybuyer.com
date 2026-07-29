import { c as closest } from './dom-utils-0VKCjoID.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
/**
 * Dispatches an event which retrieves the `SearchBoxSuggestionsBindings` on a configured parent search box.
 *
 * @param event Event sent from the registered query suggestions to the parent search box
 * @param element Element on which to dispatch the event, which must be the child of a configured search box
 * @param allowedSearchBoxElements Optional array of allowed search box element selectors
 *
 * @throws Error if the element is not a child of an allowed search box element
 */
const dispatchSearchBoxSuggestionsEvent = (event, element, allowedSearchBoxElements = searchBoxElements) => {
    const interfaceElement = closest(element, searchBoxElements.join(', '));
    if (!interfaceElement) {
        throw new Error(`The "${element.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${allowedSearchBoxElements.join(', ')}`);
    }
    void dispatchSearchBoxSuggestionsEventEventually(interfaceElement, element, event);
};
const searchBoxElements = [
    'atomic-search-box',
    'atomic-insight-search-box',
    'atomic-commerce-search-box',
];
const isLitElementLoosely = (candidate) => 'updateComplete' in candidate &&
    candidate.updateComplete instanceof Promise;
const dispatchSearchBoxSuggestionsEventEventually = async (interfaceElement, element, event) => {
    await customElements.whenDefined(interfaceElement.nodeName.toLowerCase());
    if (isLitElementLoosely(interfaceElement)) {
        await interfaceElement.updateComplete;
    }
    else if ('componentOnReady' in interfaceElement) {
        await interfaceElement.componentOnReady();
    }
    element.dispatchEvent(buildCustomEvent('atomic/searchBoxSuggestion/register', event));
};
export { dispatchSearchBoxSuggestionsEvent as d };
//# sourceMappingURL=suggestions-events-CDJMFGDZ.js.map
