import Validatable from "@dikac/t-validatable/validatable";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import Filter from "../../record/filter";
import Optional from "../../record/optional";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
    Object extends Record<PropertyKey, V> = Record<PropertyKey, V>
>(
    record : Object
) : Optional<Object> {

    return  Filter(record, (v) =>GuardValidatable(v) && v.valid);
}

