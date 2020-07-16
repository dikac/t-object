import Validatable from "@dikac/t-validatable/validatable";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<Key extends PropertyKey>(record: any, property?: Guard<any, Key>): record is Record<Key, Validatable>;
