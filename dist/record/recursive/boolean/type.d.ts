import RecordInterface from "../record";
/**
 * Check if {@param record} is {@link RecordInterface} with {@template Value}
 *
 * {@param validation} is use to validate {@template Value}
 */
export default function Type<Value, Assumption extends RecordInterface<keyof any, Value>>(record: any, validation: (value: any) => value is Value): record is Assumption;
