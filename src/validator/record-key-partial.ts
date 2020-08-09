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
import ValidateRecordKeyPartial from "./return/record/record-key-partial";
import RecordKeyCallback, {Interface} from "./record-key-callback";
import Union from "../union";

export default function RecordKeyPartial<
    BaseT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    TypeT extends BaseT = BaseT,
    ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>> = Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validator : ValidatorT,
    validation : Function<[Union<MapInterface<TypeT, ReturnInfer<ValidatorT>>>], ValidatableT>,
    message : Function<[Union<MapInterface<TypeT, ReturnInfer<ValidatorT>>>], MessageT>,
) : Interface<BaseT, TypeT, ValidatorT, Union<MapInterface<TypeT, ReturnInfer<ValidatorT>>>, ValidatableT, MessageT> {

    return new RecordKeyCallback(
        validator,
        (value, validators)  => <Union<MapInterface<TypeT, ReturnInfer<ValidatorT>>>> ValidateRecordKeyPartial(value, validators),
        validation,
        message
    );
}
