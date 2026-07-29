import { x } from './custom-element-ClSinbnR.js';
import { e, i, t } from './directive-C5w180XZ.js';
class LocalizedStringDirective extends i {
    constructor(partInfo) {
        super(partInfo);
        this.delimitingCharacter = '\u001d'; // Unicode group separator
        this.placeholderPrefixCharacter = '\u001a'; // Unicode substitute character
        if (partInfo.type !== t.CHILD) {
            throw new Error('localizedString can only be used in child bindings');
        }
    }
    render(props) {
        const { i18n, key, params, count } = props;
        const getPlaceholderForParamKey = (paramKey) => `${this.delimitingCharacter}${this.placeholderPrefixCharacter}${paramKey}${this.delimitingCharacter}`;
        const getParamFromPlaceholder = (placeholder) => params[placeholder.slice(1)];
        const placeholdersMap = Object.fromEntries(Object.keys(params).map((paramKey) => [
            paramKey,
            getPlaceholderForParamKey(paramKey),
        ]));
        const localizedStringWithPlaceholders = i18n.t(key, {
            interpolation: { escapeValue: false },
            count: count,
            ...placeholdersMap,
        });
        return x `${localizedStringWithPlaceholders
            .split(this.delimitingCharacter)
            .map((text) => text.startsWith(this.placeholderPrefixCharacter)
            ? getParamFromPlaceholder(text)
            : text)}`;
    }
}
const localizedString = e(LocalizedStringDirective);
export { localizedString as l };
//# sourceMappingURL=localized-string-CQCD-kWJ.js.map
