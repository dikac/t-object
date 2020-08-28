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
    /**
     * memoize {@template ObjectT} value from keys list
     */
    class GetMemoizeKeys {
        /**
         * @param keys
         * keys to be memoized
         */
        constructor(keys) {
            this.keys = keys;
            /**
             * mapping for memoized result
             */
            this.memoize = new Map();
        }
        /**
         * reset memoize key
         *
         * @param key
         */
        reset(key) {
            this.memoize.delete(key);
        }
        /**
         * reset all memoize
         */
        resets() {
            this.memoize.clear();
        }
        /**
         * set handler to other {@link ProxyHandler<Argument>}
         * @param handler
         */
        bindTo(handler) {
            handler.get = (target, property, receiver) => this.get(target, property, receiver);
            return handler;
        }
        get(target, property, receiver) {
            if (this.keys.includes(property)) {
                if (this.memoize.has(property)) {
                    return this.memoize.get(property);
                }
                const value = target[property];
                this.memoize.set(property, value);
                return value;
            }
            return target[property];
        }
    }
    exports.default = GetMemoizeKeys;
});
//# sourceMappingURL=get-memoize-keys.js.map