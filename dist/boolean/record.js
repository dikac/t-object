(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    function Record(record, validation) {
        if (!type_1.default(record)) {
            return false;
        }
        for (let property in record) {
            const value = record[property];
            if (validation(value)) {
                continue;
            }
            if (type_1.default(value)) {
                if (Record(value, validation)) {
                    continue;
                }
            }
            return false;
        }
        return true;
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map