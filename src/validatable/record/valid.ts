import Validatable from "@dikac/t-validatable/validatable";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import Filter from "../../filter";
import ValidatableValid from "@dikac/t-validatable/boolean/value";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
    Object extends Partial<Record<PropertyKey, V>> = Partial<Record<PropertyKey, V>>
>(
    record : Object
) : Partial<Object> {

    let validation = (v) => GuardValidatable(v) && ValidatableValid(v);//.valid;
    return  Filter(record, validation);
}

