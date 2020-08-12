import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
export default function Map<Instance extends Record<PropertyKey, Message>>(record: Instance): RecordInfer<Instance>;
