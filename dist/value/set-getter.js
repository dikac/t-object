(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./set-property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_property_1 = require("./set-property");
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
    function SetGetter(object, property, value, configurable = true) {
        return set_property_1.default(object, property, value, false, configurable);
    }
    exports.default = SetGetter;
});
//# sourceMappingURL=set-getter.js.map