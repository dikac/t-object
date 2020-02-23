/**
 * similar to {@link Record}, support recursive
 */
declare type Record<V> = {
    [key: string]: V | Record<V>;
};
export default Record;
