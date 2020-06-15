(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "is-plain-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const isPlainObject = require("is-plain-object");
    /**
     * Check if plain object ({})
     */
    function Plain(value) {
        return isPlainObject(value);
    }
    exports.default = Plain;
});
//# sourceMappingURL=plain.js.map