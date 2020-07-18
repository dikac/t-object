import Recursive from "../../../recursive/recursive";
import MessageInterface from "@dikac/t-message/message";
import RecordInfer from "./recursive";
import MapCallback from "../../../recursive/map-callback";
import MessageGuard from "@dikac/t-message/boolean/message";
import ValueMessage from "@dikac/t-message/infer/value";


export default function Map<
    Instance extends Recursive<PropertyKey, MessageInterface<unknown>>
>(record : Instance) : RecordInfer<Instance> {

    return MapCallback(record, MessageGuard, ValueMessage);
}
