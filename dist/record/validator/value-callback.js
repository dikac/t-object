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
    class ValueCallbackz {
        constructor(validators, handler, validation) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
        }
        validate(argument) {
            return new value_callback_1.default(argument, this.validators, this.handler, this.validation);
        }
    }
    exports.default = ValueCallbackz;
});
//# sourceMappingURL=value-callback.js.map