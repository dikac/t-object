(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/record/record-key-partial", "./record-key-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_key_partial_1 = require("./return/record/record-key-partial");
    const record_key_callback_1 = require("./record-key-callback");
    function RecordKeyPartial(validator, validation, message) {
        return new record_key_callback_1.default(validator, (value, validators) => record_key_partial_1.default(value, validators), validation, message);
    }
    exports.default = RecordKeyPartial;
});
//# sourceMappingURL=record-key-partial.js.map