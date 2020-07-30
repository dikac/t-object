import Validatable from "@dikac/t-validatable/validatable";
import TypeRecord from "../../../boolean/record";
import ValidatableType from "@dikac/t-validatable/boolean/validatable";
import PropertyType from "../../../key/boolean/key";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<
    Object extends Record<PropertyKey, Validatable>
    >(
    record : object,
) : record is Object;

export default function Record<
    Object extends Record<Key, Validatable>,
    Key extends PropertyKey = PropertyKey
    >(
    record : object,
    property : Guard<PropertyKey, Key>
) : record is Object;

export default function Record<
    Object extends Record<Key, Validatable>,
    Key extends PropertyKey = PropertyKey
>(
    record : object,
    property ? : Guard<PropertyKey, Key>
) : record is Object {

    return TypeRecord(record, ValidatableType, <Guard<PropertyKey, Key>>property)
}
