import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ValidatableValueCallback from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Return from "@dikac/t-validator/return/return";
import Value from "@dikac/t-value/value";
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, RecordT extends Record<PropertyKey, Validator<BaseT, ValueT>> = Record<PropertyKey, Validator<BaseT, ValueT>>, Result extends Record<PropertyKey, Validatable & Message & Value> = Record<PropertyKey, Validatable & Message & Value>, ValidatableT extends Validatable = Validatable> implements Validator<BaseT, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>> {
    validators: RecordT;
    handler: Function<[BaseT, RecordT], Result>;
    validation: Function<[Result], ValidatableT>;
    message: Function<[Result], MessageT>;
    constructor(validators: RecordT, handler: Function<[BaseT, RecordT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValueCallback<BaseT, MessageT, RecordT, Result, ValidatableT>>;
}
