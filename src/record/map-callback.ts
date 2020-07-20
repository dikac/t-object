import Empty from "../boolean/empty";
import ValueValidation from "../assert/throwable/value-validation";
import Name from "../string/name";
import Function from "@dikac/t-function/function";
import Fns from "@dikac/t-function/function-single";
import ObjectType from "../boolean/object";
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
   // properties : (keyof Object)[] = []
) : O.Replace<Object, Value, Replace> /*Map<Replace, Value, Object>*/ {

    let result = {};

    for(const property in object) {

        const value = object[property];

       // let props : PropertyKey[] = [...properties, property];

        result[<PropertyKey>property] = replace(value, property);

        // if(validation(value)) {
        //
        //
        //
        // } else if(ObjectType<Object>(value)) {
        //
        //     const val = MapCallback(<any>value, validation, replace, props);
        //
        //     if(!Empty(val)) {
        //
        //         result[<PropertyKey>property] = val;
        //     }
        //
        // } else {
        //
        //     throw ValueValidation(property, 'valid', Name(validation))
        // }
    }

    return <O.Replace<Object, Value, Replace>> result;
}

