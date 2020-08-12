import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";

export type Interface<
    BaseT extends Record<PropertyKey, unknown>,
    TypeT extends BaseT,
    ValidatorT extends Validator<keyof BaseT, keyof TypeT>,
    Result extends Record<PropertyKey, Validatable>,
    ValidatableT extends Validatable,
    MessageT,
> = SimpleValidator<
    BaseT,
    TypeT,
    ValidatableRecordCallback<
        MessageT,
        BaseT,
        ValidatorT,
        Result,
        ValidatableT
        >
    > &
    ValidatorContainer<ValidatorT> &
    Message<Function<[Result], MessageT>> &
    Validation<Function<[Result], ValidatableT>>
    ;

export default class RecordCallbackClass<
    BaseT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    TypeT extends BaseT = BaseT,
    ValidatorT extends Validator<keyof BaseT, keyof TypeT> = Validator<keyof BaseT, keyof TypeT>,
    Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> implements Interface<BaseT, TypeT, ValidatorT, Result, ValidatableT, MessageT> {

    constructor(
        public validator : ValidatorT,
        public handler : Function<[BaseT, ValidatorT], Result>,
        public validation : Function<[Result], ValidatableT>,
        public message : Function<[Result], MessageT>
    ) {
    }

    validate<Argument extends TypeT>(
        argument: Argument
    ) : Replace<ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>, true>

    validate<Argument extends BaseT>(
        argument: Argument
    ) : Return<BaseT, Argument, TypeT, ValidatableRecordCallback<MessageT, BaseT, ValidatorT, Result, ValidatableT>>

    validate<Argument extends BaseT>(
        argument: Argument
    ) {

        return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message) as
            Return<BaseT, Argument, TypeT, ValidatableRecordCallback<MessageT, BaseT, ValidatorT, Result, ValidatableT>>;
    }
}



