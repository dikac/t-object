import Empty from "../boolean/empty";
import Record from "./record";
import Map from "./map";
import ValueValidation from "../assert/throwable/value-validation";
import Name from "../string/name";
import Function from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";

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
    validation : Guard<any, Value>,
    replace : Function<[Value], Replace>
) : Map<Replace, Value, Key, Object> {

    let result : Map<Replace, Value, Key, Object> = <Map<Replace, Value, Key, Object>>{};


    for(const property in object) {

        const value = object[property];

        if(validation(value)) {

            // @ts-ignore
            result[property] = replace(value);

        } else if(Object(value)) {

            // @ts-ignore
            const val = MapCallback(value, validation, replace);

            if(!Empty(val)) {

                // @ts-ignore
                result[property] = val;
            }

        } else {

            throw ValueValidation(property, 'valid', Name(validation))
        }
    }

    return result;
}

