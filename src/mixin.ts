import { UnionToIntersection, ValuesType } from 'utility-types';
import DescriptorGetter, {PropertyDescriptorGetter} from "./boolean/descriptor-getter";
import MergeDescriptorGetterSetter from "./merge-descriptor-getter-setter";
import DescriptorSetter, {PropertyDescriptorSetter} from "./boolean/descriptor-setter";



export default function Mixin<Objects extends object[]>(...objects : Objects) : UnionToIntersection<ValuesType<Objects>> {

    // assign value
    let target = Object.assign({}, ...objects);

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

    // assign descriptor
    for (let [property, descriptor] of descriptors) {

        Object.defineProperty(target, property, descriptor);
    }

    return <UnionToIntersection<Objects[keyof Objects]>> target;

}
