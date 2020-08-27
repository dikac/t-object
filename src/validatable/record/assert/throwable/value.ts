import ValueMessage from "../../boolean/string/value";

export default function Value(
    property: PropertyKey,
    error : (property:string)=>Error = (property : string)=>new Error(property)
) : Error {

    return error(ValueMessage(false, property))
}
