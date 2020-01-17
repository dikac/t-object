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
    it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
    //
    // class Handler implements ProxyHandler<Array<object>> {
    //
    //     /**
    //      * A trap for the in operator.
    //      * @param target
    //      * @param p
    //      */
    //     has(target: Array<object>, p: string | number | symbol): boolean {
    //
    //         for(let object of target) {
    //
    //             if(p in object) {
    //
    //                 return true;
    //             }
    //         }
    //
    //         return false;
    //
    //     }
    //
    //     get(target: Array<object>, p: string | number | symbol, receiver: any): any {
    //
    //         for(let object of target) {
    //
    //             if(p in object) {
    //
    //                 if(Object.getOwnPropertyDescriptor(object, p)) {
    //
    //                     return object[p];
    //                 }
    //
    //                 let descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(object), p);
    //
    //                 if(descriptor && descriptor.get) {
    //
    //                     return object[p];
    //                 }
    //
    //                 if(descriptor && descriptor.value) {
    //
    //                     return object[p];
    //                 }
    //             }
    //         }
    //
    //         return undefined;
    //
    //     }
    //
    //     set(target: Array<object>, p: string | number | symbol, value: any, receiver: any): boolean {
    //
    //         for(let object of target) {
    //
    //             if(p in object) {
    //
    //                 if(Object.getOwnPropertyDescriptor(object, p)) {
    //
    //                     object[p] = value;
    //                     return true;
    //                 }
    //
    //                 let descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(object), p);
    //
    //                 if(descriptor && descriptor.set) {
    //
    //                     object[p] = value;
    //                     return true;
    //                 }
    //             }
    //         }
    //
    //         return false;
    //     }
    //
    //     apply(target: Array<object>, thisArg: any, argArray?: any): any {
    //
    //         console.log('thisArg =====================================');
    //         console.log(thisArg);
    //
    //         return false;
    //     }
    //
    //     deleteProperty(target: Array<object>, p: string | number | symbol): boolean {
    //
    //         for(let object of target) {
    //
    //             if(p in object) {
    //
    //                 delete object[p];
    //                 return true;
    //             }
    //         }
    //
    //         return false;
    //     }
    // }
    //
    //
    //
    // export default function Mixin<Objects extends object[]>(...objects : Objects) : UnionToIntersection<ValuesType<Objects>> {
    //
    //
    //     class ccc {
    //         a  = 'a';
    //         get b() : any { return null}
    //         set c(c) { }
    //         d(c) { }
    //     }
    //
    //     // console.log('========>>');
    //     // console.log(Object.getOwnPropertyDescriptor((new ccc()), 'a'));
    //     // console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new ccc()), 'b'));
    //     // console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new ccc()), 'c'));
    //     // console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new ccc()), 'd'));
    //     // console.log('========<<');
    //
    //     let proxy = new Proxy(objects, new Handler());
    //     return <UnionToIntersection<ValuesType<Objects>>>proxy;
    //
    // }
    //
    // class ccc {
    //     a  = 'a';
    //     get b() : any { return null}
    //     set c(c) { }
    //     d(c) { this.a = c }
    // }
    //
    // let c = new ccc;
    // // @ts-ignore
    // console.log(Mixin(c).d(2));
    // console.log(c.a);
    //
    function Mixin(...objects) {
        // assign value
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
        let target = function () {
        };
        //let target = Object.assign(function () {}, ...objects);
        // // assign descriptor
        // for (let object of objects) {
        //
        //     // @ts-ignore
        //     for (let prop in object.prototype) {
        //         // @ts-ignore
        //         target.prototype[prop] = object.prototype[prop];
        //     }
        //
        // }
        // target.prototype()
        //console.log(descriptors);
        // assign descriptor
        for (let [property, descriptor] of descriptors) {
            Object.prototype[property] = descriptor;
        }
        return Object.assign(new target, ...objects);
    }
    exports.default = Mixin;
});
//# sourceMappingURL=mixin.js.map