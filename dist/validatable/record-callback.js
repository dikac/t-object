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
    class RecordCallback {
        constructor(value, validatorValue, keyValue, map, validation, message) {
            this.value = value;
            this.map = map;
            this.validation = validation;
            this.validators = { value: validatorValue, key: keyValue };
            this.validatables = this.map(value, keyValue, validatorValue);
            this.messages = this.validatables;
            this.validatable = this.validation(this.validatables);
            this.valid = this.validatable.valid;
            this.message = message(this.validatables);
        }
    }
    exports.default = RecordCallback;
});
//# sourceMappingURL=record-callback.js.map