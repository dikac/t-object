(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const multi_handlers_1 = require("./multi-handlers");
    class DefinePropertyListAll extends multi_handlers_1.default {
        bindTo(handler) {
            handler.defineProperty = (target, property, attributes) => this.defineProperty(target, property, attributes);
            return handler;
        }
        defineProperty(target, property, attributes) {
            let result = true;
            for (let object of this.getHandler(target)) {
                result = Reflect.defineProperty(object, property, attributes) && result;
            }
            return result;
        }
    }
    exports.default = DefinePropertyListAll;
});
//# sourceMappingURL=define-property-list-all.js.map