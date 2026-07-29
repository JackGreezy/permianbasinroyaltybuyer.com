import { Schema, StringValue } from '/bueno/v1.1.7/bueno.esm.js';
import { x, i, a as i$1, t } from './custom-element-ClSinbnR.js';
import { n as n$1 } from './property-DfSMRLwy.js';
import { r } from './state-VLCpXkCg.js';
import { n } from './ref-Ci0gDEiU.js';
import { o } from './unsafe-html-Deeupm6Y.js';
import { r as resultComponentClass } from './item-list-common-DSQwU3VE.js';
import { C as CustomRenderController, I as ItemLayoutController } from './item-layout-controller-CAYxZqlT.js';
import { V as ValidatePropsController } from './validate-props-controller-R9C-T-Ya.js';
import { b as booleanConverter } from './boolean-converter-DIV6NtGl.js';
import { w as withTailwindStyles } from './with-tailwind-styles-Bq60NaNW.js';
import { C as ChildrenUpdateCompleteMixin } from './children-update-complete-mixin-BsCPHIEs.js';
import { p as parentNodeToString } from './dom-utils-0VKCjoID.js';
import './atomic-result-text-C2oUsW-E.js';
import './directive-helpers-Dh62B6an.js';
import './directive-C5w180XZ.js';
import './accessibility-utils-BHnCpu87.js';
import './event-utils-Xyk7tlQy.js';
import './utils-tjiSYtV8.js';
import './purify.es-BkIzpzFh.js';
import './replace-breakpoint-utils--qEQDWxF.js';
import './item-layout-utils-Di0gijk4.js';
import './item-layout-sections-By3xRnK_.js';
import './when-BzW5QVN4.js';
import './item-text-highlighted-Cual1rid.js';
import './result-context-controller-C72BQJg7.js';
import './item-context-controller-BgvMNQCs.js';
import './binding-guard-BU6auXaS.js';
import './bindings-CW6TJGy3.js';
import './bindings-context-DAKrxtTy.js';
import './error-guard-dbxXbsXK.js';
import './atomic-component-error-CzI0_SHn.js';
import './light-dom-DMtqoULx.js';
import './field-utils-8CvHFjSG.js';
import './result-utils-BzZ-ZscV.js';
import './object-utils-DOvHQ3be.js';
import './atomic-text-L-S67inR.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomicResult_1;
/**
 * The `atomic-result` component is used internally by the `atomic-result-list` and `atomic-folded-result-list` components.
 */
let AtomicResult = AtomicResult_1 = class AtomicResult extends ChildrenUpdateCompleteMixin(i) {
    constructor() {
        super();
        /**
         * The result link to use when the result is clicked in a grid layout.
         *
         * @default - An `atomic-result-link` without any customization.
         */
        this.linkContent = new DocumentFragment();
        /**
         * How results should be displayed.
         */
        this.display = 'list';
        /**
         * How large or small results should be.
         */
        this.density = 'normal';
        /**
         * The size of the visual section in result list items.
         *
         * This is overwritten by the image size defined in the result content, if it exists.
         */
        this.imageSize = 'icon';
        /**
         * The classes to add to the result element.
         */
        this.classes = '';
        this.resolveResult = (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.detail(this.result);
        };
        this.resolveInteractiveResult = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (this.interactiveResult) {
                event.detail(this.interactiveResult);
            }
        };
        this.resolveStopPropagation = (event) => {
            event.detail(this.stopPropagation);
        };
        this.resolveResultDisplayConfig = (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.detail({
                density: this.density,
                imageSize: this.imageSize,
            });
        };
        this.handleClick = (event) => {
            if (this.stopPropagation) {
                event.stopPropagation();
            }
            if (this.display === 'grid') {
                this.clickLinkContainer();
            }
        };
        this.clickLinkContainer = () => {
            this.shadowRoot
                ?.querySelector('.link-container > atomic-result-link a:not([slot])')
                ?.click();
        };
        new ValidatePropsController(this, () => ({
            display: this.display,
            density: this.density,
            imageSize: this.imageSize,
        }), AtomicResult_1.propsSchema);
    }
    async connectedCallback() {
        super.connectedCallback();
        new CustomRenderController(this, {
            renderingFunction: () => this.renderingFunction,
            itemData: () => this.result,
            rootElementRef: () => this.resultRootRef,
            linkContainerRef: () => this.linkContainerRef,
            onRenderComplete: (element, output) => {
                this.itemLayoutController.applyLayoutClassesToElement(element, output);
            },
        });
        this.itemLayoutController = new ItemLayoutController(this, {
            elementPrefix: 'atomic-result',
            renderingFunction: () => this.renderingFunction,
            content: () => this.content,
            layoutConfig: () => ({
                display: this.display,
                density: this.density,
                imageSize: this.imageSize,
            }),
            itemClasses: () => this.classes,
        });
        this.addEventListener('atomic/resolveResult', this.resolveResult);
        this.addEventListener('atomic/resolveInteractiveResult', this.resolveInteractiveResult);
        this.addEventListener('atomic/resolveStopPropagation', this.resolveStopPropagation);
        this.addEventListener('atomic/resolveResultDisplayConfig', this.resolveResultDisplayConfig);
        this.addEventListener('click', this.handleClick);
        await this.getUpdateComplete();
        this.classList.add('hydrated');
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('atomic/resolveResult', this.resolveResult);
        this.removeEventListener('atomic/resolveInteractiveResult', this.resolveInteractiveResult);
        this.removeEventListener('atomic/resolveStopPropagation', this.resolveStopPropagation);
        this.removeEventListener('atomic/resolveResultDisplayConfig', this.resolveResultDisplayConfig);
        this.removeEventListener('click', this.handleClick);
    }
    getContentHTML() {
        if (!this.content) {
            console.warn('atomic-result: content property is undefined. Cannot get content HTML.', this);
            return '';
        }
        return parentNodeToString(this.content);
    }
    getLinkHTML() {
        return parentNodeToString(this.linkContent ?? new HTMLElement());
    }
    render() {
        if (this.renderingFunction !== undefined) {
            return x `
        <div class=${resultComponentClass}>
          <div
            class="result-root"
            ${n((el) => {
                this.resultRootRef = el;
            })}
          ></div>
          <div
            class="link-container"
            ${n((el) => {
                this.linkContainerRef = el;
            })}
          ></div>
        </div>
      `;
        }
        // Handle case where content is undefined and layout was not created
        if (!this.itemLayoutController.getLayout()) {
            return x `<div class=${resultComponentClass}></div>`;
        }
        return x `
      <div class=${resultComponentClass}>
        <div
          class="result-root ${this.itemLayoutController.getCombinedClasses().join(' ')}"
        >
          ${o(this.getContentHTML())}
        </div>
        <div class="link-container">${o(this.getLinkHTML())}</div>
      </div>
    `;
    }
    firstUpdated(_changedProperties) {
        if (this.loadingFlag && this.store) {
            this.store.unsetLoadingFlag(this.loadingFlag);
        }
    }
};
AtomicResult.styles = i$1`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties;:host{@layer components{:host{font-family:var(--atomic-font-family);--tw-font-weight:var(--atomic-font-normal);font-weight:var(--atomic-font-normal)}.result-root{&.with-sections{display:grid;justify-items:stretch;&.display-list{@media (width >= 1024px){&.image-large,&.image-small{grid-template-rows:repeat(6,auto) minmax(0,1fr)}&.image-icon,&.image-large,&.image-small{grid-template-areas:"badges badges          .               actions" "visual title           title           title" "visual title-metadata  title-metadata  title-metadata" "visual emphasized      emphasized      emphasized" "visual excerpt         excerpt         excerpt" "visual bottom-metadata bottom-metadata bottom-metadata" "visual children        children        children";grid-template-columns:minmax(0,min-content) auto 1fr auto}&.image-icon{grid-template-rows:repeat(7,minmax(0,min-content))}&.image-none{grid-template-areas:"badges          .               actions" "title           title           title" "title-metadata  title-metadata  title-metadata" "emphasized      emphasized      emphasized" "excerpt         excerpt         excerpt" "bottom-metadata bottom-metadata bottom-metadata" "children        children        children";grid-template-columns:auto 1fr auto;grid-template-rows:repeat(6,auto)}}}&.display-table{&.image-large,&.image-small{grid-template-rows:repeat(6,auto) minmax(0,1fr)}&.image-icon,&.image-large,&.image-small{grid-template-areas:"badges badges          .               actions" "visual title           title           title" "visual title-metadata  title-metadata  title-metadata" "visual emphasized      emphasized      emphasized" "visual excerpt         excerpt         excerpt" "visual bottom-metadata bottom-metadata bottom-metadata" "visual children        children        children";grid-template-columns:minmax(0,min-content) auto 1fr auto}&.image-icon{grid-template-rows:repeat(7,minmax(0,min-content))}&.image-none{grid-template-areas:"badges          .               actions" "title           title           title" "title-metadata  title-metadata  title-metadata" "emphasized      emphasized      emphasized" "excerpt         excerpt         excerpt" "bottom-metadata bottom-metadata bottom-metadata" "children        children        children";grid-template-columns:auto 1fr auto;grid-template-rows:repeat(6,auto)}}&.display-list{@media not all and (width >= 1024px){&.image-large{grid-template-areas:"visual" "badges" "title" "title-metadata" "emphasized" "excerpt" "bottom-metadata" "actions" "children";grid-template-columns:100%;grid-template-rows:repeat(8,auto)}&.image-small{grid-template-areas:"badges          badges" "visual          title" "visual          title-metadata" "visual          emphasized" "visual          ." "excerpt         excerpt" "bottom-metadata bottom-metadata" "actions         actions" "children        children";grid-template-rows:repeat(4,auto) minmax(0,1fr) repeat(3,auto)}&.image-icon,&.image-small{grid-template-columns:auto minmax(0,1fr)}&.image-icon{grid-template-areas:"badges          badges" "visual          title" "visual          title-metadata" "visual          emphasized" "visual          excerpt" "visual          bottom-metadata" "visual          actions" "visual          children";grid-template-rows:repeat(7,auto) 1fr}&.image-none{grid-template-areas:"badges" "title" "title-metadata" "emphasized" "excerpt" "bottom-metadata" "actions" "children";grid-template-columns:100%;grid-template-rows:repeat(7,auto)}}}&.display-grid{grid-template-areas:"badges" "visual" "title" "title-metadata" "emphasized" "excerpt" "children" "bottom-metadata" "actions";grid-template-columns:100%;grid-template-rows:repeat(9,auto);a,button{position:relative}@media not all and (width >= 1024px){&.image-large{&.image-large{grid-template-areas:"visual" "badges" "title" "title-metadata" "emphasized" "excerpt" "bottom-metadata" "actions" "children";grid-template-columns:100%;grid-template-rows:repeat(8,auto)}&.image-small{grid-template-areas:"badges          badges" "visual          title" "visual          title-metadata" "visual          emphasized" "visual          ." "excerpt         excerpt" "bottom-metadata bottom-metadata" "actions         actions" "children        children";grid-template-rows:repeat(4,auto) minmax(0,1fr) repeat(3,auto)}&.image-icon,&.image-small{grid-template-columns:auto minmax(0,1fr)}&.image-icon{grid-template-areas:"badges          badges" "visual          title" "visual          title-metadata" "visual          emphasized" "visual          excerpt" "visual          bottom-metadata" "visual          actions" "visual          children";grid-template-rows:repeat(7,auto) 1fr}&.image-none{grid-template-areas:"badges" "title" "title-metadata" "emphasized" "excerpt" "bottom-metadata" "actions" "children";grid-template-columns:100%;grid-template-rows:repeat(7,auto)}}}}}atomic-table-element{display:none}}.link-container{display:none}}}@property --tw-font-weight{syntax:"*";inherits:false}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-font-weight:initial}}}`;
AtomicResult.propsSchema = new Schema({
    display: new StringValue({ constrainTo: ['grid', 'list', 'table'] }),
    density: new StringValue({
        constrainTo: ['normal', 'comfortable', 'compact'],
    }),
    imageSize: new StringValue({
        constrainTo: ['small', 'large', 'icon', 'none'],
    }),
});
__decorate([
    r()
], AtomicResult.prototype, "error", void 0);
__decorate([
    n$1({
        attribute: 'stop-propagation',
        type: Boolean,
        converter: booleanConverter,
        reflect: true,
    })
], AtomicResult.prototype, "stopPropagation", void 0);
__decorate([
    n$1({ type: Object })
], AtomicResult.prototype, "result", void 0);
__decorate([
    n$1({ type: Object, attribute: 'interactive-result' })
], AtomicResult.prototype, "interactiveResult", void 0);
__decorate([
    n$1({ type: Object })
], AtomicResult.prototype, "store", void 0);
__decorate([
    n$1({ type: Object })
], AtomicResult.prototype, "content", void 0);
__decorate([
    n$1({ type: Object, attribute: 'link-content' })
], AtomicResult.prototype, "linkContent", void 0);
__decorate([
    n$1({ reflect: true, type: String })
], AtomicResult.prototype, "display", void 0);
__decorate([
    n$1({ reflect: true, type: String })
], AtomicResult.prototype, "density", void 0);
__decorate([
    n$1({ reflect: true, type: String, attribute: 'image-size' })
], AtomicResult.prototype, "imageSize", void 0);
__decorate([
    n$1({ type: String })
], AtomicResult.prototype, "classes", void 0);
__decorate([
    n$1({ type: String, attribute: 'loading-flag' })
], AtomicResult.prototype, "loadingFlag", void 0);
__decorate([
    n$1({ type: Object, attribute: 'rendering-function' })
], AtomicResult.prototype, "renderingFunction", void 0);
AtomicResult = AtomicResult_1 = __decorate([
    t('atomic-result'),
    withTailwindStyles
], AtomicResult);
export { AtomicResult };
//# sourceMappingURL=atomic-result-BFbOaZBv.js.map
