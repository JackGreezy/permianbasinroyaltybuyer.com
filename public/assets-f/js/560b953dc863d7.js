function parseDependsOn(dependsOn) {
    if (Object.keys(dependsOn).length > 1) {
        throw "Depending on multiple facets isn't supported";
    }
    const entries = Object.entries(dependsOn);
    return entries.map(([parentFacetId, expectedValue]) => ({
        parentFacetId,
        condition: buildDependsOnCondition(expectedValue),
    }));
}
function buildDependsOnCondition(expectedValue) {
    return (values) => values.some((value) => {
        if (isCategoryFacetValue(value)) {
            return matchesCategoryFacetValue(value, expectedValue);
        }
        if (isSimpleFacetValue(value)) {
            return matchesSimpleFacetValue(value, expectedValue);
        }
        return false;
    });
}
function matchesCategoryFacetValue(value, expectedValue) {
    const selectedValue = getSelectedCategoryFacetValueRequest(value);
    if (!selectedValue) {
        return false;
    }
    return !expectedValue || selectedValue.value === expectedValue;
}
function matchesSimpleFacetValue(value, expectedValue) {
    if (value.state !== 'selected') {
        return false;
    }
    return !expectedValue || value.value === expectedValue;
}
function isCategoryFacetValue(request) {
    const requestAsRecord = request;
    return ((requestAsRecord?.children &&
        Array.isArray(requestAsRecord.children) &&
        requestAsRecord?.state &&
        typeof requestAsRecord.state === 'string') === true);
}
function getSelectedCategoryFacetValueRequest(value) {
    if (!isCategoryFacetValue(value)) {
        return null;
    }
    if (value.state === 'selected') {
        return value;
    }
    for (const child of value.children) {
        const selectedValue = getSelectedCategoryFacetValueRequest(child);
        if (selectedValue !== null) {
            return selectedValue;
        }
    }
    return null;
}
function isSimpleFacetValue(value) {
    const asRecord = value;
    return ('value' in asRecord &&
        typeof asRecord.value === 'string' &&
        !('children' in asRecord));
}
export { parseDependsOn as p };
//# sourceMappingURL=depends-on-Bf-6_cVZ.js.map
