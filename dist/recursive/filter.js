(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/empty", "../boolean/object", "./iterable/pair"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../boolean/empty");
    const object_1 = require("../boolean/object");
    const pair_1 = require("./iterable/pair");
    /**
     * recursively filter {@param record} value, returning new object with all value allowed
     * by {@param filter}
     *
     * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
     * recursively
     */
    function Filter(record, validation, filter) {
        let pair = new pair_1.default(record, validation);
        let result = {};
        for (const property in record) {
            const value = record[property];
            if (validation(value)) {
                if (filter(value)) {
                    // @ts-ignore
                    result[property] = value;
                }
            }
            else if (object_1.default(value)) {
                const results = Filter(value, validation, filter);
                if (!empty_1.default(results)) {
                    result[property] = results;
                }
            }
        }
        return result;
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map