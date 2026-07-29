import { a as i, x } from './custom-element-ClSinbnR.js';
import './atomic-text-L-S67inR.js';
import { i as i$1 } from './keyed-B2UhaAyp.js';
import { o } from './map-D-loUq-y.js';
import { n } from './ref-Ci0gDEiU.js';
import { t as tableElementTagName } from './base-template-controller-CyoYTbNr.js';
const styles$1 = i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties;:host{[part~=outline][part~=result-list-grid-clickable-container]{border:1px solid transparent;border-radius:1rem;padding:1rem;position:relative;transition:all .12s ease-out;&:hover{border-color:var(--atomic-neutral);border-style:var(--tw-border-style);border-width:1px;box-shadow:0 10px 25px var(--atomic-neutral);cursor:pointer}}[part=result-list-grid-clickable]:focus-visible{border-color:var(--atomic-primary);border-radius:2px;border-style:var(--tw-border-style);border-width:2px;color:var(--atomic-primary);cursor:pointer;display:inline-block;position:absolute;text-align:center;text-decoration:underline}[part=result-list-grid-clickable]:not(:focus){clip:rect(1px,1px,1px,1px);overflow:hidden;padding:0;position:absolute}.list-wrapper{word-break:break-word}.list-root.display-grid{display:grid;justify-content:space-evenly;.result-component{box-sizing:border-box;height:100%}}.list-root.display-grid{@media (width >= 1024px){grid-template-columns:repeat(auto-fit,minmax(17rem,1fr));&.density-comfortable{grid-row-gap:4rem;grid-column-gap:1.5rem}&.density-compact,&.density-normal{grid-row-gap:3rem;grid-column-gap:1.5rem}&.image-large{grid-template-columns:repeat(auto-fill,minmax(19rem,1fr))}&.image-small{@media not all and (width >= 1024px){grid-template-columns:repeat(3,1fr)}@media (width >= 1024px){grid-template-columns:repeat(3,1fr)}@media (min-width:1280px){grid-template-columns:repeat(4,1fr)}}}}.list-root.display-grid{@media not all and (width >= 1024px){&.image-large{@media not all and (min-width:768px){grid-template-columns:minmax(auto,35rem);&.density-comfortable{[part~=outline]{&:before{margin:2rem 0}}}&.density-normal{[part~=outline]{&:before{margin:1.5rem 0}}@media not all and (width >= 1024px){[part~=outline]{&:before{margin:1.75rem 0}}}}&.density-compact{[part~=outline]{&:before{margin:1rem 0}}@media not all and (width >= 1024px){[part~=outline]{&:before{margin:1.5rem 0}}}}[part~=outline]{&:before{background-color:var(--atomic-neutral);content:" ";display:block;height:1px}&:first-of-type:before{display:none}}atomic-result-placeholder{&:before{background-color:transparent}}}@media (min-width:768px){grid-column-gap:.5rem;grid-row-gap:.5rem;grid-template-columns:1fr 1fr;[part~=outline]{border-color:var(--atomic-neutral);border-radius:1rem;border-style:var(--tw-border-style);border-width:1px;padding:1rem}atomic-result-placeholder{border-color:transparent}}}&.image-icon,&.image-none,&.image-small{grid-column-gap:.5rem;grid-row-gap:.5rem;[part~=outline]{border-color:var(--atomic-neutral);border-radius:1rem;border-style:var(--tw-border-style);border-width:1px;padding:1rem}atomic-result-placeholder{border-color:transparent}@media not all and (min-width:640px){grid-template-columns:minmax(0,1fr)}@media (min-width:768px){grid-template-columns:minmax(0,1fr) minmax(0,1fr)}@media (width >= 1024px){grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)}}}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-border-style:solid}}}`;
const styles = i`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties;.list-wrapper.display-table{display:grid;overflow-x:auto}.list-root.display-table{border-collapse:separate;border-spacing:0;min-width:100%;td,th{border-color:var(--atomic-neutral);border-style:var(--tw-border-style);border-width:1px;font-family:var(--atomic-font-family);font-size:var(--atomic-text-sm);line-height:var(--tw-leading,var(--text-sm--line-height,1.42857));line-height:1rem;white-space:nowrap;&:not(:first-child){border-left:none}&:first-child{min-width:19rem}}th{background-color:var(--atomic-neutral-light);border-bottom:none;color:#000;font-weight:700;padding:1rem var(--padding);text-align:left;&:first-child{border-top-left-radius:var(--atomic-border-radius-xl)}&:last-child{border-top-right-radius:var(--atomic-border-radius-xl)}}td{border-top:none;color:var(--atomic-neutral-dark);padding:var(--padding);vertical-align:top}&.density-comfortable{--padding:2rem}&.density-normal{--padding:1.5rem}&.density-compact{--padding:1rem}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-border-style:solid}}}`;
const renderTableLayout = ({ props }) => {
    const { host, listClasses, logger } = props;
    const fieldColumns = getFieldTableColumns(props);
    if (!fieldColumns.length) {
        logger.error('atomic-table-element elements missing in the template to display columns.', host);
    }
    return (children) => x `<table class="list-root ${listClasses}" part="result-table">
      <thead part="result-table-heading">
        <tr part="result-table-heading-row">
          ${o(fieldColumns, (column) => {
        return x `<th part="result-table-heading-cell">
              <atomic-text
                .value=${column.getAttribute('label')}
              ></atomic-text>
            </th>`;
    })}
        </tr>
      </thead>
      <tbody part="result-table-body">
        ${children}
      </tbody>
    </table>`;
};
const renderTableRow = ({ props, }) => {
    const { key, rowIndex, setRef } = props;
    return (children) => x `${i$1(key, x `<tr
        .part="result-table-row${rowIndex % 2 === 1
        ? ' result-table-row-even'
        : ' result-table-row-odd'}"
        ${n((element) => setRef(element))}
      >
        ${children}
      </tr>`)}`;
};
const renderTableData = ({ props, }) => {
    const { renderItem, firstItem, itemRenderingFunction } = props;
    const fieldColumns = getFieldTableColumns(props);
    let currentItemColumns = fieldColumns;
    if (itemRenderingFunction && firstItem) {
        const contentDiv = document.createElement('div');
        const renderedHTML = itemRenderingFunction(firstItem, document.createElement('div'));
        contentDiv.innerHTML = renderedHTML;
        currentItemColumns = Array.from(contentDiv.querySelectorAll(tableElementTagName));
    }
    return x `${o(currentItemColumns, (column, index) => {
        const label = fieldColumns[index]?.getAttribute('label') ||
            column.getAttribute('label');
        return x `${i$1(`${label}${props.key}`, x `<td part="result-table-cell">${renderItem(column)}</td>`)}`;
    })}`;
};
const getFieldTableColumns = (props) => {
    if (props.itemRenderingFunction) {
        return getFieldTableColumnsFromRenderingFunction(props);
    }
    return getFieldTableColumnsFromHTMLTemplate(props);
};
const getFieldTableColumnsFromRenderingFunction = (props) => {
    const { firstItem, itemRenderingFunction } = props;
    const contentOfRenderingFunction = document.createElement('div');
    const contentOfRenderingFunctionAsString = itemRenderingFunction(firstItem, document.createElement('div'));
    contentOfRenderingFunction.innerHTML = contentOfRenderingFunctionAsString;
    return Array.from(contentOfRenderingFunction.querySelectorAll(tableElementTagName));
};
const getFieldTableColumnsFromHTMLTemplate = (props) => {
    if (!props.templateContentForFirstItem) {
        return [];
    }
    return Array.from(props.templateContentForFirstItem.querySelectorAll(tableElementTagName));
};
export { renderTableRow as a, renderTableData as b, styles$1 as c, renderTableLayout as r, styles as s };
//# sourceMappingURL=table-layout-GUf0-R0R.js.map
