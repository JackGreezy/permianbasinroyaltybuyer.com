const cdnURLs = [
    'https://staticdev.cloud.coveo.com',
    'https://staticstg.cloud.coveo.com',
    'https://static.cloud.coveo.com',
    'http://localhost:3000',
];
function isCoveoCDN() {
    return cdnURLs.includes(new URL(import.meta.url).origin);
}
function getCoveoCdnResourceUrl() {
    return import.meta.resolve('./');
}
const getResourceUrl = () => isCoveoCDN() ? getCoveoCdnResourceUrl() : undefined;
function getAssetPath(path) {
    const resourceUrl = getResourceUrl();
    const baseUrl = resourceUrl !== undefined
        ? new URL('./', resourceUrl).href
        : new URL('./', window.document.baseURI).href;
    const assetUrl = new URL(path, baseUrl);
    return assetUrl.origin !== window.location.origin
        ? assetUrl.href
        : assetUrl.pathname;
}
function parseAssetURL(url, assetPath = './assets') {
    const [, protocol, remainder] = url.match(/^([a-z]+):\/\/(.*?)(\.svg)?$/) || [];
    if (!protocol) {
        if (url.startsWith('./') || url.startsWith('../')) {
            return url;
        }
        return null;
    }
    if (protocol === 'http' || protocol === 'https') {
        return url;
    }
    if (protocol === 'assets') {
        return getAssetPath(`${assetPath}/${remainder}.svg`);
    }
    return null;
}
export { getAssetPath as g, parseAssetURL as p };
//# sourceMappingURL=asset-path-utils-DR8U1hRo.js.map
