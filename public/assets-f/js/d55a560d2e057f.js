
import './index-DRai3PWs.js';
import { f as camelToKebab, k as kebabToCamel } from './utils-tjiSYtV8.js';
function mapProperty(options) {
    return (proto, propertyKey) => {
        const ctor = proto.constructor;
        ctor.createProperty(propertyKey, { type: Object });
        ctor.addInitializer((instance) => {
            const props = {};
            const prefix = options?.attributePrefix || camelToKebab(propertyKey.toString());
            mapAttributesToProp(prefix, props, Array.from(instance.attributes), options?.splitValues ?? false);
            instance[propertyKey] = props;
        });
    };
}
function splitAttributeValueOnCommas(attributeValue) {
    const splitButIgnoreEscapeSymbolsExpression = /(?:\\.|[^,])+/g;
    const [...valuesWithEscapeSymbols] = attributeValue.matchAll(splitButIgnoreEscapeSymbolsExpression) ?? [];
    const removeEscapeSymbolsExpression = /\\(.)/g;
    return valuesWithEscapeSymbols.map(([valuesWithEscapeSymbols]) => valuesWithEscapeSymbols.replace(removeEscapeSymbolsExpression, '$1'));
}
function mapAttributesToProp(prefix, mapVariable, attributes, splitValues) {
    const map = attributesToStringMap(prefix, attributes);
    Object.assign(mapVariable, splitValues ? stringMapToStringArrayMap(map) : map);
}
function stringMapToStringArrayMap(map) {
    return Object.entries(map).reduce((acc, [key, value]) => ({
        // biome-ignore lint/performance/noAccumulatingSpread: <>
        ...acc,
        [key]: splitAttributeValueOnCommas(value).map((subValue) => subValue.trim()),
    }), {});
}
function attributesToStringMap(prefix, attributes) {
    const mapVariable = {};
    const kebabPrefix = `${camelToKebab(prefix)}-`;
    for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (attribute.name.indexOf(kebabPrefix) !== 0) {
            continue;
        }
        const property = kebabToCamel(attribute.name.replace(kebabPrefix, ''));
        mapVariable[property] = `${attribute.value}`;
    }
    return mapVariable;
}
export { mapProperty as m };
//# sourceMappingURL=props-utils-CtIuQum3.js.map
