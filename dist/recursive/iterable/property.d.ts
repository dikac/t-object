import PropertyInfer from "../property/property";
import Fns from "@dikac/t-function/function-single";
export default class Property<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<PropertyInfer<Object>[]> {
    record: Object;
    validation: Fns<any, boolean>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Fns<any, boolean>);
    [Symbol.iterator](): Iterator<PropertyInfer<Object>[]>;
}
