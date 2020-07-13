(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./descriptor/get/boolean/descriptor", "./descriptor/set/boolean/descriptor", "./descriptor/merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const descriptor_1 = require("./descriptor/get/boolean/descriptor");
    const descriptor_2 = require("./descriptor/set/boolean/descriptor");
    const merge_1 = require("./descriptor/merge");
    /**
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
                if ((descriptor_1.default(descriptor) || descriptor_2.default(descriptor)) &&
                    (descriptor_1.default(descriptors.get(property) || {}) || descriptor_2.default(descriptors.get(property) || {}))) {
                    descriptors.set(property, merge_1.default(descriptors.get(property) || {}, descriptor));
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