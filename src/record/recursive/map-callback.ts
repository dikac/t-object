import Type from "../../boolean/type";
import Empty from "../../boolean/empty";
import Record from "./record";
import PropertyActual from "../../message/string/property-actual";
import Map from "./map";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 * {@param replace} is only called when {@param validation} result of value is true
 * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
 */
export default function MapCallback<Replace, Value, Key extends keyof any = keyof any, Object extends Record<Key, Value> = Record<Key, Value>>(
    object : Object,
    validation : (value : any) => value is Value,
    replace : (value : Value) => Replace
) : Map<Replace, Value, Key, Object> {

    let result : Map<Replace, Value, Key, Object> = <Map<Replace, Value, Key, Object>>{};

    for(let property in object) {

        const value = object[property];

        if(validation(value)) {

            // @ts-ignore
            result[property] = replace(value);

        } else if(Type(value)) {

            // @ts-ignore
            const val = MapCallback(value, validation, replace);

            if(!Empty(val)) {


                result[property] = val;
            }

        } else {


            throw new Error(PropertyActual(property, 'valid against validation', result[property] + ''))
        }
    }

    return result;
}

