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
    class IsExtensibleListAll extends multi_handlers_1.default {
        reset() {
            this.extensible = undefined;
        }
        bindTo(handler) {
            handler.isExtensible = (target) => this.isExtensible(target);
            return handler;
        }
        isExtensible(target) {
            if (this.extensible !== undefined) {
                return this.extensible;
            }
            this.extensible = true;
            for (let object of this.getHandler(target)) {
                this.extensible = Object.isExtensible(object) && this.extensible;
            }
            return this.extensible;
        }
    }
    exports.default = IsExtensibleListAll;
});
//# sourceMappingURL=is-extensible-list-all.js.map