import PropertyValueMessage from "../../boolean/string/value";

export default function Value(property : PropertyKey, type : string) : Error {

    return new Error(PropertyValueMessage(false, property, type))
}
