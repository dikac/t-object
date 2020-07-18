import Recursive from "../recursive";
import PropertyInfer from "../property/property";
import Guard from "@dikac/t-function/boolean/guard";
export default class Property<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>> implements Iterable<PropertyInfer<Object>[]> {
    record: Object;
    validation: Guard<any, Type>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<PropertyInfer<Object>[]>;
}
