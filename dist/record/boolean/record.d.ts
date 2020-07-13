/**
 * check if {@param obj} is certain type of record
 * {@param value} use to validate object value
 * optionally {@param property} use to validate object property
 */
export default function Record<Value, Key extends string | number | symbol = string | number | symbol>(obj: object, value: (value: any) => value is Value, property?: (value: string | number | symbol) => value is Key): obj is Record<Key, Value>;
