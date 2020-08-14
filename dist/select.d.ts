import { List } from "ts-toolbelt";
export default function Select<ObjectT extends object, Key extends (keyof ObjectT)[]>(object: ObjectT, keys: Key): Pick<ObjectT, List.UnionOf<Key>>;
