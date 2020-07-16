(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/empty", "../valid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("@dikac/t-object/boolean/empty");
    const valid_1 = require("../valid");
    function And(object) {
        return !empty_1.default(valid_1.default(object));
    }
    exports.default = And;
});
//# sourceMappingURL=or.js.map