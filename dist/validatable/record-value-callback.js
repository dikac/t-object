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
    class RecordCallback {
        constructor(value, validator, map, validation, message) {
            this.value = value;
            this.validator = validator;
            this.messageFactory = message;
            this.validatables = map(value, validator);
            this.messages = this.validatables;
            this.validatable = validation(this.validatables);
            this.valid = this.validatable.valid;
        }
        get message() {
            return memoize_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = RecordCallback;
});
//# sourceMappingURL=record-value-callback.js.map