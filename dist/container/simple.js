(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../builder/simple"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const simple_1 = require("../builder/simple");
    /**
     * @deprecated
     * use original instead
     */
    exports.default = simple_1.default;
});
//# sourceMappingURL=simple.js.map