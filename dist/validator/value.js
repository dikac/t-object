(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/record/value", "./value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./return/record/value");
    const value_callback_1 = require("./value-callback");
    function Value(validators, validation, message) {
        return new value_callback_1.default(validators, value_1.default, validation, message);
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map