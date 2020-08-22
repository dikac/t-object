import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class DefinePropertyListAll<
    ObjectT extends object,
    Objects extends object[]
>  extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'defineProperty'> {


    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'defineProperty'> {

        handler.defineProperty = (target: ObjectT, property: PropertyKey, attributes: PropertyDescriptor) => this.defineProperty(target, property, attributes);
        return handler as Required<ProxyHandler<Target>, 'defineProperty'>;
    }

    defineProperty(target: ObjectT, property: PropertyKey, attributes: PropertyDescriptor): boolean {

        let result : boolean = true;

        for (let object of this.getHandler(target)) {

            result = Reflect.defineProperty(object, property , attributes) && result;
        }

        return result;

    }
}
