(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./object", "../validatable/string/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("./object");
    const object_2 = require("../validatable/string/object");
    function NotEmptyStandard() {
        return new object_1.default(object_2.default);
    }
    exports.default = NotEmptyStandard;
});
//# sourceMappingURL=object-standard.js.map