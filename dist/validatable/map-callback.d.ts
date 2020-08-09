import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import RecordParameter from "../validator/parameter/base/record/infer";
import RecordBase from "../validator/parameter/base/record/infer";
import Instance from "@dikac/t-validator/validatable/instance";
export declare type Interface<MessageT, ValidatorsT extends Record<any, Validator>, Result extends Record<any, Instance>, ValidatableT extends Validatable, ValueT extends RecordBase<ValidatorsT>> = Value<ValueT> & Validatable & Validatables<Result> & Message<MessageT> & ValidatableContainer<ValidatableT> & {
    messages: Result;
} & {
    validation: Function<[Result], ValidatableT>;
} & {
    handler: Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>;
} & {
    validators: ValidatorsT;
};
export default class ValueCallback<MessageT = unknown, ValidatorsT extends Record<any, Validator> = Record<PropertyKey, Validator>, Result extends Record<any, Instance> = Record<PropertyKey, Instance>, ValidatableT extends Validatable = Validatable, ValueT extends RecordBase<ValidatorsT> = RecordBase<ValidatorsT>> implements Interface<MessageT, ValidatorsT, Result, ValidatableT, ValueT> {
    value: ValueT;
    validators: ValidatorsT;
    handler: Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>;
    validation: Function<[Result], ValidatableT>;
    validatables: Result;
    valid: boolean;
    validatable: ValidatableT;
    message: MessageT;
    messages: Result;
    constructor(value: ValueT, validators: ValidatorsT, handler: Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
}
