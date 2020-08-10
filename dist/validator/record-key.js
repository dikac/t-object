(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/record/record-key", "./record-key-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_key_1 = require("./validatable/record/record-key");
    const record_key_callback_1 = require("./record-key-callback");
    function RecordKey(validator, validation, message) {
        return new record_key_callback_1.default(validator, record_key_1.default, validation, message);
    }
    exports.default = RecordKey;
});
//# sourceMappingURL=record-key.js.map