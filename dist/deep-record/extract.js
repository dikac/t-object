(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "../boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const empty_1 = require("../boolean/empty");
    /**
     * get all {@link DeepRecord} value property and construct with the same structure with original
     *
     * @template Value - value for {@link DeepRecord}
     * @template Container - object compatible with {@link DeepRecord}
     * @template Key - property from {Value} to be extracted
     *
     * @param object - source, and structure
     * @param property - property to be extracted
     * @return value from {@link DeepRecord}
     */
    function Extract(object, property) {
        let result = {};
        for (let prop in object) {
            const value = object[prop];
            if (property in value) {
                // @ts-ignore
                result[prop] = value[property];
            }
            else if (type_1.default(value)) {
                // @ts-ignore
                const val = Extract(value, property);
                if (!empty_1.default(val)) {
                    result[prop] = val;
                }
            }
            else {
                throw new Error(`property ${property} is not exists in given object`);
            }
        }
        return result;
    }
    exports.default = Extract;
});
//# sourceMappingURL=extract.js.map