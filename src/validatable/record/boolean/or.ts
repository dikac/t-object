import Record from "@dikac/t-object/record/recursive/record";
import Empty from "@dikac/t-object/boolean/empty";
import Valid from "../valid";
import Validatable from "@dikac/t-validatable/validatable";

export default function And<
    Object extends Record<PropertyKey, Validatable>
>(object : Object) : boolean {

    return !Empty(Valid(object));
}
