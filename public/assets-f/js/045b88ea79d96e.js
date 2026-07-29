import { buildSearchStatus, buildResultsPerPage } from '/headless/v3.45.1/headless.esm.js';
import { x, i, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './when-BzW5QVN4.js';
import { r as renderFieldsetGroup } from './fieldset-group-BMVKrfC8.js';
import { a as createAppLoadedListener } from './store-BUiRYglL.js';
import { c as convertChoicesToNumbers, v as validateInitialChoice, C as ChoiceIsNaNError, I as InitialChoiceNotInChoicesError, r as renderLabel, a as renderChoices } from './validate-065bLaXE.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { I as InitializeBindingsMixin } from './bindings-mixin-BbXNSbAr.js';
import { b as buildCustomEvent } from './event-utils-Xyk7tlQy.js';
import { r as randomID } from './utils-tjiSYtV8.js';
import './radio-button-B_orPDne.js';
import './if-defined-CwDhfVxy.js';
import './ref-Ci0gDEiU.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './multi-class-map-BELXGnQY.js';
import './class-map-Bnlx5e07.js';
import './ripple-utils-DMduLOet.js';
import './button-style-DV1FJlx9.js';
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
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
 * The `atomic-results-per-page` component determines how many results to display per page.
 *
 * @part label - The "Results per page" label.
 * @part buttons - The list of buttons.
 * @part button - The result per page button.
 * @part active-button - The active result per page button.
 *
 * @event atomic/scrollToTop - Emitted when the page should scroll to top after changing results per page.
 */
let AtomicResultsPerPage = class AtomicResultsPerPage extends InitializeBindingsMixin(i) {
    constructor() {
        super(...arguments);
        this.radioGroupName = randomID('atomic-results-per-page-');
        this.isAppLoaded = false;
        /**
         * A list of choices for the number of results to display per page, separated by commas.
         */
        this.choicesDisplayed = '10,25,50,100';
    }
    initialize() {
        try {
            this.choices = convertChoicesToNumbers(this.choicesDisplayed);
            this.initialChoice = this.initialChoice ?? this.choices[0];
            validateInitialChoice(this.initialChoice, this.choices);
        }
        catch (error) {
            if (error instanceof ChoiceIsNaNError ||
                error instanceof InitialChoiceNotInChoicesError) {
                this.bindings.engine.logger.error(error.message);
                throw error;
            }
        }
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.resultPerPage = buildResultsPerPage(this.bindings.engine, {
            initialState: { numberOfResults: this.initialChoice },
        });
        createAppLoadedListener(this.bindings.store, (isAppLoaded) => {
            this.isAppLoaded = isAppLoaded;
        });
    }
    scrollToTopEvent() {
        this.dispatchEvent(buildCustomEvent('atomic/scrollToTop'));
    }
    get label() {
        return this.bindings.i18n.t('results-per-page');
    }
    render() {
        if (!this.searchStatusState) {
            return x ``;
        }
        return x `
      ${n(!this.searchStatusState.hasError &&
            this.isAppLoaded &&
            this.searchStatusState.hasResults, () => x `
          <div class="flex items-center">
            ${renderLabel()(x `${this.label}`)}
            ${renderFieldsetGroup({
            props: {
                label: this.label,
            },
        })(renderChoices({
            props: {
                label: this.label,
                groupName: this.radioGroupName,
                pageSize: this.resultPerPageState.numberOfResults,
                choices: this.choices,
                lang: this.bindings.i18n.language,
                scrollToTopEvent: () => this.scrollToTopEvent(),
                setItemSize: (size) => this.resultPerPage.set(size),
                focusOnFirstResultAfterNextSearch: () => this.bindings.store.state.resultList?.focusOnFirstResultAfterNextSearch(),
                focusOnNextNewResult: () => this.bindings.store.state.resultList?.focusOnNextNewResult(),
            },
        }))}
          </div>
        `)}
    `;
    }
};
__decorate([
    r()
], AtomicResultsPerPage.prototype, "bindings", void 0);
__decorate([
    r()
], AtomicResultsPerPage.prototype, "error", void 0);
__decorate([
    bindStateToController('resultPerPage'),
    r()
], AtomicResultsPerPage.prototype, "resultPerPageState", void 0);
__decorate([
    bindStateToController('searchStatus'),
    r()
], AtomicResultsPerPage.prototype, "searchStatusState", void 0);
__decorate([
    r()
], AtomicResultsPerPage.prototype, "isAppLoaded", void 0);
__decorate([
    n$1({ reflect: true, attribute: 'choices-displayed' })
], AtomicResultsPerPage.prototype, "choicesDisplayed", void 0);
__decorate([
    n$1({ type: Number, reflect: true, attribute: 'initial-choice' })
], AtomicResultsPerPage.prototype, "initialChoice", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicResultsPerPage.prototype, "render", null);
AtomicResultsPerPage = __decorate([
    t('atomic-results-per-page'),
    bindings(),
    withTailwindStyles
], AtomicResultsPerPage);
export { AtomicResultsPerPage };
//# sourceMappingURL=atomic-results-per-page-BHEBNLvY.js.map
