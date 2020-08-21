(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property", "../../property/boolean/writable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    const writable_1 = require("../../property/boolean/writable");
    class SetListAll {
        constructor(handlers) {
            this.handlers = handlers;
            this.settable = {};
        }
        reset() {
            this.settable = {};
        }
        handle() {
            return Object.assign({}, this.settable);
        }
        bindTo(handler) {
            handler.set = (target, property, value, receiver) => this.set(target, property, value, receiver);
            return handler;
        }
        set(target, property, value, receiver) {
            if (property_1.default(this.settable, property)) {
                for (let object of this.settable[property]) {
                    object[property] = value;
                }
                return this.settable[property].length;
            }
            this.settable[property] = [];
            for (let handler of [target, ...this.handlers]) {
                if (writable_1.default(handler, property)) {
                    this.settable[property].push(handler);
                }
            }
            return this.set(target, property, value, receiver);
        }
    }
    exports.default = SetListAll;
});
//# sourceMappingURL=set-list-all.js.map