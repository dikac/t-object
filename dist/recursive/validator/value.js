(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validator/validatable/recursive/value", "../../validatable/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../validator/validatable/recursive/value");
    const and_1 = require("../../validatable/recursive/boolean/and");
    class Value {
        constructor(validators) {
            this.validators = validators;
        }
        validate(argument) {
            let results = value_1.default(this.validators, argument);
            return {
                value: results,
                // @ts-ignore
                valid: and_1.default(results)
            };
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map