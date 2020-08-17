(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property", "../../property/boolean/readable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    const readable_1 = require("../../property/boolean/readable");
    /**
     * construct or bind {@link ProxyHandler} for property getter from
     * list of partial compatible object, making it fully compatible
     *
     * value is from the fist compatible object list
     */
    class GetterList {
        /**
         * @param handlers
         * list of object witch partially compatible
         */
        constructor(handlers) {
            this.handlers = handlers;
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
         * set handler to other {@link ProxyHandler<Target>}
         * @param handler
         */
        bind(handler) {
            handler.get = (target, property, receiver) => this.get(target, property, receiver);
        }
        /**
         * get the first compatible {@link handlers} property
         *
         * @param target
         * @param property
         * @param receiver
         */
        get(target, property, receiver) {
            if (property_1.default(this.handler, property)) {
                return this.handler[property][property];
            }
            for (let handler of [target, ...this.handlers]) {
                if (readable_1.default(handler, property)) {
                    this.handler[property] = handler;
                    return handler[property];
                }
            }
            this.handler[property] = { [property]: undefined };
            return undefined;
        }
    }
    exports.default = GetterList;
});
//# sourceMappingURL=getter-list.js.map