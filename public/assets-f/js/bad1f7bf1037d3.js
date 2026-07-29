import { buildSearchStatus, buildHistoryManager, buildQuerySummary } from '/headless/v3.45.1/headless.esm.js';
import { E, i, x, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import { r as renderNoItemsContainer, a as renderMagnifyingGlass } from './magnifying-glass-C89y_BGJ.js';
import { g as getSummary, n as noItemsGuard, r as renderNoItems, a as renderSearchTips } from './utils-j0VD_aJ1.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { A as AriaLiveRegionController } from './accessibility-utils-BHnCpu87.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './when-BzW5QVN4.js';
import './ripple-utils-DMduLOet.js';
import './event-utils-Xyk7tlQy.js';
import './button-style-DV1FJlx9.js';
import './atomic-icon-D7DRsDUP.js';
import './purify.es-BkIzpzFh.js';
import './unsafe-html-Deeupm6Y.js';
import './watch-CV_JtHFl.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './localized-string-CQCD-kWJ.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './utils-tjiSYtV8.js';
const renderCancel = ({ props }) => renderButton({
    props: {
        style: 'primary',
        part: 'cancel-button',
        text: props.i18n.t('cancel-last-action'),
        onClick: props.onClick,
        class: 'my-3 px-2.5 py-3 font-bold',
    },
})(E);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-no-results` component displays search tips and a "Cancel last action" button when there are no results. Any additional content slotted inside of its element will be displayed as well.
 *
 * @part cancel-button - The "Cancel last action" button.
 * @part no-results - The text indicating that no results were found for the search.
 * @part search-tips - The search tips to help the user correct the query.
 * @part highlight - The highlighted query.
 * @part icon - The magnifying glass icon.
 *
 * @slot default - Any additional content slotted inside of its element will be displayed as well.
 */
let AtomicNoResults = class AtomicNoResults extends i {
    constructor() {
        super(...arguments);
        // TODO - (v4) KIT-4823: Remove.
        /**
         * Whether to display a button which cancels the last available action.
         * @deprecated - replaced by `hide-cancel-last-action` (this defaults to `true`, while the replacement defaults to `false`).
         */
        this.enableCancelLastAction = true;
        /**
         * Whether to hide the button that would let the user cancel the action that yielded no results.
         */
        this.hideCancelLastAction = false;
        this.ariaMessage = new AriaLiveRegionController(this, 'no-results');
    }
    initialize() {
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.history = buildHistoryManager(this.bindings.engine);
        this.querySummary = buildQuerySummary(this.bindings.engine);
    }
    render() {
        const { bindings: { i18n }, } = this;
        this.ariaMessage.message = getSummary(i18n, this.querySummaryState.query, this.searchStatusState.hasResults, 'no-results');
        return x `${noItemsGuard({
            isLoading: this.searchStatusState.isLoading,
            firstSearchExecuted: this.searchStatusState.firstSearchExecuted,
            hasResults: this.searchStatusState.hasResults,
        }, () => renderNoItemsContainer()(x `
          ${renderMagnifyingGlass()}
          ${this.renderNoItems()}
          ${this.renderSearchTips()}
          ${this.renderCancelButton()}
        `))}`;
    }
    renderNoItems() {
        return renderNoItems({
            props: {
                query: this.querySummaryState.query,
                i18n: this.bindings.i18n,
                i18nKey: 'no-results',
            },
        });
    }
    renderSearchTips() {
        return renderSearchTips({
            props: {
                i18n: this.bindings.i18n,
            },
        });
    }
    renderCancelButton() {
        if (this.hideCancelLastAction ||
            !this.enableCancelLastAction ||
            !this.historyState.past.length) {
            return null;
        }
        return renderCancel({
            props: {
                i18n: this.bindings.i18n,
                onClick: () => this.history.backOnNoResults(),
            },
        });
    }
};
__decorate([
    n({
        type: Boolean,
        reflect: true,
        attribute: 'enable-cancel-last-action',
        converter: booleanConverter,
    })
], AtomicNoResults.prototype, "enableCancelLastAction", void 0);
__decorate([
    n({
        type: Boolean,
        reflect: true,
        attribute: 'hide-cancel-last-action',
        useDefault: true,
    })
], AtomicNoResults.prototype, "hideCancelLastAction", void 0);
__decorate([
    r()
], AtomicNoResults.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicNoResults.prototype, "error", void 0);
__decorate([
    bindStateToController('searchStatus'),
    r()
], AtomicNoResults.prototype, "searchStatusState", void 0);
__decorate([
    bindStateToController('history'),
    r()
], AtomicNoResults.prototype, "historyState", void 0);
__decorate([
    bindStateToController('querySummary'),
    r()
], AtomicNoResults.prototype, "querySummaryState", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicNoResults.prototype, "render", null);
AtomicNoResults = __decorate([
    t('atomic-no-results'),
    bindings(),
    withTailwindStyles
], AtomicNoResults);
export { AtomicNoResults };
//# sourceMappingURL=atomic-no-results-BP4WLgxd.js.map
