(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../string/empty");
    function Empty(string, subject = 'object') {
        return new Error(empty_1.default(false, string, subject));
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map