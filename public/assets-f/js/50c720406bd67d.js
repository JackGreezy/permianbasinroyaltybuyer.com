import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
const itemContextEventName = 'atomic/resolveResult';
class MissingParentError extends Error {
    constructor(elementName, parentName) {
        super(`The "${elementName}" element must be the child of an "${parentName}" element.`);
    }
}
function extractFolded(item, returnFolded) {
    if (returnFolded) {
        if ('children' in item) {
            return item;
        }
        else {
            return { children: [], result: item };
        }
    }
    if ('children' in item && 'result' in item) {
        return item.result;
    }
    return item;
}
/**
 * A reactive controller that manages item context data from parent components.
 * Handles fetching item data via custom events and manages error states.
 */
class ItemContextController {
    constructor(host, options = {}) {
        this._item = null;
        this._error = null;
        this.host = host;
        this.parentName = options.parentName ?? 'atomic-result';
        this.folded = options.folded ?? false;
        host.addController(this);
    }
    get item() {
        return this._error ? null : this._item;
    }
    get error() {
        return this._error;
    }
    get hasError() {
        return this._error !== null;
    }
    hostConnected() {
        this._resolveItemContext();
    }
    _resolveItemContext() {
        const event = buildCustomEvent(itemContextEventName, (item) => {
            this._item = extractFolded(item, this.folded);
            this._error = null;
            this.host.error = null;
            this.host.requestUpdate();
        });
        const canceled = this.host.dispatchEvent(event);
        if (canceled) {
            const elementName = this.host.nodeName.toLowerCase();
            this._error = new MissingParentError(elementName, this.parentName);
            this._item = null;
            this.host.error = this._error;
            this.host.requestUpdate();
        }
    }
}
export { ItemContextController as I };
//# sourceMappingURL=item-context-controller-BgvMNQCs.js.map
