(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./memoize-property"], factory);
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
    const memoize_property_1 = require("./memoize-property");
    function MemoizeGetter(object, property, value, configurable = true) {
        return memoize_property_1.default(object, property, value, false, configurable);
    }
    exports.default = MemoizeGetter;
});
//# sourceMappingURL=memoize-getter.js.map