(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property", "../../property/boolean/writable", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    const writable_1 = require("../../property/boolean/writable");
    const multi_handlers_1 = require("./multi-handlers");
    class SetListAll extends multi_handlers_1.default {
        constructor() {
            super(...arguments);
            this.settable = {};
        }
        reset() {
            this.settable = {};
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
            for (let handler of this.getHandler(target)) {
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