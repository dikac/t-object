(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../builder/builder"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const builder_1 = require("../builder/builder");
    /**
     * @deprecated
     * use original instead
     */
    exports.default = builder_1.default;
});
//# sourceMappingURL=container.js.map