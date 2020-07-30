import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function";
import MapInterface from "../../map";
import PartialMapInterface from "../../map-partial";
export default function Map<Origin extends Message, Replace extends Message, Object extends Record<PropertyKey, Origin>>(object: Object, callback: Fn<[Origin, keyof Object], Replace>): MapInterface<Object, Replace>;
export default function Map<Origin extends Message, Replace extends Message, Object extends Partial<Record<PropertyKey, Origin>>>(object: Object, callback: Fn<[Origin | undefined, keyof Object], Replace>): PartialMapInterface<Object, Replace>;
