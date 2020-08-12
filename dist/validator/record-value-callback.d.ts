import SimpleValidator from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/type/infer";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
export declare type Interface<ValidatorT extends Validator, Result extends Record<PropertyKey, Instance>, ValidatableT extends Validatable, MessageT> = SimpleValidator<Record<PropertyKey, InferBase<ValidatorT>>, Record<PropertyKey, InferType<ValidatorT>>, ValidatableRecordCallback<MessageT, Record<PropertyKey, InferBase<ValidatorT>>, ValidatorT, Result, ValidatableT>> & ValidatorContainer<ValidatorT> & Message<Function<[Result], MessageT>> & Validation<Function<[Result], ValidatableT>>;
export default class RecordValueCallback<ValidatorT extends Validator = Validator, Result extends Record<PropertyKey, Instance> = Record<PropertyKey, Instance>, ValidatableT extends Validatable = Validatable, MessageT = unknown> implements Interface<ValidatorT, Result, ValidatableT, MessageT> {
    validator: ValidatorT;
    handler: Function<[Record<PropertyKey, InferBase<ValidatorT>>, ValidatorT], Result>;
    validation: Function<[Result], ValidatableT>;
    message: Function<[Result], MessageT>;
    constructor(validator: ValidatorT, handler: Function<[Record<PropertyKey, InferBase<ValidatorT>>, ValidatorT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
    validate<Argument extends Record<PropertyKey, InferType<ValidatorT>>>(argument: Argument): Replace<ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>, true>;
    validate<Argument extends Record<PropertyKey, InferBase<ValidatorT>>>(argument: Argument): Return<Record<PropertyKey, InferBase<ValidatorT>>, Argument, Record<PropertyKey, InferType<ValidatorT>>, ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>>;
}
