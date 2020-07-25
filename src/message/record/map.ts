import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function";
import MapCallback from "../../record/map-callback";
import MapInterface from "../../record/map";
import PartialMapInterface from "../../record/map-partial";


export default function Map<
    Origin extends Message,
    Replace extends Message,
    Object extends Record<PropertyKey, Origin>,
    >(
    object : Object,
    callback : Fn<[Origin, keyof Object], Replace>,
): MapInterface<Object, Replace>;

export default function Map<
    Origin extends Message,
    Replace extends Message,
    Object extends Partial<Record<PropertyKey, Origin>>,
>(
    object : Object,
    callback : Fn<[Origin|undefined, keyof Object], Replace>,
): PartialMapInterface<Object, Replace>;


export default function Map<
    Origin extends Message,
    Replace extends Message,
    Object extends Record<PropertyKey, Origin>|Partial<Record<PropertyKey, Origin>>,
>(
    object : Object,
    callback : Fn<[Origin|undefined, keyof Object], Replace>,
) : MapInterface<Object, Replace>|PartialMapInterface<Object, Replace> {

    return <MapInterface<Object, Replace>> MapCallback(object, callback)
}
