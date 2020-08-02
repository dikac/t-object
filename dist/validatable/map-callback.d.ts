import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import RecordParameter from "../validator/parameter/base/record/infer";
import Record from "../record";
import RecordBase from "../validator/parameter/base/record/infer";
export default class ValueCallback<MessageT = unknown, Container extends globalThis.Record<PropertyKey, Validator> = globalThis.Record<PropertyKey, Validator>, Result extends Partial<Record<ValidatableInterface>> = Partial<Record<ValidatableInterface>>, Validatable extends ValidatableInterface = ValidatableInterface, V extends RecordBase<Container> = RecordBase<Container>> implements ValueInterface<V>, ValidatableInterface, Validatables<Result>, Message<MessageT> {
    value: V;
    validators: Container;
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], Validatable>;
    validatables: Result;
    valid: boolean;
    validatable: Validatable;
    message: MessageT;
    messages: Result;
    constructor(value: V, validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], Validatable>, message: Function<[Result], MessageT>);
}
