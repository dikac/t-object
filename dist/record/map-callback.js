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
    function MapCallback(object, replace) {
        let result = {};
        for (const property in object) {
            const value = object[property];
            result[property] = replace(value, property);
        }
        return result;
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map