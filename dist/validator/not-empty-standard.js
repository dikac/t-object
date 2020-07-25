(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./not-empty", "../validatable/string/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("./not-empty");
    const not_empty_2 = require("../validatable/string/not-empty");
    function NotEmptyStandard() {
        return new not_empty_1.default(not_empty_2.default);
    }
    exports.default = NotEmptyStandard;
});
//# sourceMappingURL=not-empty-standard.js.map