import Property from "../../property/boolean/property";
import Readable from "../../property/boolean/readable";
import {List} from "ts-toolbelt";
import {Required} from "utility-types";
import Function from "@dikac/t-function/boolean/function";
import MultiHandlers from "./multi-handlers";

/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetListFirst<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'get'>  {

    /**
     * mapping for getter handler
     */
    private handler : Partial<Record<keyof List.UnionOf<Objects>, List.UnionOf<Objects>>> = {};



    /**
     * reset cached mapping
     */
    reset() {

        this.handler = {};
    }

    /**
     * set handler to other {@link ProxyHandler<Target>}
     * @param handler
     */
    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'get'> {

        handler.get = (target: ObjectT, property: PropertyKey, receiver: any) => this.get(target, property, receiver);

        return handler as Required<ProxyHandler<Target>, 'get'>;
    }

    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target: ObjectT, property: PropertyKey, receiver: any): any {

        if(Property(this.handler, property)) {

            return this.handler[property][property];
        }

        for (const handler of this.getHandler(target)) {

            if(Readable(handler, property)) {

                if(Function(handler[property])) {

                    this.handler[property] = {
                        [property] : (...argument : any[]) => handler[property](...argument)
                    }

                } else {

                    this.handler[property] = handler;
                }

                return handler[property];
            }
        }

        this.handler[property] = {[property]:undefined}

        return undefined;
    }
}
