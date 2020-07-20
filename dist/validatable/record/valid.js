(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/boolean/validatable", "../../record/filter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    const filter_1 = require("../../record/filter");
    /**
     * filter all valid {@link Validatable} while retain its original structure
     */
    function Valid(record) {
        return filter_1.default(record, (v) => validatable_1.default(v) && v.valid);
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map