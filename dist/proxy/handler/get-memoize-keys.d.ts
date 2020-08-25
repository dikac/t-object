import { Required } from "utility-types";
/**
 * memoize {@template ObjectT} value from keys list
 */
export default class GetMemoizeKeys<ObjectT extends object> implements Required<ProxyHandler<ObjectT>, 'get'> {
    readonly keys: PropertyKey[];
    /**
     * mapping for memoized result
     */
    private memoize;
    /**
     * @param keys
     * keys to be memoized
     */
    constructor(keys: PropertyKey[]);
    /**
     * reset memoize key
     *
     * @param key
     */
    reset(key: PropertyKey): void;
    /**
     * reset all memoize
     */
    resets(): void;
    /**
     * set handler to other {@link ProxyHandler<Target>}
     * @param handler
     */
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'get'>;
    get(target: ObjectT, property: PropertyKey, receiver: any): any;
}
