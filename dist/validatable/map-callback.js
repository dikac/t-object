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
    class MapCallback {
        constructor(value, validators, map, validation, message) {
            this.value = value;
            this.validators = validators;
            this.validatables = map(value, this.validators);
            this.messages = this.validatables;
            this.validatable = validation(this.validatables);
            this.valid = this.validatable.valid;
            this.messageFactory = message;
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map