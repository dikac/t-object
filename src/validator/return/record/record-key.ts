import ValidatorType from "@dikac/t-validator/boolean/validator";
import ValidatableRecord from "./infer";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import MapInterface from "../../../map";
import InferType from "@dikac/t-validator/type/infer";

import {O} from "ts-toolbelt";
import And from "../../../validatable/and";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../../message/message/record/map";
import InferMessageMap from "../../../message/message/record/infer";
import MessageInfer from "@dikac/t-message/message/infer";
import RecordBaseInfer from "../../parameter/base/record/infer";
import RecordTypeInfer from "../../parameter/type/record/infer";
import RecordReturnInfer from "../../return/record/infer";
import RecordBase from "../../parameter/base/record/infer";
import RecordType from "../../parameter/type/record/infer";
import ValidatableMapCallback from "../../../validatable/map-callback";
import ReturnInfer from "./infer";
import Return from "@dikac/t-validator/validatable/infer";

export default function RecordValue<
    RecordT extends Record<PropertyKey, any>,
    Value extends Validator<keyof RecordT>,
    >(
    object : RecordT,
    value : Value,
) : MapInterface<RecordT, Return<Value>>  {

    let result = {};

    for(const k of Object.values(object)) {

        result[k] = value.validate(k)
    }

    return < MapInterface<RecordT, Return<Value>>> result;
}
