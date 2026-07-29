import { Schema, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { buildSearchStatus, buildSort, buildTabManager, parseCriterionExpression, loadSortCriteriaActions } from '/headless/v3.45.1/headless.esm.js';
import { i, x, t } from './custom-element-ClSinbnR.js';
import { r } from './state-VLCpXkCg.js';
import { i as i$1 } from './atomic-icon-D7DRsDUP.js';
import { o } from './map-D-loUq-y.js';
import { r as renderSortLabel, a as renderSortSelect, s as sortGuard } from './sort-guard-DbIwJkLN.js';
import { r as renderSortOption } from './option-DaUjvicT.js';
import { b as bindStateToController } from './bind-state-QQHXP7Qh.js';
import { b as bindingGuard } from './binding-guard-BU6auXaS.js';
import { b as bindings } from './bindings-CW6TJGy3.js';
import { e as errorGuard } from './error-guard-dbxXbsXK.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { s as shouldDisplayOnCurrentTab } from './tab-utils-CrE-aPug.js';
import { r as randomID } from './utils-tjiSYtV8.js';
import './property-DfSMRLwy.js';
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
import './bindings-context-DAKrxtTy.js';
import './atomic-component-error-CzI0_SHn.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-sort-dropdown` component renders a dropdown that the end user can interact with to select the criteria to use when sorting query results.
 *
 * @slot default - The `atomic-sort-expression` of the dropdown are slotted in.
 *
 * @part label - The "Sort by" label of the `<select>` element.
 * @part select-parent - The `<select>` element parent.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-separator - The element separating the select from the icon.
 * @part placeholder - The dropdown placeholder for while the search interface is initializing.
 */
let AtomicSortDropdown = class AtomicSortDropdown extends i {
    constructor() {
        super(...arguments);
        this.dropdownId = randomID('atomic-sort-dropdown-');
        this.onTabManagerStateChange = () => {
            this.resetSortIfInvalidForCurrentTab();
        };
    }
    initialize() {
        this.buildOptions();
        this.searchStatus = buildSearchStatus(this.bindings.engine);
        this.sort = buildSort(this.bindings.engine, {
            initialState: {
                criterion: this.bindings.store.state.sortOptions[0]?.criteria,
            },
        });
        this.tabManager = buildTabManager(this.bindings.engine);
    }
    buildOptions() {
        const sortExpressionElements = Array.from(this.querySelectorAll('atomic-sort-expression'));
        if (!sortExpressionElements.length) {
            this.error = new Error('The "atomic-sort-dropdown" element requires at least one "atomic-sort-expression" child.');
            return;
        }
        this.bindings.store.state.sortOptions = sortExpressionElements.map((element) => {
            const expression = element.getAttribute('expression') || '';
            const label = element.getAttribute('label') || '';
            const tabsIncluded = JSON.parse(element.getAttribute('tabs-included') || '[]');
            const tabsExcluded = JSON.parse(element.getAttribute('tabs-excluded') || '[]');
            new Schema({
                label: new StringValue({ emptyAllowed: false, required: true }),
            }).validate({ label });
            return {
                tabs: {
                    included: tabsIncluded,
                    excluded: tabsExcluded,
                },
                criteria: parseCriterionExpression(expression),
                expression,
                label,
            };
        });
    }
    get options() {
        return this.bindings.store.state.sortOptions.filter(({ tabs }) => shouldDisplayOnCurrentTab([...tabs.included], [...tabs.excluded], this.tabManagerState?.activeTab));
    }
    select(e) {
        const select = e.composedPath()[0];
        const option = this.options.find((option) => option.expression === select.value);
        option && this.sort.sortBy(option.criteria);
    }
    resetSortIfInvalidForCurrentTab() {
        if (!this.bindings || !this.sortState) {
            return;
        }
        if (this.isSortValid()) {
            return;
        }
        const criterion = this.options[0]?.criteria;
        if (!criterion) {
            return;
        }
        const action = loadSortCriteriaActions(this.bindings.engine).updateSortCriterion(this.options[0]?.criteria);
        this.bindings.engine.dispatch(action);
    }
    isSortValid() {
        return this.options.some((option) => option.expression.trim().replace(/\s*,\s*/g, ',') ===
            this.sortState.sortCriteria.replace(/@/g, ''));
    }
    renderSortLabelTemplate() {
        return renderSortLabel({
            props: {
                id: this.dropdownId,
                i18n: this.bindings.i18n,
            },
        });
    }
    renderSortSelectTemplate() {
        const { bindings: { i18n }, dropdownId: id, } = this;
        return renderSortSelect({
            props: {
                i18n,
                id,
                onSelect: (evt) => this.select(evt),
            },
        })(x `${i$1([this.sortState, this.options], () => o(this.options, ({ label, criteria, expression }) => renderSortOption({
            props: {
                i18n,
                label,
                selected: this.sort.isSortedBy(criteria),
                value: expression,
            },
        })))}`);
    }
    render() {
        const { hasError, hasResults, firstSearchExecuted, isLoading } = this.searchStatusState;
        return x `
      ${sortGuard({
            isLoading,
            firstSearchExecuted,
            hasResults,
            hasError,
        }, () => x `<div class="text-on-background flex flex-wrap items-center">
            ${this.renderSortLabelTemplate()} ${this.renderSortSelectTemplate()}
          </div>`)}
      <slot></slot>
    `;
    }
};
__decorate([
    r()
], AtomicSortDropdown.prototype, "bindings", void 0);
__decorate([
    bindStateToController('sort'),
    r()
], AtomicSortDropdown.prototype, "sortState", void 0);
__decorate([
    bindStateToController('searchStatus'),
    r()
], AtomicSortDropdown.prototype, "searchStatusState", void 0);
__decorate([
    bindStateToController('tabManager', {
        onUpdateCallbackMethod: 'onTabManagerStateChange',
    }),
    r()
], AtomicSortDropdown.prototype, "tabManagerState", void 0);
__decorate([
    r()
], AtomicSortDropdown.prototype, "error", void 0);
__decorate([
    errorGuard(),
    bindingGuard()
], AtomicSortDropdown.prototype, "render", null);
AtomicSortDropdown = __decorate([
    t('atomic-sort-dropdown'),
    bindings(),
    withTailwindStyles
], AtomicSortDropdown);
export { AtomicSortDropdown };
//# sourceMappingURL=atomic-sort-dropdown-DE-DR0Vf.js.map
