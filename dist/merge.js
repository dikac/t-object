(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./descriptor/boolean/getter", "./descriptor/boolean/setter", "./descriptor/merge-getter-setter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const getter_1 = require("./descriptor/boolean/getter");
    const setter_1 = require("./descriptor/boolean/setter");
    const merge_getter_setter_1 = require("./descriptor/merge-getter-setter");
    /**
     * @deprecated
     * Merge object property, symbol and method, the latter object will replace former
     */
    function Merge(...objects) {
        switch (objects.length) {
            case 0: return {};
            case 1: return objects.pop();
        }
        // assign value
        // @ts-ignore
        let target = Object.assign(...objects);
        // populate descriptor
        let descriptors = new Map();
        for (let object of objects) {
            let prototype = Object.getPrototypeOf(object);
            let properties = [
                // fetch dynamic object without prototype
                ...Object.getOwnPropertyNames(object),
                ...Object.getOwnPropertyNames(prototype),
                ...Object.getOwnPropertySymbols(prototype),
                // fetch dynamic object without prototype
                ...Object.getOwnPropertySymbols(object),
            ];
            for (let property of properties) {
                if (property === 'constructor') {
                    continue;
                }
                let descriptor = Object.getOwnPropertyDescriptor(prototype, property);
                if (!descriptor) {
                    descriptor = Object.getOwnPropertyDescriptor(object, property);
                    if (!descriptor) {
                        continue;
                    }
                }
                if ((getter_1.default(descriptor) || setter_1.default(descriptor)) &&
                    (getter_1.default(descriptors.get(property) || {}) || setter_1.default(descriptors.get(property) || {}))) {
                    descriptors.set(property, merge_getter_setter_1.default(descriptors.get(property) || {}, descriptor));
                }
                else {
                    descriptors.set(property, descriptor);
                }
            }
        }
        // assign descriptor
        for (let [property, descriptor] of descriptors) {
            Object.defineProperty(target, property, descriptor);
        }
        return target;
    }
    exports.default = Merge;
});
//# sourceMappingURL=merge.js.map