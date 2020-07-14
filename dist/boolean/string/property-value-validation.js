(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./property-value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_value_1 = require("./property-value");
    function PropertyValueValidation(valid, property, type, validation) {
        let message = property_value_1.default(valid, property, type);
        return `${message}, against "${validation}"`;
    }
    exports.default = PropertyValueValidation;
});
//# sourceMappingURL=property-value-validation.js.map