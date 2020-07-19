import Recursive from "../../recursive/recursive";
import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function";
import Map from "../../recursive/map";
import Guard from "@dikac/t-function/boolean/guard";
export default function Property<Msg extends Message, Orig extends Message, Record extends Recursive<PropertyKey, Orig>>(object: Record, callback: Fn<[Orig, PropertyKey[]], Msg>, validation?: Guard<unknown, Orig>, properties?: PropertyKey[]): Map<Msg, Orig, PropertyKey, Record>;