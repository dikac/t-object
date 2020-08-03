(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../validatable/record/invalid", "./map", "../../../remove-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const invalid_1 = require("../../../validatable/record/invalid");
    const map_1 = require("./map");
    const remove_undefined_1 = require("../../../remove-undefined");
    function Invalid(record) {
        return map_1.default(remove_undefined_1.default(invalid_1.default(record)));
    }
    exports.default = Invalid;
});
//# sourceMappingURL=invalid.js.map