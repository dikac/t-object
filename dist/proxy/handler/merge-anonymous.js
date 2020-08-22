(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    function MergeAnonymous(...handlers) {
        let result = {};
        const properties = [
            "getPrototypeOf", "setPrototypeOf", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "has",
            "get", "set", "deleteProperty", "defineProperty", "enumerate", "ownKeys", "apply", "construct",
        ];
        for (let handler of handlers) {
            for (let property of properties) {
                if (property_1.default(handler, property)) {
                    result[property] = (...argument) => handler[property](...argument);
                }
            }
        }
        return result;
    }
    exports.default = MergeAnonymous;
});
//# sourceMappingURL=merge-anonymous.js.map