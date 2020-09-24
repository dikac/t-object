import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
export default function Valid<Instance extends Record<PropertyKey, Message & Validatable>>(record: Instance): Partial<RecordInfer<Instance>>;
