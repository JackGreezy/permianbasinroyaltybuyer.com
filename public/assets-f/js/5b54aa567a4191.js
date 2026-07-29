/**
 * A reactive controller that manages mobile breakpoint changes through event communication.
 * This controller listens for 'atomic-layout-breakpoint-change' events and updates a store
 * with the new breakpoint value.
 */
class MobileBreakpointController {
    constructor(host, store) {
        this.host = host;
        this.store = store;
        this.eventListener = this.handleBreakpointChange.bind(this);
        this.host.addController(this);
    }
    hostConnected() {
        this.host.addEventListener('atomic-layout-breakpoint-change', this.eventListener);
    }
    hostDisconnected() {
        this.host.removeEventListener('atomic-layout-breakpoint-change', this.eventListener);
    }
    handleBreakpointChange(e) {
        const customEvent = e;
        const newBreakpoint = customEvent.detail?.breakpoint;
        if (newBreakpoint && this.store.state.mobileBreakpoint !== newBreakpoint) {
            this.store.state.mobileBreakpoint = newBreakpoint;
        }
    }
}
export { MobileBreakpointController as M };
//# sourceMappingURL=mobile-breakpoint-controller-b2xUcI6H.js.map
