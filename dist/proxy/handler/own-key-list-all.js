(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/unique", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const unique_1 = require("@dikac/t-array/unique");
    const multi_handlers_1 = require("./multi-handlers");
    class OwnKeyListAll extends multi_handlers_1.default {
        reset() {
            this.keys = undefined;
        }
        bindTo(handler) {
            handler.ownKeys = (target) => this.ownKeys(target);
            return handler;
        }
        ownKeys(target) {
            if (this.keys) {
                return this.keys;
            }
            this.keys = [];
            for (let object of this.getHandler(target)) {
                this.keys.push(...Object.getOwnPropertySymbols(object));
                this.keys.push(...Object.getOwnPropertyNames(object));
            }
            this.keys = unique_1.default(this.keys);
            return this.keys;
        }
    }
    exports.default = OwnKeyListAll;
});
//# sourceMappingURL=own-key-list-all.js.map