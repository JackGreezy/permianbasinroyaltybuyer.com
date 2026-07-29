/**
 * A mixin class that provides slot functionality for LitElement components
 * that render in the light DOM (no shadow DOM).
 *
 * Provides the `renderDefaultSlotContent()` method, which returns the default slot’s content or a fallback if the slot is empty.
 *
 * @example
 * ```typescript
 * class MyElement extends SlotsForNoShadowDOMMixin(LitElement) {
 *   render() {
 *     return html`
 *       <div class="header">${this.renderDefaultSlotContent()}</div>
 *     `;
 *   }
 * }
 * ```
 *
 * @implements {LightDOMWithSlots}
 */
const SlotsForNoShadowDOMMixin = (superClass) => {
    class SlotsForNoShadowDOMClass extends superClass {
        constructor() {
            super(...arguments);
            /**
             * @internal
             */
            this.slotContent = {};
            /**
             * @internal
             */
            this.slotPlaceholders = [];
        }
        createRenderRoot() {
            return this;
        }
        /**
         * We adopt the children here once, just before the first render.
         */
        willUpdate(changedProperties) {
            super.willUpdate?.(changedProperties);
            if (!this.hasUpdated) {
                this.adoptChildren();
            }
        }
        /**
         * After Lit has rendered, we find our placeholders and swap them
         * with the actual nodes from the slots.
         */
        updated(changedProperties) {
            super.updated?.(changedProperties);
            for (const { placeholder, nodes } of this.slotPlaceholders) {
                placeholder.replaceWith(...nodes);
            }
            // Clear the list for the next render cycle.
            this.slotPlaceholders = [];
        }
        /**
         * Reads the initial child nodes, sorts them into the `slots` map,
         * and removes them from the DOM temporarily.
         */
        adoptChildren() {
            const children = Array.from(this.childNodes);
            for (const child of children) {
                const slotName = child instanceof Element ? child.getAttribute('slot') || '' : '';
                if (!this.slotContent[slotName]) {
                    this.slotContent[slotName] = [];
                }
                this.slotContent[slotName].push(child);
                child.remove();
            }
        }
        isTextNodeEmpty(node) {
            return !node.textContent || !node.textContent.trim();
        }
        isSlotEmpty(slot) {
            const content = this.slotContent[slot];
            return (!content ||
                content.every((child) => {
                    return (child instanceof Comment ||
                        (child instanceof Text && this.isTextNodeEmpty(child)));
                }));
        }
        /**
         * Returns the content for the default slot.
         * If no nodes are assigned to the default slot, returns the provided fallback content.
         *
         * @param defaultContent - Optional content to render if the default slot is empty.
         * @returns A `TemplateResult` representing the slot placeholder if nodes exist, otherwise an array containing the default content or an empty array.
         */
        renderDefaultSlotContent(defaultContent) {
            if (!this.isSlotEmpty('')) {
                return this.createSlotPlaceholder(this.slotContent['']);
            }
            return defaultContent ? [defaultContent] : [];
        }
        /**
         * Creates a placeholder comment that will be replaced in `updated`.
         */
        createSlotPlaceholder(nodes) {
            const placeholder = document.createComment('slot');
            this.slotPlaceholders.push({ placeholder, nodes });
            return [placeholder];
        }
    }
    return SlotsForNoShadowDOMClass;
};
export { SlotsForNoShadowDOMMixin as S };
//# sourceMappingURL=slots-for-no-shadow-dom-mixin-q5D7A0A_.js.map
