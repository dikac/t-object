import Validatable from "@dikac/t-validatable/validatable";
import Recursive from "../../recursive/recursive";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {O} from "ts-toolbelt";
import Filter from "../../recursive/filter";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
    Object extends Recursive<PropertyKey, V> = Recursive<PropertyKey, V>
>(
    record : Object
) : O.Partial<Object, 'deep'> {

    return Filter(record, GuardValidatable, (v : Validatable) => v.valid);
}

