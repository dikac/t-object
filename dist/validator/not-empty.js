(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../validatable/not-empty");
    class NotEmpty {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return new not_empty_1.default(value, this.message);
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map