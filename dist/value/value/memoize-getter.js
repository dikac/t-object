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
     * set return from {@param factory} to getter for {@param object}
     * should be used inside getter callback
     *
     * @param object
     *
     * @param property
     * getter key
     *
     * @param factory
     */
    function MemoizeGetter(object, property, factory) {
        const value = factory();
        return Object.defineProperty(object, property, {
            get() {
                return value;
            },
            configurable: true
        })[property];
    }
    exports.default = MemoizeGetter;
});
//# sourceMappingURL=memoize-getter.js.map