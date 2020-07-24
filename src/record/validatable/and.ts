import Validatable from "@dikac/t-validatable/validatable";
import AndBoolean from "../../validatable/record/boolean/and";
import Validatables from "./validatables";

export default function And<
    Record extends globalThis.Record<PropertyKey, Validatable>
>(
    validatable : Record
) : Validatables<Record, boolean> {

    return new Validatables(validatable, AndBoolean);
}
