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
        for (const [k, v] of Object.values(object)) {
            const pair = value.validate(v);
            result[k] = pair;
            if (!pair.valid) {
                return result;
            }
        }
        return result;
    }
    exports.default = RecordValue;
});
//# sourceMappingURL=record-value-partial.js.map