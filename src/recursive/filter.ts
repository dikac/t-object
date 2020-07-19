import Recursive from "./recursive";
import Empty from "../boolean/empty";
import ObjectType from "../boolean/object";
import {O} from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Fns from "@dikac/t-function/function-single";

/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
 * recursively
 */
export default function Filter<
    Type,
    Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>
>(
    record : Object,
    validation : Fns<any, boolean>,
    filter : Fn<[Type], boolean>,
) : O.Partial<Object, 'deep'> {

    let result = {};

    for(const property in record) {

        const value : Type = <Type>record[property];

        if(validation(value)) {

            if(filter(value)) {

                result[<PropertyKey>property] = value;
            }

        } else if(ObjectType<Object>(value)) {

            const results =  Filter(value, validation, filter);

            if(!Empty(results)) {

                result[<PropertyKey>property] = results;
            }
        }
    }

    return result;
}
