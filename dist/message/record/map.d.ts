import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function";
import Map from "../../record/map";
export default function Map<Origin extends Message, Replace extends Message, Record extends globalThis.Record<PropertyKey, Origin>>(object: Record, callback: Fn<[Origin, keyof Record], Replace>): Map<Replace, Origin, Record>;
