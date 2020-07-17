(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/boolean/validator", "../../../boolean/object", "../../record/assert/throwable/value", "../../../assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("@dikac/t-validator/boolean/validator");
    const object_1 = require("../../../boolean/object");
    const value_1 = require("../../record/assert/throwable/value");
    const value_2 = require("../../../assert/throwable/value");
    function Record(validators, values) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            const value = values[property];
            if (validator_1.default(validator)) {
                // @ts-ignore
                object[property] = validator.validate(value);
                continue;
            }
            if (object_1.default(validator)) {
                if (object_1.default(value)) {
                    // @ts-ignore
                    object[property] = Record(validator, value);
                    /* continue;*/
                }
                else {
                    throw value_2.default(property, 'object');
                }
            }
            else {
                throw value_1.default(property);
            }
        }
        return object;
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map