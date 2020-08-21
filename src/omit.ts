import {List} from "ts-toolbelt";

export default function Omit<ObjectT extends object, Keys extends (keyof ObjectT)[]>(object : ObjectT, ... keys : Keys) : Omit<ObjectT, List.UnionOf<Keys>> {

    let result = {};

    for(let [property, value] of Object.entries(object)) {

        if(keys.includes(<keyof ObjectT>property)) {

            continue;
        }

        result[property] = value;
    }

    return result as Omit<ObjectT, List.UnionOf<Keys>>;

}
