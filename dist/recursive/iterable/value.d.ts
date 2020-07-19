import Recursive from "../recursive";
import Fns from "@dikac/t-function/function-single";
export default class Value<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>> implements Iterable<Type> {
    record: Object;
    validation: Fns<any, boolean>;
    constructor(record: Object, validation: Fns<any, boolean>);
    [Symbol.iterator](): Iterator<Type>;
}
