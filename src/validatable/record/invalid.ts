import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import ValidatableInvalid from "@dikac/t-validatable/boolean/invalid";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    ValidatableT extends Validatable = Validatable,
    Object extends Partial<Record<PropertyKey, ValidatableT>> = Partial<Record<PropertyKey, ValidatableT>>
>(
    record : Object
) : Partial<Object> {

    let valdiation = (v) => GuardValidatable(v) && ValidatableInvalid(v);

    return Filter(record, valdiation);
}

