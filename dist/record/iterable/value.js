(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pair-guard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pair_guard_1 = require("./pair-guard");
    class Value {
        constructor(record, validation) {
            this.record = record;
            this.validation = validation;
        }
        *[Symbol.iterator]() {
            // @ts-ignore
            for (let [properties, value] of new pair_guard_1.default(this.record, this.validation)) {
                yield value;
            }
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map