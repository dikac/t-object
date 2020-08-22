(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/object", "../../descriptor/boolean/getter", "../../descriptor/boolean/setter", "../../descriptor/merge-getter-setter", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("../../boolean/object");
    const getter_1 = require("../../descriptor/boolean/getter");
    const setter_1 = require("../../descriptor/boolean/setter");
    const merge_getter_setter_1 = require("../../descriptor/merge-getter-setter");
    const multi_handlers_1 = require("./multi-handlers");
    class PrototypeOfListMerge extends multi_handlers_1.default {
        constructor() {
            super(...arguments);
            this.object = new class {
            };
            this.generated = false;
        }
        reset() {
            this.generated = false;
            this.object = new class {
            };
        }
        bindTo(handler) {
            handler.getPrototypeOf = (target) => this.getPrototypeOf(target);
            return handler;
        }
        setPrototypeOf(target, value) {
            return Reflect.setPrototypeOf(Object.getPrototypeOf(this.object), value);
        }
        getPrototypeOf(target) {
            if (this.generated) {
                return Object.getPrototypeOf(this.object);
            }
            this.generated = true;
            const buffers = new Map();
            for (const handler of this.getHandler(target)) {
                const prototype = Object.getPrototypeOf(handler);
                const symbols = Object.getOwnPropertySymbols(prototype);
                const properties = Object.getOwnPropertyNames(prototype);
                for (const key of [...symbols, ...properties]) {
                    let descriptor = Object.getOwnPropertyDescriptor(prototype, key);
                    if (!descriptor) {
                        continue;
                    }
                    // merge getter & setter
                    if (buffers.has(key) && object_1.default(buffers.get(key))) {
                        if ((getter_1.default(buffers.get(key)) && setter_1.default(descriptor)) ||
                            (setter_1.default(buffers.get(key)) && getter_1.default(descriptor))) {
                            descriptor = merge_getter_setter_1.default(buffers.get(key), descriptor);
                        }
                    }
                    buffers.set(key, descriptor);
                }
            }
            const prototype = Object.getPrototypeOf(this.object);
            for (const [property, descriptor] of buffers) {
                if (object_1.default(descriptor)) {
                    Object.defineProperty(prototype, property, descriptor);
                }
            }
            return this.getPrototypeOf(target);
        }
    }
    exports.default = PrototypeOfListMerge;
});
//# sourceMappingURL=prototype-of-list-merge.js.map