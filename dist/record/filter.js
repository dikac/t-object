(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/empty", "../boolean/type", "../message/string/property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../boolean/empty");
    const type_1 = require("../boolean/type");
    const property_actual_1 = require("../message/string/property-actual");
    function Filter(record, filter, validation) {
        let result = {};
        for (let property in record) {
            const value = record[property];
            if (validation(value)) {
                if (filter(value)) {
                    result[property] = value;
                }
            }
            else if (type_1.default(value)) {
                const results = Filter(value, filter, validation);
                if (!empty_1.default(results)) {
                    result[property] = results;
                }
            }
            else {
                throw new Error(property_actual_1.default(property, 'valid against validation', result[property] + ''));
            }
        }
        return result;
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map