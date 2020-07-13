import Record from "../record";
import Pair from "./pair";

export default class Value<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<Type>
{

    constructor(
        public record : Object,
        public validation : (value : any) => value is Type,
    ) {

    }

    * [Symbol.iterator](): Iterator<Type> {

        for (let [properties, value] of new Pair(this.record, this.validation)) {

            yield value
        }
    }
}
