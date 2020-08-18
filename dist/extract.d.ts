import { Object, List } from "ts-toolbelt";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-function/return/return";
/**
 * extract {@template ObjectTemplate} by {@template Key}, extracted value will be
 * removed from {@template ObjectTemplate}
 */
export default class Extract<ObjectTemplate extends object, Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]> implements Readonly<Value<Omit<ObjectTemplate, List.UnionOf<Key>>> & Return<Object.Pick<ObjectTemplate, List.UnionOf<Key>>>> {
    readonly keys: Key;
    /**
     * extraction result
     */
    readonly return: Object.Pick<ObjectTemplate, List.UnionOf<Key>>;
    /**
     * contain original object source
     */
    readonly value: Omit<ObjectTemplate, List.UnionOf<Key>>;
    /**
     * @param value
     * source
     *
     * @param keys
     * key for extraction
     */
    constructor(value: ObjectTemplate, keys: Key);
}
