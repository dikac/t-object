(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/method", "@dikac/t-boolean/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const method_1 = require("../../boolean/method");
    const boolean_1 = require("@dikac/t-boolean/boolean");
    function Setter(value) {
        if (!method_1.default(value, 'set')) {
            return false;
        }
        if (!boolean_1.default(value.enumerable)) {
            return false;
        }
        if (value.configurable !== true) {
            return false;
        }
        return true;
    }
    exports.default = Setter;
});
//# sourceMappingURL=setter.js.map