(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/object", "../../../assert/throwable/property-value-validation", "../../../string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../../../boolean/object");
    const property_value_validation_1 = require("../../../assert/throwable/property-value-validation");
    const name_1 = require("../../../string/name");
    class Pair {
        constructor(record, validation) {
            this.record = record;
            this.validation = validation;
            this.keys = [];
        }
        *[Symbol.iterator]() {
            for (const property in this.record) {
                const value = this.record[property];
                const properties = [...this.keys, property];
                if (this.validation(value)) {
                    yield [properties, value];
                }
                else if (object_1.default(value)) {
                    let recursive = new Pair(value, this.validation);
                    recursive.keys.push(...properties);
                    yield* recursive;
                }
                else {
                    throw property_value_validation_1.default(properties.join('.'), 'valid', name_1.default(this.validation));
                }
            }
        }
    }
    exports.default = Pair;
});
//# sourceMappingURL=pair.js.map