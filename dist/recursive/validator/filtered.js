(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/recursive/map", "../../validatable/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("../../validatable/recursive/map");
    const and_1 = require("../../validatable/recursive/boolean/and");
    class Filtered {
        constructor(validators, filter, stopInvalid) {
            this.validators = validators;
            this.filter = filter;
            this.stopInvalid = stopInvalid;
        }
        validate(argument) {
            let results = map_1.default(this.validators, argument, this.stopInvalid);
            let filtered = this.filter(results);
            return {
                validatable: filtered,
                value: argument,
                valid: and_1.default(filtered)
            };
        }
    }
    exports.default = Filtered;
});
//# sourceMappingURL=filtered.js.map