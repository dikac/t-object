(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/property-value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_value_1 = require("../../boolean/string/property-value");
    function PropertyValue(property, type) {
        return new Error(property_value_1.default(false, property, type));
    }
    exports.default = PropertyValue;
});
//# sourceMappingURL=property-value.js.map