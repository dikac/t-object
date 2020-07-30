(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/record/value", "../validatable/value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./return/record/value");
    const value_callback_1 = require("../validatable/value-callback");
    class ValueCallback {
        constructor(validators, validation, message) {
            this.validators = validators;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            let handler = (value, validators) => value_1.default(value, validators, false);
            return new value_callback_1.default(argument, this.validators, handler, this.validation, this.message);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-all.js.map