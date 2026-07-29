import { g as getDefaultExportFromCjs } from './_commonjsHelpers-C44kNtub.js';
function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}
var en$3 = {exports: {}};
var en$2 = en$3.exports;
var hasRequiredEn;
function requireEn () {
	if (hasRequiredEn) return en$3.exports;
	hasRequiredEn = 1;
	(function (module, exports) {
		!function(e,n){module.exports=n();}(en$2,(function(){return {name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var n=["th","st","nd","rd"],t=e%100;return "["+e+(n[(t-20)%10]||n[t]||n[0])+"]"}}}));
	} (en$3));
	return en$3.exports;
}
var enExports = requireEn();
var en = /*@__PURE__*/getDefaultExportFromCjs(enExports);
var en$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: en
}, [enExports]);
export { en$1 as e };
//# sourceMappingURL=en-Cqo9FLJl.js.map
