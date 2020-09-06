(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/object", "@dikac/t-function/assert/callback", "./throwable/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../boolean/object");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const string_1 = require("./throwable/string");
    function Object_(value, error = string_1.default) {
        callback_1.default(value, object_1.default, error);
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map