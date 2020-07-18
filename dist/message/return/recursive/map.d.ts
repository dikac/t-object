import Recursive from "../../../recursive/recursive";
import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./recursive";
export default function Map<Instance extends Recursive<PropertyKey, MessageInterface<unknown>>>(record: Instance): RecordInfer<Instance>;
