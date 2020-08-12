import Validatable from "@dikac/t-validatable/validatable";
import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";


export default function Or<
    Object extends Record<PropertyKey, Validatable>
>(
    validatable : Object
) : Validatables<Object, boolean> {

    return new Validatables(validatable, OrBoolean);
}
