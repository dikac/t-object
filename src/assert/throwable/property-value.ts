import PropertyValueMessage from "../../boolean/string/property-value";

export default function PropertyValue(property : PropertyKey, type : string) : Error {

    return new Error(PropertyValueMessage(false, property, type))
}
