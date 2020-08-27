import MemoizeGetter from "./memoize-getter";
import {O} from "ts-toolbelt";
import {Required} from "utility-types";

/**
 * set return from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param factory
 */
export default function MemoizeGetterBind<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key]
) : O.Readonly<Required<This, Key>>

export default function MemoizeGetterBind<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : ()=>Type
) : Omit<This, Key> & O.Readonly<Record<Key, Type>>

export default function MemoizeGetterBind<
    This extends object,
    Type
>(
    object : This,
    property : PropertyKey,
    factory : ()=>Type
) {

    return Object.defineProperty(object, property, {
        configurable : true,
        get() {
            return MemoizeGetter(object, <keyof This>property, factory());
        }
    });
}
