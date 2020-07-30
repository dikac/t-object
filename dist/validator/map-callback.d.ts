import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/record/record";
import RecordValidatable from "./return/record/record";
import OptionalInferReturn from "./return/record/partial";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
export declare type ValidationReturn<Container extends globalThis.Record<PropertyKey, Validator<RecordParameter<Container>>>> = RecordValidatable<Container> | OptionalInferReturn<Container>;
export declare type ValidatorReturn<Container extends globalThis.Record<PropertyKey, Validator<RecordParameter<Container>>>, Result extends ValidationReturn<Container>, Validatable extends ValidatableInterface> = ValueInterface<RecordParameter<Container>> & ValidatableInterface & Message & {
    validatables: Result;
} & {
    validatable: Validatable;
};
export default class MapCallback<MessageT = unknown, Container extends globalThis.Record<PropertyKey, Validator> = globalThis.Record<PropertyKey, Validator>, Result extends ValidationReturn<Container> = ValidationReturn<Container>, Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Result, Validatable>>, Validators<Container> {
    validators: Container;
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], Validatable>;
    message: Function<[Result], MessageT>;
    constructor(validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], Validatable>, message: Function<[Result], MessageT>);
    validate(argument: RecordParameter<Container>): ValidatorReturn<Container, Result, Validatable>;
}
