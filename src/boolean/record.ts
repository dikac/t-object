import Guard from "@dikac/t-function/boolean/guard";

/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */

export default function Record<
    Value
>(
    object : object,
    value : Guard<unknown, Value>,
) : object is Record<PropertyKey, Value>;

export default function Record<
    Value,
    Key extends PropertyKey = PropertyKey
>(
    object : object,
    value : Guard<unknown, Value>,
    property : Guard<PropertyKey, Key>
) : object is Record<Key, Value>;

export default function Record<
    Value,
    Key extends PropertyKey = PropertyKey
>(
    object : object,
    value : Guard<unknown, Value>,
    property ?: Guard<PropertyKey, Key>
) : object is Record<Key, Value> {

    for(const [prop, val] of Object.entries(object)) {

        if(property) {

            if(!property(prop)) {

                return false;
            }
        }

        if(!value(val)) {

            return false;
        }
    }

    return true;
}
