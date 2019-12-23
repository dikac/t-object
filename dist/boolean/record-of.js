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
    // TODO ADD TYPE
    function RecordOf(value, validator) {
        for (let property in value) {
            if (!validator(value[property])) {
                return false;
            }
        }
        return true;
    }
    exports.default = RecordOf;
});
//# sourceMappingURL=record-of.js.map