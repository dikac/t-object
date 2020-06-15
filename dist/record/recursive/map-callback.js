(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/type", "../../boolean/empty", "../../message/string/property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../../boolean/type");
    const empty_1 = require("../../boolean/empty");
    const property_actual_1 = require("../../message/string/property-actual");
    /**
     * Calls {@param replace} on each property value from {@param object} recursively
     *
     * {@template Replace} type of replace result
     *
     * {@param replace} is only called when {@param validation} result of value is true
     * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
     */
    function MapCallback(object, validation, replace) {
        let result = {};
        for (let property in object) {
            const value = object[property];
            if (validation(value)) {
                // @ts-ignore
                result[property] = replace(value);
            }
            else if (type_1.default(value)) {
                // @ts-ignore
                const val = MapCallback(value, validation, replace);
                if (!empty_1.default(val)) {
                    result[property] = val;
                }
            }
            else {
                throw new Error(property_actual_1.default(property, 'valid against validation', result[property] + ''));
            }
        }
        return result;
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map