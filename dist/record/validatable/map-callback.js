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
    class ValueCallback {
        constructor(value, validators, handler, validation) {
            this.value = value;
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
            this.validatables = this.handler(value, this.validators);
            this.validatable = this.validation(this.validatables);
            this.valid = this.validatable.valid;
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=map-callback.js.map