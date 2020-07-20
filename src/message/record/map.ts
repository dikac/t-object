import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function";
import ValidatorType from "@dikac/t-message/boolean/message";
import Guard from "@dikac/t-function/boolean/guard";
import MapCallback from "../../record/map-callback";
import {O} from "ts-toolbelt";
import Map from "../../record/map";

// TODO RENAME TO MORE APPROPRIATE
export default function Map<
    Origin extends Message,
    Replace extends Message,
    Record extends globalThis.Record<PropertyKey, Origin>,
>(
    object : Record,
    callback : Fn<[Origin, keyof Record], Replace>,
) : /*O.Replace<Record, Origin, Replace> */ Map<Replace, Origin, Record> {

    return <Map<Replace, Origin, Record>> MapCallback(object, callback/*, properties*/)
}
