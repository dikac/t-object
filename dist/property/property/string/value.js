(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/string/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../../boolean/string/value");
    function Value(data) {
        return value_1.default(data.valid, data.property, data.value);
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map