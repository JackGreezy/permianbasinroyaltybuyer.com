import { e, i } from './directive-C5w180XZ.js';
import { e as e$1 } from './class-map-Bnlx5e07.js';
const tw = (rec) => rec;
class MultiClassMapDirective extends i {
    /**
     * A Lit directive that dynamically applies CSS classes to an element.
     *
     * This directive extends the functionality of the Lit [`classMap`](https://lit.dev/docs/templates/directives/#classmap)
     * by allowing multiple space-separated class names in a single key.
     *
     * ### Behavior:
     * - If a key contains multiple classes (for example, `'foo bar'`), all classes in the key are applied if the value is `true`.
     * - If a class appears in multiple keys, the `true` value takes precedence over `false`.
     *
     * ### Example:
     * ```typescript
     * const classMap = {
     *   'foo bar': true,
     *   'bar fiz': false,
     * };
     *
     * html`<div class=${multiClassMap(classMap)}></div>`;
     * ```
     * **Output:**
     * ```html
     * <div class="foo bar"></div>
     * ```
     *
     * ### Notes:
     * - Avoid defining multiple keys with overlapping class names, as it can lead to unintended behavior.
     * - Limit the classes to a reasonable number to prevent performance issues.
     * - The directive ensures that the final class list is deduplicated and respects precedence rules.
     */
    render(classInfo) {
        const processedClassMap = {};
        for (const [key, value] of Object.entries(classInfo)) {
            if (value) {
                key.split(/\s+/).forEach((cls) => {
                    // Skip empty class names
                    if (!cls) {
                        return;
                    }
                    processedClassMap[cls] = true;
                });
            }
        }
        return e$1(processedClassMap);
    }
}
function multiClassMap(record) {
    return e(MultiClassMapDirective)(record);
}
export { multiClassMap as m, tw as t };
//# sourceMappingURL=multi-class-map-BELXGnQY.js.map
