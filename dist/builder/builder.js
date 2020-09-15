(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/handler-already-exist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const handler_already_exist_1 = require("./string/handler-already-exist");
    /**
     * simple object container
     */
    class Builder {
        constructor(context) {
            this.context = context;
            this.container = new Map();
        }
        clear() {
            this.container.clear();
        }
        set(property, handler) {
            if (this.container.has(property)) {
                throw new Error(handler_already_exist_1.default(property));
            }
            this.container.set(property, handler);
        }
        get(property) {
            return this.container.get(property);
        }
        delete(property) {
            return this.container.delete(property);
        }
        has(property) {
            return this.container.has(property);
        }
        [Symbol.iterator]() {
            return this.container[Symbol.iterator]();
        }
        build(target = {}, option) {
            for (let [property, value] of this) {
                value(target, property, this.context, option);
            }
            return target;
        }
    }
    exports.default = Builder;
});
//# sourceMappingURL=builder.js.map