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
    class PreventExtensibleListAll {
        constructor(handlers) {
            this.handlers = handlers;
        }
        reset() {
            this.extensible = undefined;
        }
        bindTo(handler) {
            handler.preventExtensions = (target) => this.preventExtensions(target);
            return handler;
        }
        preventExtensions(target) {
            let result = true;
            for (let object of [target, ...this.handlers]) {
                result = Reflect.preventExtensions(object) && result;
            }
            return result;
        }
    }
    exports.default = PreventExtensibleListAll;
});
//# sourceMappingURL=prevent-extensible-list-all.js.map