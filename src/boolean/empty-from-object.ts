import Value from "@dikac/t-value/value";
import Empty from "./empty";


export default function EmptyFromObject(
    object : Value<object> & {empty : boolean},
) : boolean {

    return Empty(object.value, object.empty)
}
