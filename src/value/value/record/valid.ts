import ValidatableValid from "../../../validatable/record/valid";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import RecordInfer from "./infer";
import PartialUnion from "../../../partial-union";
import Map from "./map";
import RemoveUndefined from "../../../omit-undefined";


export default function Valid<
    Instance extends Record<PropertyKey, Value & Validatable>
>(
    record : Instance
) : PartialUnion<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableValid(record)));
}
