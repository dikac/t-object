import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ObjectAssert from "../../boolean/string/object";

export default function Object_(object : Readonly<Value & Validatable>) : string {

    return ObjectAssert(object.valid, object.value)
}
