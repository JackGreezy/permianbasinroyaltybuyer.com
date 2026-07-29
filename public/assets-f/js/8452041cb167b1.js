function hasLightDOMSlotContent(element) {
    return ('slotContent' in element &&
        typeof element.slotContent === 'object');
}
function getNamedSlotContent(host, slotName) {
    if (hasLightDOMSlotContent(host)) {
        const targetLightDomSlotContent = host.slotContent[slotName];
        return (targetLightDomSlotContent?.filter((node) => node instanceof Element) || []);
    }
    const children = Array.from(host.children);
    return children.filter((child) => child.getAttribute('slot') === slotName);
}
function getDefaultSlotContent(host) {
    const children = Array.from(host.children);
    return children.filter((child) => !child.hasAttribute('slot') || child.getAttribute('slot') === '');
}
export { getNamedSlotContent as a, getDefaultSlotContent as g };
//# sourceMappingURL=slot-utils-DwFSOZ_l.js.map
