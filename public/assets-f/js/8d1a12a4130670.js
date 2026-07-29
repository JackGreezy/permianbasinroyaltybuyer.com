import { r as randomID } from './utils-tjiSYtV8.js';
/**
 * A reactive controller that manages dynamic layout styles.
 */
class LayoutStylesController {
    constructor(host, stylesBuilder, componentPrefix) {
        this.dynamicStyleSheet = null;
        this.host = host;
        this.stylesBuilder = stylesBuilder;
        this.componentPrefix = componentPrefix;
        this.host.addController(this);
    }
    hostConnected() {
        if (!this.host.id) {
            this.host.id = randomID(this.componentPrefix);
        }
        this.host.updateComplete.then(() => this.updateStyles());
    }
    /**
     * Updates the dynamic styles based on the current mobile breakpoint
     */
    updateStyles() {
        const parent = this.host.getRootNode();
        const isDocumentOrShadowRoot = parent instanceof Document || parent instanceof ShadowRoot;
        if (!isDocumentOrShadowRoot) {
            return;
        }
        const newStylesCSS = this.stylesBuilder(this.host, this.host.mobileBreakpoint);
        if (!this.dynamicStyleSheet) {
            this.dynamicStyleSheet = new CSSStyleSheet();
            this.dynamicStyleSheet.replaceSync(newStylesCSS);
            parent.adoptedStyleSheets = [
                ...parent.adoptedStyleSheets,
                this.dynamicStyleSheet,
            ];
            return;
        }
        this.dynamicStyleSheet.replaceSync(newStylesCSS);
    }
}
export { LayoutStylesController as L };
//# sourceMappingURL=layout-styles-controller--afw7c_R.js.map
