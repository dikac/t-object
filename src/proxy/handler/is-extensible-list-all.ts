import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import Unique from "@dikac/t-array/unique";
import {Required} from "utility-types";

export default class IsExtensibleListAll<
    ObjectT extends object,
    Objects extends object[]
> implements Required<ProxyHandler<ObjectT>, 'isExtensible'>  {

    public extensible ?: boolean;

    constructor(
        public handlers : Objects[]
    ) {
    }

    reset() {

        this.extensible = undefined;
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'isExtensible'> {

        handler.isExtensible = (target: ObjectT) => this.isExtensible(target);

        return handler as Required<ProxyHandler<Target>, 'isExtensible'>;
    }

    isExtensible(target: ObjectT): boolean {

        if(this.extensible !== undefined) {

            return this.extensible;
        }

        this.extensible = true;

        for(let object of [target, ...this.handlers]) {

            this.extensible = Object.isExtensible(object) && this.extensible;
        }

        return this.extensible;
    }
}
