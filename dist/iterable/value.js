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
     * iterate {@param object} value
     */
    function* Value(object) {
        for (const property in object) {
            yield object[property];
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map