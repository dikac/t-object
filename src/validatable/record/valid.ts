import Validatable from "@dikac/t-validatable/validatable";
import Record from "../../record/record";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {O} from "ts-toolbelt";
import Filter from "../../record/filter";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
    Object extends Record<PropertyKey, V> = Record<PropertyKey, V>
>(
    record : Object
) : O.Partial<Object, 'deep'> {

    return Filter(record, GuardValidatable, (v : Validatable) => v.valid);
}

