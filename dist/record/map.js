(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "../boolean/empty", "../message/string/property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const empty_1 = require("../boolean/empty");
    const property_actual_1 = require("../message/string/property-actual");
    /**
     * get all {@link Record} value property and construct with the same structure with original
     *
     * @template Value - value for {@link Record}
     * @template Container - object compatible with {@link Record}
     * @template Replace - new value to be used to replace {@link Value}
     *
     * @param object
     * @param validation
     * @param replace
     */
    function Map(object, validation, replace) {
        let result = {};
        for (let property in object) {
            const value = object[property];
            if (validation(value)) {
                result[property] = replace(value);
            }
            else if (type_1.default(value)) {
                const val = Map(value, validation, replace);
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
    exports.default = Map;
});
//# sourceMappingURL=map.js.map