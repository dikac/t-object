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
    function Empty(valid, value) {
        let string = name_1.default(value);
        if (valid) {
            return `value "${string}" is empty object`;
        }
        else {
            return `value "${string}" is not empty object`;
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map