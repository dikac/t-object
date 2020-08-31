(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/value-validation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_validation_1 = require("../string/value-validation");
    function ValueValidation(property, type, validation) {
        return new Error(value_validation_1.default(false, property, type, validation));
    }
    exports.default = ValueValidation;
});
//# sourceMappingURL=value-validation.js.map