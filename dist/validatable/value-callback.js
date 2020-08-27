(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/value/memoize-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_getter_1 = require("../value/value/memoize-getter");
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
            return memoize_getter_1.default(this, 'validatable', this.validation(this.validatables));
        }
        get messages() {
            return this.validatables;
        }
        get validatables() {
            return memoize_getter_1.default(this, 'validatables', this.map(this.value, this.validators));
        }
        get message() {
            return memoize_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map