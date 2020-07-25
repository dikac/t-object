(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("./empty");
    /**
     * check if object is not empty (contain zero property & method)
     */
    function NotEmpty(value) {
        return !empty_1.default(value);
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map