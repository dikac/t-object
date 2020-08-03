(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/value-callback", "./return/record/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_callback_1 = require("../validatable/value-callback");
    const value_1 = require("./return/record/value");
    class Value {
        constructor(validators, validation, message) {
            this.validators = validators;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            let handler = (value, validators) => value_1.default(value, validators, true);
            return new value_callback_1.default(argument, this.validators, handler, this.validation, this.message);
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map