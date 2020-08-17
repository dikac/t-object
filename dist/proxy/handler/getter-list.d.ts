/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetterList<ObjectT extends object> implements ProxyHandler<ObjectT> {
    handlers: Partial<ObjectT>[];
    /**
     * mapping for getter handler
     */
    handler: {
        [Key in keyof ObjectT]?: Partial<ObjectT>;
    };
    /**
     * @param handlers
     * list of object witch partially compatible
     */
    constructor(handlers: Partial<ObjectT>[]);
    /**
     * reset cached mapping
     */
    reset(): void;
    /**
     * set handler to other {@link ProxyHandler<Target>}
     * @param handler
     */
    bind<Target extends ObjectT>(handler: ProxyHandler<Target>): void;
    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target: ObjectT, property: PropertyKey, receiver: any): any;
}
