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
    class Property {
        constructor(record, validation) {
            this.record = record;
            this.validation = validation;
            this.keys = [];
        }
        *[Symbol.iterator]() {
            // @ts-ignore
            for (let [properties, value] of new pair_guard_1.default(this.record, this.validation)) {
                yield properties;
            }
        }
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map