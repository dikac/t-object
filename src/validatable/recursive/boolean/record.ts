import Validatable from "@dikac/t-validatable/validatable";
import TypeRecord from "../../../recursive/boolean/record";
import ValidatableType from "@dikac/t-validatable/boolean/validatable";
import PropertyType from "../../../key/boolean/key";
import RecursiveRecord from "../../../recursive/recursive";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<
    Object extends RecursiveRecord<Key, Validatable>,
    Key extends PropertyKey
>(
    record : unknown,
    property : Guard<unknown, Key> = PropertyType
) : record is Object {

    return TypeRecord(record, ValidatableType, property)
}
