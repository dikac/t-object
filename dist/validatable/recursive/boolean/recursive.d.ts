import Validatable from "@dikac/t-validatable/validatable";
import RecursiveRecord from "../../../recursive/recursive";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Recursive<Object extends RecursiveRecord<Key, Validatable>, Key extends PropertyKey>(record: unknown, property?: Guard<unknown, Key>): record is Object;
