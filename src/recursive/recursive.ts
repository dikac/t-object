/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type Recursive<Key extends PropertyKey, Value> = {
    [K in Key] : Value|Recursive<Key, Value>;
};


export default Recursive;
