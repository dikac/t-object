import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/return/return";
import Value from "@dikac/t-value/value";

export default class ValueCallbackz<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    Container extends Record<PropertyKey, Validator<BaseT, ValueT>> = Record<PropertyKey, Validator<BaseT, ValueT>>,
    Result extends Record<PropertyKey, ValidatableInterface & Message & Value> = Record<PropertyKey, ValidatableInterface & Message & Value>,
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    BaseT,
    ValueT,
    ValidatableValueCallback<BaseT, MessageT, Container, Result, Validatable>
> {
    constructor(
        public validators : Container,
        public handler : Function<[BaseT, Container], Result>,
        public validation : Function<[Result], Validatable>,
        public message : Function<[Result], MessageT>
    ) {
    }

    validate<Argument extends BaseT>(argument: Argument) : Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, Result, Validatable>> {

        return <Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, Container, Result, Validatable>>>
            new ValidatableValueCallback(argument, this.validators, this.handler, this.validation, this.message);
    }
}
