(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../recursive/boolean/recursive", "@dikac/t-validatable/boolean/validatable", "../../../key/boolean/key"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const recursive_1 = require("../../../recursive/boolean/recursive");
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    const key_1 = require("../../../key/boolean/key");
    /**
     * Check if {@param record} is record of {@link Validatable}
     * {@param property} also can be provided to validate property
     */
    function Recursive(record, property = key_1.default) {
        return recursive_1.default(record, validatable_1.default, property);
    }
    exports.default = Recursive;
});
//# sourceMappingURL=recursive.js.map