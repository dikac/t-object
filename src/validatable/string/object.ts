import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ObjectAssert from "../../assert/string/object";

export default function Object_(
    object : Readonly<Validatable>
) : string {

    return ObjectAssert(object.valid)
}
