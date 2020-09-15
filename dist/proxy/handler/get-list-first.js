(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/exists", "../../property/boolean/readable", "@dikac/t-function/boolean/function", "./multi-handlers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const exists_1 = require("../../property/boolean/exists");
    const readable_1 = require("../../property/boolean/readable");
    const function_1 = require("@dikac/t-function/boolean/function");
    const multi_handlers_1 = require("./multi-handlers");
    /**
     * construct or bind {@link ProxyHandler} for property getter from
     * list of partial compatible object, making it fully compatible
     *
     * value is from the fist compatible object list
     */
    class GetListFirst extends multi_handlers_1.default {
        constructor() {
            super(...arguments);
            /**
             * mapping for getter handler
             */
            this.handler = {};
        }
        /**
         * reset cached mapping
         */
        reset() {
            this.handler = {};
        }
        /**
         * set handler to other {@link ProxyHandler<Argument>}
         * @param handler
         */
        bindTo(handler) {
            handler.get = (target, property, receiver) => this.get(target, property, receiver);
            return handler;
        }
        /**
         * get the first compatible {@link handlers} property
         *
         * @param target
         * @param property
         * @param receiver
         */
        get(target, property, receiver) {
            if (exists_1.default(this.handler, property)) {
                return this.handler[property][property];
            }
            for (const handler of this.getHandler(target)) {
                if (readable_1.default(handler, property)) {
                    if (function_1.default(handler[property])) {
                        this.handler[property] = {
                            [property]: (...argument) => handler[property](...argument)
                        };
                    }
                    else {
                        this.handler[property] = handler;
                    }
                    return handler[property];
                }
            }
            this.handler[property] = { [property]: undefined };
            return undefined;
        }
    }
    exports.default = GetListFirst;
});
//# sourceMappingURL=get-list-first.js.map