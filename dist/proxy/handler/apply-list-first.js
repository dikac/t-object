(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/boolean/function", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const function_1 = require("@dikac/t-function/boolean/function");
    const multi_handlers_1 = require("./multi-handlers");
    class ApplyListFirst extends multi_handlers_1.default {
        reset() {
            this.callback = undefined;
        }
        bindTo(handler) {
            handler.apply = (target, thisArg, argArray) => this.apply(target, thisArg, argArray);
            return handler;
        }
        apply(target, thisArg, argArray) {
            if (this.callback !== undefined) {
                if (this.callback) {
                    return this.callback(...argArray);
                }
                else {
                    throw new Error('Callable is not found');
                }
            }
            this.callback = null;
            for (let handler of this.getHandler(target)) {
                if (function_1.default(handler)) {
                    this.callback = (...args) => handler(...args);
                    break;
                }
            }
            return this.apply(target, thisArg, argArray);
        }
    }
    exports.default = ApplyListFirst;
});
//# sourceMappingURL=apply-list-first.js.map