import Function from "@dikac/t-function/function";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 */
export default function MapKeyCallback<
    Object extends object,
    Replace extends PropertyKey = PropertyKey,
>(
    object : Object,
    replace : Function<[keyof Object, Object[keyof Object]], Replace>,
) : Record<Replace, Object[keyof Object]>;
/**
 * support for partial type
 */
export default function MapKeyCallback<
    Object extends Partial<object>,
    Replace extends PropertyKey = PropertyKey,
    Value = unknown,
>(
    object : Object,
    replace : Function<[keyof Object, Value|undefined], Replace>,
) : Partial<Record<Replace, Value>>;

export default function MapKeyCallback<
    Object extends object,
    Replace extends PropertyKey = PropertyKey,
>(
    object : Object,
    replace : Function<[keyof Object, Object[keyof Object]], Replace>,
) : Record<Replace, Object[keyof Object]> | Partial<Record<Replace, Object[keyof Object]>> {

    let result = {};

    for(const property in object) {

        const value = object[property];

        result[<PropertyKey>replace(property, value)] = value;
    }

    return <Partial<Record<Replace, Object[keyof Object]>>> result;
}

