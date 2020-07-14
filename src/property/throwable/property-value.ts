import PropertyValueArgument from "../../boolean/string/property-value";
import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";

export default function PropertyValue(data : PropertyInterface & Value<string>) : Error {

    return new Error(
        PropertyValueArgument(false, data.property, data.value)
    );
}
