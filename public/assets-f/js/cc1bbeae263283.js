import { buildResultTemplatesManager } from '/headless/v3.45.1/headless.esm.js';
import { T as TemplateProvider } from './template-provider-yD9e1k6K.js';
// TODO: add this import once this class isn't used in Stencil components anymore
// import '@/src/components/search/atomic-result-link/atomic-result-link';
class ResultTemplateProvider extends TemplateProvider {
    constructor(props, gridCellLinkTarget) {
        super(props, () => buildResultTemplatesManager(props.bindings.engine));
        this.gridCellLinkTarget = gridCellLinkTarget;
    }
    // TODO: Add JSX support for default template
    makeDefaultTemplate() {
        const content = document.createDocumentFragment();
        const linkEl = document.createElement('atomic-result-link');
        content.appendChild(linkEl);
        const linkContent = document.createDocumentFragment();
        const linkMarkup = `
      <atomic-result-link>
      ${this.gridCellLinkTarget ? `<a slot="attributes" target="${this.gridCellLinkTarget}"></a>` : ''}
      </atomic-result-link>
    `;
        const linkTemplate = document.createElement('template');
        linkTemplate.innerHTML = linkMarkup.trim();
        linkContent.appendChild(linkTemplate.content);
        return {
            content,
            linkContent,
            conditions: [],
        };
    }
}
export { ResultTemplateProvider as R };
//# sourceMappingURL=result-template-provider-BF0RDcnz.js.map
