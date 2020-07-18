import Recursive from "../../../recursive/recursive";
import Empty from "../../../boolean/empty";
import Invalid from "../invalid";
import Validatable from "@dikac/t-validatable/validatable";

export default function And<
    Object extends Recursive<PropertyKey, Validatable>
>(object : Object) : boolean {

    return Empty(Invalid(object));
}
