import Validatable from "@dikac/t-validatable/validatable";
import TypeRecord from "../../record/boolean/record";
import ValidatableType from "@dikac/t-validatable/boolean/validatable";
import PropertyType from "../../key/boolean/key";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<
    Key extends PropertyKey
>(
    record : any,
    property : Guard<any, Key> = PropertyType
) : record is Record<Key, Validatable> {

    return TypeRecord(record, ValidatableType, property);
}
