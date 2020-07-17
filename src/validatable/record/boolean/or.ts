import Record from "../../..//record/record";
import Empty from "../../../boolean/empty";
import Valid from "../valid";
import Validatable from "@dikac/t-validatable/validatable";

export default function And<
    Object extends Record<PropertyKey, Validatable>
>(object : Object) : boolean {

    return !Empty(Valid(object));
}
