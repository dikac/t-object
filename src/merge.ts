import { UnionToIntersection, ValuesType } from 'utility-types';
import GetterType from "./descriptor/get/boolean/descriptor";
import SetterType from "./descriptor/set/boolean/descriptor";
import MergeDescriptor from "./descriptor/merge";
import Get from "./descriptor/get/get";
import Set from "./descriptor/set/set";

/**
 * Merge object property, symbol and method, the latter object will replace former
 */
export default function Merge<Objects extends object[]>(...objects : Objects) : UnionToIntersection<ValuesType<Objects>> {

    switch(objects.length) {
        case 0 : return <UnionToIntersection<ValuesType<Objects>>>{};
        case 1 : return <UnionToIntersection<ValuesType<Objects>>>objects.pop();
    }

    // assign value
    // @ts-ignore
    let target = Object.assign(...objects);

    // populate descriptor
    let descriptors : Map<PropertyKey, PropertyDescriptor> = new Map<PropertyKey, PropertyDescriptor>();


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

            if(!descriptor) {

                descriptor = Object.getOwnPropertyDescriptor(object, property);

                if(!descriptor) {

                    continue;
                }
            }

            if(
                (GetterType(descriptor) || SetterType(descriptor)) &&
                (GetterType(descriptors.get(property) || {}) || SetterType(descriptors.get(property) || {}))
            ) {

                descriptors.set(property, MergeDescriptor(<Get|Set>descriptors.get(property) || {}, descriptor));

            } else {

                descriptors.set(property, descriptor);
            }

        }
    }

    // assign descriptor
    for (let [property, descriptor] of descriptors) {

        Object.defineProperty(target, property, descriptor);
    }

    return <UnionToIntersection<Objects[keyof Objects]>> target;

}
