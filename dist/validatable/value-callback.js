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
        constructor(value, validators, map, validation, messageFactory) {
            this.value = value;
            this.validators = validators;
            this.map = map;
            this.validation = validation;
            this.messageFactory = messageFactory;
        }
        get valid() {
            return this.validatable.valid;
        }
        get validatable() {
            const validatable = this.validation(this.validatables);
            return Object.defineProperty(this, 'validatable', {
                get() {
                    return validatable;
                }
            }).validatable;
        }
        get messages() {
            return this.validatables;
        }
        get validatables() {
            const validatables = this.map(this.value, this.validators);
            return Object.defineProperty(this, 'validatables', {
                get() {
                    return validatables;
                }
            }).validatables;
        }
        get message() {
            const message = this.messageFactory(this.validatables);
            return Object.defineProperty(this, 'message', {
                get() {
                    return message;
                }
            }).message;
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map