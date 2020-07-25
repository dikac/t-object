import * as IsEmptyObject from "is-empty-object";
import Empty from "./empty";

/**
 * check if object is not empty (contain zero property & method)
 */
export default function NotEmpty(
    value : object
) : boolean {

    return !Empty(value);
}
