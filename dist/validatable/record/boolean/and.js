(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/empty", "../invalid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../../../boolean/empty");
    const invalid_1 = require("../invalid");
    function And(object) {
        return empty_1.default(invalid_1.default(object));
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map