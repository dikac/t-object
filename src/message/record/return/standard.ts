import Record from "../../../record/record";
import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./return";
import MapCallback from "../../../record/map-callback";
import MessageGuard from "@dikac/t-message/boolean/message";
import ValueMessage from "@dikac/t-message/infer/value";


export default function Standard<
    Instance extends Record<PropertyKey, MessageInterface<unknown>>
>(record : Instance) : RecordInfer<Instance> {

    return MapCallback(record, MessageGuard, ValueMessage);
}
