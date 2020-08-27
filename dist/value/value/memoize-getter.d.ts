/**
 * set {@param value} for getter value for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param value
 * value tobe memoized
 *
 * @param configurable {@default true}
 */
export default function MemoizeGetter<This extends object, Type>(object: This, property: keyof This, value: Type, configurable?: boolean): Type;
