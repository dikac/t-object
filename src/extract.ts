import {Object, List} from "ts-toolbelt";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-function/return/return";

export default class Extract<
    O extends object,
    Key extends Object.Keys<O>[]
> implements
    Readonly<Value<Omit<O, List.UnionOf<Key>>> & Return<Object.Pick<O, List.UnionOf<Key>>>>
{
    readonly return : Object.Pick<O, List.UnionOf<Key>> = <Object.Pick<O, List.UnionOf<Key>>>{}
    readonly value : Omit<O, List.UnionOf<Key>>;

    constructor(
        value : O,
        readonly keys : Key
    ) {

        this.value = value;

        for(let key of this.keys) {

            this.return[<PropertyKey>key] =  value[key];
            delete value[key];
        }
    }
}
