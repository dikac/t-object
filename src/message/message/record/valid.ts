import ValidatableValid from "../../../validatable/record/valid";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import PartialUnion from "../../../partial-union";
import Map from "./map";
import RemoveUndefined from "../../../remove-undefined";


export default function Valid<
    Instance extends Record<keyof Instance, Message & Validatable>
>(
    record : Instance
) : PartialUnion<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableValid(record)));
}
