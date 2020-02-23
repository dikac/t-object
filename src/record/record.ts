/**
 * similar to {@link Record}, support recursive
 */
type Record<V> = {
    [key : string] : V|Record<V>
};

export default Record;
