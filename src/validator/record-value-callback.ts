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

export type Interface<
    ValidatorT extends Validator,
    Result extends Record<keyof Result, Instance>,
    ValidatableT extends Validatable ,
    MessageT,
> =
    SimpleValidator<
        Record<any, InferBase<ValidatorT>>,
        Record<any, InferType<ValidatorT>>,
        ValidatableRecordCallback<MessageT, Record<any, InferBase<ValidatorT>>, ValidatorT, Result, ValidatableT>> &
    ValidatorContainer<ValidatorT> &
    Message<Function<[Result], MessageT>> &
    Validation<Function<[Result], ValidatableT>>

export default class RecordValueCallback<
    ValidatorT extends Validator = Validator,
    Result extends Record<any, Instance> = Record<any, Instance>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> implements Interface<ValidatorT, Result, ValidatableT, MessageT> {
    constructor(
        public validator : ValidatorT,
        public handler : Function<[Record<any, InferBase<ValidatorT>>, ValidatorT], Result>,
        public validation : Function<[Result], ValidatableT>,
        public message : Function<[Result], MessageT>
    ) {
    }

    validate<Argument extends Record<any, InferType<ValidatorT>>>(argument: Argument)
        : Replace<ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>, true>

    validate<Argument extends Record<any, InferBase<ValidatorT>>>(argument: Argument)
        : Return<Record<any, InferBase<ValidatorT>>, Argument, Record<any, InferType<ValidatorT>>, ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>>

    validate<Argument extends Record<any, InferBase<ValidatorT>>>(argument: Argument) {

        return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message);
    }
}



