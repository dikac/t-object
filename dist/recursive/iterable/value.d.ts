import Recursive from "../recursive";
import Guard from "@dikac/t-function/boolean/guard";
export default class Value<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>> implements Iterable<Type> {
    record: Object;
    validation: Guard<any, Type>;
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<Type>;
}
