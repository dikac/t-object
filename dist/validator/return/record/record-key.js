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
    function RecordValue(object, value) {
        let result = {};
        for (const k of Object.values(object)) {
            result[k] = value.validate(k);
        }
        return result;
    }
    exports.default = RecordValue;
});
//# sourceMappingURL=record-key.js.map