/**
 * Strict assign
 *
 * @param object
 * @param data
 * @constructor
 */
export default function StrictAssign<O extends object, U extends Partial<O> = Partial<O>>(object: O, data: U): U & Omit<O, keyof U>;
