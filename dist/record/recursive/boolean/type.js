(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/type", "../../../property/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../../../boolean/type");
    const type_2 = require("../../../property/boolean/type");
    /**
     * Check if {@param record} is {@link RecordInterface} with {@template Value} value
     *
     * {@param validation} is use to validate for {@template Value}
     * optionally {@param prop} use to validate object property
     */
    function Type(record, validation, prop = type_2.default) {
        if (!type_1.default(record)) {
            return false;
        }
        for (let property in record) {
            if (!prop(property)) {
                return false;
            }
            // @ts-ignore
            const value = record[property];
            if (validation(value)) {
                continue;
            }
            if (type_1.default(value)) {
                if (Type(value, validation, prop)) {
                    continue;
                }
            }
            return false;
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map