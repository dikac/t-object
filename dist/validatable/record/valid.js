(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/boolean/validatable", "../../record/filter", "@dikac/t-validatable/boolean/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    const filter_1 = require("../../record/filter");
    // import Partial from "../../record/partial";
    const value_1 = require("@dikac/t-validatable/boolean/value");
    /**
     * filter all valid {@link Validatable} while retain its original structure
     */
    function Valid(record) {
        let validation = (v) => validatable_1.default(v) && value_1.default(v); //.valid;
        return filter_1.default(record, validation);
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map