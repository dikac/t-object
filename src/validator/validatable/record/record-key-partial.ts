import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import MapInterface from "../../../map";

import Return from "@dikac/t-validator/validatable/infer";

export default function RecordVKeyPartial<
    RecordT extends Record<PropertyKey, any>,
    Value extends Validator<keyof RecordT>,
>(
    object : RecordT,
    value : Value,
) : PartialUnion<MapInterface<RecordT, Return<Value>>> {

    let result = {};

    for(const k of Object.keys(object)) {

        const pair = value.validate(k);

        result[k] = pair

        if(!pair.valid) {

            return result;
        }
    }

    return  result;
}
