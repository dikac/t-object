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
     * implementation of {@link globalThis.Omit}
     *
     * get new object from {@param object} except key in {@param keys}
     *
     * @param object
     * source
     *
     * @param keys
     * key for exclusion
     */
    function Omit(object, ...keys) {
        let result = {};
        for (let [property, value] of Object.entries(object)) {
            if (keys.includes(property)) {
                continue;
            }
            result[property] = value;
        }
        return result;
    }
    exports.default = Omit;
});
//# sourceMappingURL=omit.js.map