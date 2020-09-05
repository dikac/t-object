(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/method"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const method_1 = require("../../boolean/method");
    function Getter(value) {
        return method_1.default(value, 'get');
    }
    exports.default = Getter;
});
//# sourceMappingURL=getter.js.map