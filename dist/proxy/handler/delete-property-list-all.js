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
    class DeletePropertyListAll {
        constructor(handlers) {
            this.handlers = handlers;
        }
        bindTo(handler) {
            handler.deleteProperty = (target, property) => this.deleteProperty(target, property);
            return handler;
        }
        deleteProperty(target, property) {
            let deleted = false;
            for (let handler of [target, ...this.handlers]) {
                deleted = (delete handler[property]) || deleted;
            }
            return deleted;
        }
    }
    exports.default = DeletePropertyListAll;
});
//# sourceMappingURL=delete-property-list-all.js.map