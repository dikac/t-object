(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../builder/string/handler-already-exist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const handler_already_exist_1 = require("../../builder/string/handler-already-exist");
    /**
     * @deprecated
     * use original instead
     */
    exports.default = handler_already_exist_1.default;
});
//# sourceMappingURL=handler-already-exist.js.map