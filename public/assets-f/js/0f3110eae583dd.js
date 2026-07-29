const arrayConverter = {
    fromAttribute: (value) => {
        if (!value)
            return [];
        try {
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : [];
        }
        catch {
            console.warn(`Failed to parse the array attribute value: ${value}. Ensure the value is a valid JSON array.`);
            return [];
        }
    },
    toAttribute: (value) => JSON.stringify(value),
};
export { arrayConverter as a };
//# sourceMappingURL=array-converter-BxDz2tBl.js.map
