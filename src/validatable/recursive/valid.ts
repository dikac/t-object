import Validatable from "@dikac/t-validatable/validatable";
import Recursive from "../../recursive/recursive";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import Filter from "../../recursive/filter";
import Optional from "../../recursive/optional";


/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
    Object extends Recursive<PropertyKey, V> = Recursive<PropertyKey, V>
>(
    record : Object
) : Optional<Object> {

    return <Optional<Object>> Filter(record, GuardValidatable, (v : Validatable) => v.valid);
}

