(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Extract {
        constructor(value, keys) {
            this.keys = keys;
            this.return = {};
            this.value = value;
            for (let key of this.keys) {
                this.return[key] = value[key];
                delete value[key];
            }
        }
    }
    exports.default = Extract;
});
//# sourceMappingURL=extract.js.map