import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/base/record/infer";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import RecordBase from "./parameter/base/record/infer";
import RecordType from "./parameter/type/record/infer";
import Return from "@dikac/t-validator/validatable/simple";
import {O} from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import MapInterface from "../map";
import PartialUnion from "../partial-union";
import ValidateMap from "./return/record/record-value-partial";
import RecordValueCallback, {Interface} from "./record-value-callback";
import Union from "../union";
import MapReturn from "./return/record/infer";
import ValidateValuePartial from "./return/record/value-partial";

export default function RecordValuePartial<
    BaseT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    TypeT extends BaseT = BaseT,
    ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>> = Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> (
    validator : ValidatorT,
    validation : Function<[MapInterface<TypeT, ReturnInfer<ValidatorT>>], ValidatableT>,
    message : Function<[MapInterface<TypeT, ReturnInfer<ValidatorT>>], MessageT>,
) : Interface<BaseT, TypeT, ValidatorT, Union<MapInterface<TypeT, ReturnInfer<ValidatorT>>>, ValidatableT, MessageT>  {

    return new RecordValueCallback(
            validator,
        (value, validators)  => <Union<MapInterface<TypeT, ReturnInfer<ValidatorT>>>>  ValidateMap(value, validators),
        validation,
        message
    );
}
