(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/boolean/validator", "../../../validatable/record/assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("@dikac/t-validator/boolean/validator");
    const value_1 = require("../../../validatable/record/assert/throwable/value");
    function Map(values, validators, stopOnInvalid) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            const value = values[property];
            if (validator_1.default(validator)) {
                // @ts-ignore
                object[property] = validator.validate(value);
                if (stopOnInvalid && !object[property].valid) {
                    return object;
                }
                continue;
            }
            throw value_1.default(property);
        }
        return object;
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map