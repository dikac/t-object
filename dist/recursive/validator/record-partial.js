(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validator/validatable/recursive/map-partial", "../../validatable/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_partial_1 = require("../../validator/validatable/recursive/map-partial");
    const and_1 = require("../../validatable/recursive/boolean/and");
    class RecordPartial {
        constructor(validators) {
            this.validators = validators;
        }
        validate(argument) {
            let results = map_partial_1.default(this.validators, argument);
            return {
                validatable: results,
                value: argument,
                valid: and_1.default(results)
            };
        }
    }
    exports.default = RecordPartial;
});
//# sourceMappingURL=record-partial.js.map