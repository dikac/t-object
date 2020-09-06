(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty", "@dikac/t-function/assert/callback", "./throwable/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../boolean/not-empty");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const not_empty_2 = require("./throwable/not-empty");
    function NotEmpty(value, error = not_empty_2.default) {
        callback_1.default(value, not_empty_1.default, error);
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map