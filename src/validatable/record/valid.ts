import Validatable from "@dikac/t-validatable/validatable";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import Filter from "../../filter";
import ValidatableValid from "@dikac/t-validatable/boolean/value";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
>(
    record : Object
) : Partial<Object> {

    let validation = (v) => GuardValidatable(v) && ValidatableValid(v);
    return  Filter(record, validation);
}

