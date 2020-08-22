import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class IsExtensibleListAll<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'isExtensible'>  {

    public extensible ?: boolean;

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

        for(let object of this.getHandler(target)) {

            this.extensible = Object.isExtensible(object) && this.extensible;
        }

        return this.extensible;
    }
}
