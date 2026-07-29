import { c as containsSections } from './item-layout-sections-By3xRnK_.js';
function getDisplayClass(display) {
    switch (display) {
        case 'grid':
            return 'display-grid';
        case 'table':
            return 'display-table';
        default:
            return 'display-list';
    }
}
function getDensityClass(density) {
    switch (density) {
        case 'comfortable':
            return 'density-comfortable';
        case 'compact':
            return 'density-compact';
        default:
            return 'density-normal';
    }
}
function getImageClass(image) {
    switch (image) {
        case 'large':
            return 'image-large';
        case 'small':
            return 'image-small';
        case 'none':
            return 'image-none';
        default:
            return 'image-icon';
    }
}
function getItemListDisplayClasses(display, density, image, isLoading, isAppLoading) {
    const classes = getItemDisplayClasses(display, density, image);
    if (isLoading) {
        classes.push('loading');
    }
    if (isAppLoading) {
        classes.push('placeholder');
    }
    return classes.join(' ');
}
function getItemDisplayClasses(display, density, image) {
    const classes = [
        getDisplayClass(display),
        getDensityClass(density),
        getImageClass(image),
    ];
    return classes;
}
function getSection(children, section) {
    return Array.from(children).find((element) => element.tagName.toLowerCase() === section);
}
function getImageSizeFromSections(children) {
    const imageSize = getSection(children, 'atomic-result-section-visual')?.getAttribute('image-size');
    if (!imageSize) {
        return undefined;
    }
    return imageSize;
}
function getItemLayoutClasses(config, HTMLContent) {
    const classes = getItemDisplayClasses(config.display, config.density, getImageSizeFromSections(config.children) ?? config.imageSize);
    if (HTMLContent
        ? containsSections(HTMLContent)
        : containsSections(config.children)) {
        classes.push('with-sections');
    }
    return classes;
}
export { getItemDisplayClasses as a, getItemLayoutClasses as b, getItemListDisplayClasses as g };
//# sourceMappingURL=item-layout-utils-Di0gijk4.js.map
