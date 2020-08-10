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
    function RecordVKeyPartial(object, value) {
        let result = {};
        for (const k of Object.keys(object)) {
            const pair = value.validate(k);
            result[k] = pair;
            if (!pair.valid) {
                return result;
            }
        }
        return result;
    }
    exports.default = RecordVKeyPartial;
});
//# sourceMappingURL=record-key-partial.js.map