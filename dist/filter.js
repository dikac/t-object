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
     * filter {@param object} value, returning new object with all value allowed
     * by {@param validation} with the same property
     */
    function Filter(object, validation) {
        let result = {};
        for (let property in object) {
            const value = object[property];
            if (validation(value)) {
                result[property] = value;
            }
        }
        return result;
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map