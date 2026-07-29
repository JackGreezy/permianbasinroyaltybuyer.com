import { g as containsVisualElement } from './utils-tjiSYtV8.js';
import { L as LightDomMixin } from './light-dom-DMtqoULx.js';
function hideEmptySection(element) {
    element.style.display = containsVisualElement(element) ? '' : 'none';
}
/**
 * Mixin for item section components that provides common functionality.
 * All item section components extend LitElement and call hideEmptySection in updated().
 *
 * @param superClass - The base class to extend
 * @param styles - The styles to apply to the section.
 * @returns A class that extends the superClass with item section functionality
 */
function ItemSectionMixin(superClass, styles) {
    class ItemSectionMixinClass extends LightDomMixin(superClass) {
        updated() {
            hideEmptySection(this);
        }
    }
    ItemSectionMixinClass.styles = styles;
    return ItemSectionMixinClass;
}
export { ItemSectionMixin as I };
//# sourceMappingURL=item-section-mixin-wEKfrHvV.js.map
