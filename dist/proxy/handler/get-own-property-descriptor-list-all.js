(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    class GetOwnPropertyDescriptorListAll {
        constructor(handlers) {
            this.handlers = handlers;
            this.descriptor = {};
        }
        reset() {
            this.descriptor = {};
        }
        bindTo(handler) {
            handler.getOwnPropertyDescriptor = (target, p) => this.getOwnPropertyDescriptor(target, p);
            return handler;
        }
        getOwnPropertyDescriptor(target, property) {
            if (property_1.default(this.descriptor, property)) {
                // @ts-ignore
                return this.descriptor[property];
            }
            let descriptors = [];
            for (const object of [target, ...this.handlers]) {
                const descriptor = Reflect.getOwnPropertyDescriptor(object, property);
                if (descriptor) {
                    descriptors.push(descriptor);
                }
            }
            if (descriptors.length === 0) {
                // @ts-ignore
                this.descriptor[property] = undefined;
            }
            else if (descriptors.length === 1) {
                // @ts-ignore
                this.descriptor[property] = descriptors[0];
            }
            else {
                const descriptor = descriptors.shift();
                for (let compare of descriptors) {
                    for (const prop of ['configurable', 'enumerable', /*'value',*/ 'writable', 'get', 'set']) {
                        if (descriptor[prop] !== compare[prop]) {
                            throw new Error(`descriptor.${prop} is not consistent between source`);
                        }
                    }
                }
                // @ts-ignore
                this.descriptor[property] = descriptor;
            }
            // @ts-ignore
            return this.descriptor[property];
        }
    }
    exports.default = GetOwnPropertyDescriptorListAll;
});
//# sourceMappingURL=get-own-property-descriptor-list-all.js.map