// TODO: Replace by Set.prototype.intersection in July 2025
function intersection(setA, setB) {
    const result = new Set();
    for (const elem of setA) {
        if (setB.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}
function makeMatchConditions(mustMatch, mustNotMatch, helpers) {
    const conditions = [];
    for (const field in mustMatch) {
        if (mustNotMatch[field]) {
            const mustNotMatchValues = new Set(mustNotMatch[field]);
            const mustMatchValues = new Set(mustMatch[field]);
            const commonValues = intersection(mustNotMatchValues, mustMatchValues);
            if (commonValues.size > 0) {
                console.error(`Conflicting match conditions for field ${field}, the template will be ignored.`, commonValues);
                return [(() => false)];
            }
        }
        conditions.push(helpers.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(helpers.fieldMustNotMatch(field, mustNotMatch[field]));
    }
    return conditions;
}
function makeDefinedConditions(ifDefined, ifNotDefined, helpers) {
    const conditions = [];
    if (ifDefined) {
        const fieldNames = ifDefined.split(',');
        conditions.push(helpers.fieldsMustBeDefined(fieldNames));
    }
    if (ifNotDefined) {
        const fieldNames = ifNotDefined.split(',');
        conditions.push(helpers.fieldsMustNotBeDefined(fieldNames));
    }
    return conditions;
}
export { makeDefinedConditions as a, makeMatchConditions as m };
//# sourceMappingURL=template-utils-w8NxKX-R.js.map
