import Record from "../record";
import Guard from "@dikac/t-function/boolean/guard";
export default class Value<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<Type> {
    record: Object;
    validation: Guard<any, Type>;
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<Type>;
}
