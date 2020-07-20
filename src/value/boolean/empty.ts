import Value from "@dikac/t-value/value";
import EmptyArgument from "../../boolean/empty";


export default function Empty(
    object : Value<object> & {empty : boolean},
) : boolean {

    return EmptyArgument(object.value, object.empty)
}
