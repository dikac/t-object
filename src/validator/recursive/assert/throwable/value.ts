import New from "@dikac/t-function/new";
import ValueMessage from "../../boolean/string/value";
import Function from "@dikac/t-function/function";

export default function Value(
    property: PropertyKey,
    error : Function<[string], Error> = New(Error)
) : Error {

    return error(ValueMessage(false, property))
}
