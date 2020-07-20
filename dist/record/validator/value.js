(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/record/value", "../../validatable/record/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../validatable/record/value");
    const and_1 = require("../../validatable/record/boolean/and");
    class Value {
        constructor(validators) {
            this.validators = validators;
        }
        validate(argument) {
            let results = value_1.default(this.validators, argument, false);
            return {
                value: argument,
                validation: results,
                valid: and_1.default(results)
            };
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map