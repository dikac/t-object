import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import MapCallbackGuard from "../../../map-callback";
import ValueMessage from "@dikac/t-message/message/value";

export default function Map<
    Instance extends Record<PropertyKey, Message>
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallbackGuard(record, ValueMessage);
}
