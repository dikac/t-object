/**
 * Calls {@param replace} on each property value from {@param object}
 *
 * {@template Replace} type of replace result
 *
 */
export default function MapKeyCallback<
    Object extends object,
    Replace extends PropertyKey = PropertyKey,
>(
    object : Object,
    replace : (key : keyof Object, value : Object[keyof Object])=> Replace,
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
    replace : (key : keyof Object, value : Value|undefined)=> Replace,
) : Partial<Record<Replace, Value>>;

export default function MapKeyCallback<
    Object extends object,
    Replace extends PropertyKey = PropertyKey,
>(
    object : Object,
    replace : (key : keyof Object, value : Object[keyof Object])=> Replace,
) : Record<Replace, Object[keyof Object]> | Partial<Record<Replace, Object[keyof Object]>> {

    let result = {};

    for(const property in object) {

        const value = object[property];

        result[<PropertyKey>replace(property, value)] = value;
    }

    return <Partial<Record<Replace, Object[keyof Object]>>> result;
}

