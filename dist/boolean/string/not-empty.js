(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("../../string/name");
    function NotEmpty(valid, value) {
        let string = name_1.default(value);
        if (valid) {
            return `value "${string}" is not empty object`;
        }
        else {
            return `value "${string}" must not empty object`;
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map