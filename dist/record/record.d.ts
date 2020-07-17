/**
 * similar to {@link globalThis.Record} but with recursive support
 */
declare type Record<Key extends PropertyKey, Value> = {
    [K in Key]: Value | Record<Key, Value>;
};
export default Record;
