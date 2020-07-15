import PropertyValueArgument from "../../boolean/string/value";
import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";

export default function Value(data : PropertyInterface & Value<string>) : Error {

    return new Error(
        PropertyValueArgument(false, data.property, data.value)
    );
}
