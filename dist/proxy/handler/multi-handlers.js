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
    class MultiHandlers {
        constructor(handlers, withTarget = true) {
            this.handlers = handlers;
            this.withTarget = withTarget;
        }
        getHandler(target) {
            if (this.withTarget) {
                return [target, ...this.handlers];
            }
            else {
                return this.handlers;
            }
        }
    }
    exports.default = MultiHandlers;
});
//# sourceMappingURL=multi-handlers.js.map