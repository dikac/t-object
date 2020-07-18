import Recursive from "../recursive";
import Pair from "./pair";
import Guard from "@dikac/t-function/boolean/guard";

export default class Value<
    Type,
    Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>
> implements
    Iterable<Type>
{

    constructor(
        public record : Object,
        public validation : Guard<any, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<Type> {

        for (let [properties, value] of new Pair(this.record, this.validation)) {

            yield value
        }
    }
}
