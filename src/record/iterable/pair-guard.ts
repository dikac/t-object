import Property from "../property/property";
import Guard from "@dikac/t-function/boolean/guard";
import Pair from "./pair";

export default class PairGuard<
    Type,
    Object extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> implements
    Iterable<[Property<Object>[], Type]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : Guard<any, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<[Property<Object>[], Type]> {

        return new Pair(this.record, this.validation);

    }
}
