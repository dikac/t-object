import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";

export default class SetterList<
    ObjectT extends object,
    Objects extends object[]
> implements Required<ProxyHandler<ObjectT>, 'has'>  {

    private handler : Partial<Record<keyof ObjectT, boolean>> = {};

    constructor(
        private handlers : Objects
    ) {
    }

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

        for (let handler of [target, ...this.handlers]) {

            if(Property(handler, property)) {

                this.handler[property] = true;
                break;
            }
        }

        return this.handler[property];

    }
}
