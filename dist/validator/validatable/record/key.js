(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/boolean/validator", "../../../boolean/object", "../../../validatable/record/assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("@dikac/t-validator/boolean/validator");
    const object_1 = require("../../../boolean/object");
    const value_1 = require("../../../validatable/record/assert/throwable/value");
    function Key(value, validators, stopOnInvalid = true) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            if (validator_1.default(validator)) {
                // @ts-ignore
                object[property] = validator.validate(value);
                if (stopOnInvalid && !object[property].valid) {
                    return object;
                }
                continue;
            }
            if (object_1.default(validator)) {
                // @ts-ignore
                object[property] = Value(validator, value, stopOnInvalid);
                continue;
            }
            throw value_1.default(property);
        }
        return object;
    }
    exports.default = Key;
});
//# sourceMappingURL=key.js.map