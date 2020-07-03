import Record from "../record";
import PropertyInfer from "../../infer/property";
export default class Property<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<PropertyInfer<Object>[]> {
    record: Object;
    validation: (value: any) => value is Type;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: (value: any) => value is Type);
    [Symbol.iterator](): Iterator<PropertyInfer<Object>[]>;
}
