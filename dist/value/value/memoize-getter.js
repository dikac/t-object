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
     * @param configurable {@default true}
     */
    function MemoizeGetter(object, property, value, configurable = true) {
        return Object.defineProperty(object, property, {
            get() {
                return value;
            },
            configurable: configurable
        })[property];
    }
    exports.default = MemoizeGetter;
});
//# sourceMappingURL=memoize-getter.js.map