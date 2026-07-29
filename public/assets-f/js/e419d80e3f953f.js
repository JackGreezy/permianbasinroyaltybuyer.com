import { x } from './custom-element-ClSinbnR.js';
import './atomic-component-error-CzI0_SHn.js';
/**
 * A decorator that guards the render method of a LitElement component against errors.
 *
 * It wraps the render method and checks for an `error` property on the component.
 * If an error is present, it logs the error to the console and renders an error message.
 * Otherwise, it calls the original render method.
 *
 * @example
 * ```typescript
 * @errorGuard()
 * render() {
 *   // ...
 * }
 * ```
 *
 * @returns A decorator function that wraps the render method with error handling logic.
 * @throws {Error} If the decorator is used on a method other than the render method.
 */
function errorGuard() {
    return (_, propertyKey, descriptor) => {
        if (descriptor?.value === undefined || propertyKey !== 'render') {
            throw new Error('@errorGuard decorator can only be used on render method');
        }
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            if (this.error) {
                return x `<atomic-component-error
          .error=${this.error}
          .element=${this}
        ></atomic-component-error>`;
            }
            return originalMethod.call(this);
        };
        return descriptor;
    };
}
export { errorGuard as e };
//# sourceMappingURL=error-guard-dbxXbsXK.js.map
