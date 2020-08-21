import { List } from "ts-toolbelt";
import { Required } from "utility-types";
/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetListFirst<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'get'> {
    private handlers;
    /**
     * mapping for getter handler
     */
    private handler;
    /**
     * @param handlers
     * list of object witch partially compatible
     */
    constructor(handlers: Objects);
    /**
     * reset cached mapping
     */
    reset(): void;
    handle(): Partial<Record<keyof List.UnionOf<Objects>, List.UnionOf<Objects>>>;
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
