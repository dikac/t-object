import { List } from "ts-toolbelt";
export default interface ToObject {
    toObject<Key extends (keyof this)[]>(keys: Key): Pick<this, List.UnionOf<Key>>;
}
