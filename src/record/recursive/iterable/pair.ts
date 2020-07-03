import Record from "../record";
import {DeepPartial} from "utility-types";
import ObjectType from "../../../boolean/type";
import Empty from "../../../boolean/empty";
import Property from "../../infer/property";
import InvalidType from "../../../string/invalid-type";

export default class Pair<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
> implements
    Iterable<[Property<Object>[], Type]>
{

    protected keys : PropertyKey[] = [];

    constructor(
        public record : Object,
        public validation : (value : any) => value is Type,
    ) {

    }

    * [Symbol.iterator](): Iterator<[Property<Object>[], Type]> {

        for(const property in this.record) {

            const value : Type = <Type>this.record[property];
            const properties = [...this.keys, property];

            if(this.validation(value)) {

                yield [<Property<Object>[]>properties, value];

            } else if(ObjectType(value)) {

                let recursive = new Pair(value, this.validation);
                recursive.keys.push(...properties);

                yield * recursive;

            } else {

                throw new TypeError(InvalidType({
                    value : this.validation.toString(),
                    property : properties.join('.')
                }));
            }
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
