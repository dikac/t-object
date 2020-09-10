(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/object", "../assert/throwable/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../assert/object");
    const object_2 = require("../assert/throwable/object");
    function Object_(value, error = object_2.default) {
        object_1.default(value, error);
        return value;
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map