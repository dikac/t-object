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
     * call an record of function or object, by using key from {@param argument} and it's value
     * as first argument
     *
     * @param object
     * @param argument
     */
    function MethodSingle(object, argument) {
        let result = {};
        for (const [property, value] of Object.entries(argument)) {
            result[property] = object[property](value);
        }
        return result;
    }
    exports.default = MethodSingle;
});
//# sourceMappingURL=method-single.js.map