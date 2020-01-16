(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/descriptor-getter", "./merge-descriptor-getter-setter", "./boolean/descriptor-setter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const descriptor_getter_1 = require("./boolean/descriptor-getter");
    const merge_descriptor_getter_setter_1 = require("./merge-descriptor-getter-setter");
    const descriptor_setter_1 = require("./boolean/descriptor-setter");
    function Mixin(...objects) {
        // assign value
        let target = Object.assign({}, ...objects);
        // populate descriptor
        let descriptors = new Map();
        for (let object of objects) {
            let prototype = Object.getPrototypeOf(object);
            for (let property of [...Object.getOwnPropertyNames(prototype), ...Object.getOwnPropertySymbols(prototype)]) {
                if (property === 'constructor') {
                    continue;
                }
                let descriptor = Object.getOwnPropertyDescriptor(prototype, property);
                if (!descriptor) {
                    continue;
                }
                if ((descriptor_getter_1.default(descriptor) || descriptor_setter_1.default(descriptor)) &&
                    (descriptor_getter_1.default(descriptors.get(property) || {}) || descriptor_setter_1.default(descriptors.get(property) || {}))) {
                    descriptors.set(property, merge_descriptor_getter_setter_1.default(descriptors.get(property) || {}, descriptor));
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
    exports.default = Mixin;
});
//# sourceMappingURL=mixin.js.map