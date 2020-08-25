import { O } from "ts-toolbelt";
import { Required } from "utility-types";
/**
 * set return from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param factory
 */
export default function MemoizeGetterBind<This extends object, Key extends keyof This>(object: This, property: Key, factory: () => This[Key]): O.Readonly<Required<This, Key>>;
export default function MemoizeGetterBind<This extends object, Key extends PropertyKey, Type>(object: This, property: Key, factory: () => Type): Omit<This, Key> & O.Readonly<Record<Key, Type>>;
