(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validator/validatable/record/record", "../../validatable/record/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_1 = require("../../validator/validatable/record/record");
    const and_1 = require("../../validatable/record/boolean/and");
    class Record {
        constructor(validators) {
            this.validators = validators;
        }
        validate(argument) {
            let results = record_1.default(this.validators, argument);
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