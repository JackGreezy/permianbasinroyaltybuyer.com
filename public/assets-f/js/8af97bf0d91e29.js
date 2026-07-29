import { x, i, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$2 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { e, n as n$1 } from './ref-Ci0gDEiU.js';
import { n } from './when-BzW5QVN4.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as watch } from './watch-CV_JtHFl.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { m as multiClassMap, t as tw } from './multi-class-map-BELXGnQY.js';
import { I as InitializeBindingsMixin } from './bindings-mixin-BbXNSbAr.js';
import { b as buildCustomEvent, l as listenOnce } from './event-utils-Xyk7tlQy.js';
import { u as updateBreakpoints } from './replace-breakpoint-utils--qEQDWxF.js';
import { r as randomID, o as once } from './utils-tjiSYtV8.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
import './class-map-Bnlx5e07.js';
import './initialization-lit-stencil-common-utils-B28nYmgv.js';
import './dom-utils-0VKCjoID.js';
import './init-queue-BrIDKWA1.js';
import './purify.es-BkIzpzFh.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * When the modal is opened, the class `atomic-modal-opened` is added to the `interfaceElement` and the body, allowing further customization.
 *
 * @part backdrop - The transparent backdrop hiding the content behind the modal.
 * @part container - The modal's outermost container with the outline and background.
 * @part header-wrapper - The wrapper around the header.
 * @part header - The header at the top of the modal.
 * @part header-ruler - The horizontal ruler underneath the header.
 * @part body-wrapper - The wrapper around the body.
 * @part body - The body of the modal, between the header and the footer.
 * @part footer-wrapper - The wrapper with a shadow or background color around the footer.
 * @part footer - The footer at the bottom of the modal.
 *
 * @event close - Emitted when the modal is closed (e.g., by pressing Escape).
 *
 * @internal
 */
let AtomicModal = class AtomicModal extends InitializeBindingsMixin(i) {
    constructor() {
        super(...arguments);
        /**
         * Whether to display the open and close animations over the entire page or the atomic-modal only.
         */
        this.boundary = 'page';
        this.close = () => {
            this.isOpen = false;
            return false;
        };
        this.fullscreen = false;
        this.isOpen = false;
        this.onAnimationEnded = () => { };
        this.animatableContainer = e();
        this.currentWatchToggleOpenExecution = 0;
        this.focusTrap = e();
        this.headerId = randomID('atomic-modal-header-');
        this.shouldRender = false;
        this.updateBreakpoints = once(() => updateBreakpoints(this));
        this.handleCloseOnEscape = (e) => {
            if (e.key?.toLowerCase() === 'escape') {
                if (this.isOpen) {
                    this.dispatchEvent(buildCustomEvent('close'));
                }
                if (this.close) {
                    this.close();
                }
                this.isOpen = false;
            }
        };
        this.onWindowTouchMove = (e) => {
            this.isOpen && e.preventDefault();
        };
    }
    // Lifecycle methods
    connectedCallback() {
        super.connectedCallback();
        document.body.addEventListener('keyup', this.handleCloseOnEscape);
        document.body.addEventListener('touchmove', this.onWindowTouchMove, {
            passive: false,
        });
    }
    render() {
        this.updateBreakpoints();
        return x `
      ${n(this.shouldRender, () => x `
          <div
            part="backdrop"
            class=${multiClassMap(tw({
            'top-0 right-0 bottom-0 left-0 z-9999': true,
            fixed: this.boundary === 'page',
            absolute: this.boundary !== 'page',
            'grid p-6 transition-colors duration-500 ease-in-out grid-template-modal': !this.fullscreen,
            'bg-[rgba(40,40,40,0.8)]': this.isOpen && !this.fullscreen,
            'pointer-events-auto': this.isOpen,
            'pointer-events-none': !this.isOpen,
        }))}
            @click="${(e) => e.target === e.currentTarget && this.close()}"
            data-nosnippet
          >
            <atomic-focus-trap
              class="contents"
              role="dialog"
              aria-modal=${this.isOpen ? 'true' : 'false'}
              aria-labelledby=${this.headerId}
              .source=${this.source}
              .container=${this.container ?? this}
              ${n$1(this.focusTrap)}
              .scope=${this.scope}
            >
              ${this.renderContent()}
            </atomic-focus-trap>
          </div>
        `)}
    `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.body.removeEventListener('keyup', this.handleCloseOnEscape);
        document.body.removeEventListener('touchmove', this.onWindowTouchMove);
    }
    // Public methods
    async initialize() {
        if (this.isOpen) {
            this.shouldRender = true;
            await this.handleToggleOpen(this.isOpen);
        }
    }
    async watchToggleOpen(_prev, next) {
        await this.handleToggleOpen(next ?? this.isOpen);
    }
    // Private methods
    addModalOpenedClasses() {
        const modalOpenedClass = 'atomic-modal-opened';
        document.body.classList.add(modalOpenedClass);
        this.bindings?.interfaceElement?.classList?.add(modalOpenedClass);
    }
    createExecutionTracker() {
        return ++this.currentWatchToggleOpenExecution;
    }
    async handleModalClose() {
        const executionId = this.createExecutionTracker();
        this.removeModalOpenedClasses();
        this.setFocusTrapActive(false);
        await this.waitForAnimationEnded();
        this.onAnimationEnded();
        if (!this.isExecutionValid(executionId)) {
            return;
        }
        this.shouldRender = false;
    }
    async handleModalOpen() {
        const executionId = this.createExecutionTracker();
        if (!this.shouldRender) {
            this.shouldRender = true;
            await this.updateComplete;
        }
        this.addModalOpenedClasses();
        await this.waitForAnimationEnded();
        if (!this.isExecutionValid(executionId)) {
            return;
        }
        this.setFocusTrapActive(true);
    }
    async handleToggleOpen(isOpen) {
        if (isOpen) {
            await this.handleModalOpen();
        }
        else {
            await this.handleModalClose();
        }
    }
    isExecutionValid(executionId) {
        return executionId === this.currentWatchToggleOpenExecution;
    }
    removeModalOpenedClasses() {
        const modalOpenedClass = 'atomic-modal-opened';
        document.body.classList.remove(modalOpenedClass);
        this.bindings?.interfaceElement?.classList?.remove(modalOpenedClass);
    }
    renderContent() {
        return x `
      <article
        part="container"
        class=${multiClassMap(tw({
            '[grid-area:modal] bg-background text-on-background flex flex-col justify-between overflow-hidden': true,
            'animate-open': this.isOpen,
            'animate-close': !this.isOpen,
            'absolute inset-0': this.fullscreen,
            'rounded shadow': !this.fullscreen,
        }))}
        ${n$1(this.animatableContainer)}
      >
        <header
          part="header-wrapper"
          class=${multiClassMap(tw({
            'flex flex-col items-center px-6 py-6': true,
            'py-4': !this.fullscreen,
        }))}
        >
          <div
            part="header"
            class=${multiClassMap(tw({
            'flex justify-between w-full max-w-lg text-xl': true,
            'font-bold': this.fullscreen,
        }))}
            id=${this.headerId}
          >
            <slot name="header"></slot>
          </div>
        </header>
        <hr part="header-ruler" class="border-t border-neutral"/>
        <div
          part="body-wrapper"
          class=${multiClassMap(tw({
            'flex w-full grow flex-col items-center overflow-auto [scrollbar-gutter:stable_both-edges]': true,
            'px-6 pt-8 pb-5': this.fullscreen,
            'p-6': !this.fullscreen,
        }))}
        >
          <div
            part="body"
            class="w-full max-w-lg"
            @touchmove=${(e) => this.isOpen && e.stopPropagation()}
          >
            <slot name="body"></slot>
          </div>
        </div>
        <footer
          part="footer-wrapper"
          class=${multiClassMap(tw({
            'z-10 flex flex-col items-center w-full border-t border-neutral bg-background': true,
            'px-6 py-4 shadow-t-lg': this.fullscreen,
            'bg-neutral-light px-4 py-4.5': !this.fullscreen,
        }))}
        >
          <div part="footer" class="w-full max-w-lg">
            <slot name="footer"></slot>
          </div>
        </footer>
      </article>
    `;
    }
    setFocusTrapActive(active) {
        if (this.focusTrap.value) {
            this.focusTrap.value.active = active;
        }
    }
    waitForAnimationEnded() {
        // The focus trap focuses its first child when active. It cannot do that while an animation is ongoing.
        return new Promise((resolve) => {
            if (!this.animatableContainer.value) {
                resolve();
                return;
            }
            listenOnce(this.animatableContainer.value, 'animationend', () => resolve());
        });
    }
};
AtomicModal.styles = i$1`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@keyframes scaleUp{0%{opacity:0;transform:scale(.7) translateY(150vh)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes slideDown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(150vh)}}article.animate-open{animation:var(--animate-scale-up-modal,scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards)}article.animate-close{animation:var(--animate-slide-down-modal,slideDown .5s linear forwards)}.grid-template-modal{grid-template-areas:". .     ." ". modal ." ". .     .";grid-template-columns:1fr min(30rem,100%) 1fr;grid-template-rows:1fr auto 3fr}`;
__decorate([
    r()
], AtomicModal.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicModal.prototype, "error", void 0);
__decorate([
    n$2({ type: String, reflect: true })
], AtomicModal.prototype, "boundary", void 0);
__decorate([
    n$2({ type: Object, attribute: false })
], AtomicModal.prototype, "close", void 0);
__decorate([
    n$2({ type: Object, attribute: false })
], AtomicModal.prototype, "container", void 0);
__decorate([
    n$2({ type: Boolean, reflect: true, converter: booleanConverter })
], AtomicModal.prototype, "fullscreen", void 0);
__decorate([
    n$2({
        type: Boolean,
        reflect: true,
        attribute: 'is-open',
        converter: booleanConverter,
    })
], AtomicModal.prototype, "isOpen", void 0);
__decorate([
    n$2({ type: Object, attribute: false })
], AtomicModal.prototype, "onAnimationEnded", void 0);
__decorate([
    n$2({ type: Object, attribute: false })
], AtomicModal.prototype, "scope", void 0);
__decorate([
    n$2({ type: Object, attribute: false })
], AtomicModal.prototype, "source", void 0);
__decorate([
    errorGuard()
], AtomicModal.prototype, "render", null);
__decorate([
    watch('isOpen', { waitUntilFirstUpdate: false })
], AtomicModal.prototype, "watchToggleOpen", null);
AtomicModal = __decorate([
    t('atomic-modal'),
    bindings(),
    withTailwindStyles
], AtomicModal);
export { AtomicModal };
//# sourceMappingURL=atomic-modal-BGpWxOBn.js.map
