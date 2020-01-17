import { UnionToIntersection, ValuesType } from 'utility-types';
import DescriptorGetter, {PropertyDescriptorGetter} from "./boolean/descriptor-getter";
import MergeDescriptorGetterSetter from "./merge-descriptor-getter-setter";
import DescriptorSetter, {PropertyDescriptorSetter} from "./boolean/descriptor-setter";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});
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


export default function Mixin<Objects extends object[]>(...objects : Objects) : UnionToIntersection<ValuesType<Objects>> {




    // assign value


    // populate descriptor
    let descriptors : Map<string|number|symbol, PropertyDescriptor> = new Map<string|number|symbol, PropertyDescriptor>();


    for (let object of objects) {

        let prototype = Object.getPrototypeOf(object);

        for (let property of [...Object.getOwnPropertyNames(prototype), ...Object.getOwnPropertySymbols(prototype)]) {

            if (property === 'constructor') {

                continue;
            }

            let descriptor = Object.getOwnPropertyDescriptor(prototype, property);


            if(!descriptor) {

                continue;
            }

            if(
                (DescriptorGetter(descriptor) || DescriptorSetter(descriptor)) &&
                (DescriptorGetter(descriptors.get(property) || {}) || DescriptorSetter(descriptors.get(property) || {}))
            ) {

                descriptors.set(property, MergeDescriptorGetterSetter(<PropertyDescriptorGetter|PropertyDescriptorSetter>descriptors.get(property) || {}, descriptor));

            } else {

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

    return <UnionToIntersection<Objects[keyof Objects]>>Object.assign(new target, ...objects);

}
