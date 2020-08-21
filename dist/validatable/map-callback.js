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
        constructor(value, validators, map, validation, message) {
            this.value = value;
            this.validators = validators;
            this.map = map;
            this.validation = validation;
            this.validatables = this.map(value, this.validators);
            this.messages = this.validatables;
            this.validatable = this.validation(this.validatables);
            this.valid = this.validatable.valid;
            this.message = message(this.validatables);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=map-callback.js.map