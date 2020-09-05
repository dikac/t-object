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
    const memoize_property_1 = require("./memoize-property");
    function MemoizePropertyBind(object, property, factory, writable = true, configurable = true) {
        return Object.defineProperty(object, property, {
            configurable: true,
            get() {
                return memoize_property_1.default(object, property, factory(), writable, configurable);
            }
        });
    }
    exports.default = MemoizePropertyBind;
});
//# sourceMappingURL=memoize-property-bind.js.map