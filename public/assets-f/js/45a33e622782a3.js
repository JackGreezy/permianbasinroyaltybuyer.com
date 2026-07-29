/**
 * Performs a deep equality comparison between two values.
 * Handles primitives, null/undefined, arrays, and objects.
 *
 * @param a - First value to compare
 * @param b - Second value to compare
 * @returns true if values are deeply equal, false otherwise
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    const typeA = typeof a;
    const typeB = typeof b;
    if (typeA !== typeB) {
        return false;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (typeA === 'object') {
        const aObj = a;
        const bObj = b;
        const aKeys = Object.keys(aObj);
        const bKeys = Object.keys(bObj);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (let i = 0; i < aKeys.length; i++) {
            const key = aKeys[i];
            if (!deepEqual(aObj[key], bObj[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
}
/**
 * A reactive controller that validates the props of a Lit component against a
 * provided Bueno schema.
 *
 * It validates the props when the host is connected to the DOM and whenever
 * the host updates, re-validating only if the props have changed since the last
 * validation.
 *
 * If validation fails, the controller either sets the `error` property on the host
 * or logs a warning, depending on the `throwOnError` configuration.
 */
class ValidatePropsController {
    /**
     * Creates a `ValidatePropsController`.
     *
     * @param host The host element.
     * @param getProps A function that returns the current props to validate.
     * @param schema The Bueno schema to validate the props against.
     * @param throwOnError Whether to throw an error (true) or log a warning (false) when validation fails. Defaults to true.
     */
    constructor(host, getProps, schema, throwOnError = true) {
        this.host = host;
        this.getProps = getProps;
        this.schema = schema;
        this.throwOnError = throwOnError;
        host.addController(this);
    }
    hostConnected() {
        if (this.host.error === null) {
            // @ts-expect-error: we need to set the error to undefined if it was null.
            this.host.error = undefined;
        }
    }
    hostUpdate() {
        if (this.host.error && this.host.error !== this.lastValidationError) {
            return;
        }
        this.currentProps = this.getProps();
        if (deepEqual(this.currentProps, this.previousProps)) {
            return;
        }
        // @ts-expect-error: we need to clear the error.
        this.host.error = undefined;
        this.validateProps();
    }
    validateProps() {
        try {
            this.schema.validate(this.currentProps);
        }
        catch (error) {
            if (this.throwOnError) {
                this.host.error = error;
                this.lastValidationError = error;
            }
            else {
                const message = `Prop validation failed for component ${this.host.tagName?.toLowerCase()}: ${error.message}`;
                console.warn(message, this.host);
            }
        }
        finally {
            this.previousProps = this.currentProps;
        }
    }
}
export { ValidatePropsController as V };
//# sourceMappingURL=validate-props-controller-R9C-T-Ya.js.map
