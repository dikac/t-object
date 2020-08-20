import { List } from "ts-toolbelt";
/**
 * @deprecated use {@link Pick} instead
 */
export default function Select<ObjectT extends object, Key extends (keyof ObjectT)[]>(object: ObjectT, keys: Key): globalThis.Pick<ObjectT, List.UnionOf<Key>>;
