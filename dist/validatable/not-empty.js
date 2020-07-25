(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../boolean/not-empty");
    class NotEmpty {
        constructor(value, _message) {
            this.value = value;
            this._message = _message;
            this.valid = not_empty_1.default(value);
        }
        get message() {
            return this._message(this);
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map