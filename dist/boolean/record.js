/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
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
    function Record(object, value, property) {
        for (const [prop, val] of Object.entries(object)) {
            if (property) {
                if (!property(prop)) {
                    return false;
                }
            }
            if (!value(val)) {
                return false;
            }
        }
        return true;
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map