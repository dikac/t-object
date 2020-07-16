(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/object", "../../key/boolean/key"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../../boolean/object");
    const key_1 = require("../../key/boolean/key");
    /**
     * Check if {@param record} is {@link RecordInterface} with {@template Value} value
     *
     * {@param validation} is use to validate for {@template Value}
     * optionally {@param prop} use to validate object property
     */
    function Record(record, validation, prop = key_1.default) {
        if (!object_1.default(record)) {
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
            if (object_1.default(value)) {
                if (Record(value, validation, prop)) {
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