import Record from "../record";
import Property from "../../infer/property";
export default class Pair<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<[Property<Object>[], Type]> {
    record: Object;
    validation: (value: any) => value is Type;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: (value: any) => value is Type);
    [Symbol.iterator](): Iterator<[Property<Object>[], Type]>;
}
