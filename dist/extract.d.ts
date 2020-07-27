import { Object, List } from "ts-toolbelt";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-function/return/return";
export default class Extract<O extends object, Key extends (keyof O)[] = (keyof O)[]> implements Readonly<Value<Omit<O, List.UnionOf<Key>>> & Return<Object.Pick<O, List.UnionOf<Key>>>> {
    readonly keys: Key;
    readonly return: Object.Pick<O, List.UnionOf<Key>>;
    readonly value: Omit<O, List.UnionOf<Key>>;
    constructor(value: O, keys: Key);
}
