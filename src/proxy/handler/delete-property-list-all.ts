import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";

export default class DeletePropertyListAll<
    ObjectT extends object,
    Objects extends object[]
> implements Required<ProxyHandler<ObjectT>, 'deleteProperty'> {

    constructor(
        public handlers : Objects
    ) {
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'deleteProperty'> {

        handler.deleteProperty = (target: ObjectT, property: PropertyKey) => this.deleteProperty(target, property);
        return handler as Required<ProxyHandler<Target>, 'deleteProperty'>;
    }

    deleteProperty(target: ObjectT, property: PropertyKey): boolean {

        let deleted = false;

        for (let handler of [target, ...this.handlers]) {

            deleted = (delete handler[property]) || deleted;
        }

        return deleted;

    }
}
