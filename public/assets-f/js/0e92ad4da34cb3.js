import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
const interactiveItemContextEventName = 'atomic/resolveInteractiveResult';
/**
 * A reactive controller that manages interactive item context data from parent components.
 * Handles fetching interactive item data via custom events.
 */
class InteractiveItemContextController {
    constructor(host) {
        this._interactiveItem = null;
        this.host = host;
        host.addController(this);
    }
    get interactiveItem() {
        return this._interactiveItem;
    }
    hostConnected() {
        this._resolveInteractiveItemContext();
    }
    _resolveInteractiveItemContext() {
        const event = buildCustomEvent(interactiveItemContextEventName, (item) => {
            this._interactiveItem = item;
            this.host.requestUpdate();
        });
        this.host.dispatchEvent(event);
    }
}
export { InteractiveItemContextController as I };
//# sourceMappingURL=interactive-item-context-controller-DMdMdxNz.js.map
