import { Required } from "utility-types";
/**
 * memoize {@template ObjectT} value from keys list
 */
export default class GetMemoizeKeys<Target extends object> implements Required<ProxyHandler<Target>, 'get'> {
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
     * set handler to other {@link ProxyHandler<Argument>}
     * @param handler
     */
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'get'>;
    get(target: Target, property: PropertyKey, receiver: any): any;
}
