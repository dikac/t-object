import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./recursive";
import MapCallbackGuard from "../../../recursive/map-callback";
import MessageGuard from "@dikac/t-message/boolean/message";
import ValueMessage from "@dikac/t-message/return/value";


export default function Map<
    Instance extends Record<PropertyKey, MessageInterface>
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallbackGuard(record, ValueMessage);
}
