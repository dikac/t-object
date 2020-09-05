(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("../value/set-getter");
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
            return set_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = RecordCallback;
});
//# sourceMappingURL=record-value-callback.js.map