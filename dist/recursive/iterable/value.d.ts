import Fns from "@dikac/t-function/function-single";
export default class Value<Type, Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>> implements Iterable<Type> {
    record: Object;
    validation: Fns<any, boolean>;
    constructor(record: Object, validation: Fns<any, boolean>);
    [Symbol.iterator](): Iterator<Type>;
}
