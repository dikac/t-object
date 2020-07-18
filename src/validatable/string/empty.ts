import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import AssertEmpty from "../../boolean/string/empty";

export default function Empty(object : Readonly<Value<object> & Validatable>) : string {

    return AssertEmpty(object.valid, object.value)
}
