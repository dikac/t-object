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
    Type extends O.UnionOf<Object>,
    Object extends Record<PropertyKey, any>
>(
    record : Object,
    filter : Guard<O.UnionOf<Object>, Type, [keyof Object]>,
) : O.Select<Object, Type>;

export default function Filter<
    Object extends Record<PropertyKey, unknown>
>(
    record : Object,
    filter : Fn<[O.UnionOf<Object>, keyof Object], boolean>,
) : Partial<Object>;

export default function Filter<
    Type,
    Object extends Record<PropertyKey, Type> = Record<PropertyKey, Type>
>(
    record : Object,
    filter : Fn<[Type, keyof Object], boolean>,
) : Partial<Object> | O.Select<Object, Type>{

    let result = {};

    for(const property in record) {

        const value : Type = <Type>record[property];

        if(filter(value, <keyof Object>property)) {

            result[<PropertyKey>property] = value;
        }
    }

    return result;
}
