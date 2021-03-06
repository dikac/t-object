import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import ValidatableInvalid from "@dikac/t-validatable/boolean/invalid";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
>(
    record : Object
) : Partial<Object> {

    let validation = (v) => GuardValidatable(v) && ValidatableInvalid(v);

    return Filter(record, validation);
}

