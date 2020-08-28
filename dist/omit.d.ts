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
export default function Omit<ObjectT extends object, Keys extends (keyof ObjectT)[]>(object: ObjectT, ...keys: Keys): Omit<ObjectT, List.UnionOf<Keys>>;
