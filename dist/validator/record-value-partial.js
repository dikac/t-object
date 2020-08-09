(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/record/record-value-partial", "./record-value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_value_partial_1 = require("./return/record/record-value-partial");
    const record_value_callback_1 = require("./record-value-callback");
    function RecordValuePartial(validator, validation, message) {
        return new record_value_callback_1.default(validator, (value, validators) => record_value_partial_1.default(value, validators), validation, message);
    }
    exports.default = RecordValuePartial;
});
//# sourceMappingURL=record-value-partial.js.map