(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    class SetterList {
        constructor(handlers) {
            this.handlers = handlers;
            this.handler = {};
        }
        reset() {
            this.handler = {};
        }
        bindTo(handler) {
            handler.has = (target, property) => this.has(target, property);
            return handler;
        }
        has(target, property) {
            if (property_1.default(this.handler, property)) {
                return this.handler[property];
            }
            this.handler[property] = false;
            for (let handler of [target, ...this.handlers]) {
                if (property_1.default(handler, property)) {
                    this.handler[property] = true;
                    break;
                }
            }
            return this.handler[property];
        }
    }
    exports.default = SetterList;
});
//# sourceMappingURL=has-list-any.js.map