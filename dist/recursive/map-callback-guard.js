(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_callback_1 = require("./map-callback");
    /**
     * Calls {@param replace} on each property value from {@param object} recursively
     *
     * {@template Replace} type of replace result
     *
     * {@param replace} is only called when {@param validation} result of value is true
     * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
     */
    function MapCallbackGuard(object, validation, replace) {
        return map_callback_1.default(object, validation, replace);
    }
    exports.default = MapCallbackGuard;
});
//# sourceMappingURL=map-callback-guard.js.map