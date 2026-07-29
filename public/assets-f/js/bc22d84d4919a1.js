const bindAnalyticsToLink = (link, { onSelect, onBeginDelayedSelect, onCancelPendingSelect, stopPropagation = true, }) => {
    const stopPropagationAndProcess = (e, process) => {
        stopPropagation && e.stopPropagation();
        process();
    };
    const selectHandler = (e) => stopPropagationAndProcess(e, onSelect);
    const touchStartHandler = (e) => stopPropagationAndProcess(e, onBeginDelayedSelect);
    const touchEndHandler = (e) => stopPropagationAndProcess(e, onCancelPendingSelect);
    ['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((eventName) => link.addEventListener(eventName, selectHandler));
    link.addEventListener('touchstart', touchStartHandler, { passive: true });
    link.addEventListener('touchend', touchEndHandler, { passive: true });
    return () => {
        ['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((eventName) => link.removeEventListener(eventName, selectHandler));
        link.removeEventListener('touchstart', touchStartHandler);
        link.removeEventListener('touchend', touchEndHandler);
    };
};
export { bindAnalyticsToLink as b };
//# sourceMappingURL=bind-analytics-to-link-Y79wjwFo.js.map
