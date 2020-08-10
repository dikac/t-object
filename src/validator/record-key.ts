import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import {O} from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import ValidateRecordKey from "./validatable/record/record-key";
import RecordKeyCallback, {Interface} from "./record-key-callback";

export default function RecordKey<
    BaseT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    TypeT extends BaseT = BaseT,
    ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>> = Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validator : ValidatorT,
    validation : Function<[Record<any, ReturnInfer<ValidatorT>>], ValidatableT>,
    message : Function<[Record<any, ReturnInfer<ValidatorT>>], MessageT>,
) : Interface<BaseT, TypeT, ValidatorT, Record<any, ReturnInfer<ValidatorT>>, ValidatableT, MessageT> {

    return new RecordKeyCallback(
        validator,
        ValidateRecordKey,
        validation,
        message
    );
}














