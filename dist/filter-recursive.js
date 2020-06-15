(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("./boolean/type");
    function FilterRecursive(record, validation) {
        let result = {};
        for (let property in record) {
            const value = record[property];
            if (validation(value)) {
                // @ts-ignore
                result[property] = value;
            }
            else if (type_1.default(value)) {
                // @ts-ignore
                result[property] = FilterRecursive(value, validation);
            }
        }
        return result;
    }
    exports.default = FilterRecursive;
});
//# sourceMappingURL=filter-recursive.js.map