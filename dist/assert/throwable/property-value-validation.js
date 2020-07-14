(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/property-value-validation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_value_validation_1 = require("../../boolean/string/property-value-validation");
    function PropertyValueValidation(property, type, validation) {
        return new Error(property_value_validation_1.default(false, property, type, validation));
    }
    exports.default = PropertyValueValidation;
});
//# sourceMappingURL=property-value-validation.js.map