(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./omit-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const omit_null_1 = require("./omit-null");
    /**
     * @deprecated use original {@link OmitNull}
     */
    exports.default = omit_null_1.default;
});
//# sourceMappingURL=remove-null.js.map