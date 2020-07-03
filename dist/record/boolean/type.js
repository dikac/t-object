(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../iterable/pair", "../../key/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pair_1 = require("../../iterable/pair");
    const type_1 = require("../../key/boolean/type");
    /**
     * check if {@param obj} is certain type of record
     * {@param value} use to validate object value
     * optionally {@param property} use to validate object property
     */
    function Type(obj, value, property = type_1.default) {
        for (const [prop, val] of pair_1.default(obj)) {
            if (!property(prop)) {
                return false;
            }
            if (!value(val)) {
                return false;
            }
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map