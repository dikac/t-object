import Recursive from "../recursive";
import Property from "../property/property";
import Fns from "@dikac/t-function/function-single";
export default class Pair<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>> implements Iterable<[Property<Object>[], Type]> {
    record: Object;
    validation: Fns<any, boolean>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Fns<any, boolean>);
    [Symbol.iterator](): Iterator<[Property<Object>[], Type]>;
}
