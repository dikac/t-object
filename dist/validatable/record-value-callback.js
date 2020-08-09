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
    //
    // type Typed<
    //     Base extends globalThis.Record<PropertyKey, unknown>,
    //     Type extends globalThis.Record<PropertyKey, unknown>
    //     > = Type extends Base ? Type : unknown;
    class RecordCallback {
        constructor(value, validator, handler, validation, message) {
            // this.validators = {value:validatorValue, key:keyValue};
            this.value = value;
            this.validator = validator;
            this.handler = handler;
            this.validation = validation;
            this.validatables = this.handler(value, validator);
            this.messages = this.validatables;
            this.validatable = this.validation(this.validatables);
            this.valid = this.validatable.valid;
            this.message = message(this.validatables);
        }
    }
    exports.default = RecordCallback;
});
//# sourceMappingURL=record-value-callback.js.map