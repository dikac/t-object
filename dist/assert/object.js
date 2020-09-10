(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/object", "@dikac/t-function/assert/callback", "./throwable/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../boolean/object");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const object_2 = require("./throwable/object");
    function Object_(value, error = object_2.default) {
        callback_1.default(value, object_1.default, error);
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map