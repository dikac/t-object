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
    function Record(obj, value, property) {
        for (const [prop, val] of Object.entries(obj)) {
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