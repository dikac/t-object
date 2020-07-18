import Guard from "@dikac/t-function/boolean/guard";
/**
 * check if {@param obj} is certain type of record
 * {@param value} use to validate object value
 * optionally {@param property} use to validate object property
 */
export default function Record<Value, Key extends PropertyKey = PropertyKey>(obj: object, value: Guard<any, Value>, property?: Guard<PropertyKey, Key>): obj is Record<Key, Value>;
