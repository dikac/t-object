import RecordInterface from "../recursive";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function Recursive<Value, Assumption extends RecordInterface<PropertyKey, Value>, Key extends PropertyKey = PropertyKey>(record: any, validation: Guard<any, Value>, prop?: Guard<PropertyKey, Key>): record is Assumption;
