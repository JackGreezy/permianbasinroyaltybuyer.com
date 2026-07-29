import { i } from './custom-element-ClSinbnR.js';
const ChildrenUpdateCompleteMixin = (superClass) => {
    class ChildrenUpdateCompleteMixinClass extends superClass {
        async getUpdateComplete() {
            const baseUpdateComplete = await super.getUpdateComplete();
            const children = Array.from(this.querySelectorAll('*'));
            this.shadowRoot
                ?.querySelectorAll('*')
                .forEach((child) => children.push(child));
            await Promise.all(children.map(async (child) => {
                if (child instanceof i) {
                    // @ts-expect-error Atomic elements have an `error` property.
                    if (child.error) {
                        /**
                         * If the child has an error, we don't wait for it to update since
                         * updateComplete hangs indefinitely if an error is thrown during rendering.
                         * This hanging behaviour is out of our control and is from Lit.
                         */
                        return;
                    }
                    await child.updateComplete;
                }
                else if ('componentOnReady' in child) {
                    await child.componentOnReady();
                }
            }));
            return baseUpdateComplete;
        }
    }
    return ChildrenUpdateCompleteMixinClass;
};
export { ChildrenUpdateCompleteMixin as C };
//# sourceMappingURL=children-update-complete-mixin-BsCPHIEs.js.map
