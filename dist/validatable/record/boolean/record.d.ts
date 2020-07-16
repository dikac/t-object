import Validatable from "@dikac/t-validatable/validatable";
import RecursiveRecord from "@dikac/t-object/record/recursive/record";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<Object extends RecursiveRecord<Key, Validatable>, Key extends PropertyKey>(record: unknown, property?: Guard<unknown, Key>): record is Object;
