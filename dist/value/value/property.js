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
    class Property {
        constructor(object, key) {
            this.object = object;
            this.key = key;
        }
        get value() {
            return this.object[this.key];
        }
        set value(value) {
            this.object[this.key] = value;
        }
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map