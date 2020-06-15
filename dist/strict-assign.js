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
     * Assign {@param source} to {@param target}
     * {@param source} must have the same or partial type of {@param source}
     */
    function StrictAssign(target, source) {
        return Object.assign(target, source);
    }
    exports.default = StrictAssign;
});
//# sourceMappingURL=strict-assign.js.map