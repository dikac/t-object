import Record from "../record";
import Property from "../infer/property";
import Guard from "@dikac/t-function/boolean/guard";
export default class Pair<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<[Property<Object>[], Type]> {
    record: Object;
    validation: Guard<any, Type>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<[Property<Object>[], Type]>;
}
