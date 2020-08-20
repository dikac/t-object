(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./omit-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const omit_undefined_1 = require("./omit-undefined");
    /**
     * @deprecated use original {@link OmitUndefined}
     */
    exports.default = omit_undefined_1.default;
});
//# sourceMappingURL=remove-undefined.js.map