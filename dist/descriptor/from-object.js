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
    function FromObject(object, property) {
        // direct
        {
            let descriptor = Object.getOwnPropertyDescriptor(object, property);
            if (descriptor) {
                return descriptor;
            }
        }
        // prototype
        {
            let prototype = Object.getPrototypeOf(object);
            let descriptor = Object.getOwnPropertyDescriptor(prototype, property);
            if (descriptor) {
                return descriptor;
            }
        }
    }
    exports.default = FromObject;
});
//# sourceMappingURL=from-object.js.map