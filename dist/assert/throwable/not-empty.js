(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../string/not-empty");
    function NotEmpty(string, subject = 'object') {
        return new Error(not_empty_1.default(false, string, subject));
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map