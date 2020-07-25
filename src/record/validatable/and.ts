import Validatable from "@dikac/t-validatable/validatable";
import AndBoolean from "../../validatable/record/boolean/and";
import Validatables from "./validatables";

export default function And<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatable : Object
) : Validatables<Object, boolean> {

    return new Validatables(validatable, AndBoolean);
}
