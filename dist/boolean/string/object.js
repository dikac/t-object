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
    function Object_(valid, value) {
        if (valid) {
            return `value is object`;
        }
        else {
            return `value is not object`;
        }
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map