import RecordInterface from "../record";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is {@link RecordInterface} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function Record<Value, Assumption extends RecordInterface<PropertyKey, Value>, Key extends string | number | symbol = string | number | symbol>(record: any, validation: Guard<any, Value>, prop?: Guard<string | number | symbol, Key>): record is Assumption;
