(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_callback_1 = require("../validatable/value-callback");
    class ValueCallback {
        constructor(validators, handler, validation, message) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            return new value_callback_1.default(argument, this.validators, this.handler, this.validation, this.message);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map