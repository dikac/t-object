import RecordInterface from "../record";
/**
 * Check if {@param record} is {@link RecordInterface} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function Record<Value, Assumption extends RecordInterface<keyof any, Value>, Key extends string | number | symbol = string | number | symbol>(record: any, validation: (value: any) => value is Value, prop?: (value: string | number | symbol) => value is Key): record is Assumption;
