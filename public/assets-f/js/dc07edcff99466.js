function promiseTimeout(prom, ms) {
    let id;
    const timeout = new Promise((_, reject) => {
        id = setTimeout(() => {
            reject(new Error('Promise timed out.'));
        }, ms);
    });
    return Promise.race([prom, timeout]).then((value) => {
        clearTimeout(id);
        return value;
    });
}
function buildCustomEvent(name, detail) {
    return new CustomEvent(name, {
        detail,
        // Event will bubble up the DOM until it is caught
        bubbles: true,
        // Allows to verify if event is caught (cancelled). If it's not caught, it won't be initialized.
        cancelable: true,
        // Allows to compose Atomic components inside one another, event will go across DOM/Shadow DOM
        composed: true,
    });
}
function listenOnce(element, type, listener, options) {
    const _listener = (evt) => {
        element.removeEventListener(type, _listener, options);
        typeof listener === 'object'
            ? listener.handleEvent.call(element, evt)
            : listener.call(element, evt);
    };
    element.addEventListener(type, _listener, options);
}
function eventPromise(element, type, timeoutMs = 0) {
    let promise = new Promise((resolve) => {
        listenOnce(element, type, (e) => {
            resolve(e);
        });
    });
    if (timeoutMs > 0) {
        promise = promiseTimeout(promise, timeoutMs);
    }
    return promise;
}
export { buildCustomEvent as b, eventPromise as e, listenOnce as l, promiseTimeout as p };
//# sourceMappingURL=event-utils-Xyk7tlQy.js.map
