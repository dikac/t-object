(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./empty", "../validatable/string/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("./empty");
    const empty_2 = require("../validatable/string/empty");
    function EmptyStandard() {
        return new empty_1.default(empty_2.default);
    }
    exports.default = EmptyStandard;
});
//# sourceMappingURL=empty-standard.js.map