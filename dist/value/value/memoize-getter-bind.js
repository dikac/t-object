(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./memoize-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_getter_1 = require("./memoize-getter");
    function MemoizeGetterBind(object, property, factory) {
        return Object.defineProperty(object, property, {
            configurable: true,
            get() {
                return memoize_getter_1.default(object, property, factory());
            }
        });
    }
    exports.default = MemoizeGetterBind;
});
//# sourceMappingURL=memoize-getter-bind.js.map