/**
 * Check if {@param value} is symbol
 * taken from {@link https://stackoverflow.com/questions/46479169/check-if-value-is-a-symbol-in-javascript}
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Symbol(value) {
        return typeof value === 'symbol'
            || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
    }
    exports.default = Symbol;
});
//# sourceMappingURL=symbol.js.map