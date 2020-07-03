import Record from "../record";
export default class Value<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<Type> {
    record: Object;
    validation: (value: any) => value is Type;
    constructor(record: Object, validation: (value: any) => value is Type);
    [Symbol.iterator](): Iterator<Type>;
}
