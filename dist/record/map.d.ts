import Value from "./infer/value";
/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 */
export default function Map<Replace, Object extends Record<any, any>>(object: Object, replace: (value: Value<Object>) => Replace): Record<keyof Object, Replace>;
