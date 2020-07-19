import Empty from "../boolean/empty";
import Recursive from "./recursive";
import Map from "./map";
import ValueValidation from "../assert/throwable/value-validation";
import Name from "../string/name";
import Function from "@dikac/t-function/function";
import Fns from "@dikac/t-function/function-single";
import ObjectType from "../boolean/object";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 * {@param replace} is only called when {@param validation} result of value is true
 * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
 */
export default function MapCallback<Replace, Value, Key extends PropertyKey = PropertyKey, Object extends Recursive<Key, Value> = Recursive<Key, Value>>(
    object : Object,
    validation : Fns<any, boolean>,
    replace : Function<[Value, Key[]], Replace>,
    properties : Key[] = []
) : Map<Replace, Value, Key, Object> {

    let result = {};

    for(const property in object) {

        const value = object[property];

        let props : PropertyKey[] = [...properties, property];

        if(validation(value)) {

            result[<PropertyKey>property] = replace(<any>value, <Key[]>props);

        } else if(ObjectType<Object>(value)) {

            const val = MapCallback(<any>value, validation, replace, props);

            if(!Empty(val)) {

                result[<PropertyKey>property] = val;
            }

        } else {

            throw ValueValidation(property, 'valid', Name(validation))
        }
    }

    return <Map<Replace, Value, Key, Object>> result;
}

