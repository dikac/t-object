import { List } from "ts-toolbelt";
/**
 * implementation of {@link globalThis.Pick}
 *
 * get value from {@param object} by {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for selection
 */
export default function Pick<ObjectT extends object, Key extends (keyof ObjectT)[]>(object: ObjectT, ...keys: Key): globalThis.Pick<ObjectT, List.UnionOf<Key>>;
