import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import PropertyValueArgument from "../../../assert/string/value";

export default function Value(data : PropertyInterface & Value<string> & Validatable) : string {

    return PropertyValueArgument(data.valid, data.property, data.value);
}
