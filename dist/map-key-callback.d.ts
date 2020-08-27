import Function from "@dikac/t-function/function";
/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 */
export default function MapKeyCallback<Object extends Record<PropertyKey, Value>, Replace extends PropertyKey = PropertyKey, Value = unknown>(object: Object, replace: Function<[keyof Object, Value], Replace>): Record<Replace, Value>;
/**
 * support for partial type
 */
export default function MapKeyCallback<Object extends Partial<Record<PropertyKey, Value>>, Replace extends PropertyKey = PropertyKey, Value = unknown>(object: Object, replace: Function<[keyof Object, Value | undefined], Replace>): Partial<Record<Replace, Value>>;
