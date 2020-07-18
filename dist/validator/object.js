(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../validatable/object");
    class Object_ {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return object_1.default(value, this.message);
        }
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map