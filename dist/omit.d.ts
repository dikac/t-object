import { List } from "ts-toolbelt";
/**
 * implementation of {@link globalThis.Omit}
 *
 * get new object from {@param object} except key in {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for exclusion
 */
export default function Omit<ObjectType extends object, Keys extends (keyof ObjectType)[]>(object: ObjectType, ...keys: Keys): Omit<ObjectType, List.UnionOf<Keys>>;
