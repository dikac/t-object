declare type DeepRecord<V> = {
    [key: string]: V | DeepRecord<V>;
};
export default DeepRecord;
