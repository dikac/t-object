import Validatable from "@dikac/t-validatable/validatable";
import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";

// TODO ADD SPEC FOR PARTIAL
export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatable : Object
) : Validatables<Object, boolean> {

    return new Validatables(validatable, OrBoolean);
}
