import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, RecordT extends Record<any, Validator<BaseT, ValueT>> = Record<any, Validator<BaseT, ValueT>>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableT extends Validatable = Validatable> implements Value<BaseT, ValueT, MessageT, RecordT, Result, ValidatableT> {
    validators: RecordT;
    handler: (base: BaseT, record: RecordT) => Result;
    validation: (result: Result) => ValidatableT;
    message: (result: Result) => MessageT;
    constructor(validators: RecordT, handler: (base: BaseT, record: RecordT) => Result, validation: (result: Result) => ValidatableT, message: (result: Result) => MessageT);
    validate<Argument extends ValueT>(argument: Argument): Replace<ValidatableValue<Argument, MessageT, RecordT, Result, ValidatableT>, true>;
    validate<Argument extends BaseT>(argument: Argument): Return<BaseT, Argument, ValueT, ValidatableValue<Argument, MessageT, RecordT, Result, ValidatableT>>;
}
