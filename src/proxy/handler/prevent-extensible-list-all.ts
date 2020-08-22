import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class PreventExtensibleListAll<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'preventExtensions'>  {

    private extensible ?: boolean;

    reset() {

        this.extensible = undefined;
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'preventExtensions'>  {

        handler.preventExtensions = (target: ObjectT) => this.preventExtensions(target);

        return handler as Required<ProxyHandler<Target>, 'preventExtensions'>;
    }

    preventExtensions(target: ObjectT): boolean {

        let result : boolean = true;

        for(let object of this.getHandler(target)) {

            result = Reflect.preventExtensions(object) && result;
        }

        return result;
    }
}
