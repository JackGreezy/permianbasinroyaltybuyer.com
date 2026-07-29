import { i, x, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n } from './property-DfSMRLwy.js';
import { o } from './map-D-loUq-y.js';
import { a as getItemDisplayClasses } from './item-layout-utils-Di0gijk4.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import './item-layout-sections-By3xRnK_.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * The `atomic-result-table-placeholder` component provides an intermediate visual state that is rendered before the first results are available.
 * @internal
 */
let AtomicResultTablePlaceholder = class AtomicResultTablePlaceholder extends i {
    getClasses() {
        return getItemDisplayClasses('table', this.density, this.imageSize);
    }
    render() {
        return x `
      <table
        class="list-root animate-pulse ${this.getClasses().join(' ')}"
      >
        <thead aria-hidden="true">
          <tr>
            <th>
              <div
                class="mt-2 h-8 block bg-neutral rounded"
                style="width: 14.5rem;"
              ></div>
            </th>
            <th>
              <div
                class="mt-2 h-8 block bg-neutral rounded"
                style="width: 9.75rem;"
              ></div>
            </th>
            <th>
              <div
                class="mt-2 h-8 block bg-neutral rounded"
                style="width: 6.5rem;"
              ></div>
            </th>
          </tr>
        </thead>
        <tbody>
          ${o(Array.from({ length: this.rows }), () => x `
              <tr>
                <td>
                  <div
                    class="mb-6 h-8 block bg-neutral rounded"
                    style="width: 22.875rem;"
                  ></div>
                  <div
                    class="mb-2 h-5 block bg-neutral rounded"
                    style="width: 23.75rem;"
                  ></div>
                  <div
                    class="h-5 block bg-neutral rounded"
                    style="width: 11.5rem;"
                  ></div>
                </td>
                <td>
                  <div
                    class="mt-1.5 h-5 block bg-neutral rounded"
                    style="width: 11rem;"
                  ></div>
                </td>
                <td>
                  <div
                    class="mt-1.5 h-5 block bg-neutral rounded"
                    style="width: 4.875rem;"
                  ></div>
                </td>
              </tr>
            `)}
        </tbody>
      </table>
    `;
    }
};
AtomicResultTablePlaceholder.styles = i$1`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties;:host{display:grid}.list-root.display-table{border-collapse:separate;border-color:var(--atomic-neutral);border-radius:var(--atomic-border-radius-xl);border-spacing:0;border-style:var(--tw-border-style);border-width:1px;min-width:100%;td,th{border-color:var(--atomic-neutral);border-style:var(--tw-border-style);border-width:1px;font-family:var(--atomic-font-family);font-size:var(--atomic-text-sm);line-height:var(--tw-leading,var(--text-sm--line-height,1.42857));line-height:1rem;white-space:nowrap;&:not(:first-child){border-left:none}&:first-child{min-width:19rem}}th{background-color:var(--atomic-neutral-light);border-bottom:none;color:#000;font-weight:700;padding:1rem var(--padding);text-align:left;&:first-child{border-top-left-radius:var(--atomic-border-radius-xl)}&:last-child{border-top-right-radius:var(--atomic-border-radius-xl)}}td{border-top:none;color:var(--atomic-neutral-dark);padding:var(--padding);vertical-align:top}&.density-comfortable{--padding:2rem}&.density-normal{--padding:1.5rem}&.density-compact{--padding:1rem}tbody tr:not(:last-child),thead tr{position:relative;&:after{background-color:var(--atomic-neutral);bottom:0;content:" ";display:block;height:1px;left:var(--padding);position:absolute;right:var(--padding)}}td,th{border-color:transparent;border-radius:initial}th{background-color:transparent}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-border-style:solid}}}`;
__decorate([
    n({ type: String })
], AtomicResultTablePlaceholder.prototype, "density", void 0);
__decorate([
    n({ type: String, attribute: 'image-size' })
], AtomicResultTablePlaceholder.prototype, "imageSize", void 0);
__decorate([
    n({ type: Number })
], AtomicResultTablePlaceholder.prototype, "rows", void 0);
AtomicResultTablePlaceholder = __decorate([
    t('atomic-result-table-placeholder'),
    withTailwindStyles
], AtomicResultTablePlaceholder);
export { AtomicResultTablePlaceholder };
//# sourceMappingURL=atomic-result-table-placeholder-CpBcgHu9.js.map
