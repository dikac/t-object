import Function from "@dikac/t-function/function";
import {O} from "ts-toolbelt";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 */
export default function MapCallback<
    Object extends Record<PropertyKey, Value>,
    Value = unknown,
    Replace = unknown
>(
    object : Object,
    replace : Function<[Value, keyof Object], Replace>,
) : O.Replace<Object, Value, Replace>;

export default function MapCallback<
    Object extends Partial<Record<PropertyKey, Value>>,
    Value = unknown,
    Replace = unknown
>(
    object : Object,
    replace : Function<[Value|undefined, keyof Object], Replace>,
) : Partial<O.Replace<Object, Value, Replace>>;

export default function MapCallback<
    Object extends Record<PropertyKey, Value>,
    Value = unknown,
    Replace = unknown
>(
    object : Object,
    replace : Function<[Value, keyof Object], Replace>,
) : O.Replace<Object, Value, Replace> | Partial<O.Replace<Object, Value, Replace>> {

    let result = {};

    for(const property in object) {

        const value = object[property];

        result[<PropertyKey>property] = replace(value, property);
    }

    return <O.Replace<Object, Value, Replace>> result;
}

