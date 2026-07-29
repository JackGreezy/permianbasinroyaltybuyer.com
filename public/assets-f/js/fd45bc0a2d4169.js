import './atomic-icon-D7DRsDUP.js';
import { x } from './custom-element-ClSinbnR.js';
import { r as renderButton } from './button-DE0Kx0NV.js';
import { r as renderRadioButton } from './radio-button-B_orPDne.js';
const renderPagerPreviousButton = ({ props }) => {
    return renderButton({
        props: {
            ...props,
            ariaLabel: props.i18n.t('previous'),
            style: 'outline-primary',
            part: 'previous-button',
            class: 'flex min-h-10 min-w-10 items-center justify-center p-1',
        },
    })(x `<atomic-icon
      icon=${props.icon}
      part="previous-button-icon"
      class="w-5 align-middle"
    ></atomic-icon>`);
};
const renderPagerNextButton = ({ props }) => {
    return renderButton({
        props: {
            ...props,
            ariaLabel: props.i18n.t('next'),
            style: 'outline-primary',
            part: 'next-button',
            class: 'flex min-h-10 min-w-10 items-center justify-center p-1',
        },
    })(x `<atomic-icon
      icon=${props.icon}
      part="next-button-icon"
      class="w-5 align-middle"
    ></atomic-icon>`);
};
const renderPagerPageButton = ({ props }) => {
    return renderRadioButton({
        props: {
            ...props,
            selectWhenFocused: false,
            key: props.page,
            style: 'outline-neutral',
            checked: props.isSelected,
            ariaCurrent: props.isSelected ? 'page' : 'false',
            class: 'btn-page focus-visible:bg-neutral-light min-h-10 min-w-10 p-1',
            part: `page-button${props.isSelected ? ' active-page-button' : ''}`,
            onFocusCallback: props.onFocusCallback,
            ariaRoleDescription: 'link',
        },
    });
};
const renderPageButtons = ({ props }) => (children) => {
    return x ` <div
      part="page-buttons"
      role="radiogroup"
      aria-label=${props.i18n.t('pagination')}
      class="contents"
    >
      ${children}
    </div>`;
};
const renderPagerNavigation = ({ props }) => (children) => {
    return x `<nav aria-label=${props.i18n.t('pagination')}>
      <div part="buttons" role="toolbar" class="flex flex-wrap gap-2">
        ${children}
      </div>
    </nav>`;
};
const minimumPage = 0;
function getCurrentPagesRange(page, desiredNumberOfPages, maxPage) {
    let range = buildRange(page, desiredNumberOfPages);
    range = shiftRightIfNeeded(range);
    range = shiftLeftIfNeeded(range, maxPage);
    return buildCurrentPages(range);
}
function buildRange(page, desiredNumberOfPages) {
    const isEven = desiredNumberOfPages % 2 === 0;
    const leftCapacity = Math.floor(desiredNumberOfPages / 2);
    const rightCapacity = isEven ? leftCapacity - 1 : leftCapacity;
    const start = page - leftCapacity;
    const end = page + rightCapacity;
    return { start, end };
}
function shiftRightIfNeeded(range) {
    const leftExcess = Math.max(minimumPage - range.start, 0);
    const start = range.start + leftExcess;
    const end = range.end + leftExcess;
    return { start, end };
}
function shiftLeftIfNeeded(range, maxPage) {
    const rightExcess = Math.max(range.end - maxPage, 0);
    const start = Math.max(range.start - rightExcess, minimumPage);
    const end = range.end - rightExcess;
    return { start, end };
}
function buildCurrentPages(range) {
    const currentPages = [];
    for (let counter = range.start; counter <= range.end; ++counter) {
        currentPages.push(counter);
    }
    return currentPages;
}
export { renderPagerPreviousButton as a, renderPageButtons as b, renderPagerNextButton as c, renderPagerPageButton as d, getCurrentPagesRange as g, renderPagerNavigation as r };
//# sourceMappingURL=pager-utils-DVUs0h8h.js.map
