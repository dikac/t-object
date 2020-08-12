import Validatable from "@dikac/t-validatable/validatable";
import AndBoolean from "./record/boolean/and";
import Validatables from "./validatables";

export default function And<
    Object extends Record<PropertyKey, Validatable>
>(
    validatable : Object
) : Validatables<Object, boolean> {

    return new Validatables(validatable, AndBoolean);
}
