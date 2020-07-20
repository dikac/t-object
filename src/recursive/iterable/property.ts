import PropertyInfer from "../property/property";
import PairGuard from "./pair-guard";
import Fns from "@dikac/t-function/function-single";

export default class Property<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<PropertyInfer<Object>[]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : Fns<any, boolean>,
    ) {

    }

    * [Symbol.iterator](): Iterator<PropertyInfer<Object>[]> {

        // @ts-ignore
        for (let [properties, value] of new PairGuard(this.record, this.validation)) {

            yield properties
        }

    }
}
