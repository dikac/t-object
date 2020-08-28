import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetListFirst<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'get'> {
    /**
     * mapping for getter handler
     */
    private handler;
    /**
     * reset cached mapping
     */
    reset(): void;
    /**
     * set handler to other {@link ProxyHandler<Argument>}
     * @param handler
     */
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'get'>;
    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target: Target, property: PropertyKey, receiver: any): any;
}
