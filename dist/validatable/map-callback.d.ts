import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
export declare type Interface<MessageT, ValidatorsT extends Record<any, Validator>, Result extends Record<any, Instance>, ValidatableT extends Validatable, ValueT extends RecordBase<ValidatorsT>> = Instance<ValueT, MessageT> & Validatable & Validatables<Result> & ValidatableContainer<ValidatableT> & {
    messages: Result;
} & {
    validation: Function<[Result], ValidatableT>;
} & {
    map: Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>;
} & {
    validators: ValidatorsT;
};
export default class ValueCallback<MessageT = unknown, ValidatorsT extends Record<any, Validator> = Record<any, Validator>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableT extends Validatable = Validatable, ValueT extends RecordBase<ValidatorsT> = RecordBase<ValidatorsT>> implements Interface<MessageT, ValidatorsT, Result, ValidatableT, ValueT> {
    value: ValueT;
    validators: ValidatorsT;
    map: Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>;
    validation: Function<[Result], ValidatableT>;
    validatables: Result;
    valid: boolean;
    validatable: ValidatableT;
    message: MessageT;
    messages: Result;
    constructor(value: ValueT, validators: ValidatorsT, map: Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
}
