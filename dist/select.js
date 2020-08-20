(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pick"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pick_1 = require("./pick");
    /**
     * @deprecated use {@link Pick} instead
     */
    function Select(object, keys) {
        return pick_1.default(object, ...keys);
    }
    exports.default = Select;
});
//# sourceMappingURL=select.js.map