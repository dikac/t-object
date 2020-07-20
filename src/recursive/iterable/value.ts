import PairGuard from "./pair-guard";
import Fns from "@dikac/t-function/function-single";

export default class Value<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<Type>
{

    constructor(
        public record : Object,
        public validation : Fns<any, boolean>,
    ) {

    }

    * [Symbol.iterator](): Iterator<Type> {

        // @ts-ignore
        for (let [properties, value] of new PairGuard(this.record, this.validation)) {

            yield <Type>value
        }
    }
}
