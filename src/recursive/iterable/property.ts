import Recursive from "../recursive";
import PropertyInfer from "../property/property";
import Pair from "./pair";
import Guard from "@dikac/t-function/boolean/guard";

export default class Property<
    Type,
    Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>
> implements
    Iterable<PropertyInfer<Object>[]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : Guard<any, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<PropertyInfer<Object>[]> {

        for (let [properties, value] of new Pair(this.record, this.validation)) {

            yield properties
        }

    }
}
