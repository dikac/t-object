import Recursive from "../recursive";
import PropertyInfer from "../property/property";
import Fns from "@dikac/t-function/function-single";
export default class Property<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>> implements Iterable<PropertyInfer<Object>[]> {
    record: Object;
    validation: Fns<any, boolean>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Fns<any, boolean>);
    [Symbol.iterator](): Iterator<PropertyInfer<Object>[]>;
}
