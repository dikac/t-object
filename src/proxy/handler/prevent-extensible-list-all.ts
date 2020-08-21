import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import Unique from "@dikac/t-array/unique";
import {Required} from "utility-types";

export default class PreventExtensibleListAll<
    ObjectT extends object,
    Objects extends object[]
> implements Required<ProxyHandler<ObjectT>, 'preventExtensions'>  {

    public extensible ?: boolean;

    constructor(

        public handlers : Objects
    ) {
    }

    reset() {

        this.extensible = undefined;
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'preventExtensions'>  {

        handler.preventExtensions = (target: ObjectT) => this.preventExtensions(target);

        return handler as Required<ProxyHandler<Target>, 'preventExtensions'>;
    }


    preventExtensions(target: ObjectT): boolean {

        let result : boolean = true;

        for(let object of [target, ...this.handlers]) {

            result = Reflect.preventExtensions(object) && result;
        }

        return result;
    }
}
