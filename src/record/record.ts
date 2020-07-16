/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type Record<Key extends keyof any, Value> = {
    [K in Key] : Value|Record<Key, Value>;
};


export default Record;
