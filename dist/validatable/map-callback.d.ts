import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validatables from "./validatables/validatables";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
export declare type Interface<MessageT, ValidatorsT extends Record<any, Validator>, Result extends Record<any, Instance>, ValidatableT extends Validatable, ValueT extends RecordBase<ValidatorsT>> = Instance<ValueT, MessageT> & Validatable & Validatables<Result> & ValidatableContainer<ValidatableT> & {
    messages: Result;
} & {
    validation: (result: Result) => ValidatableT;
} & {
    map: (values: RecordParameter<ValidatorsT>, validators: ValidatorsT) => Result;
} & {
    validators: ValidatorsT;
};
export default class ValueCallback<MessageT = unknown, ValidatorsT extends Record<any, Validator> = Record<any, Validator>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableT extends Validatable = Validatable, ValueT extends RecordBase<ValidatorsT> = RecordBase<ValidatorsT>> implements Interface<MessageT, ValidatorsT, Result, ValidatableT, ValueT> {
    value: ValueT;
    validators: ValidatorsT;
    map: (values: RecordParameter<ValidatorsT>, validators: ValidatorsT) => Result;
    validation: (result: Result) => ValidatableT;
    validatables: Result;
    valid: boolean;
    validatable: ValidatableT;
    message: MessageT;
    messages: Result;
    constructor(value: ValueT, validators: ValidatorsT, map: (values: RecordParameter<ValidatorsT>, validators: ValidatorsT) => Result, validation: (result: Result) => ValidatableT, message: (result: Result) => MessageT);
}
