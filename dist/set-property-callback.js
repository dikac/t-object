(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value/value/set-property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_property_1 = require("./value/value/set-property");
    function SetPropertyCallback(object, property, factory, writable = true, configurable = true) {
        return Object.defineProperty(object, property, {
            configurable: true,
            get() {
                return set_property_1.default(object, property, factory(), writable, configurable);
            }
        });
    }
    exports.default = SetPropertyCallback;
});
//# sourceMappingURL=set-property-callback.js.map