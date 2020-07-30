(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/record", "@dikac/t-validatable/boolean/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_1 = require("../../../boolean/record");
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    function Record(record, property) {
        return record_1.default(record, validatable_1.default, property);
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map