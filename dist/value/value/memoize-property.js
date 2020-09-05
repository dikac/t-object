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
     * set {@param value} for getter value for {@param object}
     * should be used inside getter callback
     *
     * @param object
     *
     * @param property
     * getter key
     *
     * @param value
     * value tobe memoized
     *
     * @param writable
     *
     * @param configurable {@default true}
     */
    function MemoizeProperty(object, property, value, writable, configurable = true) {
        return Object.defineProperty(object, property, {
            value: value,
            writable: writable,
            configurable: configurable
        })[property];
    }
    exports.default = MemoizeProperty;
});
//# sourceMappingURL=memoize-property.js.map