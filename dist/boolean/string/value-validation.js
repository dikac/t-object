(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./value");
    function ValueValidation(valid, property, type, validation) {
        let message = value_1.default(valid, property, type);
        return `${message}, against "${validation}"`;
    }
    exports.default = ValueValidation;
});
//# sourceMappingURL=value-validation.js.map