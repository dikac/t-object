import Record from "../../../record/record";
import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./return";
export default function Standard<Instance extends Record<PropertyKey, MessageInterface<unknown>>>(record: Instance): RecordInfer<Instance>;
