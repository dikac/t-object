import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./recursive";
export default function Map<Instance extends Record<PropertyKey, MessageInterface>>(record: Instance): RecordInfer<Instance>;
