import {DeepPartial} from "utility-types";
import Record from "./record";
import Empty from "../../boolean/empty";
import Type from "../../boolean/type";
import Value from "../infer/value";

/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 */
export default function Filter<
    Object extends Record<any, any>
>(
    record : Object,
    filter : (val : Value<Object>) => boolean,
) : DeepPartial<Object> {

    let result : DeepPartial<Object> = <DeepPartial<Object>>{};

    for(let property in record) {

        const value : Value<Object> = record[property];

        if(filter(value)) {

            result[property] = value;

        } else if(Type(value)) {

            const results =  Filter(value, filter/*, validation*/);

            if(!Empty(results)) {

                result[property] = results;
            }
        }
    }

    return <DeepPartial<Object>> result;
}
