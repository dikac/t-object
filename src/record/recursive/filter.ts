import Record from "./record";
import Empty from "../../boolean/empty";
import ObjectType from "../../boolean/object";
import Pair from "./iterable/pair";
import {O} from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";

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
    validation : Guard<any, Type>,
    filter : Fn<[Type], boolean>,
) : O.Partial<Object, 'deep'> {

    let pair = new Pair(record, validation);

    let result : O.Partial<Object, 'deep'> = <O.Partial<Object, 'deep'>>{};

    for(const property in record) {

        const value : Type = <Type>record[property];

        if(validation(value)) {

            if(filter(value)) {

                // @ts-ignore
                result[property] = value;
            }

        } else if(ObjectType(value)) {

            const results =  Filter(value, validation, filter);

            if(!Empty(results)) {

                result[property] = results;
            }
        }
    }

    return result;
}
