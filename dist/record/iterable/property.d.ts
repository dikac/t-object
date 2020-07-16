import Record from "../record";
import PropertyInfer from "../infer/property";
import Guard from "@dikac/t-function/boolean/guard";
export default class Property<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<PropertyInfer<Object>[]> {
    record: Object;
    validation: Guard<any, Type>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<PropertyInfer<Object>[]>;
}
