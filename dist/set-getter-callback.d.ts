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
 * @param configurable
 */
export default function SetGetterCallback<This extends object, Key extends keyof This>(object: This, property: Key, factory: () => This[Key], configurable?: boolean): O.Readonly<Required<This, Key>>;
export default function SetGetterCallback<This extends object, Key extends PropertyKey, Type>(object: This, property: Key, factory: () => Type, configurable?: boolean): Omit<This, Key> & O.Readonly<Record<Key, Type>>;
