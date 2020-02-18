/**
 * similar to {@link Record}, support recursive
 */
type DeepRecord<V> = {
    [key : string] : V|DeepRecord<V>
};

export default DeepRecord;
