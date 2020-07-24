(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/record/boolean/and", "./validatables"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const and_1 = require("../../validatable/record/boolean/and");
    const validatables_1 = require("./validatables");
    function And(validatable) {
        return new validatables_1.default(validatable, and_1.default);
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map