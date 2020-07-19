(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/empty", "../assert/throwable/value-validation", "../string/name", "../boolean/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../boolean/empty");
    const value_validation_1 = require("../assert/throwable/value-validation");
    const name_1 = require("../string/name");
    const object_1 = require("../boolean/object");
    /**
     * Calls {@param replace} on each property value from {@param object} recursively
     *
     * {@template Replace} type of replace result
     *
     * {@param replace} is only called when {@param validation} result of value is true
     * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
     */
    function MapCallback(object, validation, replace, properties = []) {
        let result = {};
        for (const property in object) {
            const value = object[property];
            let props = [...properties, property];
            if (validation(value)) {
                result[property] = replace(value, props);
            }
            else if (object_1.default(value)) {
                const val = MapCallback(value, validation, replace, props);
                if (!empty_1.default(val)) {
                    result[property] = val;
                }
            }
            else {
                throw value_validation_1.default(property, 'valid', name_1.default(validation));
            }
        }
        return result;
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map