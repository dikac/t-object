(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./methods", "./type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const methods_1 = require("./methods");
    const type_1 = require("./type");
    function DescriptorGetter(value) {
        if (!type_1.default(value)) {
            return false;
        }
        if (!methods_1.default(value, 'get')) {
            return false;
        }
        if (value.enumerable !== false) {
            return false;
        }
        if (value.configurable !== true) {
            return false;
        }
        return true;
    }
    exports.default = DescriptorGetter;
});
//# sourceMappingURL=descriptor-getter.js.map