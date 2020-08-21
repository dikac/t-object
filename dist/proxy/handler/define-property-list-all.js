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
    class DefinePropertyListAll {
        constructor(handlers) {
            this.handlers = handlers;
        }
        bindTo(handler) {
            handler.defineProperty = (target, property, attributes) => this.defineProperty(target, property, attributes);
            return handler;
        }
        defineProperty(target, property, attributes) {
            let result = true;
            for (let object of [target, ...this.handlers]) {
                result = Reflect.defineProperty(object, property, attributes) && result;
            }
            return result;
        }
    }
    exports.default = DefinePropertyListAll;
});
//# sourceMappingURL=define-property-list-all.js.map