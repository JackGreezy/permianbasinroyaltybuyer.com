import { I as ItemContextController } from './item-context-controller-BgvMNQCs.js';
/**
 * Creates a [Lit reactive controller](https://lit.dev/docs/composition/controllers/) for managing result context in result template components.
 *
 * @param host - The Lit component instance
 * @param options - Configuration options
 * @returns ItemContextController instance configured for atomic-result
 */
function createResultContextController(host, options = {}) {
    return new ItemContextController(host, {
        parentName: 'atomic-result',
        folded: options.folded ?? false,
    });
}
export { createResultContextController as c };
//# sourceMappingURL=result-context-controller-C72BQJg7.js.map
