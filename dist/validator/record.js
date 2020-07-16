(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./record/record", "@dikac/t-validatable/record/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_1 = require("./record/record");
    const and_1 = require("@dikac/t-validatable/record/recursive/boolean/and");
    class Record {
        constructor(validators) {
            this.validators = validators;
        }
        validate(value) {
            let results = record_1.default(this.validators, value);
            return {
                value: results,
                // @ts-ignore
                valid: and_1.default(results)
            };
        }
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map