import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import MapInterface from "../../../map";
import InferType from "@dikac/t-validator/type/infer";
import {O} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer";

export default function RecordValue<
    RecordType extends Record<PropertyKey, any>,
    Value extends Validator<O.UnionOf<RecordType>>,
>(
    object : RecordType,
    value : Value,
) : PartialUnion<MapInterface<RecordType, Return<Value>>>  {

    let result = {};

    for(const [k, v] of Object.entries(object)) {

        const pair = value.validate(<InferType<Value>>v);

        result[k] = pair

        if(!pair.valid) {

            return result;
        }
    }

    return  result;
}
