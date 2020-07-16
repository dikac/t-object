import Pair from "../iterable/pair";
import PropertyType from "../key/boolean/key";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * check if {@param obj} is certain type of record
 * {@param value} use to validate object value
 * optionally {@param property} use to validate object property
 */
export default function Record<
    Value,
    Key extends string|number|symbol = string|number|symbol
>(
    obj : object,
    value : Guard<any, Value>,
    property : Guard<string|number|symbol, Key> = PropertyType,
) : obj is Record<Key, Value> {

    for(const [prop, val] of Pair(obj)) {

        if(!property(prop)) {

            return false;
        }

        if(!value(val)) {

            return false;
        }
    }

    return true;
}
