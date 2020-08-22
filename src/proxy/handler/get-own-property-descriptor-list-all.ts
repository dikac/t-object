import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import Unique from "@dikac/t-array/unique";
import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class GetOwnPropertyDescriptorListAll<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'getOwnPropertyDescriptor'> {

    private descriptor : Record<PropertyKey, PropertyDescriptor|undefined> = {};

    reset() {

        this.descriptor = {};
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'getOwnPropertyDescriptor'> {

        handler.getOwnPropertyDescriptor = (target: ObjectT, p: PropertyKey) => this.getOwnPropertyDescriptor(target, p);

        return handler as Required<ProxyHandler<Target>, 'getOwnPropertyDescriptor'>;
    }

    getOwnPropertyDescriptor(target: ObjectT, property: PropertyKey) : PropertyDescriptor | undefined {

        if(Property(this.descriptor, property)) {

            // @ts-ignore
            return this.descriptor[property];
        }

        const descriptors : PropertyDescriptor[] = [];

        for(const object of this.getHandler(target)) {

            const descriptor = Reflect.getOwnPropertyDescriptor(object, property);

            if(descriptor) {

                descriptors.push(descriptor);
            }
        }

        if(descriptors.length === 0) {

            // @ts-ignore
            this.descriptor[property] = undefined;

        } else if(descriptors.length === 1) {

            // @ts-ignore
            this.descriptor[property] = descriptors[0];

        } else  {

            const descriptor : PropertyDescriptor = <PropertyDescriptor> descriptors.shift();

            for (const compare of descriptors) {

                for(const prop of ['configurable', 'enumerable', /*'value',*/ 'writable', 'get', 'set']) {

                    if(descriptor[prop] !== compare[prop]) {

                        throw new Error(`descriptor.${prop} is not consistent between source`)
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
