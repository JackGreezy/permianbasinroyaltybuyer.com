import { c as closest } from './dom-utils-0VKCjoID.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
import { e as enqueueOrDispatchInitializationEvent } from './init-queue-BrIDKWA1.js';
/**
 * Retrieves `Bindings` or `CommerceBindings` on a configured parent interface.
 * @param event - The element on which to dispatch the event, which must be the child of a configured Atomic container element.
 * @returns A promise that resolves upon initialization of the parent container element, and rejects otherwise.
 */
function fetchBindings(element) {
    return new Promise((resolve, reject) => {
        const event = buildCustomEvent(initializeEventName, (bindings) => resolve(bindings));
        const parent = closest(element, initializableElements.join(', '));
        if (!parent) {
            reject(new MissingInterfaceParentError(element.nodeName.toLowerCase()));
            return;
        }
        enqueueOrDispatchInitializationEvent(parent, event, element);
    });
}
class MissingInterfaceParentError extends Error {
    constructor(elementName) {
        super(`The "${elementName}" element must be the child of the following elements: ${initializableElements.join(', ')}`);
    }
}
const initializableElements = [
    'atomic-recs-interface',
    'atomic-search-interface',
    'atomic-commerce-interface',
    'atomic-commerce-recommendation-interface',
    'atomic-relevance-inspector',
    'atomic-insight-interface',
    'atomic-external',
];
const initializeEventName = 'atomic/initializeComponent';
export { fetchBindings as f, initializeEventName as i };
//# sourceMappingURL=initialization-lit-stencil-common-utils-B28nYmgv.js.map
