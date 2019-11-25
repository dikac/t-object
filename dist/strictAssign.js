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
     * Strict assign
     *
     * @param object
     * @param data
     * @constructor
     */
    function StrictAssign(object, data) {
        return Object.assign(object, data);
    }
    exports.default = StrictAssign;
});
//# sourceMappingURL=strictAssign.js.map