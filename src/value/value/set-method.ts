/**
 * set {@param value} for getter value for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param value
 * value tobe memoized
 *
 * @param writable
 *
 * @param configurable {@default true}
 */
export default function SetMethod<
    This extends object,
    Type,
>(
    object : This,
    property : keyof This,
    value : Type,
    writable : boolean = true,
    configurable : boolean = true,
) : Type {

    return Object.defineProperty(object, property, {
        value : ()=>value,
        writable : writable,
        configurable : configurable
    })[property]();
}
