import Recursive from "./recursive";
import Map from "./map";
import Function from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";
import MapCallback from "./map-callback";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 * {@param replace} is only called when {@param validation} result of value is true
 * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
 */
export default function MapCallbackGuard<Replace, Value, Key extends PropertyKey = PropertyKey, Object extends Recursive<Key, Value> = Recursive<Key, Value>>(
    object : Object,
    validation : Guard<any, Value>,
    replace : Function<[Value], Replace>
) : Map<Replace, Value, Key, Object> {

   return MapCallback(object, validation, replace);
}

