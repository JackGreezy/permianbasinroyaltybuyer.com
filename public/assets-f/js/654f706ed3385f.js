import { x, i, t } from './custom-element-ClSinbnR.js';
import { r } from './state-VLCpXkCg.js';
import { o } from './style-map-BeDDoWL4.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
import { b as buildDebouncedQueue } from './debounce-utils-D96OSgvX.js';
import { r as randomID } from './utils-tjiSYtV8.js';
import './property-DfSMRLwy.js';
import './directive-C5w180XZ.js';
import './purify.es-BkIzpzFh.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-aria-live` component notifies screen readers of changes in the search and commerce interfaces.
 *
 * @event atomic/accessibility/findAriaLive - Dispatches an event to find the `atomic-aria-live` element.
 */
let AtomicAriaLive = class AtomicAriaLive extends LightDomMixin(i) {
    constructor() {
        super(...arguments);
        this.regions = {};
        this.messagesQueue = buildDebouncedQueue({ delay: 500 });
        this.onFindAriaLive = (event) => {
            const customEvent = event;
            customEvent.detail.element = this;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.ariaLiveId = randomID('atomic-aria-live-');
        document.addEventListener('atomic/accessibility/findAriaLive', this.onFindAriaLive);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.messagesQueue.clear();
        document.removeEventListener('atomic/accessibility/findAriaLive', this.onFindAriaLive);
    }
    /**
     * Updates the message and assertiveness for a specific ARIA live region.
     * If a message is provided, the update is debounced to avoid rapid changes.
     * If the message is empty, any pending update is canceled and the region is cleared immediately.
     *
     * @param region - The name of the ARIA live region to update.
     * @param message - The message to announce in the region.
     * @param assertive - Whether the region should use 'assertive' or 'polite' mode.
     */
    updateMessage(region, message, assertive) {
        const updateRegion = () => {
            this.regions = { ...this.regions, [region]: { assertive, message } };
        };
        if (message) {
            this.messagesQueue.enqueue(updateRegion, region);
        }
        else {
            this.messagesQueue.cancelActionIfQueued(region);
            updateRegion();
        }
    }
    /**
     * Registers a new ARIA live region if it does not already exist.
     *
     * @param region - The name of the ARIA live region to register.
     * @param assertive - Whether the region should use 'assertive' or 'polite' mode.
     */
    registerRegion(region, assertive) {
        if (region in this.regions) {
            return;
        }
        this.regions = { ...this.regions, [region]: { assertive, message: '' } };
    }
    render() {
        const hostStyles = {
            position: 'absolute',
            display: 'block',
            height: '0',
            overflow: 'hidden',
            margin: '0',
        };
        return x `
      <div style=${o(hostStyles)}>
        ${Object.entries(this.regions).map(([regionName, { assertive, message }]) => x `
            <div
              id="${this.ariaLiveId}-${regionName}"
              aria-live="${assertive ? 'assertive' : 'polite'}"
              role="status"
            >
              ${message}
            </div>
          `)}
      </div>
    `;
    }
};
__decorate([
    r()
], AtomicAriaLive.prototype, "regions", void 0);
AtomicAriaLive = __decorate([
    t('atomic-aria-live')
], AtomicAriaLive);
export { AtomicAriaLive };
//# sourceMappingURL=atomic-aria-live-BSHBw6eS.js.map
