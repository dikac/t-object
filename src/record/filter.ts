import {DeepPartial} from "utility-types";
import Record from "./record";
import Empty from "../boolean/empty";
import Type from "../boolean/type";
import PropertyActual from "../message/string/property-actual";

export default function Filter<
    V,
    O extends Record<V> = Record<V>
>(
    record : O,
    filter : (val : V) => boolean,
    validation : (val : any) => val is V,
) : DeepPartial<O> {

    let result : Record<V> = {};

    for(let property in record) {

        const value : Record<V> = <Record<V>> record[property];

        if(validation(value)) {

            if(filter(value)) {

                result[property] = value;
            }

        } else if(Type(value)) {

            const results = <Record<V>> Filter(value, filter, validation);

            if(!Empty(results)) {

                result[property] = results;
            }

        } else {

            throw new Error(PropertyActual(property, 'valid against validation', result[property] + ''))
        }
    }

    return <DeepPartial<O>> result;
}
