(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./container"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const container_1 = require("./container");
    /**
     * create simple {@see Container} without context & option
     */
    function Simple() {
        return new container_1.default(undefined);
    }
    exports.default = Simple;
});
//# sourceMappingURL=simple.js.map