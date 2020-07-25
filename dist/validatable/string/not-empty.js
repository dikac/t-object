(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../../boolean/string/not-empty");
    function NotEmpty(object) {
        return not_empty_1.default(object.valid, object.value);
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map