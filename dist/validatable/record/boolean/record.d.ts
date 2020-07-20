import Validatable from "@dikac/t-validatable/validatable";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<Object extends Record<Key, Validatable>, Key extends PropertyKey = PropertyKey>(record: unknown, property?: Guard<unknown, Key>): record is Object;
