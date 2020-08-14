import {List} from "ts-toolbelt";

export default function Select<
    ObjectT extends object,
    Key extends (keyof ObjectT)[]
>(object : ObjectT, keys : Key) : Pick<ObjectT, List.UnionOf<Key>> {

    const result = {};

    for (const property of keys) {

        result[<PropertyKey>property] = object[property];
    }

    return result as Pick<ObjectT, List.UnionOf<Key>>;
}
