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
    function Merge(destination, source) {
        if (typeof source.get === "function") {
            destination.get = source.get;
        }
        if (typeof source.set === "function") {
            destination.set = source.set;
        }
        return destination;
    }
    exports.default = Merge;
});
//# sourceMappingURL=merge.js.map