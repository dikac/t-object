import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function";
import MapCallback from "../../record/map-callback";
import Map from "../../record/map";

export default function Map<
    Origin extends Message,
    Replace extends Message,
    Record extends globalThis.Record<PropertyKey, Origin>,
>(
    object : Record,
    callback : Fn<[Origin, keyof Record], Replace>,
) : Map<Record, Origin, Replace> {

    return <Map<Record, Origin, Replace>> MapCallback(object, callback)
}
