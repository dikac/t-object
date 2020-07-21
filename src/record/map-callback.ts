import Function from "@dikac/t-function/function";
import {O} from "ts-toolbelt";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 * {@param replace} is only called when {@param validation} result of value is true
 * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
 */
export default function MapCallback<Replace, Value, Object extends Record<PropertyKey, Value> = Record<PropertyKey, Value>>(
    object : Object,
    replace : Function<[Value, keyof Object], Replace>,
) : O.Replace<Object, Value, Replace>  {

    let result = {};

    for(const property in object) {

        const value = object[property];

        result[<PropertyKey>property] = replace(value, property);
    }

    return <O.Replace<Object, Value, Replace>> result;
}

