import Recursive from "./recursive";
import Map from "./map";
import Function from "@dikac/t-function/function";
import Fns from "@dikac/t-function/function-single";
/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 * {@param replace} is only called when {@param validation} result of value is true
 * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
 */
export default function MapCallback<Replace, Value, Key extends PropertyKey = PropertyKey, Object extends Recursive<Key, Value> = Recursive<Key, Value>>(object: Object, validation: Fns<any, boolean>, replace: Function<[Value, Key[]], Replace>, properties?: Key[]): Map<Replace, Value, Key, Object>;
