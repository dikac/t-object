(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../validatable/empty");
    class Empty {
        constructor(empty, message) {
            this.empty = empty;
            this.message = message;
        }
        validate(value) {
            return new empty_1.default(value, this.empty, this.message);
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map