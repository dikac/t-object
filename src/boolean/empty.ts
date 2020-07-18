import * as IsEmptyObject from "is-empty-object";

/**
 * check if object is empty (contain zero property & method)
 */
export default function Empty(
    value : object,
    empty : boolean = true
) : boolean {

    return IsEmptyObject(value) === empty;
}
