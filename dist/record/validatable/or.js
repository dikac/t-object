(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/record/boolean/or", "./validatables"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("../../validatable/record/boolean/or");
    const validatables_1 = require("./validatables");
    function Or(validatable) {
        return new validatables_1.default(validatable, or_1.default);
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map