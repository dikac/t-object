import RecordInterface from "../record/record";
export default function Record<Value>(record: any, validation: (value: any) => value is Value): record is RecordInterface<Value>;
