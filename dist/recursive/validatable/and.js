(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const and_1 = require("../../validatable/recursive/boolean/and");
    class And {
        constructor(validatable) {
            this.validatable = validatable;
        }
        get valid() {
            return and_1.default(this.validatable);
        }
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map