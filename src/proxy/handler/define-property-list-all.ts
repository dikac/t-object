import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";

export default class DefinePropertyListAll<
    ObjectT extends object,
    Objects extends object[]
> implements Required<ProxyHandler<ObjectT>, 'defineProperty'> {

    constructor(
        public handlers : Objects
    ) {
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'defineProperty'> {

        handler.defineProperty = (target: ObjectT, property: PropertyKey, attributes: PropertyDescriptor) => this.defineProperty(target, property, attributes);
        return handler as Required<ProxyHandler<Target>, 'defineProperty'>;
    }

    defineProperty(target: ObjectT, property: PropertyKey, attributes: PropertyDescriptor): boolean {

        let result : boolean = true;

        for (let object of [target, ...this.handlers]) {

            result = Reflect.defineProperty(object, property , attributes) && result;
        }

        return result;

    }
}
