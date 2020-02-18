type DeepRecord<V> = {
    [key : string] : V|DeepRecord<V>
};

export default DeepRecord;


interface Record {


    toObject() : globalThis.Record<string, string>;
}
