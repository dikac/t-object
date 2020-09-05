(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./memoize-property-bind"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_property_bind_1 = require("./memoize-property-bind");
    function MemoizeGetterBind(object, property, factory, configurable = true) {
        return memoize_property_bind_1.default(object, property, factory, false, configurable);
    }
    exports.default = MemoizeGetterBind;
});
//# sourceMappingURL=memoize-getter-bind.js.map