import Property from "../../property/boolean/property";
import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class HasListAny<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'has'>  {

    private handler : Partial<Record<keyof ObjectT, boolean>> = {};

    reset() {

        this.handler = {};
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'has'> {

        handler.has = (target: ObjectT, property: PropertyKey) => this.has(target, property);

        return handler as Required<ProxyHandler<Target>, 'has'>;
    }

    has(target: ObjectT, property: PropertyKey): boolean {

        if(Property(this.handler, property)) {

            return this.handler[property]
        }

        this.handler[property] = false;

        for (const handler of this.getHandler(target)) {

            if(Property(handler, property)) {

                this.handler[property] = true;
                break;
            }
        }

        return this.handler[property];

    }
}
