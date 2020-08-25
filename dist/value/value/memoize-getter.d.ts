/**
 * set return from {@param factory} to getter for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param factory
 */
export default function MemoizeGetter<This extends object, Type>(object: This, property: keyof This, factory: () => Type): Type;
