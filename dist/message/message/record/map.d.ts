import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import RecordInferPartial from "./infer-partial";
//export default function Map<Instance extends Record<PropertyKey, Message> = Record<PropertyKey, Message>>(record: Instance): RecordInfer<Instance>;
export default function Map<Instance extends Partial<Record<PropertyKey, Message>> = Record<PropertyKey, Message>>(record: Instance): RecordInferPartial<Instance>;
