import { getOrganizationEndpoint } from '/headless/v3.45.1/headless.esm.js';
import { i, E, x, t } from './custom-element-ClSinbnR.js';
import { r } from './state-VLCpXkCg.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import './atomic-modal-BGpWxOBn.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import './property-DfSMRLwy.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './when-BzW5QVN4.js';
import './ripple-utils-DMduLOet.js';
import './event-utils-Xyk7tlQy.js';
import './button-style-DV1FJlx9.js';
import './boolean-converter-DIV6NtGl.js';
import './watch-CV_JtHFl.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './bindings-mixin-BbXNSbAr.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
import './replace-breakpoint-utils--qEQDWxF.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-relevance-inspector` component is used internally to offer insight on search page relevance, as well as information to help troubleshoot issues during development.
 *
 * @internal
 */
let AtomicRelevanceInspector = class AtomicRelevanceInspector extends i {
    constructor() {
        super(...arguments);
        this.open = false;
        this.initialize = () => {
            this.bindings.interfaceElement.addEventListener('dblclick', this.handleRelevanceInspectorDoubleClick);
        };
        this.handleRelevanceInspectorDoubleClick = (e) => {
            if (e.altKey) {
                this.open = !this.open;
            }
        };
    }
    disconnectedCallback() {
        this.bindings.interfaceElement.removeEventListener('dblclick', this.handleRelevanceInspectorDoubleClick);
    }
    render() {
        return x `
      <atomic-modal
        .isOpen=${this.open}
        @close=${() => this.handleCloseRelevanceInspector()}
        exportparts="footer"
      >
        <p slot="header">Open the relevance inspector</p>
        <p slot="body">
          The Relevance Inspector will open in the Coveo Administration Console.
        </p>
        <div slot="footer" class="flex w-full items-center justify-end">
          ${renderButton({
            props: {
                style: 'outline-primary',
                class: 'mr-2 p-2',
                onClick: () => this.handleCloseRelevanceInspector(),
                text: 'Ignore',
            },
        })(E)}
          ${renderButton({
            props: {
                style: 'primary',
                class: 'p-2',
                onClick: () => {
                    window.open(this.adminHref, '_blank');
                    this.handleCloseRelevanceInspector();
                },
                text: 'Open',
            },
        })(E)}
        </div>
      </atomic-modal>
    `;
    }
    handleCloseRelevanceInspector() {
        this.open = false;
    }
    get adminHref() {
        const { organizationId, environment } = this.bindings.engine.state.configuration;
        const admin = getOrganizationEndpoint(organizationId, environment, 'admin');
        const { searchResponseId } = this.bindings.engine.state.search;
        return `${admin}/admin/#/${organizationId}/search/relevanceInspector/${searchResponseId}`;
    }
};
__decorate([
    r()
], AtomicRelevanceInspector.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicRelevanceInspector.prototype, "error", void 0);
__decorate([
    r()
], AtomicRelevanceInspector.prototype, "open", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicRelevanceInspector.prototype, "render", null);
AtomicRelevanceInspector = __decorate([
    t('atomic-relevance-inspector'),
    bindings(),
    withTailwindStyles
], AtomicRelevanceInspector);
export { AtomicRelevanceInspector };
//# sourceMappingURL=atomic-relevance-inspector-Bd1nMkVK.js.map
