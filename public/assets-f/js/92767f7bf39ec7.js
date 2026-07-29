import { g as getFirstFocusableDescendant } from './accessibility-utils-BHnCpu87.js';
import { o as once, d as defer } from './utils-tjiSYtV8.js';
import { u as updateBreakpoints } from './replace-breakpoint-utils--qEQDWxF.js';
const resultComponentClass = 'result-component';
class ItemListCommon {
    constructor(props) {
        this.props = props;
        this.props.store.setLoadingFlag(this.props.loadingFlag);
        this.props.store.state.resultList = this;
        this.updateBreakpointsOnce = once(() => updateBreakpoints(this.props.host));
        this.props.nextNewItemTarget.registerFocusCallback(() => {
            this.indexOfResultToFocus = undefined;
        });
    }
    updateBreakpoints() {
        this.updateBreakpointsOnce();
    }
    getResultId(uniqueIdOnResult, searchResponseId, density, imageSize) {
        return `${uniqueIdOnResult}${searchResponseId}${density}${imageSize}`;
    }
    setNewResultRef(element, resultIndex) {
        if (resultIndex === 0) {
            this.firstResultEl = element;
        }
        if (resultIndex !== this.indexOfResultToFocus) {
            return;
        }
        if (!element.children.length && !element.shadowRoot?.children.length) {
            return;
        }
        this.indexOfResultToFocus = undefined;
        const elementToFocus = getFirstFocusableDescendant(element) ?? element;
        this.props.nextNewItemTarget.setTarget(elementToFocus);
    }
    focusOnNextNewResult() {
        this.indexOfResultToFocus = this.props.getCurrentNumberOfItems();
        this.props.nextNewItemTarget.focusOnNextTarget();
    }
    // TODO - KIT-4227 refactor this method using requestAnimationFrame instead of defer, e.g.,
    // public async focusOnFirstResultAfterNextSearch2() {
    //   window.requestAnimationFrame(() => {
    //     return new Promise<void>((resolve) => {
    //       if (this.props.getIsLoading()) {
    //         this.firstResultEl = undefined;
    //       }
    //       const unsub = this.props.engineSubscribe(async () => {
    //         window.requestAnimationFrame(() => {
    //           if (!this.props.getIsLoading() && this.firstResultEl) {
    //             const elementToFocus =
    //               getFirstFocusableDescendant(this.firstResultEl) ??
    //               this.firstResultEl;
    //             this.props.nextNewItemTarget.setTarget(elementToFocus);
    //             this.props.nextNewItemTarget.focus();
    //             this.firstResultEl = undefined;
    //             unsub();
    //             resolve();
    //           }
    //         });
    //       });
    //     });
    //   });
    // }
    async focusOnFirstResultAfterNextSearch() {
        await defer();
        return new Promise((resolve) => {
            if (this.props.getIsLoading()) {
                this.firstResultEl = undefined;
            }
            const unsub = this.props.engineSubscribe(async () => {
                await defer();
                if (!this.props.getIsLoading() && this.firstResultEl) {
                    const elementToFocus = getFirstFocusableDescendant(this.firstResultEl) ??
                        this.firstResultEl;
                    this.props.nextNewItemTarget.setTarget(elementToFocus);
                    this.props.nextNewItemTarget.focus();
                    this.firstResultEl = undefined;
                    unsub();
                    resolve();
                }
            });
        });
    }
}
export { ItemListCommon as I, resultComponentClass as r };
//# sourceMappingURL=item-list-common-DSQwU3VE.js.map
