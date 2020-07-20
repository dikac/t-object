(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../value/boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const empty_1 = require("../value/boolean/empty");
    class Empty extends readonly_merge_1.default {
        constructor(number, empty, message) {
            let container = {
                empty: empty,
                value: number,
            };
            let msg = callback_1.default(container, empty_1.default, () => message(this));
            super(container, msg, msg);
            this.empty = empty;
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map