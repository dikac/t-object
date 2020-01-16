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
    function MergeDescriptorGetterSetter(descriptor1, descriptor2) {
        if (typeof descriptor2.get === "function") {
            descriptor1.get = descriptor2.get;
        }
        if (typeof descriptor2.set === "function") {
            descriptor1.set = descriptor2.set;
        }
        return descriptor1;
    }
    exports.default = MergeDescriptorGetterSetter;
});
//# sourceMappingURL=merge-descriptor-getter-setter.js.map