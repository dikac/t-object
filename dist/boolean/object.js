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
    /**
     * Check if {@param value} is object and not null
     *
     * {@template Assumption} can be used for type guard if object type is known
     */
    function Object_(value) {
        if (value === null) {
            return false;
        }
        return typeof value === "object";
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map