import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import PartialUnion from "../../../partial-union";
export default function Valid<Instance extends Record<PropertyKey, Message & Validatable>>(record: Instance): PartialUnion<RecordInfer<Instance>>;
