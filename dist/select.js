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
    function Select(object, keys) {
        const result = {};
        for (const property of keys) {
            result[property] = object[property];
        }
        return result;
    }
    exports.default = Select;
});
//# sourceMappingURL=select.js.map