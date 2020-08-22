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
    class PreventExtensibleListAll extends multi_handlers_1.default {
        reset() {
            this.extensible = undefined;
        }
        bindTo(handler) {
            handler.preventExtensions = (target) => this.preventExtensions(target);
            return handler;
        }
        preventExtensions(target) {
            let result = true;
            for (let object of this.getHandler(target)) {
                result = Reflect.preventExtensions(object) && result;
            }
            return result;
        }
    }
    exports.default = PreventExtensibleListAll;
});
//# sourceMappingURL=prevent-extensible-list-all.js.map