import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./infer";
export default function Map<Instance extends Record<PropertyKey, MessageInterface>>(record: Instance): RecordInfer<Instance>;
