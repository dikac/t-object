import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import RecordInferPartial from "./infer-partial";
import MapCallbackGuard from "../../../map-callback";
import ValueMessage from "@dikac/t-message/message/value";

export default function Map<
    Instance extends Record<PropertyKey, Message> = Record<PropertyKey, Message>
>(record : Instance) : RecordInfer<Instance>

export default function Map<
    Instance extends Partial<Record<PropertyKey, Message>> = Partial<Record<PropertyKey, Message>>,
>(record : Instance) : RecordInferPartial<Instance>

export default function Map<
    Instance extends Record<PropertyKey, Message> = Record<PropertyKey, Message>
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallbackGuard(record, ValueMessage);
}
