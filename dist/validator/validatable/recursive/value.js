(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value-partial"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_partial_1 = require("./value-partial");
    function Value(validators, value) {
        return value_partial_1.default(validators, value, false);
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map