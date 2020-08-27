/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
export default function Record<Value>(object: object, value: (value: unknown) => value is Value): object is Record<PropertyKey, Value>;
export default function Record<Value, Key extends PropertyKey = PropertyKey>(object: object, value: (value: unknown) => value is Value, property: (value: PropertyKey) => value is Key): object is Record<Key, Value>;
