(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/record/record-value", "./record-value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_value_1 = require("./validatable/record/record-value");
    const record_value_callback_1 = require("./record-value-callback");
    function RecordValue(validator, validation, message) {
        return new record_value_callback_1.default(validator, record_value_1.default, validation, message);
    }
    exports.default = RecordValue;
});
//# sourceMappingURL=record-value.js.map