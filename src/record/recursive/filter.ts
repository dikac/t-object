import {DeepPartial} from "utility-types";
import Record from "./record";
import Empty from "../../boolean/empty";
import Type from "../../boolean/type";
import Value from "../infer/value";

/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
 * recursively
 */
export default function Filter<
    Type,
    Object extends Record<keyof any, Type> = Record<keyof any, Type>
>(
    record : Object,
    validation : (value : any) => value is Type,
    filter : (value : Type) => boolean,
) : DeepPartial<Object> {

    let result : DeepPartial<Object> = <DeepPartial<Object>>{};

    for(const property in record) {

        const value : Type = <Type>record[property];

        if(validation(value)) {

            if(filter(value)) {

                // @ts-ignore
                result[property] = value;
            }

        } else if(Type(value)) {

            const results =  Filter(value, validation, filter);

            if(!Empty(results)) {

                result[property] = results;
            }
        }
    }

    return <DeepPartial<Object>> result;
}
