export default function RecordOf<O extends object, Value>(value: object, validator: (value: any) => value is Value): boolean;
