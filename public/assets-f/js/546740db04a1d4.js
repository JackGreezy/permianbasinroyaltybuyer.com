import { buildQueryError, getOrganizationEndpoint } from '/headless/v3.45.1/headless.esm.js';
import { i, x, t } from './custom-element-ClSinbnR.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { g as getAriaMessageFromErrorType, r as renderQueryErrorLink, a as renderQueryErrorContainer, b as renderQueryErrorIcon, c as renderQueryErrorTitle, d as renderQueryErrorDescription, e as renderQueryErrorShowMore, f as renderQueryErrorDetails } from './title-yC3j0Rbh.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { A as AriaLiveRegionController } from './accessibility-utils-BHnCpu87.js';
import './property-DfSMRLwy.js';
import './atomic-icon-D7DRsDUP.js';
import './purify.es-BkIzpzFh.js';
import './directive-C5w180XZ.js';
import './unsafe-html-Deeupm6Y.js';
import './watch-CV_JtHFl.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './event-utils-Xyk7tlQy.js';
import './init-queue-BrIDKWA1.js';
import './light-dom-DMtqoULx.js';
import './asset-path-utils-DR8U1hRo.js';
import './button-DE0Kx0NV.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './ripple-utils-DMduLOet.js';
import './button-style-DV1FJlx9.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './utils-tjiSYtV8.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-query-error` component handles fatal errors when performing a query on the index or Search API. When the error is known, it displays a link to relevant documentation link for debugging purposes. When the error is unknown, it displays a small text area with the JSON content of the error.
 *
 * @part icon - The svg related to the error.
 * @part title - The title of the error.
 * @part description - A description of the error.
 * @part doc-link - A link to the relevant documentation.
 * @part more-info-btn - A button to request additional error information.
 * @part error-info - Additional error information.
 */
let AtomicQueryError = class AtomicQueryError extends i {
    constructor() {
        super(...arguments);
        this.ariaMessage = new AriaLiveRegionController(this, 'query-error');
        this.showMoreInfo = false;
    }
    initialize() {
        this.queryError = buildQueryError(this.bindings.engine);
    }
    render() {
        const { hasError, error } = this.queryErrorState;
        const i18n = this.bindings.i18n;
        const { organizationId, environment } = this.bindings.engine.state.configuration;
        const url = getOrganizationEndpoint(organizationId, environment);
        if (hasError) {
            this.ariaMessage.message = getAriaMessageFromErrorType(i18n, organizationId, url, error?.type);
        }
        const linkResult = renderQueryErrorLink({
            props: { i18n, errorType: error?.type },
        });
        return x `${n(hasError, () => x `
        ${renderQueryErrorContainer()(x `
          ${renderQueryErrorIcon({ props: { errorType: error?.type } })}
          ${renderQueryErrorTitle({
            props: {
                errorType: error?.type,
                i18n,
                organizationId,
            },
        })}
          ${renderQueryErrorDescription({
            props: {
                i18n,
                organizationId,
                url,
                errorType: error?.type,
            },
        })}
          ${renderQueryErrorShowMore({
            props: {
                link: linkResult,
                onShowMore: () => {
                    this.showMoreInfo = !this.showMoreInfo;
                },
                i18n,
            },
        })}
          ${renderQueryErrorDetails({
            props: { error, show: this.showMoreInfo },
        })}
        `)}
      `)}`;
    }
};
__decorate([
    bindStateToController('queryError'),
    r()
], AtomicQueryError.prototype, "queryErrorState", void 0);
__decorate([
    r()
], AtomicQueryError.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicQueryError.prototype, "error", void 0);
__decorate([
    r()
], AtomicQueryError.prototype, "showMoreInfo", void 0);
__decorate([
    errorGuard(),
    bindingGuard()
], AtomicQueryError.prototype, "render", null);
AtomicQueryError = __decorate([
    t('atomic-query-error'),
    bindings(),
    withTailwindStyles
], AtomicQueryError);
export { AtomicQueryError };
//# sourceMappingURL=atomic-query-error-Cp5D_n7W.js.map
