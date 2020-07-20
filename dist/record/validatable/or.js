(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/record/boolean/or"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("../../validatable/record/boolean/or");
    class Or {
        constructor(validatable) {
            this.validatable = validatable;
        }
        get valid() {
            return or_1.default(this.validatable);
        }
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map