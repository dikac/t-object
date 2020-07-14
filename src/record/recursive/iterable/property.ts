import Record from "../record";
import PropertyInfer from "../../infer/property";
import Pair from "./pair";
import Guard from "@dikac/t-function/boolean/guard";

export default class Property<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<PropertyInfer<Object>[]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : Guard<any, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<PropertyInfer<Object>[]> {

        for (let [properties, value] of new Pair(this.record, this.validation)) {

            yield properties
        }

    }
}
//
// export default function Pair<
//     Type,
//     Object extends Record<keyof any, Type> = Record<keyof any, Type>
//     >(
//     record : Object,
//     validation : (value : any) => value is Type,
// ) : DeepPartial<Object> {
//
//     let result : DeepPartial<Object> = <DeepPartial<Object>>{};
//
//     for(const property in record) {
//
//         const value : Type = <Type>record[property];
//
//         if(validation(value)) {
//
//             // @ts-ignore
//             result[property] = value;
//
//         } else if(ObjectType(value)) {
//
//             const results =  Pair(value, validation);
//
//             if(!Empty(results)) {
//
//                 result[property] = results;
//             }
//         }
//     }
//
//     return <DeepPartial<Object>> result;
// }
