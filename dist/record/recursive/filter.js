(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/empty", "../../boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../../boolean/empty");
    const type_1 = require("../../boolean/type");
    /**
     * recursively filter {@param record} value, returning new object with all value allowed
     * by {@param filter}
     */
    function Filter(record, filter) {
        let result = {};
        for (let property in record) {
            const value = record[property];
            if (filter(value)) {
                result[property] = value;
            }
            else if (type_1.default(value)) {
                const results = Filter(value, filter /*, validation*/);
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