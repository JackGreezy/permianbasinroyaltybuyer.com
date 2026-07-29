import { i as isResultSectionNode } from './item-layout-sections-By3xRnK_.js';
import { b as aggregate, c as isVisualNode, e as isElementNode } from './utils-tjiSYtV8.js';
const tableElementTagName = 'atomic-table-element';
class BaseTemplateController {
    constructor(host, validParents, allowEmpty = false) {
        this.host = host;
        this.validParents = validParents;
        this.allowEmpty = allowEmpty;
        this.matchConditions = [];
        this.host.addController(this);
    }
    hostConnected() {
        this.validateTemplate();
    }
    getLinkTemplateElement(host) {
        return (host.querySelector('template[slot="link"]') ??
            this.getDefaultLinkTemplateElement());
    }
    getBaseTemplate(conditions) {
        if (this.host.error) {
            return null;
        }
        return {
            conditions: conditions.concat(this.matchConditions),
            content: this.getTemplateElement().content,
            linkContent: this.getLinkTemplateElement(this.host).content,
            priority: 1,
        };
    }
    get currentGridCellLinkTarget() {
        return this.gridCellLinkTarget;
    }
    setError(error) {
        this.host.error = error;
    }
    get parentElement() {
        return this.host.parentElement;
    }
    get template() {
        return this.host.querySelector('template');
    }
    parentAttr(attribute) {
        return this.parentElement?.attributes.getNamedItem(attribute)?.value;
    }
    validateTemplate() {
        const hasValidParent = this.validParents
            .map((p) => p.toUpperCase())
            .includes(this.parentElement?.nodeName || '');
        const tagName = this.host.nodeName.toLowerCase();
        if (!hasValidParent) {
            this.setError(new Error(BaseTemplateController.ERRORS.invalidParent(tagName, this.validParents)));
            return;
        }
        if (this.parentAttr('display') === 'grid') {
            this.gridCellLinkTarget = this.parentAttr('grid-cell-link-target');
        }
        if (!this.template) {
            this.setError(new Error(BaseTemplateController.ERRORS.missingTemplate(tagName)));
            return;
        }
        if (!this.allowEmpty && !this.template.innerHTML.trim()) {
            this.setError(new Error(BaseTemplateController.ERRORS.emptyTemplate(tagName)));
            return;
        }
        const warnings = this.getWarnings();
        if (this.template.content.querySelector('script')) {
            console.warn(warnings.scriptTag, this.host);
        }
        const { section, other } = this.groupNodesByType(this.template.content.childNodes);
        if (section?.length && other?.length) {
            console.warn(warnings.sectionMix, this.host, {
                section,
                other,
            });
        }
    }
    getWarnings() {
        return {
            scriptTag: 'Any "script" tags defined inside of "template" elements are not supported and will not be executed when the items are rendered.',
            sectionMix: 'Item templates should only contain section elements or non-section elements, not both. Future updates could unpredictably affect this item template.',
        };
    }
    getTemplateElement() {
        return this.host.querySelector('template:not([slot])');
    }
    groupNodesByType(nodes) {
        return aggregate(Array.from(nodes), (node) => this.getTemplateNodeType(node));
    }
    getTemplateNodeType(node) {
        if (isResultSectionNode(node)) {
            return 'section';
        }
        if (!isVisualNode(node)) {
            return 'metadata';
        }
        if (isElementNode(node) &&
            node.tagName.toLowerCase() === tableElementTagName) {
            return 'table-column-definition';
        }
        return 'other';
    }
}
BaseTemplateController.ERRORS = {
    invalidParent: (tagName, validParents) => `The "${tagName}" component has to be the child of one of the following: ${validParents
        .map((p) => `"${p.toLowerCase()}"`)
        .join(', ')}.`,
    missingTemplate: (tagName) => `The "${tagName}" component must contain a "template" element as a child.`,
    emptyTemplate: (tagName) => `The "template" tag inside "${tagName}" cannot be empty.`,
};
export { BaseTemplateController as B, tableElementTagName as t };
//# sourceMappingURL=base-template-controller-CyoYTbNr.js.map
