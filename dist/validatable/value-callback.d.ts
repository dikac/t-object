import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Record from "../record";
export default class ValueCallback<Val = unknown, MessageT = unknown, Container extends Record<Validator<Val>> = Record<Validator<Val>>, Result extends Partial<Record<ValidatableInterface>> = Partial<Record<ValidatableInterface>>, Validatable extends ValidatableInterface = ValidatableInterface> implements ValueInterface<Val>, ValidatableInterface, Validatables<Result>, Message<MessageT> {
    readonly value: Val;
    validators: Container;
    handler: Function<[Val, Container], Result>;
    validation: Function<[Result], Validatable>;
    readonly validatables: Result;
    readonly valid: boolean;
    readonly validatable: Validatable;
    readonly message: MessageT;
    readonly messages: Result;
    constructor(value: Val, validators: Container, handler: Function<[Val, Container], Result>, validation: Function<[Result], Validatable>, message: Function<[Result], MessageT>);
}
