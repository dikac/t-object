import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetListFirst<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'get'> {
    /**
     * mapping for getter handler
     */
    private handler;
    /**
     * reset cached mapping
     */
    reset(): void;
    /**
     * set handler to other {@link ProxyHandler<Target>}
     * @param handler
     */
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'get'>;
    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target: ObjectT, property: PropertyKey, receiver: any): any;
}
