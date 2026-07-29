import { E, x } from './custom-element-ClSinbnR.js';
import { e, i } from './directive-C5w180XZ.js';
class RefineToggleGuardDirective extends i {
    render({ hasError, firstRequestExecuted, hasItems }, content) {
        if (hasError) {
            return E;
        }
        if (!firstRequestExecuted) {
            return x `
        <div
          part="placeholder"
          aria-hidden="true"
          class="bg-neutral mb-4 h-12 w-26 animate-pulse rounded"
        ></div>
      `;
        }
        if (!hasItems) {
            return E;
        }
        return x `${content()}`;
    }
}
const refineToggleGuard = e(RefineToggleGuardDirective);
export { refineToggleGuard as r };
//# sourceMappingURL=guard-D0aGvvZ_.js.map
