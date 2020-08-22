import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class DeletePropertyListAll<
    ObjectT extends object,
    Objects extends object[]
>  extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'deleteProperty'> {

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'deleteProperty'> {

        handler.deleteProperty = (target: ObjectT, property: PropertyKey) => this.deleteProperty(target, property);
        return handler as Required<ProxyHandler<Target>, 'deleteProperty'>;
    }

    deleteProperty(target: ObjectT, property: PropertyKey): boolean {

        let deleted = false;

        for (let handler of this.getHandler(target)) {

            deleted = (delete handler[property]) || deleted;
        }

        return deleted;

    }
}
