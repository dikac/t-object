(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/record-value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_value_callback_1 = require("../validatable/record-value-callback");
    class RecordValueCallback {
        constructor(validator, handler, validation, message) {
            this.validator = validator;
            this.handler = handler;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            return new record_value_callback_1.default(argument, this.validator, this.handler, this.validation, this.message);
        }
    }
    exports.default = RecordValueCallback;
});
//# sourceMappingURL=record-value-callback.js.map