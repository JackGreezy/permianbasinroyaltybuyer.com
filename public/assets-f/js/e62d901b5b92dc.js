import { ResultTemplatesHelpers } from '/headless/v3.45.1/headless.esm.js';
import { r as readFromObject } from './object-utils-DOvHQ3be.js';
function buildStringTemplateFromResult(template, result, bindings) {
    return template.replace(/\${(.*?)}/g, (value) => {
        const key = value.substring(2, value.length - 1);
        let newValue = readFromObject(result, key);
        if (!newValue && typeof window !== 'undefined') {
            newValue = readFromObject(window, key);
        }
        if (!newValue) {
            bindings.engine.logger.warn(`${key} used in the href template is undefined for this result: ${result.uniqueId} and could not be found in the window object.`);
            return '';
        }
        return newValue;
    });
}
function getStringValueFromResultOrNull(result, field) {
    const value = ResultTemplatesHelpers.getResultProperty(result, field);
    if (typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    return value;
}
export { buildStringTemplateFromResult as b, getStringValueFromResultOrNull as g };
//# sourceMappingURL=result-utils-BzZ-ZscV.js.map
