(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./set-property-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_property_callback_1 = require("./set-property-callback");
    function SetGetterCallback(object, property, factory, configurable = true) {
        return set_property_callback_1.default(object, property, factory, false, configurable);
    }
    exports.default = SetGetterCallback;
});
//# sourceMappingURL=set-getter-callback.js.map