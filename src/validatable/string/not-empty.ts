import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotEmptyParameter from "../../assert/string/not-empty";

export default function NotEmpty(object : Readonly<Value<object> & Validatable>) : string {

    return NotEmptyParameter(object.valid, object.value)
}
