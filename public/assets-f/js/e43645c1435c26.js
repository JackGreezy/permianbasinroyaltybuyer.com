import { b as getItemLayoutClasses } from './item-layout-utils-Di0gijk4.js';
/**
 * A reactive controller that manages custom rendering function execution for item components.
 */
class CustomRenderController {
    constructor(host, options) {
        this.hasExecutedRenderFunction = false;
        this.options = {
            linkContainerRef: () => undefined,
            onRenderComplete: () => { },
            ...options,
        };
        host.addController(this);
    }
    hostConnected() {
        this.resetRenderState();
    }
    hostUpdated() {
        this.executeRenderFunction();
    }
    resetRenderState() {
        this.hasExecutedRenderFunction = false;
    }
    executeRenderFunction() {
        const renderingFunction = this.options.renderingFunction();
        const itemData = this.options.itemData();
        const rootElementRef = this.options.rootElementRef();
        if (!renderingFunction ||
            !itemData ||
            !rootElementRef ||
            this.hasExecutedRenderFunction) {
            return;
        }
        const customRenderOutput = renderingFunction(itemData, rootElementRef, this.options.linkContainerRef());
        this.options.onRenderComplete(rootElementRef, customRenderOutput);
        this.hasExecutedRenderFunction = true;
    }
}
/**
 * A reactive controller that manages layout creation and class application for item components.
 */
class ItemLayoutController {
    constructor(host, options) {
        this.layout = null;
        this.host = host;
        this.options = {
            classesOnly: false,
            ...options,
        };
        host.addController(this);
    }
    hostConnected() {
        this.createLayout();
    }
    hostUpdated() {
        if (!this.options.classesOnly) {
            this.applyLayoutClasses();
        }
    }
    /**
     * Gets the current layout config
     */
    getLayout() {
        return this.layout;
    }
    /**
     * Gets combined layout and extra classes
     */
    getCombinedClasses(additionalContent) {
        const config = this.getLayout();
        const layoutClasses = config
            ? getItemLayoutClasses(config, additionalContent)
            : [];
        const itemClasses = this.options
            .itemClasses()
            .split(/\s+/)
            .filter((c) => c);
        return [...layoutClasses, ...itemClasses];
    }
    /**
     * Applies layout classes to a specific element (useful for custom rendering)
     */
    applyLayoutClassesToElement(element, additionalContent) {
        const config = this.getLayout();
        if (!config) {
            return;
        }
        const classes = this.getCombinedClasses(additionalContent);
        if (classes.length > 0) {
            element.classList.add(...classes);
        }
    }
    applyLayoutClasses() {
        const config = this.getLayout();
        if (!config) {
            return;
        }
        const classes = this.getCombinedClasses();
        const root = this.host.shadowRoot?.querySelector('.result-root');
        if (!root || classes.length === 0) {
            return;
        }
        if (this.hasCustomRenderFunction()) {
            this.observeAndApplyClasses(root, classes);
        }
        else {
            this.addClassesToElements(root, classes);
        }
    }
    createLayout() {
        const content = this.options.content();
        if (!content) {
            console.warn(`${this.options.elementPrefix}: content property is undefined. Cannot create layout.`, this.host);
            this.layout = null;
            return;
        }
        const config = this.options.layoutConfig();
        this.layout = {
            children: content.children,
            display: config.display,
            density: config.density,
            imageSize: config.imageSize,
        };
    }
    hasCustomRenderFunction() {
        return this.options.renderingFunction() !== undefined;
    }
    addClassesToElements(root, classes) {
        if (classes.length === 0) {
            return;
        }
        const elements = root.querySelectorAll('*');
        elements.forEach((element) => {
            const tagName = element.tagName.toLowerCase();
            if (tagName.startsWith(`${this.options.elementPrefix}-`)) {
                element.classList.add(...classes);
            }
        });
    }
    observeAndApplyClasses(root, classes) {
        const observer = new MutationObserver((mutations) => {
            const hasNewElements = mutations.some((mutation) => mutation.type === 'childList' && mutation.addedNodes.length > 0);
            if (hasNewElements) {
                this.addClassesToElements(root, classes);
                observer.disconnect();
            }
        });
        observer.observe(root, { childList: true, subtree: true });
    }
}
export { CustomRenderController as C, ItemLayoutController as I };
//# sourceMappingURL=item-layout-controller-CAYxZqlT.js.map
