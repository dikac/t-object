(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./builder"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const builder_1 = require("./builder");
    /**
     * create simple {@see Builder} without context & option
     */
    function Simple() {
        return new builder_1.default(undefined);
    }
    exports.default = Simple;
});
//# sourceMappingURL=simple.js.map