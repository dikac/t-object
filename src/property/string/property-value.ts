import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import PropertyValueArgument from "../../boolean/string/property-value";

export default function PropertyValue(data : PropertyInterface & Value<string> & Validatable) : string {

    return PropertyValueArgument(data.valid, data.property, data.value);
}
