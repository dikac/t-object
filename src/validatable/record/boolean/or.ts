import Empty from "../../../boolean/empty";
import Valid from "../valid";
import Validatable from "@dikac/t-validatable/validatable";
import OmitUndefined from "../../../omit-undefined";

export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(object : Object) : boolean {

    return !Empty(Valid(OmitUndefined(object)));
}
