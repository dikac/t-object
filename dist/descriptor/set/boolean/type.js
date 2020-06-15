(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/method", "../../../boolean/type", "@dikac/t-boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const method_1 = require("../../../boolean/method");
    const type_1 = require("../../../boolean/type");
    const type_2 = require("@dikac/t-boolean/type");
    function Type(value) {
        if (!type_1.default(value)) {
            return false;
        }
        if (!method_1.default(value, 'set')) {
            return false;
        }
        if (!type_2.default(value.enumerable)) {
            return false;
        }
        if (value.configurable !== true) {
            return false;
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map