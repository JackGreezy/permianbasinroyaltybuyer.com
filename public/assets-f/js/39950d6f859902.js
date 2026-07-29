import { B as BaseTemplateController } from './base-template-controller-CyoYTbNr.js';
class ResultTemplateController extends BaseTemplateController {
    constructor(host, validParents, allowEmpty = false) {
        super(host, validParents, allowEmpty);
    }
    getTemplate(conditions) {
        const baseTemplate = this.getBaseTemplate(conditions);
        if (!baseTemplate) {
            return null;
        }
        return {
            conditions: baseTemplate.conditions,
            content: baseTemplate.content,
            linkContent: baseTemplate.linkContent,
            priority: baseTemplate.priority,
        };
    }
    getDefaultLinkTemplateElement() {
        const linkTemplate = document.createElement('template');
        linkTemplate.innerHTML = `<atomic-result-link>${this.currentGridCellLinkTarget
            ? `<a slot="attributes" target="${this.currentGridCellLinkTarget}"></a>`
            : ''}</atomic-result-link>`;
        return linkTemplate;
    }
}
export { ResultTemplateController as R };
//# sourceMappingURL=result-template-controller-C95XtbpL.js.map
