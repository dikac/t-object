(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../assert/string/value-validation", "../../../string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_validation_1 = require("../../../assert/string/value-validation");
    const name_1 = require("../../../string/name");
    function PropertyValue(data) {
        let message = value_validation_1.default(false, data.property, data.value, name_1.default(data.validation));
        return new Error(message);
    }
    exports.default = PropertyValue;
});
//# sourceMappingURL=value-validation.js.map