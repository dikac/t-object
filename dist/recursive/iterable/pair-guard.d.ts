import Recursive from "../recursive";
import Property from "../property/property";
import Guard from "@dikac/t-function/boolean/guard";
export default class PairGuard<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>> implements Iterable<[Property<Object>[], Type]> {
    record: Object;
    validation: Guard<any, Type>;
    protected keys: PropertyKey[];
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<[Property<Object>[], Type]>;
}
