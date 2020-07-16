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
    /**
     * Calls {@param replace} on each property value from {@param object} recursively
     *
     * {@template Replace} type of replace result
     */
    function Map(object, replace) {
        let result = {};
        for (let property in object) {
            const value = object[property];
            result[property] = replace(value);
        }
        return result;
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map