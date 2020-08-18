import { List } from "ts-toolbelt";
/**
 * get new object from {@param object} by {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for selection
 */
export default function Select<ObjectT extends object, Key extends (keyof ObjectT)[]>(object: ObjectT, keys: Key): Pick<ObjectT, List.UnionOf<Key>>;
