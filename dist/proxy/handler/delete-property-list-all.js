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
    class DeletePropertyListAll extends multi_handlers_1.default {
        bindTo(handler) {
            handler.deleteProperty = (target, property) => this.deleteProperty(target, property);
            return handler;
        }
        deleteProperty(target, property) {
            let deleted = false;
            for (let handler of this.getHandler(target)) {
                deleted = (delete handler[property]) || deleted;
            }
            return deleted;
        }
    }
    exports.default = DeletePropertyListAll;
});
//# sourceMappingURL=delete-property-list-all.js.map