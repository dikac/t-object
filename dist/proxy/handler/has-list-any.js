(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/exists", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const exists_1 = require("../../property/boolean/exists");
    const multi_handlers_1 = require("./multi-handlers");
    class HasListAny extends multi_handlers_1.default {
        constructor() {
            super(...arguments);
            this.map = {};
        }
        reset() {
            this.handler = {};
        }
        bindTo(handler) {
            handler.has = (target, property) => this.has(target, property);
            return handler;
        }
        has(target, property) {
            if (exists_1.default(this.handler, property)) {
                return this.handler[property];
            }
            this.handler[property] = false;
            for (const handler of this.getHandler(target)) {
                if (exists_1.default(handler, property)) {
                    this.handler[property] = true;
                    break;
                }
            }
            return this.handler[property];
        }
    }
    exports.default = HasListAny;
});
//# sourceMappingURL=has-list-any.js.map
