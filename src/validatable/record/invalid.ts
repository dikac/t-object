import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import ValidatableInvalid from "@dikac/t-validatable/boolean/invalid";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    V extends Validatable = Validatable,
    Object extends Partial<Record<PropertyKey, V>> = Partial<Record<PropertyKey, V>>
>(
    record : Object
) : Partial<Object> {

    let valdiation = (v) => GuardValidatable(v) && ValidatableInvalid(v);

    return Filter(record, valdiation);
}

