(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../record/filter", "@dikac/t-validatable/boolean/validatable", "@dikac/t-validatable/boolean/invalid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const filter_1 = require("../../record/filter");
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    const invalid_1 = require("@dikac/t-validatable/boolean/invalid");
    /**
     * filter all invalid {@link Validatable} while retain its original structure
     */
    function Invalid(record) {
        return filter_1.default(record, (v) => validatable_1.default(v) && invalid_1.default(v));
    }
    exports.default = Invalid;
});
//# sourceMappingURL=invalid.js.map