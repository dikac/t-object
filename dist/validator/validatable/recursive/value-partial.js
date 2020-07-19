(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/boolean/validator", "../../../boolean/object", "../../recursive/assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("@dikac/t-validator/boolean/validator");
    const object_1 = require("../../../boolean/object");
    const value_1 = require("../../recursive/assert/throwable/value");
    function ValuePartial(validators, value, stopOnInvalid = true) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            if (validator_1.default(validator)) {
                let validatable = validator.validate(value);
                if (stopOnInvalid && !validatable.valid) {
                    return object;
                }
                // @ts-ignore
                object[property] = validatable;
                continue;
            }
            if (object_1.default(validator)) {
                // @ts-ignore
                object[property] = ValuePartial(validator, value, stopOnInvalid);
                continue;
            }
            throw value_1.default(property);
        }
        return object;
    }
    exports.default = ValuePartial;
});
//# sourceMappingURL=value-partial.js.map