import Empty from "../../../boolean/empty";
import Invalid from "../invalid";
import Validatable from "@dikac/t-validatable/validatable";
import OmitUndefined from "../../../omit-undefined";

export default function And<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(object : Object) : boolean {

    return Empty(Invalid(OmitUndefined(object)));
}
