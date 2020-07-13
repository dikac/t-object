(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/empty", "../../string/invalid-type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../../boolean/empty");
    const invalid_type_1 = require("../../string/invalid-type");
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
        for (const property in object) {
            const value = object[property];
            if (validation(value)) {
                // @ts-ignore
                result[property] = replace(value);
            }
            else if (Object(value)) {
                // @ts-ignore
                const val = MapCallback(value, validation, replace);
                if (!empty_1.default(val)) {
                    // @ts-ignore
                    result[property] = val;
                }
            }
            else {
                throw new Error(invalid_type_1.default({
                    value: this.validation.toString(),
                    property: property
                }));
            }
        }
        return result;
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map