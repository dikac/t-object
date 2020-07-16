import Validatable from "@dikac/t-validatable/validatable";
import Record from "@dikac/t-object/record/recursive/record";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {O} from "ts-toolbelt";
import Filter from "@dikac/t-object/record/recursive/filter";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
    Object extends Record<keyof any, V> = Record<keyof any, V>
>(
    record : Object
) : O.Partial<Object, 'deep'> {

    return Filter(record, GuardValidatable, (v : Validatable) => v.valid);
}

