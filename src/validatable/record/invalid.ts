import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../record/filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import ValidatableInvalid from "@dikac/t-validatable/boolean/invalid";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    V extends Validatable = Validatable,
    Object extends Record<PropertyKey, V> = Record<PropertyKey, V>
>(
    record : Object
) : Partial<Object> {

    return Filter(record, (v) => GuardValidatable(v) && ValidatableInvalid(v));
}
