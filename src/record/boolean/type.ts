import PropertyValue from "../../iterable/property-value";
import PropertyType from "../../property/boolean/type";

/**
 * check if {@param obj} is certain type of record
 * {@param value} use to validate object value
 * optionally {@param property} use to validate object property
 */
export default function Type<
    Value,
    Key extends string|number|symbol = string|number|symbol
>(
    obj : object,
    value : (value : any) => value is Value,
    property : (value : string|number|symbol) => value is Key = PropertyType,
) : obj is Record<Key, Value> {

    for(const [prop, val] of PropertyValue(obj)) {

        if(!property(prop)) {

            return false;
        }

        if(!value(val)) {

            return false;
        }
    }

    return true;
}
